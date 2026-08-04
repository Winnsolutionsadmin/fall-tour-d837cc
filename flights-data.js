/* flights-data.js — verified 2026-08-03
   Ryanair + SAS figures pulled live through a real browser session against the
   booking engines, at true 5-passenger occupancy with the correct pax split
   (ADT=3 — the 16yo prices as an ADULT on Ryanair — TEEN=1, CHD=1).
   Legacy-carrier connection figures are Google Flights 5-pax quotes: sound to
   ~10%, not carried to a payment page. Cabin/seat facts from published maps. */

window.__ALERTS__ = [
{
 kind:'amb',
 h:'Oct 30 into Kraków does not exist',
 body:'<p>Ryanair flies Dubrovnik→Kraków <b>Mondays and Saturdays only</b> in the winter schedule. '
   +'Oct 30 is a <b>Friday</b>. There is no direct flight, and no legacy carrier out of Dubrovnik '
   +'will sell 5 seats on one booking.</p>',
 cal:true,
 body2:'<p>So the Oct 30 target has three honest answers, all priced below: <b>fly Oct 31 direct</b> '
   +'($127, the pick), <b>connect through Munich on Oct 30</b> ($1,061–1,228), or <b>Zagreb + Warsaw, '
   +'two stops</b> ($1,557). Warsaw has no Dubrovnik service at all in this window, and Ryanair\'s '
   +'Vienna→Warsaw route terminated Oct 24.</p>'
},
{
 kind:'red',
 h:'Correction: there is no flat bed on this plan',
 body:'<p>I shipped a $5,800 SAS business figure earlier today. <b>It was wrong.</b> A live check '
   +'tested it three ways and SAS Business simply is not sellable on Nov 2:</p>'
   +'<p>① Kraków→SFO in business at 5 passengers returns <b>no SAS itinerary at all</b>. '
   +'② The same search at <b>1 passenger</b> still returns no SAS — so it is a route/inventory limit, '
   +'not a five-seat problem. ③ Control test on the Copenhagen→SFO nonstop alone: SK935 appears in '
   +'economy and is <b>absent in business</b>.</p>'
   +'<p>The seat is real — a 1-2-1 Thompson Vantage XL, 22in wide, 78in fully flat, 44in pitch, every '
   +'seat with aisle access. It just cannot be bought on your date. And the Kraków feeder SK1736 is a '
   +'single-class Embraer E195, so there is no premium cabin on that leg <i>even in principle</i>.</p>'
   +'<p><b>What a real flat bed would actually cost you:</b> $15,851 for five on a 3-stop, 21h15 '
   +'routing, or $20,820 on the best 1-stop (KLM/Delta via Amsterdam) — against <b>$3,366 in economy</b>. '
   +'A 4.7× jump. Premium economy is a trap: the cheapest is $16,005, which is <i>more</i> than the '
   +'cheapest business. Recheck SAS closer to departure; award and premium inventory can open.</p>'
}
];

window.__PLANS__ = [

/* ───────────── 1. THE PICK ───────────── */
{
 name:'Stay in Croatia to Oct 31, then fly direct',
 tag:'The pick', tagc:'g', best:true,
 meta:'<b>6 extra Croatia nights</b> over your Oct 25 checkout · lands Kraków Saturday morning · '
     +'catches All Saints\' Eve that evening AND all of Nov 1 · one flight, no connection',
 legs:[
  {date:'Sat Oct 31', no:'FR 5916', carrier:'Ryanair (Buzz)', ac:'737-800 or 737 MAX 8-200',
   seats:'5 seats confirmed · faresLeft = no cap',
   from:{code:'DBV',city:'Dubrovnik',t:'09:15'}, to:{code:'KRK',city:'Kraków',t:'10:55'},
   dur:'1h 40m', stops:0,
   cabins:[
     {name:'Basic fare', cash:127, for:'all 5 · $25.35 each', bed:'n', cfg:[3,3], st:'e', cfgL:'3-3 · fixed, non-reclining',
      note:'Ryanair\'s forced family-seat fee was ABOLISHED for new bookings on 25 June 2026 after a CMA investigation. The 8-year-old is now seated beside an adult free.'},
     {name:'Regular fare', cash:265, for:'all 5 · +$138 over Basic', bed:'n', cfg:[3,3], st:'e', cfgL:'3-3 · seats assigned',
      note:'Recommended. The free pairing only covers UNDER-12s — the 13 and 16 year olds can still be scattered across the cabin. This is the only way to lock all five together.'}
   ]},
  {date:'Mon Nov 2', no:'SK 1736', carrier:'SAS Link', ac:'Embraer E195 · 122 seats',
   seats:'priced inside the through fare',
   from:{code:'KRK',city:'Kraków',t:'10:25'}, to:{code:'CPH',city:'Copenhagen',t:'11:55'},
   dur:'1h 30m', stops:0,
   cabins:[
     {name:'Economy', cash:null, for:'included in the through ticket', bed:'n', cfg:[2,2], st:'e', cfgL:'2-2 single class',
      note:'Single-class aircraft. There is no premium cabin on this leg even in principle. Arrives Terminal 3.'}
   ]},
  {date:'Mon Nov 2', no:'SK 935', carrier:'SAS', ac:'Airbus A350-900 · 40J / 32W / 228Y',
   seats:'the only daily CPH→SFO',
   from:{code:'CPH',city:'Copenhagen',t:'12:40'}, to:{code:'SFO',city:'San Francisco',t:'14:35'},
   dur:'11h 10m', stops:0,
   cabins:[
     {name:'SAS Go — what you get', cash:3366, for:'all 5, whole journey · $673 each', bed:'n',
      cfg:[3,3,3], st:'e', cfgL:'3-3-3', pts:125000, fees:875,
      note:'Buy KRK→SFO as ONE ticket. The Copenhagen→SFO leg alone prices at $6,463 for five — nearly double the through fare for a shorter journey. Never split this PNR.'},
     {name:'SAS Business', biz:true, cash:null, for:'NOT SELLABLE on Nov 2', bed:'na',
      cfg:[1,2,1], st:'f', cfgL:'1-2-1 · 78in flat · 22in wide',
      note:'Verified absent three ways: no SAS business itinerary at 5 pax, none at 1 pax, and absent on the CPH→SFO nonstop alone while economy shows. The bed exists; the inventory does not.'}
   ]}
 ],
 total:3493, totalN:'Basic fare + through ticket',
 alt:'$3,631', altL:'with Regular (seats locked)',
 why:'<b>Google Flights makes this call for you.</b> Search Oct 30 and it prints "Travel on Oct 31 for $127" '
   +'above a $1,061 result — an 8× delta for arriving one day earlier. You land 10:55 Saturday, which is '
   +'All Saints\' Eve: the Rakowicki and Salwator candle displays are a Saturday-evening event and you get '
   +'the whole of it, plus all of Nov 1. Versus any Oct 30 routing you lose essentially nothing.',
 risk:'TWO REAL RISKS. Oct 31 is the <b>last DBV→KRK flight before a two-day gap</b> — nothing Oct 29, 30 or '
   +'Nov 1, and the next departure is Mon Nov 2 at 15:15, which lands five hours AFTER your SFO connection '
   +'has already left Kraków. A cancellation is trip-breaking; the two Kraków nights are the buffer that '
   +'saves you. Second, the <b>Copenhagen connection is 50 minutes</b> (10:25 dep corrected from 10:15; legal vs the 45-min MCT but tight), Schengen→non-Schengen with passport '
   +'control, five people and checked bags. SK935 is the only daily CPH→SFO, so a misconnect is a 24-hour '
   +'delay, not a re-route.'
},

/* ───────────── 2. THE SAFE VARIANT ───────────── */
{
 name:'Same plan, but kill the 45-minute connection',
 tag:'Low risk', tagc:'b',
 meta:'Depart Kraków 20:30 instead of 10:15 · <b>+$35</b> · a 14h30 Copenhagen layover instead of 45 minutes · '
     +'arrives SFO Nov 3',
 legs:[
  {date:'Sat Oct 31', no:'FR 5916', carrier:'Ryanair (Buzz)', ac:'737-800 or 737 MAX 8-200',
   from:{code:'DBV',city:'Dubrovnik',t:'09:15'}, to:{code:'KRK',city:'Kraków',t:'10:55'},
   dur:'1h 40m', stops:0,
   cabins:[{name:'Economy × 5', cash:127, for:'all 5', bed:'n', cfg:[3,3], st:'e', cfgL:'3-3'}]},
  {date:'Mon Nov 2', no:'SK 1736 + SK 935', carrier:'SAS', ac:'E195, then A350-900',
   via:'Copenhagen · 14h 30m layover',
   from:{code:'KRK',city:'Kraków',t:'20:30'}, to:{code:'SFO',city:'San Francisco',t:'14:35'},
   dur:'arrives Nov 3', stops:1,
   cabins:[{name:'Economy × 5', cash:3401, for:'all 5 · +$35', bed:'n', cfg:[3,3,3], st:'e', cfgL:'3-3-3',
     note:'Trades one calendar day for near-zero misconnect risk. If the 45-minute Copenhagen transfer with three kids and checked bags worries you, this is $35 of insurance.'}]}
 ],
 total:3528, totalN:'arrives SFO Nov 3',
 why:'Identical to the pick except for the Kraków departure time. Worth it if you would rather lose a morning '
   +'than risk a 24-hour delay on the only daily Copenhagen–SFO flight.'
},

/* ───────────── 3. THE OCT 30 ASK, HONESTLY PRICED ───────────── */
{
 name:'Arrive Oct 30 — best daytime option',
 tag:'What you asked for', tagc:'b',
 meta:'Lufthansa via Munich · lands 16:55 Friday · <b>$1,101 more</b> than the Oct 31 direct, '
     +'and it costs you the Oct 30 night in Croatia too',
 legs:[
  {date:'Fri Oct 30', no:'LH via MUC', carrier:'Lufthansa', ac:'A319/A320 + A320-family or CRJ',
   via:'Munich · 3h 35m layover', seats:'quoted for 5; may force a 4+1 split at ticketing',
   from:{code:'DBV',city:'Dubrovnik',t:'10:10'}, to:{code:'KRK',city:'Kraków',t:'16:55'},
   dur:'6h 45m', stops:1,
   cabins:[
     {name:'Economy × 5', cash:1228, for:'all 5 · $246 each', bed:'n', cfg:[3,3], st:'e', cfgL:'3-3',
      note:'Nearly 10× the Ryanair direct, for a worse arrival, with a connection.'},
     {name:'Business × 5', biz:true, cash:3419, for:'all 5 · $684 each', bed:'n',
      cfg:[3,3], st:'r', cfgL:'3-3 with the middle blocked',
      note:'27× the Oct 31 direct for the same city pair — and it is NOT a bed. European business is a standard economy seat with a table on the middle. Do not buy this.'}
   ]}
 ],
 total:4594, totalN:'with the Nov 2 SAS exit',
 why:'The cleanest way to actually be in Kraków on Friday Oct 30 with a usable afternoon. '
   +'It buys one extra Poland day for <b>$1,101 plus a Croatia night plus a connection</b>.',
 risk:'Lufthansa caps online bookings at 4 passengers — expect a 4+1 split or a phone booking. '
   +'Google will quote 5 happily; that is a display behaviour, not an inventory guarantee.'
},
{
 name:'Arrive Oct 30 — cheapest option',
 tag:'Day is gone', tagc:'a',
 meta:'Lufthansa via Munich · lands <b>23:40</b> · you gain a calendar day and none of its hours',
 legs:[
  {date:'Fri Oct 30', no:'LH via MUC', carrier:'Lufthansa', ac:'A319/A320 + A320-family or CRJ',
   via:'Munich · 3h 25m layover',
   from:{code:'DBV',city:'Dubrovnik',t:'17:05'}, to:{code:'KRK',city:'Kraków',t:'23:40'},
   dur:'6h 35m', stops:1,
   cabins:[{name:'Economy × 5', cash:1061, for:'all 5 · $212 each', bed:'n', cfg:[3,3], st:'e', cfgL:'3-3',
     note:'$934 more than the Oct 31 direct, to arrive after 23:30 with three kids.'}]}
 ],
 total:4427, totalN:'with the Nov 2 SAS exit',
 why:'The literal cheapest Oct 30 arrival, and the argument against Oct 30: '
   +'you pay $934 for a calendar day spent entirely in transit and asleep.'
},
{
 name:'Arrive Oct 30 via Zagreb',
 tag:'Brutal', tagc:'r',
 meta:'Croatia Airlines to Zagreb, LOT to Warsaw, LOT to Kraków · 06:40 departure · 5h10 in Warsaw',
 legs:[
  {date:'Fri Oct 30', no:'OU 661 + LO 612', carrier:'Croatia Airlines + LOT',
   ac:'A220-100 or Dash 8-Q400, then Embraer E175/E195',
   via:'Zagreb + Warsaw · 5h 10m layover', seats:'both carriers cap at 4 online',
   from:{code:'DBV',city:'Dubrovnik',t:'06:40'}, to:{code:'KRK',city:'Kraków',t:'16:20'},
   dur:'9h 40m', stops:2,
   cabins:[{name:'Economy × 5', cash:1557, for:'all 5 · $311 each', bed:'n', cfg:[2,3], st:'e', cfgL:'2-3 / 2-2',
     note:'A 06:40 departure is a 04:45 wake-up with three kids, then five hours in Warsaw airport.'}]}
 ],
 total:4923, totalN:'with the Nov 2 SAS exit',
 why:'Priced because you asked for the Zagreb route. It is the most expensive Oct 30 option and the worst day.'
},

/* ───────────── 4. VIENNA ───────────── */
{
 name:'Via Vienna — does not produce an Oct 30 arrival',
 tag:'Dead end', tagc:'r',
 meta:'Ryanair ex-Dubrovnik on Oct 30 leaves at <b>21:35</b>. The onward Vienna→Kraków lands Oct 31 at 22:05 — '
     +'after the cemeteries.',
 legs:[
  {date:'Fri Oct 30', no:'FR 9756', carrier:'Ryanair (Lauda Europe)', ac:'Airbus A320',
   seats:'exactly 5 seats left · $40.73 each',
   from:{code:'DBV',city:'Dubrovnik',t:'21:35'}, to:{code:'VIE',city:'Vienna',t:'23:00'},
   dur:'1h 25m', stops:0,
   cabins:[{name:'Economy × 5', cash:204, for:'all 5', bed:'n', cfg:[3,3], st:'e', cfgL:'3-3',
     note:'Cheap, but it dumps you in Vienna at 23:00 needing a family room.'}]},
  {date:'Sat Oct 31', no:'FR 947', carrier:'Ryanair', ac:'Boeing 737-800',
   from:{code:'VIE',city:'Vienna',t:'21:00'}, to:{code:'KRK',city:'Kraków',t:'22:05'},
   dur:'1h 05m', stops:0,
   cabins:[{name:'Economy × 5', cash:135, for:'all 5', bed:'n', cfg:[3,3], st:'e', cfgL:'3-3',
     note:'Lands 22:05 Saturday — the All Saints\' Eve illuminations are over.'}]}
 ],
 total:339, totalN:'flights only, + a Vienna hotel night',
 why:'Recorded so it is not re-litigated. The <b>only</b> Vienna variant that truly lands Oct 30 morning is '
   +'flying out of Dubrovnik on <b>Oct 27</b> and spending three nights in Vienna — airfare is trivial '
   +'($285 for five) but it costs 3 Croatia nights and $600–900 of Vienna hotel.',
 risk:'Ryanair\'s Vienna→Warsaw route terminated Oct 24 2026. Vienna is not a path to Warsaw either.'
},

/* ───────────── 5. MAX POLAND ───────────── */
{
 name:'Fly Oct 26 — maximum Poland',
 tag:'The bookend', tagc:'b',
 meta:'The other direct day. Civilised 15:15 departure, 7 full nights in Kraków, '
     +'the whole candle build-up through the week.',
 legs:[
  {date:'Mon Oct 26', no:'FR 5916', carrier:'Ryanair (Buzz)', ac:'Boeing 737-800',
   seats:'5 seats verified · €33.17 each',
   from:{code:'DBV',city:'Dubrovnik',t:'15:15'}, to:{code:'KRK',city:'Kraków',t:'16:55'},
   dur:'1h 40m', stops:0,
   cabins:[{name:'Economy × 5', cash:192, for:'all 5 · $38 each', bed:'n', cfg:[3,3], st:'e', cfgL:'3-3',
     note:'Needs one forced Dubrovnik night on Oct 25 — the route does not fly Sunday.'}]},
  {date:'Mon Nov 2', no:'SK 1736 + SK 935', carrier:'SAS', ac:'E195, then A350-900',
   via:'Copenhagen · 45m',
   from:{code:'KRK',city:'Kraków',t:'10:15'}, to:{code:'SFO',city:'San Francisco',t:'14:35'},
   dur:'13h 35m', stops:1,
   cabins:[{name:'Economy × 5', cash:3366, for:'all 5', bed:'n', cfg:[3,3,3], st:'e', cfgL:'3-3-3',
     pts:125000, fees:875}]}
 ],
 total:3558, totalN:'economy · Oct 26 + Nov 2',
 why:'The max-Poland bookend to the max-Croatia pick. $65 more in air, trading six Croatia nights '
   +'for six Kraków nights. Kraków lodging runs ~$112/night against Dubrovnik\'s ~$110 — close to '
   +'cost-neutral, so it comes down to which place you would rather be.'
}
];

/* ═══ business vs economy on the exits ═══ */
window.__CABIN__ = [
 {city:'Kraków', bed:'n',
  detail:'SAS · <b>SK1736</b> KRK 10:25 → CPH 11:55 (E195, single class) · 45m · <b>SK935</b> CPH 12:40 → SFO 14:35 (A350-900) · 13h 35m',
  econ5:3366, econX:'$673 each · 3-3-3 · live-quoted · or 125,000 Flying Blue + ~$875',
  biz2:null, bizX:'SAS Business is NOT SELLABLE on Nov 2 — verified at 5 pax, at 1 pax, and on the CPH-SFO nonstop alone. The 1-2-1 78in bed exists; the inventory does not.',
  mix:'$15,851 – $20,820', mixX:'What a real flat bed actually costs for five if you abandon SAS: $15,851 on a 3-stop 21h15 routing, $20,820 on the best 1-stop (KLM/Delta via Amsterdam). Against $3,366 in economy — a 4.7× jump.'},

 {city:'Warsaw', bed:'y',
  detail:'KLM · WAW 06:00 → Amsterdam → <b>KL605</b> 787-10 → SFO · ~14h 55m · <b>the LOT nonstop is dead</b>',
  econ5:3674, econX:'$735 each · 3-3-3 on the 787-10 · Nov 2 spikes to $4,538, the opposite of Kraków',
  biz2:5800, bizX:'~$2,900 each · 1-2-1 Jamco Venture reverse-herringbone · fully flat 78-81in · no privacy doors on the 787 subfleet · aggregator band, not a live quote',
  mix:'195,000 pts + ~$1,425', mixX:'2 business at 60,000 each + 3 economy at 25,000 each. Amsterdam carries higher surcharges than Copenhagen — roughly $865 more in fees for the identical redemption.'},

 {city:'Vienna', bed:'n',
  detail:'Austrian\'s Vienna–SFO nonstop ended Feb 28 2026 and was never refiled · connection only',
  econ5:3900, econX:'planning band · routes via Frankfurt, Zurich or Amsterdam',
  biz2:null, bizX:'Depends entirely on the connecting hub — Vienna itself offers no transatlantic metal',
  mix:'—', mixX:'Vienna\'s only remaining value on this trip is as a Ryanair landing point out of Dubrovnik.'},

 {city:'Prague', bed:'y',
  detail:'No nonstop has ever existed · connects via Amsterdam, Paris or Frankfurt',
  econ5:3550, econX:'planning band for 5',
  biz2:5800, bizX:'Whatever the hub flies — via Amsterdam you get the same KL605 787-10 flat bed',
  mix:'195,000 pts', mixX:'Identical Flying Blue pricing. The feeder is free under origin-destination pricing.'},

 {city:'Zagreb', bed:'y',
  detail:'A terrible cash exit at $4,068 for five · only worth it if you route on to London first',
  econ5:4068, econX:'$814 each · the most expensive economy exit in the study',
  biz2:5800, bizX:'Same hub metal, but you pay a premium to get out of Zagreb before you even reach the ocean',
  mix:'195,000 pts', mixX:'The points price is flat regardless of origin, which is the one thing that makes Zagreb tolerable.'}
];

/* ═══ the intra-Europe business trap, and Paris ═══ */
window.__TRAPS__ = [
 {h:'European "business" is not a seat, it is a bundle',
  b:'On LOT, Austrian, Lufthansa, KLM Cityhopper and Croatia Airlines, intra-European business is a '
   +'<b>standard 3-3 economy row with the middle seat blocked by a table</b> — no seatback screens, '
   +'economy recline. On the Embraer fleet there is no middle seat to block, so "business" is a 2-2 '
   +'economy row with the <b>aisle</b> seat blocked, sold as a 1-1. You are buying an empty adjacent '
   +'seat, lounge access and first-bag-off. Buy economy on 100% of intra-Europe segments.'},
 {h:'Air France AF84 is a fleet coin flip — check before you pay',
  b:'Air France\'s 777-300ER fleet is mid-retrofit. The un-retrofitted jets are a <b>2-2-2 lie-flat '
   +'without direct aisle access</b> — still a bed, but a window passenger climbs over a neighbour. '
   +'How to tell before paying: open the seat map and count seats across a business row. Four = new '
   +'suite. Six = legacy. Second strike against Paris: CDG carries the highest Flying Blue award '
   +'surcharges in Europe, a documented $523 cash on a 60k business redemption.'},
 {h:'Book the two business seats FIRST, on a separate PNR',
  b:'No program books 2 business + 3 economy on one PNR — confirmed across Flying Blue, BA, Iberia, '
   +'Virgin and Qatar. Two separate bookings is universal AND strictly better: it turns "five saver '
   +'seats in one bucket" into two independent, easier tests. Business award space is far scarcer than '
   +'economy, so book it first — if it does not exist, the whole plan changes. Then call the airline '
   +'and cross-reference the two PNRs so irregular-operations rebooking keeps the family together.'}
];

/* ═══ itinerary rows ═══ */
window.__ITIN__ = [
 {d:'Sun Oct 25', t:'Dubrovnik — extend, do not check out', s:'2BR apartment sleeping 5, Lapad or Babin Kuk. 6 nights at $95–130.', c:'$675'},
 {d:'Sat Oct 31', fn:'FR 5916', t:'DBV 09:15 → KRK 10:55', s:'Ryanair/Buzz · 737-800 or MAX 8-200 · 1h40 nonstop · 3-3 economy · 5 seats confirmed · Regular fare +$138 locks all five together', c:'$265'},
 {d:'Sat Oct 31', t:'KRK airport → city', s:'SKA1 train, 17–20 min, 20 PLN/adult. Taxis are 4-seat — pre-book a van for 5 with multi-week bags.', c:'$25'},
 {d:'Sat Oct 31', t:'All Saints\' Eve — Salwator & Rakowicki', s:'Graves already lit; hillside view over the city from Salwator', c:'free'},
 {d:'Sun Nov 1', t:'All Saints — Cmentarz Rakowicki', s:'Tram 5 is easiest; special lines 80–85 + bus 884. P+R at Nowy Bieżanów, Kurdwanów, Krowodrza Górka. Traffic restrictions Oct 31–Nov 3.', c:'$8'},
 {d:'Oct 31 – Nov 2', t:'Kraków lodging — 2 nights', s:'~$126/night for five', c:'$252'},
 {d:'Mon Nov 2', fn:'SK 1736', t:'KRK 10:25 → CPH 11:55', s:'SAS Link · Embraer E195 · 122 seats · single-class 2-2 · arrives Terminal 3', c:'incl.'},
 {d:'Mon Nov 2', t:'Copenhagen connection — 50 min', s:'Schengen → non-Schengen, passport control, 5 people + checked bags. The weakest link. A 20:30 Kraków departure removes it for +$35.', c:'—'},
 {d:'Mon Nov 2', fn:'SK 935', t:'CPH 12:40 → SFO 14:35', s:'Airbus A350-900 · 40J/32W/228Y · 11h10 · economy 3-3-3 · the only daily CPH–SFO · arrives Terminal I', c:'$3,366'},
 {d:'Mon Nov 2', t:'SFO — car is parked here', s:'Total KRK → SFO 13h 35m. Arrival ~14:35–14:50 PST (post-DST; sources differ by 15 min — confirm at ticketing).', c:'—'},
 {d:'Bags', t:'Ryanair 3 × 20kg checked', s:'€19–60/bag online. TRAP: airport check-in is €55/PERSON if you skip online check-in — €275 for five. Seats: 8yo pairs free with an adult; ~€25–40 buys all five together.', c:'$65–180'},
 {d:'Bags', t:'SAS: do NOT buy Economy Light', s:'Light = ZERO checked bags (€350+ to add five). Economy Standard includes 1×23kg each — one intercontinental allowance covers both legs on the through ticket.', c:'incl. Std'},
 {d:'Nov 1', t:'Transit: 25 PLN Weekend Family Ticket', s:'Covers Sat+Sun unlimited, 2 adults + kids under 16 (the 16yo needs his own). Tram 2 links Salwator ↔ Rakowicki directly. ~33 special holiday lines run 08:00–20:00; be off the grounds by ~20:30.', c:'~$8'},
 {d:'Mon Nov 2', t:'07:36 train from Kraków Główny', s:'SKA1 to the airport for the 10:25 departure (07:06 for buffer). Taxis are 4-seat; the train takes bags free.', c:'$25'},
 {d:'TOTAL', t:'Flights + ground, five people, economy', s:'One ticket KRK→SFO — never split the PNR, the CPH→SFO leg alone is $6,463 for five', c:'$3,631'}
];
