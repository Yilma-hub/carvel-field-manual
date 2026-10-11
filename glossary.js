/* Glossary part 1: water, soil, crop water use, hydraulics, irrigation systems.
   Each entry: t title, a aliases (abbreviation first), s short plain definition, f full entry (markdown), r related keys. */
window.GLOSS = window.GLOSS || {};
(function(G){
function E(k, t, a, s, f, r, cs){ G[k] = {t:t, a:a||[], s:s, f:f||"", r:r||[]}; if (cs) G[k].cs = true; }

/* ---------- Crop water use ---------- */
E("et", "Evapotranspiration", ["ET"],
 "Water that leaves a field as vapor: evaporation from the soil plus transpiration through the leaves.",
 `Evapotranspiration (ET) is the combined loss of water from the soil surface (evaporation) and from inside the plant through leaf pores called stomata (transpiration). Early in the season most ET is evaporation from bare soil. Once the canopy closes, more than 90 percent is transpiration.

In Delaware, midsummer ET for a full corn or soybean canopy usually runs 0.20 to 0.30 inch per day. On a hot, windy day in July with low humidity it can top 0.30 inch.

ET is measured in inches (or millimeters) per day. Irrigation scheduling is mostly about replacing ET that rain does not cover.

{{fig:kc-curve}}`, ["eto","etc","kc","water-balance","dims"]);

E("eto", "Reference evapotranspiration", ["ETo","ET0","reference ET"],
 "How fast a well-watered, 4.7-inch-tall grass would use water today. It is the weather's thirst number.",
 `Reference evapotranspiration (ETo) is the ET rate of a hypothetical, well-watered grass surface that is 0.12 m (4.7 in) tall. It is calculated from weather data using the FAO-56 Penman-Monteith equation, which takes in solar radiation, air temperature, humidity and wind speed.

ETo depends on weather only. To get a crop's real water use you multiply it by a crop coefficient: ETc = Kc x ETo.

On the Delaware Environmental Observing System (DEOS), daily ETo is published for each station. Typical Sussex County values run 0.05 in/day in March, 0.18 to 0.25 in/day in late June and July, and 0.08 in/day in late September.

Some sources use alfalfa reference ET (ETr), which runs about 15 to 25 percent higher than ETo. Do not mix crop coefficients made for ETr with ETo.`, ["et","etc","kc","pm","deos"], true);

E("etc", "Crop evapotranspiration", ["ETc","crop ET"],
 "How much water this particular crop is using today: the weather number times a crop factor.",
 `Crop evapotranspiration (ETc) is the water used by a specific, disease-free, well-watered crop at its current growth stage.

    ETc = Kc x ETo

Example: corn at tasseling (VT) with Kc 1.20 and ETo 0.24 in/day uses ETc = 0.29 in/day. Over 7 days that is 2.0 inches, which is why a 1-inch-per-week rule of thumb fails in July.

When the crop is under water stress, actual ET is lower: ETc adj = Ks x Kc x ETo, where Ks drops below 1 once soil water falls below the readily available water (RAW) line.`, ["eto","kc","ks","raw"], true);

E("kc", "Crop coefficient", ["Kc"],
 "A multiplier that turns the weather's water demand into the crop's water demand. Small at planting, highest at flowering, lower at maturity.",
 `The crop coefficient (Kc) adjusts reference evapotranspiration (ETo) for a given crop and stage. FAO-56 splits the season into four stages: initial, development, mid-season and late season.

| Crop | Kc ini | Kc mid | Kc end |
|---|---|---|---|
| Field corn | 0.30 | 1.20 | 0.35 to 0.60 |
| Sweet corn | 0.30 | 1.15 | 1.05 |
| Soybean | 0.40 | 1.15 | 0.50 |
| Winter wheat | 0.70 | 1.15 | 0.25 to 0.40 |
| Lima and snap bean (green) | 0.50 | 1.05 | 0.90 |
| Watermelon | 0.40 | 1.00 | 0.75 |

Values above are FAO-56 Table 12 standards for a subhumid climate with moderate wind. They are a starting point; Delaware research (for example on lima beans at Carvel) refines them.

{{fig:kc-curve}}`, ["eto","etc","kcb","fao56"]);

E("kcb", "Basal crop coefficient", ["Kcb"],
 "The transpiration-only part of the crop coefficient, used when you split plant water use from soil evaporation.",
 `The basal crop coefficient (Kcb) covers transpiration only, with a dry soil surface. The dual coefficient method writes Kc = Kcb + Ke, where Ke is the soil evaporation coefficient. It matters most early in the season and under drip, when the surface is often wet in a small strip and dry elsewhere.`, ["kc","ke"], true);

E("ke", "Soil evaporation coefficient", ["Ke"],
 "The part of crop water use that is just the wet soil surface drying out.",
 `In the FAO-56 dual crop coefficient method, Ke represents evaporation from the soil surface. It is high right after rain or irrigation on bare soil (up to about 1.0 to 1.2) and drops quickly as the top inch dries. Plastic mulch and full canopy both push Ke toward zero.`, ["kcb","kc"], true);

E("ks", "Water stress coefficient", ["Ks"],
 "A number from 0 to 1 that shrinks crop water use when the soil gets too dry.",
 `Ks = (TAW - Dr) / ((1 - p) x TAW) once root zone depletion (Dr) is larger than readily available water (RAW). Above that line Ks = 1. When Ks drops below 1 the crop is losing yield potential, and the loss is largest when it happens at a sensitive stage (see yield response factor, Ky).`, ["taw","raw","ky","dr"], true);

E("pm", "Penman-Monteith equation", ["FAO-56 Penman-Monteith","ASCE Penman-Monteith"],
 "The standard formula weather stations use to calculate reference ET from sun, heat, humidity and wind.",
 `The FAO-56 Penman-Monteith equation combines an energy balance (how much solar energy is available to evaporate water) with an aerodynamic term (how fast wind and dry air carry vapor away). ASCE adopted the same form as its standardized reference ET equation in 2005. Inputs: net radiation, soil heat flux, mean air temperature, wind speed at 2 m, and vapor pressure deficit. You will rarely compute it by hand; DEOS and DIMS do it for you.`, ["eto","vpd","fao56"]);

E("fao56", "FAO Irrigation and Drainage Paper 56", ["FAO-56","FAO 56"],
 "The 1998 United Nations handbook on crop water use that most irrigation scheduling tools are built on.",
 `FAO-56 (Allen, Pereira, Raes and Smith, 1998) is the reference for reference ET, crop coefficients, the soil water balance, total and readily available water, and depletion fractions (p). Table 12 gives Kc values and Table 22 gives rooting depths and p values. It is free from the Food and Agriculture Organization (FAO) website.`, ["kc","eto","taw","p"]);

E("vpd", "Vapor pressure deficit", ["VPD"],
 "How dry the air is compared with how much moisture it could hold. High VPD pulls water out of leaves faster.",
 `Vapor pressure deficit (VPD) is saturation vapor pressure minus actual vapor pressure, in kilopascals (kPa). Hot afternoons in July on Delmarva can reach 2 to 3 kPa. High VPD raises ET and is one reason dry, windy days after a front can burn through soil water faster than muggy days of the same temperature.`, ["eto","pm"]);

E("gdd", "Growing degree days", ["GDD","heat units","GDU"],
 "A running total of warmth that predicts when a crop reaches each growth stage, better than counting calendar days.",
 `For corn: GDD = ((Tmax + Tmin) / 2) - 50, with Tmax capped at 86 F and Tmin floored at 50 F (the 86/50 method). A typical 112-day corn hybrid needs about 1,350 GDD to silking and 2,700 GDD to black layer. Soybean development is driven more by day length than GDD after flowering.

{{calc:gdd}}`, ["ve","vt","r1","r6"]);

/* ---------- Soil water ---------- */
E("fc", "Field capacity", ["FC"],
 "How much water the soil holds after the extra drains away, about a day or two after a soaking rain. The top of the tank.",
 `Field capacity (FC) is the water content after free drainage has nearly stopped, usually 1 to 2 days after saturation on sandy Coastal Plain soils. In tension terms it is roughly 10 centibars (cb) for sands and 30 cb for loams. Water above FC drains below the root zone and can carry nitrate with it.

{{fig:bucket}}`, ["pwp","awc","taw","sat"]);

E("pwp", "Permanent wilting point", ["PWP","wilting point"],
 "The point where the soil is so dry that roots can't pull out any more water and plants stay wilted overnight. The bottom of the tank.",
 `Permanent wilting point (PWP) is defined as the water content at 1,500 kPa (15 bar) tension. Plants are under severe stress well before PWP; that is why schedules refill at RAW, not at PWP.`, ["fc","awc","taw"]);

E("sat", "Saturation", [],
 "Every pore in the soil is full of water and there is no air for the roots.",
 `At saturation all pore space is filled. Water above field capacity drains by gravity within a day or two on sandy soils. Long saturation (ponding, wet spots) starves roots of oxygen and drives denitrification losses of nitrogen.`, ["fc"]);

E("awc", "Available water capacity", ["AWC","available water holding capacity","AWHC"],
 "How many inches of usable water each inch (or foot) of soil can store between full and empty.",
 `Available water capacity (AWC) = field capacity minus permanent wilting point, given as inches of water per inch of soil (in/in) or per foot (in/ft).

| Texture | AWC in/in | AWC in/ft |
|---|---|---|
| Sand (for example Evesboro) | 0.04 to 0.06 | 0.5 to 0.7 |
| Loamy sand (Rumford, Fort Mott) | 0.06 to 0.09 | 0.7 to 1.1 |
| Sandy loam (Downer) | 0.10 to 0.13 | 1.2 to 1.6 |
| Silt loam and loam (Sassafras subsoil, Matapeake) | 0.15 to 0.20 | 1.8 to 2.4 |

Values are typical ranges; pull the real number for a field from the NRCS Web Soil Survey (WSS).

{{fig:soil-awc}}`, ["fc","pwp","taw","wss"]);

E("taw", "Total available water", ["TAW"],
 "All the usable water the root zone can hold right now, in inches.",
 `Total available water (TAW) = AWC x root depth.

Example: loamy sand with AWC 0.07 in/in and an effective root depth of 24 in gives TAW = 1.68 in.

Root depth grows during the season, so TAW does too. On many Sussex sands a compacted layer at 8 to 12 in caps root depth no matter what the crop could do.

{{calc:taw}}`, ["awc","raw","mad","rootzone"]);

E("raw", "Readily available water", ["RAW"],
 "The part of the tank the crop can use without any stress. When it is gone, it is time to water.",
 `Readily available water (RAW) = p x TAW, where p is the allowed depletion fraction.

Example: TAW 1.68 in and p 0.55 gives RAW = 0.92 in. If the pivot needs 3 days to get around and ETc is 0.25 in/day, the trigger must sit about 0.75 in above the RAW line, so you start when depletion reaches roughly 0.17 to 0.22 in.

{{fig:bucket}}`, ["taw","mad","p","ks"]);

E("mad", "Management allowed depletion", ["MAD","allowable depletion"],
 "The share of stored soil water you let the crop use before you irrigate, chosen by the manager.",
 `Management allowed depletion (MAD) is the manager's chosen depletion limit, usually written as a percent of TAW. It is often set equal to or a bit below the FAO-56 p value. On sandy soil with a slow pivot, set MAD low (30 to 40 percent) so the machine can keep up. NRCS practice 449 (Irrigation Water Management) asks the plan to state MAD for each crop.`, ["raw","p","taw","cps449"]);

E("p", "Depletion fraction", ["p value","p factor"],
 "The share of total available water a crop can use before it starts to suffer. About half for most field crops.",
 `FAO-56 p values (for ETc near 5 mm/day): corn 0.55, soybean 0.50, wheat 0.55, beans 0.45, watermelon 0.40, sweet corn 0.50. Adjust: p = p(table) + 0.04 x (5 - ETc in mm/day). On a hot 7 mm/day (0.28 in) day, p drops by about 0.08.`, ["raw","mad","taw"]);

E("dr", "Root zone depletion", ["depletion"],
 "How many inches of water have been used out of the full tank since it was last at field capacity.",
 `Depletion (Dr) is tracked daily in a water balance: Dr today = Dr yesterday - effective rain - net irrigation + ETc + deep percolation. At field capacity Dr = 0. When Dr reaches the trigger, irrigate.`, ["water-balance","raw","taw"], true);

E("rootzone", "Effective root zone", ["root depth","rooting depth"],
 "How deep the roots are actually pulling water from. It is the depth of the tank.",
 `The effective root zone is the depth that supplies most of the crop's water, usually the top 70 percent of roots. For irrigated corn on Delaware sands use 12 in at V6, 18 in by V10 and 24 in by VT, unless a compacted layer stops roots sooner. Soybeans: 12 in at V3 to about 24 in by R3. Sensors at 6, 12 and 18 in show where roots are working (water use shows up as a daily stair-step drop).`, ["taw","sensor-trend"]);

E("water-balance", "Soil water balance", ["checkbook method","checkbook","water budget"],
 "A daily ledger of water in and water out of the root zone, like a checking account.",
 `The checkbook method adds deposits (effective rain and net irrigation) and subtracts withdrawals (ETc). Depletion grows each day until you water.

    Dr(i) = Dr(i-1) + ETc(i) - Pe(i) - In(i) + DP(i)

DIMS (DEOS Irrigation Management System) runs this ledger for each registered field using station weather.

{{calc:balance}}`, ["dr","etc","pe","dims"]);

E("pe", "Effective rainfall", ["Pe","effective rain"],
 "The part of a rain that soaks in and stays where roots can use it.",
 `Not all rain counts. Rain that runs off, or that exceeds the space left in the root zone, is lost. A simple rule: rains under 0.1 in count as zero (they evaporate), and anything above current depletion counts only up to depletion. A 2-inch storm on a field depleted by 0.8 in gives 0.8 in effective rain.`, ["water-balance","dp"], true);

E("dp", "Deep percolation", ["DP","drainage below roots"],
 "Water that soaks past the bottom of the root zone. It is lost to the crop and can carry nitrate to groundwater.",
 `Deep percolation (DP) happens whenever rain plus irrigation exceed what the root zone can hold. On Sussex sands with TAW near 1.5 in, a 1.25-in irrigation on a field depleted by only 0.5 in pushes 0.75 in below the roots. That water reaches the unconfined Columbia aquifer within weeks to months.`, ["pe","leaching","nitrate"]);

E("leaching", "Leaching", [],
 "Water carrying dissolved nutrients, mainly nitrate, down and out of the root zone.",
 `Nitrate leaching load (lb N/ac) roughly equals drainage depth (in) x nitrate-N concentration (ppm) x 0.2266. Example: 2 in of drainage at 20 ppm NO3-N carries about 9 lb N/ac. Over-irrigation and fall nitrogen are the two big drivers on Delmarva.

{{calc:leach}}`, ["dp","nitrate","lf"]);

E("infiltration", "Infiltration rate", ["intake rate","intake"],
 "How fast water can soak into the soil surface, in inches per hour.",
 `Infiltration rate falls during an irrigation as the surface wets up and crusts. Sandy Delaware soils start above 2 in/h; sandy loams with a crust can drop below 0.5 in/h. If the sprinkler applies water faster than this, it ponds or runs off. That is why the outer spans of a pivot, which apply 3 to 6 in/h for a short time, cause runoff on crusted or sloped ground.`, ["air","runoff"]);

E("runoff", "Runoff", [],
 "Water that flows off the field surface instead of soaking in.",
 `Runoff happens when the application rate exceeds the infiltration rate and surface storage is full. Signs under a pivot: ponding in wheel tracks, rills on slopes, wet low spots. Fixes: lower application depth per pass (faster speed), wider spray patterns (rotating plates), boom backs, reservoir tillage, residue.`, ["infiltration","air"]);

E("tension", "Soil water tension", ["soil matric potential","suction","SWT"],
 "How hard roots have to pull to get water out of the soil. Higher numbers mean drier soil.",
 `Measured in centibars (cb), which equal kilopascals (kPa). 0 to 10 cb is saturated; 10 to 30 cb is field capacity range on sand to loam; Delaware sands reach 50 percent depletion at only 30 to 40 cb, while loams reach it near 60 to 80 cb.

Rough refill triggers for Delmarva: sand 25 to 30 cb, loamy sand 30 to 40 cb, sandy loam 40 to 50 cb, silt loam 50 to 70 cb.

{{q:adk-20cb}}`, ["cb","watermark","tensiometer"]);

E("cb", "Centibar", ["cb","kPa","kilopascal"],
 "The unit soil moisture sensors read in. One centibar equals one kilopascal.",
 `1 centibar (cb) = 1 kilopascal (kPa) = 0.145 psi. Soil tension sensors such as Watermark blocks and tensiometers report cb. Bigger numbers mean drier soil.`, ["tension","watermark"]);

E("vwc", "Volumetric water content", ["VWC","volumetric moisture"],
 "The percent of a soil's volume that is water. Capacitance probes report this.",
 `VWC (percent) x depth gives inches of water: 15 percent VWC over 12 in = 1.8 in of water. Use VWC trends rather than absolute numbers; field-calibrate full and refill lines from the first few rain and dry-down cycles.`, ["capacitance","fc"]);

E("watermark", "Watermark sensor", ["granular matrix sensor","GMS"],
 "A low-cost gypsum-and-sand block buried in the soil that reads how dry it is in centibars.",
 `Watermark granular matrix sensors (GMS) read 0 to 200 cb. They work best from 10 to 100 cb, so they are less precise in very sandy soils where the whole useful range is 10 to 40 cb. Install with a slurry so the block has full soil contact, at 6, 12 and 18 in for most row crops. UD research at Warrington Farm used about 200 stations of three Watermarks each.

{{q:adk-stations}}`, ["tension","capacitance","tensiometer"]);

E("tensiometer", "Tensiometer", [],
 "A water-filled tube with a porous ceramic tip and a gauge. It reads soil tension directly and works best in wet to medium soil.",
 `Tensiometers read 0 to about 80 cb before air enters the tip. That range fits sandy Delmarva soils well. They need refilling and are fragile in tillage traffic.`, ["tension","watermark"]);

E("capacitance", "Capacitance probe", ["FDR","frequency domain reflectometry"],
 "A probe that reads soil moisture as percent water by measuring how the soil affects an electric field.",
 `Multi-depth capacitance probes (frequency domain reflectometry, FDR) read volumetric water content every 4 in down to 24 to 48 in, usually every 15 to 60 minutes with cellular telemetry. They are sensitive to air gaps, so install in a slurry or with the maker's tool. Read trends, not absolute values: the daily stair-step shows root uptake at each depth.`, ["vwc","telemetry","sensor-trend"]);

E("tdr", "Time domain reflectometry", ["TDR"],
 "A sensor method that times an electrical pulse through the soil to measure moisture.",
 `TDR measures the dielectric constant of soil from the travel time of a pulse along rods, then converts to VWC. It is accurate and less salt-sensitive than capacitance but costs more.`, ["capacitance","vwc"], true);

E("sensor-trend", "Daily stair-step pattern", ["stair-step"],
 "The step-like drop in soil moisture readings: flat at night, dropping during the day as plants drink.",
 `When roots are active at a sensor depth, readings drop in daytime and level off at night. A depth that shows no steps has no active roots. {{fig:sensor-trend}}

{{q:adk-roots}}`, ["capacitance","rootzone"]);

E("wss", "Web Soil Survey", ["WSS","SSURGO"],
 "The free USDA website where you draw a field and get its soil types and water holding numbers.",
 `Web Soil Survey (WSS) serves the Soil Survey Geographic database (SSURGO). For irrigation, pull map unit names, AWC by layer, drainage class and depth to restrictive layers. Delaware's coarse soils (Evesboro, Rumford, Fort Mott) show AWC near 0.05 to 0.09 in/in.`, ["awc"]);

E("eca", "Apparent electrical conductivity", ["ECa"],
 "A sensor-cart or tractor-pulled reading of how well the soil carries electricity. It maps sand versus clay and wet versus dry areas.",
 `Apparent electrical conductivity (ECa) is measured with an EM38 or Veris cart in millisiemens per meter (mS/m). On Delmarva it mainly tracks clay and water content, so it is a good base layer for irrigation management zones and variable rate irrigation (VRI). Near tidal water it also flags salt.

{{q:adk-ec}}`, ["vri","zone","ece"]);

E("ece", "Saturated paste electrical conductivity", ["ECe"],
 "The standard lab test for soil saltiness, in deciSiemens per meter.",
 `ECe is measured on a saturated soil paste extract in deciSiemens per meter (dS/m). Yield starts to drop above a threshold: corn 1.7, soybean 5.0, wheat 6.0, green bean 1.0, watermelon about 2.0 dS/m (Maas and Hoffman values). Salt patches on Eastern Shore farms often test above 4 dS/m.`, ["ecw","salinity","sar"]);

E("ecw", "Irrigation water electrical conductivity", ["ECw"],
 "How salty the irrigation water itself is.",
 `ECw under 0.7 dS/m has no restriction for most crops (FAO-29 guidelines). Wells near tidal rivers and the Inland Bays should be tested every year; a rising ECw or chloride is an early sign of saltwater intrusion.`, ["ece","salinity","swi"]);

E("sar", "Sodium adsorption ratio", ["SAR"],
 "A number that shows whether sodium in the water could make the soil seal up and stop soaking in water.",
 `SAR = Na / sqrt((Ca + Mg) / 2), with concentrations in milliequivalents per liter. High SAR with low EC is the worst case for infiltration. Most Delaware well water has low SAR.`, ["ecw"]);

E("salinity", "Soil salinity", ["salt stress"],
 "Too much salt in the soil, which makes it harder for roots to take up water, like drinking seawater.",
 `Salinity raises the osmotic pull of soil water so plants behave as if the soil is drier than it is. On Delmarva the cause is tidal flooding and saltwater intrusion, not irrigation water. Soybean tolerates about 3 parts per thousand (ppt) salt in soil water and corn about 1 ppt.

{{fig:salinity}}

{{q:miller-dakotas}}`, ["ece","swi","salt-patch"]);

E("ph", "Soil pH", ["pH"],
 "How acid or alkaline the soil is. Most crops like 6.0 to 6.5.",
 `Delaware sands are naturally acid and lime is needed every few years. pH also matters for drip systems: water pH above 7.5 with calcium or iron leads to emitter clogging, so growers inject acid to keep water pH near 6.5.`, ["iron","acid"], true);

E("lf", "Leaching fraction", ["LF"],
 "The share of applied water that goes below the roots on purpose, to wash salt out.",
 `LF = depth drained / depth applied. The leaching requirement for salt control is LR = ECw / (5 x ECe threshold - ECw). On humid Delmarva, winter rain usually does this job.`, ["leaching","ecw"], true);

/* ---------- Units ---------- */
E("gpm", "Gallons per minute", ["gpm"],
 "How much water is flowing. A typical Delaware pivot runs 600 to 1,000 gallons per minute.",
 `450 gpm = 1 acre-inch per hour (exactly 452.6 gpm). Pivot design flow on Delmarva is usually 5 to 7 gpm per acre.`, ["acin","capacity"]);

E("gph", "Gallons per hour", ["gph"],
 "How fast one drip emitter drips. Usually 0.13 to 0.53 gallons per hour.",
 `Drip tape is also rated in gallons per minute per 100 feet (gpm/100 ft). A tape with 0.45 gpm/100 ft and 12-in emitter spacing gives 0.27 gph per emitter.`, ["emitter","drip"]);

E("psi", "Pounds per square inch", ["psi"],
 "The unit for water pressure on a gauge.",
 `1 psi = 2.31 feet of water head. Low-pressure pivot packages run 10 to 25 psi at the nozzle; drip tape runs 8 to 12 psi.`, ["head","tdh"]);

E("head", "Feet of head", ["ft of head","pressure head"],
 "Pressure expressed as the height of a water column. 2.31 feet of water equals 1 psi.",
 `Engineers add everything in feet of head: lift from the pumping water level, pressure at the pump, elevation to the pivot point and friction losses. The total is total dynamic head (TDH).`, ["tdh","psi"]);

E("acin", "Acre-inch", ["ac-in","acre inch"],
 "Enough water to cover one acre one inch deep: 27,154 gallons.",
 `1 acre-inch = 27,154 gal = 3,630 cubic feet. 1 acre-foot = 12 acre-inches = 325,851 gal. At 450 gpm it takes one hour to pump one acre-inch.

{{calc:convert}}`, ["gpm"]);

E("ppm", "Parts per million", ["ppm","mg/L"],
 "A concentration unit. For water, 1 ppm is 1 milligram per liter.",
 `Nitrate in drinking water is regulated at 10 ppm as nitrate-nitrogen (NO3-N). Fertigation solutions are often aimed at 50 to 150 ppm N for vegetables.`, ["nitrate","fertigation"]);

E("dsm", "DeciSiemens per meter", ["dS/m","mmho/cm"],
 "The unit for salt level in water or soil extract. 1 dS/m is about 640 ppm of dissolved salts.",
 `1 dS/m = 1 mmho/cm = 1,000 microsiemens per centimeter. Total dissolved solids (TDS) in ppm is about 640 x EC in dS/m.`, ["ecw","ece"]);

/* ---------- Hydraulics and pumps ---------- */
E("tdh", "Total dynamic head", ["TDH"],
 "The total push a pump must give the water: lift from the well plus the pressure needed plus losses on the way.",
 `TDH (ft) = pumping lift + 2.31 x discharge pressure (psi) + column friction (for turbines, if pressure is read at the surface) + velocity head (small).

Example: pumping water level 65 ft, 55 psi at the discharge gives TDH = 65 + 2.31 x 55 = 192.1 ft.

{{fig:pump-tdh}}`, ["whp","pwl","psi","nppc"]);

E("whp", "Water horsepower", ["WHP"],
 "The useful work the pump does on the water.",
 `WHP = gpm x TDH / 3,960. Example: 750 gpm x 192.1 ft / 3,960 = 36.4 WHP. Input power divided into WHP gives overall pumping plant efficiency.`, ["tdh","bhp","nppc"]);

E("bhp", "Brake horsepower", ["BHP"],
 "The power going into the pump shaft from the engine or motor.",
 `BHP = WHP / pump efficiency. For an electric motor, input kW = BHP x 0.746 / motor efficiency.`, ["whp"]);

E("nppc", "Nebraska Pumping Plant Performance Criteria", ["NPPC","Nebraska criteria"],
 "A benchmark for how much useful pumping work a well-run engine or motor should get from each gallon of diesel or kilowatt-hour.",
 `NPPC benchmarks: electricity 0.885 WHP-h per kWh; diesel 12.5 WHP-h per gallon; propane 6.89; natural gas 61.7 per thousand cubic feet. Performance rating = actual WHP-h per unit / benchmark x 100. A plant under 75 percent is usually worth repairing.

Example from this manual: a diesel plant at 70 percent of NPPC costs about $7.02 per acre-inch to run, against $4.94 at the benchmark.

{{calc:pump}}`, ["whp","tdh","vfd"]);

E("pwl", "Pumping water level", ["PWL"],
 "How far down the water is inside the well while the pump is running.",
 `Pumping water level (PWL) = static water level (SWL) + drawdown. Measure with an airline and gauge (depth = airline length - 2.31 x gauge psi) or an electric sounder through an access port.`, ["swl","drawdown","tdh"]);

E("swl", "Static water level", ["SWL"],
 "Depth to water in the well when the pump has been off for a while.",
 `Static water level in Sussex County Columbia aquifer wells is often 5 to 30 ft below land surface. Confined aquifer wells show a potentiometric level instead, which may be deeper and has been dropping in parts of the Maryland Eastern Shore.`, ["pwl","potentiometric"]);

E("drawdown", "Drawdown", [],
 "How much the water level drops in a well when the pump is running.",
 `Drawdown = PWL - SWL. Specific capacity = gpm / drawdown (gpm per ft). Dropping specific capacity over the years means the screen is clogging (iron bacteria are common on Delmarva).`, ["pwl","swl","cooper-jacob"]);

E("hazen", "Hazen-Williams equation", ["Hazen-Williams","C factor"],
 "A standard formula for how much pressure water loses to friction in a pipe.",
 `hf (ft per 100 ft) = 0.2083 x (100 / C)^1.852 x Q^1.852 / d^4.8655, with Q in gpm and d inside diameter in inches. C = 150 for PVC and polyethylene, 130 to 140 for new steel or aluminum, 100 for old steel.

Keep velocity under 5 ft/s in mainlines to limit friction and water hammer.

{{calc:friction}}`, ["friction","velocity"]);

E("friction", "Friction loss", [],
 "Pressure lost as water rubs along the inside of pipes and fittings.",
 `Friction grows with the square of flow, roughly (1.85 power). Doubling flow in the same pipe raises loss about 3.6 times. Undersized buried mainline is one of the most common reasons a pivot cannot hold its design pressure on Delmarva farms that added a second machine.`, ["hazen"]);

E("velocity", "Pipe velocity", ["flow velocity"],
 "How fast water moves inside the pipe, in feet per second.",
 `V (ft/s) = 0.4085 x gpm / d squared (d in inches). NRCS practice 430 (Irrigation Pipeline) limits velocity to 5 ft/s unless surge protection is designed.`, ["hazen","cps430"]);

E("vfd", "Variable frequency drive", ["VFD","variable speed drive"],
 "An electronic box that changes how fast an electric pump motor spins, so the pump makes only the pressure and flow you need.",
 `A VFD varies motor speed by changing the frequency of the electricity. Pump affinity laws: flow changes with speed, head with speed squared, power with speed cubed. Cutting speed 10 percent cuts power about 27 percent. VFDs pay best on wells that feed a pivot with an end gun or corner arm, several machines, or drip zones of different sizes.

{{calc:vfd}}`, ["affinity","nppc","cps533"]);

E("affinity", "Pump affinity laws", ["affinity laws"],
 "Rules for how flow, pressure and power change when a pump runs faster or slower.",
 `Q2/Q1 = N2/N1. H2/H1 = (N2/N1)^2. P2/P1 = (N2/N1)^3. They hold for the pump itself; the system curve decides the real operating point.`, ["vfd"]);

E("turbine", "Vertical turbine pump", ["turbine pump","line shaft turbine"],
 "A pump with stacked impellers down in the well, driven by a shaft from a motor or engine on top.",
 `Common on larger Delaware irrigation wells, often diesel through a right-angle gear drive. Column friction and shaft bearings add losses. Test performance with flow, discharge pressure and pumping water level.`, ["submersible","tdh"]);

E("submersible", "Submersible pump", [],
 "A pump and motor sealed together and lowered into the well.",
 `Electric only, simpler to install, and common on farms with three-phase power. Pair with a VFD for multiple zones or end guns.`, ["turbine","vfd"]);

E("centrifugal", "Centrifugal pump", [],
 "A surface pump with a spinning impeller, used for ponds, ditches and booster duty.",
 `Must be primed and is limited to about 20 to 25 ft of suction lift. Check net positive suction head to avoid cavitation (rattling noise, pitted impeller).`, ["cavitation"]);

E("cavitation", "Cavitation", [],
 "Bubbles forming and collapsing inside a pump because suction pressure is too low. It sounds like gravel and wrecks impellers.",
 `Caused by too much suction lift, clogged intakes, or high flow beyond the pump curve. Net positive suction head available (NPSHa) must exceed what the pump requires (NPSHr).`, ["centrifugal"]);

E("flowmeter", "Flow meter", ["propeller meter","mag meter","ultrasonic meter"],
 "A device that measures how many gallons per minute pass and the total gallons pumped.",
 `Propeller meters need 5 to 10 pipe diameters of straight pipe upstream. Magnetic (mag) meters are accurate and have no moving parts. Clamp-on ultrasonic meters let you test without cutting pipe. Delaware and Maryland water allocation permits may require metering or reporting.`, ["gpm","permit-de"]);

E("cooper-jacob", "Cooper-Jacob equation", ["Cooper-Jacob"],
 "A formula that estimates how far the water level will drop near a pumping well over time.",
 `s = (264 Q / T) x log10(0.3 T t / (r^2 S)), with s drawdown (ft), Q (gpm), T transmissivity (gal/day/ft), t time (days), r distance (ft), S storativity. Used to check whether a new irrigation well will interfere with a neighbor's domestic well, a question DNREC raises in allocation reviews.

{{calc:cooperjacob}}`, ["drawdown","transmissivity"]);

E("transmissivity", "Transmissivity", [],
 "How easily an aquifer passes water sideways across its whole thickness.",
 `Transmissivity = hydraulic conductivity x aquifer thickness, in gal/day/ft or ft squared per day. The Columbia aquifer in Sussex County is highly transmissive, which is why it supports high-yield irrigation wells.`, ["cooper-jacob","columbia"], true);

E("storativity", "Storativity", ["storage coefficient"],
 "How much water an aquifer gives up per foot of water level drop.",
 `Confined aquifers: 0.0001 to 0.001. Unconfined (specific yield): 0.1 to 0.3.`, ["transmissivity"]);

/* ---------- Pivot and sprinkler ---------- */
E("pivot", "Center pivot", ["pivot","center-pivot"],
 "A long line of sprinkler pipe on wheeled towers that turns slowly around a fixed point, watering a circle.",
 `A center pivot is a self-propelled lateral anchored at a pivot point. Spans of 140 to 200 ft ride on drive towers powered by gear motors. The last regular tower sets the speed; the others follow by alignment switches.

Delaware has the densest center pivot use on the East Coast; the U.S. Geological Survey (USGS) mapped thousands of pivots across the Delmarva Peninsula.

{{fig:pivot-side}}

{{q:adk-betamax}}`, ["span","tower","endgun","percent-timer","vri"]);

E("linear", "Linear move", ["lateral move"],
 "Like a pivot but the whole line drives straight up and down a rectangular field.",
 `Linears water rectangles fully, but need a hose drag or ditch feed and guidance. Uniform application along the line because every point moves at the same speed.`, ["pivot"]);

E("span", "Span", ["pivot span"],
 "One section of pivot pipe between two towers.",
 `Span lengths 140 to 200 ft. Outer spans carry more area: on a 1,300-ft pivot the outer two spans cover about 40 percent of the field. That is why a nozzle problem near the end matters most.

{{fig:pivot-rings}}`, ["tower","pivot"]);

E("tower", "Drive tower", ["tower","last regular tower","LRT"],
 "The wheeled A-frame and motor that holds up and moves each span.",
 `Each tower has a gearmotor, center drive, wheel gearboxes and tires. The last regular tower (LRT) runs on the percent timer; inner towers start and stop to keep alignment.`, ["percent-timer","span"]);

E("endgun", "End gun", ["end-gun","big gun on pivot"],
 "A large sprinkler on the end of the pivot that throws water farther to reach more acres.",
 `End guns add 50 to 150 ft of wetted radius and usually need a booster pump (2 to 5 horsepower) to make 40 to 60 psi. When the gun turns on, flow and pressure for the rest of the machine drop unless the system has pressure regulators. Gun angle settings should keep water off roads.

{{q:demalto-hazard}}`, ["booster","rw","regulator"]);

E("booster", "Booster pump", [],
 "A small pump on the last tower that raises pressure for the end gun.",
 `Check booster pressure and screen at the start of every season; worn boosters are a common cause of a dry outer band.`, ["endgun"]);

E("drop", "Drop tube", ["drop tubes"],
 "A flexible hose hanging down from the pivot pipe to put the sprinkler closer to the crop.",
 `Drops bring sprinklers to 3 to 7 ft above the ground, cutting wind drift and evaporation. Use weights to keep them still and check spacing against the nozzle chart.`, ["lepa","mesa"]);

E("lepa", "Low energy precision application", ["LEPA"],
 "Hoses or bubblers that drop water right at the soil between rows, used with furrow dikes.",
 `LEPA applies water 8 to 18 in above the ground into every other furrow. It needs basins or dikes to hold water; on Delmarva's flat sands, it is rare because rows are not furrowed.`, ["lesa","drop"]);

E("lesa", "Low elevation spray application", ["LESA"],
 "Sprinklers set 1 to 2 feet off the ground on closely spaced drops.",
 `LESA uses spray heads 12 to 18 in above the ground on 30 to 60 in spacing. Good water efficiency but higher instantaneous application rates.`, ["lepa","mesa"]);

E("mesa", "Mid-elevation spray application", ["MESA"],
 "The common pivot setup: sprinklers hanging 3 to 7 feet above the ground on drops.",
 `MESA is the standard Delmarva package. Rotating or wobbling plates help widen the pattern and lower the instantaneous application rate.`, ["lesa","drop"]);

E("regulator", "Pressure regulator", ["regulators"],
 "A small valve above each sprinkler that keeps its pressure steady even when the pivot pressure goes up and down.",
 `Regulators need inlet pressure at least 5 psi above their rating to work. Common ratings are 6, 10, 15 and 20 psi. On rolling ground or with an end gun, regulators keep nozzle flow even. A regulator that sticks shows up as a wet or dry band in a can test.`, ["nozzle","endgun"]);

E("nozzle", "Nozzle package", ["sprinkler package","sprinkler chart"],
 "The list of which size sprinkler nozzle goes at each spot along the pivot so every acre gets the same water.",
 `Because outer sprinklers cover more area, nozzles get bigger toward the end. The dealer's sprinkler chart lists outlet, position, nozzle size, flow and regulator. Compare installed nozzles against the chart during a can test; swapped or worn nozzles are common.`, ["regulator","cu"]);

E("percent-timer", "Percent timer", ["speed setting","percent setting"],
 "The dial on the pivot panel that sets how fast it moves. 100 percent means the end tower never stops.",
 `At 50 percent the last regular tower runs 30 seconds out of each minute. Depth applied is inversely proportional to speed: half the speed gives twice the depth.

{{calc:speed}}`, ["speed-chart","t100"]);

E("speed-chart", "Speed chart", ["pivot speed chart"],
 "A table that tells the farmer how many inches the pivot puts on at each percent setting and how long a full circle takes.",
 `Built from wetted radius (Rw), last regular tower radius (Rlt), flow (Q) and full-speed tower speed (V). Example: Rlt 1,250 ft, Rw 1,330 ft, Q 750 gpm, V 9 ft/min gives 127.6 irrigated acres, 14.54 hours per circle at 100 percent, and 0.76 in at 25 percent in 58.2 hours.

{{calc:speed}}`, ["percent-timer","t100","capacity"]);

E("t100", "Time per revolution at 100 percent", ["T100"],
 "How long the pivot takes to go around once when the timer is at 100 percent.",
 `T100 (h) = 2 x pi x Rlt / (V x 60), with Rlt in ft and V in ft/min. A 1,250-ft pivot at 9 ft/min takes 14.5 hours.`, ["speed-chart"]);

E("rw", "Wetted radius", ["Rw"],
 "How far out from the pivot point water actually lands, including the end gun or end sprinkler throw.",
 `Rw sets irrigated area: A (ac) = pi x Rw squared / 43,560. For a full circle at Rw 1,330 ft, A = 127.6 ac.`, ["speed-chart","endgun"], true);

E("capacity", "System capacity", ["design capacity","gpm per acre"],
 "How much water the system can put on per day if it runs all day. If it's less than what the crop uses, the field slowly dries out in a heat wave.",
 `Gross capacity (in/day) = gpm x 24 / (452.6 x acres). Net = gross x application efficiency. Example: 750 gpm on 127.6 ac = 0.31 in/day gross; at 85 percent efficiency 0.26 in/day net. That just matches peak corn ETc in July. Below about 5 gpm per acre on Delaware sands, the crop will fall behind during a heat wave.

{{calc:capacity}}`, ["gpm","etc"]);

E("air", "Application rate", ["instantaneous application rate","peak application rate"],
 "How hard the water is landing, in inches per hour, at one spot while the sprinkler passes.",
 `Peak rate under a pivot rises with distance from the center. For a 1,300-ft pivot with a 40-ft wetted spray diameter at the end, the peak can exceed 4 in/h for a few minutes. Compare with infiltration to judge runoff risk.`, ["infiltration","runoff"]);

E("cu", "Coefficient of uniformity", ["CU","Christiansen coefficient","CUc"],
 "A score from 0 to 100 for how evenly a sprinkler system puts water on. 100 is perfect.",
 `Christiansen CU = 100 x (1 - sum of absolute deviations from the mean / sum of catches). For pivots use the Heermann-Hein version, which weights each can by its distance from the pivot point.

Targets: 90 and above excellent; 85 to 90 good; 80 to 85 fair, look for fixable problems; below 80 needs repair or a new package. Example from 13 cans at 100-ft spacing: CU(HH) 87.9.

{{calc:cucans}}`, ["cuhh","du","dulq","catchcan"]);

E("cuhh", "Heermann-Hein coefficient of uniformity", ["CUHH","CU(HH)","Heermann-Hein"],
 "The pivot version of the uniformity score, giving outer cans more weight because they stand for more acres.",
 `CU(HH) = 100 x [1 - sum(Si x |Vi - Vw|) / sum(Si x Vi)], where Si is distance of can i from the pivot and Vw is the area-weighted mean. Standard: ASABE S436.2 (center pivot and lateral move uniformity testing), the standard UD and NRCS used for 971 Delaware tests from 2003 to 2023.`, ["cu","catchcan"]);

E("du", "Distribution uniformity", ["DU"],
 "Another evenness score. It compares the driest quarter of the field with the average.",
 `DU is the ratio of a low-end average to the overall average. Low-quarter DU (DUlq) is most common. A common approximation for sprinklers is DUlq = 1.6 x CU - 60, so CU 87.9 suggests DUlq near 81. The measured value in the example data set was 78.7.`, ["dulq","cu"]);

E("dulq", "Low-quarter distribution uniformity", ["DUlq","DU lq","low quarter DU"],
 "The average of the driest 25 percent of catch cans divided by the overall average.",
 `DUlq = mean of lowest 25 percent / overall mean x 100. For pivots use area weighting. Example data set: DUlq 78.7. Scheduling uses DUlq to set gross depth so the dry quarter still gets enough: gross = net / (DUlq / 100).`, ["du","cu"], true);

E("catchcan", "Catch can test", ["can test","collector test"],
 "Lining up cans under the pivot, letting it pass, and measuring what each caught to see how even the water is.",
 `Two rows of collectors at no more than 10 to 16 ft spacing (often 10 to 15 ft under ASABE S436.2) from the second tower to the end. Read volumes right after the machine passes to limit evaporation. Record wind, pressure at the pivot point and the end, percent timer and nozzle chart.

{{fig:catch-can}}

{{calc:candepth}}`, ["cu","cuhh","dulq"]);

E("vri", "Variable rate irrigation", ["VRI"],
 "A pivot that puts on different amounts of water in different parts of the field according to a map.",
 `Speed-control VRI changes tower speed by sector (pie slices). Zone-control VRI cycles individual sprinklers or banks on and off to vary depth along the pipe too. VRI makes sense when soils vary a lot (ECa maps), when there are wet spots, ditches, roads or wetlands to skip, or for research plots like UD's Warrington Farm.`, ["prescription","eca","zone"]);

E("gun", "Traveling gun", ["hard hose traveler","hose reel","big gun"],
 "A large sprinkler on a cart pulled slowly back toward a hose reel, watering a long strip.",
 `Depth (in) = 96.3 x gpm / (lane spacing ft x travel speed ft/h). Lane spacing about 70 to 80 percent of wetted diameter in calm air, less in wind. Common on Delmarva vegetable farms and odd-shaped fields. High energy use (80 to 100 psi at the gun).

{{calc:gun}}`, ["solidset","cu"]);

E("solidset", "Solid set sprinklers", ["solid set","hand move"],
 "Sprinkler pipes laid out in a grid that stay put for the whole season (or are moved by hand).",
 `Used for frost protection in strawberries and for vegetable establishment. Uniformity measured with a grid of cans and the Christiansen CU. Target CU 80 or better for vegetables.`, ["cu","gun"]);

/* ---------- Drip ---------- */
E("drip", "Drip irrigation", ["trickle irrigation","microirrigation"],
 "Water delivered slowly through tubes or tape right at the plant roots.",
 `Drip on Delmarva mostly means thin-wall drip tape under plastic mulch for watermelon, cantaloupe, tomato, pepper and strawberry. NRCS calls it microirrigation (practice 441). Water use efficiency is high, but sandy soils spread water sideways only 6 to 10 in, so the wetted strip is narrow.

{{fig:drip-wet}}

{{q:collins-overhead}}`, ["tape","sdi","eu","fertigation","cps441"]);

E("tape", "Drip tape", [],
 "Thin flat plastic tubing with tiny emitters built in every few inches.",
 `Wall thickness 5 to 15 mil; emitter spacing 8 to 12 in; flow 0.20 to 0.67 gpm/100 ft. Thin tape is one-season; 15-mil tape can be reused or buried for subsurface drip.`, ["drip","emitter"]);

E("emitter", "Emitter", ["dripper"],
 "The tiny opening in drip tape or tubing where water comes out.",
 `Turbulent-flow emitters with labyrinth paths resist clogging. Emitter discharge exponent x: q = k x P^x. Pressure-compensating (PC) emitters have x near 0; standard tape near 0.5.`, ["pc","eu","gph"]);

E("pc", "Pressure compensating emitter", ["PC emitter","PC"],
 "A drip emitter that gives the same flow even when pressure changes, useful on long or sloped rows.",
 `PC emitters hold flow within about 5 percent over a pressure range (for example 7 to 40 psi). Used for orchards, long runs and slopes.`, ["emitter"], true);

E("eu", "Emission uniformity", ["EU"],
 "The drip version of the evenness score: how close the low-flow emitters are to the average.",
 `Field EU = 100 x (mean of lowest 25 percent of emitter flows) / (mean of all). Targets: 90 and above excellent, 80 to 90 good, 70 to 80 fair, below 70 poor. Example from this manual's data: EU 83.6.

{{calc:dripeu}}`, ["drip","cv","dulq"]);

E("cv", "Manufacturer's coefficient of variation", ["CV","Cv"],
 "How much emitters vary straight out of the factory.",
 `CV = standard deviation / mean of new emitter flows at constant pressure. Under 0.05 is good tape; over 0.10 is poor.`, ["eu"]);

E("sdi", "Subsurface drip irrigation", ["SDI"],
 "Drip tape buried below tillage depth and left in place for years.",
 `SDI places tape 12 to 18 in deep. UD tested 42 SDI zones at Warrington Farm with tape at 16 in. On sandy soil, upward wetting is weak, so germination and early growth may still need overhead water.

{{qs:adk-sdi16,adk-silver}}`, ["drip","tape"], true);

E("filter", "Drip filter", ["screen filter","disc filter","media filter","sand media filter"],
 "The strainer that cleans water before it goes into drip lines. Without it, emitters clog.",
 `Rule: filter to remove particles 1/4 to 1/10 of the emitter passage. Screen and disc filters are rated in mesh (120 to 200 mesh for tape). Sand media filters are best for pond water with algae. Clean or backflush when pressure loss across the filter rises 5 to 7 psi above clean.`, ["mesh","flush","drip"]);

E("mesh", "Mesh", ["mesh size"],
 "The number of openings per inch in a filter screen. Higher mesh means finer filtering.",
 `150 mesh is about 100 microns; 200 mesh about 75 microns.`, ["filter"]);

E("flush", "Line flushing", ["flushing"],
 "Opening the ends of drip lines to blow out sediment.",
 `Flush at the start of the season and every 2 to 4 weeks, at at least 1 ft/s in laterals, until the water runs clear.`, ["filter","chlorination"]);

E("chlorination", "Chlorination", ["chlorine injection"],
 "Adding chlorine to drip water to kill algae and bacteria slime that clog emitters.",
 `Continuous 1 to 2 ppm free chlorine at the end of the line, or a shock of 10 to 20 ppm. Chlorine is most effective at water pH under 7.`, ["acid","iron"]);

E("acid", "Acid injection", [],
 "Adding acid to drip water to dissolve lime scale and keep pH down.",
 `Used where water is hard or high in iron. Always add acid to water, never water to acid, and inject downstream of fertilizer to avoid reactions.`, ["chlorination","ph"]);

E("iron", "Iron bacteria and iron fouling", ["iron fouling","iron bacteria"],
 "Rusty orange slime from iron in well water that clogs drip lines and well screens.",
 `Common in Delmarva's shallow Columbia aquifer. Iron above 0.3 ppm can clog drip; above 1.5 ppm treatment (aeration and settling, or chlorination followed by filtration) is needed.`, ["filter","chlorination","columbia"]);

/* ---------- Chemigation ---------- */
E("chemigation", "Chemigation", [],
 "Putting fertilizer or crop protection products through the irrigation system.",
 `Chemigation requires backflow prevention on the water source: a check valve, vacuum relief valve, low-pressure drain and inspection port on the irrigation line, plus a check valve on the injection line and an interlock so injection stops if the irrigation pump stops. Pesticide labels must allow chemigation. Delaware Department of Agriculture (DDA) pesticide rules apply.

{{fig:chemigation}}`, ["fertigation","backflow","interlock"]);

E("fertigation", "Fertigation", [],
 "Feeding fertilizer through the irrigation water.",
 `Common on Delmarva: liquid urea ammonium nitrate (UAN) through pivots for corn sidedress, and through drip for vegetables. Example: 1,081 gal UAN over a 29-hour revolution needs about 37 gph injection and gives roughly 350 ppm N in the water.

{{calc:fert}}`, ["chemigation","uan","injector"]);

E("backflow", "Backflow prevention", ["chemigation valve","check valve"],
 "Valves that stop chemicals from flowing back down into the well.",
 `Required components: a spring-loaded chemigation check valve, a vacuum relief valve upstream of it, a low-pressure drain and an inspection port. For public water sources, a reduced pressure zone (RPZ) assembly or air gap is required.`, ["chemigation","interlock"]);

E("interlock", "Interlock", [],
 "A wiring link that shuts off the chemical pump if the water pump stops.",
 `Electrical interlock between the irrigation pump and the injection pump, plus a normally closed solenoid valve on the injection line. Test it every time before injecting.`, ["chemigation","backflow"]);

E("injector", "Injection pump", ["metering pump","venturi"],
 "The pump that pushes fertilizer into the irrigation line at a set rate.",
 `Positive displacement piston or diaphragm pumps are accurate. Venturi injectors use a pressure drop and are cheap but less precise. Calibrate with a graduated cylinder and stopwatch.`, ["fertigation"]);

E("uan", "Urea ammonium nitrate", ["UAN","UAN-30","UAN-32","30% UAN"],
 "A common liquid nitrogen fertilizer.",
 `UAN-30 weighs about 10.86 lb/gal with 3.26 lb N/gal. UAN-32 weighs 11.06 lb/gal with 3.54 lb N/gal. Half of the N is urea, a quarter ammonium and a quarter nitrate.`, ["fertigation","nitrate"]);
})(window.GLOSS);
