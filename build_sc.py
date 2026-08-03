import re
h = open('scenarios.html').read()

DATA = '''const S=[
 {id:'p7', name:'Prague, 7 nights', pick:true, cost:5906, pts:'0',
  thesis:'Leave Dubrovnik on checkout day, no wasted night, and Prague is the only capital fully OPEN on Nov 1. Highest memory in its price band.',
  rib:[['prg',7]],
  m:['$5,906','8.5','Low'],
  legs:[['Ryanair DBV→Vienna Oct 25, 10:00','$295'],['RegioJet Vienna→Prague, same day 14:39','$207'],['Prague lodging, 7 nights','$875'],['Daily burn, 7 days @ $230','$1,610'],['Activities incl. Kutná Hora bone church','$554'],['BA via LHR → SFO, Nov 1','$2,365']],
  why:'The structural unlock: Ryanair flies Dubrovnik→Vienna at 10:00 ON checkout day, and RegioJet gets you to Prague by 19:00 for $207 — live-quoted, 401 free seats. No extra Dubrovnik night, no dead day, seven full Prague nights. And Nov 1 is NOT a public holiday in Czechia, so unlike Kraków and Vienna nothing is shut.',
  against:'The $2,365 BA exit is a Nov 1 fare — Nov 2 spikes to $4,153, so the date is locked. One long travel day at the start.'},

 {id:'kfb', name:'Kraków + Flying Blue award', pick:false, cost:3536, pts:'125k',
  thesis:'The cheapest ending on the board — if five award seats exist. That is the whole bet.',
  rib:[['dbv',1],['krk',6]],
  m:['$3,536','7','High'],
  legs:[['Extra Dubrovnik night Oct 25 + burn','$395'],['Ryanair DBV→Kraków Oct 26, 15:15','$191'],['Kraków lodging, 6 nights','$702'],['Daily burn, 6 days @ $207','$1,242'],['Wieliczka, Zakopane, Dragon\\'s Den','$581'],['Flying Blue KRK→AMS→SFO Nov 1 — taxes','~$425']],
  why:'Kraków\\'s daily burn is the lowest verified anywhere — $207/day for five, with central two-bedroom apartments at $101–133/night. Flying Blue prices the whole ticket at the Amsterdam→SFO level with the Kraków feeder free.',
  against:'Award space for five is UNVERIFIED, and Flying Blue reprices the entire party ~5× to flex if even one seat is short. There is no Oct 25 flight to Kraków — Mon/Sat only — so you burn a Dubrovnik night and a dead day first. And Nov 1 is a Polish national holiday: Wieliczka and every museum closed.'},

 {id:'kdub', name:'Kraków + Dublin award exit', pick:false, cost:3744, pts:'81k Avios',
  thesis:'Same Kraków week, but the flight home is already verified bookable. Cheapest ending with no award risk.',
  rib:[['dbv',1],['krk',6],['dub',1]],
  m:['$3,744','8','Low'],
  legs:[['Extra Dubrovnik night + burn','$250'],['Ryanair DBV→Kraków Oct 26','$191'],['Kraków lodging + burn, 6 nights','$1,242'],['Activities','$300'],['Ryanair Kraków→Dublin Nov 1','$348'],['Dublin night','$440'],['EI61 award fees, 5 pax','$973']],
  why:'EI61 is the one flight home with six-plus seats confirmed on both Nov 1 and Nov 2 — 16,250 Avios each. You get Kraków\\'s cheap week and a home leg that cannot evaporate.',
  against:'Three flights instead of one, and a Dublin night at $440 that buys nothing but a connection.'},

 {id:'kldn', name:'Kraków + London exit', pick:false, cost:4832, pts:'0',
  thesis:'Best all-cash ending: Kraków\\'s cheap week, then the cheapest and shortest flight home in Europe.',
  rib:[['dbv',1],['krk',6],['ldn',1]],
  m:['$4,832','8','Low'],
  legs:[['Extra Dubrovnik night','$250'],['Ryanair DBV→Kraków Oct 26','$191'],['Kraków lodging + burn','$1,242'],['Kraków→London','$240'],['London night','$500'],['Activities','$300'],['BA nonstop LHR→SFO','$2,109']],
  why:'BA flies LHR→SFO nonstop in 11h10 for $2,109–2,215 for five — the cheapest exit found anywhere, and the deepest 5-seat inventory on the board (20 priced itineraries versus Kraków\\'s handful).',
  against:'A London night at $500 is the priciest night of any scenario.'},

 {id:'vb', name:'Vienna 4 + Budapest 4', pick:false, cost:6044, pts:'0',
  thesis:'The highest memory score of any ending — two great capitals, one easy train, no wasted days.',
  rib:[['vie',4],['bud',4]],
  m:['$6,044','9','Low'],
  legs:[['Ryanair DBV→Vienna Oct 25, 10:00','$320'],['Vienna 4 nights','$260'],['Railjet Vienna→Budapest','$81'],['Budapest 4 nights','$330'],['Activities — Schönbrunn, Prater, thermal baths','$640'],['Food + local, 8 days','$1,460'],['Exit to SFO','$2,953']],
  why:'Leaves Dubrovnik on checkout day at 10:00. Vienna gives Schönbrunn zoo, the Prater and free museum entry on Austrian National Day Oct 26; Budapest gives the thermal baths. A 2h40 train between them, live-quoted at $81 for five.',
  against:'Vienna\\'s daily burn is roughly double Kraków\\'s, and Nov 1 is an Austrian public holiday.'},

 {id:'stay', name:'Stay in Dubrovnik, exit via London', pick:false, cost:6570, pts:'0',
  thesis:'Lowest effort of anything here. Seven more nights where you already are, then one London night and the nonstop home.',
  rib:[['dbv',7],['ldn',1]],
  m:['$6,570','5.5','Low'],
  legs:[['Dubrovnik lodging, 7 nights','$840'],['Daily burn @ $208','$1,456'],['Activities','$400'],['Ryanair DBV→Stansted Nov 1','$920'],['London night + transfers','$580'],['BA nonstop LHR→SFO Nov 2','$2,215']],
  why:'Nothing closes in Dubrovnik until Nov 1, lodging is $104–135/night for five, and you unpack once. The Stansted route runs the whole window, so the departure date is genuinely flexible.',
  against:'Memory score 5.5 — you have already been there a week. And the Nov 1 Ryanair fare is nearly double the Oct 25 one ($920 vs $503).'},

 {id:'tra', name:'Transylvania', pick:false, dim:true, cost:7516, pts:'0',
  thesis:'Bran Castle on actual Halloween, in the one country where Nov 1 is a working day. Highest raw memory — and the most moving parts.',
  rib:[['ldn',1],['buc',2],['bra',4],['air',1]],
  m:['$7,516','8.5','High'],
  legs:[['Dubrovnik→Stansted + hotel + Stansted→Bucharest','$1,203'],['Rental SUV, 7 days + fuel','$520'],['Bucharest 2n + Brașov 4n','$1,120'],['Daily burn @ $173 — cheapest in Europe','$1,384'],['Bran Castle, Turda salt mine, Peleș','$600'],['Exit from Bucharest','$2,689']],
  why:'Romania has the lowest daily burn found anywhere ($173/day for five). Turda Salt Mine is an underground amusement park with a Ferris wheel inside a cavern; Bran does a genuine Halloween event.',
  against:'Getting there needs a London overnight and two flights. A rental car is mandatory. The most fragile chain on the board.'},

 {id:'irl', name:'Ireland road trip', pick:false, dim:true, cost:9018, pts:'81k Avios',
  thesis:'Dublin, Galway, the Antrim coast and Púca — a real Ireland week, at the highest price here.',
  rib:[['dub',2],['gal',2],['bel',2],['dub',2]],
  m:['$9,018','8.5','Low'],
  legs:[['Ryanair DBV→Dublin Oct 25','$885'],['7-seater, 8 days + fuel','$920'],['8 nights across four bases','$2,340'],['Daily burn @ $400','$3,200'],['Activities','$700'],['EI61 award fees','$973']],
  why:'The Oct 25 Dublin flight is the only 5-seat option that day and it locks the week to Ireland — so if you take it, do Ireland properly. Cliffs of Moher, Titanic Belfast, Giant\\'s Causeway, Púca festival for Halloween.',
  against:'$9,018 — the most expensive ending, driven by a $400/day burn and eight nights of lodging.'},
];'''

h = re.sub(r'const S=\[.*?\n\];', DATA, h, flags=re.S)
h = h.replace("--c-hrv:#57ab5a;--c-end:#d4a94e;--c-air:#39414d;",
  "--c-hrv:#57ab5a;--c-end:#d4a94e;--c-air:#39414d;--c-prg:#e5734b;--c-krk:#a87fd4;--c-ldn:#7f9cd4;--c-vie:#d4a94e;--c-bud:#3fb6a8;--c-buc:#c678dd;--c-bra:#e5534b;--c-gal:#57ab5a;--c-bel:#8b949e;")
h = h.replace("const CITY={hrv:['Dubrovnik','var(--c-hrv)'],sea:['At sea','var(--c-sea)'],zag:['Zagreb','var(--c-sin)'],\n  dub:['Dublin','#57ab5a'],der:['Derry','var(--c-end)'],vie:['Vienna','#d4a94e'],spl:['Split','var(--c-sea)'],air:['Travel','var(--c-air)']};",
  "const CITY={dbv:['Dubrovnik','var(--c-hrv)'],prg:['Prague','var(--c-prg)'],krk:['Kraków','var(--c-krk)'],ldn:['London','var(--c-ldn)'],vie:['Vienna','var(--c-vie)'],bud:['Budapest','var(--c-bud)'],dub:['Dublin','#57ab5a'],buc:['Bucharest','var(--c-buc)'],bra:['Brașov','var(--c-bra)'],gal:['Galway','var(--c-gal)'],bel:['Belfast','var(--c-bel)'],air:['Travel','var(--c-air)']};")
h = h.replace("$${(10068+s.cost).toLocaleString()} in flights and beds, plus 110,500 SkyMiles and 81,250 Amex points — before the cruise and the two booked hotels.",
  "$${(10068+s.cost).toLocaleString()} in flights and beds for the whole trip, before the cruise and the two booked hotels.")
h = h.replace('<h2>Pick an ending · Oct 25 → Nov 2</h2>',
  '<h2>Eight endings · Oct 25 → Nov 2 · all priced end-to-end for five</h2>')
open('scenarios.html','w').write(h)
print('rebuilt')
