/* Second build: new pages placed inside their groups, and extra sections added to existing pages. */
(function(){
var PAGES = window.PAGES = window.PAGES || [];
function after(id, page){ var i = PAGES.map(function(p){ return p.id; }).indexOf(id); PAGES.splice(i < 0 ? PAGES.length : i + 1, 0, page); }
function add(id, sec){ for (var i = 0; i < PAGES.length; i++) if (PAGES[i].id === id){ PAGES[i].sections.push(sec); return; } }

/* ---------- New pages ---------- */
after("crop-water", {id:"irrigation-disease", group:"crops", title:"Irrigation, disease and herbicides", lede:"How the timing of water changes white mold, downy mildew, head scab and leaf diseases, and how to use the pivot to activate herbicides.",
sections:[
["Water timing and disease",
`Most leaf and pod diseases need the plant to stay wet for hours. Irrigation adds wet hours on top of dew and rain. Watering in the morning lets leaves dry in the sun; watering in the evening keeps them wet all night.

The fix is rarely to water less. It's to water at a better time of day and in fewer, fuller passes.

{{q:rosenkranz-veg}}`,
`| Disease | Crop | Risk window | Irrigation advice |
|---|---|---|---|
| White mold (Sclerotinia) | Soybean, snap and lima bean | Bloom (soybean R1 to R3) with closed canopy | Morning passes; avoid daily light watering at bloom |
| Lima bean downy mildew | Lima bean | Late summer, cool wet nights | Check the DEOS risk tool; avoid late-day watering on high-risk days |
| Fusarium head blight | Wheat, barley | Feekes 10.5.1 flowering | Fill the profile by heading; do not irrigate during flowering |
| Gray leaf spot | Corn, especially corn on corn with residue | VT onward in humid weather | Shorten wet hours; scout irrigated continuous corn |
| Phytophthora fruit rot | Watermelon, other cucurbits | Saturated soil, wet fruit | Avoid ponding; even drip moisture |

Leaf wetness is recorded at DEOS stations, so you can show growers how many wet hours a given irrigation schedule adds.`],
["Activating herbicides with the pivot",
`Soil-applied weed killers need water to move into the top inch where weed seeds sprout. In a dry spring, a light pivot pass within a week of spraying does the job and costs far less than a rescue spray later.

{{q:raley-microbes}}`,
`- Typical need: about 0.5 in of water within 5 to 7 days of application (check each label).
- Pivot setting: use the speed chart to pick the setting that gives 0.4 to 0.6 in gross.
- Uniformity matters: a CU under 80 leaves bands of poor weed control that follow the pivot rings.
- UD weed science has flagged herbicide activation in dry years (WCU 2018); make it a joint message with the weed science specialist.`],
["Fertigation and fungicide timing",
`If a fungicide or insecticide is sprayed by ground, wait for it to dry on the leaves before running the pivot. Products labeled for chemigation are a different case, with their own rules.`,
`- Rainfast intervals on fungicide labels range from about 30 minutes to several hours; treat irrigation like rain.
- Chemigated fungicides need a label that allows it, the full set of backflow devices and an interlock ([Fertigation and chemigation](#chemigation)).`]
]});

after("nitrogen-water", {id:"wet-fields", group:"supply", title:"Wet fields, drainage and ditches", lede:"The other half of water management: tile, tax ditches, controlled drainage and wet springs.",
sections:[
["Water management, not just irrigation",
`The same farmer who runs pivots in July may be fighting standing water in April. Low fields in Kent and near the bays and the Nanticoke and Broadkill rivers drain through ditches and buried tile. In a wet spring, growers replant corn three or four times.

So the message is water management: get extra water off when it hurts, keep water in the soil when it helps.

{{q:holloway-root}}`,
`- Subsurface (tile) drainage plus open ditches on poorly drained soils.
- Delaware tax ditches: shared ditches run by landowner organizations with DNREC oversight.
- Drainage water management (DWM, NRCS 554): a riser board on the outlet holds water back after harvest and in midsummer and is lowered for planting and harvest. It cuts nitrate loss and can save some water for the crop.
- UD Extension video: Practical Experiences in Farm Drainage Design and Installation (2019).`],
["Drainage and nitrate",
`Tile drains carry water fast to the ditch, and nitrate with it. Holding water back with a control structure when the field doesn't need draining keeps some of that nitrogen on the farm.

{{q:ator-choptank}}`,
`Drainage water management targets:
- Raise the outlet to about 6 in below the surface after harvest through late winter.
- Lower it 2 to 3 weeks before planting.
- Raise it again partway after planting if the field allows, for a small water benefit in summer.
- Lower before harvest for trafficability.

Delaware stewardship award winners in 2025 used no-till, subsurface drainage and drainage water management (Twin Cedar Ag).

{{q:walls-care}}`],
["Ditches and salt",
`On low ground near tidal water, the same ditches that drain the field can let salt water in during storm tides. Tide gates and checking ditch water salt levels are part of the job there.

{{q:fykes-tides}}`,
`- Measure ECw in ditch water after storm tides with a handheld EC meter.
- Tide gates and flap gates keep tidal water out of field ditches but need maintenance.
- On fields with rising salt, consider taking the lowest strip out of production or planting salt-tolerant crops (see [Salinity](#salinity)).`]
]});

after("other-systems", {id:"specialty-systems", group:"testing", title:"Frost protection, sod, nursery and small farms", lede:"Irrigation outside the big grain pivots: strawberries, sod farms, nurseries and small vegetable plots.",
sections:[
["Frost protection",
`On a frosty spring night, strawberry growers run sprinklers on the plants. As water freezes it gives off heat and holds the blossoms at about 32 F, which they can survive. The trick is to start early enough and keep going until the ice melts on its own.`,
`- Rate: 0.10 to 0.15 in/h for strawberries, more in wind.
- Flow needed: gpm = acres x rate (in/h) x 452.6; 1 acre at 0.15 in/h needs about 68 gpm, so 5 acres need about 340 gpm for the whole night.
- Start when air temperature at plant height approaches 34 F, earlier if the dew point is low (evaporative cooling).
- Keep running until ice is clear and melting without help after sunrise.
- Uniformity: test solid set with a grid of cans; CU 80 or better.

{{calc:convert}}`],
["Sod and nursery",
`Sod and nursery growers water often and lightly, and they care about even growth more than anyone. They're a smaller audience but real, and the Delaware Nursery and Landscape Association reaches them.

{{qs:holloway-keep,holloway-sept}}`,
`- Sod: frequent light passes in establishment; uniformity shows up as visible stripes. Traveling guns and solid set are common.
- Container nursery: overhead sprinklers waste much of the water between pots; drip and spray stakes save water; capture and reuse ponds raise water quality questions (salts, pathogens).
- Both use more water per acre than grain, so permits and reporting matter.`],
["Small and beginning farms",
`Small farms often run drip from a domestic well or a small pond and can't afford a dealer visit for every problem. A simple, cheap setup and good filtration go a long way.`,
`- Partner with DSU Extension and the UD Beginning Farmer Program (irrigation basics workshops have been held at Carvel).
- Starter drip kit: screen filter (150 mesh), pressure regulator (10 to 15 psi), backflow preventer, header with valves, 8-mil tape.
- Well check: flow in gpm with a bucket and stopwatch; drip zone size = well gpm / tape flow per 100 ft x 100 ft.
- Power: a Somerset County grower was quoted about $10,000 to bring power to a new well; solar pumps and small engines are worth comparing.`]
]});

after("scheduling-advice", {id:"farm-visit", group:"water", title:"Running a farm visit", lede:"What to bring, what to ask, what to measure and how to follow up when a grower calls with a problem.",
sections:[
["Before you go",
`A good visit starts with a phone call: what's the problem, which field, which pivot, when can the grower meet you. Bring tools so you can measure, not just look.

{{q:snow-relation}}`,
`Truck kit:
- Pressure gauges (0 to 60, 0 to 100 psi) with pitot tube; clamp-on flow meter.
- 30 catch cups, graduated cylinder, measuring wheel, flags.
- Soil probe, handheld soil moisture and EC meters, shovel.
- Tablet with the speed chart and uniformity calculators; camera; notebook.
- Lockout tag and padlock; gloves; water; sunscreen.`],
["On the farm",
`Listen first. Ask how they decide to water and what they've already tried. Then measure: pressure at both ends, a quick cup test under the outer spans, and soil moisture in a good spot and a bad spot.

{{q:snow-threshold}}`,
`1. Ask: crop, stage, last rain and irrigation, timer setting, hours per pass, history of the problem.
2. Look: crop color bands, wet or dry rings, runoff, tower ruts, end gun throw.
3. Measure: pressure at pivot and end; flow; 20 to 30 cups under the outer three spans; soil probe at 6, 12, 18 in in the good and bad areas.
4. Check: nozzle chart against installed nozzles in the problem span; regulators; leaks.
5. Explain on the spot what you found and what you'll send.`],
["After the visit",
`Send what you promised within a week, in their units: a corrected speed chart, a short list of fixes, and one number for what it's worth. Then call back after the next irrigation.

{{q:snow-headsup}}`,
`- Log the visit the same day (farm, county, topic, advice, follow-up) for PEARS.
- Email or text a one-page summary with a photo.
- Add the question to your research list.
- Call back in 2 to 4 weeks.`]
]});

after("evaluation", {id:"data-management", group:"people", title:"Managing research and program data", lede:"File naming, metadata, backups, sharing agreements and turning field data into papers.",
sections:[
["Simple rules",
`Data that can't be found or understood next year is wasted. Name files the same way every time, record units and where the data came from, and back up daily in season.

{{q:adk-stations}}`,
`- File names: YYYY-MM-DD_site_project_type_vN (for example 2027-07-14_Warrington_P3_sensors_v1.csv).
- One raw data folder that is never edited; processed data and scripts in separate folders.
- A README in every project folder: who, what, where, units, instruments, calibration, known problems.
- Backups: UD cloud storage plus one external copy; daily in season.
- Use R or Python scripts for cleaning so every step can be rerun.`],
["Grower data and agreements",
`Growers share yield maps, water records and sometimes their names. Get a written agreement on how you'll use it, keep farm names out of anything published, and give growers their own results back first.

{{q:chahine-trust}}`,
`- Data sharing agreement: what is collected, who owns it, how it is stored, what is published (aggregated, anonymized), when it is deleted.
- Surveys and interviews meant for publication need IRB review.
- Equipment loans from companies: written agreement; results public regardless of outcome.
- NRCS test data: ask for agreement to share anonymized data for research.`],
["From data to papers",
`Write the 20-year pivot testing synthesis first. It's a dataset nobody else has, and it makes every later proposal stronger.`,
`- Target journals: Applied Engineering in Agriculture, Agricultural Water Management, Irrigation Science, Journal of the ASABE.
- Deposit cleaned data in a public repository with a DOI when allowed.
- Present first at Ag Week and the Mid-Atlantic Crop Management School, then at ASABE or ASA meetings.`]
]});

after("ag-week", {id:"factsheet-example", group:"outreach", title:"Sample fact sheet: check your speed chart", lede:"A ready-to-adapt one-page grower fact sheet, written in plain words.",
sections:[
["The fact sheet",
`This is a full draft you can adapt. Plain language, one worked example, one action box.

{{q:hirsh-efficient}}`,
`Check Your Pivot Speed Chart Before the Season

Why it matters. Your timer chart tells you how much water each setting puts on. If nozzles were changed, the pump has worn or the well dropped, the chart is wrong. Twenty years of UD and NRCS pivot tests found this more than any other problem, and 62 percent of tested growers reset their timers afterward.

What you need. Your pivot length to the last regular tower, the wetted radius including the end gun, your flow in gallons per minute, and a stopwatch.

Step 1. Measure tower speed. Set the timer to 100 percent with water on. Time the last regular tower over 50 feet. Divide 50 by the minutes.

Step 2. Work out hours per circle at 100 percent: 6.28 x tower radius / (speed x 60).

Step 3. Work out acres: 3.14 x wetted radius x wetted radius / 43,560.

Step 4. Inches at any setting: gpm x hours / (452.6 x acres).

Example. Last tower 1,250 ft, wetted radius 1,330 ft, 750 gpm, tower speed 9 ft per minute. One circle at 100 percent takes 14.5 hours and puts on 0.19 inch. At 25 percent it takes 58 hours and puts on 0.76 inch.

What to do. Post the new chart in the panel. If your numbers differ from the old chart by more than 10 percent, call us for a free catch can test with NRCS.

Contact: UD Carvel Research and Education Center, 16483 County Seat Highway, Georgetown, DE 19947.

{{calc:speed}}`]
]});

/* ---------- Extra sections on existing pages ---------- */
add("salinity", ["What farmers and scientists are seeing",
`On the Eastern Shore, farmers describe fields they used to crop that now grow nothing, and tides that come a little farther every year. Researchers say mapping the problem is done; finding solutions and paying for them is the next step.

{{qs:tully-now,abend-worse,travers-trying}}`,
`{{qs:fykes-tides,walter-abandon,kumar-salt}}

Open policy questions growers raise: who pays for land that goes out of production, whether conservation programs can pay for transition to marsh, and whether there is any market for salt-tolerant crops.

{{qs:cumming-market,tully-incent}}`]);

add("veg-stages", ["Heat, lima breeding and what irrigation can and can't do",
`Heat already costs Delaware vegetable growers yield and quality. For lima beans the main fix is breeding heat-tolerant varieties; irrigation keeps plants from adding drought stress on top of heat.

{{qs:ernest-season,ernest-heatnow}}`,
`UD's lima breeding program, started by Emmalea Ernest in 2004, crosses adapted Delaware baby lima and Fordhook lines with diverse material. A $3.3 million USDA Specialty Crop Research Initiative (SCRI) project led by UC Davis included UD drone-based phenotyping at Carvel. Shade cloth and particle film were tested on peppers, lettuce, tomatoes and watermelon; shade cloth lowered soil and air temperature more.

{{q:palkovic-heat}}`]);

add("sensors", ["Finding the root zone",
`Sensors at several depths tell you how deep the roots are working, which tells you how big the soil tank really is. That changes how much you put on each pass.

{{q:adk-rootzone}}`,
`When the 18-in sensor starts showing daily steps, raise the root depth in your water balance and allow larger passes. If it never responds by VT in corn, suspect a hardpan and keep passes small.`]);

add("field-day", ["Credits, signs and safety",
`Credits draw people. Signs and handouts make the message stick. A safety talk keeps everyone out of the wheel track.

{{q:dclifton-sun}}`,
`- Apply for nutrient management, pesticide and CCA credits 4 to 6 weeks ahead; keep sign-in sheets.
- Signs at each plot: treatment, water applied to date, one result.
- Safety: no one under or near a moving pivot; shade and water; wagon rules.`]);

add("funding", ["Matching ideas to funders",
`Each research theme has a natural funder. Keep a two-page concept note for each so you can respond fast when a call opens.`,
`| Theme | First funder | Larger follow-on |
|---|---|---|
| Pivot uniformity synthesis | Publication; Delaware Soybean Board | NRCS CIG |
| Scheduling methods on farms | Northeast SARE Partnership | CIG On-Farm Trials |
| Water and N leaching | DWRC 104(b); DNREC 319 | NIFA AFRI |
| Drought allocation | Maryland Grain Producers | Northeast SARE Research and Education |
| Drip and vegetables | Delaware Specialty Crop Block Grant | SCRI with partners |
| Salt-affected edges | NFWF, Sea Grant | NIFA |

See [Executive summaries](#exec-summaries) for ready text.`]);

add("exec-summaries", ["More summaries: data, VRI, energy and small farms",
`Four more short summaries for calls that come up less often.

{{q:isaacs-tech}}`,
`11. NRCS CIG Classic: "Variable Rate Irrigation for Humid Sandy Fields." Two to three grower pivots with ECa zones will compare VRI speed control with uniform irrigation, report water and yield by zone, and produce a Delaware VRI screening guide and E449I prescriptions.

12. Delaware Soybean Board or Maryland Grain Producers: "Diesel, Electric or VFD? Pumping Costs on Delmarva Irrigation Wells." Test 20 pumping plants against Nebraska criteria, publish cost per acre-inch by power source and condition, and estimate savings from repair, conversion and VFDs.

13. USDA NIFA Agriculture and Food Research Initiative seed or strengthening grant: "Satellite Crop Coefficients for DIMS." Use Sentinel-2 vegetation indices to adjust FAO-56 crop coefficients field by field and test the gain in scheduling accuracy against sensors on 30 fields.

14. Delaware Specialty Crop Block Grant with DSU Extension: "Drip Basics for Small and Beginning Vegetable Farms." Hands-on workshops at Carvel and DSU, a starter kit list, and bilingual maintenance cards for farms and workers.`]);

/* Make sure every quote is on at least one page: nitrogen-water gets the soil microbe quote */
add("nitrogen-water", ["Drought and nitrogen",
`In a drought, fertilizer can sit on dry soil without dissolving, so the crop can't use it. When rain finally comes, a big storm can wash much of it down at once. Irrigation that keeps the root zone moist helps the crop use the nitrogen already applied.

{{q:raley-microbes}}`,
`- Granular N needs about 0.5 to 1 in of water to dissolve and move into the root zone.
- After drought, test soil nitrate (PSNT) before adding more N; carryover can be large.
- Fall soil nitrate after a dry year is a leaching risk; cover crops planted early can take up 30 to 60 lb N/ac.

{{q:shockley-fert}}`]);
})();
