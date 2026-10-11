/* Pages: soil water and scheduling. */
(function(){
function P(o){ (window.PAGES = window.PAGES || []).push(o); }

P({id:"soil-water", group:"water", title:"Soil water: the tank under the crop", lede:"Field capacity, wilting point, total and readily available water, and why Sussex sand empties so fast.",
sections:[
["The tank idea",
`Think of the root zone as a tank. After a soaking rain and a day of draining, the tank is full (field capacity). When the soil is so dry roots can't pull any more out, the tank is empty (wilting point). The space between is the water the crop can use.

You don't wait for empty. Plants start to suffer about halfway down, so you refill before that line.

{{fig:bucket}}`,
`- Field capacity (FC): water content after free drainage, about 10 cb tension on sands, 30 cb on loams.
- Permanent wilting point (PWP): 1,500 kPa tension.
- Available water capacity (AWC) = FC - PWP, in/in or in/ft.
- Total available water (TAW) = AWC x effective root depth.
- Readily available water (RAW) = p x TAW, where p is the depletion fraction (FAO-56 Table 22).
- Management allowed depletion (MAD): the manager's chosen limit, written into NRCS 449 plans.

Example: loamy sand, AWC 0.07 in/in, root depth 24 in: TAW 1.68 in; p 0.55: RAW 0.92 in.

{{calc:taw}}`],
["Why Sussex soils run dry",
`Sand has big pores. Water drains through quickly and little stays behind. A foot of sand might hold half an inch of usable water; a foot of silt loam might hold two inches. On top of that, many Sussex fields have a hard layer 8 to 12 inches down that stops roots, so the tank is shallow too.

{{fig:soil-awc}}

{{q:leathers-soil}}`,
`Delmarva Coastal Plain soils: Evesboro (excessively drained sand), Rumford and Fort Mott (loamy sands), Downer (sandy loam), Sassafras and Matapeake (fine sandy loam to silt loam subsoils). Pull AWC by layer from the NRCS Web Soil Survey (WSS) for each field; ranges here are typical, not field values.

Compaction: traffic pans at 8 to 12 in on sandy soils restrict roots, lowering TAW and raising irrigation frequency. Penetrometer readings above about 300 psi stop most root growth. Deep ripping or strip till can help; check before assuming a 24-in root zone.`],
["Too much water",
`Water beyond what the tank holds drains away below the roots. It is money down the hole and it carries nitrogen to the groundwater people drink. On sand, a big one-time soak is mostly wasted.

{{q:holloway-root}}`,
`Deep percolation (DP) = rain + irrigation - (space left in the root zone). On Sussex sand with TAW near 1.5 in, a 1.25-in pass on a field depleted by 0.5 in drains 0.75 in.

Nitrate load (lb N/ac) = drainage (in) x NO3-N (ppm) x 0.2266.

{{calc:leach}}

{{q:dipasquale-lag}}`],
["Checking soil moisture by feel",
`Many growers still use the feel of the soil, and with practice it works. Grab soil from the root zone and squeeze it. Sandy soil that won't hold together at all is near empty; soil that makes a weak ball and leaves your hand damp is near full.`,
`NRCS feel and appearance method, coarse textures (sand, loamy sand):

| Depletion of AWC | Feel |
|---|---|
| 0 to 25 percent | Wet outline on hand; may form a weak ball |
| 25 to 50 percent | Appears moist; forms a very weak ball that breaks easily |
| 50 to 75 percent | Appears slightly moist; will not form a ball |
| 75 to 100 percent | Dry, loose, flows through fingers |

Sample at 6, 12 and 18 in with a probe. Combine with a sensor or DIMS for calibration.`]
]});

P({id:"et-dims", group:"water", title:"Crop water use, DEOS and DIMS", lede:"Reference ET, crop coefficients and Delaware's free weather-based scheduler.",
sections:[
["Reading the weather for water",
`Every day the weather pulls water out of fields. Sun, heat, wind and dry air pull harder. Weather stations turn those into one number: reference ET, the water a short grass lawn would use. Multiply by the crop factor to get what your crop used.

Delaware has a dense weather station network called DEOS, free online.

{{q:hirsh-efficient}}`,
`Reference evapotranspiration (ETo) by the FAO-56 Penman-Monteith equation uses net radiation, temperature, 2-m wind speed and vapor pressure deficit (VPD).

Crop evapotranspiration: ETc = Kc x ETo.

Delaware Environmental Observing System (DEOS): more than 40 stations since 2004, run by UD's Center for Environmental Monitoring and Analysis with the State Climate Office. Adkins described it as the highest-density mesonet in the United States and pointed growers to its ETo for scheduling.

Typical Georgetown ETo: March 0.05 in/day; late June to July 0.18 to 0.25; peak days above 0.28; late September 0.08.`],
["DIMS: the free scheduler",
`DIMS is a free website from UD that keeps the water checkbook for each field. You enter the crop, the emergence date and where the field is; it pulls daily rain and ET from the nearest station and tells you how dry the field is and when to water.

It's been around since 2011. Your job is mostly to get more growers using it and make its numbers match their real pivots.

{{q:adk-wue}}`,
`DEOS Irrigation Management System (DIMS), free since 2011, first funded by NRCS and DNREC to support EQIP irrigation water management.

- Crops: corn, soybean, cantaloupe, sweet peas, lima beans, watermelon, sweet corn, cucumber, tomato.
- Setup: field name, crop, emergence date, location. Advanced users can adjust season length, stage dates, soil and management thresholds.
- Adds a short-term forecast using National Weather Service data. DEOS staff help new users.

Gaps you could close:
- Uniformity: DIMS assumes the timer's inch lands evenly. Pair it with pivot test speed charts.
- Fixed-depth habits: a study using DEOS data found a fixed-depth ET scenario matched DNREC-reported water use best, suggesting growers apply set amounts.
- Nitrogen: add a drainage and leaching estimate.
- Satellite crop coefficients from Sentinel-2 normalized difference vegetation index (NDVI).
- Drip run times by bed and emitter flow.

Partner with DEOS before building anything parallel, and keep personal software separate from UD work (check UD intellectual property policy).`],
["What UD research says about methods",
`After about ten years of trials, UD found soil moisture sensors added little yield over a good weather-based schedule for corn and soybeans. Sensors cost money and time. So for most field crops, start with DIMS; use sensors for vegetables, drip, research and checking the model.

{{q:adk-20cb}}`,
`- Adkins (2021): nearly a decade of UD research showed marginal, if any, yield improvement from soil moisture sensing over advanced ET-based scheduling; ET schedulers recommended for most agronomic crops.
- SARE project in Sussex (2009 to 2011): Watermark sensors in three growers' pivot corn; two adopted afterward but needed heavy support. Hurdles: adopting, recording on time, analyzing, acting.
- Northeast vegetable study (Agricultural Water Management, 2023): no yield difference among sensor, timer and feel-based scheduling, but sensors kept soil in the optimal range more days, cutting leaching risk.

Pitch sensors in Delaware on water, nitrogen and labor, not yield.`],
["Other tools",
`Growers also use pivot company apps, consultant platforms and a few free university tools. Most run on the same idea: weather times crop factor.`,
`| Tool | Type | Notes |
|---|---|---|
| DIMS | Free, UD | Delaware weather and soils built in |
| Delaware lima bean downy mildew risk tool | Free, DEOS | Irrigation timing affects leaf wetness |
| Penn State Fusarium head blight model | Free | Wheat scab risk |
| KanSched | Free, Kansas State | Checkbook water balance |
| Pivot manufacturer platforms | Paid or bundled | Remote control and scheduling |
| OpenET | Free, satellite | Field-scale ET from Landsat; check accuracy in humid East |`]
]});

P({id:"checkbook", group:"water", title:"The checkbook method step by step", lede:"Running a daily water balance by hand or in a spreadsheet, with a worked two-week example.",
sections:[
["How it works",
`Treat the field like a bank account. Water used by the crop is a withdrawal. Rain and irrigation are deposits. Keep a running total of how much has been withdrawn since the soil was full. When that total reaches your trigger, water.

{{fig:water-balance}}`,
`Daily: Dr(i) = Dr(i-1) + ETc(i) - Pe(i) - In(i) + DP(i)

- Dr: root zone depletion (in); 0 at field capacity.
- ETc: Kc x ETo from DEOS.
- Pe: effective rain; ignore rains under 0.1 in, cap at current depletion.
- In: net irrigation (gross x application efficiency or measured with cans).
- DP: drainage when the result goes below zero; set Dr to 0.

{{calc:balance}}`],
["Setting the trigger for a pivot",
`A pivot can't water the whole field at once. If it takes three days to go around, the last spot keeps drying the whole time. So you start well before the stress line: early enough that the last spot is reached just as it gets there.

{{q:shockley-dry}}`,
`Trigger depletion = RAW - (ETc x days per pass).

Example: RAW 0.92 in, ETc 0.25 in/day, 2.8 days per pass: start at 0.22 in. If the result is near zero, the system is undersized for that soil and weather; it must run continuously in peak periods.

Net depth per pass should not exceed about RAW (0.9 in here) on sand, or the excess drains.`],
["Weekly routine for a grower",
`Monday morning: look up last week's ET and rain, update the sheet, check the forecast, decide whether the pivot runs and at what speed. Midweek: check again after any rain. Keep records; NRCS 449 plans need them.`,
`1. Pull 7 days of ETo and rain from DEOS (or the farm gauge).
2. Multiply ETo by Kc for the stage.
3. Update Dr for each day.
4. Compare with trigger and RAW; plan passes for the coming week using the forecast.
5. Record dates, timer settings and measured inches.
6. Ground-truth once a week with a probe or sensor.`]
]});

P({id:"sensors", group:"water", title:"Soil moisture sensors", lede:"Types, depths, installation, reading the stair-step pattern and refill thresholds for Delmarva soils.",
sections:[
["Which sensor",
`Two kinds are common. Watermark blocks are cheap and read how hard roots must pull (centibars). Capacitance probes read percent water at several depths and usually send data to your phone. Tensiometers work well in sand but need care.

{{q:adk-stations}}`,
`| Type | Reads | Range and fit | Cost |
|---|---|---|---|
| Watermark granular matrix sensor (GMS) | Tension, cb | 0 to 200 cb; best 10 to 100; less precise in coarse sand | Low |
| Tensiometer | Tension, cb | 0 to about 80 cb; good fit for sands | Low to medium |
| Capacitance probe (FDR) | Volumetric water content (VWC) | Multi-depth to 24 to 48 in; telemetry | Medium to high |
| Time domain reflectometry (TDR) | VWC | Accurate, less salt sensitive | High |`],
["Where and how deep",
`Put sensors where the field is typical, not in the best or worst spot, and in the row where roots are. For row crops use three depths: 6, 12 and 18 inches. Under a pivot, put a station in the last span area and one where the pivot starts its pass.`,
`Placement:
- Representative soil from the soil map and yield or electrical conductivity maps.
- Under the outer spans (most area) and away from end gun and tower tracks.
- At least two stations per pivot: one near where the pass starts and one where it ends, so you see the lag.
- Corn: 6, 12, 18 in (add 24 in after V10 if roots go deeper). Drip vegetables: 6 and 12 in, 4 to 6 in from the tape.

Installation: auger to depth, make a slurry of native soil, soak Watermarks overnight and wet-dry them twice before installing, push into slurry for full contact, backfill and tamp, flag well for equipment.`],
["Reading the pattern",
`A working root zone shows a stair-step: readings dry during the day and hold steady at night. If a sensor depth has no steps, there are no active roots there. Irrigation should drop the shallow sensors back toward wet. If the deepest one gets wet after every pass, you're putting on too much.

{{fig:sensor-trend}}

{{q:adk-roots}}`,
`Refill thresholds for Delmarva (approximate, 50 percent depletion):

| Soil | Refill at |
|---|---|
| Sand | 25 to 30 cb |
| Loamy sand | 30 to 40 cb |
| Sandy loam | 40 to 50 cb |
| Silt loam | 50 to 70 cb |

UD's Warrington VRI corn study used Watermark triggers of 20, 30, 40 and 50 cb against ET at 50 percent allowed depletion. For capacitance probes, set full and refill lines from the field's own response: the reading 24 to 48 h after a soaking rain is full; the reading when daily steps flatten in a dry spell is near refill.`],
["Making sensors pay",
`Sensors only help if someone looks at the data and acts on it. Set alerts, check them at the same time every day, and use them to calibrate the checkbook or DIMS.`,
`- Telemetry with phone alerts beats manual downloads.
- Calibrate DIMS: if sensors say wetter than DIMS for two weeks, check the pivot's real depth with cans.
- Remove sensors before harvest; log GPS positions.
- Recommend sensors first for drip vegetables, research and growers who want proof before trusting a model.`]
]});

P({id:"scheduling-advice", group:"water", title:"Giving scheduling advice", lede:"How to answer the 'when and how much' call, the weekly note, and scripts for common situations.",
sections:[
["The phone call",
`A grower calls in July: "Should I run the pivot?" Ask four things before you answer: what crop and stage, what soil, when did it last get water and how much, and how long the pivot takes to go around. With those you can give a clear answer in two minutes.

{{q:snow-threshold}}`,
`Intake questions:
1. Crop, planting date, stage (VT? R3?).
2. Soil series or texture; known hardpan?
3. Last rain and last irrigation: dates and inches (gauge, not guess).
4. Pivot: hours per pass at the current setting, inches per pass (from a speed chart or can test).
5. Well capacity: gpm, gpm per acre.

Then: estimate depletion = sum of ETc since last fill - effective rain. Compare with trigger and RAW. Give an answer in their units: "Run it at 40 percent, about 0.6 in, and keep it going until Friday's rain chance."`],
["The weekly irrigation note",
`In season, a short weekly note in the Weekly Crop Update, emailed and texted, does more than any long fact sheet. Give last week's water use and rain, what stages crops are in, and one practical tip.

{{q:snow-curve}}`,
`Template (WCU publishes Fridays):

> Irrigation update, week of July 14. At Georgetown, corn at VT to R1 used about 1.9 in last week (ETo 0.23 in/day, Kc 1.2); rain was 0.2 in. Soybeans at R2 used about 1.5 in. On loamy sand, a field topped up last Friday is near the stress line by Wednesday. Check that the pivot is putting on what the timer says: a can test takes an hour.

Text version, under 160 characters: "Corn at silking used about 1.9 in last week at Georgetown. Rain 0.2. Keep pivots moving through R2."`],
["Scripts for common situations",
`Most calls fall into a few patterns. Having a ready answer for each saves time and keeps advice consistent across the state.

{{q:raley-granular}}`,
`- "It rained an inch, do I stop?" Rain counts only up to the depletion at the time; on sand with 0.9 in RAW, an inch fills the tank. Restart when depletion reaches trigger, often 2 to 4 days later in July.
- "My well can't keep up." Prioritize fields by stage value (corn VT to R3, soybean R3 to R6), and soil (sandiest first); slow the pivot only as far as the soil can hold. See [Drought plan](#drought-plan).
- "Can I put 1.5 inches on so I don't have to come back?" Not on sand; most of it drains. Two passes of 0.75 in.
- "Should I water before a heat wave?" Yes, fill to field capacity before; a pivot can't catch up during.
- "Pre-emergence herbicide and no rain?" About 0.5 in within 7 days (check label).`],
["Being honest about limits",
`If you don't know, say so and find out. If a tool doesn't pay, say that too. That honesty is why growers will believe your next recommendation.

{{q:bruce-uncharted}}`,
`- Follow up every visit with the numbers you promised.
- Use local data: a Warrington or Georgetown result beats a Nebraska one.
- Stay brand neutral in public.
- Watch for stress in drought years; know how to refer to UD Extension's Ag-We've Got Your Back well-being program.`]
]});
})();
