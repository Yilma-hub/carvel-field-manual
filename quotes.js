/* Direct quotes from Delaware and Maryland news, Extension and research sources, 2010 to 2026.
   Each quote is word for word from the linked page. "..." marks a cut between parts of the same statement. */
(function(){
var UD16 = ["UDaily, \"Irrigation research\" by Adam Thomas", "August 8, 2016", "https://www.udel.edu/udaily/2016/august/irrigation-research/"];
var ADK = ["James Adkins", "Associate scientist for irrigation engineering, UD Carvel Research and Education Center"];
var SALT24 = ["Bay Journal, \"As land turns salty, farmers grapple with lost income\"", "2024", "https://www.bayjournal.com/news/climate_change/as-land-turns-salty-farmers-grapple-with-lost-income/article_7147cadc-63e1-11ef-a023-8b24baee75a7.html"];
var SALT19 = ["Bay Journal, \"Saltwater intrusion laying waste to Delmarva farms as sea level rises\" by Jeremy Cox", "March 26, 2019", "https://www.bayjournal.com/news/climate_change/saltwater-intrusion-laying-waste-to-delmarva-farms-as-sea-level-rises/article_0fa5a3f0-21cc-11ea-8cc0-cbf489ef26cc.html"];
var SPOT = ["Spotlight Delaware, \"Saltwater intrusion requires underground compromise in Kent County\" by Maddy Lauria", "December 24, 2025", "https://spotlightdelaware.org/?p=15266"];
var HEAT22 = ["UDaily, \"Feeling the heat\" by Lauren Bradford", "August 24, 2022", "https://www.udel.edu/udaily/2022/august/heat-stress-mitigation-vegetable-crops-extension/"];
var AGENT = ["UDaily, \"The county agent\" by Michele Walfred", "November 10, 2025", "https://www.udel.edu/udaily/2025/november/county-agent-cooperative-extension/"];
var CHAH = ["UD CANR News, \"Mireille Chahine joins UD Cooperative Extension\"", "October 2026", "https://www.udel.edu/academics/colleges/canr/news/2026/october/mireille-chahine-joins-ud-cooperative-extension/"];
var MDT = ["Maryland Today, \"Study predicts quadrupling of summer irrigation needs for Eastern Shore soybean farmers\" by Kimbra Cutlip", "June 10, 2026", "https://today.umd.edu/briefs/study-predicts-quadrupling-of-summer-irrigation-needs-for-eastern-shore-soybean-farmers"];
var AGNR = ["UMD College of Agriculture and Natural Resources, \"Irrigation needs could quadruple for Eastern Shore soybean farmers in July and August\"", "June 8, 2026", "https://agnr.umd.edu/news/irrigation-needs-could-quadruple-eastern-shore-soybean-farmers-july-and-august/"];
var LSAD = ["47 ABC WMDT, Lower Shore Agronomy Day coverage", "January 26, 2024", "https://www.wmdt.com/?p=2802324"];
var DRY26 = ["47 ABC WMDT, \"Eastern Shore farmers are feeling the heat amid statewide drought\"", "May 15, 2026", "https://www.wmdt.com/?p=4480323"];
var DRY21 = ["47 ABC WMDT, \"Eastern Shore farmers, working through the drought\"", "May 27, 2021", "https://www.wmdt.com/?p=719651"];
var ROAD = ["47 ABC WMDT, \"DE organizations warn that water irrigation can be hazardous for roadways\"", "August 22, 2022", "https://www.wmdt.com/2022/08/de-organizations-warn-that-water-irrigation-can-be-hazardous-for-roadways/"];
var DPM10 = ["Delaware Public Media, \"To irrigate or not? Tough choice for Delaware farmers\"", "July 9, 2010", "https://www.delawarepublic.org/2010-07-09/to-irrigate-or-not-tough-choice-for-delaware-farmers"];
var LF25 = ["Lancaster Farming, \"Delmarva Watermelon Growers Have East Coast Edge\" by Dan Sullivan", "March 27, 2025", "https://www.lancasterfarming.com/farming-news/produce/delmarva-watermelon-growers-have-east-coast-edge/article_342e1255-4526-472e-8b0c-96d65c03c501.html"];
var ISA = ["UDaily, Mark Isaacs retirement story by Molly Schafer", "March 4, 2025", "https://udel.edu/udaily/2025/march/mark-isaacs-director-of-carvel-center-retirement"];
var BAN = ["The Banner, \"Heat and drought threaten Maryland farmers as grain prices plummet\" by Matti Gellman", "July 29, 2024", "https://www.thebanner.com/culture/food-drink/heat-and-drought-threaten-maryland-farmers-as-grain-prices-plummet-FTWLGWTLPRDU3HRWBU5MNK5UJA"];
var CG23 = ["Cape Gazette, Delaware Farm Bureau heat safety story", "August 7, 2023", "https://capegazette.com/node/262356"];
var LIMA23 = ["UDaily, \"More lima beans, please\" by Katie Young", "January 5, 2023", "https://www.udel.edu/udaily/2023/january/lima-bean-grant-specialty-crops-research-initiative/"];
var LF19 = ["Lancaster Farming, \"Lima Researcher Aims to Build a Better Bean\" by Michael Short", "October 4, 2019", "https://www.lancasterfarming.com/lima-researcher-aims-to-build-a-better-bean/article_bbd1e4eb-310b-5401-bd0a-40c2f213c852.html"];
var USGS15 = ["USGS news release, \"Eastern Shore contributes excess nutrients to Chesapeake Bay\"", "March 12, 2015", "https://www.usgs.gov/news/state-news-release/eastern-shore-contributes-excess-nutrients-chesapeake-bay"];
var SALTY22 = ["UDaily, \"Salty farms\" by Adam Thomas", "July 25, 2022", "https://udel.edu/udaily/2022/july/salt-water-intrusion-farms-chesapeake-bay-delmarva"];

function Q(q, who, role, s, tags){ return {q:q, who:who, role:role, src:s[0], date:s[1], url:s[2], tags:tags}; }
var IR = "Irrigation research and practice", WS = "Water supply and aquifers", DH = "Drought and heat", SA = "Salinity and sea level",
    EX = "Extension and outreach", VG = "Vegetables and specialty crops", NU = "Nutrients and water quality", EC = "Farm economics", PA = "Precision agriculture", SF = "Safety";

window.QUOTES = {
  "adk-betamax": Q("At the time, it was like VHS and Betamax, and I built a Betamax,", ADK[0], ADK[1] + ", on the variable rate pivot he built in 2001", UD16, [IR, PA]),
  "adk-roots": Q("We can tell where the roots of a crop are by looking at the soil moisture values ... when the sun comes up, the plant starts using water so we'll see that soil moisture profile start to drop.", ADK[0], ADK[1], UD16, [IR]),
  "adk-rootzone": Q("By watching each depth, we can get a good idea where our root zone is and thus change how we irrigate,", ADK[0], ADK[1], UD16, [IR]),
  "adk-tiers": Q("We want to make sure that 'Treatment One' doesn't always end up in the best soil and make sure it gets into all five tiers,", ADK[0], ADK[1], UD16, [IR, PA]),
  "adk-ec": Q("we categorize the soils based on a range of factors such as electrical connectivity which is a proxy for soil moisture holding capacity, and clay content.", ADK[0], ADK[1], UD16, [PA]),
  "adk-stations": Q("We've got about 200 stations with three sensors each that log each hour so we're looking at a large volume of data each day.", ADK[0], ADK[1], UD16, [IR, PA]),
  "adk-20cb": Q("If we have a treatment triggered by a sensor that reads 20 centibars or above ... that square gets irrigated,", ADK[0], ADK[1], UD16, [IR]),
  "adk-wue": Q("It's a mechanism to be able to evaluate whether sensor-driven irrigation has an effect on yield and water use efficiency.", ADK[0], ADK[1], UD16, [IR]),
  "adk-soy": Q("We find that soybeans respond to water at a very particular time ... if you just water based on conventional methods, you'll actually hurt yield because it will result in a plant that is too big and that falls down,", ADK[0], ADK[1], UD16, [IR]),
  "adk-planter": Q("The planter responds to a map that I drew and uploaded to the tractor,", ADK[0], ADK[1], UD16, [PA]),
  "adk-sdi16": Q("When we bury the tape at 16 inches ... we don't get a lot of it to come up to the surface.", ADK[0], ADK[1], UD16, [IR]),
  "adk-sdiearly": Q("Early in the season when there are no roots down to that depth we end up pumping considerably more water to try to get that water to move vertically in the profile", ADK[0], ADK[1], UD16, [IR]),
  "adk-recharge": Q("We get enough recharge that it's not really an issue.", ADK[0], ADK[1] + ", on Delaware water supply in 2016", UD16, [WS]),
  "adk-silver": Q("It has its place, but it's not a silver bullet,", ADK[0], ADK[1] + ", on subsurface drip", UD16, [IR]),
  "udag-food": Q("only 20% of the total farmland in the world is irrigated but that land provides for 40% of the total food supply", "Understanding Delaware Agriculture", "UD student blog post, \"Agricultural Irrigation with James Adkins\"", ["Understanding Delaware Agriculture blog", "October 11, 2018", "https://sites.udel.edu/understand-de-ag/2018/10/11/agricultural-irrigation-with-james-adkins-2"], [IR]),

  "dclifton-road": Q("The pivot goes around in a circle but you can imagine that if on this side there's a road", "Don Clifton", "Executive Director, Delaware Farm Bureau", ROAD, [SF]),
  "demalto-hazard": Q("The water that offshoots from the irrigation system can create an unexpected hazard for motorists especially motorcyclists", "Leonard DeMalto", "Public Information Officer, Delaware State Police", ROAD, [SF]),
  "dclifton-corn": Q("One farmer told me that the irrigated corn that he has is doing very very well", "Don Clifton", "Executive Director, Delaware Farm Bureau, during the 2022 dry spell", ROAD, [DH]),
  "dclifton-heatcrop": Q("Too much heat and too little water, for example, could ruin our crop for the year", "Don Clifton", "Executive Director, Delaware Farm Bureau", CG23, [DH]),
  "dclifton-equip": Q("Sometimes the equipment struggles or even overheats in the higher temperatures, like we do.", "Don Clifton", "Executive Director, Delaware Farm Bureau", CG23, [SF]),
  "dclifton-sun": Q("Take the time to put the sunblock on, grab the hat, drink more water.", "Don Clifton", "Executive Director, Delaware Farm Bureau", CG23, [SF]),

  "snow-curve": Q("Extension is a good resource, and they help us stay ahead of the curve,", "Jonathan Snow", "Farmer, family operation in northern Kent County", AGENT, [EX]),
  "snow-headsup": Q("Extension will give you a heads up when they're seeing things in your area that you may not be seeing yet,", "Jonathan Snow", "Farmer, northern Kent County", AGENT, [EX]),
  "snow-relation": Q("If I have a problem in one of my fields, you've built that relationship; they know who you are.", "Jonathan Snow", "Farmer, northern Kent County", AGENT, [EX]),
  "snow-threshold": Q("If I wasn't sure what it looked like, or what the threshold was, Extension is a source you can call,", "Jonathan Snow", "Farmer, northern Kent County", AGENT, [EX]),
  "ervin-public": Q("Extension professionals are the definition of public servants", "Erik Ervin", "Associate dean and interim director, UD Cooperative Extension", AGENT, [EX]),
  "ervin-personal": Q("We personalize the role of extending knowledge and improving lives.", "Erik Ervin", "Associate dean and interim director, UD Cooperative Extension", AGENT, [EX]),
  "chahine-food": Q("I love that agriculture is Delaware's No. 1 industry. I believe that food security is national security,", "Mireille Chahine", "Associate dean and director, UD Cooperative Extension", CHAH, [EX]),
  "chahine-campus": Q("But in land-grant universities like UD, I view the entire state as our campus.", "Mireille Chahine", "Associate dean and director, UD Cooperative Extension", CHAH, [EX]),
  "chahine-twoway": Q("I really look at it as a two-way street.", "Mireille Chahine", "Associate dean and director, UD Cooperative Extension", CHAH, [EX]),
  "chahine-trust": Q("With UD Extension, people feel a trust and that is an important, hard-earned relationship...", "Mireille Chahine", "Associate dean and director, UD Cooperative Extension", CHAH, [EX]),
  "isaacs-equipped": Q("We're among the most well-equipped research stations in the country,", "Mark Isaacs", "Director, Carvel Research and Education Center (retired 2025)", ISA, [EX]),
  "isaacs-land": Q("We're not getting any more land, and the number of farmers isn't increasing.", "Mark Isaacs", "Director, Carvel Research and Education Center", ISA, [EC]),
  "isaacs-tech": Q("We need to embrace technology and increase efficiency while being good stewards of the environment.", "Mark Isaacs", "Director, Carvel Research and Education Center", ISA, [PA]),
  "willin-educated": Q("As a result, Delaware producers are some of the most educated producers in the country.", "R.C. Willin", "Willin Farms, fifth-generation operation west of Seaford", ISA, [EX]),
  "willin-knowledge": Q("Delmarva Farmers hoping to increase productivity while remaining good stewards of the land ... can access a tremendous knowledge base through Carvel and extension services,", "R.C. Willin", "Willin Farms, west of Seaford", ISA, [EX]),
  "page-interns": Q("As a company, we owe a lot of our success with our UD interns to him,", "Wes Page", "Manager, Helena Agri-Enterprises", ISA, [EX]),
  "hirsh-inputs": Q("Inputs are expensive and have been more expensive in recent years.", "Sarah Hirsh", "Agriculture Agent, University of Maryland Extension", LSAD, [EC]),
  "hirsh-efficient": Q("So, the big push is trying to be efficient,", "Sarah Hirsh", "Agriculture Agent, University of Maryland Extension", LSAD, [EC]),
  "hirsh-business": Q("Farming is a business, so it's always a challenge to make that business viable.", "Sarah Hirsh", "Agriculture Agent, University of Maryland Extension", LSAD, [EC]),
  "walls-care": Q("Delaware farmers care deeply about positively impacting the environment", "Brooke Walls", "Nutrient Management Program Administrator, Delaware Department of Agriculture", ["Delaware News, Environmental Stewardship Award semi-finalists", "March 6, 2025", "https://news.delaware.gov/2025/03/06/grain-farmers-recognized-as-delaware-environmental-stewardship-semi-finalists-for-the-first-time/"], [NU]),

  "kumar-essential": Q("Maryland's Eastern Shore is heading toward essential irrigation, not just supplemental irrigation anymore.", "Hemendra Kumar", "Precision agriculture specialist and Extension agent, University of Maryland", MDT, [DH, IR]),
  "kumar-3738": Q("By mid-century, Maryland's Eastern Shore soybean fields will need 37-38 inches of irrigation per season ... just to meet crop demand.", "Hemendra Kumar", "Precision agriculture specialist, University of Maryland", MDT, [DH, IR]),
  "kumar-plan": Q("Our Farmers must plan carefully for these peak demands,", "Hemendra Kumar", "Precision agriculture specialist, University of Maryland", AGNR, [DH, WS]),
  "kumar-below": Q("We want to be sure that if the water is being applied on top, how we are going address what's happening below the ground.", "Hemendra Kumar", "Precision agriculture specialist, University of Maryland Extension", LSAD, [PA, WS]),
  "kumar-salt": Q("It also brings up the problem of saltwater intrusion.", "Hemendra Kumar", "Precision agriculture specialist, University of Maryland Extension", LSAD, [SA]),

  "shockley-6in": Q("From January until now, we're about six inches down.", "Virgil Shockley", "Farmer, Oak Shelter Farm, Worcester County", DRY26, [DH]),
  "shockley-fert": Q("Two inches of rain would dissolve the fertilizer,", "Virgil Shockley", "Farmer, Oak Shelter Farm", DRY26, [DH, NU]),
  "shockley-half": Q("I basically almost cut what I was going to plant in corn in half", "Virgil Shockley", "Farmer, Oak Shelter Farm", DRY26, [DH, EC]),
  "shockley-dry": Q("But with this kind of wind and temperature, it will dry out very quickly.", "Virgil Shockley", "Farmer, Oak Shelter Farm", DRY26, [DH]),
  "raley-granular": Q("The fertilizer is just going to sit there in its granular form.", "Jamie Raley", "President, Maryland Farm Bureau", DRY26, [DH, NU]),
  "raley-microbes": Q("We rely on microbial action to break fertilizer down and make it available to plants.", "Jamie Raley", "President, Maryland Farm Bureau", DRY26, [NU]),
  "raley-insurance": Q("It won't make you profitable, but it might help you at least break even.", "Jamie Raley", "President, Maryland Farm Bureau, on crop insurance", DRY26, [EC]),
  "raley-discrim": Q("Drought doesn't discriminate. This affects all of agriculture.", "Jamie Raley", "President, Maryland Farm Bureau", BAN, [DH]),
  "chase-gone": Q("It's just gone. There's a stalk there, but it's all brown and burnt up.", "Bob Chase", "Farmer, Chase's Produce, Davidsonville, Maryland", BAN, [DH]),
  "bauer-paycut": Q("Most working people get an annual pay raise. This year, we don't get a raise; we get a pay cut.", "Leslie Bauer", "Owner, Rural Rhythm Farm, Howard County Farm Bureau", BAN, [EC, DH]),
  "holloway-keep": Q("Once you start irrigating you really need to keep irrigating", "Matt Holloway", "Owner, Baywater and Quantico Creek Sod Farms, Wicomico County", DRY21, [IR, DH]),
  "holloway-root": Q("As long as you have irrigation at the root zone it's actually beneficial to have a dryer top environment", "Matt Holloway", "Owner, Baywater and Quantico Creek Sod Farms", DRY21, [IR]),
  "holloway-sept": Q("You'll see these running non-stop from now until probably September or so when things start to cool back down,", "Matt Holloway", "Owner, Baywater and Quantico Creek Sod Farms", DRY21, [IR, DH]),
  "rosenkranz-veg": Q("If you want vegetables, they need to have water, they need to have sun, and they need to have fertilizer,", "Ginny Rosenkranz", "University of Maryland Extension", DRY21, [VG]),

  "dclifton-tight": Q("Is your net income going to be enough after you've paid for the irrigation system and maintaining it? ... It's tight.", "Donald Clifton", "Delaware Executive Director, USDA Farm Service Agency, and third-generation farmer", DPM10, [EC]),
  "leathers-soil": Q("The big problem we get into in Delaware is soil-moisture droughts, and that's what we are experiencing right now,", "Daniel Leathers", "Professor and Deputy Dean, UD College of Earth, Ocean and Environment", DPM10, [DH]),
  "leathers-every": Q("[Y]ou very rarely see a summer where we don't have pretty severe soil-moisture drought in some part of the state.", "Daniel Leathers", "Professor and Deputy Dean, UD College of Earth, Ocean and Environment", DPM10, [DH]),
  "brown-size": Q("The bigger the machine, the cheaper [the cost] per acre; the smaller the machine, the more expensive per acre,", "David Brown", "President and owner, Sussex Irrigation, Laurel", DPM10, [EC, IR]),
  "davis-solar": Q("It's still being looked at to see if it's economically viable and profitable.", "Mark Davis", "Deputy Secretary, Delaware Department of Agriculture, on solar-powered irrigation", DPM10, [EC]),

  "ernest-present": Q("It is not a future problem. It's a present problem.", "Emmalea Ernest", "Scientist, UD Cooperative Extension vegetable and fruit program", HEAT22, [DH, VG]),
  "ernest-season": Q("With some crops, we're having problems producing them in the season when we would have typically produced them,", "Emmalea Ernest", "Scientist, UD Cooperative Extension vegetable and fruit program", HEAT22, [DH, VG]),
  "ernest-variety": Q("You just plant a different variety.", "Emmalea Ernest", "Scientist, UD Cooperative Extension", HEAT22, [VG]),
  "ernest-flower": Q("I was able to establish that the early flowering period is the most impactful in terms of heat stress causing yield loss,", "Emmalea Ernest", "Scientist, UD Cooperative Extension, on lima beans", HEAT22, [VG, DH]),
  "ernest-anchor": Q("Lima beans are Delaware's largest acreage vegetable crop and anchor the state's processing vegetable industry,", "Emmalea Ernest", "Extension agent, UD Department of Plant and Soil Sciences", ["HortiDaily, \"University program to develop heat tolerant lima bean varieties\"", "December 20, 2013", "https://www.hortidaily.com/article/6005357/us-de-university-program-to-develop-heat-tolerant-lima-bean-varieties"], [VG]),
  "ernest-heatnow": Q("Heat stress is a problem now. It's not getting any better, ... With heat stress, there's really nothing you can do about the weather.", "Emmalea Ernest", "Associate scientist, UD", LF19, [VG, DH]),
  "ernest-shortday": Q("The year-round, near 12-hour day at lima bean's centers of domestication means that tropical varieties are triggered to flower by short day length, which we do not have during our growing season here in Delaware,", "Emmalea Ernest", "Vegetable and fruit scientist and agriculture program leader, UD Cooperative Extension", LIMA23, [VG]),
  "palkovic-heat": Q("Lima beans have improved heat tolerance compared to common beans, such as black, pink, pinto and Great Northern beans.", "Antonia Palkovic", "Associate specialist, UC Davis Department of Plant Sciences, partner on the UD lima grant", LIMA23, [VG]),
  "collins-place": Q("I've always said that we grow watermelons in as good a place to grow them in the country", "Mark Collins", "Watermelon grower, DMC Farms, Laurel", LF25, [VG]),
  "collins-overhead": Q("Back in the '70s and when I was growing up, everything was just seeded watermelons ... We grew them on bare ground and watered them overhead.", "Mark Collins", "Watermelon grower, DMC Farms, Laurel", LF25, [VG, IR]),
  "collins-fusarium": Q("It gets in and destroys the vascular system of the watermelons, and once you've got it in the soil, it takes a long time for it to leave.", "Mark Collins", "Watermelon grower, DMC Farms, Laurel", LF25, [VG]),
  "collins-graft": Q("It's an expensive plant.", "Mark Collins", "Watermelon grower, DMC Farms, on grafted transplants", LF25, [VG, EC]),

  "neild-sea": Q("In my lifetime, which is 94 years now, the sea level has come up at least a foot, maybe 18 inches,", "Pat Neild", "Grain farmer, Maryland's Eastern Shore", SALT24, [SA]),
  "neild-salted": Q("Once it is salted, it takes at least five or six years for it to return [to normal],", "Pat Neild", "Grain farmer, Maryland's Eastern Shore", SALT24, [SA]),
  "tully-incent": Q("we need to help incentivize good decisions.", "Kate Tully", "Agroecologist, University of Maryland", SALT24, [SA]),
  "mondal-invisible": Q("It has been going on for a while, but, because it has been invisible, people weren't paying attention.", "Pinki Mondal", "University of Delaware, lead author of the salt-patch mapping study", SALT24, [SA]),
  "miller-behind": Q("On everything, we're behind. On practices, we don't know.", "Jarrod Miller", "Soil and agronomy specialist, University of Delaware", SALT24, [SA]),
  "bruce-uncharted": Q("This is sort of uncharted territory.", "Nate Bruce", "Farm business management specialist, University of Delaware", SALT24, [SA, EC]),
  "abend-worse": Q("It's getting worse, I think, over the last 10 years or so,", "Rick Abend", "Landowner, Dorchester County, Maryland", SALT24, [SA]),
  "travers-trying": Q("It seems like you keep trying even when you know what the outcome is going to be,", "Harold Travers Jr.", "Farmer who leases salt-affected tracts, Dorchester County", SALT24, [SA]),
  "cumming-market": Q("There's no current market,", "Jonathan Cumming", "Plant professor, University of Maryland Eastern Shore, on salt-tolerant alternative crops", SALT24, [SA, EC]),
  "fitz-lose": Q("This is how you lose it", "Bob Fitzgerald", "Farmer, Maryland's Eastern Shore, family on the land since 1666", SALT19, [SA]),
  "tully-now": Q("It's happening now ... We're at the point we're already losing farm fields.", "Kate Tully", "Agroecologist, University of Maryland", SALT19, [SA]),
  "fykes-tides": Q("These tides come up [onto a farm], and the next year they come up another 20 feet.", "Larry Fykes", "Somerset Soil Conservation District", SALT19, [SA]),
  "miller-marginal": Q("It becomes what we call marginal land ... It's not the most productive. So how do you keep that in production?", "Jarrod Miller", "Soil expert, University of Delaware", SALT19, [SA]),
  "miller-dakotas": Q("If you take a soils class in college and you talk about salinity, you're going to talk about the Dakotas", "Jarrod Miller", "Agronomy specialist, University of Delaware", ["Civil Eats, \"As Saltwater Encroaches on Farms, Solutions Emerge From the Marshes\" by Lisa Held", "January 15, 2024", "https://civileats.com/?p=54987"], [SA]),
  "sarupria-sat": Q("The satellite data allows us to see beyond what we can see with the naked eye", "Manan Sarupria", "Doctoral student, UD Department of Geography and Spatial Sciences", SALTY22, [SA, PA]),
  "walter-abandon": Q("We saw some farms where the farmers basically abandoned land for farming so there were huge fields", "Matthew Walter", "Doctoral student, UD Department of Geography and Spatial Sciences", SALTY22, [SA]),
  "mcq-front": Q("I think the irrigation and farming right there is kind of on the 'frontlines,'", "Rachel McQuiggan", "Hydrogeologist, Delaware Geological Survey, on eastern Kent County", SPOT, [SA, WS]),
  "mcq-wells": Q("If it's going to happen, it's going to hit those irrigation wells first.", "Rachel McQuiggan", "Hydrogeologist, Delaware Geological Survey", SPOT, [SA, WS]),
  "mcq-hard": Q("Once that saltwater moves in, it's really hard to get it back out of the aquifer,", "Rachel McQuiggan", "Hydrogeologist, Delaware Geological Survey", SPOT, [SA, WS]),
  "mcq-balance": Q("Anything that changes that balance on one side of saltwater coming in or freshwater going out will change that dynamic.", "Rachel McQuiggan", "Hydrogeologist, Delaware Geological Survey", SPOT, [WS]),
  "cartanza-dead": Q("It's not too bad one or two times, but when it does it periodically, it becomes dead land,", "Paul Cartanza", "Farmer, Dover area", SPOT, [SA]),
  "lyon-neighbors": Q("We want to be good neighbors,", "Jason Lyon", "Public works director, City of Dover, on shifting city pumping away from the Columbia aquifer during farming season", SPOT, [WS]),

  "smadc-warning": Q("geologists have been warning that the seemingly inexhaustible supply is running out.", "Southern Maryland Agricultural Development Commission", "Post on water supply options for Maryland farmers", ["SMADC, \"Water supply options for farmers in Maryland\"", "October 25, 2012", "https://smadc.com/water-supply-options-for-farmers-in-maryland/"], [WS]),
  "dipasquale-lag": Q("this so-called 'lag-time' could take 20 to 40 years.", "Nick DiPasquale", "Director, EPA Chesapeake Bay Program, on Delmarva groundwater", ["Chesapeake Bay Program, \"Lag-times call for patience in awaiting a restored Bay\"", "October 31, 2013", "https://www.chesapeakebay.net/news/blog/letter-from-leadership-lag-times-call-for-patience-in-awaiting-a-restored-b"], [NU, WS]),
  "ator-choptank": Q("We are also seeing worsening nitrogen and phosphorus concentrations in the Choptank River", "Scott Ator", "Hydrologist, U.S. Geological Survey", USGS15, [NU]),
  "usgs-slow": Q("the nitrogen and phosphorus move very slowly from upland areas to streams", "U.S. Geological Survey", "News release on the Eastern Shore nutrient study", USGS15, [NU]),
  "perez-slow": Q("Delaware chose a very slow implementation schedule allowing farmers to come in voluntarily to obtain a plan", "Michelle Perez", "Author, \"Regulating Farmers: Lessons Learned from the Delmarva Peninsula\"", ["Choices magazine (Agricultural and Applied Economics Association)", "Third quarter 2011", "https://choicesmagazine.org/choices-magazine/theme-articles/innovating-policy-for-chesapeake-bay-restoration/regulating-farmers-lessons-learned-from-the-delmarva-peninsula"], [NU]),
  "perez-feel": Q("the majority of Delaware farmers reported the opposite feelings", "Michelle Perez", "Choices magazine, comparing Delaware farmers with Maryland farmers who felt shut out of nutrient policy", ["Choices magazine", "Third quarter 2011", "https://choicesmagazine.org/choices-magazine/theme-articles/innovating-policy-for-chesapeake-bay-restoration/regulating-farmers-lessons-learned-from-the-delmarva-peninsula"], [NU, EX]),
  "shockley-pmt": Q("a potential disaster in the making.", "Virgil Shockley", "Poultry, corn and soybean grower near Snow Hill, on Maryland's Phosphorus Management Tool", ["Conduit Street (Maryland Association of Counties), citing the Bay Journal", "November 30, 2018", "https://conduitstreet.mdcounties.org/2018/11/30/both-farmers-environmentalists-concerned-as-phosphorus-limits-ramp-up/"], [NU])
};

window.SOURCES = [
  ["FAO Irrigation and Drainage Paper 56, Crop evapotranspiration (Allen and others, 1998)", "https://www.fao.org/4/x0490e/x0490e00.htm"],
  ["UD Cooperative Extension, Irrigation program home", "https://udel.edu/academics/colleges/canr/cooperative-extension/sustainable-production/irrigation"],
  ["UD Cooperative Extension, Irrigation system uniformity and performance testing impact page", "https://www.udel.edu/academics/colleges/canr/cooperative-extension/first-state-impacts/irrigation-system-uniformity-and-performance-testing/"],
  ["UD Cooperative Extension, Irrigation projects and studies", "https://www.udel.edu/academics/colleges/canr/cooperative-extension/sustainable-production/irrigation/projects-and-studies/"],
  ["UD Cooperative Extension, Irrigated lima bean yield and quality study", "https://www.udel.edu/academics/colleges/canr/cooperative-extension/sustainable-production/irrigation/lima-bean-irrigation/"],
  ["UD Extension 2024 impact sheet, Irrigation System", "https://udel.edu/content/dam/udelImages/canr/pdfs/extension/impacts/2024/2024-Irrigation-System.pdf"],
  ["UD Extension fact sheet, Delaware Nutrient Management Law", "https://udel.edu/content/dam/udelImages/canr/pdfs/extension/factsheets/Delaware-Nutrient-Management-Law.pdf"],
  ["UD CANR News, Carvel field and crop tours 2026", "https://www.udel.edu/academics/colleges/canr/news/2026/september/ud-carvel-centers-field-and-crop-tours-2026/"],
  ["James Adkins, UD Extension directory", "https://www.udel.edu/academics/colleges/canr/cooperative-extension/directory-contacts/james-adkins/"],
  ["USDA NASS 2022 Census of Agriculture, Delaware state profile", "https://www.nass.usda.gov/Publications/AgCensus/2022/Online_Resources/County_Profiles/Delaware/cp99010.pdf"],
  ["USDA NASS 2022 Census of Agriculture, Sussex County profile", "https://www.nass.usda.gov/Publications/AgCensus/2022/Online_Resources/County_Profiles/Delaware/cp10005.pdf"],
  ["USDA NASS 2022 Census of Agriculture, Kent County profile", "https://www.nass.usda.gov/Publications/AgCensus/2022/Online_Resources/County_Profiles/Delaware/cp10001.pdf"],
  ["USDA NASS 2022 Census of Agriculture, New Castle County profile", "https://www.nass.usda.gov/Publications/AgCensus/2022/Online_Resources/County_Profiles/Delaware/cp10003.pdf"],
  ["USGS Data Series 932, Center-pivot irrigated areas in the mid-Atlantic region", "https://pubs.usgs.gov/publication/ds932"],
  ["USDA NRCS Conservation Practice Standards (442, 449, 441, 430, 533 and others)", "https://www.nrcs.usda.gov/resources/guides-and-instructions/conservation-practice-standards"],
  ["Delaware Environmental Observing System (DEOS)", "https://www.deos.udel.edu/"],
  ["Delaware Geological Survey", "https://www.dgs.udel.edu/"],
  ["Maryland Department of the Environment, drought update, April 3, 2025", "https://news.maryland.gov/mde/2025/04/03/maryland-department-of-environment-provides-update-on-drought-conditions-and-water-conservation-efforts/"],
  ["Maryland Geological Survey, Open-File Report 20-02-01", "https://mgs.md.gov/publications/report_pages/OFR_20-02-01.html"],
  ["Maryland Department of Agriculture, Phosphorus Management Tool FAQ", "https://mda.maryland.gov/Documents/pmtfaqs.pdf"],
  ["USDA SARE (Sustainable Agriculture Research and Education)", "https://www.sare.org/"],
  ["USDA National Institute of Food and Agriculture (NIFA)", "https://www.nifa.usda.gov/"],
  ["FAA Part 107 small unmanned aircraft rules", "https://www.faa.gov/uas/commercial_operators"]
];
})();
