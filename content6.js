/* Pages: water supply and regulation, NRCS, farmer questions and economics. */
(function(){
function P(o){ (window.PAGES = window.PAGES || []).push(o); }

P({id:"aquifers-permits", group:"supply", title:"Aquifers, wells and permits", lede:"The stacked aquifers under Delaware, well interference questions, and DNREC and MDE permit rules.",
sections:[
["The layers under the farm",
`Under southern Delaware are layers of sand that hold water, separated by clay. The top one, the Columbia, is open to rain from above and is where most irrigation wells pump. Deeper ones are sealed by clay and recharge slowly.

{{fig:aquifers}}

{{q:smadc-warning}}`,
`- Unconfined Columbia aquifer: more than half of Kent and Sussex withdrawals; few ft to over 200 ft thick in Sussex; highly transmissive; recharge mostly November to April, typically 10 to 15 in/yr.
- Confined Columbia, Pocomoke and Manokin: 8 to 11 percent of withdrawals each, mostly Sussex.
- Kent: also Frederica, Cheswold, Piney Point and Potomac.
- Maryland Eastern Shore: Aquia and Patapsco confined aquifers show long-term declines near pumping centers (Maryland Geological Survey, MGS).
- Irrigation withdrawals up to 91 Mgal/d in a dry year (DGS).`],
["Did my pivot dry up the neighbor's well?",
`This is one of the most common conflict questions. Sometimes the answer is no: the home well taps a different, deeper layer. Sometimes yes: both wells are in the shallow sand and close together. Check the well records before answering.

{{q:lyon-neighbors}}`,
`Steps:
1. Get well completion reports (depth, screen interval, aquifer) for both wells from DNREC.
2. Same aquifer? If the domestic well is in a confined unit below clay, interference from a Columbia irrigation well is unlikely.
3. Distance and pumping: estimate drawdown with Cooper-Jacob using DGS transmissivity.
4. Domestic pump setting: shallow pump intakes fail first in dry summers even without irrigation.
5. Ask DGS for monitoring well hydrographs near the site.

{{calc:cooperjacob}}`],
["Delaware permits",
`In Delaware, any well pumping more than 50,000 gallons on any day needs a water allocation permit from DNREC, and the holder reports water use every year. A typical pivot well pumps far more than that, so almost every irrigation well needs one.

{{calc:permit}}`,
`DNREC Division of Water, Water Supply Section (89 Kings Highway, Dover; 302-739-9945):
- Well construction and use permits: wells withdrawing 50,000 gal/day or less.
- Water Allocation Permits: any withdrawal over 50,000 gal/day from surface or groundwater; annual use reporting required.
- Applications list daily, monthly and annual limits, acreage per well and pump capacity. Metering can use elapsed-time meters on engines and motors as well as in-line meters. Agricultural applications need no notarizing.
- Public notices list each new well's gpm and requested allocation (example: a 500 gpm well near Bethel requesting 0.8 Mgal/d and 20 Mgal/yr).

Program ideas: annual use reports are an untapped dataset (request data sharing); help growers convert engine hours to gallons with a measured flow rate.`],
["Maryland permits",
`Maryland's threshold is lower: an average of 10,000 gallons a day over the year needs a water appropriation permit from the Maryland Department of the Environment.`,
`MDE Water Supply Program issues Water Appropriation and Use Permits for withdrawals averaging over 10,000 gal/day. Agricultural permit holders report use. With projected higher summer demand, UMD researchers have called for permit revisions that account for July and August peaks.

{{q:kumar-plan}}`]
]});

P({id:"salinity", group:"supply", title:"Saltwater intrusion and salty fields", lede:"Salt patches, salty wells, crop tolerance and what an irrigation engineer can do.",
sections:[
["What's happening",
`Along the bays and tidal rivers, sea level is rising and storm tides push salt water up ditches into low fields. Crops die in patches, then fields become marsh. Salt can also move into shallow wells near the coast when fresh water levels drop.

{{fig:salinity}}

{{qs:neild-sea,mondal-invisible}}`,
`A UD, University of Maryland and George Washington University study mapped Delmarva salt patches from 2011 to 2017: visible patches nearly doubled (472 to 905 ha) and 8,096 ha of farmland converted to marsh. Sussex had the highest potential losses of any county; farmland within 200 m of a salt patch rose 68 percent in Delaware. Field conductivity readings found raised salinity hundreds of meters from visible patches.

Estimated Delmarva farmer losses rose from $58 million in 2011 to $107 million in 2017 (Bay Journal). Federal crop insurance has no saltwater intrusion cause of loss.`],
["Irrigation and salty wells",
`In eastern Kent and coastal Sussex, irrigation wells are the first to feel salt if it moves into the aquifer. Test well water every year for salt. Rising readings are an early warning.

{{qs:mcq-wells,mcq-hard}}`,
`- Test irrigation water electrical conductivity (ECw) and chloride annually; ECw under 0.7 dS/m has no restriction for most crops.
- Rising chloride trend means reduce pumping, move pumping inland or deeper (only if a different aquifer), avoid peak drawdown at high tide periods.
- Dover shifts city pumping away from the Columbia during farming season to reduce stress on the aquifer (Spotlight Delaware, 2025).

{{q:cartanza-dead}}`],
["What crops tolerate",
`Soybeans handle more salt than corn. Barley and sorghum handle more than both. On edges that keep getting salty, switching crops or taking the strip out of production may be the right call.

{{q:miller-marginal}}`,
`Saturated paste ECe thresholds (yield starts to decline) and approximate decline per dS/m above (Maas and Hoffman):

| Crop | Threshold (dS/m) | Loss per dS/m above |
|---|---|---|
| Corn | 1.7 | 12 percent |
| Soybean | 5.0 | 20 percent |
| Wheat | 6.0 | 7 percent |
| Barley | 8.0 | 5 percent |
| Green bean | 1.0 | 19 percent |
| Watermelon | about 2.0 | not well defined |

Mapping tools: ECa survey (EM38), drone imagery, Sentinel-2. Research angle for you: can irrigation leach salt on edges without drawing brackish water?`]
]});

P({id:"nitrogen-water", group:"supply", title:"Irrigation, nitrogen and clean water", lede:"Why scheduling is a nitrogen practice, the bay cleanup rules, and how to frame your work for water quality partners.",
sections:[
["The link",
`On sandy soil, every inch that drains below the roots carries nitrate toward the groundwater. That water feeds home wells and the streams flowing to the Inland Bays and the Chesapeake. Better scheduling keeps nitrogen in the root zone, which helps both yield and water quality.

{{q:ator-choptank}}`,
`Nitrate-N above 10 mg/L is the drinking water limit. Leaching load = drainage x concentration x 0.2266. USGS found Eastern Shore nutrient inputs per square mile nearly double other parts of the Bay watershed, with over 90 percent from fertilizer, manure or N-fixing crops.

{{calc:leach}}`],
["The rules",
`Delaware has a nutrient management law since 1999: farms over 10 acres that apply nutrients need a plan written by a certified consultant. Bay cleanup targets also push the state to count good farm practices. Maryland added stricter phosphorus limits.

{{qs:perez-slow,shockley-pmt}}`,
`- Delaware Nutrient Management Law (1999; Delaware Code Title 3, Chapter 22): created the Delaware Nutrient Management Commission (DNMC); operators with more than 8 animal units or applying nutrients to more than 10 acres must be certified and follow a plan; 6 continuing education credits every three years.
- Chesapeake Bay total maximum daily load (TMDL), 2010: watershed-wide cuts of 25 percent N, 24 percent P, 20 percent sediment. EPA found Delaware's Phase III Watershed Implementation Plan (WIP) met N and P targets, relying on nine practices (mostly agricultural) for 79 percent of remaining N reduction.
- EPA earlier flagged "decision agriculture" (precision nutrient management) at 0 percent implementation in Delaware; documenting it earns state credit.
- Maryland Phosphorus Management Tool (PMT): about 228,000 ac on 1,661 farms at full phase-in (2022).`],
["How to frame your programs",
`When you talk to environmental agencies, describe irrigation scheduling and uniformity as nitrogen practices. That opens water quality money as well as farm money.

{{q:walls-care}}`,
`- Track inches applied and estimated drainage on cooperator fields; convert to lb N saved.
- Partners: DNREC Nonpoint Source (Section 319), Center for the Inland Bays, Chesapeake Bay Program Agriculture Workgroup.
- Get winter talks approved for DDA nutrient management credits and CCA credits as standard practice.
- Lag time: groundwater nitrate reflects land use from years to decades ago, so expect slow water quality response.

{{q:usgs-slow}}`]
]});

P({id:"nrcs", group:"nrcs", title:"Working with NRCS", lede:"Practice standards, EQIP and CSP, Delaware program facts and your role in testing and training.",
sections:[
["Why NRCS matters to you",
`The federal conservation agency pays farmers part of the cost to upgrade irrigation, but only if the system meets its standards. Your tests show whether it does. You also help write the standards and train NRCS field staff.

{{q:snow-curve}}`,
`Practices:

| Code | Practice | Covers | Your role |
|---|---|---|---|
| 442 | Sprinkler System | New pivots, linears, solid set, renozzling, VRI retrofits | Uniformity tests before and after; design review |
| 449 | Irrigation Water Management | Scheduling plans, sensors, flow measurement, records | Write and review IWM plans |
| 441 | Microirrigation | Drip and micro-sprinklers | Drip design checks, fertigation guidance |
| 430 | Irrigation Pipeline | Mainlines and laterals | Hydraulic checks |
| 533 | Pumping Plant | Pumps, motors, VFDs | Pump tests, energy savings |
| E449I | CSP enhancement: VRI speed control | Retrofit VRI on a pivot meeting 442 with a 449 plan | Qualifying tests, prescriptions |`],
["Delaware program facts",
`Delaware made irrigation water management a priority in its incentive contracts. Applications close in winter (January and March cutoffs in 2026). Standards for Delaware are in the online Field Office Technical Guide.`,
`- Environmental Quality Incentives Program (EQIP) Conservation Incentive Contracts listed 449 as a priority practice; EQIP-CIC has a separate $200,000 payment limit.
- FY2026 EQIP application cutoffs: January 15 and March 13, 2026.
- EQIP also funds Design and Implementation Activities, including IWM design.
- One recent year: 184 EQIP and AMA contracts on 39,600 acres for $7.3 million, with IWM among popular practices.
- Some states pay a high-priority 90 percent rate for VRI scenarios under 442 and sensors with data recorders under 449 (Alabama FY23). Ask whether Delaware lists irrigation scenarios as high priority; if not, bring data to the State Technical Committee.`],
["Training and standards",
`Offer an annual spring training for NRCS and district staff on pivot tests and writing 449 plans for sandy soils. Join the State Technical Committee and bring Delaware data.`,
`- Spring training topics: reading a nozzle chart; running a can test; computing CU and a speed chart; writing a 449 plan with DEOS ET, local AWC and Kc.
- Propose a Delaware-specific 449 scheduling guide.
- Track cost-share dollars your tests unlock each year.

Questions for the first NRCS meeting:
1. How many pivot tests are needed each year, and what is the backlog?
2. Which irrigation scenarios are funded in the current payment schedule?
3. Plans to add VRI or sensor-based IWM as priority practices?
4. What does NRCS need from UD to update the Delaware 442 and 449 standards?
5. Can we share anonymized test data for research and publication?`]
]});

P({id:"iwm-plan", group:"nrcs", title:"Writing an irrigation water management plan", lede:"What goes into an NRCS 449 plan for a Delaware pivot, with a filled-in example.",
sections:[
["What the plan is",
`An irrigation water management plan says how the farmer will decide when to water and how much, and how they'll keep records. NRCS requires it with most irrigation cost share. It should be short and practical so the grower actually uses it.

{{q:adk-wue}}`,
`NRCS 449 requires the operator to determine and control the rate, amount and timing of irrigation in a planned and efficient manner. Typical contents: field and soils, crop and rooting depth, AWC and TAW, MAD by stage, system capacity and application rate, scheduling method, flow measurement, records.`],
["Filled-in example",
`Here's what a plan for a typical Sussex corn pivot looks like.

{{fig:bucket}}`,
`| Item | Entry |
|---|---|
| Field | 127.6 ac center pivot, Sussex County |
| Soils (WSS) | Rumford loamy sand, AWC 0.07 in/in; Downer sandy loam pockets |
| Crop and root depth | Field corn; 12 in at V6, 18 in at V10, 24 in from VT |
| TAW at 24 in | 1.68 in |
| MAD | 40 percent V6 to V10; 35 percent VT to R3; 55 percent R4 to R5 |
| System | 750 gpm; 5.9 gpm/ac; 0.25 in/day net capacity; speed chart attached |
| Uniformity | CU 87.9 (can test date) |
| Scheduling | DIMS field registered; weekly check with soil probe at 6, 12, 18 in |
| Trigger | Start when depletion reaches 0.22 in in July (2.8-day pass) |
| Depth per pass | 0.6 to 0.8 in net |
| Flow measurement | Propeller meter; hours from engine meter |
| Records | Date, timer setting, hours, gallons, rain gauge, DIMS depletion |
| Review | End of season with UD or NRCS |`],
["Keeping records simple",
`Records matter for NRCS, for the DNREC water report and for your research. A notebook in the truck or a phone form works; what matters is writing it the same day.`,
`Minimum record per pass: date started and finished, timer setting, hours run, meter reading (or gallons), inches (gallons / 27,154 / acres), rain gauge readings, notes (breakdowns, fertigation). End of season: total inches, yield, any problems.`]
]});

P({id:"farmer-faq", group:"farmers", title:"Questions farmers ask", lede:"The questions Delmarva growers raise most, with short answers and where to go deeper.",
sections:[
["Water and scheduling",
`These come in every week in July.

{{q:holloway-keep}}`,
`- How much does my corn use? About 0.25 to 0.30 in/day at tasseling; 1.8 to 2.1 in per week. See [Corn stages](#corn-stages).
- Is DIMS or an app good enough, or do I need sensors? For corn and soybeans, a good ET schedule does about as well as sensors (UD research). Sensors help on vegetables and drip.
- How much can I put on at once? On loamy sand, about 0.75 to 0.9 in net; more drains.
- Should I irrigate wheat in a dry spring? Fill the profile by full head emergence; avoid watering during flowering because of head scab.
- Irrigate double-crop beans and cover crops after harvest? Double-crop beans at R3 to R6, yes in a dry August; a small pass helps cover crop establishment.
- Does night irrigation cause disease? Long canopy wetness raises white mold and leaf disease risk; morning passes are safer.
- Can I activate pre-emergence herbicide with the pivot? About 0.5 in within a week; check the label.`],
["System and equipment",
`Growers want to know if their pivot is doing its job and if new gear pays.

{{q:adk-planter}}`,
`- How do I know the pivot puts on what the timer says? A can test and a measured speed chart ([Pivot test](#pivot-test)).
- My yield map shows rings: is it the pivot? Probably; overlay with a can test.
- Diesel or electric? Compare cost per acre-inch with the pump calculator; electric at NPPC is often about two thirds of diesel's cost per acre-inch, but line extension can cost thousands.
- Will a VFD pay? Yes when flow or pressure needs change often (end gun, corners, several zones).
- Can I irrigate corners and odd fields? Corner arms, SDI or drip; SDI works but has limits on sand.
- Does VRI pay on my farm? Only where soils vary a lot or there are areas to skip ([VRI](#vri)).
- Can I trust running pivots from my phone? Yes with alerts for pressure loss and stoppage; still walk the machine weekly.`],
["Money, permits and neighbors",
`The business questions.

{{qs:dclifton-tight,bauer-paycut}}`,
`- What does an acre-inch cost me? Energy $3 to $8 depending on power source and pump condition, plus ownership and labor ([Economics](#economics)).
- Will a new pivot pay on my dryland field? Run the partial budget; breakeven is often 50 to 70 bu/ac of corn.
- What does my allocation permit let me do in a drought? Daily, monthly and annual limits on the permit still apply; call DNREC Water Supply.
- How do I report use correctly? Engine hours x measured gpm x 60 = gallons.
- My neighbor says my pivot dried up his well. Check well depths and aquifers ([Aquifers and permits](#aquifers-permits)).
- My field edges near the ditch are turning white. Salt; test soil ECe and well water ([Salinity](#salinity)).`]
]});

P({id:"economics", group:"farmers", title:"Does irrigation pay?", lede:"Cost per acre-inch, partial budgets for a new pivot, and the value of fixing what you have.",
sections:[
["Costs in plain words",
`Irrigation has two kinds of costs. Ownership: the pivot, well, pump and power hookup, spread over 20 years with interest. Running: fuel or electricity, repairs, labor. Bigger pivots cost less per acre to own.

{{q:brown-size}}`,
`- Ownership: capital recovery factor (CRF) = i(1+i)^n / ((1+i)^n - 1); at 6 percent and 20 years, CRF = 0.0872.
- Energy per acre-inch: diesel at NPPC about $4.93 at $2.81/gal; electric about $3.38 at $0.136/kWh; a worn diesel plant at 70 percent of NPPC about $7.05.
- Repairs about 1 to 2 percent of investment per year; insurance and taxes about 1 percent.`],
["Partial budget for a new pivot",
`Add up what changes: extra yield on one side; ownership, pumping, repairs, labor and extra inputs on the other. Divide costs by what you net per bushel to get the breakeven yield increase.

{{calc:budget}}`,
`Default example: $165,000 for pivot, well, pump and power on 127.6 ac; 20 years; 6 percent; 9 acre-inches per year at $4.94; repairs 1.5 percent; insurance 1 percent; labor $10/ac; extra seed and fertilizer $80/ac; corn $4.60 less $0.30 harvest and haul: ownership about $113/ac, operating about $167/ac, breakeven about 65 bu/ac. Test lower and higher yield gains: the gap between irrigated and dryland corn on sand is large in dry years and small in wet ones.

{{q:raley-insurance}}`],
["Fixing what you have pays fastest",
`Before buying new, fix the old: a speed chart, nozzles in the wrong spot, a worn pump. In UD's survey about one in five tested growers reported more than $40 an acre in added profit.

{{q:hirsh-efficient}}`,
`UD 2024 impact statement: 62 percent reset timers, 12 percent upgraded packages, 21 percent reported over $40/ac added profit; applied across tested acres, about $857,000 per year, plus $48 million in NRCS cost share made accessible.

Quick wins: renozzle to chart (often cost-shared), regulator replacement, pump repair to NPPC, VFD where flows vary, fixed speed chart.`]
]});

P({id:"drought-plan", group:"farmers", title:"Drought plan: when the well can't keep up", lede:"Ranking fields and stages, stretching water, and what to tell growers in a record dry year.",
sections:[
["Recent droughts",
`2024 through mid-2026 brought Delaware's worst dry spells on record. Wells and pivots ran nonstop, some corn was cut without harvest, and cover crops didn't come up. Expect drought to dominate your first winter meetings.

{{qs:raley-discrim,shockley-6in}}`,
`- September 2024: USDA declared all three counties primary natural disaster areas for drought and heat.
- October 2024: driest month in about 130 years of Delaware records (State Climatologist Kevin Brinson).
- State drought watch October 25, 2024 to August 18, 2025.
- August 2025 to May 2026: driest such period since 1895; by June 2026 soil moisture in all of Kent and most of Sussex at or below the 5th percentile.
- Growers reported diesel use of hundreds of gallons per day, soaring electric bills, and about half losses on double-crop beans.`],
["Where the water goes first",
`If you can't water everything, water the crop at the stage where water is worth most, on the soil that dries fastest. Corn at silking and beans at pod fill come first. A crop past dent or at R7 can wait.

{{q:holloway-sept}}`,
`Priority ranking:
1. Corn VT to R2 on sands (Ky 1.5).
2. Soybean R3 to R5, double-crop first (Ky 1.0).
3. Vegetables at bloom on contract (lima, snap) and melons sizing.
4. Corn R3 to R4; soybean R6.
5. Corn V-stages (mild stress early is tolerable).
6. Corn R5 and later; soybean R7.

Tactics: fill the profile ahead of heat; keep pivots moving at lighter depths rather than parking; turn off end guns to raise pressure and uniformity on the main machine; skip non-productive ground with VRI; irrigate at night to reduce evaporation where disease risk is low.

{{calc:inchvalue}}`],
["Talking with growers in drought",
`Droughts are hard on farm families. Be practical, be kind, and know where to refer someone who is struggling. Bring numbers: what an inch is worth now, which fields to favor, how to report water use.

{{q:chase-gone}}`,
`- Know UD Extension's Ag-We've Got Your Back well-being program and how to refer.
- Bring USDA Farm Service Agency (FSA) disaster program contacts.
- Provide data and photos to farm media (WBOC, Delaware Public Media, Cape Gazette, Coastal Point, Delmarva Farmer).
- Record drought losses and water applied for research and for future permit discussions.`]
]});
})();
