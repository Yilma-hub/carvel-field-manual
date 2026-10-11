/* Figures drawn as inline SVG. Colors come from CSS variables so they follow light and dark mode. */
window.FIGS = window.FIGS || {};
(function(F){
var INK = "var(--ink)", MUT = "var(--muted)", LEAF = "var(--leaf)", LEAF2 = "var(--leaf-2)", SOIL = "var(--soil)", WATER = "var(--water)", GOLD = "var(--gold)", LINE = "var(--line)", LS = "var(--line-strong)", ACC = "var(--accent)", BAD = "var(--bad)", WARN = "var(--warn)", GOOD = "var(--good)", SURF = "var(--surface)", SKY = "var(--sky)";
var PURPLE = "#8E5BB5", TAN = "#C9A86A", DRY = "#B89A5A";
function TR(x){ var A = window.AM; return (window.LANG === "am" && A && A.figtxt && A.figtxt[String(x).trim()]) || x; }
function svg(w, h, body, label){ return '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + (label || "") + '" font-family="Source Sans 3, Segoe UI, sans-serif" font-size="13">' + body + '</svg>'; }
function t(x, y, s, o){ o = o || {}; s = TR(s); return '<text x="' + x + '" y="' + y + '" fill="' + (o.c || INK) + '" font-size="' + (o.s || 13) + '"' + (o.a ? ' text-anchor="' + o.a + '"' : '') + (o.w ? ' font-weight="' + o.w + '"' : '') + (o.f ? ' font-family="' + o.f + '"' : '') + (o.r ? ' transform="rotate(' + o.r + ' ' + x + ' ' + y + ')"' : '') + '>' + s + '</text>'; }
function ln(x1, y1, x2, y2, c, w, d){ return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || LS) + '" stroke-width="' + (w || 1) + '"' + (d ? ' stroke-dasharray="' + d + '"' : '') + ' stroke-linecap="round"/>'; }
function rc(x, y, w, h, f, s, rx, o){ return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (f || "none") + '"' + (s ? ' stroke="' + s + '"' : '') + (rx ? ' rx="' + rx + '"' : '') + (o ? ' opacity="' + o + '"' : '') + '/>'; }
function ci(x, y, r, f, s, sw){ return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (f || "none") + '"' + (s ? ' stroke="' + s + '" stroke-width="' + (sw || 1) + '"' : '') + '/>'; }
function el(x, y, rx, ry, f, rot, s){ return '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="' + f + '"' + (s ? ' stroke="' + s + '" stroke-width=".8"' : '') + (rot ? ' transform="rotate(' + rot + ' ' + x + ' ' + y + ')"' : '') + '/>'; }
function pa(d, f, s, w, extra){ return '<path d="' + d + '" fill="' + (f || "none") + '"' + (s ? ' stroke="' + s + '" stroke-width="' + (w || 1) + '"' : '') + (extra || '') + ' stroke-linejoin="round" stroke-linecap="round"/>'; }
function arrow(x1, y1, x2, y2, c, w){ var a = Math.atan2(y2 - y1, x2 - x1), L = 7; return ln(x1, y1, x2, y2, c, w || 1.5) + pa("M" + x2 + "," + y2 + " L" + (x2 - L * Math.cos(a - 0.45)) + "," + (y2 - L * Math.sin(a - 0.45)) + " L" + (x2 - L * Math.cos(a + 0.45)) + "," + (y2 - L * Math.sin(a + 0.45)) + " Z", c || LS); }
function ground(y, w, x0){ x0 = x0 || 0; var s = rc(x0, y, w, 26, SOIL, null, 0, 0.18) + ln(x0, y, x0 + w, y, SOIL, 1.5); for (var i = x0 + 8; i < x0 + w; i += 22) s += ci(i, y + 9 + (i % 3) * 4, 1.3, SOIL); return s; }
function roots(x, y, n, len){ var s = ""; for (var i = 0; i < n; i++){ var a = (i / (n - 1 || 1) - 0.5) * 2.2; s += pa("M" + x + "," + y + " q" + (Math.sin(a) * len * 0.4) + "," + (len * 0.5) + " " + (Math.sin(a) * len) + "," + (len * 0.8), null, SOIL, 1); } return s; }
function stageLabels(x, y, code, name, lines){ var s = t(x, y, code, {a:"middle", s:17, w:700, f:"Barlow Condensed, Arial Narrow, sans-serif"}) + t(x, y + 16, name, {a:"middle", s:12.5}); (lines || []).forEach(function(l, i){ s += t(x, y + 32 + i * 14, l, {a:"middle", s:11.5, c:MUT}); }); return s; }

/* ---------- Plant drawings ---------- */
function leaf(x, y, dir, len, droop, col){
  var w = Math.max(2.2, len * 0.075), ex = x + dir * len, ey = y + droop, cx = x + dir * len * 0.5, cy = y - len * 0.22;
  return pa("M" + x + "," + y + " Q" + cx + "," + (cy - w) + " " + ex + "," + ey + " Q" + cx + "," + (cy + w) + " " + x + "," + (y + w), col, LEAF, 0.6);
}
function corn(x, gy, o){
  var h = o.h, n = o.n, col = o.col || LEAF2, s = roots(x, gy, 5, Math.min(30, 8 + h * 0.12));
  var sw = Math.max(1.6, 1.5 + h * 0.022), st = o.stem || LEAF;
  s += pa("M" + (x - sw / 2) + "," + gy + " L" + (x - sw / 3) + "," + (gy - h) + " L" + (x + sw / 3) + "," + (gy - h) + " L" + (x + sw / 2) + "," + gy + " Z", st);
  var Lmax = Math.min(74, 12 + h * 0.36);
  for (var i = 0; i < n; i++){
    var f = (i + 0.7) / (n + 0.3), y = gy - h * 0.9 * f - 2, dir = i % 2 ? 1 : -1;
    var len = Lmax * (0.42 + 0.58 * Math.sin(Math.PI * Math.min(0.95, (i + 1) / (n + 0.6))));
    if (n <= 2) len = Lmax * (0.7 + 0.2 * i);
    var lc = col; if (o.dryLow && i < o.dryLow) lc = DRY;
    s += leaf(x, y, dir, len, len * (o.droop || 0.28), lc);
  }
  if (o.tassel){ var ty = gy - h, tc = o.tcol || GOLD; s += ln(x, ty, x, ty - 26, tc, 2); [[-14, 10], [14, 8], [-10, 16], [11, 15], [-6, 4]].forEach(function(b){ s += pa("M" + x + "," + (ty - b[1]) + " q" + b[0] * 0.5 + "," + (-4) + " " + b[0] + "," + 6, null, tc, 1.4); }); }
  if (o.ear){ var ey = gy - h * 0.5, ec = o.ecol || "#7FA65A", L = 10 + o.ear * 5; s += pa("M" + x + "," + (ey + 6) + " q" + (L * 0.4) + "," + (-L * 0.2) + " " + (L * 0.8) + "," + (-L * 0.8), null, LEAF, 1.5); s += el(x + L * 0.9, ey - L * 0.9, 4 + o.ear * 1.3, L * 0.62, ec, o.droopEar ? 140 : 32, LEAF);
    if (o.silk){ var sc = o.silk === "brown" ? SOIL : GOLD, tx = x + L * 0.9 + (o.droopEar ? -L * 0.35 : L * 0.38), tyy = ey - L * 0.9 + (o.droopEar ? L * 0.5 : -L * 0.55); for (var k = -2; k <= 2; k++) s += pa("M" + tx + "," + tyy + " q" + (k * 3) + "," + (-6) + " " + (k * 5 + 6) + "," + (-9 + Math.abs(k) * 2), null, sc, 1); } }
  return s;
}
function trif(x, y, dir, size, col){
  var px = x + dir * size * 1.1, py = y - size * 0.55, s = ln(x, y, px, py, LEAF, 1.1);
  s += el(px + dir * size * 0.55, py - size * 0.05, size * 0.55, size * 0.3, col, dir * 8, LEAF);
  s += el(px + dir * size * 0.1, py - size * 0.45, size * 0.5, size * 0.27, col, -dir * 55, LEAF);
  s += el(px + dir * size * 0.15, py + size * 0.35, size * 0.5, size * 0.27, col, dir * 50, LEAF);
  return s;
}
function soy(x, gy, o){
  var h = o.h, n = o.n || 0, col = o.col || LEAF2, s = roots(x, gy, 4, Math.min(28, 8 + h * 0.15));
  if (o.hook){ s += pa("M" + x + "," + gy + " q0,-12 -6,-14 q-5,-1 -6,5", null, LEAF, 2.2) + el(x - 12, gy - 6, 4, 2.6, "#C8C46A", 70, LEAF); return s; }
  s += ln(x, gy, x, gy - h, o.stem || LEAF, 2);
  s += el(x - 6, gy - 6, 5, 3, "#C8C46A", -20, LEAF) + el(x + 6, gy - 6, 5, 3, "#C8C46A", 20, LEAF);
  var uy = gy - Math.min(h, 22);
  if (!o.bare){ s += el(x - 10, uy - 4, 9, 5.5, col, -25, LEAF) + el(x + 10, uy - 4, 9, 5.5, col, 25, LEAF); }
  for (var i = 0; i < n; i++){
    var y = uy - (h - (gy - uy)) * (i + 1) / (n + 0.4), dir = i % 2 ? 1 : -1, sz = Math.min(15, 9 + h * 0.03);
    if (!o.bare) s += trif(x, y, dir, sz, (o.yellowLow && i < o.yellowLow) ? GOLD : col);
    if (o.flowers && i >= n - o.flowers) s += ci(x + dir * 3, y + 2, 2.6, PURPLE) + ci(x - dir * 3, y + 4, 2.2, PURPLE);
    if (o.pods && i >= n - (o.podNodes || 4)){ var pl = 3 + o.pods * 3; for (var k = 0; k < 2; k++){ var px = x + (k ? 3 : -3), py = y + 2; s += '<rect x="' + (px - 2) + '" y="' + py + '" width="' + (3 + o.pods * 0.6) + '" height="' + pl + '" rx="2" fill="' + (o.podcol || LEAF) + '" stroke="' + LEAF + '" stroke-width=".5" transform="rotate(' + (k ? -18 : 18) + ' ' + px + ' ' + py + ')"/>'; } }
  }
  return s;
}
function wheat(x, gy, o){
  var s = roots(x, gy, 6, 22), col = o.col || LEAF2, til = o.tillers || 1;
  for (var k = 0; k < til; k++){
    var off = (k - (til - 1) / 2) * 5, ang = (k - (til - 1) / 2) * 6, h = o.h * (k === Math.floor(til / 2) ? 1 : 0.9);
    var tx = x + off + Math.sin(ang * Math.PI / 180) * h, ty = gy - Math.cos(ang * Math.PI / 180) * h;
    s += ln(x + off * 0.3, gy, tx, ty, o.stem || LEAF, 1.6);
    for (var j = 0; j < (o.nodes || 0); j++){ var f = (j + 1) / ((o.nodes || 0) + 2.2); s += ci(x + off * 0.3 + (tx - x - off * 0.3) * f, gy + (ty - gy) * f, 1.8, LEAF); }
    var nl = o.leaves || 2; for (var i = 0; i < nl; i++){ var fy = (i + 0.4) / (nl + 0.6), lx = x + off * 0.3 + (tx - x - off * 0.3) * fy, ly = gy + (ty - gy) * fy, dir = (i + k) % 2 ? 1 : -1, len = Math.min(40, 14 + o.h * 0.3);
      s += pa("M" + lx + "," + ly + " q" + dir * len * 0.5 + "," + (-len * 0.5) + " " + dir * len + "," + (-len * 0.1), null, (o.ripe ? TAN : col), 2.2); }
    if (o.head === "boot") s += el(tx, ty + 10, 3.2, 9, col, ang, LEAF);
    if (o.head === "head" || o.head === "ripe" || o.head === "flower"){ var hc = o.head === "ripe" ? GOLD : col; for (var m = 0; m < 6; m++){ var hy = ty - m * 3.4; s += el(tx - 2.2, hy, 2.2, 1.8, hc, -30, LEAF) + el(tx + 2.2, hy - 1.5, 2.2, 1.8, hc, 30, LEAF); if (o.head === "flower" && m % 2) s += ln(tx + 3, hy, tx + 6, hy + 1, GOLD, 1.2); }
      if (o.awns) for (var m2 = 0; m2 < 6; m2++) s += ln(tx, ty - m2 * 3.4, tx + (m2 % 2 ? 6 : -6), ty - m2 * 3.4 - 14, hc, 0.7); }
  }
  return s;
}
function bean(x, gy, o){
  var h = o.h, n = o.n || 0, col = o.col || LEAF2, s = roots(x, gy, 4, 16);
  if (o.hook){ s += pa("M" + x + "," + gy + " q0,-12 -6,-14 q-5,-1 -6,5", null, LEAF, 2.4) + el(x - 13, gy - 6, 5, 3.4, "#D9D2A0", 70, LEAF); return s; }
  s += ln(x, gy, x, gy - h, LEAF, 2.2);
  s += el(x - 11, gy - 14, 10, 6, col, -20, LEAF) + el(x + 11, gy - 14, 10, 6, col, 20, LEAF);
  for (var i = 0; i < n; i++){
    var y = gy - 18 - (h - 18) * (i + 1) / (n + 0.3), dir = i % 2 ? 1 : -1, sz = o.big ? 17 : 14;
    s += trif(x, y, dir, sz, (o.yellow ? GOLD : col));
    if (o.flowers && i >= n - o.flowers){ s += ci(x - dir * 4, y + 2, 3, o.fcol || "#E9E4F2", PURPLE, 0.8) + ci(x - dir * 8, y + 5, 2.6, o.fcol || "#E9E4F2", PURPLE, 0.8); }
    if (o.pods && i >= n - (o.podNodes || 3)){ for (var k = 0; k < 2; k++){ var px = x + (k ? 4 : -4), py = y + 3; var pc = o.podcol || LEAF2;
      if (o.lima) s += '<path d="M' + px + ',' + py + ' q' + (k ? 9 : -9) + ',' + (o.pods * 2) + ' ' + (k ? 4 : -4) + ',' + (6 + o.pods * 3) + ' q' + (k ? -6 : 6) + ',' + (-2) + ' ' + (k ? -4 : 4) + ',' + (-(6 + o.pods * 3)) + ' Z" fill="' + pc + '" stroke="' + LEAF + '" stroke-width=".6"/>';
      else s += '<rect x="' + (px - 1.3) + '" y="' + py + '" width="2.8" height="' + (5 + o.pods * 4) + '" rx="1.4" fill="' + pc + '" stroke="' + LEAF + '" stroke-width=".5" transform="rotate(' + (k ? -12 : 12) + ' ' + px + ' ' + py + ')"/>'; } }
  }
  return s;
}
function melonLeaf(x, y, r, col){ return ci(x, y, r, col, LEAF, 0.7) + ci(x + r * 0.8, y - r * 0.4, r * 0.7, col, LEAF, 0.7) + ci(x - r * 0.8, y - r * 0.3, r * 0.7, col, LEAF, 0.7); }
function bed(x, y, w){ return pa("M" + (x - w / 2 - 8) + "," + (y + 10) + " L" + (x - w / 2) + "," + y + " L" + (x + w / 2) + "," + y + " L" + (x + w / 2 + 8) + "," + (y + 10) + " Z", "#2A2E2B") + ci(x + 10, y + 5, 2.5, WATER); }
function melon(x, gy, o){
  var s = bed(x, gy, 96), col = o.col || LEAF2;
  if (o.transplant){ s += ln(x, gy, x, gy - 14, LEAF, 2) + melonLeaf(x - 6, gy - 16, 5, col) + melonLeaf(x + 6, gy - 18, 5, col); return s; }
  var vl = o.vine || 40;
  s += pa("M" + x + "," + gy + " q" + (-vl * 0.5) + "," + (-10) + " " + (-vl) + "," + (-4), null, LEAF, 1.6) + pa("M" + x + "," + gy + " q" + (vl * 0.5) + "," + (-12) + " " + vl + "," + (-5), null, LEAF, 1.6);
  var nl = o.leaves || 3; for (var i = 0; i < nl; i++){ var f = (i + 1) / (nl + 1); s += melonLeaf(x - vl * f, gy - 10 - 4 * Math.sin(f * 3), 6, o.dry ? DRY : col) + melonLeaf(x + vl * f, gy - 12 - 4 * Math.sin(f * 3), 6, o.dry ? DRY : col); }
  s += melonLeaf(x, gy - 18, 7, o.dry ? DRY : col);
  if (o.flowers) for (var j = 0; j < o.flowers; j++) s += ci(x - vl * 0.6 + j * vl * 0.45, gy - 22 - (j % 2) * 4, 3, "#F2C318", GOLD, 0.6);
  if (o.fruit){ var fr = o.fruit, fx = x + vl * 0.35, fy = gy - fr * 0.6; s += el(fx, fy, fr * 1.25, fr * 0.85, "#3F7A3A", 0, LEAF); for (var k = -2; k <= 2; k++) s += pa("M" + (fx + k * fr * 0.35) + "," + (fy - fr * 0.8) + " q" + (k * 2) + "," + fr * 0.8 + " 0," + fr * 1.6, null, "#264F24", 1.2); if (o.spot) s += el(fx, fy + fr * 0.6, fr * 0.5, fr * 0.2, "#E8D78A"); }
  return s;
}

/* ---------- Growth stage figures ---------- */
F["corn-veg"] = {c:"Corn vegetative stages (leaf collar method). Daily water use is crop evapotranspiration (ETc) for a typical Delaware June with reference ET near 0.20 in/day. Growing degree days (GDD) are from planting, 86/50 method.", s:function(){
  var gy = 250, xs = [70, 205, 340, 485, 650], b = ground(gy, 760);
  b += corn(xs[0], gy, {h:14, n:1}) + corn(xs[1], gy, {h:30, n:2}) + corn(xs[2], gy, {h:62, n:6}) + corn(xs[3], gy, {h:120, n:10}) + corn(xs[4], gy, {h:205, n:15, dryLow:3});
  b += stageLabels(xs[0], gy + 44, "VE", "Emergence", ["100 to 120 GDD", "0.04 in/day"]);
  b += stageLabels(xs[1], gy + 44, "V2", "Two leaf collars", ["about 200 GDD", "0.06 in/day"]);
  b += stageLabels(xs[2], gy + 44, "V6", "Growing point up", ["475 GDD; sidedress N", "0.12 in/day"]);
  b += stageLabels(xs[3], gy + 44, "V10", "Rapid growth", ["740 GDD; rows set", "0.20 in/day"]);
  b += stageLabels(xs[4], gy + 44, "V14", "Ear size being set", ["1,000 GDD", "0.24 to 0.28 in/day"]);
  b += arrow(xs[2] + 32, 60, xs[2] + 4, 180, ACC, 1.2) + t(xs[2] + 36, 56, "growing point leaves the soil at V6", {s:11.5, c:ACC});
  return svg(760, 350, b, "Corn vegetative growth stages");
}};
F["corn-rep"] = {c:"Corn reproductive stages. Top row: the plant. Bottom row: what a kernel looks like when you cut or squeeze it. Yield response factor (Ky) for water stress is highest at flowering (VT to R1).", s:function(){
  var gy = 270, xs = [70, 205, 345, 490, 650], b = ground(gy, 760);
  b += corn(xs[0], gy, {h:215, n:15, tassel:1, dryLow:4});
  b += corn(xs[1], gy, {h:215, n:15, tassel:1, ear:2, silk:"fresh", dryLow:4});
  b += corn(xs[2], gy, {h:215, n:15, tassel:1, ear:3, silk:"brown", dryLow:5});
  b += corn(xs[3], gy, {h:215, n:15, tassel:1, tcol:TAN, ear:3, silk:"brown", droopEar:1, dryLow:8});
  b += corn(xs[4], gy, {h:215, n:15, tassel:1, tcol:TAN, ear:3, silk:"brown", droopEar:1, col:TAN, stem:DRY});
  b += stageLabels(xs[0], gy + 44, "VT", "Tasseling", ["peak water use", "0.28 to 0.32 in/day"]);
  b += stageLabels(xs[1], gy + 44, "R1", "Silking", ["most sensitive: Ky 1.5", "pollination in 7 to 10 days"]);
  b += stageLabels(xs[2], gy + 44, "R2 to R3", "Blister to milk", ["stress aborts tip kernels", "0.25 to 0.30 in/day"]);
  b += stageLabels(xs[3], gy + 44, "R5", "Dent", ["half milk line: 2.5 in", "of water still needed"]);
  b += stageLabels(xs[4], gy + 44, "R6", "Black layer", ["physiological maturity", "stop irrigating"]);
  var ky = 440, ks = [["R2", "clear blister"], ["R3", "milky"], ["R4", "dough"], ["R5", "dent, milk line"], ["R6", "black layer"]];
  ks.forEach(function(k, i){ var x = 110 + i * 140; b += pa("M" + (x - 14) + "," + (ky + 18) + " L" + (x - 13) + "," + (ky - 6) + " Q" + x + "," + (ky - 20) + " " + (x + 13) + "," + (ky - 6) + " L" + (x + 14) + "," + (ky + 18) + " Q" + x + "," + (ky + 26) + " " + (x - 14) + "," + (ky + 18) + " Z", i === 0 ? "#F4F1DE" : "#F1C84B", LEAF, 0.8);
    if (i === 0) b += ci(x, ky + 4, 7, "#FFFFFF", MUT, 0.6);
    if (i === 1) b += el(x, ky + 6, 8, 10, "#FBF6E2");
    if (i === 2) b += el(x, ky + 8, 8, 9, "#F6E7B0");
    if (i === 3){ b += pa("M" + (x - 12) + "," + (ky - 4) + " Q" + x + "," + (ky + 2) + " " + (x + 12) + "," + (ky - 4), null, "#9C7A1D", 1) + rc(x - 13, ky + 6, 26, 12, "#FBF6E2", null, 2) + ln(x - 14, ky + 6, x + 14, ky + 6, BAD, 1.2, "3 2"); }
    if (i === 4) b += rc(x - 9, ky + 18, 18, 4, "#222", null, 1);
    b += t(x, ky + 46, k[0], {a:"middle", w:700}) + t(x, ky + 60, k[1], {a:"middle", s:11.5, c:MUT}); });
  b += t(10, ky - 30, "Kernel cross sections", {s:12, c:MUT});
  return svg(760, 515, b, "Corn reproductive growth stages and kernel stages");
}};
F["soy-veg"] = {c:"Soybean vegetative stages. V stages count fully developed trifoliate nodes. Water use stays low until the canopy closes, often near V5 to R1 in 30-inch rows.", s:function(){
  var gy = 220, xs = [70, 205, 340, 490, 650], b = ground(gy, 760);
  b += soy(xs[0], gy, {h:10, hook:1}) + soy(xs[1], gy, {h:24, n:0}) + soy(xs[2], gy, {h:42, n:1}) + soy(xs[3], gy, {h:78, n:3}) + soy(xs[4], gy, {h:120, n:5, yellowLow:0});
  b += stageLabels(xs[0], gy + 44, "VE", "Emergence", ["hypocotyl hook pulls", "cotyledons up"]);
  b += stageLabels(xs[1], gy + 44, "VC", "Unifoliates open", ["first true leaves", "ETc under 0.05 in/day"]);
  b += stageLabels(xs[2], gy + 44, "V1", "First trifoliate", ["nodules forming", "ETc about 0.06 in/day"]);
  b += stageLabels(xs[3], gy + 44, "V3", "Three trifoliates", ["new node every 3 to 5 days", "ETc about 0.10 in/day"]);
  b += stageLabels(xs[4], gy + 44, "V5", "Five trifoliates", ["canopy closing", "ETc 0.15 to 0.20 in/day"]);
  return svg(760, 300, b, "Soybean vegetative growth stages");
}};
F["soy-rep"] = {c:"Soybean reproductive stages R1 to R8. The critical irrigation window is R3 to R6, when pod number and seed size are set. UD research at Warrington Farm found water timed to these stages pays better than watering on a fixed schedule.", s:function(){
  var gy = 230, xs = [50, 140, 230, 320, 410, 500, 600, 700], b = ground(gy, 760);
  var o = [{n:6, flowers:1}, {n:7, flowers:3}, {n:8, flowers:2, pods:1}, {n:9, pods:2}, {n:9, pods:3, podNodes:5}, {n:9, pods:4, podNodes:6}, {n:9, pods:4, podNodes:6, yellowLow:9, podcol:TAN}, {n:9, pods:4, podNodes:6, bare:1, podcol:SOIL, stem:SOIL}];
  var L = [["R1", "Begin bloom", "1 open flower"], ["R2", "Full bloom", "top nodes"], ["R3", "Begin pod", "3/16 in pod"], ["R4", "Full pod", "3/4 in pod"], ["R5", "Begin seed", "most sensitive"], ["R6", "Full seed", "seed fills pod"], ["R7", "Begin maturity", "stop irrigating"], ["R8", "Full maturity", "95% pods brown"]];
  xs.forEach(function(x, i){ o[i].h = 120 + i * 6; b += soy(x, gy, o[i]); b += stageLabels(x, gy + 44, L[i][0], L[i][1], L[i].slice(2)); });
  b += rc(xs[2] - 40, 14, xs[5] - xs[2] + 80, 20, "var(--gold-soft)", GOLD, 6) + t((xs[2] + xs[5]) / 2, 28, "critical irrigation window R3 to R6", {a:"middle", s:12, c:WARN});
  return svg(760, 310, b, "Soybean reproductive growth stages");
}};
F["wheat"] = {c:"Winter wheat and barley on the Feekes scale. In Delaware, Feekes 2 to 3 is late fall, Feekes 5 to 6 is March, heading is early May and harvest is mid to late June, just in time for double-crop soybean. Irrigation is uncommon but pays in a dry April and May, from jointing through grain fill.", s:function(){
  var gy = 230, xs = [55, 150, 245, 340, 440, 540, 640, 720], b = ground(gy, 760);
  b += wheat(xs[0], gy, {h:20, tillers:1, leaves:1});
  b += wheat(xs[1], gy, {h:30, tillers:4, leaves:2});
  b += wheat(xs[2], gy, {h:46, tillers:4, leaves:2});
  b += wheat(xs[3], gy, {h:70, tillers:3, leaves:3, nodes:1});
  b += wheat(xs[4], gy, {h:110, tillers:3, leaves:3, nodes:3});
  b += wheat(xs[5], gy, {h:130, tillers:3, leaves:3, nodes:3, head:"boot"});
  b += wheat(xs[6], gy, {h:150, tillers:3, leaves:3, nodes:3, head:"flower", awns:1});
  b += wheat(xs[7], gy, {h:150, tillers:3, leaves:3, nodes:3, head:"ripe", awns:1, col:TAN, stem:TAN, ripe:1});
  [["1", "Emergence", ""], ["2 to 3", "Tillering", "fall"], ["4 to 5", "Green-up", "erect sheaths"], ["6", "Jointing", "first node"], ["8 to 9", "Flag leaf", "last leaf out"], ["10", "Boot", "head in sheath"], ["10.5.1", "Flowering", "scab risk"], ["11", "Ripening", "June harvest"]].forEach(function(l, i){ b += stageLabels(xs[i], gy + 44, "F" + l[0], l[1], l[2] ? [l[2]] : []); });
  return svg(760, 310, b, "Wheat Feekes growth stages");
}};
F["lima"] = {c:"Lima bean stages as used in Delaware processing production. Heat at early flowering, especially nights above about 70 F, causes flower and pod drop. Keep the crop free of water stress from first bloom through pod fill.", s:function(){
  var gy = 220, xs = [70, 200, 335, 475, 620], b = ground(gy, 760);
  b += bean(xs[0], gy, {h:10, hook:1}) + bean(xs[1], gy, {h:46, n:2, big:1}) + bean(xs[2], gy, {h:84, n:5, big:1, flowers:3, fcol:"#F6F3E6"}) + bean(xs[3], gy, {h:96, n:6, big:1, flowers:2, fcol:"#F6F3E6", pods:1, lima:1}) + bean(xs[4], gy, {h:100, n:6, big:1, pods:3, podNodes:4, lima:1});
  b += stageLabels(xs[0], gy + 44, "Emergence", "Crook breaks soil", ["crusting risk"]);
  b += stageLabels(xs[1], gy + 44, "Vegetative", "2 to 4 trifoliates", ["low water use"]);
  b += stageLabels(xs[2], gy + 44, "First bloom", "Most heat-sensitive", ["Ky high; avoid stress"]);
  b += stageLabels(xs[3], gy + 44, "Pod set", "Small flat pods", ["hot nights drop pods"]);
  b += stageLabels(xs[4], gy + 44, "Full pod", "Green seed for harvest", ["keep water to harvest"]);
  return svg(760, 300, b, "Lima bean growth stages");
}};
F["snapbean"] = {c:"Snap bean stages. From planting to harvest takes about 50 to 60 days. Water stress at bloom and early pod growth causes split sets and crooked pods.", s:function(){
  var gy = 130, xs = [80, 230, 380, 530, 670], b = ground(gy, 760);
  b += bean(xs[0], gy, {h:10, hook:1}) + bean(xs[1], gy, {h:42, n:2}) + bean(xs[2], gy, {h:72, n:4, flowers:3}) + bean(xs[3], gy, {h:80, n:5, flowers:1, pods:1}) + bean(xs[4], gy, {h:84, n:5, pods:3});
  b += stageLabels(xs[0], gy + 44, "VE", "Emergence", ["day 5 to 8"]);
  b += stageLabels(xs[1], gy + 44, "V2", "Second trifoliate", ["day 15 to 20"]);
  b += stageLabels(xs[2], gy + 44, "R1 to R2", "Bloom", ["day 30 to 38; critical"]);
  b += stageLabels(xs[3], gy + 44, "Pin pod", "Pods 1 in", ["keep soil moist"]);
  b += stageLabels(xs[4], gy + 44, "Harvest", "Sieve size 4 to 5", ["day 50 to 60"]);
  return svg(760, 210, b, "Snap bean growth stages");
}};
F["melon"] = {c:"Seedless watermelon on raised beds with plastic mulch and drip tape (the blue dot under the plastic). Transplants go out late April to May. Keep soil evenly moist from flowering through fruit sizing; cut back near harvest to protect sugar and reduce cracking.", s:function(){
  var gy = 90, xs = [80, 230, 380, 530, 680], b = "";
  b += melon(xs[0], gy, {transplant:1}) + melon(xs[1], gy, {vine:40, leaves:2}) + melon(xs[2], gy, {vine:55, leaves:3, flowers:3}) + melon(xs[3], gy, {vine:60, leaves:3, flowers:1, fruit:9}) + melon(xs[4], gy, {vine:60, leaves:3, fruit:19, spot:1});
  b += stageLabels(xs[0], gy + 44, "Transplant", "On plastic, drip on", ["light frequent water"]);
  b += stageLabels(xs[1], gy + 44, "Vining", "Runners 1 to 2 ft", ["Kc rising"]);
  b += stageLabels(xs[2], gy + 44, "Flowering", "Pollinizer and bees", ["no stress now"]);
  b += stageLabels(xs[3], gy + 44, "Fruit set", "Fruit the size of an egg", ["steady water"]);
  b += stageLabels(xs[4], gy + 44, "Sizing to harvest", "Ground spot turns yellow", ["taper water at end"]);
  return svg(760, 170, b, "Watermelon growth stages on plastic mulch");
}};

/* ---------- Charts ---------- */
function frame(x0, y0, w, h, xr, yr, xt, yt, xl, yl, fmtx){
  var X = function(v){ return x0 + (v - xr[0]) / (xr[1] - xr[0]) * w; }, Y = function(v){ return y0 + h - (v - yr[0]) / (yr[1] - yr[0]) * h; };
  var s = "";
  yt.forEach(function(v){ s += ln(x0, Y(v), x0 + w, Y(v), LINE, 1) + t(x0 - 6, Y(v) + 4, v, {a:"end", s:11.5, c:MUT}); });
  xt.forEach(function(v){ s += ln(X(v), y0 + h, X(v), y0 + h + 4, LS) + t(X(v), y0 + h + 17, fmtx ? fmtx(v) : v, {a:"middle", s:11.5, c:MUT}); });
  s += ln(x0, y0 + h, x0 + w, y0 + h, LS, 1.2) + ln(x0, y0, x0, y0 + h, LS, 1.2);
  if (xl) s += t(x0 + w / 2, y0 + h + 34, xl, {a:"middle", s:12, c:MUT});
  if (yl) s += t(x0 - 40, y0 + h / 2, yl, {a:"middle", s:12, c:MUT, r:-90});
  return {s:s, X:X, Y:Y};
}
function poly(pts, X, Y){ return pts.map(function(p, i){ return (i ? "L" : "M") + X(p[0]).toFixed(1) + "," + Y(p[1]).toFixed(1); }).join(" "); }
F["kc-curve"] = {c:"Crop coefficient (Kc) through the season for field corn and full-season soybean planted in early May in Delaware, using FAO-56 standard values. Crop water use = Kc x reference ET (ETo).", s:function(){
  var fr = frame(70, 30, 640, 220, [0, 140], [0, 1.4], [0, 20, 40, 60, 80, 100, 120, 140], [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4], "Days after planting", "Kc"), b = fr.s, X = fr.X, Y = fr.Y;
  [[0, 25, "Initial"], [25, 65, "Development"], [65, 105, "Mid-season"], [105, 135, "Late"]].forEach(function(s, i){ b += rc(X(s[0]), 30, X(s[1]) - X(s[0]), 220, i % 2 ? SKY : "none", null, 0, 0.6) + t((X(s[0]) + X(s[1])) / 2, 46, s[2], {a:"middle", s:11.5, c:MUT}); });
  b += pa(poly([[0, 0.3], [25, 0.3], [65, 1.2], [105, 1.2], [135, 0.45]], X, Y), null, LEAF, 3);
  b += pa(poly([[0, 0.4], [20, 0.4], [60, 1.15], [110, 1.15], [135, 0.5]], X, Y), null, ACC, 3, ' stroke-dasharray="7 5"');
  [[16, "V4"], [42, "V10"], [62, "VT"], [66, "R1"], [80, "R3"], [100, "R5"], [118, "R6"]].forEach(function(m){ b += ln(X(m[0]), Y(0), X(m[0]), Y(0) - 6, LEAF, 2) + t(X(m[0]), Y(0) - 10, m[1], {a:"middle", s:10.5, c:LEAF}); });
  b += ln(500, 280, 530, 280, LEAF, 3) + t(536, 284, "Field corn (Kc mid 1.20)", {s:12}) + ln(500, 298, 530, 298, ACC, 3, "7 5") + t(536, 302, "Soybean (Kc mid 1.15)", {s:12});
  return svg(760, 310, b, "Crop coefficient curve");
}};
F["bucket"] = {c:"The root zone as a water tank. Example: loamy sand, 24-inch root zone, available water capacity 0.07 in/in. Total available water (TAW) is 1.68 in; readily available water (RAW) at p = 0.55 is 0.92 in. Because a pivot needs about 3 days to cover the field, start when depletion reaches about 0.22 in, not 0.92 in.", s:function(){
  var b = "", x = 220, w = 160, top = 40, sat = 70, fc = 100, pwp = 330, raw = fc + (pwp - fc) * 0.55, trig = fc + (pwp - fc) * 0.13;
  b += rc(x, top, w, pwp + 30 - top, "var(--bg)", LS, 10);
  b += rc(x + 2, trig, w - 4, pwp + 28 - trig, WATER, null, 0, 0.35) + rc(x + 2, pwp, w - 4, 28, SOIL, null, 0, 0.35);
  [[sat, "Saturation (drains away)", MUT], [fc, "Field capacity (FC): full", ACC], [trig, "Pivot trigger: start here (depletion 0.22 in)", GOOD], [raw, "RAW line: stress starts (depletion 0.92 in)", WARN], [pwp, "Permanent wilting point (PWP): empty", BAD]].forEach(function(l){ b += ln(x - 10, l[0], x + w + 10, l[0], l[2], 2, l[2] === MUT ? "4 3" : null) + t(x + w + 18, l[0] + 4, l[1], {c:l[2], s:12.5}); });
  b += arrow(x - 40, fc, x - 40, pwp, INK, 1.2) + arrow(x - 40, pwp, x - 40, fc, INK, 1.2) + t(x - 48, (fc + pwp) / 2, "TAW 1.68 in", {a:"end", s:13, w:600});
  b += arrow(x - 18, fc, x - 18, raw, WARN, 1.2) + t(x - 48, (fc + raw) / 2 - 18, "RAW 0.92 in", {a:"end", s:12.5, c:WARN});
  b += t(x + w / 2, pwp + 48, "Root zone 24 in deep", {a:"middle", s:12, c:MUT});
  return svg(760, 400, b, "Soil water bucket diagram");
}};
F["soil-awc"] = {c:"Typical available water capacity by soil texture on the Delmarva Coastal Plain, inches of water per foot of soil. Use the Web Soil Survey number for a real field.", sm:true, s:function(){
  var rows = [["Sand (Evesboro)", 0.6], ["Loamy sand (Rumford, Fort Mott)", 0.9], ["Sandy loam (Downer)", 1.4], ["Fine sandy loam", 1.7], ["Silt loam (Matapeake, Sassafras subsoil)", 2.2]], b = "";
  rows.forEach(function(r, i){ var y = 22 + i * 38; b += t(10, y + 15, r[0], {s:12.5}) + rc(270, y, r[1] * 150, 22, WATER, null, 4, 0.75) + t(278 + r[1] * 150, y + 16, r[1].toFixed(1) + " in/ft", {s:12.5, w:600}); });
  b += t(270, 220, "In a 2-ft root zone, sand holds about 1.2 in; silt loam holds about 4.4 in.", {s:12, c:MUT});
  return svg(680, 232, b, "Available water by soil texture");
}};
F["ky"] = {c:"Yield response factor (Ky) by growth stage, from FAO Irrigation and Drainage Paper 33. A Ky of 1.5 means a 10 percent shortfall in water use costs 15 percent of yield. Flowering in corn and seed fill in soybean are where water pays most.", sm:true, s:function(){
  var corn = [["Vegetative", 0.4], ["Flowering", 1.5], ["Yield formation", 0.5], ["Ripening", 0.2]], soy = [["Vegetative", 0.2], ["Flowering", 0.8], ["Yield formation", 1.0], ["Ripening", 0.2]], b = "";
  function grp(x, title, d, c){ var s = t(x + 120, 22, title, {a:"middle", s:14, w:600}); d.forEach(function(r, i){ r = [TR(r[0]), r[1]]; var h = r[1] * 120, xx = x + i * 62; s += rc(xx, 220 - h, 44, h, c, null, 3, 0.85) + t(xx + 22, 214 - h, r[1].toFixed(1), {a:"middle", s:12.5, w:600}) + t(xx + 22, 236, r[0].split(" ")[0], {a:"middle", s:11, c:MUT}) + (r[0].split(" ")[1] ? t(xx + 22, 249, r[0].split(" ")[1], {a:"middle", s:11, c:MUT}) : ""); }); return s; }
  b += grp(20, "Corn", corn, LEAF) + grp(330, "Soybean", soy, ACC) + ln(10, 220 - 120, 600, 220 - 120, BAD, 1, "4 3") + t(600, 216 - 120, "Ky = 1", {a:"end", s:11, c:BAD});
  return svg(620, 260, b, "Yield response factor by stage");
}};
F["sensor-trend"] = {c:"Soil water tension at three depths under irrigated corn on a loamy sand in July (illustration). Daytime drops with flat nights show active roots. The 18-in sensor responding means roots have reached it. Irrigation (blue bars) brings the 6 and 12-in sensors back down; the trigger here is 30 cb.", s:function(){
  var fr = frame(70, 20, 640, 220, [0, 10], [0, 60], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 10, 20, 30, 40, 50, 60], "Day", "Tension (cb)"), b = fr.s, X = fr.X, Y = fr.Y;
  function series(start, rate, resets, depth){ var pts = [], v = start; for (var d = 0; d <= 10; d += 0.125){ var hr = (d % 1) * 24, day = hr > 8 && hr < 19; if (resets.indexOf(Math.round(d * 8) / 8) >= 0) v = start + (depth ? 4 : 0); else if (day) v += rate / 11 / 8 * 24 / 1.0 * 0.125 * 8; pts.push([d, Math.min(58, v)]); } return pts; }
  var irr = [3.5, 7.0];
  irr.forEach(function(d){ b += rc(X(d) - 4, Y(60), 8, Y(0) - Y(60), WATER, null, 0, 0.25); });
  b += ln(X(0), Y(30), X(10), Y(30), BAD, 1.2, "6 4") + t(X(10) - 4, Y(30) - 5, "trigger 30 cb", {a:"end", s:11.5, c:BAD});
  b += pa(poly(series(12, 5.5, irr, 0), X, Y), null, LEAF, 2.4) + pa(poly(series(14, 4.5, irr, 1), X, Y), null, ACC, 2.4) + pa(poly(series(15, 1.6, [], 1), X, Y), null, GOLD, 2.4);
  b += ln(560, 286, 590, 286, LEAF, 3) + t(596, 290, "6 in", {s:12}) + ln(630, 286, 660, 286, ACC, 3) + t(666, 290, "12 in", {s:12}) + ln(560, 304, 590, 304, GOLD, 3) + t(596, 308, "18 in", {s:12});
  return svg(760, 316, b, "Soil moisture sensor trend");
}};
F["water-balance"] = {c:"A two-week checkbook for irrigated corn at tasseling on loamy sand (TAW 1.68 in). Depletion climbs each day by crop ET; rain and irrigation pull it back. The grower waited from day 8 to day 13 between passes; even with a rain on day 11, depletion crossed the RAW line (0.92 in) on day 12. Starting the pivot when depletion reaches about 0.22 in avoids that.", s:function(){
  var fr = frame(70, 20, 640, 230, [0, 14], [0, 1.2], [0, 2, 4, 6, 8, 10, 12, 14], [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2], "Day", "Depletion (in)"), b = fr.s, X = fr.X, Y = fr.Y;
  var et = [0.27, 0.29, 0.30, 0.26, 0.22, 0.28, 0.31, 0.30, 0.25, 0.20, 0.27, 0.29, 0.30, 0.28], rain = {4:0.55, 10:0.35}, irr = {1:0.75, 7:0.75, 12:0.75}, d = 0.15, pts = [[0, d]];
  for (var i = 0; i < 14; i++){ d = Math.max(0, d + et[i] - (rain[i] || 0) - (irr[i] || 0)); pts.push([i + 1, d]); if (rain[i]) b += rc(X(i + 0.6), Y(rain[i]), 10, Y(0) - Y(rain[i]), ACC, null, 0, 0.35); if (irr[i]) b += rc(X(i + 0.6), Y(irr[i]), 10, Y(0) - Y(irr[i]), WATER, null, 0, 0.6); }
  b += ln(X(0), Y(0.92), X(14), Y(0.92), BAD, 1.4, "6 4") + t(X(14) - 4, Y(0.92) - 6, "RAW 0.92 in: stress", {a:"end", s:11.5, c:BAD});
  b += ln(X(0), Y(0.22), X(14), Y(0.22), GOOD, 1.4, "6 4") + t(X(14) - 4, Y(0.22) - 6, "start pivot at 0.22 in", {a:"end", s:11.5, c:GOOD});
  b += pa(poly(pts, X, Y), null, INK, 2.4); pts.forEach(function(p){ b += ci(X(p[0]), Y(p[1]), 3, SURF, INK, 1.4); });
  b += rc(80, 286, 12, 12, WATER, null, 0, 0.6) + t(98, 296, "irrigation 0.75 in net", {s:12}) + rc(270, 286, 12, 12, ACC, null, 0, 0.35) + t(288, 296, "effective rain", {s:12});
  return svg(760, 310, b, "Water balance checkbook chart");
}};
F["county"] = {c:"Irrigated acres and share of land in farms by Delaware county, 2022 Census of Agriculture (USDA NASS). Statewide about 144,500 acres were irrigated, close to 28 percent of the 522,834 acres in farms.", sm:true, s:function(){
  var d = [["Sussex", 83348, 32], ["Kent", 56672, 30], ["New Castle", 4493, 6]], b = "";
  d.forEach(function(r, i){ var y = 24 + i * 50, w = r[1] / 90000 * 420; b += t(10, y + 18, r[0], {s:14, w:600}) + rc(110, y, w, 28, LEAF, null, 4, 0.8) + t(118 + w, y + 19, r[1].toLocaleString("en-US") + " ac (" + r[2] + "% of farmland)", {s:12.5}); });
  return svg(720, 180, b, "Irrigated acres by Delaware county");
}};
F["catch-can"] = {c:"A center pivot catch can test: 13 cans at 100-ft spacing from the pivot point. Outer cans count more because they stand for more acres. This data set gives a Heermann-Hein coefficient of uniformity of 87.9 and a low-quarter distribution uniformity of 78.7. The low readings at 1,100 and 1,200 ft point to a worn or plugged nozzle or a sticking regulator in that span.", s:function(){
  var v = [0.93, 0.88, 0.90, 0.70, 0.86, 0.87, 0.74, 0.79, 0.84, 0.91, 0.61, 0.60, 0.78], mean = 0.768;
  var fr = frame(70, 20, 560, 220, [0, 1350], [0, 1.1], [100, 300, 500, 700, 900, 1100, 1300], [0, 0.2, 0.4, 0.6, 0.8, 1.0], "Distance from pivot point (ft)", "Catch (in)"), b = fr.s, X = fr.X, Y = fr.Y;
  v.forEach(function(c, i){ var x = X((i + 1) * 100); b += rc(x - 14, Y(c), 28, Y(0) - Y(c), c < mean * 0.85 ? WARN : WATER, null, 3, 0.8) + t(x, Y(c) - 5, c.toFixed(2), {a:"middle", s:11}); });
  b += ln(X(0), Y(mean), X(1350), Y(mean), INK, 1.4, "6 4") + t(X(1350) + 8, Y(mean) - 2, "weighted mean", {s:11.5}) + t(X(1350) + 8, Y(mean) + 12, "0.77 in", {s:11.5});
  return svg(760, 290, b, "Catch can test results");
}};
F["pivot-rings"] = {c:"Why the outside of a pivot matters most. Splitting the radius into four equal rings, the outer quarter waters 44 percent of the circle and the inner quarter only 6 percent. A clogged nozzle near the end damages far more acres than one near the center.", sm:true, s:function(){
  var cx = 170, cy = 170, R = 150, fr = [0.0625, 0.1875, 0.3125, 0.4375], cols = ["var(--sky)", "var(--accent-soft)", WATER, ACC], b = "";
  for (var i = 3; i >= 0; i--) b += ci(cx, cy, R * (i + 1) / 4, cols[i], SURF, 2);
  b += ci(cx, cy, 5, INK) + ln(cx, cy, cx + R, cy, INK, 2);
  [0, 1, 2, 3].forEach(function(i){ b += t(cx + R * (i + 0.5) / 4, cy - 6, Math.round(fr[i] * 100) + "%", {a:"middle", s:13, w:700, c:i > 1 ? SURF : INK}); });
  b += t(350, 50, "Share of irrigated area", {s:14, w:600}); ["Inner quarter of radius: 6%", "Second quarter: 19%", "Third quarter: 31%", "Outer quarter: 44%"].forEach(function(s, i){ b += rc(350, 70 + i * 28, 16, 16, cols[i], LS, 3) + t(374, 83 + i * 28, s, {s:13}); });
  b += t(350, 210, "Area of a ring = pi x (outer radius squared", {s:12, c:MUT}) + t(350, 226, "minus inner radius squared).", {s:12, c:MUT});
  return svg(640, 340, b, "Pivot area by ring");
}};
F["pivot-side"] = {c:"Parts of a center pivot. Spans hang between drive towers; drops carry pressure regulators and sprinklers down toward the crop; the last regular tower sets the speed through the percent timer; the end gun with its booster pump reaches past the last tower.", s:function(){
  var gy = 230, b = ground(gy, 760), xs = [60, 220, 380, 540, 680];
  b += rc(48, 110, 24, 120, LS, INK, 2) + t(60, 100, "Pivot point", {a:"middle", s:12}) + t(60, 250 + 20, "well and pump feed", {a:"middle", s:11, c:MUT});
  for (var i = 0; i < 4; i++){ var a = xs[i], c = xs[i + 1];
    b += pa("M" + a + ",110 Q" + (a + c) / 2 + ",98 " + c + ",110", null, INK, 3) + pa("M" + a + ",110 L" + (a + c) / 2 + ",150 L" + c + ",110", null, LS, 1.2);
    for (var k = 1; k < 8; k++){ var x = a + (c - a) * k / 8, y = 110 - 12 * Math.sin(Math.PI * k / 8); b += ln(x, y, x, 178, WATER, 1.2) + rc(x - 2.5, 172, 5, 6, ACC) + pa("M" + (x - 9) + ",196 L" + x + ",180 L" + (x + 9) + ",196", "var(--sky)", null); }
    if (i > 0 || true){ var tx = c; b += pa("M" + (tx - 18) + "," + gy + " L" + tx + ",110 L" + (tx + 18) + "," + gy, null, INK, 2) + ci(tx - 18, gy - 10, 10, SURF, INK, 2) + ci(tx + 18, gy - 10, 10, SURF, INK, 2) + rc(tx - 7, 196, 14, 10, GOLD, INK, 2); }
  }
  b += pa("M680,110 L730,104", null, INK, 3) + rc(722, 92, 16, 12, ACC, INK, 2) + pa("M738,98 q14,-14 22,0", null, WATER, 2.2) + t(730, 84, "End gun", {a:"middle", s:12});
  b += t(150, 72, "Span (pipe and truss)", {a:"middle", s:12}) + arrow(150, 76, 150, 100, LS, 1);
  b += t(300, 270, "Drive tower: motor, gearbox, wheels", {a:"middle", s:12}) + arrow(320, 258, 375, 222, LS, 1);
  b += t(460, 72, "Drop with regulator and sprinkler", {a:"middle", s:12}) + arrow(460, 76, 480, 168, LS, 1);
  b += t(640, 270, "Last regular tower (sets speed)", {a:"middle", s:12}) + arrow(660, 258, 680, 232, LS, 1);
  b += t(735, 140, "booster", {a:"middle", s:11, c:MUT});
  return svg(770, 290, b, "Parts of a center pivot");
}};
F["drip-wet"] = {c:"Water spreads differently under drip on different soils. On Delaware sands the wetted zone is narrow and deep, so water goes down past the roots if run times are long. Shorter, more frequent pulses keep water where the roots are. On sandy loam it spreads wider.", s:function(){
  var b = "";
  function panel(x, title, wide, deep){ var s = t(x + 170, 22, title, {a:"middle", s:14, w:600}); s += rc(x, 60, 340, 210, SOIL, null, 8, 0.16) + pa("M" + (x + 90) + ",72 L" + (x + 110) + ",60 L" + (x + 230) + ",60 L" + (x + 250) + ",72 Z", "#2A2E2B") + ci(x + 170, 66, 3, WATER);
    s += el(x + 170, 66 + deep * 0.48, wide, deep * 0.5, WATER, 0) .replace('fill="' + WATER + '"', 'fill="' + WATER + '" opacity=".35"');
    s += el(x + 170, 66 + deep * 0.3, wide * 0.6, deep * 0.3, WATER, 0).replace('fill="' + WATER + '"', 'fill="' + WATER + '" opacity=".35"');
    s += t(x + 170, 290, "wetted width about " + Math.round(wide * 2 / 8) + " in, depth " + Math.round(deep / 8) + " in after 2 h", {a:"middle", s:12, c:MUT}); return s; }
  b += panel(20, "Loamy sand (Evesboro, Rumford)", 34, 180) + panel(400, "Sandy loam (Downer)", 64, 130);
  b += t(190, 46, "plastic mulch and drip tape", {a:"middle", s:11, c:MUT});
  return svg(760, 300, b, "Drip wetting patterns by soil");
}};
F["aquifers"] = {c:"Simplified west to east cross section of southern Delaware. Most irrigation wells pump from the shallow, unconfined Columbia aquifer; many homes and towns use deeper confined aquifers (Pocomoke, Manokin and below), which are separated by clay. Near the coast, salty water sits under and beside the fresh water and moves inland if heads drop. Not to scale.", s:function(){
  var b = rc(0, 0, 760, 40, SKY, null, 0, 0.6);
  b += pa("M0,60 L760,70 L760,120 L0,108 Z", "#E9D79C", null) + pa("M0,108 L760,120 L760,138 L0,124 Z", "#9C8466", null) + pa("M0,124 L760,138 L760,186 L0,168 Z", "#E9D79C", null) + pa("M0,168 L760,186 L760,204 L0,186 Z", "#9C8466", null) + pa("M0,186 L760,204 L760,254 L0,234 Z", "#E9D79C", null) + pa("M0,234 L760,254 L760,290 L0,270 Z", "#9C8466", null);
  b += pa("M590,66 L760,70 L760,290 L700,290 Q640,200 600,120 Z", "#6E8FA8", null, null, ' opacity=".55"');
  b += pa("M0,40 L700,40 Q720,44 730,60 L760,62 L760,70 L0,60 Z", "#8DBF6B", null) + rc(730, 40, 30, 22, WATER, null, 0, 0.6) + t(756, 34, "ocean or bay", {a:"end", s:11, c:MUT});
  b += t(10, 92, "Columbia aquifer (unconfined sand): most irrigation wells", {s:12.5, w:600}) + t(10, 120, "clay", {s:11, c:SURF}) + t(10, 152, "Pocomoke aquifer (confined)", {s:12.5}) + t(10, 182, "clay", {s:11, c:SURF}) + t(10, 216, "Manokin aquifer (confined)", {s:12.5}) + t(10, 256, "deeper clay and aquifers", {s:11, c:SURF});
  b += ln(520, 40, 520, 104, INK, 3) + rc(516, 90, 8, 14, WATER) + t(520, 34, "irrigation well", {a:"middle", s:11.5}) + ln(420, 40, 420, 216, INK, 2) + rc(416, 202, 8, 14, WATER) + t(400, 34, "town or home well", {a:"middle", s:11.5});
  [100, 160, 220].forEach(function(x){ b += arrow(x, 30, x, 66, WATER, 1.5); }); b += t(160, 22, "recharge from rain, mostly Nov to Apr", {a:"middle", s:11.5, c:WATER});
  b += t(680, 180, "salty water", {a:"middle", s:12, c:SURF, w:600});
  return svg(760, 300, b, "Delmarva stacked aquifers cross section");
}};
F["salinity"] = {c:"A transect from tidal marsh inland on a low Eastern Shore farm. Salt moves up ditches and through the soil during storm tides. Corn yield starts dropping above about 1.7 dS/m (saturated paste ECe) and soybean above about 5 dS/m.", s:function(){
  var b = "", zones = [["Tidal marsh", "ECe over 15", "#6E8FA8"], ["Ghost forest", "ECe 8 to 15", "#8A7F6B"], ["Salt patch", "ECe 4 to 8", "#D9D2C2"], ["Reduced yield", "ECe 2 to 4", "#C7D69C"], ["Normal field", "ECe under 2", "#8DBF6B"]];
  zones.forEach(function(z, i){ var x = 20 + i * 146; b += rc(x, 80, 140, 70, z[2], null, 6, 0.85) + t(x + 70, 172, z[0], {a:"middle", s:13, w:600}) + t(x + 70, 188, z[1] + " dS/m", {a:"middle", s:12, c:MUT}); });
  [180, 205, 230].forEach(function(x){ b += ln(x, 80, x, 40, "#5A4F3F", 2) + ln(x, 52, x - 8, 44, "#5A4F3F", 1.4); });
  for (var i = 0; i < 8; i++) b += ci(330 + i * 14, 140 - (i % 3) * 6, 1.6, "#FFFFFF");
  for (var j = 0; j < 6; j++) b += ln(470 + j * 20, 80, 470 + j * 20, 64 + (j % 2) * 4, LEAF, 2) + ln(616 + j * 20, 80, 616 + j * 20, 48, LEAF, 2.4);
  b += arrow(80, 220, 640, 220, WATER, 1.6) + t(360, 240, "storm tides and ditches push salt inland; rising sea level moves the zones east to west each decade", {a:"middle", s:12, c:MUT});
  return svg(760, 250, b, "Salinity transect");
}};
F["chemigation"] = {c:"Required chemigation safety layout for a groundwater source. On the water line: check valve, vacuum relief, low-pressure drain and inspection port, all upstream of the injection point. On the chemical line: an injection line check valve and a normally closed solenoid. The interlock shuts off the injection pump if the irrigation pump stops.", s:function(){
  var b = '<g transform="translate(0,-90)">' + ln(40, 150, 720, 150, WATER, 8);
  b += rc(20, 120, 50, 60, LS, INK, 4) + t(45, 200, "Well and pump", {a:"middle", s:12});
  var parts = [[150, "Check valve"], [250, "Vacuum relief"], [350, "Low-pressure drain"], [450, "Inspection port"]];
  parts.forEach(function(p){ b += rc(p[0] - 14, 136, 28, 28, ACC, INK, 4) + t(p[0], 120, p[1], {a:"middle", s:12}); });
  b += ci(560, 150, 8, GOLD, INK, 1.5) + t(560, 120, "Injection point", {a:"middle", s:12}) + arrow(690, 150, 730, 150, WATER, 2) + t(700, 134, "to pivot", {a:"middle", s:11.5, c:MUT});
  b += rc(520, 230, 80, 50, "var(--gold-soft)", GOLD, 6) + t(560, 300, "Chemical tank", {a:"middle", s:12}) + rc(630, 230, 54, 36, SURF, INK, 4) + t(657, 252, "Pump", {a:"middle", s:11.5}) + t(657, 300, "Injection pump", {a:"middle", s:12});
  b += pa("M600,250 L630,250", null, GOLD, 3) + pa("M657,230 L657,200 L560,200 L560,158", null, GOLD, 3) + rc(600, 192, 18, 16, ACC, INK, 3) + t(609, 186, "check", {a:"middle", s:10.5}) + rc(575, 178, 16, 14, BAD, INK, 3) + t(612, 172, "", {});
  b += t(520, 178, "NC solenoid", {a:"end", s:10.5});
  b += pa("M45,180 L45,330 L657,330 L657,266", null, BAD, 1.6, ' stroke-dasharray="6 4"') + t(350, 324, "electrical interlock: irrigation pump off means injection off", {a:"middle", s:12, c:BAD});
  return svg(760, 255, b + '</g>', "Chemigation safety equipment layout");
}};
F["pump-tdh"] = {c:"What adds up to total dynamic head (TDH) for a well feeding a pivot. Example: pumping water level 65 ft and 55 psi at the discharge gives TDH = 65 + 2.31 x 55 = 192.1 ft. At 750 gpm that is 36.4 water horsepower.", s:function(){
  var b = ground(70, 760) + rc(0, 96, 760, 230, SOIL, null, 0, 0.08);
  b += rc(140, 70, 40, 250, "var(--bg)", INK) + rc(141, 140, 38, 180, WATER, null, 0, 0.3);
  b += ln(100, 120, 220, 120, ACC, 1.4, "6 4") + t(230, 124, "Static water level (pump off)", {s:12, c:ACC});
  b += ln(100, 170, 220, 170, BAD, 1.4, "6 4") + t(230, 174, "Pumping water level (pump on)", {s:12, c:BAD});
  b += arrow(110, 120, 110, 168, MUT, 1) + t(104, 148, "drawdown", {a:"end", s:11, c:MUT});
  b += rc(150, 270, 20, 40, LS, INK, 3) + t(200, 300, "Pump bowls", {s:12}) + ln(160, 270, 160, 40, INK, 3);
  b += pa("M160,40 L520,40 L520,30", null, INK, 4) + ci(220, 40, 9, SURF, INK, 1.6) + t(220, 24, "Gauge: 55 psi", {a:"middle", s:12, w:600});
  b += pa("M520,30 L700,30", null, INK, 4) + t(700, 20, "to pivot", {a:"end", s:11.5, c:MUT});
  b += arrow(70, 70, 70, 170, INK, 1.2) + arrow(70, 170, 70, 70, INK, 1.2) + t(62, 124, "lift 65 ft", {a:"end", s:12});
  b += rc(430, 110, 310, 108, SURF, LS, 8) + t(446, 134, "TDH = lift + 2.31 x pressure", {s:13.5, w:600, f:"JetBrains Mono, monospace"}) + t(446, 156, "    = 65 + 2.31 x 55 = 192.1 ft", {s:13, f:"JetBrains Mono, monospace"}) + t(446, 182, "WHP = gpm x TDH / 3,960", {s:13.5, w:600, f:"JetBrains Mono, monospace"}) + t(446, 204, "    = 750 x 192.1 / 3,960 = 36.4", {s:13, f:"JetBrains Mono, monospace"});
  return svg(760, 330, b, "Pump total dynamic head diagram");
}};
F["logic"] = {c:"A logic model for a Delaware irrigation scheduling program. Funders such as SARE and NIFA expect one; PEARS reporting follows the same boxes.", s:function(){
  var cols = [["Inputs", ["Your time and truck", "DEOS and DIMS", "Sensors and loggers", "NRCS and grower partners"]], ["Activities", ["Pivot can tests", "Sensor installs", "Ag Week and field days", "Weekly Crop Update notes"]], ["Outputs", ["Systems tested", "Growers reached", "Fields on DIMS", "Fact sheets"]], ["Short term", ["Growers know TAW, RAW", "Read sensors with confidence", "Trust speed charts"]], ["Medium term", ["Schedule by ET or sensors", "Fix nozzles and pressure", "Apply for EQIP 449"]], ["Long term", ["Water and energy saved", "Yield and profit up", "Less nitrate leaching"]]], b = "";
  cols.forEach(function(c, i){ var x = 8 + i * 126; b += rc(x, 20, 116, 30, i < 3 ? ACC : LEAF, null, 6, 0.9) + t(x + 58, 40, c[0], {a:"middle", s:13, w:600, c:SURF}); c[1].forEach(function(s, j){ s = TR(s); var y = 62 + j * 44; b += rc(x, y, 116, 36, "var(--bg)", LS, 6); var w = s.split(" "), l1 = [], l2 = []; w.forEach(function(x2){ (!l2.length && l1.join(" ").length + x2.length < 17 ? l1 : l2).push(x2); }); b += t(x + 58, y + (l2.length ? 15 : 22), l1.join(" "), {a:"middle", s:11.5}) + (l2.length ? t(x + 58, y + 29, l2.join(" "), {a:"middle", s:11.5}) : ""); }); if (i < 5) b += arrow(x + 117, 35, x + 125, 35, INK, 1.2); });
  return svg(770, 250, b, "Program logic model");
}};
F["crop-calendar"] = {c:"Typical Delaware crop calendar. Bars show planting to harvest; the darker part is when irrigation matters most. Timing shifts a week or two by year and by north versus south of the state.", s:function(){
  var m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], b = "", x0 = 170, w = 46;
  m.forEach(function(s, i){ b += t(x0 + i * w + w / 2, 18, s, {a:"middle", s:12, c:MUT}) + ln(x0 + i * w, 24, x0 + i * w, 300, LINE); });
  var rows = [["Field corn", 3.9, 9.6, 6.3, 8.0], ["Full-season soybean", 4.4, 10.3, 6.9, 8.9], ["Wheat and barley", 9.6, 18.6, 15.4, 16.6], ["Double-crop soybean", 5.6, 11.0, 7.5, 9.6], ["Lima bean (processing)", 5.0, 9.4, 6.5, 8.6], ["Snap bean", 4.3, 9.3, 5.5, 8.0], ["Sweet corn", 3.8, 8.6, 5.6, 7.5], ["Watermelon", 3.8, 9.0, 5.5, 7.8]];
  rows.forEach(function(r, i){ var y = 34 + i * 33; b += t(x0 - 8, y + 16, r[0], {a:"end", s:12.5});
    var s = r[1], e = r[2]; if (e > 12){ b += rc(x0 + s * w, y + 4, (12 - s) * w, 18, LEAF2, null, 4, 0.45) + rc(x0, y + 4, (e - 12) * w, 18, LEAF2, null, 4, 0.45) + rc(x0 + (r[3] - 12) * w, y + 4, (r[4] - r[3]) * w, 18, LEAF, null, 4, 0.9); }
    else b += rc(x0 + s * w, y + 4, (e - s) * w, 18, LEAF2, null, 4, 0.45) + rc(x0 + r[3] * w, y + 4, (r[4] - r[3]) * w, 18, LEAF, null, 4, 0.9); });
  return svg(740, 310, b, "Delaware crop calendar");
}};
F["year-plan"] = {c:"A first-year rhythm for the Extension agricultural engineer at Carvel. Winter is meetings and grant writing; spring is pivot and pump testing before the season; summer is scheduling support and research plots; fall is data, reports and planning.", s:function(){
  var m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], b = "", x0 = 270, w = 40;
  m.forEach(function(s, i){ b += t(x0 + i * w + w / 2, 18, s, {a:"middle", s:12, c:MUT}) + ln(x0 + i * w, 24, x0 + i * w, 330, LINE); });
  var rows = [["Delaware Ag Week, winter meetings", [[0, 1.2]], ACC], ["Grant writing (SARE, CIG, SCBG, NIFA)", [[0, 3], [8.5, 12]], GOLD], ["Pivot and pump tests with NRCS", [[2, 5.5], [8.5, 10]], WATER], ["Sensor installs and DIMS signups", [[3.6, 6]], LEAF], ["Scheduling support, WCU articles", [[5, 9]], LEAF], ["Research plots at Carvel and Warrington", [[3.5, 10.2]], LEAF2], ["Carvel field and crop tour", [[7, 7.8]], ACC], ["Harvest yields, data cleanup", [[8.5, 11]], SOIL], ["PEARS reports, annual review", [[10.5, 12]], MUT]];
  rows.forEach(function(r, i){ var y = 34 + i * 33; b += t(x0 - 8, y + 16, r[0], {a:"end", s:12}); r[1].forEach(function(p){ b += rc(x0 + p[0] * w, y + 4, (p[1] - p[0]) * w, 18, r[2], null, 4, 0.75); }); });
  return svg(760, 340, b, "Extension engineer year plan");
}};
})(window.FIGS);
