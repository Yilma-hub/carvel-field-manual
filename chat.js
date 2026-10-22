/* Ask the manual: a chat helper that answers only from the Carvel Field Manual.
   With Claude available (the claude.ai version), Claude writes the answer from the
   matching manual passages. Everywhere else (GitHub Pages, offline) a built-in
   search answers with the best passages and offers "did you mean" choices. */
(function(){
"use strict";
var PAGES = window.PAGES || [], G = window.GLOSS || {}, C = window.CALCS || {}, AM = window.AM || {};
var $ = function(s, r){ return (r||document).querySelector(s); };
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]; }); }
function L(){ return window.LANG === "am" ? "am" : "en"; }
function lsGet(k){ try { return JSON.parse(localStorage.getItem(k) || "null"); } catch(e){ return null; } }
function lsSet(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }

var T = {
  en:{ btn:"Ask the manual", title:"Ask the manual", sub:"Answers come only from this field manual.",
    ph:"Ask a question or type keywords",
    send:"Ask", clear:"Clear chat", close:"Close", thinking:"Looking through the manual...", writing:"Claude is writing...",
    modeAI:"Claude answers from the manual", modeLocal:"Manual search", useAI:"Use Claude",
    from:"From", readMore:"Open this section", term:"Glossary", calc:"Calculator", page:"Page",
    options:"Did you mean", optionsMore:"Other matches", close2:"Your words match more than one topic. This is the closest one. Tap another below if you meant something else.",
    notFound:"The manual does not cover that. The closest topics it does cover are below.", notFoundNone:"The manual does not cover that, and nothing close came up. Try other words, an abbreviation such as ET or DU, or a crop name.",
    spell:"Searched for", insteadOf:"instead of", sources:"Manual sections used",
    aiOff:"Claude is not available for this question, so this is the manual search answer.", aiDenied:"Claude was not allowed, so this is the manual search answer. You can allow it the next time you open the manual.",
    stop:"Stop", empty:"Ask anything about the manual. A few keywords work too.",
    examples:["pivot uniformity test","when does corn need the most water","checkbook method","saltwater intrusion","nozzle package","drip run time"],
    defn:"Definition"},
  am:{ btn:"መመሪያውን ይጠይቁ", title:"መመሪያውን ይጠይቁ", sub:"መልሶቹ የሚመጡት ከዚህ የመስክ መመሪያ ብቻ ነው።",
    ph:"ጥያቄ ወይም ቁልፍ ቃላት ይጻፉ",
    send:"ጠይቅ", clear:"ውይይቱን አጽዳ", close:"ዝጋ", thinking:"መመሪያውን እየፈለግሁ ነው...", writing:"Claude እየጻፈ ነው...",
    modeAI:"Claude ከመመሪያው ይመልሳል", modeLocal:"የመመሪያ ፍለጋ", useAI:"Claudeን ተጠቀም",
    from:"ምንጭ", readMore:"ይህን ክፍል ክፈት", term:"መዝገበ ቃላት", calc:"ማስያ", page:"ገጽ",
    options:"ይህን ማለትዎ ነው?", optionsMore:"ሌሎች ተዛማጅ ርዕሶች", close2:"ቃላትዎ ከአንድ በላይ ርዕስ ጋር ይዛመዳሉ። ይህ በጣም የቀረበው ነው። ሌላ ማለትዎ ከሆነ ከታች ይምረጡ።",
    notFound:"መመሪያው ይህን አይሸፍንም። የሚሸፍናቸው በጣም የቀረቡ ርዕሶች ከታች አሉ።", notFoundNone:"መመሪያው ይህን አይሸፍንም፤ የቀረበ ነገርም አልተገኘም። ሌላ ቃል፣ እንደ ET ወይም DU ያለ ምህጻረ ቃል፣ ወይም የሰብል ስም ይሞክሩ።",
    spell:"የተፈለገው", insteadOf:"በዚህ ፋንታ፡", sources:"ጥቅም ላይ የዋሉ የመመሪያ ክፍሎች",
    aiOff:"ለዚህ ጥያቄ Claude አልተገኘም፤ ስለዚህ ይህ የመመሪያ ፍለጋ መልስ ነው።", aiDenied:"Claude አልተፈቀደም፤ ስለዚህ ይህ የመመሪያ ፍለጋ መልስ ነው። መመሪያውን በሚቀጥለው ሲከፍቱ መፍቀድ ይችላሉ።",
    stop:"አቁም", empty:"ስለ መመሪያው ማንኛውንም ይጠይቁ። ጥቂት ቁልፍ ቃላትም ይሠራሉ።",
    examples:["የፒቮት ወጥነት ፍተሻ","በቆሎ ብዙ ውሃ የሚፈልገው መቼ ነው","የቼክቡክ ዘዴ","የጨው ውሃ ሰርጎ መግባት","የአፍንጫ ጥቅል","የጠብታ መስኖ የሩጫ ጊዜ"],
    defn:"ትርጉም"}
};
function t(k){ return T[L()][k]; }

/* ---------- Text helpers ---------- */
function strip(s){
  return String(s || "")
    .replace(/\{\{[^}]+\}\}/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^\s*\|?\s*:?-{2,}.*$/gm, " ")
    .replace(/[`*_>#]/g, " ")
    .replace(/\|/g, " ; ")
    .replace(/[ \t]+/g, " ");
}
var STOP = {};
("a an the and or of to in on for with by at from is are was were be been it its this that these those how what when where why which who do does did can could should would will i me my we our you your as if not no than then so into about over under per vs need needs most much many best good tell explain mean means there some any also more work works help get want know".split(" ")).forEach(function(w){ STOP[w] = 1; });
var ETH = /[ሀ-፿]/;
function stemAm(w){
  var x = w.replace(/^(?:እንደ|ስለ|ወደ|የ|ለ|በ|ከ|ና)(?=[\u1200-\u137F]{2})/, "");
  x = x.replace(/(?:ዎችን|ዎቹን|ዎቹ|ዎች|ውን|ዋን|ን|ም|ና)$/, function(m, i){ return i >= 2 ? "" : m; });
  return x || w;
}
function stem(w){
  if (ETH.test(w)) return stemAm(w);
  if (/\d/.test(w) || w.length < 4) return w;
  if (w.length > 5 && /ies$/.test(w)) return w.slice(0, -3) + "y";
  if (w.length > 6 && /ing$/.test(w)) return w.slice(0, -3).replace(/e$/, "");
  if (w.length > 6 && /ed$/.test(w) && !/(shed|eed)$/.test(w)) return w.slice(0, -2).replace(/e$/, "");
  if (w.length > 6 && /e$/.test(w)) return w.slice(0, -1);
  if (w.length > 4 && /(ches|shes|sses|xes)$/.test(w)) return w.slice(0, -2);
  if (/s$/.test(w) && !/ss$/.test(w)) return w.slice(0, -1);
  return w;
}
function toks(s){
  var out = [];
  String(s || "").toLowerCase().replace(/[፡-፨]/g, " ").split(/[^0-9a-zሀ-፿.]+/).forEach(function(w){
    w = w.replace(/^\.+|\.+$/g, ""); if (!w) return;
    if (w.indexOf(".") > 0 && !/^\d+\.\d+$/.test(w)) { w.split(".").forEach(function(x){ if (x && !STOP[x]) out.push(stem(x)); }); return; }
    if (STOP[w]) return; out.push(stem(w));
  });
  return out;
}
function sentences(s){
  return strip(s).replace(/([.!?\u1362])\s+/g, "$1\n").split(/\n+/).map(function(x){ return x.replace(/^\s*(?:[-;]|\d+[.)])\s+/, "").trim(); }).filter(function(x){ return x.length > 18; });
}

/* ---------- Index ---------- */
var DOCS = [], POST = {}, VOCAB = [], AVG = 1, ALIAS = {};
function amPage(id){ return (AM.pages && AM.pages[id]) || {}; }
function build(){
  PAGES.forEach(function(p){
    var a = amPage(p.id);
    (p.sections || []).forEach(function(s, i){
      var as = (a.sections || [])[i] || [];
      var calcs = []; (s[1] + s[2]).replace(/\{\{calc:([^}]+)\}\}/g, function(_, id){ calcs.push(id.trim()); });
      DOCS.push({type:"sec", pid:p.id, si:i,
        page:{en:p.title, am:a.title || p.title}, head:{en:s[0], am:as[0] || s[0]},
        plain:{en:s[1], am:as[1] || s[1]}, tech:{en:s[2], am:as[2] || s[2]}, calcs:calcs});
    });
  });
  Object.keys(G).forEach(function(k){
    var g = G[k], a = (AM.gloss && AM.gloss[k]) || {};
    var al = (g.a || []).concat(a.a || []);
    al.concat([g.t]).forEach(function(x){ var w = String(x).toLowerCase().trim(); if (w) (ALIAS[w] = ALIAS[w] || []).push(k); });
    DOCS.push({type:"term", k:k, head:{en:g.t, am:a.t || g.t}, plain:{en:g.s || "", am:a.s || g.s || ""}, tech:{en:g.f || "", am:a.f || g.f || ""}, alias:al});
  });
  Object.keys(C).forEach(function(id){
    var c = C[id], a = (AM.calc && AM.calc[id]) || {};
    var where = null; DOCS.forEach(function(d){ if (!where && d.type === "sec" && d.calcs.indexOf(id) >= 0) where = d; });
    var ins = (c.ins || []).map(function(x){ return x.l || x.label || x[1] || ""; }).join(", ");
    DOCS.push({type:"calc", id:id, where:where, head:{en:c.t, am:a.t || c.t}, plain:{en:(c.n || "") + " " + ins, am:(a.n || c.n || "") + " " + ins}, tech:{en:"", am:""}});
  });
  var total = 0;
  DOCS.forEach(function(d, di){
    var tf = {};
    function add(text, w){ toks(text).forEach(function(x){ tf[x] = (tf[x] || 0) + w; }); }
    add(d.head.en + " " + d.head.am, 4);
    if (d.page) add(d.page.en + " " + d.page.am, 1.5);
    if (d.alias) add(d.alias.join(" "), 4);
    add(strip(d.plain.en) + " " + strip(d.plain.am), 1);
    add(strip(d.tech.en) + " " + strip(d.tech.am), 0.8);
    var len = 0; Object.keys(tf).forEach(function(x){ len += tf[x]; (POST[x] = POST[x] || []).push([di, tf[x]]); });
    d.len = len; total += len;
  });
  AVG = total / Math.max(1, DOCS.length);
  VOCAB = Object.keys(POST);
}

function edit(a, b, max){
  if (Math.abs(a.length - b.length) > max) return max + 1;
  var prev = [], cur, i, j;
  for (j = 0; j <= b.length; j++) prev[j] = j;
  for (i = 1; i <= a.length; i++){
    cur = [i]; var best = i;
    for (j = 1; j <= b.length; j++){ cur[j] = Math.min(prev[j] + 1, cur[j-1] + 1, prev[j-1] + (a[i-1] === b[j-1] ? 0 : 1)); if (cur[j] < best) best = cur[j]; }
    if (best > max) return max + 1; prev = cur;
  }
  return prev[b.length];
}

/* Expand each query word into index terms with weights. */
function expand(q){
  var words = toks(q), terms = {}, fixes = [], unknown = 0;
  function put(x, w){ if (POST[x]) terms[x] = Math.max(terms[x] || 0, w); }
  var low = q.toLowerCase().trim();
  if (ALIAS[low]) ALIAS[low].forEach(function(k){ toks(G[k].t).forEach(function(x){ put(x, 0.9); }); });
  words.forEach(function(w){
    var hit = false;
    if (POST[w]){ put(w, 1); hit = true; }
    if (ALIAS[w]) ALIAS[w].forEach(function(k){ toks(G[k].t).forEach(function(x){ put(x, 0.7); }); hit = true; });
    var eth = ETH.test(w);
    if (w.length >= (eth ? 2 : 4) && (eth || !POST[w] || w.length >= 5)){
      var room = eth ? 4 : (POST[w] ? 3 : 5);
      VOCAB.forEach(function(v){
        if (v === w) return;
        if (v.indexOf(w) === 0 && v.length - w.length <= room){ put(v, eth ? 0.85 : (POST[w] ? 0.5 : 0.6)); hit = true; }
        else if (eth && w.length >= 3 && w.indexOf(v) === 0 && v.length >= 2 && w.length - v.length <= 2){ put(v, 0.7); hit = true; }
      });
    }
    if (!hit && !eth && w.length >= 4 && !/\d/.test(w)){
      var best = null, bd = 9, max = w.length <= 6 ? 1 : 2;
      VOCAB.forEach(function(v){ if (ETH.test(v)) return; var d = edit(w, v, max); if (d <= max && (d < bd || (d === bd && POST[v].length > POST[best].length))){ bd = d; best = v; } });
      if (best){ put(best, 0.8); fixes.push([w, best]); hit = true; }
    }
    if (!hit) unknown++;
  });
  return {terms:terms, fixes:fixes, words:words, unknown:unknown};
}

function search(q){
  var ex = expand(q), sc = {}, N = DOCS.length;
  Object.keys(ex.terms).forEach(function(x){
    var p = POST[x], idf = Math.log(1 + (N - p.length + 0.5) / (p.length + 0.5)), w = ex.terms[x];
    p.forEach(function(e){ var d = DOCS[e[0]], tf = e[1]; sc[e[0]] = (sc[e[0]] || 0) + w * idf * (tf * 2.2) / (tf + 1.2 * (0.25 + 0.75 * d.len / AVG)); });
  });
  var nT = Object.keys(ex.terms).length;
  var low = q.toLowerCase().trim();
  if (ALIAS[low]) ALIAS[low].forEach(function(k){ DOCS.forEach(function(d, di){ if (d.type === "term" && d.k === k) sc[di] = (sc[di] || 0) * 1.6 + 6; }); });
  var res = Object.keys(sc).map(function(i){ return {d:DOCS[i], i:+i, s:sc[i]}; }).sort(function(a, b){ return b.s - a.s; });
  return {res:res, ex:ex, nT:nT};
}

/* ---------- Rendering helpers ---------- */
function docLabel(d){
  var l = L();
  if (d.type === "sec") return d.page[l] + " › " + d.head[l];
  if (d.type === "term") return t("term") + ": " + d.head[l];
  return t("calc") + ": " + d.head[l];
}
function docLink(d, text){
  if (d.type === "term") return '<a href="#" class="gl" data-g="' + esc(d.k) + '">' + esc(text || docLabel(d)) + '</a>';
  var w = d.type === "calc" ? d.where : d;
  if (!w) return '<a href="#calculators" data-close="1">' + esc(text || docLabel(d)) + '</a>';
  return '<a href="#' + esc(w.pid) + '" data-go="' + esc(w.pid) + '" data-s="s' + w.si + '">' + esc(text || docLabel(d)) + '</a>';
}
function bestSentences(d, terms, n){
  var l = L(), all = sentences(d.plain[l]).map(function(x){ return [x, 0]; }).concat(sentences(d.tech[l]).map(function(x){ return [x, 1]; }));
  var scored = all.map(function(x, i){
    var tk = toks(x[0]), hit = 0, seen = {};
    tk.forEach(function(w){ if (terms[w] && !seen[w]){ hit += terms[w]; seen[w] = 1; } });
    return {i:i, s:hit - x[1] * 0.15 + (i < 2 ? 0.1 : 0), x:x[0]};
  });
  var top = scored.slice().sort(function(a, b){ return b.s - a.s; }).slice(0, n).filter(function(x){ return x.s > 0.05; });
  if (!top.length) top = scored.slice(0, Math.min(2, scored.length));
  return top.sort(function(a, b){ return a.i - b.i; }).map(function(x){ return x.x.length > 420 ? x.x.slice(0, 400).replace(/\s\S*$/, "") + " ..." : x.x; });
}
function optionChips(list, label){
  if (!list.length) return "";
  return '<div class="ch-opts"><div class="ch-ol">' + esc(label) + '</div>' + list.map(function(r){ return '<button class="ch-chip" data-doc="' + r.i + '">' + esc(docLabel(r.d)) + '</button>'; }).join("") + '</div>';
}
function pickOptions(res, top){
  var out = [], seen = {}; seen[keyOf(top.d)] = 1;
  for (var i = 0; i < res.length && out.length < 4; i++){
    var r = res[i], k = keyOf(r.d); if (seen[k] || r.s < res[0].s * 0.22) continue; seen[k] = 1; out.push(r);
  }
  return out;
}
function keyOf(d){ return d.type === "sec" ? d.pid : d.type + ":" + (d.k || d.id); }

function weak(S){ var w = S.ex.words.length; return !S.res.length || S.res[0].s < 0.8 || (w && S.ex.unknown / w >= 0.5); }
function localAnswer(q, S, note){
  var res = S.res, l = L();
  if (weak(S)){
    var near = res.slice(0, 4);
    return (note ? '<p class="ch-note">' + esc(note) + '</p>' : '') + '<p>' + esc(near.length ? t("notFound") : t("notFoundNone")) + '</p>' + optionChips(near, t("optionsMore"));
  }
  var top = res[0];
  var termTop = null;
  if (top.d.type === "term"){
    for (var j = 1; j < Math.min(5, res.length); j++){ if (res[j].d.type === "sec" && res[j].s >= top.s * 0.75){ var tt = top; top = res[j]; res = [top].concat(res.filter(function(r){ return r !== top; })); return renderDoc(top, S, note, tt, pickOptions(res, top).filter(function(r){ return r !== tt; }), false); } }
  }
  if (S.ex.words.length <= 3) for (var i = 0; i < Math.min(4, res.length); i++){ if (res[i].d.type === "term" && res[i].s >= top.s * 0.5){ termTop = res[i]; break; } }
  return renderDoc(top, S, note, termTop, pickOptions(res, top), res.length > 1 && res[1].s > top.s * 0.8 && keyOf(res[1].d) !== keyOf(top.d));
}
function renderDoc(r, S, note, termTop, opts, close){
  var l = L(), d = r.d, h = "";
  if (note) h += '<p class="ch-note">' + esc(note) + '</p>';
  if (S && S.ex.fixes.length) h += '<p class="ch-note">' + S.ex.fixes.map(function(f){ return esc(t("spell")) + ' "' + esc(f[1]) + '" ' + esc(t("insteadOf")) + ' "' + esc(f[0]) + '"'; }).join(". ") + '</p>';
  if (close) h += '<p class="ch-note">' + esc(t("close2")) + '</p>';
  if (termTop && termTop !== r){
    h += '<p><span class="ch-k">' + esc(t("defn")) + '</span> ' + docLink(termTop.d, termTop.d.head[l]) + ': ' + esc(strip(termTop.d.plain[l]).trim()) + '</p>';
  }
  var terms = S ? S.ex.terms : {};
  if (d.type === "term"){
    h += '<p><span class="ch-k">' + esc(t("term")) + '</span> ' + docLink(d, d.head[l]) + '</p><p>' + esc(strip(d.plain[l]).trim()) + '</p>';
    var ft = strip(d.tech[l]).trim(); if (ft) h += '<p>' + esc(ft.length > 700 ? ft.slice(0, 680).replace(/\s\S*$/, "") + " ..." : ft) + '</p>';
  } else if (d.type === "calc"){
    h += '<p><span class="ch-k">' + esc(t("calc")) + '</span> ' + esc(d.head[l]) + '</p>';
    var n = strip(d.plain[l]).trim(); if (n) h += '<p>' + esc(n) + '</p>';
    h += '<p>' + docLink(d, t("readMore")) + '</p>';
  } else {
    h += '<p class="ch-from">' + esc(t("from")) + ': ' + docLink(d) + '</p>';
    h += '<ul class="ch-pts">' + bestSentences(d, terms, 3).map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>';
    d.calcs.slice(0, 2).forEach(function(id){ var c = DOCS.filter(function(x){ return x.type === "calc" && x.id === id; })[0]; if (c) h += '<p class="ch-from">' + esc(t("calc")) + ': ' + docLink(c, c.head[l]) + '</p>'; });
    h += '<p>' + docLink(d, t("readMore") + " →") + '</p>';
  }
  if (opts) h += optionChips(opts, close ? t("options") : t("optionsMore"));
  return h;
}

/* ---------- Claude mode ---------- */
var sample = null, aiDenied = false, useAI = lsGet("cfm-chat-ai") !== false, ctl = null;
(function(){
  try {
    if (window.claude && typeof window.claude.use === "function"){
      window.claude.use("sample").then(function(s){ sample = s || null; paintMode(); }, function(){ sample = null; });
    }
  } catch(e){}
})();

function passage(d){
  var l = L(), txt;
  if (d.type === "sec") txt = "Page: " + d.page.en + " | Section: " + d.head.en + "\nPlain talk:\n" + strip(d.plain.en).trim() + "\nTechnical detail:\n" + strip(d.tech.en).trim();
  else if (d.type === "term") txt = "Glossary term: " + d.head.en + (d.alias && d.alias.length ? " (also: " + d.alias.filter(function(a){ return !ETH.test(a); }).join(", ") + ")" : "") + "\nShort: " + strip(d.plain.en).trim() + "\nFull: " + strip(d.tech.en).trim();
  else txt = "Calculator: " + d.head.en + "\n" + strip(d.plain.en).trim();
  if (l === "am" && d.type !== "calc"){
    var am = (d.type === "sec" ? d.page.am + " | " + d.head.am + "\n" : d.head.am + "\n") + strip(d.plain.am).trim();
    txt += "\nAmharic version of the plain talk:\n" + am;
  }
  txt = txt.replace(/\n{2,}/g, "\n");
  return txt.length > 3200 ? txt.slice(0, 3200) + " ..." : txt;
}

var HIST = [];
function buildPrompt(q, docs){
  var lang = L() === "am" ? "Amharic (use Ethiopic script; keep units like in, ft, gpm, psi, ac, program codes and names in Latin script)" : "English";
  var ctx = docs.map(function(d, i){ return "[P" + (i + 1) + "] " + passage(d); }).join("\n\n");
  var hist = HIST.slice(-2).map(function(h){ return "Earlier question: " + h.q + "\nEarlier answer (short): " + h.a.slice(0, 500); }).join("\n");
  return "You are the help desk inside the Carvel Field Manual, a personal irrigation and precision agriculture manual for an Extension Agricultural Engineer at the University of Delaware Carvel Research and Education Center, Georgetown, Delaware.\n\n" +
    "Rules:\n" +
    "1. Answer ONLY from the manual passages below. Do not add facts, numbers, standards or advice that are not in them. If the passages do not cover the question, say so in one sentence and name the closest topics that are covered.\n" +
    "2. The user may type a full question or only keywords. If the words could mean more than one thing in the manual, start with one short line saying which meaning you answered, then answer it.\n" +
    "3. Start with a direct answer in plain words (2 to 4 sentences), then explain the key technical details from the passages (short bullet list, numbers and units exactly as written).\n" +
    "4. Cite passages inline as [P1], [P2] right after the facts they support.\n" +
    "5. Write in " + lang + ". Plain style: no bold, no em dashes, no filler, no closing pleasantries.\n" +
    "6. After the answer write a line that is exactly OPTIONS: and then 2 to 4 lines, each formatted as\n- short label :: a full follow-up question\nThe options must be other things the user may have meant or natural next questions, and each must be answerable from the manual. Write them in the same language as the answer.\n\n" +
    (hist ? "Conversation so far:\n" + hist + "\n\n" : "") +
    "Manual passages:\n" + ctx + "\n\nUser: " + q;
}
function mdSafe(s){ var h = esc(s); try { return window.marked ? window.marked.parse(h, {mangle:false, headerIds:false}) : "<p>" + h + "</p>"; } catch(e){ return "<p>" + h + "</p>"; } }
function splitAI(text){
  var i = text.search(/^\s*OPTIONS:\s*$/m); if (i < 0) i = text.indexOf("OPTIONS:");
  return i < 0 ? {body:text, opts:""} : {body:text.slice(0, i), opts:text.slice(i).replace(/^\s*OPTIONS:\s*/, "")};
}
function linkRefs(html, docs){
  return html.replace(/\[P(\d+)\](?:\s*,?\s*\[P(\d+)\])*/g, function(m){
    return m.replace(/\[P(\d+)\]/g, function(_, n){ var d = docs[+n - 1]; return d ? '<sup class="ch-ref">' + docLink(d, n) + '</sup>' : ""; });
  });
}

/* ---------- UI ---------- */
var css = document.createElement("style");
css.textContent =
".ch-fab{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:45;display:flex;align-items:center;gap:8px;border:0;border-radius:999px;background:var(--accent);color:#fff;padding:0 18px;height:48px;font:600 15px var(--f-body);box-shadow:var(--shadow);cursor:pointer}" +
".ch-fab svg{width:20px;height:20px}" +
".ch{position:fixed;right:0;bottom:0;top:calc(var(--top) + env(safe-area-inset-top,0px));width:min(430px,100vw);z-index:52;background:var(--surface);border-left:1px solid var(--line);box-shadow:var(--shadow);display:flex;flex-direction:column}" +
".ch[hidden]{display:none}" +
".ch-head{padding:12px 14px 10px;border-bottom:1px solid var(--line);display:flex;gap:10px;align-items:flex-start}" +
".ch-head h2{margin:0;font:700 20px var(--f-display);color:var(--ink)}" +
".ch-head p{margin:2px 0 0;font-size:13px;color:var(--muted)}" +
".ch-head .x{margin-left:auto;border:1px solid var(--line);background:transparent;color:var(--ink);border-radius:8px;height:34px;min-width:34px;cursor:pointer;font-size:18px}" +
".ch-mode{display:flex;align-items:center;gap:8px;padding:6px 14px;font-size:12.5px;color:var(--muted);border-bottom:1px solid var(--line)}" +
".ch-mode .dot{width:8px;height:8px;border-radius:50%;background:var(--line-strong)}.ch-mode.ai .dot{background:var(--good)}" +
".ch-mode label[hidden]{display:none}.ch-mode .clr{margin-left:auto}.ch-mode label:not([hidden])+.clr{margin-left:12px}.ch-mode label{margin-left:auto;display:flex;gap:6px;align-items:center;cursor:pointer}.ch-mode button{border:0;background:none;color:var(--accent);cursor:pointer;font-size:12.5px;padding:0}" +
".ch-log{flex:1;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:12px;overscroll-behavior:contain}" +
".ch-m{max-width:100%;font-size:15px;line-height:1.55;color:var(--ink)}" +
".ch-m p{margin:0 0 8px}.ch-m ul{margin:0 0 8px;padding-left:20px}.ch-m li{margin:0 0 4px}" +
".ch-u{align-self:flex-end;background:var(--accent);color:#fff;padding:8px 12px;border-radius:14px 14px 4px 14px;max-width:85%}" +
".ch-b{background:var(--bg);border:1px solid var(--line);padding:10px 12px;border-radius:4px 14px 14px 14px}" +
".ch-b a{color:var(--accent)}" +
".ch-note{font-size:13px;color:var(--muted);font-style:italic}" +
".ch-from{font-size:13px;color:var(--muted)}" +
".ch-k{display:inline-block;font:700 11.5px var(--f-body);letter-spacing:.06em;text-transform:uppercase;color:var(--gold);margin-right:4px}" +
"body.lang-am .ch-k{letter-spacing:0;text-transform:none}" +
".ch-ref{font-size:11px;margin-left:1px}.ch-ref a{text-decoration:none;border:1px solid var(--line-strong);border-radius:6px;padding:0 4px}" +
".ch-opts{margin-top:6px;display:flex;flex-wrap:wrap;gap:6px}.ch-ol{width:100%;font-size:12.5px;color:var(--muted)}" +
".ch-chip{border:1px solid var(--accent);background:var(--surface);color:var(--accent);border-radius:999px;padding:6px 11px;font:500 13.5px var(--f-body);cursor:pointer;text-align:left}" +
".ch-chip:hover{background:var(--accent-soft)}" +
".ch-src{font-size:12.5px;color:var(--muted);margin-top:6px}.ch-src a{margin-right:8px}" +
".ch-form{display:flex;gap:8px;padding:10px 12px calc(10px + env(safe-area-inset-bottom,0px));border-top:1px solid var(--line);background:var(--surface)}" +
".ch-form textarea{flex:1;resize:none;border:1px solid var(--line-strong);border-radius:10px;padding:9px 11px;font:15px var(--f-body);color:var(--ink);background:var(--surface);min-height:44px;max-height:120px}" +
".ch-form button{border:0;border-radius:10px;background:var(--accent);color:#fff;font:600 15px var(--f-body);padding:0 16px;cursor:pointer}" +
".ch-form button.stop{background:var(--bad)}" +
".ch-empty{color:var(--muted);font-size:14px}" +
".ch-busy{color:var(--muted);font-size:14px;font-style:italic}" +
"@media (max-width:600px){.ch{top:0;width:100vw;border-left:0}.ch-fab span{display:none}.ch-fab{padding:0;width:52px;justify-content:center}}" +
"@media (min-width:1180px){body.ch-open .wrap{margin-right:440px}}" +
"@media print{.ch,.ch-fab{display:none}}";
document.head.appendChild(css);

var fab = document.createElement("button");
fab.className = "ch-fab"; fab.type = "button";
fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3"/><path d="M12 16.5h.01"/></svg><span></span>';
document.body.appendChild(fab);

var box = document.createElement("section");
box.className = "ch"; box.hidden = true; box.setAttribute("aria-label", "Ask the manual");
box.innerHTML = '<div class="ch-head"><div><h2></h2><p></p></div><button class="x" type="button">×</button></div>' +
  '<div class="ch-mode"><span class="dot"></span><span class="ml"></span><label hidden><input type="checkbox"> <span class="ua"></span></label><button type="button" class="clr"></button></div>' +
  '<div class="ch-log" aria-live="polite"></div>' +
  '<form class="ch-form"><textarea rows="1"></textarea><button type="submit"></button></form>';
document.body.appendChild(box);
var log = $(".ch-log", box), ta = $("textarea", box), sendB = $(".ch-form button", box), aiBox = $(".ch-mode input", box);

function paintMode(){
  var ai = !!sample && useAI && !aiDenied, m = $(".ch-mode", box);
  m.classList.toggle("ai", ai);
  $(".ml", m).textContent = ai ? t("modeAI") : t("modeLocal");
  $("label", m).hidden = !sample || aiDenied;
  aiBox.checked = useAI;
}
function paintUI(){
  $("span", fab).textContent = t("btn"); fab.setAttribute("aria-label", t("btn"));
  $("h2", box).textContent = t("title"); $(".ch-head p", box).textContent = t("sub");
  $(".x", box).setAttribute("aria-label", t("close"));
  $(".ua", box).textContent = t("useAI"); $(".clr", box).textContent = t("clear");
  ta.placeholder = t("ph"); if (!busy) sendB.textContent = t("send");
  paintMode();
  if (!log.children.length || log.querySelector(".ch-empty")) showEmpty();
}
function showEmpty(){
  log.innerHTML = '<div class="ch-m ch-empty"><p>' + esc(t("empty")) + '</p><div class="ch-opts">' + t("examples").map(function(x){ return '<button class="ch-chip" data-q="' + esc(x) + '">' + esc(x) + '</button>'; }).join("") + '</div></div>';
}
function save(){
  var items = [].slice.call(log.querySelectorAll(".ch-m:not(.ch-empty):not(.ch-busy)")).slice(-40).map(function(el){ return {u:el.classList.contains("ch-u"), h:el.innerHTML}; });
  lsSet("cfm-chat", {items:items, hist:HIST.slice(-4)});
}
function restore(){
  var s = lsGet("cfm-chat"); if (!s || !s.items || !s.items.length) return false;
  log.innerHTML = ""; s.items.forEach(function(it){ var el = document.createElement("div"); el.className = "ch-m " + (it.u ? "ch-u" : "ch-b"); el.innerHTML = it.h; log.appendChild(el); });
  HIST = s.hist || []; return true;
}
function add(cls, html){
  var e = log.querySelector(".ch-empty"); if (e) e.remove();
  var el = document.createElement("div"); el.className = "ch-m " + cls; el.innerHTML = html; log.appendChild(el);
  log.scrollTop = log.scrollHeight; return el;
}
function open(){ box.hidden = false; fab.hidden = true; document.body.classList.add("ch-open"); if (!built){ build(); built = true; } setTimeout(function(){ ta.focus(); }, 30); log.scrollTop = log.scrollHeight; }
function close(){ box.hidden = true; fab.hidden = false; document.body.classList.remove("ch-open"); }
var built = false, busy = false;

function ask(q){
  q = String(q || "").trim(); if (!q || busy) return;
  if (!built){ build(); built = true; }
  add("ch-u", esc(q));
  var S = search(q);
  var ai = !!sample && useAI && !aiDenied && !weak(S);
  if (!ai){
    var el = add("ch-b", localAnswer(q, S, sample && useAI && aiDenied ? t("aiDenied") : ""));
    HIST.push({q:q, a:el.textContent}); save(); log.scrollTop = el.offsetTop - 8; return;
  }
  /* Claude: hand it the best passages, deduplicated */
  var docs = [], seen = {};
  S.res.forEach(function(r){ if (docs.length >= 8) return; var k = r.d.type === "sec" ? r.d.pid + "/" + r.d.si : keyOf(r.d); if (seen[k] || r.s < S.res[0].s * 0.15) return; seen[k] = 1; docs.push(r.d); });
  var el = add("ch-b", '<p class="ch-busy">' + esc(t("thinking")) + '</p>');
  busy = true; sendB.textContent = t("stop"); sendB.classList.add("stop");
  ctl = new AbortController();
  var started = false;
  sample(buildPrompt(q, docs), {signal:ctl.signal, cache:false, onText:function(o){
    if (!started){ started = true; }
    el.innerHTML = linkRefs(mdSafe(splitAI(o.text).body), docs);
    if (log.scrollHeight - log.scrollTop - log.clientHeight < 140) log.scrollTop = log.scrollHeight;
  }}).then(function(r){
    var parts = splitAI(r.text || "");
    var h = linkRefs(mdSafe(parts.body), docs);
    var used = []; (parts.body.match(/\[P(\d+)\]/g) || []).forEach(function(m){ var n = +m.slice(2, -1); if (docs[n-1] && used.indexOf(n) < 0) used.push(n); });
    if (used.length) h += '<div class="ch-src">' + esc(t("sources")) + ': ' + used.sort(function(a, b){ return a - b; }).map(function(n){ return docLink(docs[n-1], n + ". " + docLabel(docs[n-1])); }).join(" ") + '</div>';
    var opts = parts.opts.split(/\n/).map(function(x){ return x.replace(/^\s*[-*\d.)]+\s*/, "").trim(); }).filter(Boolean).slice(0, 4).map(function(x){ var p = x.split("::"); return {l:(p[0] || "").trim(), q:(p[1] || p[0] || "").trim()}; }).filter(function(o){ return o.l; });
    if (opts.length) h += '<div class="ch-opts"><div class="ch-ol">' + esc(t("options")) + '</div>' + opts.map(function(o){ return '<button class="ch-chip" data-q="' + esc(o.q) + '">' + esc(o.l) + '</button>'; }).join("") + '</div>';
    el.innerHTML = h;
    HIST.push({q:q, a:parts.body});
  }, function(e){
    var code = e && e.code;
    if (code === "cancelled"){ el.innerHTML = e.text ? linkRefs(mdSafe(splitAI(e.text).body), docs) : '<p class="ch-note">…</p>'; return; }
    if (code === "not_granted"){ aiDenied = true; paintMode(); }
    el.innerHTML = localAnswer(q, S, code === "not_granted" ? t("aiDenied") : t("aiOff"));
    HIST.push({q:q, a:el.textContent});
  }).then(function(){ busy = false; sendB.textContent = t("send"); sendB.classList.remove("stop"); save(); });
}

fab.addEventListener("click", open);
$(".x", box).addEventListener("click", close);
$(".clr", box).addEventListener("click", function(){ HIST = []; showEmpty(); lsSet("cfm-chat", null); });
aiBox.addEventListener("change", function(){ useAI = aiBox.checked; lsSet("cfm-chat-ai", useAI); paintMode(); });
$(".ch-form", box).addEventListener("submit", function(e){ e.preventDefault(); if (busy){ if (ctl) ctl.abort(); return; } var q = ta.value; ta.value = ""; ta.style.height = ""; ask(q); });
ta.addEventListener("keydown", function(e){ if (e.key === "Enter" && !e.shiftKey && !e.isComposing){ e.preventDefault(); $(".ch-form", box).requestSubmit ? $(".ch-form", box).requestSubmit() : $(".ch-form button", box).click(); } });
ta.addEventListener("input", function(){ ta.style.height = ""; ta.style.height = Math.min(120, ta.scrollHeight) + "px"; });
log.addEventListener("click", function(e){
  var c = e.target.closest(".ch-chip");
  if (c){
    if (c.hasAttribute("data-q")) ask(c.getAttribute("data-q"));
    else if (c.hasAttribute("data-doc")){ var r = {d:DOCS[+c.getAttribute("data-doc")], i:+c.getAttribute("data-doc")}; if (r.d){ add("ch-u", esc(docLabel(r.d))); add("ch-b", renderDoc(r, null, "", null, null, false)); save(); } }
    return;
  }
  var a = e.target.closest("a[data-go]");
  if (a){
    e.preventDefault();
    var pid = a.getAttribute("data-go"), sid = a.getAttribute("data-s");
    if (window.innerWidth <= 900) close();
    var go = function(){ var tEl = document.getElementById(sid); if (tEl) tEl.scrollIntoView({block:"start"}); };
    if (location.hash.slice(1) === pid) go(); else { location.hash = pid; setTimeout(go, 120); }
    return;
  }
  var b = e.target.closest("a[data-close]"); if (b && window.innerWidth <= 900) close();
});
document.addEventListener("keydown", function(e){ if (e.key === "Escape" && !box.hidden && document.getElementById("panel").hidden) close(); });
/* follow the English / Amharic switch */
document.addEventListener("click", function(e){ if (e.target.closest(".lang button")) setTimeout(paintUI, 0); });

if (!restore()) showEmpty();
paintUI();
window.CFMChat = {ask:ask, open:open, search:function(q){ if (!built){ build(); built = true; } return search(q); }};
})();
