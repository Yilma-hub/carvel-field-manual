/* Pages: crops and growth stages. */
(function(){
function P(o){ (window.PAGES = window.PAGES || []).push(o); }

P({id:"corn-stages", group:"crops", title:"Corn growth stages and water", lede:"How to stage corn in the field, what each stage needs, and where water stress costs the most.",
sections:[
["How to tell the stage",
`Corn stages are named by counting leaves. Count the leaves whose collar shows: the pale band where the leaf blade wraps around the stalk. Six leaves with collars means V6. When the tassel is fully out it is VT; when silks show it is R1.

After about V6 the bottom leaves rot off, so you may need to split a stalk and count from the first long node.

{{fig:corn-veg}}`,
`Vegetative (V) stages use the leaf collar method: VE emergence, V1 to V(n) by visible collars, VT when the last tassel branch is visible. Reproductive (R) stages: R1 silking, R2 blister, R3 milk, R4 dough, R5 dent, R6 physiological maturity (black layer).

Growing degree days (GDD, 86/50 method) predict timing better than calendar days. For a hybrid needing about 2,700 GDD to black layer: VE about 120, V6 about 475, V10 about 740, VT about 1,135, R1 about 1,400, R5 about 2,450.

Key development landmarks:
- V3: growing point still below ground; hail or frost rarely kills the plant.
- V6: growing point above ground; tassel and ear shoots initiating; rapid N uptake begins (sidedress or fertigation window).
- V8 to V12: kernel rows around the ear set.
- V12 to VT: kernels per row set; water stress now shrinks ear size.

{{calc:gdd}}`],
["Water use through the season",
`A young corn plant barely uses water; most loss is from bare soil drying. Use climbs fast after V8 and peaks at tasseling and silking, often more than a quarter inch a day in a Delaware July. After dent it tapers off and stops at black layer.

{{fig:kc-curve}}`,
`| Stage | Typical Delaware date (early May planting) | Kc (FAO-56) | ETc on a 0.22 in/day ETo day |
|---|---|---|---|
| VE to V4 | mid May to early June | 0.30 | 0.07 in |
| V8 | mid to late June | about 0.70 | 0.15 in |
| V12 to V14 | early July | about 1.0 | 0.22 in |
| VT to R2 | mid to late July | 1.20 | 0.26 in (0.30 or more on hot, windy days) |
| R3 to R4 | early to mid August | 1.10 to 1.20 | 0.24 to 0.26 in |
| R5 | late August | 0.80 to 0.90 | 0.18 in |
| R6 | early September | 0.35 to 0.60 | stop |

Remaining water need from a stage to maturity (rule of thumb from Great Plains work): R4 about 5 in; R5 beginning dent about 2.5 in; half milk line about 1 in in cool weather to 2.5 in in heat. On Delmarva sands, plan the last irrigation so the root zone is about half full at black layer.

{{q:kumar-plan}}`],
["Where stress costs the most",
`The two weeks around tasseling and silking are the danger zone. If the plant is short of water then, silks come out late and miss the pollen, and kernels at the tip of the ear never form. A dry week in mid-July can cost more than a dry month in June.

{{fig:corn-rep}}

{{q:chase-gone}}`,
`FAO-33 yield response factors (Ky) for corn: vegetative 0.4, flowering 1.5, yield formation 0.5, ripening 0.2, whole season 1.25. A 20 percent shortfall in water use during flowering projects to a 30 percent yield loss.

Mechanisms:
- Silk delay: silks elongate by turgor; stress slows them while pollen shed continues, widening the anthesis-silking interval.
- Kernel abortion at R2: carbohydrate supply drops, tip kernels abort.
- Kernel weight at R3 to R5: stress shortens grain fill and lowers test weight.

{{fig:ky}}

{{calc:inchvalue}}`],
["What to tell a corn grower",
`Keep the soil from drying past halfway from V12 through R3. Before that, a little dryness pushes roots deeper. After dent, you can ease off. Don't put on big amounts at once on sand; anything over about an inch on most Sussex soils just drains away.

{{q:holloway-keep}}`,
`Practical rules for Sussex and Kent irrigated corn:

- V6 to V10: start when depletion is near 40 to 50 percent of total available water (TAW); 0.5 to 0.75 in per pass.
- V12 to R3: hold depletion under about 35 to 40 percent; keep the pivot moving, 0.6 to 0.8 in per pass on loamy sand.
- R4 to R5: allow 50 to 60 percent depletion.
- Check the pivot's real inches with a speed chart before trusting the timer ([Speed chart](#speed-chart)).
- In a wet spring, fertigate N through the pivot when ground rigs cannot get in (UD WCU, 2018).
- Adkins' Warrington DIMS reports showed corn ET about 0.25 in/day at R1, with sensors agreeing with the model; on sandy loam, corn needed water about four days after a soaking rain.`]
]});

P({id:"soy-stages", group:"crops", title:"Soybean growth stages and water", lede:"Staging soybeans, the R3 to R6 window, and full-season versus double-crop beans.",
sections:[
["Staging in the field",
`Soybean stages count leaves on the main stem until flowering. Each leaf has three leaflets (a trifoliate). VC means the first pair of single leaves are open; V3 means three trifoliates. Once flowers show it switches to R stages, which follow flowers, then pods, then seeds in the top part of the plant.

{{fig:soy-veg}}`,
`Vegetative: VE emergence; VC unifoliates unrolled; V1 to V(n) fully developed trifoliate nodes on the main stem (a node counts when the leaf above it has unrolled leaflets).

Reproductive, judged on the four uppermost main-stem nodes with a fully developed leaf:
- R1 beginning bloom: one open flower at any node.
- R2 full bloom: open flower at one of the two uppermost nodes.
- R3 beginning pod: pod 3/16 in long.
- R4 full pod: pod 3/4 in long.
- R5 beginning seed: seed 1/8 in long.
- R6 full seed: green seed fills the pod cavity.
- R7 beginning maturity: one normal pod at mature color.
- R8 full maturity: 95 percent of pods at mature color.

{{fig:soy-rep}}`],
["The critical window",
`Soybeans forgive a dry spell early. They make extra flowers and pods later if water comes back. The part they can't recover from is pod set and seed fill, R3 to R6, usually August in Delaware. Water then protects pod number and seed size.

Too much water early can backfire: big bushy plants that fall over.

{{q:adk-soy}}`,
`Ky by stage (FAO-33): vegetative 0.2, flowering 0.8, yield formation 1.0, ripening 0.2; whole season 0.85. Kc: initial 0.40, mid 1.15, end 0.50. Allowed depletion fraction p about 0.50.

Rules:
- VE to R2: irrigate only for establishment or if depletion passes about 60 percent of TAW.
- R3 to R6: hold depletion below about 40 to 50 percent; this is where the return per inch is highest.
- Stop at about R6.5 to R7.

UD's Warrington soybean study compared 8 treatments from no irrigation through stage-based limits to ET scheduling, in 7.5, 15 and 30-in rows with 5 replications, and reported water applied and economics by strategy. On sandy loam, soybeans needed water about three days after a soaking rain.`],
["Double-crop beans",
`Beans planted after wheat or barley in late June have a short season. They hit flowering and pod fill in the heat of August with little time to recover, so they respond strongly to irrigation. In the 2024 drought, growers reported losing about half of double-crop yield.

{{q:shockley-half}}`,
`Double-crop soybean typically reaches R3 in mid to late August and R6 in mid to late September. Practical points:
- Plant into moist soil: a 0.5-in irrigation right after wheat harvest helps emergence on dry stubble.
- Narrow rows (15 in or less) close canopy faster and cut soil evaporation.
- Return per inch is higher than for full-season beans in dry Augusts; include double-crop fields high on the priority list when well capacity is short (see [Drought plan](#drought-plan)).`],
["Common soybean questions",
`Growers ask whether irrigating beans pays, when to stop, and whether water makes white mold worse. Short answers: it pays most in R3 to R6 on sandy fields; stop at R6.5; and yes, frequent evening watering with a closed canopy raises white mold risk.

{{q:kumar-3738}}`,
`- White mold (Sclerotinia) needs prolonged canopy wetness at R1 to R3; irrigate in the morning and use fewer, larger applications within what the soil can hold.
- Pre-emergence herbicide activation needs about 0.5 in of water within a week of application if rain does not come.
- On salt-affected edges, soybean tolerates more salt than corn (ECe threshold about 5.0 dS/m vs 1.7).`]
]});

P({id:"small-grains", group:"crops", title:"Wheat and barley stages", lede:"Feekes stages, spring water needs and the head scab timing rule.",
sections:[
["Feekes in plain words",
`Wheat and barley are planted in fall, sit through winter as a short clump of tillers, green up in March, shoot up in April, head out in early May and are harvested in June. The Feekes scale numbers these stages from 1 to 11.

{{fig:wheat}}`,
`| Feekes | Zadoks | What you see | Delaware timing |
|---|---|---|---|
| 1 | 10 | Emergence | October |
| 2 to 3 | 21 to 29 | Tillering | Fall |
| 4 to 5 | 30 | Green-up, erect sheaths | March |
| 6 | 31 | First node above soil (jointing) | Late March to early April |
| 8 to 9 | 37 to 39 | Flag leaf visible, collar visible | Mid April |
| 10 | 45 | Boot | Late April |
| 10.5 | 58 | Heading complete | Early May |
| 10.5.1 | 61 | Beginning flowering | Early to mid May |
| 11.1 to 11.4 | 75 to 92 | Milk, dough, hard kernel, harvest-ready | Late May to late June |`],
["When small grains need water",
`Small grains use little water in winter. A dry April and May hurts, especially from jointing through grain fill. UD's advice has been to fill the soil profile by full head emergence and avoid watering during flowering, because wet heads at flowering invite head scab.

{{q:shockley-6in}}`,
`- Kc: initial 0.70, mid 1.15, end 0.25 to 0.40 (FAO-56). Whole-season Ky about 1.0.
- Irrigate from Feekes 6 to 10 if depletion passes 50 percent of TAW.
- Fill the profile by Feekes 10.5; avoid irrigation at Feekes 10.5.1 (flowering) because of Fusarium head blight risk (UD, 2015). Check the Penn State Fusarium head blight risk model, which has Delaware locations.
- Spring nitrogen: last practical timing is around Feekes 6.`],
["Why it matters for double-crop beans",
`The wheat crop sets the clock for double-crop soybeans. Late harvest means late beans. Water in a dry spring keeps both on schedule.`,
`Barley is harvested about 7 to 10 days before wheat, which gives the following soybeans more season. In dry springs, a small pivot application at planting of the double crop is often the best-paying inch of the year (see [Soybean stages](#soy-stages)).`]
]});

P({id:"veg-stages", group:"crops", title:"Lima bean, snap bean and watermelon stages", lede:"Vegetable stages that matter for irrigation, heat stress at bloom, and drip on plastic.",
sections:[
["Lima beans",
`Lima beans are Delaware's biggest vegetable. Their weak point is heat at first bloom: hot nights make flowers and small pods drop. Keeping the plants well watered at bloom helps them stay cool and hold their pods, but it can't cancel a heat wave.

{{fig:lima}}

{{qs:ernest-flower,ernest-present}}`,
`About 14,000 acres of green baby limas for processing each year; Fordhook types also grown. UD's irrigated lima study at Carvel (three years) used drip plots with two varieties (more and less stress tolerant) and four treatments: no irrigation, 50 percent plant-available water (PAW) trigger, 35 percent PAW trigger, and 35 percent switching to 50 percent at reproduction, with automated control by a Campbell CR1000 logger.

Practical rules:
- Kc mid about 1.05; p about 0.45.
- From first bloom through pod fill keep depletion under about 35 to 40 percent of TAW.
- Midday irrigation can cool canopies slightly, but night heat drives pod drop; variety choice is the main tool.
- Short-day tropical lines don't flower until mid-September in Delaware (photoperiod), which matters when breeding for heat tolerance.

{{q:ernest-shortday}}`],
["Snap beans",
`Snap beans go from planting to harvest in about 50 to 60 days. Dry soil at bloom gives crooked pods and split sets. Processors set the harvest date, so irrigation has to keep the crop on schedule.

{{fig:snapbean}}`,
`- Most sensitive: bloom to pin pod (about days 30 to 45).
- Kc mid 1.05; depletion limit about 40 percent of TAW.
- Heat at bloom causes split sets; uniform moisture helps.
- Coordinate with processor field staff on planting blocks so irrigation capacity matches staggered bloom dates.`],
["Watermelon on plastic and drip",
`Most Delaware watermelons are seedless, grown on raised beds covered with plastic, with a drip line under the plastic. Water and fertilizer both go through the drip. Even moisture from flowering to sizing is what matters most; big swings cause cracked or hollow fruit.

{{fig:melon}}

{{q:collins-overhead}}`,
`- Transplant late April to May; harvest mid-July into October.
- Kc: initial 0.40, mid 1.00, end 0.75. Use the drip run time calculator for daily hours.
- Pollinizer rows (often every third row) and bees during bloom.
- Fusarium wilt and Phytophthora are major soilborne diseases; grafting onto squash or citron rootstock is spreading but costly.

{{calc:driprun}}

{{q:collins-fusarium}}`]
]});

P({id:"crop-water", group:"crops", title:"When crops need water most", lede:"Crop coefficients, the Delaware crop calendar and the value of an inch at each stage.",
sections:[
["The calendar",
`Different crops hit their thirsty stages at different times. Corn peaks in mid to late July, full-season soybeans in August, double-crop beans in late August to September, wheat in April and May, and vegetables whenever they bloom.

That spread is useful: one well can often serve several crops if their peaks don't overlap.

{{fig:crop-calendar}}`,
`Peak ETc windows (approximate, early May corn and soybean planting):

| Crop | Critical stages | Calendar |
|---|---|---|
| Field corn | VT to R3 | July 10 to August 10 |
| Full-season soybean | R3 to R6 | August |
| Double-crop soybean | R3 to R6 | late August to late September |
| Wheat, barley | Feekes 6 to 11.1 (not at flowering) | April to May |
| Lima bean | first bloom to pod fill | July to September by planting |
| Snap bean | bloom to pin pod | June to September by planting |
| Watermelon | flowering through sizing | June to August |`],
["Crop coefficients",
`To get a crop's water use, take the weather number for the day (reference ET) and multiply by the crop's coefficient. The coefficient is small at planting, about 1.0 to 1.2 at full canopy, and drops at maturity.

{{fig:kc-curve}}`,
`FAO-56 Table 12 values (subhumid, moderate wind):

| Crop | Kc ini | Kc mid | Kc end | Max root depth (ft) | p |
|---|---|---|---|---|---|
| Field corn | 0.30 | 1.20 | 0.35 to 0.60 | 3.3 to 5.6 (often limited to 2 on Sussex sands) | 0.55 |
| Sweet corn | 0.30 | 1.15 | 1.05 | 2.6 to 3.9 | 0.50 |
| Soybean | 0.40 | 1.15 | 0.50 | 2.0 to 4.3 | 0.50 |
| Wheat | 0.70 | 1.15 | 0.25 to 0.40 | 3.3 to 4.9 | 0.55 |
| Green beans | 0.50 | 1.05 | 0.90 | 1.6 to 2.3 | 0.45 |
| Watermelon | 0.40 | 1.00 | 0.75 | 2.6 to 4.9 | 0.40 |

DIMS already carries Delaware stage lengths for its crops.`],
["The value of an inch",
`An inch of water is worth very different amounts at different times. An inch short at corn silking can cost far more than an inch short in June. Use this to decide where the water goes when the well can't keep up.

{{q:dclifton-heatcrop}}`,
`Yield response: 1 - Ya/Ym = Ky x (1 - ETa/ETm). Example: corn at flowering, stage ETm 4.0 in, shortfall 1.0 in, Ky 1.5, yield potential 220 bu/ac, $4.40/bu: 37.5 percent loss, about 83 bu/ac, about $363/ac.

{{calc:inchvalue}}

{{fig:ky}}`]
]});
})();
