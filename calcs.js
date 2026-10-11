/* Calculators. Each: t title, cat category, ins [key, label, default, options?], f(v) returns HTML, n note (markdown).
   Defaults reproduce the worked examples in this manual. */
window.CALCS = window.CALCS || {};
(function(C){
function fx(x, d){ if (!isFinite(x)) return "n/a"; return Number(x).toLocaleString("en-US", {minimumFractionDigits:d === undefined ? 2 : d, maximumFractionDigits:d === undefined ? 2 : d}); }
function B(items){ return '<div class="big">' + items.map(function(i){ return '<div><span>' + i[0] + '</span><strong' + (i[2] ? ' class="' + i[2] + '"' : '') + '>' + i[1] + '</strong></div>'; }).join("") + '</div>'; }
function P(s, cls){ return '<p' + (cls ? ' class="' + cls + '"' : '') + ' style="margin:6px 0">' + s + '</p>'; }
function T(head, rows){ return '<div class="tablewrap"><table><thead><tr>' + head.map(function(h){ return '<th>' + h + '</th>'; }).join("") + '</tr></thead><tbody>' + rows.map(function(r){ return '<tr>' + r.map(function(c){ return '<td>' + c + '</td>'; }).join("") + '</tr>'; }).join("") + '</tbody></table></div>'; }
function rows(txt){ return String(txt).split(/\n/).map(function(l){ return l.trim().split(/[\s,;\t]+/).filter(Boolean).map(Number); }).filter(function(r){ return r.length && r.every(function(x){ return isFinite(x); }); }); }
function need(){ for (var i = 0; i < arguments.length; i++) if (!isFinite(arguments[i]) || arguments[i] <= 0) throw new Error("enter positive numbers"); }
var PI = Math.PI;

C.speed = {t:"Pivot speed chart", cat:"Center pivot", ins:[["rlt","Last regular tower radius, Rlt (ft)",1250],["rw","Wetted radius, Rw (ft)",1330],["q","System flow (gpm)",750],["v","End tower speed at 100% (ft/min)",9],["arc","Arc watered (degrees, 360 = full circle)",360],["target","Depth you want (in)",0.75]],
 f:function(v){ need(v.rlt, v.rw, v.q, v.v, v.arc); var A = PI * v.rw * v.rw / 43560 * v.arc / 360, T100 = 2 * PI * v.rlt / (v.v * 60) * v.arc / 360, d100 = v.q * T100 / (452.6 * A);
  var r = [100, 90, 80, 70, 60, 50, 40, 30, 25, 20, 15, 10].map(function(p){ var T = T100 / (p / 100); return [p + "%", fx(T, 1), fx(T / 24, 2), fx(d100 / (p / 100), 2)]; });
  var need_ = v.target > 0 ? d100 / v.target * 100 : NaN;
  return B([["Irrigated area", fx(A, 1) + " ac"], ["Time per pass at 100%", fx(T100, 2) + " h"], ["Depth at 100%", fx(d100, 3) + " in"], ["Setting for " + fx(v.target, 2) + " in", need_ > 100 ? "not possible" : fx(need_, 0) + "%", need_ > 100 ? "bd" : ""]]) + T(["Setting", "Hours per pass", "Days per pass", "Gross depth (in)"], r); },
 n:"Area uses the wetted radius; time uses the last regular tower radius, because that tower sets the speed. Depth is gross (before evaporation and drift losses). Measure tower speed at 100 percent by timing the last regular tower over 50 to 100 ft on level ground, in the field, with the machine wet."};

C.capacity = {t:"System capacity check", cat:"Center pivot", ins:[["q","Flow (gpm)",750],["a","Irrigated area (ac)",127.6],["eff","Application efficiency (%)",85],["etc","Peak crop ET (in/day)",0.30],["hrs","Hours per day the system can run",23]],
 f:function(v){ need(v.q, v.a, v.eff, v.hrs); var g = v.q * v.hrs / (452.6 * v.a), net = g * v.eff / 100, gpa = v.q / v.a, gap = v.etc - net;
  return B([["Gross capacity", fx(g, 3) + " in/day"], ["Net capacity", fx(net, 3) + " in/day", net >= v.etc ? "ok" : "wn"], ["Flow per acre", fx(gpa, 2) + " gpm/ac"], ["Days to put on 1 in net", fx(1 / net, 1)]]) +
   (gap > 0 ? P("At peak, the crop uses " + fx(v.etc, 2) + " in/day and the system can replace " + fx(net, 2) + ". The field falls behind by about " + fx(gap * 7, 2) + " in per week, so you must start the season fuller and never let the pivot sit during a heat wave.", "wn") : P("The system can keep up with peak ET if it runs " + fx(v.hrs, 0) + " hours a day.", "ok")); },
 n:"Gross capacity (in/day) = gpm x hours / (452.6 x acres). 452.6 gpm for one hour is one acre-inch. On Delmarva sands, plan for at least 5 to 6 gpm per acre for corn."};

C.cucans = {t:"Catch can uniformity (Heermann-Hein CU and DUlq)", cat:"Field testing", ins:[["data","Distance from pivot (ft) and catch (in), one can per line","100 0.93\n200 0.88\n300 0.90\n400 0.70\n500 0.86\n600 0.87\n700 0.74\n800 0.79\n900 0.84\n1000 0.91\n1100 0.61\n1200 0.60\n1300 0.78"]],
 f:function(v){ var d = rows(v._data).filter(function(r){ return r.length >= 2; }); if (d.length < 4) throw new Error("enter at least 4 cans");
  var sw = 0, swv = 0; d.forEach(function(r){ sw += r[0]; swv += r[0] * r[1]; }); var mw = swv / sw, dev = 0; d.forEach(function(r){ dev += r[0] * Math.abs(r[1] - mw); });
  var cu = 100 * (1 - dev / swv), s = d.slice().sort(function(a, b){ return a[1] - b[1]; }), acc = 0, lq = 0, wq = 0;
  for (var i = 0; i < s.length; i++){ var take = Math.min(s[i][0], sw / 4 - acc); if (take <= 0) break; lq += s[i][1] * take; wq += take; acc += take; }
  var du = 100 * (lq / wq) / mw, plain = d.map(function(r){ return r[1]; }), pm = plain.reduce(function(a, b){ return a + b; }, 0) / plain.length, cc = 100 * (1 - plain.reduce(function(a, b){ return a + Math.abs(b - pm); }, 0) / (pm * plain.length));
  var rating = cu >= 90 ? ["Excellent", "ok"] : cu >= 85 ? ["Good", "ok"] : cu >= 80 ? ["Fair: look for fixable problems", "wn"] : ["Poor: repair or renozzle", "bd"];
  var low = d.filter(function(r){ return r[1] < mw * 0.85; }).map(function(r){ return r[0] + " ft (" + fx(r[1], 2) + " in)"; }), high = d.filter(function(r){ return r[1] > mw * 1.15; }).map(function(r){ return r[0] + " ft"; });
  return B([["CU Heermann-Hein", fx(cu, 1), rating[1]], ["DU low quarter", fx(du, 1)], ["Weighted mean catch", fx(mw, 3) + " in"], ["Christiansen CU (unweighted)", fx(cc, 1)]]) + P("Rating: " + rating[0] + ".", rating[1]) +
   (low.length ? P("Cans more than 15 percent below the mean: " + low.join(", ") + ". Check nozzle sizes against the chart, plugged nozzles and regulators in those spans.") : "") + (high.length ? P("Cans more than 15 percent above the mean: " + high.join(", ") + ".") : ""); },
 n:"Weights each can by its distance from the pivot (ASABE S436.2). DUlq here is area-weighted: the driest cans adding up to a quarter of the total weight. Drop cans inside the first span or that were knocked over. Read volumes promptly to limit evaporation."};

C.candepth = {t:"Catch can volume to depth", cat:"Field testing", ins:[["dia","Can opening diameter (in)",4],["ml","Water caught (mL)",160]],
 f:function(v){ need(v.dia); var area = PI * v.dia * v.dia / 4, mlPerIn = area * 16.387, d = v.ml / mlPerIn;
  return B([["Depth caught", fx(d, 3) + " in"], ["mL per inch for this can", fx(mlPerIn, 1)], ["Opening area", fx(area, 2) + " sq in"]]); },
 n:"1 cubic inch = 16.387 mL. Measure the inside diameter of the rim, not the base. Straight-sided cans at least 3 in across work best; tapered cups need the rim diameter."};

C.taw = {t:"Root zone water: TAW, RAW and pivot trigger", cat:"Scheduling", ins:[["awc","Available water capacity (in/in)",0.07],["rz","Effective root depth (in)",24],["p","Allowed depletion fraction p (0 to 1)",0.55],["etc","Crop ET now (in/day)",0.25],["days","Days for the system to cover the field",2.8]],
 f:function(v){ need(v.awc, v.rz, v.p); var taw = v.awc * v.rz, raw = taw * v.p, lag = v.etc * v.days, trig = raw - lag;
  return B([["Total available water", fx(taw, 2) + " in"], ["Readily available water", fx(raw, 2) + " in"], ["Use during one pass", fx(lag, 2) + " in"], ["Start irrigating at depletion", trig > 0 ? fx(trig, 2) + " in" : "run continuously", trig > 0.1 ? "ok" : "bd"]]) +
   (trig <= 0.1 ? P("The system cannot get around the field before the last spot is stressed. Keep the pivot running, slow down only to the depth the soil can hold, and accept some stress at the end of the circle.", "bd") : P("Apply no more than about " + fx(raw, 2) + " in net per pass; more than that runs past the roots on this soil.")); },
 n:"TAW = AWC x root depth. RAW = p x TAW. The trigger subtracts what the crop uses while the pivot makes its way around, so the last spot reached is just at the RAW line."};

C.balance = {t:"Checkbook water balance (daily)", cat:"Scheduling", ins:[["taw","Total available water, TAW (in)",1.68],["raw","Readily available water, RAW (in)",0.92],["d0","Starting depletion (in)",0.15],["trig","Trigger depletion (in)",0.22],["data","Each day: crop ET, rain, net irrigation (in)","0.27 0 0\n0.29 0 0.75\n0.30 0 0\n0.26 0 0\n0.22 0.55 0\n0.28 0 0\n0.31 0 0\n0.30 0 0.75\n0.25 0 0\n0.20 0 0\n0.27 0.35 0\n0.29 0 0\n0.30 0 0.75\n0.28 0 0"]],
 f:function(v){ var d = rows(v._data), D = v.d0, out = [], dp = 0, stress = 0;
  d.forEach(function(r, i){ var et = r[0] || 0, rain = r[1] || 0, irr = r[2] || 0, pe = rain < 0.1 ? 0 : rain; var nd = D + et - pe - irr, drain = 0; if (nd < 0){ drain = -nd; nd = 0; } if (nd > v.taw) nd = v.taw; dp += drain; if (nd > v.raw) stress++; D = nd;
   out.push([i + 1, fx(et, 2), fx(rain, 2), fx(irr, 2), '<span class="' + (nd > v.raw ? "bd" : nd >= v.trig ? "wn" : "ok") + '">' + fx(nd, 2) + '</span>', drain ? fx(drain, 2) : "", nd >= v.trig ? "irrigate" : ""]); });
  return B([["Depletion now", fx(D, 2) + " in", D > v.raw ? "bd" : D >= v.trig ? "wn" : "ok"], ["Days past RAW (stress)", stress], ["Lost below roots", fx(dp, 2) + " in"]]) + T(["Day", "ETc", "Rain", "Irrig.", "Depletion", "Drained", ""], out); },
 n:"Depletion today = yesterday + ETc - effective rain - net irrigation. Rain under 0.1 in is ignored. Anything that would push depletion below zero drains below the roots. Use DEOS or DIMS for ETc (reference ET x Kc)."};

C.driprun = {t:"Drip run time for plastic mulch beds", cat:"Drip", ins:[["eto","Reference ET (in/day)",0.25],["kc","Crop coefficient Kc",1.0],["row","Bed spacing, center to center (ft)",5],["cover","Crop cover factor (0.3 young to 1.0 full)",0.75],["eff","Drip efficiency (%)",90],["tape","Tape flow (gpm per 100 ft)",0.33],["pulse","Longest single pulse for this soil (h)",1.5]],
 f:function(v){ need(v.row, v.eff, v.tape); var etc = v.eto * v.kc, gal = etc * v.row * 100 * 0.623 * v.cover / (v.eff / 100), gph = v.tape * 60, h = gal / gph, pulses = Math.ceil(h / v.pulse);
  return B([["Crop ET", fx(etc, 2) + " in/day"], ["Water per 100 ft of bed", fx(gal, 1) + " gal/day"], ["Run time", fx(h, 1) + " h/day"], ["Split into", pulses + " pulse" + (pulses > 1 ? "s" : "") + " of " + fx(h / pulses, 1) + " h"]]); },
 n:"Gallons per 100 ft of bed per day = ETc x bed spacing x 100 x 0.623 x cover factor / efficiency. On sands, long single sets push water below the roots; split into pulses and check with a sensor or a shovel 6 and 12 in deep."};

C.dripeu = {t:"Drip emission uniformity (field test)", cat:"Drip", ins:[["data","Emitter flows, any unit (mL in a fixed time, or gph)","27 28 29 26 28 27 30 29\n21 23 27 28 24 29 22 28"],["p1","Pressure at inlet end (psi)",10],["p2","Pressure at far end (psi)",8]],
 f:function(v){ var a = [].concat.apply([], rows(v._data)); if (a.length < 8) throw new Error("enter at least 8 emitters"); a.sort(function(x, y){ return x - y; }); var n = a.length, mean = a.reduce(function(s, x){ return s + x; }, 0) / n, q = Math.max(1, Math.round(n / 4)), lq = a.slice(0, q).reduce(function(s, x){ return s + x; }, 0) / q, eu = 100 * lq / mean, sd = Math.sqrt(a.reduce(function(s, x){ return s + (x - mean) * (x - mean); }, 0) / (n - 1)), cv = sd / mean, dp = v.p1 - v.p2;
  var r = eu >= 90 ? ["Excellent", "ok"] : eu >= 80 ? ["Good", "ok"] : eu >= 70 ? ["Fair", "wn"] : ["Poor", "bd"];
  return B([["Emission uniformity", fx(eu, 1), r[1]], ["Field variation (CV)", fx(cv, 3)], ["Low-quarter mean / mean", fx(lq, 1) + " / " + fx(mean, 1)], ["Pressure drop", fx(dp, 1) + " psi", dp > 0.2 * v.p1 ? "wn" : "ok"]]) + P("Rating: " + r[0] + "." + (dp > 0.2 * v.p1 ? " Pressure drops more than 20 percent along the run; check lateral length, submain size and flushing." : "")); },
 n:"EU = mean of the lowest quarter of emitters / mean of all x 100. Sample at least 16 emitters spread over near, middle and far ends of several laterals. Clogging shows up as scattered low emitters; pressure problems show up as a steady drop toward the far end."};

C.fert = {t:"Fertigation through a pivot", cat:"Chemigation", ins:[["rate","Nitrogen rate (lb N/ac)",30],["a","Irrigated area (ac)",127.6],["prod","Product","UAN-32",["UAN-28","UAN-30","UAN-32","ATS 12-0-0-26S"]],["hrs","Hours for one pass",29],["q","System flow (gpm)",750]],
 f:function(v){ var P_ = {"UAN-28":[10.67, 2.99], "UAN-30":[10.86, 3.26], "UAN-32":[11.06, 3.54], "ATS 12-0-0-26S":[11.0, 1.32]}[v.prod]; need(v.rate, v.a, v.hrs, v.q); var lbN = v.rate * v.a, gal = lbN / P_[1], gph = gal / v.hrs, water = v.q * 60 * v.hrs * 8.34, ppm = lbN / water * 1e6;
  return B([["Product needed", fx(gal, 0) + " gal"], ["Injection rate", fx(gph, 1) + " gph"], ["Total N", fx(lbN, 0) + " lb"], ["N in the water", fx(ppm, 0) + " ppm"]]) + P("Product weighs " + P_[0] + " lb/gal with " + P_[1] + " lb N/gal. Run water for 15 to 30 minutes after injection to flush the lines.", "how"); },
 n:"Gallons = lb N per acre x acres / lb N per gallon. Injection rate = gallons / hours for the pass. Calibrate the injection pump with a graduated cylinder at operating pressure; confirm backflow devices and interlock first."};

C.pump = {t:"Pumping plant performance and cost (NPPC)", cat:"Pumps and energy", ins:[["q","Flow (gpm)",750],["lift","Pumping water level, below discharge (ft)",65],["psi","Discharge pressure (psi)",55],["fuel","Power source","Diesel",["Diesel","Electric","Propane","Natural gas"]],["use","Measured fuel use per hour (gal, kWh or mcf)",4.16],["price","Price per unit ($)",2.81],["acin","Acre-inches pumped per year",1150]],
 f:function(v){ var bm = {Diesel:12.5, Electric:0.885, Propane:6.89, "Natural gas":61.7}[v.fuel], unit = {Diesel:"gal", Electric:"kWh", Propane:"gal", "Natural gas":"mcf"}[v.fuel]; need(v.q, v.use);
  var tdh = v.lift + 2.31 * v.psi, whp = v.q * tdh / 3960, perf = whp / v.use / bm * 100, hAI = 452.6 / v.q, cost = v.use * hAI * v.price, costB = whp / bm * hAI * v.price;
  return B([["Total dynamic head", fx(tdh, 1) + " ft"], ["Water horsepower", fx(whp, 1)], ["Performance vs NPPC", fx(perf, 0) + "%", perf >= 90 ? "ok" : perf >= 75 ? "wn" : "bd"], ["Cost per acre-inch", "$" + fx(cost)], ["At NPPC benchmark", "$" + fx(costB)], ["Possible yearly savings", "$" + fx((cost - costB) * v.acin, 0)]]) +
   P("This plant delivers " + fx(whp / v.use, 2) + " water horsepower-hours per " + unit + " against a benchmark of " + bm + ".") + (perf < 75 ? P("Below 75 percent is usually worth fixing: check pump wear, impeller adjustment, engine tune, gear drive and whether the pump matches today's head.", "bd") : ""); },
 n:"TDH = lift + 2.31 x psi. WHP = gpm x TDH / 3,960. Benchmarks (NPPC): diesel 12.5 WHP-h/gal, electric 0.885 WHP-h/kWh, propane 6.89 WHP-h/gal, natural gas 61.7 WHP-h/mcf. Time per acre-inch = 452.6 / gpm hours."};

C.friction = {t:"Pipe friction loss (Hazen-Williams)", cat:"Pumps and energy", ins:[["q","Flow (gpm)",750],["d","Inside diameter (in)",7.75],["len","Pipe length (ft)",2000],["c","C factor (150 PVC, 130 steel, 100 old steel)",150]],
 f:function(v){ need(v.q, v.d, v.len, v.c); function hf(d){ return 0.2083 * Math.pow(100 / v.c, 1.852) * Math.pow(v.q, 1.852) / Math.pow(d, 4.8655); } var h = hf(v.d), tot = h * v.len / 100, vel = 0.4085 * v.q / (v.d * v.d);
  var cmp = [5.8, 7.75, 9.7, 11.6].map(function(d){ var hh = hf(d) * v.len / 100; return [fx(d, 2) + " in", fx(hh, 1) + " ft", fx(hh / 2.31, 1) + " psi", fx(0.4085 * v.q / (d * d), 1) + " ft/s"]; });
  return B([["Loss per 100 ft", fx(h, 2) + " ft"], ["Total loss", fx(tot, 1) + " ft (" + fx(tot / 2.31, 1) + " psi)"], ["Velocity", fx(vel, 1) + " ft/s", vel > 5 ? "bd" : "ok"]]) + T(["Inside dia.", "Head loss", "Pressure loss", "Velocity"], cmp); },
 n:"hf per 100 ft = 0.2083 x (100/C)^1.852 x gpm^1.852 / d^4.8655. Common PVC inside diameters: 6-in pipe about 5.8 in, 8-in about 7.75 in, 10-in about 9.7 in, 12-in about 11.6 in (check the pipe class). Keep velocity at or below 5 ft/s (NRCS 430)."};

C.gun = {t:"Traveling gun depth", cat:"Other systems", ins:[["q","Gun flow (gpm)",250],["lane","Lane spacing (ft)",240],["spd","Travel speed (ft/min)",3],["run","Run length (ft)",1000]],
 f:function(v){ need(v.q, v.lane, v.spd); var fph = v.spd * 60, d = 96.3 * v.q / (v.lane * fph), hrs = v.run / fph, ac = v.lane * v.run / 43560;
  return B([["Gross depth", fx(d, 2) + " in"], ["Hours per pull", fx(hrs, 1)], ["Acres per pull", fx(ac, 1)], ["Speed for 1.0 in", fx(96.3 * v.q / (v.lane * 1.0) / 60, 2) + " ft/min"]]); },
 n:"Depth (in) = 96.3 x gpm / (lane spacing ft x speed ft/h). Lane spacing should be about 70 to 80 percent of the wetted diameter in light wind, 50 to 60 percent in strong wind."};

C.convert = {t:"Unit converter", cat:"Reference", ins:[["x","Value",1],["u","From unit","acre-inch",["gpm","cubic ft per second","liters per second","acre-inch per day","psi","feet of head","kPa (centibar)","bar","acre-inch","gallons","acre-foot","cubic meters","inches","millimeters"]]],
 f:function(v){ var x = v.x, G = {flow:{"gpm":1, "cubic ft per second":448.83, "liters per second":15.85, "acre-inch per day":18.86}, press:{"psi":1, "feet of head":1 / 2.31, "kPa (centibar)":0.145038, "bar":14.5038}, vol:{"gallons":1, "acre-inch":27154, "acre-foot":325851, "cubic meters":264.172}, len:{"inches":1, "millimeters":1 / 25.4}};
  for (var g in G){ if (G[g][v.u]){ var base = x * G[g][v.u]; return T(["Unit", "Value"], Object.keys(G[g]).map(function(k){ return [k, fx(base / G[g][k], 4)]; })); } } return ""; },
 n:"1 acre-inch = 27,154 gal. 450 gpm (452.6 exactly) for 1 hour = 1 acre-inch. 1 psi = 2.31 ft of water. 1 centibar = 1 kPa."};

C.permit = {t:"Water use and permit thresholds", cat:"Permits", ins:[["q","Pumping rate (gpm)",750],["hpd","Hours per day at peak",22],["days","Days pumped per year",45],["avgh","Average hours per pumping day",14]],
 f:function(v){ need(v.q); var peak = v.q * 60 * v.hpd, yr = v.q * 60 * v.avgh * v.days, avg = yr / 365, ai = yr / 27154;
  return B([["Peak day", fx(peak, 0) + " gal"], ["Per year", fx(yr / 1e6, 2) + " million gal"], ["Average day over the year", fx(avg, 0) + " gal"], ["Acre-inches per year", fx(ai, 0)]]) +
   P("Delaware (DNREC): allocation permit needed above 50,000 gal on any day. This well: " + (peak > 50000 ? '<span class="bd">permit needed</span>' : '<span class="ok">below threshold</span>') + ".") + P("Maryland (MDE): appropriation permit needed above an average of 10,000 gal/day. This well: " + (avg > 10000 ? '<span class="bd">permit needed</span>' : '<span class="ok">below threshold</span>') + "."); },
 n:"Thresholds as stated by DNREC and MDE; confirm current rules and reporting requirements with each agency before advising a grower."};

C.seed = {t:"Seed spacing and population", cat:"Planting and spraying", ins:[["pop","Target seeds per acre",34000],["row","Row width (in)",30]],
 f:function(v){ need(v.pop, v.row); var sp = 6272640 / (v.pop * v.row), len = 6272640 / 1000 / v.row / 12;
  return B([["Seed spacing", fx(sp, 2) + " in"], ["Row length for 1/1000 acre", fx(len, 1) + " ft"], ["Seeds in that length", fx(v.pop / 1000, 0)]]); },
 n:"Spacing (in) = 6,272,640 / (seeds per acre x row width in). 6,272,640 is the square inches in an acre. Count seeds or plants in 1/1000 acre of row to check a planter or stand."};

C.sprayer = {t:"Sprayer calibration (1/128 acre method)", cat:"Planting and spraying", ins:[["sp","Nozzle spacing (in)",20],["sec","Seconds to drive the course",22],["oz","Ounces caught from one nozzle in that time",15]],
 f:function(v){ need(v.sp, v.sec); var course = 340.3 / (v.sp / 12), mph = course / v.sec * 0.6818, gpa = v.oz, gpm = gpa * mph * v.sp / 5940;
  return B([["Course length", fx(course, 1) + " ft"], ["Ground speed", fx(mph, 2) + " mph"], ["Application rate", fx(gpa, 1) + " gal/ac"], ["Nozzle flow", fx(gpm, 3) + " gpm"]]); },
 n:"Measure a course of 340.3 / (spacing in ft) feet, time it at spraying speed, then catch one nozzle for that many seconds. Ounces caught = gallons per acre, because 1/128 acre and 128 oz per gallon cancel."};

C.litter = {t:"Poultry litter spreader (tarp method)", cat:"Nutrients", ins:[["l","Tarp length (ft)",6],["w","Tarp width (ft)",6],["lb","Average litter on tarp (lb)",4.1],["n","Total N (lb/ton)",60],["p","P2O5 (lb/ton)",60],["k","K2O (lb/ton)",45],["avail","N available first year (%)",50]],
 f:function(v){ need(v.l, v.w); var tpa = v.lb * 43560 / (v.l * v.w * 2000);
  return B([["Rate", fx(tpa, 2) + " tons/ac"], ["Available N", fx(tpa * v.n * v.avail / 100, 0) + " lb/ac"], ["P2O5", fx(tpa * v.p, 0) + " lb/ac"], ["K2O", fx(tpa * v.k, 0) + " lb/ac"]]); },
 n:"Tons per acre = lb on tarp x 43,560 / (tarp area x 2,000). Lay three tarps across the spread width, drive over them at normal speed and average. Use your own manure analysis for nutrient values."};

C.budget = {t:"Partial budget for a new pivot", cat:"Economics", ins:[["inv","Investment: pivot, well, pump, power ($)",165000],["life","Years of life",20],["i","Interest rate (%)",6],["a","Acres irrigated",127.6],["sal","Salvage value (% of cost)",0],["acin","Acre-inches pumped per year",9],["cai","Pumping cost per acre-inch ($)",4.94],["rep","Repairs per year (% of cost)",1.5],["ins","Insurance and taxes (% of cost)",1],["lab","Labor ($/ac)",10],["inp","Extra seed and fertilizer ($/ac)",80],["price","Crop price ($/bu)",4.60],["hh","Harvest and hauling cost ($/bu)",0.30],["gain","Expected yield gain (bu/ac)",70]],
 f:function(v){ var i = v.i / 100, n = v.life, crf = i * Math.pow(1 + i, n) / (Math.pow(1 + i, n) - 1), sal = v.inv * v.sal / 100, own = (v.inv - sal) * crf + sal * i;
  var perAc = own / v.a, op = v.acin * v.cai + v.inv * (v.rep + v.ins) / 100 / v.a + v.lab + v.inp, tot = perAc + op, marg = v.price - v.hh, be = tot / marg, net = v.gain * marg - tot;
  return B([["Capital recovery factor", fx(crf, 4)], ["Ownership cost", "$" + fx(perAc, 2) + "/ac"], ["Operating cost", "$" + fx(op, 2) + "/ac"], ["Breakeven yield gain", fx(be, 0) + " bu/ac"], ["Net change", "$" + fx(net, 0) + "/ac", net >= 0 ? "ok" : "bd"]]) + P("Benefit (added income) = yield gain x (price - harvest cost). Costs are ownership (capital recovery) plus operating. If the expected gain beats the breakeven, the investment pays under these assumptions."); },
 n:"CRF = i(1+i)^n / ((1+i)^n - 1). Irrigated versus dryland corn yield gaps on Delmarva sands are commonly 50 to 100 bu/ac in dry years and small in wet years, so test several gain values."};

C.leach = {t:"Nitrate leaching load", cat:"Nutrients", ins:[["dp","Water drained below roots (in)",2],["no3","Nitrate-N in that water (ppm)",20]],
 f:function(v){ var lb = v.dp * v.no3 * 0.2266; return B([["Nitrogen lost", fx(lb, 1) + " lb N/ac"], ["As UAN-32", fx(lb / 3.54, 1) + " gal/ac"]]); },
 n:"lb N per acre = inches drained x ppm x 0.2266. One inch over an acre weighs about 226,600 lb."};

C.inchvalue = {t:"What an inch of water is worth (Ky method)", cat:"Economics", ins:[["crop","Crop and stage","Corn: flowering (Ky 1.5)",["Corn: vegetative (Ky 0.4)","Corn: flowering (Ky 1.5)","Corn: yield formation (Ky 0.5)","Corn: ripening (Ky 0.2)","Soybean: flowering (Ky 0.8)","Soybean: yield formation (Ky 1.0)","Soybean: ripening (Ky 0.2)"]],["etm","Full crop water use in that stage (in)",4],["def","Shortfall in that stage (in)",1],["y","Yield potential (bu/ac)",220],["price","Price ($/bu)",4.40]],
 f:function(v){ var ky = parseFloat(String(v.crop).match(/Ky ([\d.]+)/)[1]); need(v.etm); var loss = Math.min(1, ky * (v.def / v.etm)), bu = loss * v.y, dol = bu * v.price;
  return B([["Ky", fx(ky, 1)], ["Yield loss", fx(loss * 100, 0) + "%"], ["Bushels lost", fx(bu, 0) + " bu/ac"], ["Value lost", "$" + fx(dol, 0) + "/ac"], ["Value per inch short", "$" + fx(v.def > 0 ? dol / v.def : 0, 0)]]); },
 n:"1 - Ya/Ym = Ky x (1 - ETa/ETm), applied to one stage (FAO-33). A rough guide for deciding whether to keep a pivot running through a critical stage; it ignores recovery and quality effects."};

C.cooperjacob = {t:"Well interference (Cooper-Jacob)", cat:"Groundwater", ins:[["q","Pumping rate (gpm)",750],["tr","Transmissivity (gal/day/ft)",30000],["s","Storativity or specific yield",0.001],["t","Days of pumping",30],["r","Distance to the other well (ft)",500]],
 f:function(v){ need(v.q, v.tr, v.s, v.t, v.r); function dd(r){ return 264 * v.q / v.tr * Math.log10(0.3 * v.tr * v.t / (r * r * v.s)); } var s = dd(v.r), u = v.r * v.r * v.s / (4 * v.tr / 7.48 * v.t);
  return B([["Drawdown at " + fx(v.r, 0) + " ft", fx(Math.max(0, s), 1) + " ft"], ["Validity check u", fx(u, 4), u < 0.05 ? "ok" : "wn"]]) + T(["Distance (ft)", "Drawdown (ft)"], [100, 250, 500, 1000, 2000, 4000].map(function(r){ return [r, fx(Math.max(0, dd(r)), 1)]; })) + (u >= 0.05 ? P("u is above 0.05 at this distance, so Cooper-Jacob overestimates; use the full Theis solution.", "wn") : ""); },
 n:"s = 264Q/T x log10(0.3 T t / (r^2 S)), Q gpm, T gal/day/ft, t days, r ft. Confined aquifers have S near 0.0001 to 0.001; the unconfined Columbia aquifer has specific yield near 0.1 to 0.2, which gives much smaller drawdown at a distance. Ask DGS for local values."};

C.vfd = {t:"Variable frequency drive savings (affinity laws)", cat:"Pumps and energy", ins:[["q","Flow at full speed (gpm)",750],["h","Head at full speed (ft)",192],["kw","Input power at full speed (kW)",42],["sp","Reduced speed (%)",85],["hrs","Hours per year at reduced speed",600],["price","Electricity ($/kWh)",0.136]],
 f:function(v){ var r = v.sp / 100, q = v.q * r, h = v.h * r * r, kw = v.kw * r * r * r, save = (v.kw - kw) * v.hrs * v.price;
  return B([["Flow", fx(q, 0) + " gpm"], ["Head", fx(h, 0) + " ft"], ["Power", fx(kw, 1) + " kW"], ["Power cut", fx((1 - r * r * r) * 100, 0) + "%"], ["Savings per year", "$" + fx(save, 0)]]) + P("These are pump-only affinity ratios. In a real system the operating point follows the system curve, so check that the pivot still gets its design pressure at the reduced speed."); },
 n:"Flow scales with speed, head with speed squared, power with speed cubed. A drive also adds 2 to 4 percent loss at full speed."};

C.outerspan = {t:"Area under each span", cat:"Center pivot", ins:[["data","Tower radii from the pivot point (ft), last value is wetted radius","0\n185\n370\n555\n740\n925\n1110\n1250\n1330"]],
 f:function(v){ var r = [].concat.apply([], rows(v._data)).sort(function(a, b){ return a - b; }); var A = PI * r[r.length - 1] * r[r.length - 1] / 43560, out = [];
  for (var i = 1; i < r.length; i++){ var a = PI * (r[i] * r[i] - r[i - 1] * r[i - 1]) / 43560; out.push([fx(r[i - 1], 0) + " to " + fx(r[i], 0), fx(a, 1), fx(a / A * 100, 1) + "%"]); }
  return B([["Total area", fx(A, 1) + " ac"]]) + T(["Radius (ft)", "Acres", "Share"], out); },
 n:"Area of a ring = pi x (outer radius squared - inner radius squared) / 43,560. Use this to show a grower why fixing the outer spans first pays."};

C.gdd = {t:"Corn growing degree days and stage", cat:"Crops", ins:[["prior","GDD already accumulated since planting",900],["data","Daily high and low (F), one day per line","88 68\n91 70\n93 72\n86 66\n84 63\n90 71\n92 73"]],
 f:function(v){ var d = rows(v._data), sum = v.prior || 0, out = [];
  d.forEach(function(r, i){ var hi = Math.min(86, r[0]), lo = Math.max(50, Math.min(86, r[1])), g = Math.max(0, (hi + lo) / 2 - 50); sum += g; out.push([i + 1, r[0] + " / " + r[1], fx(g, 1), fx(sum, 0)]); });
  var st = [[120, "VE"], [200, "V2"], [475, "V6"], [740, "V10"], [1000, "V14"], [1135, "VT"], [1400, "R1 silking"], [1660, "R2 blister"], [1925, "R3 milk"], [2190, "R4 dough"], [2450, "R5 dent"], [2700, "R6 black layer"]], cur = "planted", nxt = st[0];
  for (var i = 0; i < st.length; i++){ if (sum >= st[i][0]){ cur = st[i][1]; nxt = st[i + 1]; } }
  return B([["Total GDD", fx(sum, 0)], ["Likely stage", cur], ["Next stage", nxt ? nxt[1] + " in about " + fx(nxt[0] - sum, 0) + " GDD" : "done"]]) + T(["Day", "High / low", "GDD", "Total"], out); },
 n:"86/50 method: cap highs at 86 F and raise lows to 50 F, then GDD = average - 50. Stage thresholds are typical for a hybrid needing about 2,700 GDD to black layer; check the seed company's numbers for the actual hybrid."};
})(window.CALCS);
