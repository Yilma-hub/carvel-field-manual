/* Pages: field testing. */
(function(){
function P(o){ (window.PAGES = window.PAGES || []).push(o); }

P({id:"pivot-test", group:"testing", title:"Center pivot uniformity test", lede:"The full catch can procedure under ASABE S436.2, calculations, interpreting results and the grower report.",
sections:[
["Why test",
`A pivot can look fine and still water unevenly. Worn nozzles, a nozzle in the wrong spot, a stuck pressure regulator or low pressure all cause bands of wet and dry crop that you often can't see until the yield map shows rings. A can test finds them in an afternoon.

{{q:adk-betamax}}`,
`From 2003 to 2023 UD and NRCS ran 971 evaluations on about 63,000 acres using ASABE S436.2, unlocking about $48 million in NRCS cost share. A passing test is also the gate to Conservation Stewardship Program (CSP) enhancement E449I (VRI speed control), which requires the pivot to meet CPS 442 uniformity first.

Targets for the Heermann-Hein coefficient of uniformity (CU): 90 and above excellent; 85 to 90 good; 80 to 85 fair; below 80 poor. North Dakota's 442 standard, for example, sets a minimum CU of 85 for pivot nozzle packages; check the Delaware version.`],
["Equipment",
`You need catch cans, a way to measure what's in them, pressure gauges, a flow meter if you can, a measuring wheel and data sheets. Have the grower find the dealer's sprinkler chart before the day.`,
`- 60 to 120 collectors with straight sides, 3 to 6 in openings, on stands at crop-free height or set in a mowed strip; same type for all.
- Graduated cylinder (250 or 500 mL) or scale for weighing.
- Liquid-filled pressure gauges (0 to 60 and 0 to 100 psi) and a pitot tube for nozzle and end gun pressure.
- Flow meter (clamp-on ultrasonic or the grower's propeller meter).
- Measuring wheel or tape, flags, stopwatch, anemometer, thermometer.
- Sprinkler chart (nozzle package printout) and pivot data: make, length, spans, end gun, pump, design flow and pressure.
- Data sheet (paper or tablet), camera.`],
["Field procedure",
`Pick a calm morning before the crop is tall. Lay out a row (or two) of cans from the second tower out past the end. Set the pivot to a normal speed, let it pass over the cans, and read every can right after it goes by.

{{fig:catch-can}}`,
`1. Safety: confirm the pivot is stopped and the panel locked out before working in the wheel track; never stand under a moving machine; watch the end gun.
2. Record pivot data, nozzle chart, percent timer setting, start time.
3. Measure pressure at the pivot point and at the last tower (or end of the pipeline); measure flow.
4. Lay one or two radial lines of collectors at even spacing (often 10 to 15 ft) from about the second tower to beyond the last tower; note distance of each from the pivot point. Leave out the first span if cans would be too few.
5. If the end gun is evaluated, extend the line through its throw; otherwise end before its influence.
6. Run the pivot over the line at a known setting. Note wind speed and direction, air temperature and humidity.
7. Read volumes as soon as the machine has passed, starting where it passed first, to limit evaporation.
8. Walk the machine: leaks, missing or plugged nozzles, wrong drops, regulator chatter, tower alignment.
9. Time the last regular tower over a measured distance at 100 percent for the speed chart.`],
["Calculations",
`Each can's water is turned into inches. Outer cans count more because they stand for more acres. The uniformity number tells you how even it is; the low-quarter number tells you how dry the driest part is.

{{calc:cucans}}

{{calc:candepth}}`,
`- Depth (in) = mL / (opening area in squared x 16.387).
- Heermann-Hein CU = 100 x [1 - sum(Si x |Vi - Vw|) / sum(Si x Vi)], Si = distance of can i, Vw = area-weighted mean.
- Low-quarter distribution uniformity (DUlq) = mean of driest 25 percent (area weighted) / weighted mean x 100.
- Mean depth versus timer setting: compare with the speed chart to find the true inches per pass.

Example in the calculator: 13 cans at 100-ft spacing give CU 87.9 and DUlq 78.7, with low readings at 1,100 and 1,200 ft.`],
["Reading the results",
`Look at the shape of the bar chart, not just the score. A single low can is a plugged nozzle. A low band across a span is a wrong nozzle size or a stuck regulator. Everything low toward the end means pressure is short. A wet spike may be a leak or a nozzle swapped bigger.

{{q:dclifton-road}}`,
`| Pattern | Likely cause | Fix |
|---|---|---|
| Isolated low can | Plugged or missing nozzle | Clean or replace; check screen |
| Low band one to three outlets wide | Wrong nozzle size or position; failed regulator | Compare against chart; replace regulator |
| Gradual decline toward end | Low inlet pressure; pump wear; end gun stealing flow | Measure pressure at end; check pump; booster; regulators |
| High spike | Leak, wrong larger nozzle, missing regulator | Repair |
| Variability changes with direction | Wind, tower misalignment | Retest in calm; align towers |
| Wet ring near tower | Leaking boot gasket or drain | Repair |`],
["The grower report",
`Make the speed chart the headline. Most growers act on "your timer at 40 percent puts on 0.45 inch, not 0.6." Then a short repair list with costs. Keep it to one page front and back.

{{q:hirsh-business}}`,
`Report contents:
1. Speed chart: inches applied at each timer setting, from measured flow or can mean (see [Speed chart](#speed-chart)).
2. CU, DUlq, mean depth, a bar chart of cans.
3. Problems found with locations (tower number, outlet number).
4. Repair list with priorities and rough costs; whether renozzling qualifies for NRCS 442 cost share.
5. Pressure and flow measured vs design.
6. Follow-up date.

Log the test in PEARS and your test database. Call back in 6 to 12 months: did they reset the timer, renozzle, apply for cost share?`]
]});

P({id:"speed-chart", group:"testing", title:"Building a pivot speed chart", lede:"From tower speed, radius and flow to inches at every timer setting.",
sections:[
["What it is",
`A speed chart is a card on the pivot panel that says: at this percent setting, the pivot takes this many hours to go around and puts on this many inches. Many old charts are wrong because nozzles changed or flow dropped. In UD's survey, resetting the timer was the most common change after a test.`,
`Inputs: last regular tower radius (Rlt), wetted radius (Rw), system flow (Q, gpm), last tower full-speed travel (V, ft/min) and arc watered.

- Area (ac) = pi x Rw squared / 43,560 x arc/360.
- Time per pass at 100 percent, T100 (h) = 2 pi Rlt / (V x 60) x arc/360.
- Gross depth at setting S = Q x (T100 / S) / (452.6 x area).

Example: Rlt 1,250 ft, Rw 1,330 ft, Q 750 gpm, V 9 ft/min: area 127.6 ac, T100 14.54 h, 0.19 in at 100 percent, 0.76 in at 25 percent in 58.2 h.`],
["Measuring tower speed",
`Set the timer to 100 percent and time the last regular tower over a measured distance on level ground, with the machine running wet. Fifty to one hundred feet is enough.`,
`- Mark start and end with flags in the wheel track; distance 50 to 100 ft.
- Run at 100 percent with water on (wet tires and pivot load change speed).
- Time with a stopwatch; V = distance / minutes. Repeat once.
- Tire size and gearbox ratio change V; if tires were replaced, remeasure.

{{calc:speed}}`],
["Using it with scheduling",
`Combine the chart with the checkbook. If the field needs 0.75 inch, the chart tells you the setting. Adjust for the losses from spray drift and evaporation, usually 10 to 15 percent on a hot windy day.

{{q:udag-food}}`,
`Net depth = gross x application efficiency (often 0.80 to 0.90 for MESA packages). If DUlq is low, scale gross depth so the dry quarter gets enough: gross = net / (DUlq/100). Update the chart after any renozzling, pump change or well rehab, and laminate a copy for the panel.`]
]});

P({id:"drip-eval", group:"testing", title:"Drip system evaluation", lede:"Emitter flow, pressure, emission uniformity, filters and the common clogging problems.",
sections:[
["Why test drip",
`Drip only works if every emitter drips about the same. Clogging from iron, algae or sand, and pressure dropping along long rows, make some plants get much less. A test catches it before you see uneven fruit.

{{q:rosenkranz-veg}}`,
`Targets for field emission uniformity (EU): 90 and above excellent; 80 to 90 good; 70 to 80 fair; below 70 poor. Manufacturer coefficient of variation (CV) under 0.05 is good tape. NRCS 441 (microirrigation) requires filtration, flushing and backflow protection.`],
["Procedure",
`Pick laterals near, in the middle and far from the inlet. Measure pressure at the start and end of rows. Catch water from emitters for a set time and measure it.`,
`1. Run the system at least 15 minutes to stabilize.
2. Record pressure at the filter inlet and outlet, submain, and the start and end of 3 to 4 laterals.
3. Choose at least 16 emitters: near, 1/3, 2/3 and far end of four laterals at different distances from the inlet.
4. Pull back plastic or place cups under emitters; collect for a fixed time (for example 2 minutes); measure mL. Convert: gph = mL / minutes x 0.01585.
5. Check filter screens, flush ends, chlorine and acid injection, backflow devices.
6. Water sample for iron, manganese, pH, hardness and bacteria if clogging is found.`],
["Calculations and reading results",
`EU compares the low quarter of emitters with the average. Scattered low emitters mean clogging. A steady drop from start to end of the row means pressure loss.

{{calc:dripeu}}`,
`- EU = mean of lowest 25 percent / mean x 100. The calculator's example data gives EU 84.5.
- Pressure variation along a lateral should stay under about 20 percent.
- Water applied per 100 ft of bed: gph per emitter x emitters per 100 ft.

| Pattern | Cause | Fix |
|---|---|---|
| Scattered low emitters | Particulate, algae or iron clogging | Better filtration; flush; chlorinate; acid |
| Gradual decline to row end | Long laterals, undersized submain | Shorter runs; feed from both ends; bigger submain |
| Low on one zone | Valve, regulator or filter loss | Clean filter; check regulator |
| Leaks, spraying | Rodent or insect damage, kinks | Repair; drip tape couplers |`],
["Maintenance plan for growers",
`Give growers a simple season checklist in English and Spanish, since workers often run the drip day to day.`,
`- Before season: flush mains, submains, laterals; check filter; pressure test.
- Weekly: read filter in and out pressure; clean or backflush at 5 to 7 psi rise; walk lines for leaks.
- Every 2 to 4 weeks: flush lateral ends until clear.
- Iron above 0.3 ppm: plan treatment; above 1.5 ppm, aeration and settling or chlorination plus filtration.
- After fertigation: run clear water 15 to 30 minutes.
- End of season: flush, chlorinate, drain.`]
]});

P({id:"pump-test", group:"testing", title:"Pump and pumping plant test", lede:"Measuring flow, head and fuel to rate a pumping plant against the Nebraska criteria and estimate savings.",
sections:[
["Why test pumps",
`Old or worn pumps and engines burn more fuel for the same water. In the 2024 drought some Delaware farms burned hundreds of gallons of diesel a day. A pump test tells the grower what an acre-inch costs now and what it could cost if fixed.

{{q:davis-solar}}`,
`Nebraska Pumping Plant Performance Criteria (NPPC) benchmarks: diesel 12.5 water horsepower-hours (WHP-h) per gallon; electricity 0.885 WHP-h/kWh; propane 6.89 WHP-h/gal; natural gas 61.7 WHP-h/mcf. Performance under about 75 percent of NPPC is usually worth repairing. NRCS 533 (pumping plant) can cost-share replacements and VFDs.`],
["What to measure",
`You need the flow, how far the water is lifted, the pressure at the outlet, and how much fuel or electricity is used per hour.

{{fig:pump-tdh}}`,
`1. Flow (gpm): installed meter or clamp-on ultrasonic.
2. Pumping water level: airline (depth = airline length - 2.31 x gauge psi) or sounder through access port; run 30 minutes first.
3. Discharge pressure: gauge at the pump head.
4. Fuel: diesel by tank drawdown over a timed run or flow meter on the fuel line; electricity by meter disk or utility smart meter (kWh in a timed run).
5. Engine rpm, gear ratio.

Total dynamic head (TDH) = lift + 2.31 x psi (+ column friction if pressure is read at the surface for a turbine; small for submersibles).
Water horsepower (WHP) = gpm x TDH / 3,960.`],
["Worked example and costs",
`At 750 gallons per minute lifted 65 feet against 55 psi, the pump does 36 horsepower of useful work. A diesel plant running at 70 percent of the benchmark costs about $7.05 per acre-inch at $2.81 diesel, against $4.93 if it met the benchmark. On 1,150 acre-inches a year that gap is about $2,400.

{{calc:pump}}`,
`- TDH 192.1 ft; WHP 36.4.
- Hours per acre-inch at 750 gpm = 452.6 / 750 = 0.60 h.
- At NPPC, diesel use = 36.4 / 12.5 = 2.91 gal/h; at 70 percent, 4.16 gal/h.
- Electric at NPPC with $0.136/kWh: about $3.38 per acre-inch.

Next: compare with pump curve; check impeller wear and adjustment (turbines); engine tune; whether a smaller or VFD-driven pump fits today's head (many pumps were sized for high-pressure impact sprinklers before renozzling).`],
["VFDs and conversions",
`A variable frequency drive lets an electric pump slow down when less pressure or flow is needed, like when the end gun is off or a smaller drip zone runs. Savings can be large because power drops with the cube of speed.

{{calc:vfd}}`,
`- Best fits: pivots with end guns or corner arms, wells feeding several machines, drip zones of different sizes, wells with large seasonal water level swings.
- Diesel to electric: weigh line extension cost (a Somerset County grower was quoted about $10,000 for power to a new well), demand charges and fuel price risk.
- Check harmonics, motor insulation rating and cooling for VFD retrofits.`]
]});

P({id:"other-systems", group:"testing", title:"Traveling guns and solid set", lede:"Testing hose reels and sprinkler grids, lane spacing and wind.",
sections:[
["Traveling guns",
`A big gun on a cart pulled back to a hose reel waters a strip. Depth depends on gun flow, how far apart the lanes are and how fast the cart moves. Wind wrecks the pattern, so lane spacing should shrink on windy sites.

{{calc:gun}}`,
`Depth (in) = 96.3 x gpm / (lane spacing ft x speed ft/h).

Test: a line of cans across the travel path, perpendicular, spanning two lanes; read after the gun passes; compute Christiansen CU from the overlapped profile. Targets: CU 75 to 85 percent is typical; below 70 percent, reduce lane spacing or change the nozzle.

Lane spacing as a percent of wetted diameter: about 80 percent in calm air (under 5 mph), 70 to 75 percent at 5 to 10 mph, 50 to 60 percent above 10 mph.`],
["Solid set and hand move",
`Grid sprinklers are used for frost protection on strawberries and for starting vegetables. Test with a grid of cans between four sprinklers.

{{q:collins-overhead}}`,
`- Grid of cans at 5 to 10 ft spacing within one sprinkler spacing rectangle.
- Christiansen CU = 100 x (1 - sum |xi - mean| / (n x mean)). Target 80 or better for vegetables.
- Check nozzle wear with a drill bit gauge; replace when 5 percent oversize.
- Frost protection rates on strawberries are typically 0.10 to 0.15 in/h; run until ice clears.`]
]});

P({id:"preseason", group:"testing", title:"Preseason pivot checklist", lede:"What a grower can check in March and April, and a quick self-test with cans.",
sections:[
["The checklist",
`Most in-season breakdowns can be caught in an hour of checking before planting. Give growers this list at the spring workshop.

{{q:dclifton-equip}}`,
`Electrical and drive (power locked out):
- Panel: contacts, wiring, rodent damage, ground rod connection, surge protection.
- Collector ring, tower boxes, safety and alignment switches.
- Gearboxes: oil level and water in oil; center drives; U-joints and shields.
- Tires: pressure, lugs, ruts in the wheel track.

Water side (running):
- Pressure at pivot and end; compare with chart.
- Walk every span: leaks, plugged or missing nozzles, broken drops, missing weights, regulators chattering.
- End gun: angle settings off roads and buildings; booster screen.
- Flush the pipeline end cap. Check the pump: gauge, packing, engine service.
- Chemigation: check valve, vacuum relief, low pressure drain, inspection port, interlock test.`],
["A quick self-test",
`Growers can do a simple version of the can test themselves: a row of 20 to 30 cups under the last three spans. If one area catches much less, look at the nozzles there.`,
`- 20 to 30 identical straight-sided cups at 10-ft spacing under the outer three spans.
- Run at a known setting; read each cup's depth with a ruler (or mL).
- Any cup more than 15 percent below the average flags the outlets above it.
- Compare the average with the speed chart for that setting.`],
["Signs you need a professional test",
`Rings in the yield map, uneven crop color under the pivot, a chart older than the last renozzle, or a pump that seems weaker are all reasons to call for a full test.

{{q:sarupria-sat}}`,
`- Concentric rings in yield or NDVI maps.
- Visible wet or dry bands in the crop.
- Pressure at the end below the regulator rating plus 5 psi.
- No nozzle chart, or package older than about 10 years.
- Planning to apply for NRCS 442, 449 or E449I.`]
]});
})();
