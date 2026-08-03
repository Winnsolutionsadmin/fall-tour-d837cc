/* flights-data.js — verified 2026-08-03
   Ryanair figures pulled live from Ryanair's own timetable + fare APIs with a
   5-passenger load (3 ADT incl. the 16yo, 1 TEEN, 1 CHD).
   Legacy-carrier figures are Google Flights 5-pax quotes: sound to ~10%, not ticketed.
   Cabin/seat-config facts are from published cabin maps. */

window.__PLANS__ = [

/* ───────────── 1. THE PICK ───────────── */
{
 name:'Stay in Croatia to Oct 31, then fly direct',
 tag:'The pick', tagc:'g', best:true,
 meta:'<b>6 extra Croatia nights</b> over your Oct 25 checkout · lands Kraków Saturday morning · '
     +'catches All Saints\' Eve that evening AND all of Nov 1 · one flight, no connection',
 legs:[
  {date:'Sat Oct 31', no:'FR 5916', carrier:'Ryanair (Buzz)', ac:'Boeing 737-800',
   seats:'5 seats verified in one PNR',
   from:{code:'DBV',city:'Dubrovnik',t:'09:15'}, to:{code:'KRK',city:'Kraków',t:'10:55'},
   dur:'1h 40m', stops:0,
   cabins:[
     {name:'Economy', cash:127, for:'all 5 · €21.99 each', bed:'n', cfg:[3,3], st:'e', cfgL:'3-3',
      note:'Single-class aircraft — there is no business cabin to buy. Bags and seats are extra.'},
     {name:'Business', cash:null, for:'does not exist on this aircraft', bed:'na',
      note:'Ryanair sells no premium cabin. This is the cheapest leg of the entire trip.'}
   ]},
  {date:'Mon Nov 2', no:'SK ••• + SK 935', carrier:'SAS', ac:'A350-900 on the ocean leg',
   via:'Copenhagen', seats:'5 quoted, not re-verified',
   from:{code:'KRK',city:'Kraków',t:'10:15'}, to:{code:'SFO',city:'San Francisco',t:'14:40'},
   dur:'13h 35m', stops:1,
   cabins:[
     {name:'Economy × 5', cash:3362, for:'all 5 · $672 each', bed:'n', cfg:[3,3,3], st:'e', cfgL:'3-3-3 on the A350',
      pts:125000, fees:875,
      note:'Cheapest of six Poland city-dates pulled. Flying Blue economy saver is 25,000 each and the Kraków feeder is FREE under origin-destination pricing.'},
     {name:'Business × 2', biz:true, cash:5800, for:'2 seats · ~$2,900 each', bed:'y',
      cfg:[1,2,1], st:'f', cfgL:'1-2-1 · 78in flat · 22in wide',
      pts:120000, fees:224,
      note:'SK935 is a Thompson Vantage XL reverse-herringbone — a genuine flat bed with direct aisle access from every seat. This is one of only two verified real beds on the board.'}
   ]}
 ],
 total:3489, totalN:'economy · Oct 31 + Nov 2',
 alt:'195,000 pts + ~$560', altL:'2 flat + 3 economy',
 why:'<b>Google Flights makes this call for you.</b> Search Oct 30 and it prints "Travel on Oct 31 for $127" '
   +'above a $1,061 result — an 8× delta for arriving one day earlier. You land 10:55 Saturday, which is '
   +'All Saints\' Eve: the Rakowicki and Salwator candle displays are a Saturday-evening event and you get '
   +'the whole of it, plus all of Nov 1. Versus any Oct 30 routing you lose essentially nothing.',
 risk:'Ryanair runs this route Monday and Saturday only. If FR5916 cancels, the same-day backup is a Lufthansa '
   +'or Croatia Airlines connection at roughly 8× the fare — build a day of slack, do not book anything '
   +'unmissable for Oct 31 afternoon.'
},

/* ───────────── 2. THE OCT 30 ASK, HONESTLY PRICED ───────────── */
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
   ]},
  {date:'Mon Nov 2', no:'SK ••• + SK 935', carrier:'SAS', ac:'A350-900 on the ocean leg',
   via:'Copenhagen',
   from:{code:'KRK',city:'Kraków',t:'10:15'}, to:{code:'SFO',city:'San Francisco',t:'14:40'},
   dur:'13h 35m', stops:1,
   cabins:[
     {name:'Economy × 5', cash:3362, for:'all 5', bed:'n', cfg:[3,3,3], st:'e', cfgL:'3-3-3', pts:125000, fees:875},
     {name:'Business × 2', biz:true, cash:5800, for:'2 seats', bed:'y', cfg:[1,2,1], st:'f',
      cfgL:'1-2-1 · 78in flat', pts:120000, fees:224}
   ]}
 ],
 total:4590, totalN:'economy · Oct 30 + Nov 2',
 why:'This is the cleanest way to actually be in Kraków on Friday Oct 30 with a usable afternoon. '
   +'It buys you one extra Poland day for <b>$1,101 plus a Croatia night plus a connection</b>.',
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
   cabins:[
     {name:'Economy × 5', cash:1061, for:'all 5 · $212 each', bed:'n', cfg:[3,3], st:'e', cfgL:'3-3',
      note:'$934 more than the Oct 31 direct, to arrive after 23:30 with three kids.'}
   ]}
 ],
 total:4423, totalN:'with the Nov 2 SAS exit',
 why:'Included because it is the literal cheapest Oct 30 arrival. It is also the argument against Oct 30: '
   +'you pay $934 for a calendar day you spend entirely in transit and asleep.'
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
   cabins:[
     {name:'Economy × 5', cash:1557, for:'all 5 · $311 each', bed:'n', cfg:[2,3], st:'e', cfgL:'2-3 / 2-2',
      note:'A 06:40 departure is a 04:45 wake-up with three kids, and then five hours in Warsaw airport.'}
   ]}
 ],
 total:4919, totalN:'with the Nov 2 SAS exit',
 why:'Priced because you asked for the Zagreb route. It is the most expensive Oct 30 option and the worst day.'
},

/* ───────────── 3. THE VIENNA TRUTH ───────────── */
{
 name:'Via Vienna — does not produce an Oct 30 arrival',
 tag:'Dead end', tagc:'r',
 meta:'Ryanair ex-Dubrovnik on Oct 30 leaves at <b>21:35</b>. The onward Vienna→Kraków lands Oct 31 at 22:05 — '
     +'after the cemeteries.',
 legs:[
  {date:'Fri Oct 30', no:'FR 9756', carrier:'Ryanair', ac:'Boeing 737-800',
   seats:'5 in one PNR · €35.34 each',
   from:{code:'DBV',city:'Dubrovnik',t:'21:35'}, to:{code:'VIE',city:'Vienna',t:'23:00'},
   dur:'1h 25m', stops:0,
   cabins:[{name:'Economy × 5', cash:190, for:'all 5', bed:'n', cfg:[3,3], st:'e', cfgL:'3-3',
     note:'Cheap, but it dumps you in Vienna at 23:00 needing a family room.'}]},
  {date:'Sat Oct 31', no:'FR 947', carrier:'Ryanair', ac:'Boeing 737-800',
   from:{code:'VIE',city:'Vienna',t:'21:00'}, to:{code:'KRK',city:'Kraków',t:'22:05'},
   dur:'1h 05m', stops:0,
   cabins:[{name:'Economy × 5', cash:135, for:'all 5', bed:'n', cfg:[3,3], st:'e', cfgL:'3-3',
     note:'Lands 22:05 Saturday — the All Saints\' Eve illuminations are over.'}]}
 ],
 total:325, totalN:'flights only, + a Vienna hotel night',
 why:'Recorded so it is not re-litigated. The <b>only</b> Vienna variant that truly lands Oct 30 morning is '
   +'flying out of Dubrovnik on <b>Oct 27</b> and spending three nights in Vienna — the airfare is trivial '
   +'($285 for five) but it costs 3 Croatia nights and $600–900 of Vienna hotel.',
 risk:'Ryanair\'s Vienna→Warsaw route terminated Oct 24 2026. Vienna is not a path to Warsaw either.'
},

/* ───────────── 4. MAX POLAND ───────────── */
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
  {date:'Mon Nov 2', no:'SK ••• + SK 935', carrier:'SAS', ac:'A350-900 on the ocean leg',
   via:'Copenhagen',
   from:{code:'KRK',city:'Kraków',t:'10:15'}, to:{code:'SFO',city:'San Francisco',t:'14:40'},
   dur:'13h 35m', stops:1,
   cabins:[
     {name:'Economy × 5', cash:3362, for:'all 5', bed:'n', cfg:[3,3,3], st:'e', cfgL:'3-3-3', pts:125000, fees:875},
     {name:'Business × 2', biz:true, cash:5800, for:'2 seats', bed:'y', cfg:[1,2,1], st:'f',
      cfgL:'1-2-1 · 78in flat', pts:120000, fees:224}
   ]}
 ],
 total:3554, totalN:'economy · Oct 26 + Nov 2',
 why:'The max-Poland bookend to the max-Croatia pick. $65 more in air, and it trades six Croatia nights '
   +'for six Kraków nights. Kraków lodging runs ~$112/night against Dubrovnik\'s ~$110 — so the swap is '
   +'close to cost-neutral and comes down to which place you would rather be.'
}
];

/* ═══ business vs economy on the exits ═══ */
window.__CABIN__ = [
 {city:'Kraków', bed:'y',
  detail:'SAS · KRK 10:15 → Copenhagen 45m → <b>SK935</b> A350-900 → SFO 14:40 · 13h 35m · cheapest Poland exit found',
  econ5:3362, econX:'$672 each · 3-3-3 on the A350 · or 125,000 Flying Blue + ~$875',
  biz2:5800, bizX:'~$2,900 each · 1-2-1 Thompson Vantage XL · 78in fully flat · 22in wide · every seat has direct aisle access',
  mix:'195,000 pts + ~$560', mixX:'2 business at 60,000 each + 3 economy at 25,000 each. The Kraków feeder is free under origin-destination pricing. Cash equivalent ≈ $7,816.'},

 {city:'Warsaw', bed:'y',
  detail:'KLM · WAW 06:00 → Amsterdam → <b>KL605</b> 787-10 → SFO · ~14h 55m · <b>the LOT nonstop is dead</b>',
  econ5:3674, econX:'$735 each · 3-3-3 on the 787-10 · Nov 2 spikes to $4,538, the opposite of Kraków',
  biz2:5800, bizX:'~$2,900 each · 1-2-1 Jamco Venture reverse-herringbone · fully flat 78-81in · no privacy doors on the 787 subfleet',
  mix:'195,000 pts + ~$1,425', mixX:'Same miles, but Amsterdam carries higher surcharges than Copenhagen — roughly $865 more in fees for the identical redemption.'},

 {city:'Vienna', bed:'n',
  detail:'Austrian\'s Vienna–SFO nonstop ended Feb 28 2026 and was never refiled · connection only',
  econ5:3900, econX:'planning band · routes via Frankfurt, Zurich or Amsterdam',
  biz2:null, bizX:'Depends entirely on which hub you connect through — Vienna itself offers no transatlantic metal',
  mix:'—', mixX:'Vienna\'s only remaining value on this trip is as a Ryanair landing point out of Dubrovnik on Oct 30.'},

 {city:'Prague', bed:'y',
  detail:'No nonstop has ever existed · connects via Amsterdam, Paris or Frankfurt',
  econ5:3550, econX:'planning band for 5',
  biz2:5800, bizX:'Whatever the hub flies — via Amsterdam you get the same KL605 787-10 flat bed',
  mix:'195,000 pts', mixX:'Identical Flying Blue pricing. The feeder is free either way.'},

 {city:'Zagreb', bed:'y',
  detail:'A terrible cash exit at $4,068 for five · only worth it if you route on to London first',
  econ5:4068, econX:'$814 each · the most expensive economy exit in the study',
  biz2:5800, bizX:'Same hub metal, but you pay a premium to get out of Zagreb before you even reach the ocean',
  mix:'195,000 pts', mixX:'The points price is flat regardless of origin, which is the one thing that makes Zagreb tolerable.'}
];

/* ═══ itinerary rows ═══ */
window.__ITIN__ = [
 {d:'Sun Oct 25', t:'Dubrovnik — extend, do not check out', s:'2BR apartment sleeping 5, Lapad or Babin Kuk. 6 nights.', c:'$675'},
 {d:'Sat Oct 31', fn:'FR 5916', t:'DBV 09:15 → KRK 10:55', s:'Ryanair (Buzz) · Boeing 737-800 · 1h40 nonstop · economy 3-3 · 5 seats verified', c:'$127'},
 {d:'Sat Oct 31', t:'All Saints\' Eve — Salwator & Rakowicki', s:'Graves already lit; hillside view over the city from Salwator', c:'free'},
 {d:'Sun Nov 1', t:'All Saints — Rakowicki cemetery', s:'Evening concert ~19:00 · late trams · bank holiday, museums closed', c:'free'},
 {d:'Oct 31 – Nov 2', t:'Kraków lodging — 2 nights', s:'~$126/night for five', c:'$252'},
 {d:'Mon Nov 2', fn:'SK •••', t:'KRK 10:15 → CPH', s:'SAS feeder · economy · buy economy, the Euro business seat is not a bed', c:'incl.'},
 {d:'Mon Nov 2', fn:'SK 935', t:'CPH 12:45 → SFO 14:40', s:'Airbus A350-900 · 10h55 · economy 3-3-3 / business 1-2-1 flat 78in', c:'$3,362'},
 {d:'Mon Nov 2', t:'SFO — car is parked here', s:'Total elapsed KRK → SFO: 13h 35m', c:'—'},
 {d:'TOTAL', t:'Flights only, five people, economy', s:'Or 195,000 Flying Blue points + ~$560 for 2 flat beds + 3 economy', c:'$3,489'}
];
