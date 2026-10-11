/* Glossary part 3: diseases tied to irrigation, drainage, specialty systems, programs and terms added in the second build. */
(function(G){
function E(k, t, a, s, f, r, cs){ G[k] = {t:t, a:a||[], s:s, f:f||"", r:r||[]}; if (cs) G[k].cs = true; }

E("whitemold", "White mold", ["Sclerotinia stem rot","Sclerotinia"],
 "A fungal disease of soybeans and beans that loves a wet, closed canopy during bloom.",
 `Caused by Sclerotinia sclerotiorum. Infection happens at flowering (soybean R1 to R3, snap and lima bean bloom) when petals land on wet tissue. Long canopy wetness from frequent evening irrigation raises risk. Irrigate in the morning, use fewer and larger passes within what the soil can hold, and consider wider rows on fields with a history.`, ["r1","snapbean","leafwet"]);

E("leafwet", "Leaf wetness duration", ["leaf wetness"],
 "How many hours the leaves stay wet. Many diseases need a set number of wet hours to infect.",
 `Measured by leaf wetness sensors on DEOS stations or estimated from dew point and humidity. Irrigation adds wet hours; morning irrigation dries fastest. Disease tools such as the Delaware lima bean downy mildew risk tool use it.`, ["whitemold","downymildew","deos"]);

E("downymildew", "Lima bean downy mildew", ["downy mildew"],
 "A disease of lima beans that spreads in cool, wet nights and wet canopies in late summer.",
 `Caused by Phytophthora phaseoli. DEOS runs a free Delaware risk tool by field. Avoid irrigating late in the day when the tool shows high risk; coordinate fungicide timing with irrigation so products are not washed off.`, ["lima","leafwet"]);

E("fhb", "Fusarium head blight", ["head scab","FHB","wheat scab"],
 "A wheat and barley disease that infects heads at flowering in wet weather and leaves a toxin in the grain.",
 `Infection peaks at Feekes 10.5.1 (beginning flowering) with warm, humid weather. Avoid irrigating small grains during flowering; fill the profile by full head emergence (UD, 2015). The Penn State Fusarium head blight risk model has Delaware locations. The toxin deoxynivalenol (DON, vomitoxin) causes price discounts.`, ["feekes"]);

E("gls", "Gray leaf spot", [],
 "A corn leaf disease that grows in long humid, warm stretches; irrigated continuous corn with residue is most at risk.",
 `Caused by Cercospora zeae-maydis. Long leaf wetness and high humidity favor it. Irrigated corn on corn with surface residue in humid Delmarva summers is a classic setup. Scout from VT on; irrigation timing that shortens wet hours helps.`, ["leafwet"]);

E("activation", "Herbicide activation", ["activating herbicide"],
 "Many herbicides put on the soil need rain or irrigation to move into the top inch where weed seeds sprout.",
 `Most soil-applied herbicides need about 0.5 in of water within 5 to 7 days of application (check the label). A light pivot pass is a cheap way to activate them in a dry spring. UD weed science has flagged this in dry years (WCU 2018).`, ["pivot"]);

E("drainage", "Subsurface drainage", ["tile drainage","tile","drain tile"],
 "Buried perforated pipe that lets extra water drain out of wet fields so roots get air and tractors can get in.",
 `Common on poorly drained soils in Kent and the low parts of Sussex, usually with open ditches. Delaware also has a network of tax ditches managed by local organizations. Drainage speeds planting but can carry nitrate straight to ditches.`, ["dwm","ditch"]);

E("dwm", "Drainage water management", ["DWM","controlled drainage"],
 "Using a gate or riser on a drain outlet to hold water back in the field when you don't need it to drain.",
 `Raise the outlet board after harvest and in midsummer to keep water in the soil and cut nitrate loss; lower it before planting and harvest. NRCS practice 554. Delaware stewardship award winners have used it (Twin Cedar Ag, 2025).`, ["drainage","nitrate"]);

E("ditch", "Tax ditch", ["tax ditches"],
 "A shared farm drainage ditch in Delaware run by the landowners who benefit and paid for by a local assessment.",
 `Delaware has more than 200 tax ditch organizations, overseen with DNREC. On low fields near tidal water, ditches can also carry salt inland during storm tides.`, ["drainage","swi"]);

E("frost", "Frost protection irrigation", ["frost protection"],
 "Running sprinklers on a cold night so freezing water releases heat and keeps blossoms at about 32 F.",
 `Used on strawberries and some fruit. Typical rates 0.10 to 0.15 in/h; start before the air at plant height reaches about 34 F (depending on dew point) and run until ice melts on its own after sunrise. Needs large well capacity for short periods: 1 acre at 0.15 in/h needs about 68 gpm.`, ["solidset"]);

E("deficit", "Deficit irrigation", ["regulated deficit irrigation"],
 "Watering on purpose less than the crop could use, saving water at stages where yield suffers least.",
 `In Delaware it matters when well capacity can't keep up. Put the shortfall on low-Ky stages (corn vegetative, soybean vegetative and ripening) and protect high-Ky stages (corn flowering, soybean seed fill).`, ["ky","drought"]);

E("ae", "Application efficiency", ["Ea"],
 "The share of water pumped that actually ends up in the root zone where the crop can use it.",
 `Ea = water stored in root zone / water applied. Losses: wind drift, evaporation from spray and wet canopy, runoff and deep percolation. Typical: MESA pivot 80 to 90 percent; traveling gun 65 to 75 percent; drip 85 to 95 percent.`, ["capacity","dulq"], true);

E("h2a", "H-2A program", ["H-2A"],
 "The federal visa program that lets farms hire seasonal workers from other countries.",
 `Many Delaware vegetable farms rely on H-2A workers, who often run drip systems day to day. UD held an H-2A labor workshop in Georgetown in February 2026. Bilingual (English and Spanish) drip maintenance guides serve this group.`, ["drip"]);

E("part137", "FAA Part 137", ["Part 137"],
 "The federal rule for agricultural aircraft operations, which covers spray drones.",
 `Spray drones need a Part 137 certificate plus state pesticide applicator licensing, in addition to Part 107 for the pilot.`, ["part107","uav"]);

E("stc", "State Technical Committee", [],
 "The advisory group that helps NRCS in each state set practice standards, priorities and payment rates.",
 `Members include agencies, universities, farm groups and industry. Bring Delaware irrigation data here to argue for changes to 442 and 449 scenarios or priority practices.`, ["nrcs","cps449"]);

E("s319", "Section 319 Nonpoint Source grants", ["Section 319","319 grants"],
 "Clean Water Act money, run in Delaware by DNREC, for projects that cut runoff and leaching pollution.",
 `Fits irrigation scheduling and uniformity work framed as nitrogen reduction in the Inland Bays or Chesapeake watersheds.`, ["dnrec","nitrate"]);

E("niwr", "National Institutes for Water Resources", ["NIWR"],
 "The network of state water research institutes, one in each state, funded through USGS.",
 `Delaware's member is the Delaware Water Resources Center at UD. Institutes run 104(b) seed grants and partner on 104(g) regional proposals.`, ["dwrc","usgs104"]);

E("ffar", "Foundation for Food and Agriculture Research", ["FFAR"],
 "A nonprofit set up by Congress that funds agricultural research, usually with a matching requirement.",
 ``, ["nifa"]);

E("nfwf", "National Fish and Wildlife Foundation", ["NFWF"],
 "A foundation that funds conservation, including Chesapeake Bay and coastal resilience grants.",
 `Its Chesapeake Bay Stewardship Fund and coastal resilience programs can fit nitrogen and salt-intrusion work on farms.`, ["tmdl","swi"]);

E("mgs", "Maryland Geological Survey", ["MGS"],
 "Maryland's state geology agency, which maps aquifers and tracks groundwater levels.",
 `Publishes potentiometric surface maps and open-file reports for Eastern Shore confined aquifers such as the Aquia.`, ["aquia","dgs"]);

E("weighwagon", "Weigh wagon", ["weigh cart"],
 "A grain cart with scales used to weigh harvest from a plot or strip accurately.",
 `Use on key strips to check yield monitor calibration in on-farm trials.`, ["yieldmap"]);

E("lysimeter", "Suction lysimeter", ["lysimeter","porous cup sampler"],
 "A buried ceramic cup that pulls in soil water below the roots so you can measure the nitrate leaving the field.",
 `Install at about 36 in under irrigated corn on sand; apply vacuum after rain or irrigation and collect within 24 to 48 h. Pair nitrate concentration with a drainage estimate to get lb N/ac lost.`, ["leaching","nitrate"]);
})(window.GLOSS);
