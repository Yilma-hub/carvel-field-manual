(function(){
"use strict";
var PAGES = window.PAGES || [], G = window.GLOSS || {}, Q = window.QUOTES || {}, F = window.FIGS || {}, C = window.CALCS || {};
var GROUPS = window.GROUPS || [];
var AM = window.AM || {};            /* Amharic data: ui, groups, pages, gloss, quotes, figcap, calc */
var $ = function(s, r){ return (r||document).querySelector(s); };
var $$ = function(s, r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); };
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]; }); }
function md(s){ s = (s||"").replace(/^\n+/,""); try { return window.marked ? window.marked.parse(s, {mangle:false, headerIds:false}) : "<p>"+esc(s)+"</p>"; } catch(e){ return "<p>"+esc(s)+"</p>"; } }
function store(k, v){ try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch(e){ return null; } }
var pageById = {}; PAGES.forEach(function(p, i){ p._i = i; pageById[p.id] = p; });

/* ---------- Language ---------- */
var LANG = store("cfm-lang") === "am" ? "am" : "en"; window.LANG = LANG;
var UI_EN = {
  plain:"Plain talk", tech:"Technical detail", voices:"From the field: Delaware and Maryland voices", orig:"Original English", calc:"Calculator",
  hint:"Click for the full entry", glossary:"Glossary", back:"Back", close:"Close", also:"Also written: ", related:"Related terms", uses:"Pages that use this term",
  start:"Start here", allcalc:"All calculators", glossab:"Glossary and abbreviations", voicesNav:"Voices from the field", reference:"Reference", sources:"Sources",
  prev:"Previous", next:"Next", search:"Search pages, terms, calculators", noMatch:"No matches. Try a shorter word.", term:"Term", page:"Page", calculator:"Calculator",
  both:"Both", plainB:"Plain", techB:"Technical", calcBtn:"Calculators", glossBtn:"Glossary", brand:"Carvel Field Manual", brandSub:"Irrigation and precision ag",
  homeCrumb:"Delaware irrigation and precision agriculture", homeTitle:"Your field manual for the Carvel job",
  homeLede:"Every page has two versions side by side: a plain-talk explanation on the left and the full technical detail on the right. Underlined words open a definition when you point at them; click one for the full entry in the right-hand panel. Calculators sit right where you need them, and every page carries real quotes from Delaware and Maryland farmers, researchers and Extension people.",
  tTools:"Tools", tCalcD:"Speed charts, uniformity, drip run time, fertigation, pump cost, pipe friction, budgets and more.", tRef:"Reference", tGlossD:" terms with short and full definitions.",
  tVoices:"Voices", tQuotesT:"Quotes from the field", tQuotesD:" direct quotes from news, Extension and research, with links.", tFigs:"Figures", tStagesT:"Crop growth stages", tStagesD:"Corn, soybean, small grains, beans and watermelon, with water needs by stage.",
  calcLede:"Change any number and the results update. Default values are worked examples from the manual, so you can check the method against the text.",
  glossLede:"Click a term for the full entry. Abbreviations are listed under both the full name and the short form.", filter:"Filter terms, for example ET, pivot, aquifer",
  quotesTitle:"Quotes from Delaware and Maryland", quotesLede:"Direct quotes from farmers, Extension staff, researchers and agency leaders, 2010 to 2026, each linked to its source. Quotes appear word for word; where a quote was shortened, the cut is marked with an ellipsis.",
  sourcesLede:"Every quote and figure in this manual traces to one of these pages. Standards, staff names, prices and grant terms change, so check the current version before you rely on a number.",
  nTitle:"My notes", nMy:"My notes", nAdd:"+ Add note", nEdit:"Edit note", nPh:"Write your note for this section. It saves as you type.", nSaved:"Saved", nSaving:"Saving...", nLocal:"Saved in this browser", nCloud:"Your notes from every page, saved privately to your Claude account and in this browser. Only you can see them.", nBrowser:"Your notes from every page, saved in this browser. Use Export to keep a copy or move them to another device, and Import to bring them back.", nExport:"Export notes", nImport:"Import notes", nLoading:"Loading...", nNone:"No notes yet. Open any page and use + Add note under a section.", nBad:"That file is not a notes export.",
  figFail:"Figure could not be drawn.", checkInputs:"Check the inputs: ", other:"Other", general:"General"
};
function U(k){ return (LANG === "am" && AM.ui && AM.ui[k]) || UI_EN[k] || k; }
function grpLabel(g){ return (LANG === "am" && AM.groups && AM.groups[g[0]]) || g[1]; }
function pT(p){ if (LANG !== "am" || !AM.pages || !AM.pages[p.id]) return p; var a = AM.pages[p.id]; return {id:p.id, group:p.group, _i:p._i, title:a.title || p.title, lede:a.lede || p.lede, sections:p.sections.map(function(s, i){ var t = (a.sections || [])[i]; return t ? [t[0] || s[0], t[1] || s[1], t[2] || s[2]] : s; })}; }
function gT(k){ var g = G[k]; if (!g) return null; if (LANG !== "am" || !AM.gloss || !AM.gloss[k]) return g; var a = AM.gloss[k]; return {t:a.t || g.t, a:g.a, s:a.s || g.s, f:a.f || g.f, r:g.r, en:g.t}; }
function cMeta(id){ return (LANG === "am" && AM.calc && AM.calc[id]) || {}; }

/* ---------- Quotes, figures, calculators ---------- */
function srcLab(l){
  if (LANG !== "am" || !AM.src) return l;
  if (AM.src[l]) return AM.src[l];
  var m = /^(.*?), ((?:January|February|March|April|May|June|July|August|September|October|November|December)[^,]*,? \d{4}|\d{4})$/.exec(l);
  if (m && AM.src[m[1]]) return AM.srcLabel(m[1], m[2]);
  return AM.month ? AM.month(l) : l;
}
function quoteHTML(id){
  var q = Q[id]; if (!q) return "";
  var a = (LANG === "am" && AM.quotes && AM.quotes[id]) || null;
  var lab = srcLab(q.src + (q.date ? ', ' + q.date : ''));
  var link = q.url ? '<a href="' + esc(q.url) + '" target="_blank" rel="noopener">' + esc(lab) + '</a>' : esc(lab);
  return '<div class="vq"><div class="vk">' + esc(U("voices")) + '</div><q>' + esc(a ? a.q : q.q) + '</q>' + (a ? '<details class="orig"><summary>' + esc(U("orig")) + '</summary>“' + esc(q.q) + '”</details>' : '') + '<div class="who"><b>' + esc(q.who) + '</b>' + (q.role ? ', ' + esc(a && a.role ? a.role : q.role) : '') + '. ' + link + '</div></div>';
}
function figHTML(id){
  var f = F[id]; if (!f) return "";
  var svg = ""; try { svg = f.s(); } catch(e){ svg = "<p>" + esc(U("figFail")) + "</p>"; }
  var cap = (LANG === "am" && AM.figcap && AM.figcap[id]) || f.c;
  return '<figure class="fig' + (f.sm ? ' sm' : '') + '"><div class="svgwrap">' + svg + '</div><figcaption>' + cap + '</figcaption></figure>';
}
var calcN = 0;
function calcHTML(id){
  var c = C[id]; if (!c) return "";
  var m = cMeta(id), mi = m.ins || {}, mo = m.opts || {};
  var n = id + "-" + (calcN++);
  var ins = c.ins.map(function(x){
    var iid = n + "-" + x[0], lab = esc(mi[x[0]] || x[1]), v = x[2], opts = x[3];
    if (Array.isArray(opts)) return '<label for="' + iid + '">' + lab + '<select id="' + iid + '" data-k="' + x[0] + '">' + opts.map(function(o){ return '<option value="' + esc(o) + '"' + (o == v ? ' selected' : '') + '>' + esc(mo[o] || o) + '</option>'; }).join("") + '</select></label>';
    if (typeof v === "string" && v.indexOf("\n") >= 0) return '<label class="wide" for="' + iid + '">' + lab + '<textarea id="' + iid + '" data-k="' + x[0] + '" spellcheck="false">' + esc(v) + '</textarea></label>';
    return '<label for="' + iid + '">' + lab + '<input id="' + iid + '" data-k="' + x[0] + '" inputmode="decimal" value="' + esc(v) + '"></label>';
  }).join("");
  return '<section class="calc" data-calc="' + id + '"><header><span class="ck">' + esc(U("calc")) + '</span><span class="ct">' + esc(m.t || c.t) + '</span></header><div class="cbody"><div class="ins">' + ins + '</div><div class="outs" aria-live="polite"></div></div></section>';
}
function runCalc(el){
  var id = el.getAttribute("data-calc"), c = C[id]; if (!c) return;
  var v = {};
  $$("[data-k]", el).forEach(function(i){ var k = i.getAttribute("data-k"), raw = i.value; var num = parseFloat(String(raw).replace(/,/g, "")); v[k] = (i.tagName === "INPUT" && !isNaN(num)) ? num : raw; v["_" + k] = raw; });
  var out; try { out = c.f(v); } catch(e){ out = '<p class="bd">' + esc(U("checkInputs")) + esc(e.message) + '</p>'; }
  if (LANG === "am" && AM.calcText){ var tmp = document.createElement("div"); tmp.innerHTML = out; var tw = document.createTreeWalker(tmp, NodeFilter.SHOW_TEXT); var ns = []; while (tw.nextNode()) ns.push(tw.currentNode); ns.forEach(function(n){ if (/[A-Za-z]/.test(n.nodeValue)) n.nodeValue = AM.calcText(n.nodeValue); }); out = tmp.innerHTML; }
  var note = cMeta(id).n || c.n;
  $(".outs", el).innerHTML = out + (note ? '<div class="how">' + md(note) + '</div>' : '');
  linkTerms($(".outs .how", el));
}
function bindCalcs(root){ $$(".calc", root).forEach(function(el){ el.addEventListener("input", function(){ runCalc(el); }); runCalc(el); }); }

function tokens(html){
  html = html.replace(/<p>\s*\{\{(fig|calc|q|qs):([^}]+)\}\}\s*<\/p>/g, function(_, t, id){ return tok(t, id); });
  return html.replace(/\{\{(fig|calc|q|qs):([^}]+)\}\}/g, function(_, t, id){ return tok(t, id); });
}
function tok(t, id){
  id = id.trim();
  if (t === "fig") return figHTML(id);
  if (t === "calc") return calcHTML(id);
  if (t === "q") return quoteHTML(id);
  if (t === "qs") return id.split(",").map(function(s){ return quoteHTML(s.trim()); }).join("");
  return "";
}
function wrapTables(root){ $$("table", root).forEach(function(t){ if (t.parentNode.classList.contains("tablewrap")) return; var w = document.createElement("div"); w.className = "tablewrap"; t.parentNode.insertBefore(w, t); w.appendChild(t); }); }

/* ---------- Glossary auto-linking (separate index per language) ---------- */
var IDX = {};
function index(){
  if (IDX[LANG]) return IDX[LANG];
  var list = [], map = {};
  function push(a, k, cs){ if (!a) return; list.push({a:a, k:k, cs:cs}); var lk = a.toLowerCase(); (map[lk] = map[lk] || []).push({a:a, k:k, cs:cs}); }
  Object.keys(G).forEach(function(k){
    var g = G[k], names = [g.t].concat(g.a || []);
    names.forEach(function(a){
      var cs = /[A-Z].*[A-Z]|\d/.test(a) || (g.cs === true);
      if (LANG === "am" && !/[A-Za-z]/.test(a)) return;
      if (LANG === "am" && !cs && a.length < 4) return;
      push(a, k, cs);
    });
    if (LANG === "am" && AM.gloss && AM.gloss[k]){
      var at = String(AM.gloss[k].t || "").replace(/\s*\([^)]*\)\s*/g, " ").trim();
      if (at && at.length >= 4 && !/[A-Za-z]/.test(at)) push(at, k, true);
      (AM.gloss[k].a || []).forEach(function(x){ if (x && x.length >= 3) push(x, k, true); });
    }
  });
  list.sort(function(x, y){ return y.a.length - x.a.length; });
  var seen = {}, parts = [];
  list.forEach(function(x){ var lk = x.a.toLowerCase(); if (seen[lk]) return; seen[lk] = 1; parts.push(x.a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+")); });
  IDX[LANG] = {map:map, re: parts.length ? new RegExp("(?<![A-Za-z0-9])(" + parts.join("|") + ")(?![A-Za-z0-9])", "gi") : null};
  return IDX[LANG];
}
function matchKey(text){
  var cands = index().map[text.toLowerCase().replace(/\s+/g, " ")]; if (!cands) return null;
  for (var i = 0; i < cands.length; i++){ var c = cands[i]; if (!c.cs || c.a === text.replace(/\s+/g, " ")) return c.k; }
  return null;
}
var SKIP = "a,button,h1,h2,h3,h4,code,pre,figure,.calc .ins,.gl,svg,label,th,.vq .who,.vq .orig,.vk,.tag,select,textarea,input";
function linkTerms(root, exclude){
  var re = index().re;
  if (!root || !re) return;
  var done = {}; if (exclude) done[exclude] = 1;
  var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: function(n){
    if (!n.nodeValue || !/[A-Za-zሀ-፿]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
    var p = n.parentElement; if (!p || p.closest(SKIP)) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT; } });
  var nodes = []; while (tw.nextNode()) nodes.push(tw.currentNode);
  nodes.forEach(function(n){
    var s = n.nodeValue, last = 0, frag = null, m; re.lastIndex = 0;
    while ((m = re.exec(s))){
      var k = matchKey(m[0]); if (!k || done[k]) continue;
      done[k] = 1; frag = frag || document.createDocumentFragment();
      frag.appendChild(document.createTextNode(s.slice(last, m.index)));
      var b = document.createElement("button"); b.type = "button"; b.className = "gl"; b.setAttribute("data-g", k); b.textContent = m[0];
      frag.appendChild(b); last = m.index + m[0].length;
    }
    if (frag){ frag.appendChild(document.createTextNode(s.slice(last))); n.parentNode.replaceChild(frag, n); }
  });
}

/* ---------- Tooltip + panel ---------- */
var tip = $("#tip"), tipT = null, panel = $("#panel"), hist = [];
function showTip(el){
  var g = gT(el.getAttribute("data-g")); if (!g) return;
  var ab = g.a && g.a[0] && g.a[0] !== g.t ? g.a[0] : "";
  tip.innerHTML = "<b>" + esc(g.t) + (ab ? ' (' + esc(ab) + ')' : '') + "</b>" + esc(g.s) + '<span class="hint">' + esc(U("hint")) + '</span>';
  tip.hidden = false;
  var r = el.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
  var x = Math.min(Math.max(8, r.left), window.innerWidth - w - 8), y = r.bottom + 8;
  if (y + h > window.innerHeight - 8) y = r.top - h - 8;
  tip.style.left = x + "px"; tip.style.top = Math.max(8, y) + "px";
}
document.addEventListener("mouseover", function(e){
  var el = e.target.closest && e.target.closest(".gl"); if (!el) return;
  clearTimeout(tipT); tipT = setTimeout(function(){ showTip(el); }, 120);
});
document.addEventListener("mouseout", function(e){ if (e.target.closest && e.target.closest(".gl")){ clearTimeout(tipT); tip.hidden = true; } });
document.addEventListener("focusin", function(e){ if (e.target.classList && e.target.classList.contains("gl")) showTip(e.target); });
document.addEventListener("focusout", function(){ tip.hidden = true; });
document.addEventListener("click", function(e){
  var el = e.target.closest && e.target.closest("[data-g]");
  if (el){ e.preventDefault(); tip.hidden = true; openTerm(el.getAttribute("data-g"), el.closest("#panel") ? true : false); }
  var r = e.target.closest && e.target.closest("[data-goto]");
  if (r){ e.preventDefault(); closePanelIfNarrow(); location.hash = r.getAttribute("data-goto"); }
});
function usesOf(k){
  var g = G[k], names = [g.t].concat(g.a || []).map(function(a){ return a.toLowerCase(); });
  return PAGES.filter(function(p){ var t = p._text || (p._text = pageText(p).toLowerCase()); return names.some(function(n){ return t.indexOf(n) >= 0; }); }).slice(0, 14);
}
function openTerm(k, push){
  var g = gT(k); if (!g) return;
  if (push && panel.getAttribute("data-k")) hist.push(panel.getAttribute("data-k"));
  if (!push) hist = [];
  panel.setAttribute("data-k", k);
  var uses = usesOf(k), also = (g.a || []).slice(); if (g.en && g.en !== g.t) also.unshift(g.en);
  panel.innerHTML = '<div class="phead"><span class="pk">' + esc(U("glossary")) + '</span><span class="navb">' + (hist.length ? '<button class="iconbtn" id="pBack">' + esc(U("back")) + '</button>' : '') + '<button class="iconbtn" id="pClose" aria-label="' + esc(U("close")) + '">' + esc(U("close")) + '</button></span></div>' +
    '<h2>' + esc(g.t) + '</h2>' + (also.length ? '<div class="ab">' + esc(U("also")) + also.map(esc).join(", ") + '</div>' : '') +
    '<div class="short">' + esc(g.s) + '</div><div class="pbody">' + tokens(md(g.f || "")) + '</div>' +
    (g.r && g.r.length ? '<h3>' + esc(U("related")) + '</h3><div class="rel">' + g.r.filter(function(x){ return G[x]; }).map(function(x){ return '<button type="button" data-g="' + x + '">' + esc(gT(x).t) + '</button>'; }).join("") + '</div>' : '') +
    (uses.length ? '<h3>' + esc(U("uses")) + '</h3><div class="uses">' + uses.map(function(p){ return '<a href="#' + p.id + '" data-goto="' + p.id + '">' + esc(pT(p).title) + '</a>'; }).join("") + '</div>' : '');
  panel.hidden = false; document.body.classList.add("panel-open"); panel.scrollTop = 0;
  wrapTables(panel); linkTerms($(".pbody", panel), k); bindCalcs(panel);
  var c = $("#pClose"); if (c) c.onclick = closePanel;
  var b = $("#pBack"); if (b) b.onclick = function(){ var prev = hist.pop(); openTerm(prev, false); };
}
function closePanel(){ panel.hidden = true; panel.removeAttribute("data-k"); document.body.classList.remove("panel-open"); hist = []; }
function closePanelIfNarrow(){ if (window.innerWidth <= 1100) closePanel(); }
document.addEventListener("keydown", function(e){ if (e.key === "Escape"){ if (!panel.hidden) closePanel(); closeDrawer(); $("#results").hidden = true; } });

/* ---------- Drawer ---------- */
var drawer = $("#drawer"), scrim = $("#scrim");
function buildDrawer(cur){
  var h = '<a href="#home"' + (cur === "home" ? ' class="on"' : '') + '>' + esc(U("start")) + '</a><a href="#calculators"' + (cur === "calculators" ? ' class="on"' : '') + '>' + esc(U("allcalc")) + '</a><a href="#glossary"' + (cur === "glossary" ? ' class="on"' : '') + '>' + esc(U("glossab")) + '</a><a href="#quotes"' + (cur === "quotes" ? ' class="on"' : '') + '>' + esc(U("voicesNav")) + '</a><a href="#notes"' + (cur === "notes" ? ' class="on"' : '') + '>' + esc(U("nMy")) + '</a>';
  GROUPS.forEach(function(gr){
    var ps = PAGES.filter(function(p){ return p.group === gr[0]; }); if (!ps.length) return;
    h += '<h3>' + esc(grpLabel(gr)) + '</h3>' + ps.map(function(p){ return '<a href="#' + p.id + '"' + (p.id === cur ? ' class="on"' : '') + '>' + esc(pT(p).title) + '</a>'; }).join("");
  });
  h += '<h3>' + esc(U("reference")) + '</h3><a href="#sources"' + (cur === "sources" ? ' class="on"' : '') + '>' + esc(U("sources")) + '</a>';
  drawer.innerHTML = h;
}
function openDrawer(){ drawer.hidden = false; scrim.hidden = false; var on = $(".on", drawer); if (on) on.scrollIntoView({block:"center"}); }
function closeDrawer(){ drawer.hidden = true; scrim.hidden = true; }
$("#menuBtn").onclick = function(){ drawer.hidden ? openDrawer() : closeDrawer(); };
scrim.onclick = closeDrawer;
drawer.addEventListener("click", function(e){ if (e.target.closest("a")) closeDrawer(); });

/* ---------- Mode ---------- */
function setMode(m){ document.body.classList.remove("m-both", "m-plain", "m-tech"); document.body.classList.add("m-" + m); $$(".mode button").forEach(function(b){ b.classList.toggle("on", b.getAttribute("data-m") === m); }); store("cfm-mode", m); }
$$(".mode button").forEach(function(b){ b.onclick = function(){ setMode(b.getAttribute("data-m")); }; });
setMode(store("cfm-mode") || "both");

/* ---------- Static UI text ---------- */
function applyUI(){
  document.documentElement.lang = LANG === "am" ? "am" : "en";
  document.body.classList.toggle("lang-am", LANG === "am");
  $("#brand").innerHTML = esc(U("brand")) + '<small>' + esc(U("brandSub")) + '</small>';
  $("#q").placeholder = U("search"); $("#q").setAttribute("aria-label", U("search"));
  var mb = {both:"both", plain:"plainB", tech:"techB"}; $$(".mode button").forEach(function(b){ b.textContent = U(mb[b.getAttribute("data-m")]); });
  var cl = $("#calcBtn .lbl"), gl = $("#glossBtn .lbl"); if (cl) cl.textContent = U("calcBtn"); if (gl) gl.textContent = U("glossBtn");
  $$(".lang button").forEach(function(b){ var on = b.getAttribute("data-l") === LANG; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on ? "true" : "false"); });
}


var main = $("#main");
/* ---------- Notes (per section; saved to your private Claude storage when available, and always in this browser) ---------- */
var NS = {db:null, uid:null, cloud:false, cache:{}, timers:{}, chain:{}};
function lsGet(k){ try { return JSON.parse(localStorage.getItem(k) || "null"); } catch(e){ return null; } }
function lsSet(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
function localNotes(pid){ return lsGet("cfm-notes-" + pid) || {}; }
function noteDoc(pid){ return NS.db.collection("data/users/" + NS.uid).doc("notes_" + pid); }
(function initNotes(){
  if (!window.claude || typeof window.claude.use !== "function") return;
  Promise.all([window.claude.use("db"), window.claude.use("user")]).then(function(r){
    var db = r[0], user = r[1]; if (!db || !user) return null;
    return user.id().then(function(id){ if (!id) return; NS.db = db; NS.uid = id; NS.cloud = true; refreshNotesUI(); });
  }).catch(function(){});
})();
function getNotes(pid){
  if (!NS.cache[pid]) NS.cache[pid] = localNotes(pid);
  if (NS.cloud && !NS.cache[pid]._synced){
    NS.cache[pid]._synced = true;
    noteDoc(pid).get().then(function(snap){
      if (!snap.exists) { var loc = NS.cache[pid]; if (Object.keys(loc).some(function(k){ return /^s\d+$/.test(k) && loc[k]; })) pushCloud(pid); return; }
      var d = snap.data() || {}, loc = NS.cache[pid] || {};
      if ((d.updated || 0) >= (loc.updated || 0)){ var n = JSON.parse(JSON.stringify(d)); n._synced = true; NS.cache[pid] = n; lsSet("cfm-notes-" + pid, n); }
      else pushCloud(pid);
      paintNotes(pid);
    }).catch(function(){});
  }
  return NS.cache[pid];
}
function pushCloud(pid){
  if (!NS.cloud) return;
  var body = {}; var c = NS.cache[pid] || {}; Object.keys(c).forEach(function(k){ if (k !== "_synced") body[k] = c[k]; });
  NS.chain[pid] = (NS.chain[pid] || Promise.resolve()).then(function(){ return noteDoc(pid).set(body); }).then(function(){ setStat(pid, "saved"); }).catch(function(){ setStat(pid, "local"); });
}
function saveNote(pid, sec, text){
  var c = getNotes(pid); c[sec] = text; c.updated = Date.now(); lsSet("cfm-notes-" + pid, c);
  var idx = lsGet("cfm-notes-index") || {}; idx[pid] = c.updated; lsSet("cfm-notes-index", idx);
  setStat(pid, NS.cloud ? "saving" : "local");
  clearTimeout(NS.timers[pid]); NS.timers[pid] = setTimeout(function(){ pushCloud(pid); }, 900);
}
function setStat(pid, st){ $$('.notes[data-p="' + pid + '"] .nstat').forEach(function(e){ if (e.closest(".notes.editing")) e.textContent = U(st === "saved" ? "nSaved" : st === "saving" ? "nSaving" : "nLocal"); }); }
function paintNotes(pid){
  var c = NS.cache[pid] || {};
  $$('.notes[data-p="' + pid + '"]').forEach(function(box){
    var sec = box.getAttribute("data-s"), txt = c[sec] || "", ta = $("textarea", box);
    if (document.activeElement !== ta) ta.value = txt;
    $(".nview", box).innerHTML = txt ? md(txt) : "";
    $(".nbtn", box).textContent = txt ? U("nEdit") : U("nAdd");
    box.classList.toggle("has", !!txt);
  });
}
function notesBox(pid, sec){ return '<div class="notes" data-p="' + pid + '" data-s="' + sec + '"><div class="nhead"><span class="nk">' + esc(U("nTitle")) + '</span><button type="button" class="nbtn">' + esc(U("nAdd")) + '</button><span class="nstat"></span></div><div class="nview"></div><textarea class="nta" rows="5" placeholder="' + esc(U("nPh")) + '"></textarea></div>'; }
function bindNotes(pid){
  getNotes(pid); paintNotes(pid);
  $$('.notes[data-p="' + pid + '"]').forEach(function(box){
    var ta = $("textarea", box), sec = box.getAttribute("data-s");
    $(".nbtn", box).onclick = function(){ var open = box.classList.toggle("editing"); if (open){ ta.focus(); setStat(pid, NS.cloud ? "saved" : "local"); } else paintNotes(pid); };
    ta.oninput = function(){ saveNote(pid, sec, ta.value); };
    ta.onblur = function(){ paintNotes(pid); };
  });
}
function refreshNotesUI(){ var id = (location.hash || "#home").slice(1); if (pageById[id]) bindNotes(id); if (id === "notes") route(true); }
function allNoteIds(){ var idx = lsGet("cfm-notes-index") || {}; return Object.keys(idx).filter(function(k){ return pageById[k]; }); }
function renderNotesPage(){
  var h = '<div class="crumb">' + esc(U("nTitle")) + '</div><h1 class="ptitle">' + esc(U("nMy")) + '</h1><p class="lede">' + esc(NS.cloud ? U("nCloud") : U("nBrowser")) + '</p>' +
    '<div class="nbar"><button type="button" class="iconbtn" id="nExport">' + esc(U("nExport")) + '</button><label class="iconbtn" for="nImport">' + esc(U("nImport")) + '</label><input type="file" id="nImport" accept="application/json" hidden></div><div id="nList"><p>' + esc(U("nLoading")) + '</p></div>';
  return h;
}
function fillNotesPage(){
  var list = $("#nList"); if (!list) return;
  function draw(ids){
    var any = false, h = "";
    PAGES.forEach(function(p0){
      if (ids.indexOf(p0.id) < 0) return; var c = NS.cache[p0.id] || localNotes(p0.id), p = pT(p0), items = "";
      p.sections.forEach(function(s, i){ var t = c["s" + i]; if (t && t.trim()){ items += '<div class="nitem"><a href="#' + p0.id + '" data-jump="s' + i + '">' + esc(s[0]) + '</a><div class="nview">' + md(t) + '</div></div>'; } });
      if (items){ any = true; h += '<h2 class="grp">' + esc(p.title) + '</h2>' + items; }
    });
    list.innerHTML = any ? h : '<p>' + esc(U("nNone")) + '</p>';
  }
  var ids = allNoteIds();
  if (NS.cloud){
    NS.db.collection("data/users/" + NS.uid).get().then(function(qs){
      (qs.docs || []).forEach(function(d){ var pid = d.id.replace(/^notes_/, ""); if (!pageById[pid]) return; var n = JSON.parse(JSON.stringify(d.data() || {})); n._synced = true; var loc = NS.cache[pid] || localNotes(pid); if ((n.updated || 0) >= (loc.updated || 0)){ NS.cache[pid] = n; lsSet("cfm-notes-" + pid, n); } if (ids.indexOf(pid) < 0) ids.push(pid); });
      var idx = lsGet("cfm-notes-index") || {}; ids.forEach(function(i){ idx[i] = idx[i] || 1; }); lsSet("cfm-notes-index", idx); draw(ids);
    }).catch(function(){ draw(ids); });
  } else draw(ids);
  var ex = $("#nExport"); if (ex) ex.onclick = function(){
    var out = {app:"carvel-field-manual", exported:new Date().toISOString(), notes:{}}; allNoteIds().forEach(function(pid){ var c = NS.cache[pid] || localNotes(pid), o = {}; Object.keys(c).forEach(function(k){ if (k !== "_synced") o[k] = c[k]; }); out.notes[pid] = o; });
    var data = JSON.stringify(out, null, 2), name = "carvel-notes-" + new Date().toISOString().slice(0, 10) + ".json";
    var fallback = function(){ var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([data], {type:"application/json"})); a.download = name; document.body.appendChild(a); a.click(); a.remove(); };
    if (window.claude && window.claude.use) window.claude.use("downloads").then(function(d){ if (d) d.save({filename:name, data:data}).catch(function(){}); else fallback(); }).catch(fallback); else fallback();
  };
  var im = $("#nImport"); if (im) im.onchange = function(){
    var f = im.files && im.files[0]; if (!f) return; var r = new FileReader();
    r.onload = function(){ try { var o = JSON.parse(r.result); Object.keys(o.notes || {}).forEach(function(pid){ if (!pageById[pid]) return; var cur = getNotes(pid), inc = o.notes[pid]; Object.keys(inc).forEach(function(k){ if (/^s\d+$/.test(k) && inc[k] && !cur[k]) cur[k] = inc[k]; else if (/^s\d+$/.test(k) && inc[k] && cur[k] && cur[k] !== inc[k]) cur[k] = cur[k] + "\n\n" + inc[k]; }); cur.updated = Date.now(); lsSet("cfm-notes-" + pid, cur); var idx = lsGet("cfm-notes-index") || {}; idx[pid] = cur.updated; lsSet("cfm-notes-index", idx); pushCloud(pid); }); fillNotesPage(); } catch(e){ alertBox(U("nBad")); } };
    r.readAsText(f);
  };
}
function alertBox(msg){ var l = $("#nList"); if (l) l.insertAdjacentHTML("afterbegin", '<p class="bd">' + esc(msg) + '</p>'); }
main.addEventListener("click", function(e){ var a = e.target.closest("[data-jump]"); if (!a) return; e.preventDefault(); var sec = a.getAttribute("data-jump"); location.hash = a.getAttribute("href").slice(1); setTimeout(function(){ var t = document.getElementById(sec); if (t) t.scrollIntoView({block:"start"}); }, 80); });

/* ---------- Pages ---------- */
function pageText(p){ var t = pT(p); return [t.title, t.lede || ""].concat((t.sections || []).map(function(s){ return s[0] + " " + s[1] + " " + s[2]; })).join(" ").replace(/\{\{[^}]+\}\}/g, " ").replace(/[#*|>`_-]/g, " "); }
function renderPage(p0){
  var p = pT(p0);
  var gr = GROUPS.filter(function(g){ return g[0] === p.group; })[0];
  var h = '<div class="crumb">' + esc(gr ? grpLabel(gr) : "") + '</div><h1 class="ptitle">' + esc(p.title) + '</h1>' + (p.lede ? '<p class="lede">' + esc(p.lede) + '</p>' : '');
  if ((p.sections || []).length > 2) h += '<div class="toc">' + p.sections.map(function(s, i){ return '<a href="#" data-sec="s' + i + '">' + esc(s[0]) + '</a>'; }).join("") + '</div>';
  (p.sections || []).forEach(function(s, i){
    h += '<section class="sec" id="s' + i + '"><h2>' + esc(s[0]) + '</h2>' +
      '<div class="plain"><div class="tag">' + esc(U("plain")) + '</div>' + tokens(md(s[1])) + '</div>' +
      '<div class="tech"><div class="tag">' + esc(U("tech")) + '</div>' + tokens(md(s[2])) + '</div></section>' + notesBox(p.id, "s" + i);
  });
  var prev = PAGES[p0._i - 1], next = PAGES[p0._i + 1];
  h += '<div class="pager">' + (prev ? '<a href="#' + prev.id + '"><span>' + esc(U("prev")) + '</span>' + esc(pT(prev).title) + '</a>' : '<span></span>') + (next ? '<a href="#' + next.id + '"><span>' + esc(U("next")) + '</span>' + esc(pT(next).title) + '</a>' : '') + '</div>';
  return h;
}
function renderHome(){
  var h = '<div class="crumb">' + esc(U("homeCrumb")) + '</div><h1 class="ptitle">' + esc(U("homeTitle")) + '</h1>' +
    '<p class="lede">' + esc(U("homeLede")) + '</p>' +
    '<div class="tiles">' +
    '<a class="tile" href="#calculators"><span class="tk">' + esc(U("tTools")) + '</span><span class="tt">' + esc(U("allcalc")) + '</span><span class="td">' + esc(U("tCalcD")) + '</span></a>' +
    '<a class="tile" href="#glossary"><span class="tk">' + esc(U("tRef")) + '</span><span class="tt">' + esc(U("glossab")) + '</span><span class="td">' + Object.keys(G).length + esc(U("tGlossD")) + '</span></a>' +
    '<a class="tile" href="#quotes"><span class="tk">' + esc(U("tVoices")) + '</span><span class="tt">' + esc(U("tQuotesT")) + '</span><span class="td">' + Object.keys(Q).length + esc(U("tQuotesD")) + '</span></a>' +
    '<a class="tile" href="#corn-stages"><span class="tk">' + esc(U("tFigs")) + '</span><span class="tt">' + esc(U("tStagesT")) + '</span><span class="td">' + esc(U("tStagesD")) + '</span></a></div>';
  GROUPS.forEach(function(gr){
    var ps = PAGES.filter(function(p){ return p.group === gr[0]; }); if (!ps.length) return;
    h += '<div class="grp">' + esc(grpLabel(gr)) + '</div><div class="tiles">' + ps.map(function(p0){ var p = pT(p0); return '<a class="tile" href="#' + p.id + '"><span class="tt">' + esc(p.title) + '</span><span class="td">' + esc(p.lede || "") + '</span></a>'; }).join("") + '</div>';
  });
  return h;
}
function renderCalcs(){
  var cats = {}, order = []; Object.keys(C).forEach(function(k){ var c = C[k].cat || "Other"; if (!cats[c]){ cats[c] = []; order.push(c); } cats[c].push(k); });
  function catName(c){ return (LANG === "am" && AM.calcCats && AM.calcCats[c]) || c; }
  var h = '<div class="crumb">' + esc(U("tTools")) + '</div><h1 class="ptitle">' + esc(U("allcalc")) + '</h1><p class="lede">' + esc(U("calcLede")) + '</p>';
  h += '<div class="toc">' + order.map(function(c, i){ return '<a href="#" data-sec="c' + i + '">' + esc(catName(c)) + '</a>'; }).join("") + '</div>';
  order.forEach(function(c, i){ h += '<h2 class="grp sec-anchor" id="c' + i + '">' + esc(catName(c)) + '</h2>' + cats[c].map(calcHTML).join(""); });
  return h;
}
function renderGloss(){
  var keys = Object.keys(G).sort(function(a, b){ return gT(a).t.localeCompare(gT(b).t, LANG === "am" ? "am" : "en"); });
  var letters = {}, ord = []; keys.forEach(function(k){ var l = gT(k).t[0].toUpperCase(); if (!letters[l]){ letters[l] = 1; ord.push(l); } });
  var h = '<div class="crumb">' + esc(U("tRef")) + '</div><h1 class="ptitle">' + esc(U("glossab")) + '</h1><p class="lede">' + esc(U("glossLede")) + '</p>' +
    '<input class="filter" id="gfilter" placeholder="' + esc(U("filter")) + '" aria-label="' + esc(U("filter")) + '"><div class="letters">' + ord.map(function(l, i){ return '<a href="#" data-sec="L' + i + '">' + esc(l) + '</a>'; }).join("") + '</div><div class="gloss-list" id="glist">';
  var cur = "";
  keys.forEach(function(k){ var g = gT(k), l = g.t[0].toUpperCase(); var anchor = l !== cur ? ' id="L' + ord.indexOf(l) + '"' : ''; cur = l;
    var al = (g.a || []).slice(); if (g.en && g.en !== g.t) al.unshift(g.en);
    h += '<div' + anchor + ' data-f="' + esc((g.t + " " + al.join(" ") + " " + g.s + " " + G[k].t + " " + G[k].s).toLowerCase()) + '"><button type="button" data-g="' + k + '">' + esc(g.t) + (al.length ? ' <span class="mono" style="font-size:13px;color:var(--muted)">(' + esc(al.join(", ")) + ')</span>' : '') + '</button><p>' + esc(g.s) + '</p></div>'; });
  return h + '</div>';
}
function renderQuotes(){
  var tags = {}; Object.keys(Q).forEach(function(k){ (Q[k].tags || [U("general")]).forEach(function(t){ (tags[t] = tags[t] || []).push(k); }); });
  function tagName(t){ return (LANG === "am" && AM.tags && AM.tags[t]) || t; }
  var h = '<div class="crumb">' + esc(U("tVoices")) + '</div><h1 class="ptitle">' + esc(U("quotesTitle")) + '</h1><p class="lede">' + esc(U("quotesLede")) + '</p>';
  var tk = Object.keys(tags).sort();
  h += '<div class="toc">' + tk.map(function(t, i){ return '<a href="#" data-sec="t' + i + '">' + esc(tagName(t)) + '</a>'; }).join("") + '</div>';
  tk.forEach(function(t, i){ h += '<h2 class="grp" id="t' + i + '">' + esc(tagName(t)) + '</h2>' + tags[t].map(quoteHTML).join(""); });
  return h;
}
function renderSources(){
  var urls = {}; Object.keys(Q).forEach(function(k){ var q = Q[k]; if (q.url) urls[q.url] = q.src + (q.date ? ", " + q.date : ""); });
  (window.SOURCES || []).forEach(function(s){ urls[s[1]] = s[0]; });
  var list = Object.keys(urls).sort(function(a, b){ return urls[a].localeCompare(urls[b]); });
  return '<div class="crumb">' + esc(U("reference")) + '</div><h1 class="ptitle">' + esc(U("sources")) + '</h1><p class="lede">' + esc(U("sourcesLede")) + '</p><div class="tech"><ul>' + list.map(function(u){ return '<li><a href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(srcLab(urls[u])) + '</a></li>'; }).join("") + '</ul></div>';
}

function route(keep){
  var id = (location.hash || "#home").slice(1) || "home";
  tip.hidden = true; calcN = 0;
  var p = pageById[id], h;
  if (p) h = renderPage(p);
  else if (id === "calculators") h = renderCalcs();
  else if (id === "glossary") h = renderGloss();
  else if (id === "quotes") h = renderQuotes();
  else if (id === "sources") h = renderSources();
  else if (id === "notes") h = renderNotesPage();
  else { id = "home"; h = renderHome(); }
  main.innerHTML = h;
  wrapTables(main);
  if (p) $$(".plain,.tech", main).forEach(function(col){ linkTerms(col); });
  bindCalcs(main);
  if (p) bindNotes(p.id);
  if (id === "notes") fillNotesPage();
  buildDrawer(id);
  var gf = $("#gfilter"); if (gf) gf.oninput = function(){ var v = gf.value.toLowerCase().trim(); $$("#glist>div").forEach(function(d){ d.hidden = v && d.getAttribute("data-f").indexOf(v) < 0; }); };
  document.title = (p ? pT(p).title + " · " : "") + U("brand");
  if (!keep) window.scrollTo(0, 0);
  store("cfm-last", id);
}
main.addEventListener("click", function(e){ var a = e.target.closest("[data-sec]"); if (a){ e.preventDefault(); var t = document.getElementById(a.getAttribute("data-sec")); if (t) t.scrollIntoView({behavior:"smooth", block:"start"}); } });
window.addEventListener("hashchange", function(){ route(false); });

/* ---------- Language switch that keeps your place ---------- */
var ASEL = ".sec, .calc, .vq, .grp, #glist > div, .tile";
function anchorNow(){
  var topH = ($(".top") || {offsetHeight:56}).offsetHeight + 4;
  var els = $$(ASEL, main);
  for (var i = 0; i < els.length; i++){
    var r = els[i].getBoundingClientRect();
    if (r.bottom > topH + 2){ return r.top < topH ? {i:i, frac:(topH - r.top) / (r.height || 1), off:0} : {i:i, frac:0, off:r.top - topH}; }
  }
  return null;
}
function restore(a){
  if (!a) return;
  var el = $$(ASEL, main)[a.i]; if (!el) return;
  var topH = ($(".top") || {offsetHeight:56}).offsetHeight + 4, r = el.getBoundingClientRect();
  window.scrollTo(0, Math.max(0, window.scrollY + r.top - topH + a.frac * r.height - a.off));
}
function setLang(l){
  if (l === LANG) return;
  var a = anchorNow(), pk = panel.hidden ? null : panel.getAttribute("data-k");
  LANG = l; window.LANG = l; store("cfm-lang", l);
  applyUI(); route(true); restore(a);
  if (pk) openTerm(pk, false);
  $("#results").hidden = true;
}
$$(".lang button").forEach(function(b){ b.onclick = function(){ setLang(b.getAttribute("data-l")); }; });

/* ---------- Search ---------- */
var qi = $("#q"), res = $("#results"), sel = -1;
function search(v){
  v = v.toLowerCase().trim(); if (v.length < 2){ res.hidden = true; return; }
  var out = [];
  Object.keys(G).forEach(function(k){ var g = gT(k), s = (g.t + " " + G[k].t + " " + (g.a || []).join(" ")).toLowerCase(); var sc = s.indexOf(v) === 0 ? 3 : s.indexOf(v) >= 0 ? 2 : (g.s.toLowerCase().indexOf(v) >= 0 ? 0.5 : 0); if (sc) out.push({sc: sc + 0.2, k: U("term"), t: g.t, x: g.s, go: function(){ openTerm(k); }}); });
  PAGES.forEach(function(p0){ var p = pT(p0), raw = pageText(p0), en = LANG === "am" ? (p0._en || (p0._en = [p0.title, p0.lede].join(" ").toLowerCase())) : "", t = p.title.toLowerCase(), body = raw.toLowerCase(); var i = body.indexOf(v); var sc = t.indexOf(v) >= 0 ? 4 : i >= 0 ? 1 : en.indexOf(v) >= 0 ? 0.8 : 0; if (sc){ out.push({sc: sc, k: U("page"), t: p.title, x: i >= 0 ? "…" + raw.slice(Math.max(0, i - 50), i + 80).replace(/\s+/g, " ") + "…" : p.lede, go: function(){ location.hash = p0.id; }}); } });
  Object.keys(C).forEach(function(k){ var c = C[k], m = cMeta(k); if (((m.t || "") + " " + c.t + " " + (c.cat || "")).toLowerCase().indexOf(v) >= 0) out.push({sc: 2.5, k: U("calculator"), t: m.t || c.t, x: (LANG === "am" && AM.calcCats && AM.calcCats[c.cat]) || c.cat, go: function(){ location.hash = "calculators"; setTimeout(function(){ var el = $('[data-calc="' + k + '"]'); if (el) el.scrollIntoView({block:"start"}); }, 60); }}); });
  out.sort(function(a, b){ return b.sc - a.sc; }); out = out.slice(0, 18);
  res._out = out; sel = -1;
  res.innerHTML = out.length ? out.map(function(o, i){ return '<button type="button" data-i="' + i + '"><span class="k">' + esc(o.k) + '</span> ' + esc(o.t) + '<div class="x">' + esc(o.x || "") + '</div></button>'; }).join("") : '<button type="button" disabled>' + esc(U("noMatch")) + '</button>';
  res.hidden = false;
}
qi.addEventListener("input", function(){ search(qi.value); });
qi.addEventListener("keydown", function(e){
  var bs = $$("button[data-i]", res);
  if (e.key === "ArrowDown"){ sel = Math.min(bs.length - 1, sel + 1); } else if (e.key === "ArrowUp"){ sel = Math.max(0, sel - 1); } else if (e.key === "Enter"){ var o = res._out && res._out[sel < 0 ? 0 : sel]; if (o){ o.go(); res.hidden = true; qi.blur(); } return; } else return;
  e.preventDefault(); bs.forEach(function(b, i){ b.classList.toggle("on", i === sel); });
});
res.addEventListener("click", function(e){ var b = e.target.closest("button[data-i]"); if (!b) return; res._out[+b.getAttribute("data-i")].go(); res.hidden = true; });
document.addEventListener("click", function(e){ if (!e.target.closest(".search")) res.hidden = true; });

$("#brand").onclick = function(){ location.hash = "home"; };
$("#calcBtn").onclick = function(){ location.hash = "calculators"; };
$("#glossBtn").onclick = function(){ location.hash = "glossary"; };
if (!location.hash){ var last = store("cfm-last"); if (last && last !== "home") { history.replaceState(null, "", "#" + last); } }
applyUI();
route(false);
})();
