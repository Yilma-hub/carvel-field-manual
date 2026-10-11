/* Pages: systems, equipment and precision agriculture. */
(function(){
function P(o){ (window.PAGES = window.PAGES || []).push(o); }

P({id:"pivot-systems", group:"systems", title:"Center pivots: parts, packages and capacity", lede:"Spans, towers, drops, regulators, nozzle packages, end guns and how big the system must be.",
sections:[
["Parts of a pivot",
`A pivot is a long pipe on wheeled towers, anchored at a center point where the well water comes in. The last regular tower sets the pace; the others follow to stay in line. Hoses hang from the pipe with a pressure regulator and a sprinkler on each.

{{fig:pivot-side}}`,
`- Pivot point: riser, swivel, collector ring, main panel with percent timer.
- Spans: 140 to 200 ft of pipe and truss between drive towers.
- Drive towers: gearmotor, center drive, wheel gearboxes, tires; alignment switch on each.
- Last regular tower (LRT): runs on the percent timer.
- Overhang and end gun (with booster pump), or corner arm on some machines.
- Drops with pressure regulators and sprinklers at mid-elevation spray application (MESA) height, 3 to 7 ft; low elevation spray application (LESA) 1 to 2 ft.`],
["Why the outside matters",
`Most of the field is near the end of the pivot. The outer quarter of the pipe waters 44 percent of the circle. So nozzles there are bigger, and a problem there hurts more acres.

{{fig:pivot-rings}}

{{calc:outerspan}}`,
`Area of a ring = pi (r2 squared - r1 squared) / 43,560. Required outlet flow rises linearly with radius, so nozzle sizes increase toward the end. Peak instantaneous application rates are highest on the outer spans; on crusted sandy loams this is where runoff starts.`],
["Nozzle packages and regulators",
`Each sprinkler has a sized nozzle and a pressure regulator that holds its pressure steady. Over 10 to 15 years nozzles wear, get swapped in the wrong spot, or plug. Regulators stick. That's why old packages often test poorly.

{{q:brown-size}}`,
`- Regulators need inlet pressure at least 5 psi above rating (6, 10, 15, 20 psi common).
- Spray plate types: fixed, rotating, wobbling; rotating and wobbling widen the wetted pattern and cut peak application rate.
- Renozzling is cost-shared under NRCS 442 when designed to standard; test before and after.
- Keep the printed sprinkler chart in the panel; compare with installed nozzles during tests.`],
["How big should the system be",
`A pivot must keep up with the crop in a heat wave. If it can only put on 0.25 inch a day and corn is using 0.30, the field slowly dries out no matter how hard you run it. On Sussex sand, aim for at least 5 to 6 gallons per minute per acre.

{{calc:capacity}}

{{q:kumar-3738}}`,
`Gross capacity (in/day) = gpm x hours / (452.6 x acres).

Example: 750 gpm on 127.6 ac, 23 h/day: 0.30 in/day gross; at 85 percent efficiency 0.25 net, short of 0.30 peak ETc by about 0.3 in per week. Strategy: start the hot period with a full profile and keep the machine moving.

With mid-century projections of much higher July and August demand on the Eastern Shore, new systems and permits should be sized for summer peaks, not seasonal totals.`]
]});

P({id:"vri", group:"systems", title:"Variable rate irrigation", lede:"Speed control versus zone control, where VRI pays in Delaware, and building a prescription.",
sections:[
["What VRI does",
`Variable rate irrigation lets a pivot put more water on sandy spots and less on wet spots, skip ditches, roads and wetlands, and run research plots. It does this either by speeding up and slowing down in different slices of the circle, or by turning individual sprinklers on and off.

{{q:adk-planter}}`,
`- Speed control: changes LRT speed by sector; depth varies around the circle only. Cheapest.
- Zone control: pulses individual sprinklers or banks via solenoids; depth varies along the pipe too. Warrington's research pivot has 85 individually controlled nozzles on four towers.
- Adkins put small VRI systems at about $25,000 and larger ones at $30,000 to $40,000.
- NRCS CSP enhancement E449I pays for VRI speed control retrofits on pivots already meeting 442 uniformity with a 449 plan.`],
["Where it pays",
`VRI pays where a field really varies: big sand to loam swings, wet holes, ditches or roads crossing the circle, or neighbors' houses near the end gun. On uniform fields it rarely pays. A Nebraska analysis found big pumping savings on only a small share of fields, so be careful with claims.

{{q:adk-ec}}`,
`Screening questions:
1. Does an electrical conductivity (ECa) or soil map show more than one AWC class across the circle?
2. Are there non-cropped areas (ditches, lanes, wetlands, buildings) under the pivot?
3. Do yield maps show consistent patterns tied to soil, not uniformity?
4. Is the pivot's CU at least 85? (Otherwise fix the package first.)

If two or more are yes, VRI is worth a trial.`],
["Building a prescription",
`Start with a soil or ECa map, cut it into a few zones, give each zone a percent of the base rate, and load it into the pivot panel or app. Check the result with cans or sensors in each zone.`,
`1. Base layers: ECa survey, SSURGO, yield maps (3 or more years), elevation, aerial imagery.
2. Zones: 2 to 4 water management zones by AWC; exclusion zones for ditches and roads.
3. Rates: percent of base depth (for example sand 120 percent, loam 90 percent, wet hole 0 percent).
4. Grid: sector width set by controller (often 2 to 10 degrees for speed control); outlet banks for zone control.
5. Verify: sensors in each zone; cans across zone boundaries.
6. Evaluate: water applied by zone, yield by zone, partial budget.`]
]});

P({id:"drip-design", group:"systems", title:"Drip for vegetables: layout and care", lede:"Tape choices, zone sizing, filtration, run times on sand and subsurface drip.",
sections:[
["Layout",
`Water goes from the well or pond through a filter, a backflow device, an injector for fertilizer, then a mainline to submains and the drip tape under each bed. Zones are sized so the pump can run one block at a time at the right pressure.

{{fig:drip-wet}}`,
`- Tape: 5 to 15 mil; emitter spacing 8 to 12 in; flow 0.20 to 0.67 gpm/100 ft. Thin tape is one season.
- Operating pressure: 8 to 12 psi at the tape (pressure regulators at submain).
- Zone flow (gpm) = beds x bed length/100 x tape flow per 100 ft.
- Lateral length: limit so emitter flow varies under about 10 percent; often 300 to 600 ft for tape.
- Filtration: screen or disc 120 to 200 mesh; sand media for pond water.`],
["Run time",
`On sand, water moves down more than sideways. One long run pushes water below the roots. Split the day's water into short pulses and check with a shovel or sensor.

{{calc:driprun}}

{{q:holloway-root}}`,
`Gallons per 100 ft bed per day = ETc (in) x bed spacing (ft) x 100 x 0.623 x cover factor / efficiency.

Example: ETo 0.25, Kc 1.0, 5-ft beds, cover 0.75, 90 percent efficiency, tape 0.33 gpm/100 ft: 64.9 gal, 3.3 h, split into 2 to 3 pulses on loamy sand.`],
["Subsurface drip",
`Buried drip can last many years and saves the pivot corners, but on Delaware sand the water doesn't rise well to the seed, and early-season water use is high.

{{qs:adk-sdi16,adk-sdiearly}}`,
`UD's Warrington SDI block (20 ac, 42 zones, tape at 10 and 16 in, 30 and 60-in rows, VFD well) was built to run 15 to 20 years. Findings: suited to irregular fields that cannot fit a pivot; works better in loams and clays where water wicks upward; germination may still need overhead water on sand.

{{q:adk-silver}}`]
]});

P({id:"chemigation", group:"systems", title:"Fertigation and chemigation", lede:"Safety equipment, calibration and nitrogen through pivots and drip.",
sections:[
["Safety first",
`Putting fertilizer or chemicals into irrigation water is useful but carries one big risk: chemicals flowing back down the well. The law requires a set of valves that stop that, and a link that shuts off the chemical pump if the water pump stops.

{{fig:chemigation}}`,
`Required for groundwater sources (and pesticide labels allowing chemigation):
- Chemigation check valve (spring-loaded) on the irrigation line.
- Vacuum relief valve upstream of the check.
- Low-pressure drain and inspection port.
- Injection line check valve and a normally closed solenoid valve.
- Electrical interlock: irrigation pump stops, injection stops.
- Public water: reduced pressure zone (RPZ) assembly or air gap.

Delaware Department of Agriculture pesticide rules apply; PPE and handling training for staff.`],
["Nitrogen through the pivot",
`In a wet spring when ground rigs can't get in, or for split feeding near peak uptake, growers put liquid nitrogen through the pivot. You calculate how much product for the field, then how fast to inject so it's spread over one full pass.

{{calc:fert}}

{{q:shockley-fert}}`,
`Example: 30 lb N/ac on 127.6 ac with UAN-32 (3.54 lb N/gal): 1,081 gal; over a 29-h pass, 37.3 gph; about 350 ppm N in 750 gpm of water.

Rules:
- Apply at the end of an irrigation set with small depth (0.25 to 0.5 in) to keep N in the root zone on sand.
- Avoid fertigation with poor uniformity; CU under 80 means uneven N too.
- Flush lines 15 to 30 minutes after injection.
- UD has written on early fertigation of corn when wet weather delays sidedress (WCU 2018).`],
["Fertigation through drip",
`On watermelons and other vegetables, fertilizer goes through drip several times a week in small doses. Inject in the middle of a run, so the lines fill with water first and are flushed afterward.`,
`- Typical solution concentration: 50 to 150 ppm N.
- Sequence: water 15 to 30 min, inject, water 15 to 30 min.
- Calibrate injector with a graduated cylinder at operating pressure.
- Watch for precipitates with hard water (calcium with phosphate or sulfate); test compatibility in a jar first.`]
]});

P({id:"precision-tools", group:"systems", title:"Precision agriculture tools", lede:"GPS and RTK, yield maps, soil EC, drones, satellite imagery, canopy temperature and telemetry.",
sections:[
["What farmers use",
`Most big Delaware grain farms already have GPS autosteer and yield monitors. Fewer use soil maps for zones, drones or variable rate irrigation. Your job is to help them use the data they already collect, and know which new tools actually pay.

{{q:isaacs-tech}}`,
`| Technology | Delaware use | Your role |
|---|---|---|
| GPS autosteer and real-time kinematic (RTK) correction | Widely used | Correction sources; guidance line sharing |
| Yield monitors | Common | Calibration, cleaning; yield maps find uniformity and drainage problems |
| Variable rate seeding and fertility | Growing | Joint trials with Jarrod Miller on irrigated vs dryland zones |
| VRI | Rare | Show where it pays |
| Pivot telemetry | Increasing | Link to scheduling, not just remote on/off |
| Soil moisture sensors | Minority | Vegetables, drip, research, model calibration |
| UAV imagery | Consultants, some growers | NDVI and thermal for uniformity and stress; Part 107 |
| Satellite (Sentinel-2, Planet) | Free or low cost | Season-long monitoring; ET models |
| Soil ECa mapping | Some consultants | Management zones; salt detection near tidal areas |`],
["Drones and imagery",
`A drone with the right camera can show stressed or uneven crop under a pivot in minutes. Greenness maps (NDVI) show crop vigor; heat cameras show plants that are short of water because thirsty leaves run warmer.

{{q:sarupria-sat}}`,
`- Normalized difference vegetation index (NDVI) = (NIR - Red)/(NIR + Red); saturates at high canopy; use normalized difference red edge (NDRE) later in the season.
- Crop water stress index (CWSI) from canopy minus air temperature, scaled by VPD baselines; infrared thermometers (IRT) on pivots give continuous readings.
- Fly at solar noon plus or minus 2 h, clear sky, consistent altitude; ground sample distance 2 to 5 cm for row crops.
- Federal Aviation Administration (FAA) Part 107 Remote Pilot Certificate required for UD flights; check airspace near Georgetown airport and Dover Air Force Base (LAANC). Spray drones need Part 137 and state pesticide licensing.`],
["Yield maps and pivots",
`Yield maps are the best free dataset you have. Rings in a yield map under a pivot usually mean a nozzle or pressure problem. Lining up the yield map with a can test makes the case to a grower in one picture.`,
`- Clean data: remove start and end pass delays, header overlaps, speed changes, flow delay.
- Overlay pivot geometry: compute distance from pivot point; plot yield by radius in 10 to 20 ft bins.
- Compare with can test profile; correlation points to uniformity as yield limiter.`],
["Demonstration kit",
`Build a kit you carry in the truck so you can help on the spot.`,
`- Clamp-on ultrasonic flow meter; pressure gauges with pitot tube.
- 100 catch cans with stands; graduated cylinders.
- Soil probe, handheld soil moisture meter, handheld EC meter.
- Small drone with RGB and multispectral camera; tablet with data sheets.
- Spare Watermark sensors and a reader.`]
]});

P({id:"equipment", group:"systems", title:"Equipment calibration basics", lede:"Planters, sprayers, spreaders and combines: quick checks that come up on irrigated farms.",
sections:[
["Why an irrigation engineer cares",
`Growers will judge you by whether you can stand next to their planter or sprayer and help. Uneven corn under a pivot is often a planter problem, not water. Knowing the quick checks earns trust.

{{q:willin-educated}}`,
`Duties in the posting include basic knowledge of tillage, planting, application and harvest equipment for selection, calibration and maintenance advice. UD posted spreader and sprayer calibration videos in 2025 (WCU September 2025).`],
["Planters",
`Count seeds or plants in a length of row equal to one-thousandth of an acre. Check spacing, depth and downforce on sandy soil.

{{calc:seed}}`,
`- 1/1000 acre row length = 17.4 ft for 30-in rows.
- Spacing (in) = 6,272,640 / (seeds per acre x row width in).
- On sands, too little downforce gives shallow, uneven placement; too much can compact the seed trench sidewall, though less than on loams. Check depth every field change.`],
["Sprayers",
`The 1/128 acre method is the fastest sprayer check: drive a set distance, then catch one nozzle for that many seconds; the ounces caught equal gallons per acre.

{{calc:sprayer}}`,
`- Course length = 340.3 / (nozzle spacing in ft).
- Replace nozzles when flow is 10 percent above new.
- ASABE S572.3 droplet size categories changed colors for coarse and very coarse; many catalogs still show the old colors.`],
["Litter and fertilizer spreaders",
`Put tarps across the spread width, drive over them, weigh what landed. That gives tons per acre and nutrients per acre.

{{calc:litter}}`,
`- Tons/ac = lb on tarp x 43,560 / (tarp area x 2,000).
- Pattern test with a row of pans across the swath; adjust spinner and divider.
- Use the farm's own litter analysis; broiler litter often runs 55 to 65 lb N and 55 to 65 lb P2O5 per ton.`]
]});
})();
