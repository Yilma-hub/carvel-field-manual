/* Glossary part 2: crops and growth stages, groundwater and regulation, agencies and funding, precision agriculture, economics, Extension practice. */
(function(G){
function E(k, t, a, s, f, r, cs){ G[k] = {t:t, a:a||[], s:s, f:f||"", r:r||[]}; if (cs) G[k].cs = true; }

/* ---------- Growth stages ---------- */
E("ve", "VE (emergence)", ["VE"],
 "The day the shoot first breaks through the soil.",
 `VE is emergence for corn and soybean. Corn needs about 100 to 120 growing degree days (GDD) from planting to VE. Water use is tiny (Kc about 0.3), mostly evaporation from bare soil. Irrigation at this stage is only for activating herbicide or helping a crusted seedbed.

{{fig:corn-veg}}`, ["vc","vstages","gdd"]);

E("vc", "VC (unifoliate or cotyledon stage)", ["VC"],
 "Soybean stage when the first pair of simple leaves has unrolled.",
 `VC (vegetative cotyledon) is the soybean stage when the unifoliate leaves are fully unrolled, before the first trifoliate. Hypocotyl and cotyledons are vulnerable to crusting and hail.

{{fig:soy-veg}}`, ["ve","vstages"]);

E("vstages", "V stages", ["V1","V2","V3","V4","V5","V6","V7","V8","V9","V10","V11","V12","V13","V14","V15","V16","V17","V18","vegetative stages","leaf collar method"],
 "Leaf-count stages before flowering. V6 in corn means six leaves with visible collars.",
 `Corn V stages use the leaf collar method: count leaves whose collar (the pale band where leaf blade meets the sheath) is visible. Lower leaves fall off after V6, so split a stalk and count nodes if needed.

Corn landmarks: V3 growing point still below ground; V6 growing point above ground, ear shoots and tassel start forming, rapid nitrogen uptake begins (sidedress window); V8 to V12 kernel rows per ear set; V12 to V18 kernels per row set, water stress now cuts ear size.

Soybean V stages count fully developed trifoliate nodes. V3 = three trifoliate nodes.

{{fig:corn-veg}}`, ["ve","vt","r1","gdd"]);

E("vt", "VT (tasseling)", ["VT","tasseling"],
 "Corn stage when the last branch of the tassel is fully visible, just before silks come out.",
 `VT happens 2 to 3 days before silking (R1). Corn is at peak water use (Kc about 1.2, often 0.30 in/day or more in Delaware). Hail or water stress here costs the most yield of any stage.

{{fig:corn-rep}}`, ["r1","ky","vstages"]);

E("r1", "R1 (silking or beginning bloom)", ["R1","silking","beginning bloom"],
 "Corn: silks are showing. Soybean: one open flower anywhere on the main stem.",
 `Corn R1 (silking): silks visible outside the husk. Pollination happens over the next week; each silk must catch pollen to make a kernel. Drought at R1 dries silks and delays silking so they miss pollen shed; FAO-33 gives corn a yield response factor (Ky) of 1.5 during flowering, the highest of any stage.

Soybean R1 (beginning bloom): one open flower at any node on the main stem.

{{fig:corn-rep}}`, ["vt","r2","ky"]);

E("r2", "R2 (blister or full bloom)", ["R2","blister","full bloom"],
 "Corn: kernels look like small water blisters. Soybean: open flowers at one of the top two nodes.",
 `Corn R2 (blister), about 10 to 14 days after silking: kernels white and filled with clear fluid. Water stress now causes kernel abortion at the ear tip.

Soybean R2 (full bloom): open flower at one of the two uppermost main stem nodes with a fully developed leaf.`, ["r1","r3"]);

E("r3", "R3 (milk or beginning pod)", ["R3","milk stage","beginning pod"],
 "Corn: kernels have milky white fluid. Soybean: a 3/16-inch pod on one of the top four nodes.",
 `Corn R3 (milk), about 18 to 22 days after silking: kernels yellow outside with milky fluid inside. Stress cuts kernel weight.

Soybean R3 (beginning pod): pod 3/16 in long at one of the four uppermost nodes. Soybeans are most sensitive to water stress from R3 to R5; this is where irrigation pays most.

{{fig:soy-rep}}

{{q:adk-soy}}`, ["r4","r5","ky"]);

E("r4", "R4 (dough or full pod)", ["R4","dough stage","full pod"],
 "Corn: kernel insides are pasty. Soybean: a 3/4-inch pod at one of the top four nodes.",
 `Corn R4 (dough), about 24 to 28 days after silking. Soybean R4 (full pod): pod 3/4 in long at one of the four uppermost nodes, the most critical period for pod number.`, ["r3","r5"]);

E("r5", "R5 (dent or beginning seed)", ["R5","dent","beginning seed"],
 "Corn: kernels dented on top. Soybean: seeds starting to fill pods.",
 `Corn R5 (dent), about 35 to 42 days after silking. A milk line moves down the kernel; at half milk line the crop needs about 2.5 more inches of water. Soybean R5 (beginning seed): seed 1/8 in long in a pod at one of the four uppermost nodes. Irrigation through R6 protects seed size.`, ["r4","r6","milkline"]);

E("r6", "R6 (physiological maturity or full seed)", ["R6","black layer","full seed","physiological maturity"],
 "Corn: black layer forms and grain is done filling. Soybean: green seeds fill the pod cavity.",
 `Corn R6: black layer forms at the kernel base, grain is at maximum dry weight, about 30 to 35 percent moisture. No more irrigation is needed. Soybean R6 (full seed): pod with green seed filling the cavity at one of the four uppermost nodes. Soybean needs water to about R6.5.`, ["r5","r7"]);

E("r7", "R7 (beginning maturity)", ["R7"],
 "Soybean: one pod on the main stem has its mature color.",
 `Soybean R7: one normal pod on the main stem has reached mature pod color. Stop irrigating; seeds are near physiological maturity.`, ["r6","r8"]);

E("r8", "R8 (full maturity)", ["R8"],
 "Soybean: 95 percent of pods have their mature color. Harvest in about 5 to 10 drying days.",
 `R8 marks full maturity. Harvest moisture of 13 percent usually follows in 5 to 10 good drying days.`, ["r7"]);

E("milkline", "Milk line", [],
 "The line on a corn kernel between the hard starch on top and the milky part below. It moves down as the grain fills.",
 `Used to time the last irrigation and silage harvest. Half milk line is roughly 2.5 in of crop water use before black layer; three-quarter milk line about 1 in.`, ["r5","r6"]);

E("feekes", "Feekes scale", ["Feekes"],
 "A numbered scale for wheat and barley growth stages, from 1 (emergence) to 11 (ripening).",
 `Feekes 1 emergence; 2 to 3 tillering; 4 to 5 greenup and erect leaf sheaths; 6 first node detectable (jointing); 7 second node; 8 flag leaf visible; 9 flag leaf collar visible; 10 boot; 10.1 heads emerging; 10.5 heading complete; 10.5.1 beginning flowering (time for head scab fungicide); 11.1 milk; 11.2 soft dough; 11.3 hard kernel; 11.4 harvest ready.

{{fig:wheat}}`, ["zadoks","jointing"]);

E("zadoks", "Zadoks scale", ["Zadoks","Zadoks stages"],
 "A two-digit cereal growth scale used in research, such as Z31 for first node.",
 `Zadoks codes run 00 to 99: 10s seedling growth, 20s tillering, 30s stem elongation (Z30 is about Feekes 5, Z31 is Feekes 6), 40s boot, 50s heading, 60s flowering, 70s milk, 80s dough, 90s ripening.`, ["feekes"]);

E("jointing", "Jointing", [],
 "When the wheat stem starts to grow tall and the first node can be felt above the soil.",
 `Feekes 6 (Zadoks 31). The growing point is now above ground, so freeze or herbicide injury risk rises. Last practical timing for spring nitrogen on wheat in Delaware.`, ["feekes"]);

E("doublecrop", "Double-crop soybean", ["double-crop","double crop"],
 "Soybeans planted right after wheat or barley harvest in June, so one field makes two crops in a year.",
 `Common on Delmarva. Planted late June to early July into dry stubble, they face peak ET at flowering in August. Irrigation response is strong because the season is short and the crop has little time to recover from stress.`, ["r3","feekes"]);

E("lima", "Lima bean", ["baby lima","Fordhook"],
 "Delaware's biggest vegetable crop by acreage, grown mostly for freezing and canning.",
 `Delaware grows green baby limas and Fordhook types for processors. Lima beans are very sensitive to heat during early flowering: night temperatures above about 70 F cause blossom and pod drop. Irrigation that keeps plants turgid during bloom helps, and UD has studied irrigated lima yield and quality at Carvel.

{{fig:lima}}

{{q:ernest-anchor}}`, ["heatstress","processing"]);

E("snapbean", "Snap bean", ["green bean"],
 "A bean picked young for the pod. Grown for processing and fresh market on Delmarva.",
 `About 50 to 60 days from planting to harvest. Most sensitive to water stress from bloom to pod fill. Kc mid about 1.05. Heat at bloom causes split sets and misshapen pods.

{{fig:snapbean}}`, ["lima","heatstress"]);

E("watermelon", "Watermelon", ["seedless watermelon","triploid"],
 "A major Delmarva cash crop grown on plastic mulch with drip.",
 `Most Delaware watermelons are triploid seedless types that need a seeded pollinizer variety in the field (often every third row). Grown on raised beds with black or white plastic and drip tape. Harvest mid-July into October. Water stress at fruit set and early sizing cuts yield; uneven water late causes hollow heart and cracking.

{{fig:melon}}

{{q:collins-place}}`, ["drip","pollinizer","graft","fusarium"]);

E("pollinizer", "Pollinizer", [],
 "A seeded watermelon variety planted among seedless ones so bees can carry its pollen to them.",
 `Triploid seedless plants make little viable pollen. Plant pollinizers at 25 to 33 percent of plants and keep bees in the field during bloom.`, ["watermelon"]);

E("graft", "Grafted transplant", ["grafting","rootstock"],
 "A seedling where the top of one plant is joined onto the roots of another tougher plant.",
 `Watermelon grafted onto squash hybrid or wild citron rootstock resists Fusarium wilt. Costs several times more per plant than an ungrafted transplant.

{{q:collins-graft}}`, ["fusarium","watermelon"]);

E("fusarium", "Fusarium wilt", [],
 "A soil fungus that plugs the plant's water pipes and makes vines wilt and die.",
 `Fusarium oxysporum f. sp. niveum attacks watermelon. It survives in soil for years, so rotation of 5 or more years, resistant varieties and grafting are the main tools.

{{q:collins-fusarium}}`, ["graft","watermelon"]);

E("heatstress", "Heat stress", ["high night temperature"],
 "Damage from too much heat, especially hot nights, that makes flowers and young pods fall off.",
 `Heat during flowering hurts pollen viability. Lima beans lose pods when nights stay above about 70 F. Irrigation cools the canopy slightly and keeps stomata open, but cannot fix hot nights. Tolerant varieties are the main fix.

{{qs:ernest-present,ernest-flower}}`, ["lima","snapbean","vpd"]);

E("processing", "Processing vegetables", ["processing crops"],
 "Vegetables grown under contract for canning and freezing plants.",
 `Lima beans, snap beans, sweet corn, peas and pickling cucumbers grown on contract with processors on Delmarva. The processor often sets planting dates and variety, so irrigation timing must fit a fixed harvest window.`, ["lima","snapbean"]);

E("lodging", "Lodging", [],
 "When a crop falls over before harvest.",
 `Too much water and nitrogen early can make soybeans tall and prone to lodging. Lodged crops lose yield and slow harvest.

{{q:adk-soy}}`, ["r3"]);

E("ky", "Yield response factor", ["Ky"],
 "How hard yield drops when the crop is short of water. Above 1 means yield falls faster than water use.",
 `From FAO-33 (Doorenbos and Kassam): 1 - Ya/Ym = Ky x (1 - ETa/ETm). Corn Ky: vegetative 0.4, flowering 1.5, yield formation 0.5, ripening 0.2, whole season 1.25. Soybean: vegetative 0.2, flowering 0.8, yield formation 1.0, whole season 0.85. Wheat whole season 1.0. Beans whole season 1.15.

{{fig:ky}}

{{calc:inchvalue}}`, ["ks","r1","r3"]);

/* ---------- Groundwater and regulation ---------- */
E("columbia", "Columbia aquifer", ["surficial aquifer","water table aquifer"],
 "The shallow sandy aquifer right under most Delmarva farms. It refills from rain each winter.",
 `The unconfined Columbia aquifer (Pleistocene sands and gravels) supplies most irrigation wells in Sussex and southern Kent counties. It recharges quickly but is vulnerable to nitrate from the surface and, near the coast, to saltwater intrusion.

{{fig:aquifers}}

{{q:lyon-neighbors}}`, ["unconfined","nitrate","swi"]);

E("unconfined", "Unconfined aquifer", ["water table"],
 "An aquifer with no clay lid, so rain soaks straight into it.",
 `The water table is its top. Fast recharge but also fast contamination.`, ["columbia","confined"]);

E("confined", "Confined aquifer", ["artesian aquifer"],
 "An aquifer trapped under a clay layer. It is slower to refill but better protected.",
 `Delmarva confined aquifers include the Pocomoke, Manokin, Piney Point, Cheswold and Frederica in Delaware and the Aquia and Patapsco in Maryland. Heavy pumping lowers their potentiometric surface over wide areas.`, ["pocomoke","manokin","aquia","potentiometric"]);

E("pocomoke", "Pocomoke aquifer", ["Pocomoke"],
 "A confined sand aquifer under southern Sussex County and the Maryland Lower Shore.",
 `Used for public supply and irrigation where the Columbia is thin or salty. Part of the stacked aquifer system mapped by the Delaware Geological Survey (DGS).`, ["confined","manokin"]);

E("manokin", "Manokin aquifer", ["Manokin"],
 "A deeper confined aquifer under southern Delaware and the Maryland Lower Shore.",
 `Lies below the Pocomoke. Used for municipal and some agricultural wells.`, ["confined","pocomoke"]);

E("aquia", "Aquia aquifer", ["Aquia"],
 "A major confined aquifer on Maryland's Eastern Shore and in southern Maryland where water levels have dropped for decades.",
 `Maryland Geological Survey and U.S. Geological Survey potentiometric maps show long-term declines in the Aquia near pumping centers. Maryland Department of the Environment (MDE) manages withdrawals through appropriation permits.

{{q:smadc-warning}}`, ["confined","potentiometric","permit-md"]);

E("potentiometric", "Potentiometric surface", [],
 "The level water would rise to in wells tapping a confined aquifer. Maps of it show where pumping is drawing water down.",
 `Mapped by DGS, MGS and USGS. A falling potentiometric surface means withdrawals exceed recharge in that aquifer.`, ["confined","drawdown"]);

E("cone", "Cone of depression", [],
 "The funnel-shaped dip in the water level around a pumping well.",
 `Overlapping cones from neighboring irrigation wells can lower water in shallow domestic wells during dry summers. Use the Cooper-Jacob calculator to estimate.`, ["cooper-jacob","drawdown"]);

E("recharge", "Groundwater recharge", ["recharge"],
 "Rain and snowmelt that soak down and refill the aquifer.",
 `Most Delmarva recharge happens November to April when ET is low. Typical recharge to the Columbia aquifer is 10 to 15 in per year.

{{q:adk-recharge}}`, ["columbia","dp"]);

E("swi", "Saltwater intrusion", ["salt water intrusion","saltwater encroachment"],
 "Seawater moving into fresh groundwater or onto farm fields as sea level rises and storms push tides inland.",
 `Two forms on Delmarva: (1) salt in the soil from tidal flooding of low fields, producing salt patches and ghost forests; (2) salt moving into coastal aquifers when pumping lowers fresh water pressure. Satellite mapping found about 9,700 acres of Maryland farmland and 2,200 acres in Virginia lost to salt patches and marsh by 2017.

{{fig:salinity}}

{{qs:mcq-wells,neild-salted}}`, ["salinity","salt-patch","ecw"]);

E("salt-patch", "Salt patch", ["salt patches","ghost forest"],
 "A bare or white-crusted spot in a field where salt has built up and crops won't grow.",
 `Salt patches expand inland from ditches and low edges. Options: salt-tolerant crops (barley, sorghum), switchgrass, conservation easements, or managed conversion to marsh.

{{q:fitz-lose}}`, ["swi","salinity"]);

E("nitrate", "Nitrate", ["NO3","NO3-N","nitrate-nitrogen"],
 "The form of nitrogen that dissolves easily and moves with water down to groundwater.",
 `Drinking water standard: 10 mg/L (ppm) nitrate-nitrogen. Many shallow wells in Sussex County exceed it. Because of slow groundwater movement, nitrate leached today can take decades to reach streams and the bays.

{{q:dipasquale-lag}}`, ["leaching","lag","psnt"]);

E("lag", "Groundwater lag time", ["lag time"],
 "The delay between a change on the land and the water quality change in streams, often decades on Delmarva.",
 `Groundwater on the Eastern Shore can take 20 to 40 years or more to reach streams. Conservation practices installed now may take a long time to show up in bay water quality.`, ["nitrate","tmdl"]);

E("tmdl", "Total maximum daily load", ["TMDL","Chesapeake Bay TMDL"],
 "A legal cap on how much nitrogen, phosphorus and sediment a waterbody can receive.",
 `The 2010 Chesapeake Bay TMDL set limits for each state; Delaware's Bay drainage is the Nanticoke, Chester and Choptank headwaters. Delaware also has TMDLs for the Inland Bays. States meet them through Watershed Implementation Plans (WIPs).`, ["wip","nitrate"]);

E("wip", "Watershed Implementation Plan", ["WIP","Phase III WIP"],
 "A state's plan for how it will meet its nutrient pollution limits.",
 `Delaware's Phase III WIP counts agricultural practices such as cover crops, nutrient management, irrigation water management and manure relocation toward the Bay TMDL.`, ["tmdl"]);

E("permit-de", "Delaware water allocation permit", ["water allocation permit","DNREC allocation"],
 "The state permit a Delaware farm needs to pump more than 50,000 gallons on any day.",
 `Issued by the Delaware Department of Natural Resources and Environmental Control (DNREC) Water Supply Section for withdrawals over 50,000 gallons per day. Requires annual water use reporting. A pivot pumping 750 gpm for 24 hours uses 1.08 million gallons, so almost every irrigation well needs one.

{{calc:permit}}`, ["dnrec","permit-md","flowmeter"]);

E("permit-md", "Maryland water appropriation permit", ["water appropriation and use permit","MDE permit"],
 "The Maryland permit needed to withdraw more than an average of 10,000 gallons a day.",
 `Issued by the Maryland Department of the Environment (MDE) Water Supply Program. Applies to withdrawals averaging over 10,000 gallons per day on an annual basis. Agricultural permit holders report use.`, ["mde","permit-de"]);

E("psnt", "Pre-sidedress nitrate test", ["PSNT"],
 "A soil test at about V4 to V6 corn that shows if more nitrogen is needed.",
 `Sample 0 to 12 in when corn is 6 to 12 in tall. Above about 21 ppm nitrate-N, little or no sidedress N is needed on most Delaware fields, especially where manure or poultry litter was applied.`, ["nitrate","vstages"]);

E("4r", "4R nutrient stewardship", ["4R","4Rs"],
 "Right source, right rate, right time, right place for fertilizer.",
 `A framework promoted by fertilizer industry and conservation groups. Fertigation through pivots fits right time (split applications near crop uptake) and right rate.`, ["fertigation","nmp"]);

E("nmp", "Nutrient management plan", ["NMP","nutrient management"],
 "A written plan for how much fertilizer and manure a farm will apply to each field.",
 `Required in Delaware under the 1999 Nutrient Management Law for operations over 10 acres or 8 animal units. Written by a certified nutrient consultant. NRCS practice 590 (Nutrient Management) sets the technical standard.`, ["dnmc","cps590","litter"]);

E("dnmc", "Delaware Nutrient Management Commission", ["DNMC","Nutrient Management Commission"],
 "The state board that runs Delaware's nutrient management law and certifications.",
 `Created by the 1999 Delaware Nutrient Management Law and staffed by the Delaware Department of Agriculture (DDA). Certifies nutrient consultants and handlers, runs the manure relocation program and gives continuing education credits.

{{q:walls-care}}`, ["nmp","dda"]);

E("pmt", "Phosphorus Management Tool", ["PMT"],
 "Maryland's rule limiting manure and phosphorus on high-phosphorus fields.",
 `Phased in from 2015 to 2022 by the Maryland Department of Agriculture (MDA). Covers roughly 228,000 acres on 1,661 farms at full phase-in, mostly on the Lower Shore where poultry litter was long the main fertilizer.

{{q:shockley-pmt}}`, ["litter","mda"]);

E("litter", "Poultry litter", ["chicken litter","broiler litter"],
 "Chicken manure mixed with the wood shavings bedding. A cheap fertilizer and a big phosphorus source on Delmarva.",
 `Typical broiler litter: about 55 to 65 lb N, 55 to 65 lb P2O5 and 40 to 50 lb K2O per ton as-is, but test each source. Calibrate spreaders with the tarp method.

{{calc:litter}}`, ["pmt","nmp"]);

E("cover", "Cover crop", ["cover crops"],
 "A crop like rye or barley planted in fall to hold soil and soak up leftover nitrogen.",
 `Delaware and Maryland pay cost-share for cover crops. Early-planted cereal rye can take up 30 to 60 lb N/ac before winter, cutting nitrate leaching from irrigated fields.`, ["nitrate","cps340"]);

/* ---------- Agencies ---------- */
E("ud", "University of Delaware", ["UD"],
 "Delaware's land-grant university, home of Cooperative Extension and the Carvel Center.",
 `UD's College of Agriculture and Natural Resources (CANR) runs UD Cooperative Extension jointly with Delaware State University (DSU).

{{q:chahine-campus}}`, ["canr","carvel","dsu"]);

E("canr", "College of Agriculture and Natural Resources", ["CANR"],
 "The UD college that houses agriculture teaching, research and Extension.",
 `Departments include Plant and Soil Sciences (PLSC), Animal and Food Sciences, Applied Economics and Statistics, and Entomology and Wildlife Ecology.`, ["ud"]);

E("carvel", "Carvel Research and Education Center", ["Carvel REC","Carvel Center","Carvel"],
 "UD's 347-acre agricultural research station in Georgetown, Sussex County.",
 `Named for Governor Elbert N. Carvel and Ann V. Carvel. Includes the Thurman Adams Jr. Research Farm, Warrington Farm near Milton and the Lasher Laboratory (poultry diagnostics). Hosts the annual summer field and crop tour each August (about 200 people in 2026).

{{q:isaacs-equipped}}`, ["warrington","ud"]);

E("warrington", "Warrington Farm", ["Warrington Irrigation Research Farm"],
 "UD's irrigation research farm south of Milton, with a variable rate pivot and buried drip zones.",
 `Near Harbeson, south of Milton; given to UD by Everett Warrington in 1992. About 300 plots of 60 by 60 ft in five soil tiers, a variable rate pivot built in 2001 and upgraded in 2012 and 2016, and 42 subsurface drip zones of about a quarter acre each, fed by a VFD pump up to 475 gpm.

{{q:adk-tiers}}`, ["carvel","vri","sdi"]);

E("dsu", "Delaware State University", ["DSU"],
 "Delaware's 1890 land-grant university, partner in Cooperative Extension.",
 `DSU runs its own Extension programs with emphasis on small and underserved farmers. Joint programming with UD is common.`, ["ud","nifa"]);

E("umd", "University of Maryland Extension", ["UME","UMD Extension"],
 "Maryland's land-grant Extension service. Runs the Wye and Lower Eastern Shore research centers.",
 `Key partners for Delmarva irrigation: the precision agriculture specialist (Hemendra Kumar) and agriculture agents on the Eastern Shore. Joint events include Lower Shore Agronomy Day and the MidAtlantic Precision Ag Equipment Day.

{{q:kumar-essential}}`, ["umes","wye","lesrec"]);

E("umes", "University of Maryland Eastern Shore", ["UMES"],
 "Maryland's 1890 land-grant university in Princess Anne.",
 `Active in salt-tolerant crops, small farm outreach and drone work.`, ["umd"]);

E("wye", "Wye Research and Education Center", ["Wye REC"],
 "University of Maryland research farm in Queenstown.",
 `Hosts field days, precision agriculture events and grain trials.`, ["umd"]);

E("lesrec", "Lower Eastern Shore Research and Education Center", ["LESREC"],
 "University of Maryland research farm near Salisbury.",
 `Vegetable, irrigation and agronomic trials for the Lower Shore.`, ["umd"]);

E("usda", "U.S. Department of Agriculture", ["USDA"],
 "The federal farm department. Its agencies fund, regulate and help farmers.",
 `Agencies most relevant here: NRCS, FSA, RMA, NASS, ARS and NIFA.`, ["nrcs","fsa","nifa","nass"]);

E("nrcs", "Natural Resources Conservation Service", ["NRCS"],
 "The USDA agency that pays farmers to install conservation practices and gives free technical help.",
 `NRCS delivers EQIP, CSP, RCPP and Conservation Technical Assistance. Its practice standards (442 sprinkler, 441 microirrigation, 449 irrigation water management, 430 pipeline, 533 pumping plant) set what qualifies. Delaware NRCS works through field offices co-located with conservation districts in Georgetown, Dover and Newark.`, ["eqip","csp","cps449","cps442"]);

E("fsa", "Farm Service Agency", ["FSA"],
 "USDA agency that runs farm loans, disaster payments and commodity programs.",
 `FSA offers operating and ownership loans, Emergency Loans after disaster declarations, and the Noninsured Crop Disaster Assistance Program (NAP). Farm records at FSA list irrigated acres by field.`, ["usda","rma"]);

E("rma", "Risk Management Agency", ["RMA"],
 "USDA agency that runs federal crop insurance.",
 `Irrigated practice crop insurance requires adequate water supply and good irrigation practices. Actual production history (APH) yields are tracked separately for irrigated and nonirrigated acres.

{{q:raley-insurance}}`, ["fsa","aph"]);

E("aph", "Actual production history", ["APH"],
 "A farm's yield record that sets its crop insurance guarantee.",
 `APH is the average of 4 to 10 years of yields. Irrigated and dryland practices have separate APH.`, ["rma"]);

E("nass", "National Agricultural Statistics Service", ["NASS"],
 "USDA agency that runs the Census of Agriculture and crop surveys.",
 `The 2022 Census of Agriculture county profiles give irrigated acres, farm numbers and sales for Kent, New Castle and Sussex counties.

{{fig:county}}`, ["usda"]);

E("ars", "Agricultural Research Service", ["ARS"],
 "USDA's in-house research agency.",
 `Relevant labs include the Hydrology and Remote Sensing Lab in Beltsville, Maryland, which leads evapotranspiration remote sensing work.`, ["usda"]);

E("nifa", "National Institute of Food and Agriculture", ["NIFA"],
 "The USDA agency that funds university research, education and Extension grants.",
 `Runs AFRI, SCRI, SARE, Smith-Lever capacity funds and Hatch funds. Competitive programs have firm deadlines and require a logic model and evaluation plan.`, ["afri","scri","sare"]);

E("afri", "Agriculture and Food Research Initiative", ["AFRI"],
 "NIFA's main competitive research grant program.",
 `Program areas include Water Quantity and Quality and Agricultural Engineering. Typical standard grants run $300,000 to $750,000 over 3 to 5 years. Seed grants exist for early-career faculty.`, ["nifa"]);

E("scri", "Specialty Crop Research Initiative", ["SCRI"],
 "NIFA grants for fruit and vegetable research, usually multi-state teams.",
 `Requires stakeholder relevance review and a 100 percent non-federal match for many awards. UD took part in a $3.3 million SCRI lima bean project led by UC Davis.`, ["nifa","scbg"]);

E("scbg", "Specialty Crop Block Grant", ["SCBG","SCBGP"],
 "Federal money passed through the state agriculture department for fruit and vegetable projects.",
 `In Delaware it is run by the Delaware Department of Agriculture (DDA), usually with a call in early spring. Projects must benefit specialty crops (watermelon, lima bean, vegetables), not field corn or soybean.`, ["dda","scri"]);

E("sare", "Sustainable Agriculture Research and Education", ["SARE","Northeast SARE","NE-SARE"],
 "A USDA grant program with grants for farmers, researchers and Extension educators.",
 `Northeast SARE covers Delaware and Maryland. Grant types: Farmer Grants (up to about $30,000), Partnership Grants for service providers working with farmers, Research and Education Grants, and Professional Development Grants.`, ["nifa"]);

E("eqip", "Environmental Quality Incentives Program", ["EQIP"],
 "NRCS program that pays part of the cost of conservation practices.",
 `Irrigation practices commonly funded: 442 sprinkler upgrades (low-pressure nozzle packages, VRI), 441 drip, 449 irrigation water management, 533 pumping plant (VFDs, motor conversions). Payment rates are set yearly by state; contracts usually run 1 to 5 years.`, ["nrcs","csp","cps449"]);

E("csp", "Conservation Stewardship Program", ["CSP"],
 "NRCS program that pays farmers who already do good conservation to do even more.",
 `CSP enhancements for irrigation include soil moisture monitoring, irrigation scheduling with ET data and nozzle upgrades.`, ["nrcs","eqip"]);

E("cig", "Conservation Innovation Grants", ["CIG"],
 "NRCS grants to test new conservation approaches on working farms.",
 `CIG requires a 1:1 non-federal match. State-level CIG competitions are run by NRCS state offices when funded. Good fit for on-farm VRI or sensor scheduling demonstrations.`, ["nrcs"]);

E("rcpp", "Regional Conservation Partnership Program", ["RCPP"],
 "NRCS program where partners bring money and NRCS matches it in a target area.",
 `Partners such as conservation districts or water utilities lead. Useful for watershed-scale irrigation efficiency or nitrate reduction projects.`, ["nrcs"]);

E("cta", "Conservation Technical Assistance", ["CTA"],
 "Free NRCS planning help, with no payment attached.",
 ``, ["nrcs"]);

E("cps442", "NRCS Practice 442 Sprinkler System", ["CPS 442","Code 442","practice 442"],
 "The NRCS standard for designing and installing sprinkler and pivot systems.",
 `Sets minimum uniformity, application rates within soil intake limits, and requirements for chemigation safety where used.`, ["nrcs","cps449"]);

E("cps441", "NRCS Practice 441 Microirrigation", ["CPS 441","Code 441","practice 441"],
 "The NRCS standard for drip and micro-sprinkler systems.",
 `Requires filtration, flushing, backflow protection and minimum emission uniformity.`, ["drip","nrcs"]);

E("cps449", "NRCS Practice 449 Irrigation Water Management", ["CPS 449","Code 449","practice 449","IWM","irrigation water management"],
 "The NRCS standard for deciding when and how much to irrigate, with records.",
 `Irrigation water management (IWM) requires the farmer to determine and control the rate, amount and timing of irrigation. Plans list crop, soils, AWC, MAD, system capacity, and a scheduling method (sensors, checkbook, ET). Annual records of dates, amounts and rainfall are expected.`, ["mad","dims","nrcs"]);

E("cps430", "NRCS Practice 430 Irrigation Pipeline", ["CPS 430","Code 430","practice 430"],
 "The NRCS standard for buried water lines that feed irrigation systems.",
 `Sets pipe pressure ratings, velocity limits (5 ft/s), thrust blocks and air and vacuum relief.`, ["velocity","nrcs"]);

E("cps533", "NRCS Practice 533 Pumping Plant", ["CPS 533","Code 533","practice 533"],
 "The NRCS standard for pumps, motors and drives, including VFDs.",
 `Used to cost-share pump replacement, diesel-to-electric conversion and variable frequency drives.`, ["vfd","nppc","nrcs"]);

E("e449i", "CSP enhancement E449I (VRI speed control)", ["E449I"],
 "An NRCS Conservation Stewardship Program payment for adding variable rate speed control to an existing pivot.",
 `Requires the pivot to already meet CPS 442 uniformity and efficiency and to have an irrigation water management plan under 449. That makes a passing uniformity test the gate to VRI money.`, ["vri","csp","cps442","cps449"]);

E("cps590", "NRCS Practice 590 Nutrient Management", ["CPS 590","Code 590","practice 590"],
 "The NRCS standard for nutrient management plans.",
 ``, ["nmp"]);

E("cps340", "NRCS Practice 340 Cover Crop", ["CPS 340","Code 340","practice 340"],
 "The NRCS standard for cover crops.",
 ``, ["cover"]);

E("fotg", "Field Office Technical Guide", ["FOTG"],
 "NRCS's official library of practice standards and specs for each state.",
 `Always check the Delaware FOTG version of a standard; states add their own criteria.`, ["nrcs"]);

E("cd", "Conservation district", ["Sussex Conservation District","Kent Conservation District","SCD","KCD"],
 "Local county agency that works with NRCS and farmers on conservation.",
 `In Delaware, each county has a conservation district that delivers state cost-share (for example cover crops) and helps with NRCS applications.`, ["nrcs"]);

E("dda", "Delaware Department of Agriculture", ["DDA"],
 "The state agriculture department in Dover.",
 `Runs nutrient management, pesticide licensing, the Specialty Crop Block Grant, Delaware Agricultural Lands Preservation and the Ag Week partnership.`, ["dnmc","scbg"]);

E("mda", "Maryland Department of Agriculture", ["MDA"],
 "Maryland's state agriculture department.",
 `Runs Maryland nutrient management and the Phosphorus Management Tool.`, ["pmt"]);

E("dnrec", "Delaware Department of Natural Resources and Environmental Control", ["DNREC"],
 "Delaware's environmental agency. Issues water allocation and well permits.",
 `Water Supply Section issues allocation permits over 50,000 gpd; Division of Water also handles well construction permits and TMDLs.`, ["permit-de","tmdl"]);

E("mde", "Maryland Department of the Environment", ["MDE"],
 "Maryland's environmental agency. Issues water appropriation permits.",
 ``, ["permit-md"]);

E("dgs", "Delaware Geological Survey", ["DGS"],
 "The state geology agency at UD that maps aquifers and monitors groundwater.",
 `Runs the groundwater monitoring network and publishes aquifer maps. A key partner for any irrigation well and salinity question.

{{q:mcq-front}}`, ["deos","swi"]);

E("usgs", "U.S. Geological Survey", ["USGS"],
 "Federal science agency for water, maps and geology.",
 `Operates streamgages and groundwater wells, mapped Delmarva center pivots (Data Series 932) and studies nitrate transport. Funds state water institutes through Section 104(b) and national competitive grants through 104(g).`, ["dwrc","usgs104"]);

E("usgs104", "USGS Water Resources Research Act grants", ["104(b)","104(g)","Section 104"],
 "Federal grants for water research run through each state's water institute.",
 `104(b) base grants go through the state institute (in Delaware, the Delaware Water Resources Center at UD) for small faculty and student projects. 104(g) is a national competition. Both need a 2:1 or 1:1 non-federal match.`, ["dwrc","usgs"]);

E("dwrc", "Delaware Water Resources Center", ["DWRC"],
 "UD's federally authorized water research institute.",
 `Funds graduate fellowships and small seed grants through USGS 104(b).`, ["usgs104"]);

E("deos", "Delaware Environmental Observing System", ["DEOS"],
 "UD's network of weather stations across Delaware, with live data online.",
 `More than 40 stations, running since 2004, report temperature, rain, solar radiation, wind and calculated reference ET. Run by UD's Center for Environmental Monitoring and Analysis with the Delaware State Climate Office (State Climatologist Kevin Brinson).`, ["dims","eto"]);

E("dims", "DEOS Irrigation Management System", ["DIMS"],
 "A free UD web tool that tracks soil water for your field using weather station data and tells you when to irrigate.",
 `Free since 2011, first funded by NRCS and DNREC. Crops: corn, soybean, cantaloupe, sweet peas, lima beans, watermelon, sweet corn, cucumber and tomato. Growers register fields with crop, emergence date and location; DIMS runs a daily water balance using DEOS ET and rainfall and shows projected depletion. Extension promotes it as the low-cost scheduling option that meets NRCS 449 recordkeeping.`, ["deos","water-balance","cps449"]);

E("defb", "Delaware Farm Bureau", ["DEFB"],
 "The statewide farm organization that speaks for Delaware farmers.",
 `{{q:dclifton-road}}`, ["dda"]);

E("mfb", "Maryland Farm Bureau", ["MFB"],
 "Maryland's statewide farm organization.",
 `{{q:raley-discrim}}`, ["defb"]);

E("cib", "Center for the Inland Bays", ["CIB"],
 "A nonprofit estuary program that works to clean up Rehoboth, Indian River and Little Assawoman bays.",
 `Partner on nitrogen reduction in the Inland Bays watershed, which includes intensively irrigated Sussex cropland.`, ["tmdl","nitrate"]);

E("cca", "Certified Crop Adviser", ["CCA"],
 "A professional certification for crop consultants, with continuing education credits required.",
 `CCAs need 40 continuing education units (CEUs) every 2 years including soil and water management credits. Irrigation workshops can earn CEUs, which boosts attendance.`, ["ceu"]);

E("ceu", "Continuing education unit", ["CEU","CEUs","continuing education credits"],
 "Credits professionals need each year to keep a license or certification.",
 `Delaware nutrient management, pesticide and CCA credits are a major reason farmers and consultants attend winter meetings and field days. Apply for credits 4 to 6 weeks before an event.`, ["cca"]);

E("agweek", "Delaware Ag Week", ["Ag Week"],
 "Delaware's big winter farm meeting week at the Delaware State Fairgrounds in Harrington, every January.",
 `Run by UD, DSU and DDA. Sessions by commodity (grain, vegetables, irrigation, poultry) with continuing education credits. The irrigation session is the place to present test results and new research to growers.`, ["ceu"]);

E("wcu", "Weekly Crop Update", ["WCU"],
 "UD Extension's weekly email newsletter for farmers during the growing season.",
 `Short articles from specialists on pests, crop conditions and timely advice. Good place for irrigation scheduling reminders tied to current ET.`, ["ud"]);

/* ---------- Extension practice ---------- */
E("landgrant", "Land-grant university", ["land grant"],
 "A university funded by the 1862 and 1890 Morrill Acts to teach practical agriculture and engineering.",
 `UD (1862) and DSU (1890) are Delaware's land-grant universities. The Hatch Act (1887) added research stations and the Smith-Lever Act (1914) added Cooperative Extension.`, ["smithlever","ud","dsu"]);

E("smithlever", "Smith-Lever Act", ["Smith-Lever"],
 "The 1914 federal law that created Cooperative Extension.",
 ``, ["landgrant"]);

E("pears", "Program Evaluation and Reporting System", ["PEARS"],
 "The online system UD Extension staff use to log programs, contacts and outcomes.",
 `Record every workshop, field visit and consultation: date, audience numbers, demographics, outcomes. These records feed federal reports and your annual review.`, ["logicmodel"]);

E("logicmodel", "Logic model", [],
 "A one-page chart linking what you put in, what you do, who you reach and what changes as a result.",
 `Inputs, activities, outputs, short-term outcomes (knowledge), medium-term outcomes (practice change, for example adopting sensor scheduling) and long-term outcomes (water saved, profit, nitrate reduced). Most NIFA and SARE proposals require one.

{{fig:logic}}`, ["pears"]);

E("irb", "Institutional Review Board", ["IRB"],
 "The university committee that approves research involving people, including surveys of farmers.",
 `Submit grower surveys and interview protocols before collecting data you plan to publish. Exempt review usually takes 2 to 4 weeks at UD.`, ["pears"]);

/* ---------- Precision agriculture ---------- */
E("gps", "Global Positioning System", ["GPS","GNSS"],
 "Satellite positioning that tells equipment where it is in the field.",
 `GNSS (global navigation satellite system) is the general term including GPS, GLONASS, Galileo and BeiDou. Stand-alone accuracy is a few meters; RTK correction gets to about an inch.`, ["rtk"]);

E("rtk", "Real-time kinematic correction", ["RTK"],
 "A correction signal that makes GPS accurate to about an inch.",
 `RTK uses a base station or network. Needed for auto-steer, drip tape placement and repeatable research plots.`, ["gps"]);

E("uav", "Uncrewed aerial vehicle", ["UAV","UAS","drone","drones"],
 "A drone. Used to take crop pictures from the air.",
 `For commercial or university work in the United States the pilot needs an FAA Part 107 Remote Pilot Certificate. Multispectral cameras give NDVI and NDRE; thermal cameras show water stress.`, ["part107","ndvi","cwsi"]);

E("part107", "FAA Part 107", ["Part 107","Remote Pilot Certificate"],
 "The federal rule and license for flying drones for work.",
 `Requires passing the FAA knowledge test, keeping the drone in visual line of sight, flying under 400 ft, and getting airspace authorization (often through LAANC) near airports. Recurrent online training every 24 months.`, ["uav","laanc"]);

E("laanc", "Low Altitude Authorization and Notification Capability", ["LAANC"],
 "A quick phone-app approval to fly a drone in controlled airspace near airports.",
 `Sussex County has controlled airspace around Dover Air Force Base and Salisbury. Check before flying at Carvel or Warrington.`, ["part107"]);

E("ndvi", "Normalized difference vegetation index", ["NDVI"],
 "A greenness score from 0 to 1 calculated from a camera image. Healthy dense crop scores high.",
 `NDVI = (NIR - Red) / (NIR + Red). It saturates in dense canopies (above about LAI 3), so use NDRE later in the season.`, ["ndre","uav"]);

E("ndre", "Normalized difference red edge", ["NDRE"],
 "Like NDVI but uses red-edge light, so it still works in thick crops. Good for nitrogen status.",
 `NDRE = (NIR - RedEdge) / (NIR + RedEdge).`, ["ndvi"]);

E("cwsi", "Crop water stress index", ["CWSI"],
 "A 0 to 1 number from leaf temperature that shows how thirsty a crop is. 0 is no stress.",
 `Based on canopy temperature minus air temperature, scaled between a well-watered baseline and a non-transpiring upper limit at the current VPD. Measured with infrared thermometers (IRTs) on pivots or thermal drone imagery.`, ["irt","vpd","uav"]);

E("irt", "Infrared thermometer", ["IRT"],
 "A sensor that reads leaf temperature without touching it.",
 `Mounted on pivots or posts, IRTs feed canopy temperature into CWSI or time-temperature threshold scheduling.`, ["cwsi"]);

E("telemetry", "Telemetry", ["remote monitoring"],
 "Sending sensor or pivot data over cell or radio so you can check it on a phone.",
 `Pivot telemetry shows position, pressure and on/off; lets growers stop a machine remotely. Soil sensor telemetry uploads hourly readings.`, ["capacitance","lorawan"]);

E("lorawan", "LoRaWAN", ["LoRa"],
 "A long-range, low-power radio network for farm sensors where cell coverage is weak.",
 `Range several miles on flat Delmarva ground. Needs a gateway with internet.`, ["telemetry"], true);

E("zone", "Management zone", ["management zones"],
 "A part of a field that behaves alike (soil, yield, water) and gets the same treatment.",
 `Built from ECa, yield maps, elevation and soil survey. Used for VRI and variable rate seeding.`, ["eca","vri","prescription"]);

E("prescription", "Prescription map", ["Rx map"],
 "A map file that tells a machine how much to apply in each part of the field.",
 `For VRI: depth or speed percent by sector or zone. For seeding: seeds per acre. Uploaded to the pivot panel or tractor display.

{{q:adk-planter}}`, ["vri","zone"]);

E("yieldmap", "Yield map", ["yield monitor"],
 "A map from the combine showing how much each part of the field produced.",
 `Clean data (remove start-pass delays, overlaps, speed changes) before using for zones. Compare irrigated pivot circle against dry corners.`, ["zone"]);

/* ---------- Economics ---------- */
E("partial", "Partial budget", ["partial budgeting"],
 "A quick way to see if a change pays: list only what goes up or down because of the change.",
 `Four boxes: added income, reduced costs (benefits) against added costs, reduced income. If benefits exceed costs, the change pays.

{{calc:budget}}`, ["crf","breakeven"]);

E("crf", "Capital recovery factor", ["CRF"],
 "A factor that turns the price of equipment into an equal yearly payment, including interest.",
 `CRF = i(1 + i)^n / ((1 + i)^n - 1). At 6 percent over 20 years, CRF = 0.0872, so a $100,000 pivot costs about $8,720 per year before repairs and salvage value.`, ["partial","breakeven"]);

E("breakeven", "Breakeven yield", ["breakeven"],
 "The extra bushels per acre you need for an investment to pay for itself.",
 `Breakeven yield increase = annual cost per acre / (price - harvest and hauling cost per bushel). Example from this manual: about 65 bu/ac of corn for a new pivot under the stated assumptions.`, ["partial","crf"]);

E("fixedcost", "Fixed cost", ["ownership cost"],
 "Costs you pay whether you irrigate or not: depreciation, interest, insurance, taxes.",
 ``, ["varcost","crf"]);

E("varcost", "Variable cost", ["operating cost"],
 "Costs that go up the more you run: fuel or electricity, repairs, labor.",
 `For pumping: cost per acre-inch = fuel units per acre-inch x price. The NPPC calculator computes this.`, ["fixedcost","nppc"]);
})(window.GLOSS);
