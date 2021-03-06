// Get DOM element
const elem = (selector) => {
    return document.querySelector(selector);
};

// Get DOM elements
const elems = (selector) => {
    return document.querySelectorAll(selector);
};

const language = {
    en: {
        aboutUs: "About us",
        rentsSales: "Rents-sales",
        rents: "Rents",
        tours: "Tours",
        contacts: "Contacts",
        offRoadCars: "Off-road cars",
        offRoadMotorcycles: "Off-road motorcycles",
        tires: "Tires",
        oil: "Oil",
        menu: "Menu",
        silkWayRoadTour: "Silk-way road tour",
        narynTour: "Naryn tour",
        pamirTour: "Pamir tour",
        tienShanTour: "Tien-Shan tour",
        kyrgyzstanMongoliaTour: "Kyrgyzstan-Mongolia tour",
        tosorTour: "Tosor tour",
        bartangTour: "Bartang tour",
        motorcycles: "Motorcycles",
        repairShop: "Repair Shop",
        housing: "Housing",
        saveBudget: "Save budget",
        kyrgyzstan: "Kyrgyzstan",
        discoverWithUs: "Discover with us",
        natureTravelAndEngineering: "Nature travel and engineering",
        carRent: "Car rent",
        motorcycleRent: "Motorcycle rent",
        countriesWeVisit: "Countries we visit",
        aboutKyrgyzstan: "About Kyrgyzstan",
        aboutTajikistan: "About Tajikistan",
        aboutMongolia: "About Mongolia",
        aboutChina: "About China",
        info: "Info",
        phone: "Phone: +996555550146 ",
        addressOshKyrgyzstan: "Address: Osh, Kyrgyzstan",
        index: "Index: 723500 ",
        ourPartners: "Our partners",
        allRightsReserved: "CopyrightÂ© 2021 Nte All Rights Reserved",
        // About Kyrgyzstan
        aboutKyrgyzstanPH1: "Kyrgyzstan is a mountainous country in Central Asia. It is located along the Great Silk Road, an ancient trade route between China and the Mediterranean. Snow leopards, lynxes and sheep inhabit the Tien Shan Mountains, which surround this caravan route and occupy most of the country. In the south of the country, there is the city of Osh, which has a history of more than a thousand years. It is famous for its huge bazaar, where merchants who followed the Great Silk Road once stayed.",
        aboutKyrgyzstanPH2: "Kyrgyzstan (General information)",
        aboutKyrgyzstanP1: "Location Kyrgyzstan â€” a small mountainous country in the center of the Asian continent, on one latitude with the south of Italy, Spain, Japan occupies the territory of 198,5 thousand square km. The total length of the borderline is 4500 km. In the north it borders on Kazakhstan, in the west â€” Uzbekistan and Tajikistan, and more than 900 km with China in the south.",

        aboutKyrgyzstanP2: "Mountains occupy 90% of the territory, high mountains â€” 70%, valleys â€” 10%. The south-eastern part of the country is located in the region of Karakorum highway and north-western China, where the mainstream of tourists come to Kyrgyzstan and further to Uzbekistan and Kazakhstan.",
        aboutKyrgyzstanP3: "Capital â€” Bishkek (former Frunze) 1,053,915 (2020) inhabitants. Bishkek is situated at the foothills of the Kyrgyz Ala-Too mountain range in the center of the Chu valley, 250 km away from Almaty and 600 km away from Tashkent.",
        aboutKyrgyzstanP5: "Population â€” 6,586,600 inhabitants. (2020)",
        aboutKyrgyzstanP9: "Languages â€” Kyrgyz, Russian.",
        aboutKyrgyzstanP10: "Religions â€” Islam, Christianity.",
        aboutKyrgyzstanP11: "National currency â€” 1 som = 100 tyin 1USD = 84.6 som (July 2021).",
        aboutKyrgyzstanP4: "Towns â€” Osh (1,368,054), Jalal-Abad (1,238,750) Karakol (463,900). (2020)",
        aboutKyrgyzstanP8: "Nationalities â€” Kyrgyz â€” 60%, Russian â€” 5%, Uzbek â€” 14%, Dungans, Kazakh, Tajik, Uigur, Korean â€” 2%.",
        aboutKyrgyzstanP6: "Climate â€” average: January â€” 4-14 degrees below zero, July â€” 12-37 degrees above zero. The climate is continental.",
        aboutKyrgyzstanP7: "Best travel time â€” from May to October.",
        aboutKyrgyzstanP12: "Time â€” 4 hours ahead of GMT.",
        kochkor: "Kochkor",
        kolTorLake: "Kol-Tor lake",
        barskoonWaterfall: "Barskoon waterfall",
        konorchekConyons: "Konorchek conyons",
        kegeti: "Kegeti",
        sonKolLakeWinter: "Son-kol lake winter",
        // About Tajikistan
        aboutTajikistanPH1: "Tajikistan is a country in Central Asia bordering Afghanistan, China, Kyrgyzstan and Uzbekistan. The mountainous landscape attracts lovers of mountaineering and hiking here. The Fan Mountains are located near the capital of Tajikistan. Their height is more than 5000 meters, and snow constantly lies on the peaks. In the nature, reserve there is a glacial lake Iskanderkul with turquoise water. You can see different birds here.",
        aboutTajikistanPH2: "Tajikistan (General information)",
        aboutTajikistanP1: "The border of Tajikistan is 700 kilometres long from east to west and 350 kilometres long from north to south. The country shares borders to the west and north with Uzbekistan (910 kilometers) and Kyrgyzstan (630 kilometers); to the south with Afghanistan (1,030 kilometers); and to the east with China (430 kilometers).",
        aboutTajikistanP2: "Capital â€” Dushanbe 846,400 (2020) inhabitants. Dushanbe City is the capital of the Republic of Tajikistan. As a political and administrative center, it was listed on the world map at the beginning of the XX century. it is located in the scenic and fertile Gissar Valley, at an altitude of 750 â€” 930 meters above sea level. From the north to the south it is crossed by the Varzob River, from east to the west â€” by the Kofarnikhon River.",
        aboutTajikistanP3: "Towns â€” Khujand (2,658,400), Khorugh (226,900) Qurghonteppa (3,274,900). (2020)",
        aboutTajikistanP4: "Population- 9,537,645 inhabitants. (2020)",
        aboutTajikistanP5: "Climate â€” average: January â€” 4-14 degrees below zero, July â€” 12-37 degrees above zero. The climate is continental.",
        aboutTajikistanP6: "Best travel time â€” from May to October.",
        aboutTajikistanP7: "Nationalities â€” Tajiks â€” 84%, Russian â€” 0, 5%, Uzbek â€” 8%, Dungans, Kazakh, Uigur.",
        aboutTajikistanP8: "Languages â€” Tajik, Russian.",
        aboutTajikistanP9: "Religions â€” Islam, Christianity and others.",
        aboutTajikistanP10: "National currency â€” Somoni (TJS) 1USD = 11.39 somoni (July 2021).",
        aboutTajikistanP11: "Time â€” 5 hours ahead of GMT.",
        // About Mongolia
        aboutMongoliaPH1: "Mongolia, the country of adventure, land of steppe nomads with real freedom and great history behind. Pieceful Mongol nation tribes here in Central Asia for thousands of years. Mongolians are welcome hospitality nation to introduce our nomadic lifestyle to you and proud to share their amazing history with you.",
        aboutMongoliaPH2: "Mongolia (General information)",
        aboutMongoliaP1: "Mongolia is a state in East Asia bordering Russia to the north and China to the south. Landlocked. The state is a member of almost all UN structures, as well as some CIS structures as an observer. The official language is Mongolian with Cyrillic (earlier, the old Mongolian script was used for writing).",
        aboutMongoliaP2: "Ulaanbaatar formerly anglicised as Ulan Bator is the capital and most populous city of Mongolia. The municipality is located in north-central Mongolia at an elevation of about 1,300 metres (4,300 ft) in a valley on the Tuul River. The city was originally founded in 1639 as a nomadic Buddhist monastic centre, changing location 28 times, and was permanently settled at its current location in 1778.",
        aboutMongoliaP3: "Towns â€” Erdenet (86,866), Darkhan (74,300). (2020)",
        aboutMongoliaP4: "Population- 3,353,470 inhabitants. (2020)",
        aboutMongoliaP5: "Climate â€” average: January â€” 15, -30 degrees below zero, July â€” 12-37 degrees above zero.",
        aboutMongoliaP6: "Best travel time â€” from May to October.",
        aboutMongoliaP7: "Nationalities â€” mongols â€” 94%, kazakhs â€” 0,5%, and others",
        aboutMongoliaP8: "Languages â€” mongolian",
        aboutMongoliaP9: "Religions â€” Buddhism, Islam and others",
        aboutMongoliaP10: "National currency â€” TĂ¶grĂ¶g (mnt) 1USD = 2856.8 TĂ¶grĂ¶g (July 2021).",
        aboutMongoliaP11: "Time â€” 7-8 hours ahead of GMT.",
        // About China
        aboutChinaPH1: "China is a densely populated country in East Asia with varied landscapes and topography. Here you can find meadows, deserts, mountains, lakes, rivers and coasts with a length of more than 14 thousand km. China is one of the oldest cultures on the planet, and has made famed contributions to all kinds of art, literature, architecture, engineering, and more.",
        aboutChinaPH2: "China (General information)",
        aboutChinaP1: "The capital of the country, Beijing, is famous for its modern architecture and ancient monuments, including the Forbidden City palace complex and Tiananmen Square. To the east is the world financial center Shanghai, whose silhouette is shaped by countless skyscrapers. The Great Wall of China crosses northern China, crossing it from east to west.",
        aboutChinaP2: "Capital â€” beijing 21,893,095 (2020) inhabitants. Beijing is a global city and one of the worldâ€™s leading centres for culture, diplomacy and politics, business and economics, education, language, and science and technology. It is the worldâ€™s most populous national capital city within an administrative area of 16,410.5 kmÂ˛. It is located in Northern China, and is governed as a municipality under the direct administration of the State Council with 16 urban, suburban, and rural districts.",
        aboutChinaP3: "Towns â€” Shanghai (24,237,800), Guangzhou (13,154,200) Shenzhen (13,026,600). (2020)",
        aboutChinaP4: "Population- 1,411,778,724 inhabitants. (2020)",
        aboutChinaP5: "Climate â€” The climate is changeable.",
        aboutChinaP6: "Best travel time â€” from May to October.",
        aboutChinaP11: "Time â€” 8 hours ahead of GMT.",
        aboutChinaP7: " Nationalities â€” Han Chinese â€” 91%, Zhuang â€” 1,27%, Uyghur â€” 0,75%, uzbeks, kyrgyzs, ",
        aboutChinaP8: " Languages â€” chinese, uyghur, mongolian, tibetan. ",
        aboutChinaP9: " Religions â€” 75% is non religion, 18% buddhism, 5,2% Christianity and others. ",
        aboutChinaP10: " National currency â€” Renminbi (CNY) 1USD = 6.47 Renminbi (July 2021).",
        // Off-road motorcycles
        offRoadMotorcyclesPH1: "quality and reliability begin with us.",
        offRoadMotorcyclesCarsPH2: "feel the extreme",
        offRoadMotorcyclesP1: "The Yamaha XTZ 660 Tenere touring enduro model appeared in 1991, replacing the obsolete Yamaha XT600Z Tenere. The Yamaha XTZ 660 Tenere was based on a 1-cylinder liquid-cooled 660 cc engine. see, delivering 48 hp. Other features of the Yamaha XTZ660 Tenere include a steel frame, advanced long-travel suspension in the form of a 43 mm telescopic fork and an adjustable (preload + rebound) monoshock, disc brakes front and rear, a 20-liter fuel tank and only 195 kg of curb weight.",
        offRoadMotorcyclesP2: "Without a doubt, this is one of the most versatile motorcycles ever made. It is durable. It looks great. A reliable air-cooled, 4-stroke 595cc engine powers the XT600. The 4-valve system and the clever YDIS carburetor block give the bike high torque and smooth, powerful acceleration in any frequency range, which gives it an advantage both on and off the road. The electric starter allows the motorcycle to be started at the push of a button. The robust front suspension includes all dimension changes made in 1996 to improve the stability of the motorcycle when traveling at high speed.",
        // Off-road cars
        offRoadCarsPH1: "quality and reliability begin with us.",
        offRoadCarsP1: "toyota land cruiser 105",
        offRoadCarsP2: "The car is very comfortable, capable of overcoming such obstacles and places where, it would seem, it is already impossible to pass. Not killed in the literal sense of the word 'not split' bridges give the car a sense of the presence of 'independent' suspension. Smooth when accelerating and stable on the road. Sometimes it seems that it is very slow, but remembering that this is not a racing car, but an SUV and its weight is huge, you calm down and feel confident. Especially when it comes to a country road and a country road.",
        offRoadCarsP3: "Toyota Land cruiser 76",
        offRoadCarsP4:`Toyota Land cruiser 76 
Engine volume: 4.2 Fuel 
type: Diesel Transmission: Manual 
Drive unit: Full (4WD) 
Fuel consumption: (urban) L / 100 km 19.9L 
Fuel consumption: (extra-urban) 10.2L 
Fuel consumption: (combined) 11.9L 
Fuel tank volume: 100L`,
        offRoadCarsP5: "Toyota Land cruiser 78",
        offRoadCarsP6:`Toyota Land cruiser 78
Engine volume: 4.2
Fuel type: Diesel
Transmission: Manual
Drive unit: Full (4WD)
Fuel consumption: (urban) L / 100 km
19.9L Fuel consumption: (extra-urban)
10.2L
Fuel consumption: (combined) 11.9L
Fuel tank volume: 100L`,
        offRoadCarsP7: "toyota raf 4",
        offRoadCarsP8:`Toyota RAV4
Engine volume: 2.0
Fuel type: Petrol
Transmission: Manual
Drive unit: 4WD
Fuel consumption: (urban) L / 100 km
12L Fuel consumption: (extra-urban)
9L
Fuel consumption: (combined) 10L
Fuel tank volume: 70L`,
        offRoadCarsP9: "Mitsubishi Montero Sport",
        offRoadCarsP10:`
Mitsubishi Montero Sport
Engine volume: 3.5
Fuel type: Petrol
Transmission: Automatic
Drive unit: Full(4WD)
Fuel consumption: (urban) L / 100 km
15L Fuel consumption: (extra-urban)
11L
Fuel consumption: (combined) 13L
Fuel tank volume: 90L`,
//Tours
        uniqueSensationsAwaitYou: "unique sensations await you",
        silkRoadTour: "SILK ROAD TOUR (MAY 2022)",
        silkRoadTour2: "02 MAY - 01 JUNE 2022",
        pamirTour: "PAMIR TOUR (MAY / JUNE 2022)",
        pamirTour2: "29 MAY - 11 JUNE 2022",
        mongoliaTour: "MONGOLIA TOUR 2022",
        mongoliaTour2: "JULY 10 - AUGUST 1, 2022",
        narynTour: "NARYN TOUR (JULY 2022)",
        narynTour2: "03 - 09 JULY 2022",
        bartangTour: "BARTANG TOUR 2022",
        bartangTour2: "04 - 17 SEPTEMBER 2022",
        tosorTour: "TOSOR TOUR (AUGUST 2022)",
        tosorTour2: "14 - 27 AUGUST 2022",
        tyanShanTour: "TYAN-SHAN TOUR (JUNE 2022)",
        tyanShanTour2: "05 - 18 JUNE 2022",
        learnMore: "learn more",
//Silk road tour
        silkRoadTourP1: "From Switzerland to Kyrgyzstan by motorcycle. Along the Silk Road. Ride your own motorcycle (organized return transport with a freight forwarder) or a Yamaha XT660Z with us. The reserve motorcycle (in case of a breakdown) is transported in a pickup truck along with the luggage behind the group.",
        travelDescription: "TRAVEL DESCRIPTION",
        silkRoadTourP2: "Switzerland â€” Italy â€” Greece 4 days | 1580 km. Like Marco Polo, we embark on a journey through Italy along the Silk Road. In Ancona, we take a ferry that will take us to Igoumenitsa in Greece. At 8 oâ€™clock in the morning, we dock in Greece and, having rested, drive through Thessaloniki to Kavala and spend the night in a cosy hotel.",
        silkRoadTourP3: "Turkey 7 days | 2460 km The very next day we cross the southern part of the Sea of Marmara in Canakkale and already in Asia. We will cross all of Turkey and visit, among other things, the caravanserai in Sultan Hani, Cappadocia, with its world-famous cave dwellings and churches. There is also the opportunity to take part in an impressive hot air balloon ride in Goreme. During our journey to the east, we will see the Anatolian plateau from its most beautiful side. We spend the night in good hotels.",
        silkRoadTourP4: "Iran 10 days | 2780 km Tehran, the capital of Iran, will bypass a large area in the south. To do this, we will get to know oriental fabulous cities such as Isfahan, Yazd and Mashhad during our 10-day trip to Iran. The people are very open, friendly and very helpful.",
        silkRoadTourP5: "Turkmenistan 3 days | 760 km After Ashgabat, the capital of Turkmenistan, with its magnificent buildings and unsuitable water bodies, we will visit a gas crater on our way to Khiva â€” in the middle of the desert. To really see the spectacle, we try to spend the night nearby, because this Â«hellholeÂ» only makes a real impression in the dark.",
        silkRoadTourP6: "Uzbekistan 6 days | 1080 km In Uzbekistan, we will visit the cities of Khiva, Bukhara and Samarkand, pearls of the Silk Road. In Bukhara, a German-speaking Uzbek will tell us about the sights of this old city with its imposing buildings and minarets. We will spend the night in a traditional boutique hotel in the center of the historic Old Town and in a guesthouse in Samarkand, famous for its beautiful garden and rich breakfast.",
        silkRoadTourP7: "Uzbekistan â€” Kyrgyzstan 1 day | 410 km our final stage takes us from the capital of Uzbekistan, Tashkent, along a well-developed pass to the Fergana Valley and immediately after the border with Kyrgyzstan to Osh. We use the day before flying home to visit the big bazaar in Osh and see the city. On the eve of departure, we will sit down again in comfort, taste a juicy barbecue (shashlik) with a cold beer and tell each other about the exciting journey that awaits us ahead and will be remembered for a lifetime!",
// Pamir tour

        pamirTourP1: "A very varied tour of the lowlands, river valleys and high mountains (including 1 week at an altitude of 4000 m). Riding in deserted places in the high mountains.",
        pamirTourP2: "Day 1 Arrival in Osh After the flight, you land in Osh, the second-largest city in Kyrgyzstan. You will be met and you can relax for a few hours in our hotel. After lunch, we will take a short excursion outside the city to get acquainted with motorcycles. We will spend the night in Osh.",
        pamirTourP3: "Day 2 Day trip to Lake Papan with pass Today's one-day tour (about 150 km) will first take us to Lake Papan, Osh reservoir. We drive on gravel dirt roads through a green valley and then along with one of the many passes south of the city. In the afternoon we will return to Osh along a well-developed road.",
        pamirTourP4: "Day 3 drive through the Fergana Valley of Kyrgyzstan to Khujand in Tajikistan Today's disk is long and dusty. But we are rewarded with many new, unexplored experiences that make us forget about all the efforts. And in the evening in our beautiful hotel beer is tastier.",
        pamirTourP5: "Day 4 Drive to the pass in Dushanbe. While our escort car drives through the frightening Anzob tunnel on the way to Dushanbe, we cross a 3000-meter-high pass. Since all traffic passes through a dark and wet tunnel, we have an impressive passage. We will spend the night in Dushanbe.",
        pamirTourP6: "Day 5 Kalaikum, the starting point of the Pamirs. There are two ways to get to Kalaikum: either along the winter route in southern Tajikistan or along the M41 highway through the mountains, along bumpy roads that are partially interrupted by streams. If possible, we choose the second, more difficult, but all the more attractive route. We live in a family. We have the opportunity to get to know the daily life of the Tajik family and enjoy their generous hospitality.",
        pamirTourP7: "Day 6 Transfer to Khorog. The mighty Pansch River leads us to Khorog. The river and road meander through a mesmerizing rocky gorge. On the other side of the river, almost every green spot is used as a site for an Afghan village. Khorog, a university town in the middle of the Pamirs, offers us a cosy hotel and a good dinner.",
        pamirTourP8: "Day 7 Continue to Bibi Fatima Our journey continues through the Wakhan Valley, along the Afghan border to Bibi Fatima. A separate ethnic group lives in the Bacchante Valley. These people differ from Tajiks not only in their native language but also outwardly and culturally. At Bibi Fatima, we have a beautiful view of the Wakhan Valley. Of course, we also use the hot spring, which is idyllically located in the rock crypt and invites you to take a wonderful bath with water with a temperature of over 40 degrees. We will spend the night in Bibi Fatima.",
        pamirTourP9: "Day 8 Transfer to the Pamir plateau at an altitude of 4000 m. On the way to the Pamir plateau, the air becomes thinner and thinner, but the view becomes clearer. Wild camels, yaks and a few shepherds aside, we are alone in this solitude. We spend the night in a guest house on Lake Bulunkul, we manage to visit hot springs and a 'mini-geyser'.",
        pamirTourP10: "Day 9 + 10 Along the Pamir highway Now we are on the legendary Pamir highway or M41. The road was built by the Soviet Union along the Afghan and Chinese borders. It is still partially used by Chinese vehicles today. We cross four passes at an altitude of over 4000 m. The Ak-Baital pass with a height of 4655 m is the highest of them. In Murghab, a former coal-mining town, we spend the night in a hotel and, in addition to hot springs, we can take a shower again for several days.",
        pamirTourP11: "11 + 12 days To the Karakul lake and through the Kyzyl-Art pass to Kyrgyzstan Our further journey will lead us to the picturesquely located Karakul lake. We spend the night in Karakul right on the lake. The next day we cross the last Kyzyl-Art pass with a height of 4200 m. Here we come to the border with Kyrgyzstan.",
        pamirTourP12: "Day 13 Base Camp Lenin Peak, return to Osh Before returning to Osh, we make a detour to the base camp of Lenin Peak at an altitude of over 3500 m and in good weather, we enjoy a fantastic view of this giant mountain.",
        pamirTourP13: "14-15 day Osh and travel home The last day of our Pamir tour belongs to the city of Osh. We have enough time for a city tour or a visit to the bazaar. Early the next morning we will be transferred from the hotel to the airport, from where we will head back home.",
        // Mongolia tour
        mongoliaTourP1: "We drive to Tenerife via Mongelli. We get to know a huge country, impressive rivers and lakes, endless expanses.",
        mongoliaTourP2: "Day 1 Arrival in Ulaanbaatar. We fly to Ulan Bator via Berlin or Frankfurt. After driving to the hotel, we will start with a city tour with a visit to the Gandan Monastery. We continue on to Tsongjin Boldog, 57 km east of Ulaanbaatar, where the largest equestrian monument in the world is located. Then we return to the hotel and enjoy a typical Mongolian dinner.",
        mongoliaTourP3: "Day 2 Ulan Bator â€” Amarbayasgalant After breakfast, we meet with our Mongolian partner. After a short acquaintance and handover of motorcycles, we drive north out of the city. The first 80 km we drive on a good tarmac road to get used to the motorcycles. A good descent takes us about 130 km to the Amarbayasgalant monastery. This monastery is one of 7 original monasteries that have survived to this day. We spend the night in a yurt camp.",
        mongoliaTourP4: "Day 3 Squad Amarbayasgalant We start the first 40 km off-road. Then along the tar road 60 km around the city of Erdenet to our goal for the day â€” the village of Unit. Towards evening we reach Unit through a pass on a good slope. On todayâ€™s stage, we can immerse ourselves in the typical daily life of the Mongols. We drive past yaks, yurts and meet nomads. We spend the night in a yurt camp.",
        mongoliaTourP5: "Part 4 of the day â€” Selenga River Today the route leads towards Lake Khubsugul. The landscape today is said to be similar to South Africa. We drive along a good natural road along the Selenga River, Mongoliaâ€™s third-largest river. Picnic by the river, overnight in a tent.",
        mongoliaTourP6: "Day 5 and 6 Selenga River â€” Lake Khubsugul Today we are driving along the Selenga River to Northern Mongolia. Our goal is Lake Khubsugul, to which we arrive via Murun in the late afternoon. Today is our first day of rest and we have the opportunity to swim in the lake or rent a boat. We spend the night in a yurt camp.",
        mongoliaTourP7: "Day 7 Lake Khovsgul â€” Tavan-Gol We are heading south again. Todayâ€™s shorter stage will take us to Tavan-Gol, where we spend the night in a yurt camp.",
        mongoliaTourP8: "Day 8 Tavan Gol â€” Tavan Go River Lounge In the next largest city, Murine, we make a short stop to restock. We drive first south and then back east to Ulaanbaatar. The arrival point is Tavan Gol River Lounge. Here, five rivers meet in one place. This is an interesting and beautiful area. We will drive along the river and, perhaps, have time to go fishing or boating.",
        mongoliaTourP9: "Day 9 Tavan Gol - Horgon National Park After about 150 km of trails, we will have a picnic. In the late afternoon, we will arrive at our destination in the Horgon National Park. What's special about this national park is the young volcanic mountain that erupted 8000 years ago and the Weissensee (White Lake).",
        mongoliaTourP10: "Day 10 Horgon National Park - Zencher Tsenkher Hot Springs is located southwest of Lake Ugii in a beautiful place between the steppes and wooded hills at the foot of the Khangai Mountains. On this varied journey, we sometimes cross small streams and rivers.",
        mongoliaTourP11: "Day 11 Zencher (rest day) Today we embark on a day trip to the valley that will leave a lasting impression on everyone. Riding a motorcycle through green pastures, along streams, through forests - and the nomads continue to wave at us. If you wish, you can stop at a yurt camp and pamper yourself with a massage and hot spring water.",
        mongoliaTourP12: "Day 12 Zencher - Uurtiin Tohoy Today's route of about 120 km to our day destination at Curtain Tohoy will be interesting. We pass small mountains, wide valleys and shallow running waters. A paradise for every off-road driver - you feel like unlimited freedom.",
        mongoliaTourP13: "Day 13 Uurtiin Tohoy - Hogno Haan Early in the morning, we head to Erdene Zuu monastery. It was the first Buddhist monastery in Mongolia. Further east we reach the foothills of the Gobi Desert. Our camp is located at the foot of granite rock with a magnificent view. A few kilometres from the hotel there is a magical landscape of sand dunes where you can let off some steam in the afternoon.",
        mongoliaTourP14: "Day 14 and 15 Hogno Khaan - Ulan Bator We reach our final destination Ulaanbaatar around noon on a good tarmac road. The day is free. In the early evening, we drive to the folklore centre, where folk dances, folk music, and mystical singing of the larynx are performed, and at the end of our trip, we enjoy Mongolian cuisine for the last time.",
        // Tien Shan tour
        tienShanTourP1: "Discover the most beautiful regions of Kyrgyzstan by motorcycle in two weeks.",
        tienShanTourP2: "Day 1 Arrival in Osh and test drive. Upon arrival in Osh and after a few hours of rest at the hotel, we get to know motorcycles on a short tour. We will spend the night in Osh.",
        tienShanTourP3: "Day 2 Excursion to Lake Papan with a travel card. Today's day tour will take us first to Lake Papan, Osh reservoir. We drive on gravel dirt roads through a green valley and then along with one of the many passes south of the city. On a well-developed road from China and Tajikistan, in the afternoon we return to our hotel in Osh.",
        tienShanTourP4: "Day 3 Osh via Osgon to Arslanbob Today we are the first on the main road from Osh to Bishkek before reaching the intersection with Arslanbob. This village is located in the largest walnut forest in the world. From our idyllic family, we can take a walk to the waterfall in the evening.",
        tienShanTourP5: "Day 4 To Toktogul lake After a lovely breakfast on the veranda overlooking the mountains, we say goodbye to our friendly hosts. Our goal for the day is a hotel right on the huge Toktogul reservoir. Its warm temperature invites you to take a bath.",
        tienShanTourP6: "Day 5 Transfer to Kyzyl-Oy. Having conquered the Alabel pass with a height of 3400 m, we admire the vastness of the Suusamir plateau. From there we will drive to Kyzyl-Oy to the guest house.",
        tienShanTourP7: "Day 6 Continue to Kochkor. Today's route runs from Kyzyl-Oy to Kochkor. If you wish, you can go to the old uranium mine in the city of Ming Kush. This remote location is especially useful for photographers.",
        tienShanTourP8: "Day 7 Today is a day of rest. Who wants to visit the Kyrgyz carpet production. These felt carpets, called shyrdak, are mainly made at home in the area.",
        tienShanTourP9: "If you don't want to miss out on a motorcycle ride, you can head to nearby Issyk-Kul, the world's second-largest freshwater source.",
        tienShanTourP10: "Day 8 To Naryn Early in the morning we leave the beautiful living room and set off for Naryn. We make a useful detour and follow the Naryn River through secluded valleys and gorges. The Jalpak pass 3300 m high invites you to a picnic!",
        tienShanTourP11: "Day 9 Songkol Lake, the 'pearl' of Kyrgyzstan. On this day we are going to Songkol. This wonderful lake is located on a giant plateau at an altitude of 3000 m above sea level. M., Where Kyrgyz shepherds graze their flocks in the summer months. The nights here are mostly cold and clear with stars, it is worth looking at the sky. We spend the night in comfortable yurts.",
        tienShanTourP12: "Day 10 Return to Naryn. On a different, but no less exciting route, we return to Naryn, where the day before yesterday's comfortable rooms is located.",
        tienShanTourP13: "Day 11 To the caravanserai Tash-Rabat On a good road and through a valley with many marmots, we get to Tash-Rabat, an old caravan stop at an altitude of 3000 m above sea level. We spend the night in a cosy yurt. Our host family heats up the sauna for us.",
        tienShanTourP14: "Day 12: Trekking overlooking the Naryn Valley. Today, the landscape, colours and mountain ranges change almost every hour! The highlight is the Kulak-Ashuu pass with a height of 3400 m.",
        tienShanTourP15: "We are located in the centre of the Tien Shan. This mountain range is on the border with China and gave the name to our tour. Today's stage ends in Kazarman, a gold mining town. We can shower again.",
        tienShanTourP16: "Day 13 Through the Kaldam pass to Osh The way back to Osh is long but varied. On the Kaldam Pass, 3062 meters high, snow often remains on the side of the road. We are looking forward to a comfortable hotel in Osh and a great dinner.",
        tienShanTourP17: "14 -15 day Osh and departure We spend the last day of the tour in Osh. We have time to visit the bazaar or city tour and then celebrate a successful tour. The next morning we will be taken to the airport.",
        // Tosor tour
        tosorTourP1: "Discover the most beautiful regions of Kyrgyzstan by motorcycle in two weeks. With trips through difficult terrain.",
        tosorTourP2: "Day 1 Arrival in Osh After the flight, you land in Osh, the second largest city in Kyrgyzstan. You will be picked up and you can relax for a few hours in our hotel. After lunch, we will take a short excursion outside the city to get acquainted with motorcycles. We will spend the night in Osh.",
        tosorTourP3: "Day 2 Drive to Lake Papan and the first transfer. A day tour (about 150 km) will take us to Lake Papan, Osh reservoir. We drive on gravel dirt roads through a green valley and through one of the many passes south of the city. We return along a well-developed road. We will spend the night in Osh.",
        tosorTourP4: "Day 3 Through the Kaldam pass towards Kazarman Our goal today is Kazarman, a gold rush city in central Kyrgyzstan. We choose roads with low traffic and cross the Kaldam pass with a height of 3000 m. We spend the night in a guest house with a Kyrgyz family.",
        tosorTourP5: "Day 4 Pass to the caravanserai Tash-Rabat Today the program includes two passes with a height of more than 3000 m. We enjoy the vastness and solitude of Kyrgyzstan and look at the Naryn valley. We drive along steep mountain roads, cross dry rivers and see herds of grazing sheep and yaks. Our yurt camp is located in close proximity to the caravanserai in Tash-Rabat.",
        tosorTourP6: "Day 5â€‰ F AHRT to Chatyr-Kul lake and Naryn. We make a detour to Naryn, a university town at an altitude of 2000 m, along the Chinese border to Chatyr-Kul Lake. Enduro riding on this bumpy, adventurous slope is a lot of fun. After 210 km we will have a shower and a wonderful dinner in Naryn.",
        tosorTourP7: "Day 6 Through the Tosor pass to the Issyk-Kul lake Todayâ€™s trip will take us along the Naryn River. We cross wide valleys, narrow and steep gorges and pass the 3800 m high Tosor pass, which gave the name to this journey. This unsafe route ends at Lake Issyk-Kul. It is ten times the size of Lake Constance and invites us to cool off in crystal clear waters. We will spend the night in a beautiful hostel right on the shore of the lake.",
        tosorTourP8: "Day 7 Continue to Kochkor. After the last difficult days, we relaxed a bit today. Our stage is Kochkor, famous for the production of Kyrgyz felt carpets.",
        tosorTourP9: "Day 8 Through the pass Karakul to Kyzyl-Oy The landscape of Kyrgyzstan is extremely diverse. After almost every turn, we see a new fantastic landscape. This is especially true for todayâ€™s scene. He takes us through the rarely visited pass Karakul 3400 m high to Kyzyl-Oi, located on a wild mountain river. There we enjoy Kyrgyz family hospitality.",
        tosorTourP10: "Day 9 Day tour or day of rest in Kyzyl-Oy Today is a good day for enduro riders who love steep slopes. The steep and rocky mountain trail requires maximum concentration and good driving skills from us. This one-day tour takes place in a completely deserted area. Those who prefer to relax on this day can stay in Kyzyl-Oy.",
        tosorTourP11: "Day 10 To Songkol Lake Lake Songkol is located on a huge plateau at an altitude of 3000 m and is considered the pearl of Kyrgyzstan. We reach the yurt camp right by the lake around noon. So we have plenty of time to enjoy this idyllic place and watch the shepherds walk.",
        tosorTourP12: "Day 11 Along the northern route to Kazarman. We go to Kazarman again, but this time along the northern route and enjoy a fantastic view of the Naryn valley.",
        tosorTourP13: "Day 12 Drive to Gulcha Todayâ€™s trip to Gulcha will take us through Osgon and through a wonderful gorge. This gives us a lot of opportunities to ride off-piste.",
        tosorTourP14: "Day 13 Panoramic drive and return to Osh At the end of the tour, a hefty dessert awaits us today. We drive past beautiful pastures and narrow gorges, reaching an altitude of 3500 m. We stay at this altitude for a long time and enjoy the endless panorama. Overlooking the snow-capped mountains of Kichig-Alai. Then we go down to the Ak-Buura river, along which we go back to Osh.",
        tosorTourP15: "Day 14 + 15, rest day in Osh and return flight. We use the last day to visit the bazaar or just to relax after a busy excursion. We spend the evening in a good restaurant, enjoy a juicy barbecue (barbecue) and toasts for a successful and successful tour. Early the next morning we will be transferred from the hotel to the airport for our return flight home.",
        // Bartang tour
        bartangTourP1: "A difficult tour in the centre of the Pamirs. Part of the tour is the same as the Pamir tour, but technically it is much more difficult. The tour takes place in high mountains and difficulties. We are compensated for by very secluded and unspoiled areas, breathtaking mountains and rivers.",
        bartangTourP2: "Day 1 Arrival in Osh After the flight, you land in Osh, the second-largest city in Kyrgyzstan. You will be picked up and you can relax for a few hours in our hotel. After lunch, we will take a short excursion outside the city to get acquainted with motorcycles. We will spend the night in Osh.",
        bartangTourP3: "Day 2 Transfer to Sary-Tash. A trip to Sary-Tash will take us along the Ak Bura river to a wild and romantic valley. Then continue along the fantastic panoramic road at an altitude of 3000 m to the active coal mine. We climb through a narrow gorge, cross two more passes with a height of 3500 m and get to Chon Alai (big valley), where we spend the night in Sary-Tash in a guest house.",
        bartangTourP4: "Day 3 To the lakes at the foot of Lenin Peak and Sary-Mogol. Weather permitting, today we will make a detour to the foot of Lenin Peak with its proud height of 7134 meters. This gives us the opportunity to get used to the height. In bad weather, we make this detour at the end of our tour. We will spend the night in a yurt in Sary-Mogul.",
        bartangTourP5: "Day 4 Crossing the border with Tajikistan, Karakul lake Today we are crossing the border with Tajikistan. The Kyrgyz customs post is located at the entrance to the Kyzyl-Art pass, and the Tajik customs post is about 30 km away, shortly after the top of the pass. No one seems to be in charge of the intermediate route, the road is neglected, but ideal for good motorcyclists. We are now at an altitude of almost 4000 m. Our family is located right on the shores of Lake Karakul.",
        bartangTourP6: "Day 5 Pamir plateau We are going west along the Pamir Highway. In about an hour we turn off to nowhere. There is no road here, only a 5 km wide valley with several lanes. This is our way to the Bartang Valley.",
        bartangTourP7: "Day 6 At Roshorw in the Bartang Valley To get to the Bartang Valley, you need to descend into the valley along narrow, fun and gentle gravel roads. Our support mechanism succeeds. This section requires maximum concentration without mistakes. As soon as we reached the Bartang Valley, to our surprise, we saw small villages again. I wonder how and with what to survive here. We pitch our tents in an idyllic location by the river.",
        bartangTourP8: "Day 7 Transfer to Khorog Moving to Khorog, the capital of Gorno Badakhshan, as this part of Tajikistan is called, will take us along the Bartang River. It floods the street regularly. Wet feet are guaranteed. Fortunately, it is warmer here than it was the day before, and we can count on a comfortable hotel bed, warm showers and a wonderful civilized dinner.",
        bartangTourP9: "Day 8 To Lake Turumtai at an altitude of 4200 m. From Khorog, there are three ways to get to the east: the direct route M41, the Wakhan valley in the south or between them, the so-called Karl-Marx-StraĂźe. We choose the latter option and enjoy the white mountain giants, of which Marx Peak is the most famous and highest. We set up tents on Lake Turumtai. Beautiful scenery and starry nights make this camp special.",
        bartangTourP10: "Day 9 Along the Pamir highway to Khorog We return to the hotel in Khorog along the M41 highway, have a good rest and gain strength for the next adventure.",
        bartangTourP11: "Day 10 Through the Wakhan Valley to Bibi Fatima Our further journey will take us through the Wakhan Valley, along the border with Afghanistan to Bibi Fatima. A separate ethnic group lives in the Wakhan Valley. These people differ from Tajiks not only in their native language but also outwardly and culturally. At Bibi Fatima, we have a beautiful view of the Wakhan Valley. Of course, we also use the hot spring, which is idyllically located in the rock crypt and invites you to take a wonderful bath with water with a temperature of over 40 degrees. We will spend the night in a guest house in Bibi Fatima.",
        bartangTourP12: "Day 11 To Bulunkul Lake On the way to the Pamir plateau, the air becomes thinner and thinner, but the view becomes clearer and clearer. Wild camels, yaks and a few shepherds aside, we are alone in this solitude. We spend the night in a guest house on Lake Bulunkul, we manage to visit hot springs and a 'mini-geyser'.",
        bartangTourP13: "Day 12 Transfer to Murghab. We are again on the Pamir Highway or M41. The road was built by the Soviet Union along the Afghan and Chinese borders. It is still partially used by Chinese vehicles today. In Murghab, a former military base, we spend the night in a hotel, and in addition to hot springs, we can take a shower.",
        bartangTourP14: "Day 13 Return to Osh The way back goes through the Ak-Baital pass. At an altitude of 4655 m, this is the highest pass in the Pamirs. Then we cross the last pass of the tour: Kyzyl-Art 4200 m high. Here we reach the border with Kyrgyzstan and drive back to Osh via Sary-Tash.",
        bartangTourP15: "Day 14 + 15 Rest day in Osh, return flight On our last day, there is still time to visit the bazaar or just relax after a busy excursion. We will spend the evening in a good restaurant, taste a juicy shish kebab (shashlik) and fry a successful and successful tour. Early the next morning we will be transferred from the hotel to the airport for our return flight home.",
        // Naryn tour
        narynTourP1: "Drive through some of the most beautiful regions of Kyrgyzstan on a motorcycle in one week.",
        narynTourP2: "1. Arrival in Osh Kyrgyzstan After the flight, you land in Osh, the second-largest city in Kyrgyzstan. You will be picked up and you can relax for a few hours in our hotel. After lunch, we will take a short excursion outside the city to get acquainted with motorcycles. We will spend the night in Osh.",
        narynTourP3: "Day 2 Transfer to Toktogul lake. Today we are on the main road from Osh to Bishkek. First, we cross the fertile Fergana Depression, and then we are pleased with the countless bends of the Naryn River. Our goal for the day is a hotel right on the huge Toktogul reservoir. In the summer, it invites you to swim with its warm temperature.",
        narynTourP4: "Day 3 Along the Naryn river to Kyzyl-Oy After we have conquered the Alabel pass with a height of 3400 m, we admire the vastness of the Suusamir plateau, and the most daring of us taste 'Kumiz', fermented mare's milk, which is offered on the bike along the way. On a good gravel road, we drive along the picturesque KĂ¶kemeren River towards Kyzyl-Oy, to a Kyrgyz family who provides us with their home for the night.",
        narynTourP5: "Day 4 Ascent to Songkol Lake Our path lies through beautiful hills, forests and meadows. We pass a coal mine and soon see the beautiful Songkol Lake from afar. It sits on a giant plateau 3,000 meters above sea level, where Kyrgyz shepherds graze their flocks during the summer months. The nights are mostly cold and clear with stars: it is worth looking up to the sky. We spend the night in comfortable yurts. If you're lucky, you can eat freshly caught fried fish from the lake for dinner.",
        narynTourP6: "Day 5 To the caravanserai in Tash-Rabat Our destination today is the caravanserai in Tash Rabat. The road winds down the mountain in countless serpentines. We replenish stocks in Naryn. After a fantastic ride accompanied by 4000m mountains on both sides and through a valley full of marmots, we arrive at Tash Rabat, an old caravan site at 3000m above sea level. A local shower can be found in the bathhouse (local sauna). We spend the night in a cosy yurt.",
        narynTourP7: "Day 6 Crossing two passes to Kazarman Today, the landscape, colours and mountain ranges change almost every hour! The highlights of our trip are the two Kulak-Ashuu passes at 3400 m and the Kayun pass at 2930 m. Today's stage ends in Kazarman, a gold mining town.",
        narynTourP8: "Day 7 Through the Kaldam pass and back to Osh Return trip to Osh is long but varied. On the 3062 m high Kaldam Pass, snow larvae often lie along the road until June. And then we look forward to the already familiar hotel in Osh and the last wonderful dinner in Kyrgyzstan.",
        narynTourP9: "Day 8 Osh and departure Early the next morning, we are driven to the airport to fly home to the west.",
        // Repair shop
        repairShopPH1: "quality and reliable service",
        serviceDescription: "service description",
        repairShopP1: "Our company consists exclusively of professionals. We, like you, are very fond of motorcycles and off-road vehicles, and we also know many of the subtleties of its work. Like-minded people gathered under our roof, for us repairing or improving transport is not a daily routine work, but a favourite and interesting activity. You can be sure that all bolts and working parts will be of high quality and reliable. On the contrary, we will fix the faulty elements and it will work like new for further operation. We will not wind up frantic costs for repairs and do not come up with additional malfunctions. We work not for quantity but for quality, so most of our clients come to us on the recommendation of family and friends. If your transport breaks down, our service doors are always open for you.",
        selfServing: "self-serving",
        nteRepairShop: "nte repair shop",
        oilChange: "oil change",
        tiresChange: "tires change",
        tigWelding: "tig welding",
        mmaWelding: "mma welding",
        // About us
        aboutUsP1: "Company nature travel and engineering have over 20 years of experience in the marketplace. We are providing reliable, safe, quality service. The only place where you can fix or upgrade your motorcycle, car, any kind of vehicle, trusting the best mechanics in the field. Also, you can easily rent a car or motorcycle.",
        aboutUsP2: "We cooperate with Swiss tourist company Alatoo-Moto which provides an amazing, adventure tours over Middle Asia",
        aboutUsP3: "Our target",
        aboutUsP4: "Create comfort",
        aboutUsP5: "Give an unforgettable feeling",
        aboutUsP6: "Ensure safety",
        aboutUsP7: "To make you feel the whole nature of Kyrgyzstan",
        aboutUsP8: "Reach worthy heights",
        ourTeam: "our team",
        aboutUsP9: "Shohrux",
        aboutUsP10: "(Manager)",
        aboutUsP11: "Kamil",
        aboutUsP12: "(Mechanic)",
        aboutUsP13: "Kolya",
        aboutUsP14: " (Mechanic)",
        aboutUsP15: "Nafisa",
        aboutUsP16: "(chief accountant)",
        // Contacts
        contactDescription: "contact description",
        contactsAddress:`Address: Osh, Kyrgyzstan
Besh Kapa Street-101, 14
Osh postal code â€“ 723500
Tel: +996555550146
WhatsApp: +996556356666
Email: naturetravel.osh@gmail.com`,
        // Tires
        description: "DESCRIPTION",
        tiresShinko: "shinko",
        tiresMitas: "mitas",
        // Housing
        housingP1: "24 / 7 â€“ securety",
        housingP2: "24/7- free wi-fi",
        housingP3: "laundry",
        housingP4: "parking",
        housingP5: "bathroom",
        housingP6: "lavatory",
        housingP7: "kitchen",
        // 404
        error404: "ERROR 404",
        errorDescription: "It seems that something went wrong! The page you are requesting does not exist. It may be outdated, deleted, or an incorrect address was entered in the address bar.",
        // Save Budget
        saveBudgetP1: "Every person who wants to travel always thinks about the expenses of the trip or tour. That is, we all want to save our budget. Company Nature Travel Engineering, thinking about its customers, provides not only car or motorcycle rental, but also equipment rental for vehicle repair or tuning.",
        saveBudgetP2: "Nature Travel Engineering cooperates with many hotels in the city. If you want to get discounts on hotels, you can book a room with us. However, our company provides its rooms next to the office. Which in it you can park your vehicle or repair your car or motorcycle.",
    },
    ru: {
// Home
        aboutUs: "Đž Đ˝Đ°Ń?",
        rentsSales: " Đ?Ń€ĐµĐ˝Đ´Đ°-ĐżŃ€ĐľĐ´Đ°Đ¶Đ°",
        rents: "Đ?Ń€ĐµĐ˝Đ´Đ°",
        tours: "Đ˘Ń?Ń€Ń‹",
        contacts: "ĐšĐľĐ˝Ń‚Đ°ĐşŃ‚Ń‹",
        offRoadCars: "Đ’Đ˝ĐµĐ´ĐľŃ€ĐľĐ¶Đ˝Đ¸ĐşĐ¸",
        offRoadMotorcycles: "Đ’Đ˝ĐµĐ´ĐľŃ€ĐľĐ¶Đ˝Ń‹Đµ ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Ń‹",
        tires: "Đ¨Đ¸Đ˝Ń‹",
        oil: "ĐśĐ°Ń?Đ»Đľ",
        menu: "ĐśĐµĐ˝ŃŽ",
        silkWayRoadTour: "Đ˘Ń?Ń€ ĐżĐľ Ń?ĐµĐ»ĐşĐľĐ˛ĐľĐĽŃ? ĐżŃ?Ń‚Đ¸",
        narynTour: "ĐťĐ°Ń€Ń‹Đ˝ Ń‚Ń?Ń€",
        pamirTour: "ĐźĐ°ĐĽĐ¸Ń€ Ń‚Ń?Ń€",
        tienShanTour: "Đ˘ŃŹĐ˝ŃŚ Đ¨Đ°Đ˝ŃŚ Ń‚Ń?Ń€",
        kyrgyzstanMongoliaTour: "ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝-ĐśĐľĐ˝ĐłĐľĐ»Đ¸ŃŹ Ń‚Ń?Ń€",
        tosorTour: "Đ˘ĐľŃ?ĐľŃ€ Ń‚Ń?Ń€",
        bartangTour: "Đ‘Đ°Ń€Ń‚Đ°Đ˝Đł Ń‚Ń?Ń€",
        motorcycles: "ĐśĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Ń‹",
        repairShop: "Đ ĐµĐĽĐľĐ˝Ń‚Đ˝Đ°ŃŹ ĐĽĐ°Ń?Ń‚ĐµŃ€Ń?ĐşĐ°ŃŹ",
        housing: "Đ–Đ¸Đ»ŃŚĐµ",
        saveBudget: "ĐˇŃŤĐşĐľĐ˝ĐľĐĽĐ¸Ń‚ŃŚ Đ±ŃŽĐ´Đ¶ĐµŃ‚",
        kyrgyzstan: "ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝",
        discoverWithUs: "ĐŁĐ·Đ˝Đ°Đ˛Đ°ĐąŃ‚Đµ Đ˛ĐĽĐµŃ?Ń‚Đµ Ń? Đ˝Đ°ĐĽĐ¸",
        natureTravelAndEngineering: "ĐźŃ?Ń‚ĐµŃ?ĐµŃ?Ń‚Đ˛Đ¸Đµ Đ˝Đ° ĐżŃ€Đ¸Ń€ĐľĐ´Đµ Đ¸ Đ¸Đ˝Đ¶ĐµĐ˝ĐµŃ€Đ¸ŃŹ",
        carRent: "Đ?Ń€ĐµĐ˝Đ´Đ° Đ°Đ˛Ń‚Đľ",
        motorcycleRent: "Đ?Ń€ĐµĐ˝Đ´Đ° ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»ĐľĐ˛",
        countriesWeVisit: "ĐˇŃ‚Ń€Đ°Đ˝Ń‹, ĐşĐľŃ‚ĐľŃ€Ń‹Đµ ĐĽŃ‹ ĐżĐľŃ?ĐµŃ‰Đ°ĐµĐĽ",
        aboutKyrgyzstan: "Đž ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đµ",
        aboutTajikistan: "Đž Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝Đµ",
        aboutMongolia: "Đž ĐśĐľĐ˝ĐłĐľĐ»Đ¸Đ¸",
        aboutChina: "Đž ĐšĐ¸Ń‚Đ°Đµ",
        info: "Đ?Đ˝Ń„Đľ",
        phone: "Đ˘ĐµĐ»ĐµŃ„ĐľĐ˝: +996555550146 ",
        addressOshKyrgyzstan: "Đ?Đ´Ń€ĐµŃ?: ĐžŃ?, ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝",
        index: "Đ?Đ˝Đ´ĐµĐşŃ?: 723500",
        oilChange: "Đ—Đ°ĐĽĐµĐ˝Đ° ĐĽĐ°Ń?Đ»Đ°",
        ourPartners: "ĐťĐ°Ń?Đ¸ ĐżĐ°Ń€Ń‚Đ˝ĐµŃ€Ń‹",
        allRightsReserved: " CopyrightÂ© 2021 Nte Đ’Ń?Đµ ĐżŃ€Đ°Đ˛Đ° Đ·Đ°Ń‰Đ¸Ń‰ĐµĐ˝Ń‹",
// About Kyrgyzstan
        aboutKyrgyzstanPH1: "ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝ - ĐłĐľŃ€Đ˝Đ°ŃŹ Ń?Ń‚Ń€Đ°Đ˝Đ° Đ˛ Đ¦ĐµĐ˝Ń‚Ń€Đ°Đ»ŃŚĐ˝ĐľĐą Đ?Đ·Đ¸Đ¸. ĐžĐ˝ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝ Đ˛Đ´ĐľĐ»ŃŚ Đ’ĐµĐ»Đ¸ĐşĐľĐłĐľ Ń?ĐµĐ»ĐşĐľĐ˛ĐľĐłĐľ ĐżŃ?Ń‚Đ¸, Đ´Ń€ĐµĐ˛Đ˝ĐµĐłĐľ Ń‚ĐľŃ€ĐłĐľĐ˛ĐľĐłĐľ ĐżŃ?Ń‚Đ¸ ĐĽĐµĐ¶Đ´Ń? ĐšĐ¸Ń‚Đ°ĐµĐĽ Đ¸ ĐˇŃ€ĐµĐ´Đ¸Đ·ĐµĐĽĐ˝Ń‹ĐĽ ĐĽĐľŃ€ĐµĐĽ. ĐˇĐ˝ĐµĐ¶Đ˝Ń‹Đµ Đ±Đ°Ń€Ń?Ń‹, Ń€Ń‹Ń?Đ¸ Đ¸ ĐľĐ˛Ń†Ń‹ ĐľĐ±Đ¸Ń‚Đ°ŃŽŃ‚ Đ˛ ĐłĐľŃ€Đ°Ń… Đ˘ŃŹĐ˝ŃŚ-Đ¨Đ°Đ˝ŃŹ, ĐşĐľŃ‚ĐľŃ€Ń‹Đµ ĐľĐşŃ€Ń?Đ¶Đ°ŃŽŃ‚ ŃŤŃ‚ĐľŃ‚ ĐşĐ°Ń€Đ°Đ˛Đ°Đ˝Đ˝Ń‹Đą ĐżŃ?Ń‚ŃŚ Đ¸ Đ·Đ°Đ˝Đ¸ĐĽĐ°ŃŽŃ‚ Đ±ĐľĐ»ŃŚŃ?Ń?ŃŽ Ń‡Đ°Ń?Ń‚ŃŚ Ń?Ń‚Ń€Đ°Đ˝Ń‹. ĐťĐ° ŃŽĐłĐµ Ń?Ń‚Ń€Đ°Đ˝Ń‹ Đ˝Đ°Ń…ĐľĐ´Đ¸Ń‚Ń?ŃŹ ĐłĐľŃ€ĐľĐ´ ĐžŃ?, Đ¸Ń?Ń‚ĐľŃ€Đ¸ŃŹ ĐşĐľŃ‚ĐľŃ€ĐľĐłĐľ Đ˝Đ°Ń?Ń‡Đ¸Ń‚Ń‹Đ˛Đ°ĐµŃ‚ Đ±ĐľĐ»ĐµĐµ Ń‚Ń‹Ń?ŃŹŃ‡Đ¸ Đ»ĐµŃ‚. ĐžĐ˝ Đ·Đ˝Đ°ĐĽĐµĐ˝Đ¸Ń‚ Ń?Đ˛ĐľĐ¸ĐĽ ĐľĐłŃ€ĐľĐĽĐ˝Ń‹ĐĽ Đ±Đ°Đ·Đ°Ń€ĐľĐĽ, ĐłĐ´Đµ ĐşĐľĐłĐ´Đ°-Ń‚Đľ ĐľŃ?Ń‚Đ°Đ˝Đ°Đ˛Đ»Đ¸Đ˛Đ°Đ»Đ¸Ń?ŃŚ ĐşŃ?ĐżŃ†Ń‹, Ń?Đ»ĐµĐ´ĐľĐ˛Đ°Đ˛Ń?Đ¸Đµ ĐżĐľ Đ’ĐµĐ»Đ¸ĐşĐľĐĽŃ? Ń?ĐµĐ»ĐşĐľĐ˛ĐľĐĽŃ? ĐżŃ?Ń‚Đ¸.",
        aboutKyrgyzstanPH2: "ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝ (ĐžĐ±Ń‰Đ°ŃŹ Đ¸Đ˝Ń„ĐľŃ€ĐĽĐ°Ń†Đ¸ŃŹ)",
        aboutKyrgyzstanP1: "Đ Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝Đ¸Đµ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝ - Đ˝ĐµĐ±ĐľĐ»ŃŚŃ?Đ°ŃŹ ĐłĐľŃ€Đ˝Đ°ŃŹ Ń?Ń‚Ń€Đ°Đ˝Đ° Đ˛ Ń†ĐµĐ˝Ń‚Ń€Đµ Đ°Đ·Đ¸Đ°Ń‚Ń?ĐşĐľĐłĐľ ĐşĐľĐ˝Ń‚Đ¸Đ˝ĐµĐ˝Ń‚Đ°, Đ˝Đ° ĐľĐ´Đ˝ĐľĐą Ń?Đ¸Ń€ĐľŃ‚Đµ Ń? ŃŽĐłĐľĐĽ Đ?Ń‚Đ°Đ»Đ¸Đ¸, Đ?Ń?ĐżĐ°Đ˝Đ¸Đ¸, ĐŻĐżĐľĐ˝Đ¸Đ¸, Đ·Đ°Đ˝Đ¸ĐĽĐ°ĐµŃ‚ Ń‚ĐµŃ€Ń€Đ¸Ń‚ĐľŃ€Đ¸ŃŽ 198,5 Ń‚Ń‹Ń?. ĐšĐ˛. ĐšĐĽ. ĐžĐ±Ń‰Đ°ŃŹ ĐżŃ€ĐľŃ‚ŃŹĐ¶ĐµĐ˝Đ˝ĐľŃ?Ń‚ŃŚ ĐżĐľĐłŃ€Đ°Đ˝Đ¸Ń‡Đ˝ĐľĐą ĐżĐľĐ»ĐľŃ?Ń‹ Ń?ĐľŃ?Ń‚Đ°Đ˛Đ»ŃŹĐµŃ‚ 4500 ĐşĐĽ. ĐťĐ° Ń?ĐµĐ˛ĐµŃ€Đµ ĐłŃ€Đ°Đ˝Đ¸Ń‡Đ¸Ń‚ Ń? ĐšĐ°Đ·Đ°Ń…Ń?Ń‚Đ°Đ˝ĐľĐĽ, Đ˝Đ° Đ·Đ°ĐżĐ°Đ´Đµ Ń? ĐŁĐ·Đ±ĐµĐşĐ¸Ń?Ń‚Đ°Đ˝ĐľĐĽ Đ¸ Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝ĐľĐĽ, Đ° Đ˝Đ° ŃŽĐłĐµ Ń? ĐšĐ¸Ń‚Đ°ĐµĐĽ Đ±ĐľĐ»ĐµĐµ 900 ĐşĐĽ.",
        aboutKyrgyzstanP2: "Đ“ĐľŃ€Ń‹ Đ·Đ°Đ˝Đ¸ĐĽĐ°ŃŽŃ‚ 90 % Ń‚ĐµŃ€Ń€Đ¸Ń‚ĐľŃ€Đ¸Đ¸, Đ˛Ń‹Ń?ĐľĐşĐ¸Đµ ĐłĐľŃ€Ń‹ - 70 %, Đ´ĐľĐ»Đ¸Đ˝Ń‹ - 10 %. Đ®ĐłĐľ - Đ˛ĐľŃ?Ń‚ĐľŃ‡Đ˝Đ°ŃŹ Ń‡Đ°Ń?Ń‚ŃŚ Ń?Ń‚Ń€Đ°Đ˝Ń‹ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝Đ° Đ˛ Ń€Đ°ĐąĐľĐ˝Đµ ĐšĐ°Ń€Đ°ĐşĐľŃ€Ń?ĐĽŃ?ĐşĐľĐłĐľ Ń?ĐľŃ?Ń?Đµ Đ¸ Ń?ĐµĐ˛ĐµŃ€Đľ - Đ·Đ°ĐżĐ°Đ´Đ˝ĐľĐłĐľ ĐšĐ¸Ń‚Đ°ŃŹ, ĐľŃ‚ĐşŃ?Đ´Đ° ĐľŃ?Đ˝ĐľĐ˛Đ˝ĐľĐą ĐżĐľŃ‚ĐľĐş Ń‚Ń?Ń€Đ¸Ń?Ń‚ĐľĐ˛ ĐżŃ€Đ¸ĐµĐ·Đ¶Đ°ĐµŃ‚ Đ˛ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝ Đ¸ Đ´Đ°Đ»ĐµĐµ Đ˛ ĐŁĐ·Đ±ĐµĐşĐ¸Ń?Ń‚Đ°Đ˝ Đ¸ ĐšĐ°Đ·Đ°Ń…Ń?Ń‚Đ°Đ˝.",
        aboutKyrgyzstanP3: " ĐˇŃ‚ĐľĐ»Đ¸Ń†Đ° - Đ‘Đ¸Ń?ĐşĐµĐş (Đ±Ń‹Đ˛Ń?Đ¸Đą Đ¤Ń€Ń?Đ˝Đ·Đµ) 1 053,915 (2020 Đł.) Đ¶Đ¸Ń‚ĐµĐ»ĐµĐą. Đ‘Đ¸Ń?ĐşĐµĐş Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝ Ń? ĐżĐľĐ´Đ˝ĐľĐ¶Đ¸ŃŹ ĐłĐľŃ€Đ˝ĐľĐłĐľ Ń…Ń€ĐµĐ±Ń‚Đ° ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?ĐşĐ¸Đą Đ?Đ»Đ°-Đ˘ĐľĐľ Đ˛ Ń†ĐµĐ˝Ń‚Ń€Đµ Đ§Ń?ĐąŃ?ĐşĐľĐą Đ´ĐľĐ»Đ¸Đ˝Ń‹, Đ˛ 250 ĐşĐĽ ĐľŃ‚ Đ?Đ»ĐĽĐ°Ń‚Ń‹ Đ¸ Đ˛ 600 ĐşĐĽ ĐľŃ‚ Đ˘Đ°Ń?ĐşĐµĐ˝Ń‚Đ°.",
        aboutKyrgyzstanP5: " ĐťĐ°Ń?ĐµĐ»ĐµĐ˝Đ¸Đµ - 6 586 600 Đ¶Đ¸Ń‚ĐµĐ»ĐµĐą. (2020)",
        aboutKyrgyzstanP9: " ĐŻĐ·Ń‹ĐşĐ¸ - ĐşŃ‹Ń€ĐłŃ‹Đ·Ń?ĐşĐ¸Đą, Ń€Ń?Ń?Ń?ĐşĐ¸Đą.",
        aboutKyrgyzstanP10: " Đ ĐµĐ»Đ¸ĐłĐ¸Đ¸ - Đ¸Ń?Đ»Đ°ĐĽ, Ń…Ń€Đ¸Ń?Ń‚Đ¸Đ°Đ˝Ń?Ń‚Đ˛Đľ.",
        aboutKyrgyzstanP11: " ĐťĐ°Ń†Đ¸ĐľĐ˝Đ°Đ»ŃŚĐ˝Đ°ŃŹ Đ˛Đ°Đ»ŃŽŃ‚Đ° - 1 Ń?ĐľĐĽ = 100 Ń‚Ń‹Đ¸Đ˝ 1USD = 84,6 Ń?ĐľĐĽĐ° (Đ¸ŃŽĐ»ŃŚ 2021).",
        aboutKyrgyzstanP4: " Đ“ĐľŃ€ĐľĐ´Đ° - ĐžŃ? (1368 054), Đ”Đ¶Đ°Đ»Đ°Đ»-Đ?Đ±Đ°Đ´ (1 238 750), ĐšĐ°Ń€Đ°ĐşĐľĐ» (463 900). (2020)",
        aboutKyrgyzstanP8: "ĐťĐ°Ń†Đ¸ĐľĐ˝Đ°Đ»ŃŚĐ˝ĐľŃ?Ń‚Đ¸ - ĐşŃ‹Ń€ĐłŃ‹Đ·Ń‹ - 60%, Ń€Ń?Ń?Ń?ĐşĐ¸Đµ - 5%, Ń?Đ·Đ±ĐµĐşĐ¸ - 14%, Đ´Ń?Đ˝ĐłĐ°Đ˝Đµ, ĐşĐ°Đ·Đ°Ń…Đ¸, Ń‚Đ°Đ´Đ¶Ń‹ĐşĐ¸, Ń?ĐąĐłŃ?Ń€Ń‹, ĐşĐľŃ€ĐµĐąŃ†Ń‹ - 2%.",
        aboutKyrgyzstanP6: "ĐšĐ»Đ¸ĐĽĐ°Ń‚ - Ń?Ń€ĐµĐ´Đ˝Đ¸Đą: ŃŹĐ˝Đ˛Đ°Ń€ŃŚ - 4-14 ĐłŃ€Đ°Đ´Ń?Ń?ĐľĐ˛ Đ˝Đ¸Đ¶Đµ Đ˝Ń?Đ»ŃŹ, Đ¸ŃŽĐ»ŃŚ 12-37 ĐłŃ€Đ°Đ´Ń?Ń?ĐľĐ˛ Đ˛Ń‹Ń?Đµ Đ˝Ń?Đ»ŃŹ. ĐšĐ»Đ¸ĐĽĐ°Ń‚ ĐşĐľĐ˝Ń‚Đ¸Đ˝ĐµĐ˝Ń‚Đ°Đ»ŃŚĐ˝Ń‹Đą.",
        aboutKyrgyzstanP7: "Đ›Ń?Ń‡Ń?ĐµĐµ Đ˛Ń€ĐµĐĽŃŹ Đ˛ ĐżŃ?Ń‚Đ¸ - Ń? ĐĽĐ°ŃŹ ĐżĐľ ĐľĐşŃ‚ŃŹĐ±Ń€ŃŚ.",
        aboutKyrgyzstanP12: "Đ’Ń€ĐµĐĽŃŹ - Đ˝Đ° 4 Ń‡Đ°Ń?Đ° ĐľĐżĐµŃ€ĐµĐ¶Đ°ĐµŃ‚ Đ˛Ń€ĐµĐĽŃŹ ĐżĐľ Đ“Ń€Đ¸Đ˝Đ˛Đ¸Ń‡Ń?.",
        kochkor: "ĐšĐľŃ‡ĐşĐľŃ€",
        kolTorLake: "ĐžĐ·ĐµŃ€Đľ ĐšĐľĐ»ŃŚ-Đ˘ĐľŃ€",
        barskoonWaterfall: "Đ‘Đ°Ń€Ń?ĐşĐľĐľĐ˝Ń?ĐşĐ¸Đą Đ˛ĐľĐ´ĐľĐżĐ°Đ´",
        konorchekConyons: "ĐšĐ°Đ˝ŃŚĐľĐ˝ ĐšĐľĐ˝ĐľŃ€Ń‡ĐµĐş",
        kegeti: "ĐšĐµĐłĐµŃ‚Đ¸",
        sonKolLakeWinter: "ĐžĐ·ĐµŃ€Đľ Ń?ĐľĐ˝-ĐşĐľĐ»ŃŚ Đ·Đ¸ĐĽĐ°",
// About Tajikistan
        aboutTajikistanPH1: "Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝ - ĐłĐľŃ?Ń?Đ´Đ°Ń€Ń?Ń‚Đ˛Đľ Đ˛ Đ¦ĐµĐ˝Ń‚Ń€Đ°Đ»ŃŚĐ˝ĐľĐą Đ?Đ·Đ¸Đ¸, ĐłŃ€Đ°Đ˝Đ¸Ń‡Đ°Ń‰ĐµĐµ Ń? Đ?Ń„ĐłĐ°Đ˝Đ¸Ń?Ń‚Đ°Đ˝ĐľĐĽ, ĐšĐ¸Ń‚Đ°ĐµĐĽ, ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝ĐľĐĽ Đ¸ ĐŁĐ·Đ±ĐµĐşĐ¸Ń?Ń‚Đ°Đ˝ĐľĐĽ. Đ“ĐľŃ€Đ˝Ń‹Đą ĐżĐµĐąĐ·Đ°Đ¶ ĐżŃ€Đ¸Đ˛Đ»ĐµĐşĐ°ĐµŃ‚ Ń?ŃŽĐ´Đ° Đ»ŃŽĐ±Đ¸Ń‚ĐµĐ»ĐµĐą Đ°Đ»ŃŚĐżĐ¸Đ˝Đ¸Đ·ĐĽĐ° Đ¸ ĐżĐµŃ?Đ¸Ń… ĐżŃ€ĐľĐłŃ?Đ»ĐľĐş. Đ¤Đ°Đ˝Ń?ĐşĐ¸Đµ ĐłĐľŃ€Ń‹ Đ˝Đ°Ń…ĐľĐ´ŃŹŃ‚Ń?ŃŹ Đ˝ĐµĐ´Đ°Đ»ĐµĐşĐľ ĐľŃ‚ Ń?Ń‚ĐľĐ»Đ¸Ń†Ń‹ Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝Đ°. Đ?Ń… Đ˛Ń‹Ń?ĐľŃ‚Đ° Đ±ĐľĐ»ĐµĐµ 5000 ĐĽĐµŃ‚Ń€ĐľĐ˛, Đ° Đ˝Đ° Đ˛ĐµŃ€Ń?Đ¸Đ˝Đ°Ń… ĐżĐľŃ?Ń‚ĐľŃŹĐ˝Đ˝Đľ Đ»ĐµĐ¶Đ¸Ń‚ Ń?Đ˝ĐµĐł. Đ’ ĐżŃ€Đ¸Ń€ĐľĐ´Đµ Đ˝Đ° Ń‚ĐµŃ€Ń€Đ¸Ń‚ĐľŃ€Đ¸Đ¸ Đ·Đ°ĐżĐľĐ˛ĐµĐ´Đ˝Đ¸ĐşĐ° Đ˝Đ°Ń…ĐľĐ´Đ¸Ń‚Ń?ŃŹ Đ»ĐµĐ´Đ˝Đ¸ĐşĐľĐ˛ĐľĐµ ĐľĐ·ĐµŃ€Đľ Đ?Ń?ĐşĐ°Đ˝Đ´ĐµŃ€ĐşŃ?Đ»ŃŚ Ń? Đ±Đ¸Ń€ŃŽĐ·ĐľĐ˛ĐľĐą Đ˛ĐľĐ´ĐľĐą. Đ’Ń‹ ĐĽĐľĐ¶ĐµŃ‚Đµ Ń?Đ˛Đ¸Đ´ĐµŃ‚ŃŚ Ń€Đ°Đ·Đ»Đ¸Ń‡Đ˝Ń‹Ń… ĐżŃ‚Đ¸Ń† Đ·Đ´ĐµŃ?ŃŚ.",
        aboutTajikistanPH2: "Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝ (ĐžĐ±Ń‰Đ°ŃŹ Đ¸Đ˝Ń„ĐľŃ€ĐĽĐ°Ń†Đ¸ŃŹ)",
        aboutTajikistanP1: "Đ“Ń€Đ°Đ˝Đ¸Ń†Đ° Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝Đ° Đ˝Đ°Ń…ĐľĐ´Đ¸Ń‚Ń?ŃŹ Đ˛ 700 ĐşĐĽ Đ´Đ»Đ¸Đ˝ĐľĐą Ń? Đ˛ĐľŃ?Ń‚ĐľĐşĐ° Đ˝Đ° Đ·Đ°ĐżĐ°Đ´ Đ¸ 350 ĐşĐĽ Đ´Đ»Đ¸Đ˝ĐľĐą Ń? Ń?ĐµĐ˛ĐµŃ€Đ° Đ˝Đ° ŃŽĐł. ĐˇŃ‚Ń€Đ°Đ˝Đ° ĐłŃ€Đ°Đ˝Đ¸Ń‡Đ¸Ń‚ Đ˝Đ° Đ·Đ°ĐżĐ°Đ´Đµ Đ¸ Ń?ĐµĐ˛ĐµŃ€Đµ Ń? ĐŁĐ·Đ±ĐµĐşĐ¸Ń?Ń‚Đ°Đ˝ĐľĐĽ (910 ĐşĐĽ) Đ¸ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝ĐľĐĽ (630 ĐşĐĽ); Đ˝Đ° ŃŽĐłĐµ Ń? Đ?Ń„ĐłĐ°Đ˝Đ¸Ń?Ń‚Đ°Đ˝ĐľĐĽ (1,030 ĐşĐĽ); Đ¸ Đ˝Đ° Đ˛ĐľŃ?Ń‚ĐľĐş Ń? ĐšĐ¸Ń‚Đ°ĐµĐĽ (430 ĐşĐĽ).",
        aboutTajikistanP2: "ĐˇŃ‚ĐľĐ»Đ¸Ń†Đ° - Đ”Ń?Ń?Đ°Đ˝Đ±Đµ 846400 (2020 Đł.) Đ¶Đ¸Ń‚ĐµĐ»ĐµĐą. Đ“ĐľŃ€ĐľĐ´ Đ”Ń?Ń?Đ°Đ˝Đ±Đµ ŃŹĐ˛Đ»ŃŹĐµŃ‚Ń?ŃŹ Ń?Ń‚ĐľĐ»Đ¸Ń†ĐµĐą Đ ĐµŃ?ĐżŃ?Đ±Đ»Đ¸ĐşĐ¸ Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝. ĐšĐ°Đş ĐżĐľĐ»Đ¸Ń‚Đ¸Ń‡ĐµŃ?ĐşĐ¸Đą Đ¸ Đ°Đ´ĐĽĐ¸Đ˝Đ¸Ń?Ń‚Ń€Đ°Ń‚Đ¸Đ˛Đ˝Ń‹Đą Ń†ĐµĐ˝Ń‚Ń€, ĐľĐ˝ Đ±Ń‹Đ» ĐżĐµŃ€ĐµŃ‡Đ¸Ń?Đ»ĐµĐ˝ Đ˝Đ° ĐşĐ°Ń€Ń‚Đµ ĐĽĐ¸Ń€Đ° Đ˛ Đ˝Đ°Ń‡Đ°Đ»Đµ XX Đ˛ĐµĐşĐ°. ĐžĐ˝ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝ Đ˛ Đ¶Đ¸Đ˛ĐľĐżĐ¸Ń?Đ˝ĐľĐą Đ¸ ĐżĐ»ĐľĐ´ĐľŃ€ĐľĐ´Đ˝ĐľĐą Đ“Đ¸Ń?Ń?Đ°Ń€Ń?ĐşĐľĐą Đ´ĐľĐ»Đ¸Đ˝Đµ, Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 750 - 930 ĐĽĐµŃ‚Ń€ĐľĐ˛ Đ˝Đ°Đ´ Ń?Ń€ĐľĐ˛Đ˝ĐµĐĽ ĐĽĐľŃ€ŃŹ. Đˇ Ń?ĐµĐ˛ĐµŃ€Đ° Đ˝Đ° ŃŽĐł ĐµĐłĐľ ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµŃ‚ Ń€ĐµĐşĐ° Đ’Đ°Ń€Đ·ĐľĐ±, Ń? Đ˛ĐľŃ?Ń‚ĐľĐşĐ° Đ˝Đ° Đ·Đ°ĐżĐ°Đ´ - Ń€ĐµĐşĐ° ĐšĐľŃ„Đ°Ń€Đ˝Đ¸Ń…ĐľĐ˝.",
        aboutTajikistanP3: "Đ“ĐľŃ€ĐľĐ´Đ° - ĐĄŃ?Đ´Đ¶Đ°Đ˝Đ´ (2 658 400), ĐĄĐľŃ€ĐľĐł (226 900), ĐšŃ?Ń€ĐłĐ°Đ˝-Đ˘ŃŽĐ±Đµ (3 274 900). (2020)",
        aboutTajikistanP4: "ĐťĐ°Ń?ĐµĐ»ĐµĐ˝Đ¸Đµ - 9 537 645 Ń‡ĐµĐ»ĐľĐ˛ĐµĐş. (2020)",
        aboutTajikistanP5: "ĐšĐ»Đ¸ĐĽĐ°Ń‚ - Ń?Ń€ĐµĐ´Đ˝Đ¸Đą: ŃŹĐ˝Đ˛Đ°Ń€ŃŚ - 4-14 ĐłŃ€Đ°Đ´Ń?Ń?ĐľĐ˛ Đ˝Đ¸Đ¶Đµ Đ˝Ń?Đ»ŃŹ, Đ¸ŃŽĐ»ŃŚ 12-37 ĐłŃ€Đ°Đ´Ń?Ń?ĐľĐ˛ Đ˛Ń‹Ń?Đµ Đ˝Ń?Đ»ŃŹ. ĐšĐ»Đ¸ĐĽĐ°Ń‚ ĐşĐľĐ˝Ń‚Đ¸Đ˝ĐµĐ˝Ń‚Đ°Đ»ŃŚĐ˝Ń‹Đą.",
        aboutTajikistanP6: "Đ›Ń?Ń‡Ń?ĐµĐµ Đ˛Ń€ĐµĐĽŃŹ Đ˛ ĐżŃ?Ń‚Đ¸ - Ń? ĐĽĐ°ŃŹ ĐżĐľ ĐľĐşŃ‚ŃŹĐ±Ń€ŃŚ.",
        aboutTajikistanP7: "ĐťĐ°Ń†Đ¸ĐľĐ˝Đ°Đ»ŃŚĐ˝ĐľŃ?Ń‚Đ¸ - Ń‚Đ°Đ´Đ¶Đ¸ĐşĐ¸ - 84%, Ń€Ń?Ń?Ń?ĐşĐ¸Đµ - 0,5%, Ń?Đ·Đ±ĐµĐşĐ¸ - 8%, Đ´Ń?Đ˝ĐłĐ°Đ˝Đµ, ĐşĐ°Đ·Đ°Ń…Đ¸, Ń?ĐąĐłŃ?Ń€Ń‹.",
        aboutTajikistanP8: "ĐŻĐ·Ń‹ĐşĐ¸ - Ń‚Đ°Đ´Đ¶Đ¸ĐşŃ?ĐşĐ¸Đą, Ń€Ń?Ń?Ń?ĐşĐ¸Đą.",
        aboutTajikistanP9: "Đ ĐµĐ»Đ¸ĐłĐ¸Đ¸ - Đ¸Ń?Đ»Đ°ĐĽ, Ń…Ń€Đ¸Ń?Ń‚Đ¸Đ°Đ˝Ń?Ń‚Đ˛Đľ Đ¸ Đ´Ń€Ń?ĐłĐ¸Đµ.",
        aboutTajikistanP10: "ĐťĐ°Ń†Đ¸ĐľĐ˝Đ°Đ»ŃŚĐ˝Đ°ŃŹ Đ˛Đ°Đ»ŃŽŃ‚Đ° - Ń?ĐľĐĽĐľĐ˝Đ¸ (TJS) 1USD = 11,39 Ń?ĐľĐĽĐľĐ˝Đ¸ (Đ¸ŃŽĐ»ŃŚ 2021 Đł.)",
        aboutTajikistanP11: "Đ’Ń€ĐµĐĽŃŹ - Đ˝Đ° 5 Ń‡Đ°Ń?ĐľĐ˛ ĐľĐżĐµŃ€ĐµĐ¶Đ°ĐµŃ‚ Đ˛Ń€ĐµĐĽŃŹ ĐżĐľ Đ“Ń€Đ¸Đ˝Đ˛Đ¸Ń‡Ń?.",
// About Mongolia
        aboutMongoliaPH1: " ĐśĐľĐ˝ĐłĐľĐ»Đ¸ŃŹ, Ń?Ń‚Ń€Đ°Đ˝Đ° ĐżŃ€Đ¸ĐşĐ»ŃŽŃ‡ĐµĐ˝Đ¸Đą, Ń?Ń‚Ń€Đ°Đ˝Đ° Ń?Ń‚ĐµĐżĐ˝Ń‹Ń… ĐşĐľŃ‡ĐµĐ˛Đ˝Đ¸ĐşĐľĐ˛ Ń? Đ˝Đ°Ń?Ń‚ĐľŃŹŃ‰ĐµĐą Ń?Đ˛ĐľĐ±ĐľĐ´ĐľĐą Đ¸ Đ˛ĐµĐ»Đ¸ĐşĐľĐą Đ¸Ń?Ń‚ĐľŃ€Đ¸ĐµĐą. ĐˇĐľŃ‡Đ»ĐµĐ˝ĐµĐ˝Đ˝Ń‹Đµ ĐżĐ»ĐµĐĽĐµĐ˝Đ° ĐĽĐľĐ˝ĐłĐľĐ»ŃŚŃ?ĐşĐľĐą Đ˝Đ°Ń†Đ¸Đ¸ Đ·Đ´ĐµŃ?ŃŚ, Đ˛ ĐˇŃ€ĐµĐ´Đ˝ĐµĐą Đ?Đ·Đ¸Đ¸, Đ˝Đ° ĐżŃ€ĐľŃ‚ŃŹĐ¶ĐµĐ˝Đ¸Đ¸ Ń‚Ń‹Ń?ŃŹŃ‡ĐµĐ»ĐµŃ‚Đ¸Đą. ĐśĐľĐ˝ĐłĐľĐ»Ń‹ - Đ¶ĐµĐ»Đ°Đ˝Đ˝Đ°ŃŹ Đ˝Đ°Ń†Đ¸ŃŹ ĐłĐľŃ?Ń‚ĐµĐżŃ€Đ¸Đ¸ĐĽŃ?Ń‚Đ˛Đ°, Ń‡Ń‚ĐľĐ±Ń‹ ĐżĐľĐ·Đ˝Đ°ĐşĐľĐĽĐ¸Ń‚ŃŚ Đ˛Đ°Ń? Ń? Đ˝Đ°Ń?Đ¸ĐĽ ĐşĐľŃ‡ĐµĐ˛Ń‹ĐĽ ĐľĐ±Ń€Đ°Đ·ĐľĐĽ Đ¶Đ¸Đ·Đ˝Đ¸ Đ¸ Ń? ĐłĐľŃ€Đ´ĐľŃ?Ń‚ŃŚŃŽ ĐżĐľĐ´ĐµĐ»Đ¸Ń‚ŃŚŃ?ŃŹ Ń? Đ˛Đ°ĐĽĐ¸ Ń?Đ˛ĐľĐµĐą Ń?Đ´Đ¸Đ˛Đ¸Ń‚ĐµĐ»ŃŚĐ˝ĐľĐą Đ¸Ń?Ń‚ĐľŃ€Đ¸ĐµĐą.",
        aboutMongoliaPH2: " ĐśĐľĐ˝ĐłĐľĐ»Đ¸ŃŹ (ĐžĐ±Ń‰Đ°ŃŹ Đ¸Đ˝Ń„ĐľŃ€ĐĽĐ°Ń†Đ¸ŃŹ)",
        aboutMongoliaP1: " ĐśĐľĐ˝ĐłĐľĐ»Đ¸ŃŹ - ĐłĐľŃ?Ń?Đ´Đ°Ń€Ń?Ń‚Đ˛Đľ Đ˛ Đ’ĐľŃ?Ń‚ĐľŃ‡Đ˝ĐľĐą Đ?Đ·Đ¸Đ¸, ĐłŃ€Đ°Đ˝Đ¸Ń‡Đ°Ń‰ĐµĐµ Ń? Đ ĐľŃ?Ń?Đ¸ĐµĐą Đ˝Đ° Ń?ĐµĐ˛ĐµŃ€Đµ Đ¸ ĐšĐ¸Ń‚Đ°ĐµĐĽ Đ˝Đ° ŃŽĐłĐµ. ĐťĐµ Đ¸ĐĽĐµĐµŃ‚ Đ˛Ń‹Ń…ĐľĐ´Đ° Đş ĐĽĐľŃ€ŃŽ. Đ“ĐľŃ?Ń?Đ´Đ°Ń€Ń?Ń‚Đ˛Đľ ŃŹĐ˛Đ»ŃŹĐµŃ‚Ń?ŃŹ Ń‡Đ»ĐµĐ˝ĐľĐĽ ĐżŃ€Đ°ĐşŃ‚Đ¸Ń‡ĐµŃ?ĐşĐ¸ Đ˛Ń?ĐµŃ… Ń?Ń‚Ń€Ń?ĐşŃ‚Ń?Ń€ ĐžĐžĐť, Đ° Ń‚Đ°ĐşĐ¶Đµ Đ˝ĐµĐşĐľŃ‚ĐľŃ€Ń‹Ń… Ń?Ń‚Ń€Ń?ĐşŃ‚Ń?Ń€ ĐˇĐťĐ“ Đ˛ ĐşĐ°Ń‡ĐµŃ?Ń‚Đ˛Đµ Đ˝Đ°Đ±Đ»ŃŽĐ´Đ°Ń‚ĐµĐ»ŃŹ. ĐžŃ„Đ¸Ń†Đ¸Đ°Đ»ŃŚĐ˝Ń‹Đą ŃŹĐ·Ń‹Đş - ĐĽĐľĐ˝ĐłĐľĐ»ŃŚŃ?ĐşĐ¸Đą Ń? ĐşĐ¸Ń€Đ¸Đ»Đ»Đ¸Ń†ĐµĐą (Ń€Đ°Đ˝ĐµĐµ Đ´Đ»ŃŹ ĐżĐ¸Ń?ŃŚĐĽĐ° Đ¸Ń?ĐżĐľĐ»ŃŚĐ·ĐľĐ˛Đ°Đ»Đ°Ń?ŃŚ Ń?Ń‚Đ°Ń€Đ°ŃŹ ĐĽĐľĐ˝ĐłĐľĐ»ŃŚŃ?ĐşĐ°ŃŹ ĐżĐ¸Ń?ŃŚĐĽĐµĐ˝Đ˝ĐľŃ?Ń‚ŃŚ).",
        aboutMongoliaP2: " ĐŁĐ»Đ°Đ°Đ˝Đ±Đ°Đ°Ń‚Đ°Ń€, Ń€Đ°Đ˝ĐµĐµ Đ°Đ˝ĐłĐ»Đ¸Đ·Đ¸Ń€ĐľĐ˛Đ°Đ˝Đ˝Ń‹Đą Đ˛ ĐŁĐ»Đ°Đ˝-Đ‘Đ°Ń‚ĐľŃ€, ŃŹĐ˛Đ»ŃŹĐµŃ‚Ń?ŃŹ Ń?Ń‚ĐľĐ»Đ¸Ń†ĐµĐą Đ¸ Ń?Đ°ĐĽŃ‹ĐĽ ĐłŃ?Ń?Ń‚ĐľĐ˝Đ°Ń?ĐµĐ»ĐµĐ˝Đ˝Ń‹ĐĽ ĐłĐľŃ€ĐľĐ´ĐľĐĽ ĐśĐľĐ˝ĐłĐľĐ»Đ¸Đ¸. ĐśŃ?Đ˝Đ¸Ń†Đ¸ĐżĐ°Đ»Đ¸Ń‚ĐµŃ‚ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝ Đ˛ Ń?ĐµĐ˛ĐµŃ€Đľ-Ń†ĐµĐ˝Ń‚Ń€Đ°Đ»ŃŚĐ˝ĐľĐą Ń‡Đ°Ń?Ń‚Đ¸ ĐśĐľĐ˝ĐłĐľĐ»Đ¸Đ¸ Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ ĐľĐşĐľĐ»Đľ 1300 ĐĽĐµŃ‚Ń€ĐľĐ˛ (4300 Ń„Ń?Ń‚ĐľĐ˛) Đ˛ Đ´ĐľĐ»Đ¸Đ˝Đµ Ń€ĐµĐşĐ¸ Đ˘Ń?Ń?Đ». ĐźĐµŃ€Đ˛ĐľĐ˝Đ°Ń‡Đ°Đ»ŃŚĐ˝Đľ ĐłĐľŃ€ĐľĐ´ Đ±Ń‹Đ» ĐľŃ?Đ˝ĐľĐ˛Đ°Đ˝ Đ˛ 1639 ĐłĐľĐ´Ń? ĐşĐ°Đş Đ±Ń?Đ´Đ´Đ¸ĐąŃ?ĐşĐ¸Đą ĐĽĐľĐ˝Đ°Ń?Ń‚Ń‹Ń€Ń?ĐşĐ¸Đą Ń†ĐµĐ˝Ń‚Ń€ ĐşĐľŃ‡ĐµĐ˛Đ˝Đ¸ĐşĐľĐ˛, ĐşĐľŃ‚ĐľŃ€Ń‹Đą 28 Ń€Đ°Đ· ĐĽĐµĐ˝ŃŹĐ» Ń?Đ˛ĐľĐµ ĐĽĐµŃ?Ń‚ĐľĐżĐľĐ»ĐľĐ¶ĐµĐ˝Đ¸Đµ Đ¸ ĐľĐ±ĐľŃ?Đ˝ĐľĐ˛Đ°Đ»Ń?ŃŹ Đ˝Đ° Đ˝Ń‹Đ˝ĐµŃ?Đ˝ĐµĐĽ ĐĽĐµŃ?Ń‚Đµ Đ˛ 1778 ĐłĐľĐ´Ń?.",
        aboutMongoliaP3: " Đ“ĐľŃ€ĐľĐ´Đ° - Đ­Ń€Đ´ŃŤĐ˝ŃŤŃ‚ (86 866), Đ”Đ°Ń€Ń…Đ°Đ˝ (74 300). (2020)",
        aboutMongoliaP4: " ĐťĐ°Ń?ĐµĐ»ĐµĐ˝Đ¸Đµ - 3 353 470 Ń‡ĐµĐ»ĐľĐ˛ĐµĐş. (2020)",
        aboutMongoliaP5: " ĐšĐ»Đ¸ĐĽĐ°Ń‚ - Ń?Ń€ĐµĐ´Đ˝Đ¸Đą: ŃŹĐ˝Đ˛Đ°Ń€ŃŚ - 15, -30 ĐłŃ€Đ°Đ´Ń?Ń?ĐľĐ˛ Đ˝Đ¸Đ¶Đµ Đ˝Ń?Đ»ŃŹ, Đ¸ŃŽĐ»ŃŚ 12-37 ĐłŃ€Đ°Đ´Ń?Ń?ĐľĐ˛ Đ˛Ń‹Ń?Đµ Đ˝Ń?Đ»ŃŹ.",
        aboutMongoliaP6: " Đ›Ń?Ń‡Ń?ĐµĐµ Đ˛Ń€ĐµĐĽŃŹ Đ˛ ĐżŃ?Ń‚Đ¸ - Ń? ĐĽĐ°ŃŹ ĐżĐľ ĐľĐşŃ‚ŃŹĐ±Ń€ŃŚ.",
        aboutMongoliaP7: " ĐťĐ°Ń†Đ¸ĐľĐ˝Đ°Đ»ŃŚĐ˝ĐľŃ?Ń‚Đ¸ - ĐĽĐľĐ˝ĐłĐľĐ»Ń‹ - 94%, ĐşĐ°Đ·Đ°Ń…Đ¸ - 0,5% Đ¸ Đ´Ń€.",
        aboutMongoliaP8: " ĐŻĐ·Ń‹ĐşĐ¸ - ĐĽĐľĐ˝ĐłĐľĐ»ŃŚŃ?ĐşĐ¸Đą ",
        aboutMongoliaP9: " Đ ĐµĐ»Đ¸ĐłĐ¸Đ¸ - Đ±Ń?Đ´Đ´Đ¸Đ·ĐĽ, Đ¸Ń?Đ»Đ°ĐĽ Đ¸ Đ´Ń€.",
        aboutMongoliaP10: " ĐťĐ°Ń†Đ¸ĐľĐ˝Đ°Đ»ŃŚĐ˝Đ°ŃŹ Đ˛Đ°Đ»ŃŽŃ‚Đ° - Ń‚Ń?ĐłŃ€Đ¸Đş (mnt) 1USD = 2856,8 Ń‚Ń?ĐłŃ€Đ¸Đş (Đ¸ŃŽĐ»ŃŚ 2021 Đł.).",
        aboutMongoliaP11: " Đ’Ń€ĐµĐĽŃŹ - Đ˝Đ° 7-8 Ń‡Đ°Ń?ĐľĐ˛ ĐľĐżĐµŃ€ĐµĐ¶Đ°ĐµŃ‚ Đ˛Ń€ĐµĐĽŃŹ ĐżĐľ Đ“Ń€Đ¸Đ˝Đ˛Đ¸Ń‡Ń?.",
// About China
        aboutChinaPH1: "ĐšĐ¸Ń‚Đ°Đą - ĐłŃ?Ń?Ń‚ĐľĐ˝Đ°Ń?ĐµĐ»ĐµĐ˝Đ˝Đ°ŃŹ Ń?Ń‚Ń€Đ°Đ˝Đ° Đ˛ Đ’ĐľŃ?Ń‚ĐľŃ‡Đ˝ĐľĐą Đ?Đ·Đ¸Đ¸ Ń? Ń€Đ°Đ·Đ˝ĐľĐľĐ±Ń€Đ°Đ·Đ˝Ń‹ĐĽ Đ»Đ°Đ˝Đ´Ń?Đ°Ń„Ń‚ĐľĐĽ Đ¸ Ń‚ĐľĐżĐľĐłŃ€Đ°Ń„Đ¸ĐµĐą. Đ—Đ´ĐµŃ?ŃŚ ĐµŃ?Ń‚ŃŚ Đ»Ń?ĐłĐ°, ĐżŃ?Ń?Ń‚Ń‹Đ˝Đ¸, ĐłĐľŃ€Ń‹, ĐľĐ·Ń‘Ń€Đ°, Ń€ĐµĐşĐ¸ Đ¸ ĐżĐľĐ±ĐµŃ€ĐµĐ¶ŃŚŃŹ ĐżŃ€ĐľŃ‚ŃŹĐ¶ĐµĐ˝Đ˝ĐľŃ?Ń‚ŃŚŃŽ Đ±ĐľĐ»ĐµĐµ 14 Ń‚Ń‹Ń?ŃŹŃ‡ ĐşĐĽ. ĐšĐ¸Ń‚Đ°Đą - ĐľĐ´Đ¸Đ˝ Đ¸Đ· Đ´Ń€ĐµĐ˛Đ˝ĐµĐąŃ?Đ¸Ń… ĐşŃ?Đ»ŃŚŃ‚Ń?Ń€ Đ˝Đ° ĐżĐ»Đ°Đ˝ĐµŃ‚Đµ, Đ˛Đ˝ĐµŃ?Ń?Đ¸Đą ĐżŃ€ĐľŃ?Đ»Đ°Đ˛Đ»ĐµĐ˝Đ˝Ń‹Đą Đ˛ĐşĐ»Đ°Đ´ Đ˛Đľ Đ˛Ń?Đµ Đ˛Đ¸Đ´Ń‹ Đ¸Ń?ĐşŃ?Ń?Ń?Ń‚Đ˛, Đ»Đ¸Ń‚ĐµŃ€Đ°Ń‚Ń?Ń€Ń‹, Đ°Ń€Ń…Đ¸Ń‚ĐµĐşŃ‚Ń?Ń€Ń‹, Đ¸Đ˝Đ¶ĐµĐ˝ĐµŃ€Đ¸Đ¸ Đ¸ ĐĽĐ˝ĐľĐłĐľĐµ Đ´Ń€Ń?ĐłĐľĐµ.",
        aboutChinaPH2: "ĐšĐ¸Ń‚Đ°Đą (ĐžĐ±Ń‰Đ°ŃŹ Đ¸Đ˝Ń„ĐľŃ€ĐĽĐ°Ń†Đ¸ŃŹ)",
        aboutChinaP1: "ĐˇŃ‚ĐľĐ»Đ¸Ń†Đ° Ń?Ń‚Ń€Đ°Đ˝Ń‹, ĐźĐµĐşĐ¸Đ˝, Ń?Đ»Đ°Đ˛Đ¸Ń‚Ń?ŃŹ Ń?Đ˛ĐľĐµĐą Ń?ĐľĐ˛Ń€ĐµĐĽĐµĐ˝Đ˝ĐľĐą Đ°Ń€Ń…Đ¸Ń‚ĐµĐşŃ‚Ń?Ń€ĐľĐą Đ¸ Đ´Ń€ĐµĐ˛Đ˝Đ¸ĐĽĐ¸ ĐżĐ°ĐĽŃŹŃ‚Đ˝Đ¸ĐşĐ°ĐĽĐ¸, Đ˛ĐşĐ»ŃŽŃ‡Đ°ŃŹ Đ´Đ˛ĐľŃ€Ń†ĐľĐ˛Ń‹Đą ĐşĐľĐĽĐżĐ»ĐµĐşŃ? Đ—Đ°ĐżŃ€ĐµŃ‚Đ˝Ń‹Đą ĐłĐľŃ€ĐľĐ´ Đ¸ ĐżĐ»ĐľŃ‰Đ°Đ´ŃŚ Đ˘ŃŹĐ˝ŃŚĐ°Đ˝ŃŚĐĽŃŤĐ˝ŃŚ. ĐťĐ° Đ˛ĐľŃ?Ń‚ĐľĐşĐµ Đ˝Đ°Ń…ĐľĐ´Đ¸Ń‚Ń?ŃŹ ĐĽĐ¸Ń€ĐľĐ˛ĐľĐą Ń„Đ¸Đ˝Đ°Đ˝Ń?ĐľĐ˛Ń‹Đą Ń†ĐµĐ˝Ń‚Ń€ Đ¨Đ°Đ˝Ń…Đ°Đą, Ń?Đ¸Đ»Ń?ŃŤŃ‚ ĐşĐľŃ‚ĐľŃ€ĐľĐłĐľ Ń„ĐľŃ€ĐĽĐ¸Ń€Ń?ŃŽŃ‚ Đ±ĐµŃ?Ń‡Đ¸Ń?Đ»ĐµĐ˝Đ˝Ń‹Đµ Đ˝ĐµĐ±ĐľŃ?ĐşŃ€ĐµĐ±Ń‹. Đ’ĐµĐ»Đ¸ĐşĐ°ŃŹ ĐšĐ¸Ń‚Đ°ĐąŃ?ĐşĐ°ŃŹ Ń?Ń‚ĐµĐ˝Đ° ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµŃ‚ Ń?ĐµĐ˛ĐµŃ€ ĐšĐ¸Ń‚Đ°ŃŹ, ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ŃŹ ĐµĐłĐľ Ń? Đ˛ĐľŃ?Ń‚ĐľĐşĐ° Đ˝Đ° Đ·Đ°ĐżĐ°Đ´.",
        aboutChinaP2: "ĐˇŃ‚ĐľĐ»Đ¸Ń†Đ° - ĐźĐµĐşĐ¸Đ˝ 21 893 095 (2020 Đł.) Đ¶Đ¸Ń‚ĐµĐ»ĐµĐą. ĐźĐµĐşĐ¸Đ˝ - ĐłĐ»ĐľĐ±Đ°Đ»ŃŚĐ˝Ń‹Đą ĐłĐľŃ€ĐľĐ´ Đ¸ ĐľĐ´Đ¸Đ˝ Đ¸Đ· Đ˛ĐµĐ´Ń?Ń‰Đ¸Ń… ĐĽĐ¸Ń€ĐľĐ˛Ń‹Ń… Ń†ĐµĐ˝Ń‚Ń€ĐľĐ˛ ĐşŃ?Đ»ŃŚŃ‚Ń?Ń€Ń‹, Đ´Đ¸ĐżĐ»ĐľĐĽĐ°Ń‚Đ¸Đ¸ Đ¸ ĐżĐľĐ»Đ¸Ń‚Đ¸ĐşĐ¸, Đ±Đ¸Đ·Đ˝ĐµŃ?Đ° Đ¸ ŃŤĐşĐľĐ˝ĐľĐĽĐ¸ĐşĐ¸, ĐľĐ±Ń€Đ°Đ·ĐľĐ˛Đ°Đ˝Đ¸ŃŹ, ŃŹĐ·Ń‹ĐşĐ°, Đ˝Đ°Ń?ĐşĐ¸ Đ¸ Ń‚ĐµŃ…Đ˝ĐľĐ»ĐľĐłĐ¸Đą. Đ­Ń‚Đľ Ń?Đ°ĐĽĐ°ŃŹ ĐłŃ?Ń?Ń‚ĐľĐ˝Đ°Ń?ĐµĐ»ĐµĐ˝Đ˝Đ°ŃŹ Ń?Ń‚ĐľĐ»Đ¸Ń†Đ° Đ˛ ĐĽĐ¸Ń€Đµ Ń? Đ°Đ´ĐĽĐ¸Đ˝Đ¸Ń?Ń‚Ń€Đ°Ń‚Đ¸Đ˛Đ˝ĐľĐą ĐżĐ»ĐľŃ‰Đ°Đ´ŃŚŃŽ 16 410,5 ĐşĐĽÂ˛. ĐžĐ˝ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝ Đ˛ ĐˇĐµĐ˛ĐµŃ€Đ˝ĐľĐĽ ĐšĐ¸Ń‚Đ°Đµ Đ¸ Ń?ĐżŃ€Đ°Đ˛Đ»ŃŹĐµŃ‚Ń?ŃŹ ĐşĐ°Đş ĐĽŃ?Đ˝Đ¸Ń†Đ¸ĐżĐ°Đ»Đ¸,Ń‚ĐµŃ‚ ĐżĐľĐ´ ĐżŃ€ŃŹĐĽŃ‹ĐĽ Ń?ĐżŃ€Đ°Đ˛Đ»ĐµĐ˝Đ¸ĐµĐĽ Đ“ĐľŃ?Ń?Đ´Đ°Ń€Ń?Ń‚Đ˛ĐµĐ˝Đ˝ĐľĐłĐľ Ń?ĐľĐ˛ĐµŃ‚Đ° Ń? 16 ĐłĐľŃ€ĐľĐ´Ń?ĐşĐ¸ĐĽĐ¸, ĐżŃ€Đ¸ĐłĐľŃ€ĐľĐ´Đ˝Ń‹ĐĽĐ¸ Đ¸ Ń?ĐµĐ»ŃŚŃ?ĐşĐ¸ĐĽĐ¸ ĐľĐşŃ€Ń?ĐłĐ°ĐĽĐ¸.",
        aboutChinaP3: "Đ“ĐľŃ€ĐľĐ´Đ° - Đ¨Đ°Đ˝Ń…Đ°Đą (24 237 800), Đ“Ń?Đ°Đ˝Ń‡Đ¶ĐľŃ? (13 154 200), Đ¨ŃŤĐ˝ŃŚŃ‡Đ¶ŃŤĐ˝ŃŚ (13 026 600). (2020)",
        aboutChinaP4: "ĐťĐ°Ń?ĐµĐ»ĐµĐ˝Đ¸Đµ - 1 411 778 724 Ń‡ĐµĐ»ĐľĐ˛ĐµĐşĐ°. (2020)",
        aboutChinaP5: "ĐšĐ»Đ¸ĐĽĐ°Ń‚ Đ¸Đ·ĐĽĐµĐ˝Ń‡Đ¸Đ˛.",
        aboutChinaP6: "Đ›Ń?Ń‡Ń?ĐµĐµ Đ˛Ń€ĐµĐĽŃŹ Đ˛ ĐżŃ?Ń‚Đ¸ - Ń? ĐĽĐ°ŃŹ ĐżĐľ ĐľĐşŃ‚ŃŹĐ±Ń€ŃŚ.",
        aboutChinaP11: "Đ’Ń€ĐµĐĽŃŹ - Đ˝Đ° 8 Ń‡Đ°Ń?ĐľĐ˛ ĐľĐżĐµŃ€ĐµĐ¶Đ°ĐµŃ‚ Đ˛Ń€ĐµĐĽŃŹ ĐżĐľ Đ“Ń€Đ¸Đ˝Đ˛Đ¸Ń‡Ń?",
        aboutChinaP7: "ĐťĐ°Ń†Đ¸ĐľĐ˝Đ°Đ»ŃŚĐ˝ĐľŃ?Ń‚Đ¸ - Ń…Đ°Đ˝Ń?ĐşĐľĐłĐľ ĐšĐ¸Ń‚Đ°ŃŹ - 91%, Đ§Đ¶Ń?Đ°Đ˝ - 1,27%, Ń?ĐąĐłŃ?Ń€Ń‹ - 0,75%, Ń?Đ·Đ±ĐµĐşĐ¸, ĐşŃ‹Ń€ĐłŃ‹Đ·Ń‹,",
        aboutChinaP8: "ĐŻĐ·Ń‹ĐşĐ¸ - ĐşĐ¸Ń‚Đ°ĐąŃ?ĐşĐ¸Đą, Ń?ĐąĐłŃ?Ń€Ń?ĐşĐ¸Đą, ĐĽĐľĐ˝ĐłĐľĐ»ŃŚŃ?ĐşĐ¸Đą, Ń‚Đ¸Đ±ĐµŃ‚Ń?ĐşĐ¸Đą.",
        aboutChinaP9: "Đ ĐµĐ»Đ¸ĐłĐ¸Đ¸ - 75% Đ˝ĐµŃ€ĐµĐ»Đ¸ĐłĐ¸ĐľĐ·Đ˝Ń‹Đµ, 18% Đ±Ń?Đ´Đ´Đ¸Đ·ĐĽ, 5,2% Ń…Ń€Đ¸Ń?Ń‚Đ¸Đ°Đ˝Ń?Ń‚Đ˛Đľ Đ¸ Đ´Ń€Ń?ĐłĐ¸Đµ.",
        aboutChinaP10: "ĐťĐ°Ń†Đ¸ĐľĐ˝Đ°Đ»ŃŚĐ˝Đ°ŃŹ Đ˛Đ°Đ»ŃŽŃ‚Đ° - ŃŽĐ°Đ˝ŃŚ (CNY) 1USD = 6,47 Renminbi (Đ¸ŃŽĐ»ŃŚ 2021).",
//Off-road motorcycles
        offRoadMotorcyclesPH1: "ĐşĐ°Ń‡ĐµŃ?Ń‚Đ˛Đľ Đ¸ Đ˝Đ°Đ´ĐµĐ¶Đ˝ĐľŃ?Ń‚ŃŚ Đ˝Đ°Ń‡Đ¸Đ˝Đ°ŃŽŃ‚Ń?ŃŹ Ń? Đ˝Đ°Ń?.",
        offRoadMotorcyclesCarsPH2: "ĐźĐľŃ‡Ń?Đ˛Ń?Ń‚Đ˛Ń?Đą ŃŤĐşŃ?Ń‚Ń€Đ¸ĐĽ",
        offRoadMotorcyclesP1: "Đ˘Ń?Ń€Đ¸Ń?Ń‚Đ¸Ń‡ĐµŃ?ĐşĐ°ŃŹ ĐĽĐľĐ´ĐµĐ»ŃŚ ŃŤĐ˝Đ´Ń?Ń€Đľ Yamaha XTZ 660 Tenere ĐżĐľŃŹĐ˛Đ¸Đ»Đ°Ń?ŃŚ Đ˛ 1991 ĐłĐľĐ´Ń?, Đ·Đ°ĐĽĐµĐ˝Đ¸Đ˛ Ń?Ń?Ń‚Đ°Ń€ĐµĐ˛Ń?Ń?ŃŽ Yamaha XT600Z Tenere. Yamaha XTZ 660 Tenere Đ±Đ°Đ·Đ¸Ń€ĐľĐ˛Đ°Đ»Ń?ŃŹ Đ˝Đ° 1-Ń†Đ¸Đ»Đ¸Đ˝Đ´Ń€ĐľĐ˛ĐľĐĽ Đ´Đ˛Đ¸ĐłĐ°Ń‚ĐµĐ»Đµ ĐľĐ±ŃŠĐµĐĽĐľĐĽ 660 ĐşŃ?Đ±. ĐˇĐĽ Ń? Đ¶Đ¸Đ´ĐşĐľŃ?Ń‚Đ˝Ń‹ĐĽ ĐľŃ…Đ»Đ°Đ¶Đ´ĐµĐ˝Đ¸ĐµĐĽ. Ń?ĐĽ, Đ´ĐľŃ?Ń‚Đ°Đ˛Đ»ŃŹŃŹ 48 Đ»ĐľŃ?Đ°Đ´Đ¸Đ˝Ń‹Ń… Ń?Đ¸Đ». Đ”Ń€Ń?ĐłĐ¸Đµ ĐľŃ?ĐľĐ±ĐµĐ˝Đ˝ĐľŃ?Ń‚Đ¸ Yamaha XTZ660 Tenere Đ˛ĐşĐ»ŃŽŃ‡Đ°ŃŽŃ‚ Ń?Ń‚Đ°Đ»ŃŚĐ˝Ń?ŃŽ Ń€Đ°ĐĽŃ?, Ń?Ń?ĐľĐ˛ĐµŃ€Ń?ĐµĐ˝Ń?Ń‚Đ˛ĐľĐ˛Đ°Đ˝Đ˝Ń?ŃŽ Đ´Đ»Đ¸Đ˝Đ˝ĐľŃ…ĐľĐ´Đ˝Ń?ŃŽ ĐżĐľĐ´Đ˛ĐµŃ?ĐşŃ? Đ˛ Đ˛Đ¸Đ´Đµ Ń‚ĐµĐ»ĐµŃ?ĐşĐľĐżĐ¸Ń‡ĐµŃ?ĐşĐľĐą Đ˛Đ¸Đ»ĐşĐ¸ 43 ĐĽĐĽ Đ¸ Ń€ĐµĐłŃ?Đ»Đ¸Ń€Ń?ĐµĐĽŃ‹Đą (ĐżŃ€ĐµĐ´Đ˛Đ°Ń€Đ¸Ń‚ĐµĐ»ŃŚĐ˝Đ°ŃŹ Đ˝Đ°ĐłŃ€Ń?Đ·ĐşĐ° + ĐľŃ‚Ń?ĐşĐľĐş) ĐĽĐľĐ˝ĐľĐ°ĐĽĐľŃ€Ń‚Đ¸Đ·Đ°Ń‚ĐľŃ€, Đ´Đ¸Ń?ĐşĐľĐ˛Ń‹Đµ Ń‚ĐľŃ€ĐĽĐľĐ·Đ° Ń?ĐżĐµŃ€ĐµĐ´Đ¸ Đ¸ Ń?Đ·Đ°Đ´Đ¸, 20-Đ»Đ¸Ń‚Ń€ĐľĐ˛Ń‹Đą Ń‚ĐľĐżĐ»Đ¸Đ˛Đ˝Ń‹Đą Đ±Đ°Đş, Đ¸ Đ˛Ń?ĐµĐłĐľ 195 ĐşĐł Ń?Đ˝Đ°Ń€ŃŹĐ¶ĐµĐ˝Đ˝ĐľĐą ĐĽĐ°Ń?Ń?Ń‹.",
        offRoadMotorcyclesP2: "Đ‘ĐµĐ· Ń?ĐľĐĽĐ˝ĐµĐ˝Đ¸ŃŹ, ŃŤŃ‚Đľ ĐľĐ´Đ¸Đ˝ Đ¸Đ· Ń?Đ°ĐĽŃ‹Ń… Ń?Đ˝Đ¸Đ˛ĐµŃ€Ń?Đ°Đ»ŃŚĐ˝Ń‹Ń… ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»ĐľĐ˛ Đ¸Đ· ĐşĐľĐłĐ´Đ°-Đ»Đ¸Đ±Đľ Ń?ĐľĐ·Đ´Đ°Đ˝Đ˝Ń‹Ń…. ĐžĐ˝ ĐżŃ€ĐľŃ‡Đ˝Ń‹Đą. Đ­Ń‚Đľ Đ˛Ń‹ĐłĐ»ŃŹĐ´Đ¸Ń‚ Đ·Đ´ĐľŃ€ĐľĐ˛Đľ. XT600 ĐľŃ?Đ˝Đ°Ń‰ĐµĐ˝ Đ˝Đ°Đ´ĐµĐ¶Đ˝Ń‹ĐĽ 4-Ń‚Đ°ĐşŃ‚Đ˝Ń‹ĐĽ Đ´Đ˛Đ¸ĐłĐ°Ń‚ĐµĐ»ĐµĐĽ ĐľĐ±ŃŠĐµĐĽĐľĐĽ 595 ĐşŃ?Đ±. ĐˇĐĽ Ń? Đ˛ĐľĐ·Đ´Ń?Ń?Đ˝Ń‹ĐĽ ĐľŃ…Đ»Đ°Đ¶Đ´ĐµĐ˝Đ¸ĐµĐĽ. 4-ĐşĐ»Đ°ĐżĐ°Đ˝Đ˝Đ°ŃŹ Ń?Đ¸Ń?Ń‚ĐµĐĽĐ° Đ¸ ĐżŃ€ĐľĐ´Ń?ĐĽĐ°Đ˝Đ˝Ń‹Đą ĐşĐ°Ń€Đ±ŃŽŃ€Đ°Ń‚ĐľŃ€Đ˝Ń‹Đą Đ±Đ»ĐľĐş YDIS ĐżŃ€Đ¸Đ´Đ°ŃŽŃ‚ Đ±Đ°ĐąĐşŃ? Đ˛Ń‹Ń?ĐľĐşĐ¸Đą ĐşŃ€Ń?Ń‚ŃŹŃ‰Đ¸Đą ĐĽĐľĐĽĐµĐ˝Ń‚ Đ¸ ĐżĐ»Đ°Đ˛Đ˝ĐľĐµ, ĐĽĐľŃ‰Đ˝ĐľĐµ Ń?Ń?ĐşĐľŃ€ĐµĐ˝Đ¸Đµ Đ˛ Đ»ŃŽĐ±ĐľĐĽ Ń‡Đ°Ń?Ń‚ĐľŃ‚Đ˝ĐľĐĽ Đ´Đ¸Đ°ĐżĐ°Đ·ĐľĐ˝Đµ, Ń‡Ń‚Đľ Đ´Đ°ĐµŃ‚ ĐµĐĽŃ? ĐżŃ€ĐµĐ¸ĐĽŃ?Ń‰ĐµŃ?Ń‚Đ˛Đľ ĐşĐ°Đş Đ˝Đ° Đ´ĐľŃ€ĐľĐłĐµ, Ń‚Đ°Đş Đ¸ Đ˛Đ˝Đµ ĐµĐµ. Đ­Đ»ĐµĐşŃ‚Ń€Đ¸Ń‡ĐµŃ?ĐşĐ¸Đą Ń?Ń‚Đ°Ń€Ń‚ĐµŃ€ ĐżĐľĐ·Đ˛ĐľĐ»ŃŹĐµŃ‚ Đ·Đ°ĐżŃ?Ń?ĐşĐ°Ń‚ŃŚ ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ» ĐľĐ´Đ˝Đ¸ĐĽ Đ˝Đ°Đ¶Đ°Ń‚Đ¸ĐµĐĽ ĐşĐ˝ĐľĐżĐşĐ¸. ĐźŃ€ĐľŃ‡Đ˝Đ°ŃŹ ĐżĐµŃ€ĐµĐ´Đ˝ŃŹŃŹ ĐżĐľĐ´Đ˛ĐµŃ?ĐşĐ° Đ˛ĐşĐ»ŃŽŃ‡Đ°ĐµŃ‚ Đ˛ Ń?ĐµĐ±ŃŹ Đ˛Ń?Đµ Đ¸Đ·ĐĽĐµĐ˝ĐµĐ˝Đ¸ŃŹ Ń€Đ°Đ·ĐĽĐµŃ€ĐľĐ˛, Đ˛Đ˝ĐµŃ?ĐµĐ˝Đ˝Ń‹Đµ Đ˛ 1996 ĐłĐľĐ´Ń? Đ´Đ»ŃŹ ĐżĐľĐ˛Ń‹Ń?ĐµĐ˝Đ¸ŃŹ Ń?Ń?Ń‚ĐľĐąŃ‡Đ¸Đ˛ĐľŃ?Ń‚Đ¸ ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đ° ĐżŃ€Đ¸ Đ´Đ˛Đ¸Đ¶ĐµĐ˝Đ¸Đ¸ Đ˝Đ° Đ˛Ń‹Ń?ĐľĐşĐľĐą Ń?ĐşĐľŃ€ĐľŃ?Ń‚Đ¸.",
//Off-road cars
        offRoadCarsPH1: "ĐşĐ°Ń‡ĐµŃ?Ń‚Đ˛Đľ Đ¸ Đ˝Đ°Đ´ĐµĐ¶Đ˝ĐľŃ?Ń‚ŃŚ Đ˝Đ°Ń‡Đ¸Đ˝Đ°ŃŽŃ‚Ń?ŃŹ Ń? Đ˝Đ°Ń?.",
        offRoadCarsP1: "Đ˘ĐľĐąĐľŃ‚Đ° Đ›ĐµĐ˝Đ´ ĐšŃ€Ń?Đ·ĐµŃ€ 105",
        offRoadCarsP2: "Đ?Đ˛Ń‚ĐľĐĽĐľĐ±Đ¸Đ»ŃŚ ĐľŃ‡ĐµĐ˝ŃŚ ĐşĐľĐĽŃ„ĐľŃ€Ń‚Đ˝Ń‹Đą, Ń?ĐżĐľŃ?ĐľĐ±ĐµĐ˝ ĐżŃ€ĐµĐľĐ´ĐľĐ»ĐµĐ˛Đ°Ń‚ŃŚ Ń‚Đ°ĐşĐ¸Đµ ĐżŃ€ĐµĐżŃŹŃ‚Ń?Ń‚Đ˛Đ¸ŃŹ Đ¸ ĐĽĐµŃ?Ń‚Đ°, ĐłĐ´Đµ, ĐşĐ°Đ·Đ°Đ»ĐľŃ?ŃŚ Đ±Ń‹, ĐżŃ€ĐľĐµŃ…Đ°Ń‚ŃŚ Ń?Đ¶Đµ Đ˝ĐµĐ˛ĐľĐ·ĐĽĐľĐ¶Đ˝Đľ. ĐťĐµŃ?Đ±Đ¸Ń‚Ń‹Đµ Đ˛ ĐżŃ€ŃŹĐĽĐľĐĽ Ń?ĐĽŃ‹Ń?Đ»Đµ Ń?Đ»ĐľĐ˛Đ° Â«Đ˝ĐµŃ€Đ°Đ·Ń€ĐµĐ·Đ˝Ń‹ĐµÂ» ĐĽĐľŃ?Ń‚Ń‹ ĐżŃ€Đ¸Đ´Đ°ŃŽŃ‚ Đ°Đ˛Ń‚ĐľĐĽĐľĐ±Đ¸Đ»ŃŽ ĐľŃ‰Ń?Ń‰ĐµĐ˝Đ¸Đµ Đ˝Đ°Đ»Đ¸Ń‡Đ¸ŃŹ Â«Đ˝ĐµĐ·Đ°Đ˛Đ¸Ń?Đ¸ĐĽĐľĐąÂ» ĐżĐľĐ´Đ˛ĐµŃ?ĐşĐ¸. ĐźĐ»Đ°Đ˛Đ˝Ń‹Đą ĐżŃ€Đ¸ Ń€Đ°Đ·ĐłĐľĐ˝Đµ Đ¸ Ń?Ń‚Đ°Đ±Đ¸Đ»ŃŚĐ˝Ń‹Đą Đ˝Đ° Đ´ĐľŃ€ĐľĐłĐµ. Đ?Đ˝ĐľĐłĐ´Đ° ĐşĐ°Đ¶ĐµŃ‚Ń?ŃŹ, Ń‡Ń‚Đľ ĐľĐ˝ ĐľŃ‡ĐµĐ˝ŃŚ ĐĽĐµĐ´Đ»ĐµĐ˝Đ˝Ń‹Đą, Đ˝Đľ, Đ˛Ń?ĐżĐľĐĽĐ˝Đ¸Đ˛, Ń‡Ń‚Đľ ŃŤŃ‚Đľ Đ˝Đµ ĐłĐľĐ˝ĐľŃ‡Đ˝Đ°ŃŹ ĐĽĐ°Ń?Đ¸Đ˝Đ°, Đ° Đ˛Đ˝ĐµĐ´ĐľŃ€ĐľĐ¶Đ˝Đ¸Đş Đ¸ ĐµĐłĐľ Đ˛ĐµŃ? ĐľĐłŃ€ĐľĐĽĐµĐ˝, Ń?Ń?ĐżĐľĐşĐ°Đ¸Đ˛Đ°ĐµŃ?ŃŚŃ?ŃŹ Đ¸ Ń‡Ń?Đ˛Ń?Ń‚Đ˛Ń?ĐµŃ?ŃŚ Ń?ĐµĐ±ŃŹ Ń?Đ˛ĐµŃ€ĐµĐ˝Đ˝Đľ. ĐžŃ?ĐľĐ±ĐµĐ˝Đ˝Đľ ĐµŃ?Đ»Đ¸ Ń€ĐµŃ‡ŃŚ Đ¸Đ´ĐµŃ‚ Đľ ĐżŃ€ĐľŃ?ĐµĐ»ĐľŃ‡Đ˝ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ Đ¸ ĐżŃ€ĐľŃ?ĐµĐ»ĐľŃ‡Đ˝ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ.",
        offRoadCarsP3: "Đ˘ĐľĐąĐľŃ‚Đ° Đ›ĐµĐ˝Đ´ ĐšŃ€Ń?Đ·ĐµŃ€ 76",
        offRoadCarsP4:`Đ˘ĐľĐąĐľŃ‚Đ° Đ›ĐµĐ˝Đ´ ĐšŃ€Ń?Đ·ĐµŃ€ 76
ĐžĐ±ŃŠĐµĐĽ Đ´Đ˛Đ¸ĐłĐ°Ń‚ĐµĐ»ŃŹ: 4.2
Đ˘Đ¸Đż Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: Đ”Đ¸Đ·ĐµĐ»ŃŚ
Đ˘Ń€Đ°Đ˝Ń?ĐĽĐ¸Ń?Ń?Đ¸ŃŹ: ĐśĐµŃ…Đ°Đ˝Đ¸Ń‡ĐµŃ?ĐşĐ°ŃŹ
ĐźŃ€Đ¸Đ˛ĐľĐ´: ĐźĐľĐ»Đ˝Ń‹Đą (4WD)
Đ Đ°Ń?Ń…ĐľĐ´ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: (ĐłĐľŃ€ĐľĐ´Ń?ĐşĐľĐą) Đ» / 100 ĐşĐĽ
19,9Đ» Đ Đ°Ń?Ń…ĐľĐ´ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: (Đ·Đ°ĐłĐľŃ€ĐľĐ´Đ˝Ń‹Đą)
10,2Đ»
Đ Đ°Ń?Ń…ĐľĐ´ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: (Ń?ĐĽĐµŃ?Đ°Đ˝Đ˝Ń‹Đą) 11.9Đ»
ĐžĐ±ŃŠĐµĐĽ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ˝ĐľĐłĐľ Đ±Đ°ĐşĐ°: 100Đ»`,
        offRoadCarsP5: "Đ˘ĐľĐąĐľŃ‚Đ° Đ›ĐµĐ˝Đ´ ĐšŃ€Ń?Đ·ĐµŃ€ 78",
        offRoadCarsP6:`Đ˘ĐľĐąĐľŃ‚Đ° Đ›ĐµĐ˝Đ´ ĐšŃ€Ń?Đ·ĐµŃ€ 78
ĐžĐ±ŃŠĐµĐĽ Đ´Đ˛Đ¸ĐłĐ°Ń‚ĐµĐ»ŃŹ: 4.2
Đ˘Đ¸Đż Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: Đ”Đ¸Đ·ĐµĐ»ŃŚ
Đ˘Ń€Đ°Đ˝Ń?ĐĽĐ¸Ń?Ń?Đ¸ŃŹ: ĐśĐµŃ…Đ°Đ˝Đ¸Ń‡ĐµŃ?ĐşĐ°ŃŹ
ĐźŃ€Đ¸Đ˛ĐľĐ´: ĐźĐľĐ»Đ˝Ń‹Đą (4WD)
Đ Đ°Ń?Ń…ĐľĐ´ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: (ĐłĐľŃ€ĐľĐ´Ń?ĐşĐľĐą) Đ» / 100 ĐşĐĽ
19,9Đ» Đ Đ°Ń?Ń…ĐľĐ´ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: (Đ·Đ°ĐłĐľŃ€ĐľĐ´Đ˝Ń‹Đą)
10,2Đ»
Đ Đ°Ń?Ń…ĐľĐ´ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: (Ń?ĐĽĐµŃ?Đ°Đ˝Đ˝Ń‹Đą) 11.9Đ»
ĐžĐ±ŃŠĐµĐĽ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ˝ĐľĐłĐľ Đ±Đ°ĐşĐ°: 100Đ»`,
        offRoadCarsP7: " Đ˘ĐľĐąĐľŃ‚Đ° Ń€Đ°Đ˛4",
        offRoadCarsP8:`Đ˘ĐľĐąĐľŃ‚Đ° Ń€Đ°Đ˛4
ĐžĐ±ŃŠĐµĐĽ Đ´Đ˛Đ¸ĐłĐ°Ń‚ĐµĐ»ŃŹ: 2.0
Đ˘Đ¸Đż Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: Đ‘ĐµĐ˝Đ·Đ¸Đ˝
Đ˘Ń€Đ°Đ˝Ń?ĐĽĐ¸Ń?Ń?Đ¸ŃŹ: ĐśĐµŃ…Đ°Đ˝Đ¸Ń‡ĐµŃ?ĐşĐ°ŃŹ
ĐźŃ€Đ¸Đ˛ĐľĐ´: ĐźĐľĐ»Đ˝Ń‹Đą (4WD)
Đ Đ°Ń?Ń…ĐľĐ´ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: (ĐłĐľŃ€ĐľĐ´Ń?ĐşĐľĐą) Đ» / 100 ĐşĐĽ
12Đ» Đ Đ°Ń?Ń…ĐľĐ´ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: (Đ·Đ°ĐłĐľŃ€ĐľĐ´Đ˝Ń‹Đą)
9Đ»
Đ Đ°Ń?Ń…ĐľĐ´ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: (Ń?ĐĽĐµŃ?Đ°Đ˝Đ˝Ń‹Đą) 10Đ»
ĐžĐ±ŃŠĐµĐĽ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ˝ĐľĐłĐľ Đ±Đ°ĐşĐ°: 70Đ»`,
        offRoadCarsP9: "ĐśĐ¸Ń‚Ń?Ń?Đ±Đ¸Ń?Đ¸ ĐśĐľĐ˝Ń‚ĐµŃ€Đľ ĐˇĐżĐľŃ€Ń‚",
        offRoadCarsP10:`ĐśĐ¸Ń‚Ń?Ń?Đ±Đ¸Ń?Đ¸ ĐśĐľĐ˝Ń‚ĐµŃ€Đľ ĐˇĐżĐľŃ€Ń‚
ĐžĐ±ŃŠĐµĐĽ Đ´Đ˛Đ¸ĐłĐ°Ń‚ĐµĐ»ŃŹ: 3.5
Đ˘Đ¸Đż Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: Đ‘ĐµĐ˝Đ·Đ¸Đ˝
Đ˘Ń€Đ°Đ˝Ń?ĐĽĐ¸Ń?Ń?Đ¸ŃŹ: Đ?Đ˛Ń‚ĐľĐĽĐ°Ń‚Đ¸Ń‡ĐµŃ?ĐşĐ¸Đą
ĐźŃ€Đ¸Đ˛ĐľĐ´: ĐźĐľĐ»Đ˝Ń‹Đą (4WD)
Đ Đ°Ń?Ń…ĐľĐ´ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: (ĐłĐľŃ€ĐľĐ´Ń?ĐşĐľĐą) Đ» / 100 ĐşĐĽ
15Đ» Đ Đ°Ń?Ń…ĐľĐ´ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: (Đ·Đ°ĐłĐľŃ€ĐľĐ´Đ˝Ń‹Đą)
11Đ»
Đ Đ°Ń?Ń…ĐľĐ´ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ°: (Ń?ĐĽĐµŃ?Đ°Đ˝Đ˝Ń‹Đą) 13Đ»
ĐžĐ±ŃŠĐµĐĽ Ń‚ĐľĐżĐ»Đ¸Đ˛Đ˝ĐľĐłĐľ Đ±Đ°ĐşĐ°: 90Đ»`,
// Tours
        uniqueSensationsAwaitYou: "Đ˛Đ°Ń? Đ¶Đ´Ń?Ń‚ Đ˝ĐµĐżĐľĐ˛Ń‚ĐľŃ€Đ¸ĐĽŃ‹Đµ ĐľŃ‰Ń?Ń‰ĐµĐ˝Đ¸ŃŹ",
        silkRoadTour: "Đ¨ĐµĐ»ĐşĐľĐ˛Ń‹Đą ĐżŃ?Ń‚ŃŚ Ń‚Ń?Ń€ (ĐĽĐ°Đą 2022)",
        silkRoadTour2: "02 ĐĽĐ°Đą - 01 Đ¸ŃŽĐ˝ŃŚ 2022",
        pamirTour: "ĐźĐ°ĐĽĐ¸Ń€ Ń‚Ń?Ń€ (ĐĽĐ°Đą / Đ¸ŃŽĐ˝ŃŚ 2022)",
        pamirTour2: "29 ĐĽĐ°Đą - 11 Đ¸ŃŽĐ˝ŃŚ 2022",
        mongoliaTour: "ĐśĐľĐ˝ĐłĐľĐ»Đ¸ŃŹ Ń‚Ń?Ń€ 2022",
        mongoliaTour2: "Đ?ŃŽĐ»ŃŚ 10 - Đ°Đ˛ĐłŃ?Ń?Ń‚ 1, 2022",
        narynTour: "ĐťĐ°Ń€Ń‹Đ˝ Ń‚Ń?Ń€ (Đ?ŃŽĐ»ŃŚ 2022)",
        narynTour2: "03 - 09 Đ?ŃŽĐ»ŃŚ 2022",
        bartangTour: "Đ‘Đ°Ń€Ń‚Đ°Đ˝Đł Ń‚Ń?Ń€ 2022",
        bartangTour2: "04 - 17 SEPTEMBER 2022",
        tosorTour: "Đ˘ĐľŃ?ĐľŃ€ Ń‚Ń?Ń€ (Đ°Đ˛ĐłŃ?Ń?Ń‚ 2022)",
        tosorTour2: "14 - 27 Đ°Đ˛ĐłŃ?Ń?Ń‚ 2022",
        tyanShanTour: "Đ˘ŃŹĐ˝ŃŚ-Đ¨Đ°Đ˝ŃŚ Ń‚Ń?Ń€ (Đ¸ŃŽĐ˝ŃŚ 2022)",
        tyanShanTour2: "05 - 18 Đ¸ŃŽĐ˝ŃŚ 2022",
        learnMore: "ĐŁĐ·Đ˝Đ°Ń‚ŃŚ Đ±ĐľĐ»ŃŚŃ?Đµ",
//Silk road tour
        silkRoadTourP1: "Đ?Đ· Đ¨Đ˛ĐµĐąŃ†Đ°Ń€Đ¸Đ¸ Đ˛ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝ Đ˝Đ° ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đµ. ĐźĐľ Đ’ĐµĐ»Đ¸ĐşĐľĐĽŃ? Ń?ĐµĐ»ĐşĐľĐ˛ĐľĐĽŃ? ĐżŃ?Ń‚Đ¸. ĐźŃ€ĐľĐşĐ°Ń‚Đ¸Ń‚ĐµŃ?ŃŚ Đ˝Đ° Ń?ĐľĐ±Ń?Ń‚Đ˛ĐµĐ˝Đ˝ĐľĐĽ ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đµ (ĐľŃ€ĐłĐ°Đ˝Đ¸Đ·ĐľĐ˛Đ°Đ˝Đ˝Ń‹Đą ĐľĐ±Ń€Đ°Ń‚Đ˝Ń‹Đą Ń‚Ń€Đ°Đ˝Ń?ĐżĐľŃ€Ń‚ Ń? ŃŤĐşŃ?ĐżĐµĐ´Đ¸Ń‚ĐľŃ€ĐľĐĽ) Đ¸Đ»Đ¸ Đ˝Đ° Yamaha XT660Z Đ˛ĐĽĐµŃ?Ń‚Đµ Ń? Đ˝Đ°ĐĽĐ¸. Đ ĐµĐ·ĐµŃ€Đ˛Đ˝Ń‹Đą ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ» (Đ˝Đ° Ń?Đ»Ń?Ń‡Đ°Đą ĐżĐľĐ»ĐľĐĽĐşĐ¸) ĐżĐµŃ€ĐµĐ˛ĐľĐ·Đ¸Ń‚Ń?ŃŹ Đ˝Đ° ĐżĐ¸ĐşĐ°ĐżĐµ Đ˛ĐĽĐµŃ?Ń‚Đµ Ń? Đ±Đ°ĐłĐ°Đ¶ĐľĐĽ ĐżĐľĐ·Đ°Đ´Đ¸ ĐłŃ€Ń?ĐżĐżŃ‹.",
        travelDescription: "ĐžĐźĐ?ĐˇĐ?ĐťĐ?Đ• ĐźĐŁĐ˘Đ•Đ¨Đ•ĐˇĐ˘Đ’Đ?ĐŻ",
        silkRoadTourP2: "Đ¨Đ˛ĐµĐąŃ†Đ°Ń€Đ¸ŃŹ - Đ?Ń‚Đ°Đ»Đ¸ŃŹ - Đ“Ń€ĐµŃ†Đ¸ŃŹ 4 Đ´Đ˝ŃŹ | 1580 ĐşĐĽ. ĐźĐľĐ´ĐľĐ±Đ˝Đľ ĐśĐ°Ń€ĐşĐľ ĐźĐľĐ»Đľ, ĐĽŃ‹ ĐľŃ‚ĐżŃ€Đ°Đ˛Đ»ŃŹĐµĐĽŃ?ŃŹ Đ˛ ĐżŃ?Ń‚ĐµŃ?ĐµŃ?Ń‚Đ˛Đ¸Đµ ĐżĐľ Đ?Ń‚Đ°Đ»Đ¸Đ¸ ĐżĐľ Đ’ĐµĐ»Đ¸ĐşĐľĐĽŃ? Ń?ĐµĐ»ĐşĐľĐ˛ĐľĐĽŃ? ĐżŃ?Ń‚Đ¸. Đ’ Đ?Đ˝ĐşĐľĐ˝Đµ ĐĽŃ‹ Ń?ŃŹĐ´ĐµĐĽ Đ˝Đ° ĐżĐ°Ń€ĐľĐĽ, ĐşĐľŃ‚ĐľŃ€Ń‹Đą Đ´ĐľŃ?Ń‚Đ°Đ˛Đ¸Ń‚ Đ˝Đ°Ń? Đ˛ Đ?ĐłŃ?ĐĽĐµĐ˝Đ¸Ń†Ń? Đ˛ Đ“Ń€ĐµŃ†Đ¸Đ¸. Đ’ 8 Ń‡Đ°Ń?ĐľĐ˛ Ń?Ń‚Ń€Đ° ĐżŃ€Đ¸Ń‡Đ°Đ»Đ¸Đ˛Đ°ĐµĐĽ Đş Đ“Ń€ĐµŃ†Đ¸Đ¸ Đ¸, ĐľŃ‚Đ´ĐľŃ…Đ˝Ń?Đ˛, ĐµĐ´ĐµĐĽ Ń‡ĐµŃ€ĐµĐ· ĐˇĐ°Đ»ĐľĐ˝Đ¸ĐşĐ¸ Đ˛ ĐšĐ°Đ˛Đ°Đ»Ń? Đ¸ Đ˝ĐľŃ‡Ń?ĐµĐĽ Đ˛ Ń?ŃŽŃ‚Đ˝ĐľĐĽ ĐľŃ‚ĐµĐ»Đµ.",
        silkRoadTourP3: "Đ˘Ń?Ń€Ń†Đ¸ŃŹ 7 Đ´Đ˝ĐµĐą | 2460 ĐşĐĽ ĐŁĐ¶Đµ Đ˝Đ° Ń?Đ»ĐµĐ´Ń?ŃŽŃ‰Đ¸Đą Đ´ĐµĐ˝ŃŚ ĐĽŃ‹ ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµĐĽ ŃŽĐ¶Đ˝Ń?ŃŽ Ń‡Đ°Ń?Ń‚ŃŚ ĐśŃ€Đ°ĐĽĐľŃ€Đ˝ĐľĐłĐľ ĐĽĐľŃ€ŃŹ Đ˛ Đ§Đ°Đ˝Đ°ĐşĐşĐ°Đ»Đµ Đ¸ Ń?Đ¶Đµ Đ˛ Đ?Đ·Đ¸Đ¸. ĐśŃ‹ ĐżŃ€ĐľĐµĐ´ĐµĐĽ Đ˛Ń?ŃŽ Đ˘Ń?Ń€Ń†Đ¸ŃŽ Đ¸ ĐżĐľŃ?ĐµŃ‚Đ¸ĐĽ, Ń?Ń€ĐµĐ´Đ¸ ĐżŃ€ĐľŃ‡ĐµĐłĐľ, ĐşĐ°Ń€Đ°Đ˛Đ°Đ˝-Ń?Đ°Ń€Đ°Đą Đ˛ ĐˇŃ?Đ»Ń‚Đ°Đ˝-ĐĄĐ°Đ˝Đ¸, ĐšĐ°ĐżĐżĐ°Đ´ĐľĐşĐ¸ŃŹ, Ń? ĐµĐłĐľ Đ˛Ń?ĐµĐĽĐ¸Ń€Đ˝Đľ Đ¸Đ·Đ˛ĐµŃ?Ń‚Đ˝Ń‹ĐĽĐ¸ ĐżĐµŃ‰ĐµŃ€Đ˝Ń‹ĐĽĐ¸ Đ¶Đ¸Đ»Đ¸Ń‰Đ°ĐĽĐ¸ Đ¸ Ń†ĐµŃ€ĐşĐ˛ŃŹĐĽĐ¸. Đ•Ń?Ń‚ŃŚ Ń‚Đ°ĐşĐ¶Đµ Đ˛ĐľĐ·ĐĽĐľĐ¶Đ˝ĐľŃ?Ń‚ŃŚ ĐżŃ€Đ¸Đ˝ŃŹŃ‚ŃŚ Ń?Ń‡Đ°Ń?Ń‚Đ¸Đµ Đ˛ Đ˛ĐżĐµŃ‡Đ°Ń‚Đ»ŃŹŃŽŃ‰ĐµĐą ĐżĐľĐµĐ·Đ´ĐşĐµ Đ˝Đ° Đ˛ĐľĐ·Đ´Ń?Ń?Đ˝ĐľĐĽ Ń?Đ°Ń€Đµ Đ˛ Đ“ĐµŃ€ĐµĐĽĐµ. Đ’Đľ Đ˛Ń€ĐµĐĽŃŹ Đ˝Đ°Ń?ĐµĐłĐľ ĐżŃ?Ń‚ĐµŃ?ĐµŃ?Ń‚Đ˛Đ¸ŃŹ Đ˝Đ° Đ˛ĐľŃ?Ń‚ĐľĐş ĐĽŃ‹ Ń?Đ˛Đ¸Đ´Đ¸ĐĽ Đ?Đ˝Đ°Ń‚ĐľĐ»Đ¸ĐąŃ?ĐşĐľĐµ ĐżĐ»Đ°Ń‚Đľ Ń? ĐµĐłĐľ Ń?Đ°ĐĽĐľĐą ĐşŃ€Đ°Ń?Đ¸Đ˛ĐľĐą Ń?Ń‚ĐľŃ€ĐľĐ˝Ń‹. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ Ń…ĐľŃ€ĐľŃ?Đ¸Ń… ĐľŃ‚ĐµĐ»ŃŹŃ….",
        silkRoadTourP4: "Đ?Ń€Đ°Đ˝ 10 Đ´Đ˝ĐµĐą | 2780 ĐşĐĽ Đ˘ĐµĐłĐµŃ€Đ°Đ˝, Ń?Ń‚ĐľĐ»Đ¸Ń†Đ° Đ?Ń€Đ°Đ˝Đ°, ĐľĐ±ĐľĐąĐ´ĐµŃ‚ Đ±ĐľĐ»ŃŚŃ?Ń?ŃŽ Ń‚ĐµŃ€Ń€Đ¸Ń‚ĐľŃ€Đ¸ŃŽ Đ˝Đ° ŃŽĐłĐµ. Đ”Đ»ŃŹ ŃŤŃ‚ĐľĐłĐľ ĐĽŃ‹ ĐżĐľĐ·Đ˝Đ°ĐşĐľĐĽĐ¸ĐĽŃ?ŃŹ Ń? Đ˛ĐľŃ?Ń‚ĐľŃ‡Đ˝Ń‹ĐĽĐ¸ Ń?ĐşĐ°Đ·ĐľŃ‡Đ˝Ń‹ĐĽĐ¸ ĐłĐľŃ€ĐľĐ´Đ°ĐĽĐ¸, Ń‚Đ°ĐşĐ¸ĐĽĐ¸ ĐşĐ°Đş Đ?Ń?Ń„Đ°Ń…Đ°Đ˝, Đ™ĐµĐ·Đ´ Đ¸ ĐśĐµŃ?Ń…ĐµĐ´ Đ˛Đľ Đ˛Ń€ĐµĐĽŃŹ Đ˝Đ°Ń?ĐµĐą 10-Đ´Đ˝ĐµĐ˛Đ˝ĐľĐą ĐżĐľĐµĐ·Đ´ĐşĐ¸ Đ˛ Đ?Ń€Đ°Đ˝. Đ›ŃŽĐ´Đ¸ ĐľŃ‡ĐµĐ˝ŃŚ ĐľŃ‚ĐşŃ€Ń‹Ń‚Ń‹Đµ, Đ´Ń€Ń?Đ¶ĐµĐ»ŃŽĐ±Đ˝Ń‹Đµ Đ¸ ĐľŃ‚Đ·Ń‹Đ˛Ń‡Đ¸Đ˛Ń‹Đµ.",
        silkRoadTourP5: "Đ˘Ń?Ń€ĐşĐĽĐµĐ˝Đ¸Ń?Ń‚Đ°Đ˝ 3 Đ´Đ˝ŃŹ | 760 ĐşĐĽ ĐżĐľŃ?Đ»Đµ Ń?Ń‚ĐľĐ»Đ¸Ń†Ń‹ Đ˘Ń?Ń€ĐşĐĽĐµĐ˝Đ¸Ń?Ń‚Đ°Đ˝Đ° Đ?Ń?Ń…Đ°Đ±Đ°Đ´Đ° Ń? ĐµĐłĐľ Đ˛ĐµĐ»Đ¸ĐşĐľĐ»ĐµĐżĐ˝Ń‹ĐĽĐ¸ Đ·Đ´Đ°Đ˝Đ¸ŃŹĐĽĐ¸ Đ¸ Đ˝ĐµĐżĐľĐ´Ń…ĐľĐ´ŃŹŃ‰Đ¸ĐĽĐ¸ Đ˛ĐľĐ´ĐľĐµĐĽĐ°ĐĽĐ¸ ĐĽŃ‹ ĐżĐľŃ?ĐµŃ‚Đ¸ĐĽ ĐłĐ°Đ·ĐľĐ˛Ń‹Đą ĐşŃ€Đ°Ń‚ĐµŃ€ ĐżĐľ ĐżŃ?Ń‚Đ¸ Đ˛ ĐĄĐ¸Đ˛Ń? - ĐżĐľŃ?Ń€ĐµĐ´Đ¸ ĐżŃ?Ń?Ń‚Ń‹Đ˝Đ¸. Đ§Ń‚ĐľĐ±Ń‹ ĐżĐľ-Đ˝Đ°Ń?Ń‚ĐľŃŹŃ‰ĐµĐĽŃ? Ń?Đ˛Đ¸Đ´ĐµŃ‚ŃŚ Đ·Ń€ĐµĐ»Đ¸Ń‰Đµ, ĐĽŃ‹ Ń?Ń‚Đ°Ń€Đ°ĐµĐĽŃ?ŃŹ ĐżĐµŃ€ĐµĐ˝ĐľŃ‡ĐµĐ˛Đ°Ń‚ŃŚ ĐżĐľĐ±Đ»Đ¸Đ·ĐľŃ?Ń‚Đ¸, ĐżĐľŃ‚ĐľĐĽŃ? Ń‡Ń‚Đľ ŃŤŃ‚Đ° Â«Đ°Đ´Ń?ĐşĐ°ŃŹ Đ´Ń‹Ń€Đ°Â» ĐżŃ€ĐľĐ¸Đ·Đ˛ĐľĐ´Đ¸Ń‚ Đ˝Đ°Ń?Ń‚ĐľŃŹŃ‰ĐµĐµ Đ˛ĐżĐµŃ‡Đ°Ń‚Đ»ĐµĐ˝Đ¸Đµ Ń‚ĐľĐ»ŃŚĐşĐľ Đ˛ Ń‚ĐµĐĽĐ˝ĐľŃ‚Đµ.",
        silkRoadTourP6: "ĐŁĐ·Đ±ĐµĐşĐ¸Ń?Ń‚Đ°Đ˝ 6 Đ´Đ˝ĐµĐą | 1080 ĐşĐĽ. Đ’ ĐŁĐ·Đ±ĐµĐşĐ¸Ń?Ń‚Đ°Đ˝Đµ ĐĽŃ‹ ĐżĐľŃ?ĐµŃ‚Đ¸ĐĽ ĐłĐľŃ€ĐľĐ´Đ° ĐĄĐ¸Đ˛Đ°, Đ‘Ń?Ń…Đ°Ń€Đ° Đ¸ ĐˇĐ°ĐĽĐ°Ń€ĐşĐ°Đ˝Đ´, Đ¶ĐµĐĽŃ‡Ń?Đ¶Đ¸Đ˝Ń‹ Đ¨ĐµĐ»ĐşĐľĐ˛ĐľĐłĐľ ĐżŃ?Ń‚Đ¸. Đ’ Đ‘Ń?Ń…Đ°Ń€Đµ Đ˝ĐµĐĽĐµŃ†ĐşĐľŃŹĐ·Ń‹Ń‡Đ˝Ń‹Đą Ń?Đ·Đ±ĐµĐş Ń€Đ°Ń?Ń?ĐşĐ°Đ¶ĐµŃ‚ Đ˝Đ°ĐĽ Đľ Đ´ĐľŃ?Ń‚ĐľĐżŃ€Đ¸ĐĽĐµŃ‡Đ°Ń‚ĐµĐ»ŃŚĐ˝ĐľŃ?Ń‚ŃŹŃ… ŃŤŃ‚ĐľĐłĐľ Ń?Ń‚Đ°Ń€ĐľĐłĐľ ĐłĐľŃ€ĐľĐ´Đ° Ń? ĐµĐłĐľ Đ˛Đ˝Ń?Ń?Đ¸Ń‚ĐµĐ»ŃŚĐ˝Ń‹ĐĽĐ¸ Đ·Đ´Đ°Đ˝Đ¸ŃŹĐĽĐ¸ Đ¸ ĐĽĐ¸Đ˝Đ°Ń€ĐµŃ‚Đ°ĐĽĐ¸. ĐśŃ‹ ĐżŃ€ĐľĐ˛ĐµĐ´ĐµĐĽ Đ˝ĐľŃ‡ŃŚ Đ˛ Ń‚Ń€Đ°Đ´Đ¸Ń†Đ¸ĐľĐ˝Đ˝ĐľĐĽ Đ±Ń?Ń‚Đ¸Đş-ĐľŃ‚ĐµĐ»Đµ Đ˛ Ń†ĐµĐ˝Ń‚Ń€Đµ Đ¸Ń?Ń‚ĐľŃ€Đ¸Ń‡ĐµŃ?ĐşĐľĐłĐľ ĐˇŃ‚Đ°Ń€ĐľĐłĐľ ĐłĐľŃ€ĐľĐ´Đ° Đ¸ Đ˛ ĐłĐľŃ?Ń‚ĐµĐ˛ĐľĐĽ Đ´ĐľĐĽĐµ Đ˛ ĐˇĐ°ĐĽĐ°Ń€ĐşĐ°Đ˝Đ´Đµ, Đ¸Đ·Đ˛ĐµŃ?Ń‚Đ˝ĐľĐĽ Ń?Đ˛ĐľĐ¸ĐĽ ĐşŃ€Đ°Ń?Đ¸Đ˛Ń‹ĐĽ Ń?Đ°Đ´ĐľĐĽ Đ¸ ĐľĐ±Đ¸Đ»ŃŚĐ˝Ń‹ĐĽ Đ·Đ°Đ˛Ń‚Ń€Đ°ĐşĐľĐĽ.",
        silkRoadTourP7: "ĐŁĐ·Đ±ĐµĐşĐ¸Ń?Ń‚Đ°Đ˝ - ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝ 1 Đ´ĐµĐ˝ŃŚ | 410 ĐşĐĽ. ĐťĐ°Ń? Đ·Đ°ĐşĐ»ŃŽŃ‡Đ¸Ń‚ĐµĐ»ŃŚĐ˝Ń‹Đą ŃŤŃ‚Đ°Đż Đ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? Đ¸Đ· Ń?Ń‚ĐľĐ»Đ¸Ń†Ń‹ ĐŁĐ·Đ±ĐµĐşĐ¸Ń?Ń‚Đ°Đ˝Đ° Đ˘Đ°Ń?ĐşĐµĐ˝Ń‚Đ° ĐżĐľ Ń…ĐľŃ€ĐľŃ?Đľ Ń€Đ°Đ·Đ˛Đ¸Ń‚ĐľĐĽŃ? ĐżĐµŃ€ĐµĐ˛Đ°Đ»Ń? Đ˛ Đ¤ĐµŃ€ĐłĐ°Đ˝Ń?ĐşŃ?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń? Đ¸ Ń?Ń€Đ°Đ·Ń? ĐżĐľŃ?Đ»Đµ ĐłŃ€Đ°Đ˝Đ¸Ń†Ń‹ Ń? ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝ĐľĐĽ Đ˛ ĐžŃ?. ĐśŃ‹ Đ¸Ń?ĐżĐľĐ»ŃŚĐ·Ń?ĐµĐĽ Đ´ĐµĐ˝ŃŚ ĐżĐµŃ€ĐµĐ´ Đ˛Ń‹Đ»ĐµŃ‚ĐľĐĽ Đ´ĐľĐĽĐľĐą, Ń‡Ń‚ĐľĐ±Ń‹ ĐżĐľŃ?ĐµŃ‚Đ¸Ń‚ŃŚ Đ±ĐľĐ»ŃŚŃ?ĐľĐą Đ±Đ°Đ·Đ°Ń€ Đ˛ ĐžŃ?Đµ Đ¸ ĐżĐľŃ?ĐĽĐľŃ‚Ń€ĐµŃ‚ŃŚ ĐłĐľŃ€ĐľĐ´. ĐťĐ°ĐşĐ°Đ˝Ń?Đ˝Đµ ĐľŃ‚ŃŠĐµĐ·Đ´Đ° ĐĽŃ‹ Ń?Đ˝ĐľĐ˛Đ° Ń?ŃŹĐ´ĐµĐĽ Ń? ĐşĐľĐĽŃ„ĐľŃ€Ń‚ĐľĐĽ, ĐżĐľĐżŃ€ĐľĐ±Ń?ĐµĐĽ Ń?ĐľŃ‡Đ˝Ń‹Đą Ń?Đ°Ń?Đ»Ń‹Đş (Ń?Đ°Ń?Đ»Ń‹Đş) Ń? Ń…ĐľĐ»ĐľĐ´Đ˝Ń‹ĐĽ ĐżĐ¸Đ˛ĐľĐĽ Đ¸ Ń€Đ°Ń?Ń?ĐşĐ°Đ¶ĐµĐĽ Đ´Ń€Ń?Đł Đ´Ń€Ń?ĐłŃ? Đľ Đ·Đ°Ń…Đ˛Đ°Ń‚Ń‹Đ˛Đ°ŃŽŃ‰ĐµĐĽ ĐżŃ?Ń‚ĐµŃ?ĐµŃ?Ń‚Đ˛Đ¸Đ¸, ĐşĐľŃ‚ĐľŃ€ĐľĐµ Đ¶Đ´ĐµŃ‚ Đ˝Đ°Ń? Đ˛ĐżĐµŃ€ĐµĐ´Đ¸ Đ¸ Đ·Đ°ĐżĐľĐĽĐ˝Đ¸Ń‚Ń?ŃŹ Đ˝Đ° Đ˛Ń?ŃŽ Đ¶Đ¸Đ·Đ˝ŃŚ!",
//Pamir tour
        pamirTourP1: "ĐžŃ‡ĐµĐ˝ŃŚ Ń€Đ°Đ·Đ˝ĐľĐľĐ±Ń€Đ°Đ·Đ˝Ń‹Đą Ń‚Ń?Ń€ ĐżĐľ Đ˝Đ¸Đ·Đ¸Đ˝Đ°ĐĽ, Ń€ĐµŃ‡Đ˝Ń‹ĐĽ Đ´ĐľĐ»Đ¸Đ˝Đ°ĐĽ Đ¸ Đ˛Ń‹Ń?ĐľĐşĐ¸ĐĽ ĐłĐľŃ€Đ°ĐĽ (Đ˛ĐşĐ»ŃŽŃ‡Đ°ŃŹ 1 Đ˝ĐµĐ´ĐµĐ»ŃŽ Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 4000 ĐĽ). ĐšĐ°Ń‚Đ°Đ˝Đ¸Đµ ĐżĐľ Đ±ĐµĐ·Đ»ŃŽĐ´Đ˝Ń‹ĐĽ ĐĽĐµŃ?Ń‚Đ°ĐĽ Đ˛ Đ˛Ń‹Ń?ĐľĐşĐ¸Ń… ĐłĐľŃ€Đ°Ń….",
        pamirTourP2: "Đ”ĐµĐ˝ŃŚ 1 ĐźŃ€Đ¸Đ±Ń‹Ń‚Đ¸Đµ Đ˛ ĐžŃ?. ĐźĐľŃ?Đ»Đµ ĐżĐľĐ»ĐµŃ‚Đ° Đ˛Ń‹ ĐżŃ€Đ¸Đ·ĐµĐĽĐ»Đ¸Ń‚ĐµŃ?ŃŚ Đ˛ ĐžŃ?Đµ, Đ˛Ń‚ĐľŃ€ĐľĐĽ ĐżĐľ Đ˛ĐµĐ»Đ¸Ń‡Đ¸Đ˝Đµ ĐłĐľŃ€ĐľĐ´Đµ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đ°. Đ’Đ°Ń? Đ˛Ń?Ń‚Ń€ĐµŃ‚ŃŹŃ‚ Đ¸ Đ˛Ń‹ Ń?ĐĽĐľĐ¶ĐµŃ‚Đµ ĐľŃ‚Đ´ĐľŃ…Đ˝Ń?Ń‚ŃŚ Đ˝ĐµŃ?ĐşĐľĐ»ŃŚĐşĐľ Ń‡Đ°Ń?ĐľĐ˛ Đ˛ Đ˝Đ°Ń?ĐµĐĽ ĐľŃ‚ĐµĐ»Đµ. ĐźĐľŃ?Đ»Đµ ĐľĐ±ĐµĐ´Đ° ĐĽŃ‹ Ń?ĐľĐ˛ĐµŃ€Ń?Đ¸ĐĽ Đ˝ĐµĐ±ĐľĐ»ŃŚŃ?Ń?ŃŽ ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸ŃŽ Đ·Đ° ĐłĐľŃ€ĐľĐ´, Ń‡Ń‚ĐľĐ±Ń‹ ĐżĐľĐ·Đ˝Đ°ĐşĐľĐĽĐ¸Ń‚ŃŚŃ?ŃŹ Ń? ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đ°ĐĽĐ¸. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐžŃ?Đµ.",
        pamirTourP3: "Đ”ĐµĐ˝ŃŚ 2 ĐžĐ´Đ˝ĐľĐ´Đ˝ĐµĐ˛Đ˝Đ°ŃŹ ĐżĐľĐµĐ·Đ´ĐşĐ° Đ˝Đ° ĐľĐ·ĐµŃ€Đľ ĐźĐ°ĐżĐ°Đ˝ Ń? ĐżŃ€ĐľĐżŃ?Ń?ĐşĐľĐĽ. ĐˇĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝Đ¸Đą ĐľĐ´Đ˝ĐľĐ´Đ˝ĐµĐ˛Đ˝Ń‹Đą Ń‚Ń?Ń€ (ĐľĐşĐľĐ»Đľ 150 ĐşĐĽ) Ń?Đ˝Đ°Ń‡Đ°Đ»Đ° ĐżŃ€Đ¸Đ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? Đş ĐľĐ·ĐµŃ€Ń? ĐźĐ°ĐżĐ°Đ˝, ĐžŃ?Ń?ĐşĐľĐĽŃ? Đ˛ĐľĐ´ĐľŃ…Ń€Đ°Đ˝Đ¸Đ»Đ¸Ń‰Ń?. ĐśŃ‹ ĐµĐ´ĐµĐĽ ĐżĐľ ĐłŃ€Đ°Đ˛Đ¸ĐąĐ˝Ń‹ĐĽ ĐłŃ€Ń?Đ˝Ń‚ĐľĐ˛Ń‹ĐĽ Đ´ĐľŃ€ĐľĐłĐ°ĐĽ Ń‡ĐµŃ€ĐµĐ· Đ·ĐµĐ»ĐµĐ˝Ń?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń?, Đ° Đ·Đ°Ń‚ĐµĐĽ ĐżĐľ ĐľĐ´Đ˝ĐľĐĽŃ? Đ¸Đ· ĐĽĐ˝ĐľĐłĐľŃ‡Đ¸Ń?Đ»ĐµĐ˝Đ˝Ń‹Ń… ĐżĐµŃ€ĐµĐ˛Đ°Đ»ĐľĐ˛ Đş ŃŽĐłŃ? ĐľŃ‚ ĐłĐľŃ€ĐľĐ´Đ°. Đ’Đľ Đ˛Ń‚ĐľŃ€ĐľĐą ĐżĐľĐ»ĐľĐ˛Đ¸Đ˝Đµ Đ´Đ˝ŃŹ Đ˛ĐľĐ·Đ˛Ń€Đ°Ń‰ĐµĐ˝Đ¸Đµ Đ˛ ĐžŃ? ĐżĐľ Ń…ĐľŃ€ĐľŃ?Đľ Ń€Đ°Đ·Đ˛Đ¸Ń‚ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ.",
        pamirTourP4: "Đ”ĐµĐ˝ŃŚ 3 ĐżĐľĐµĐ·Đ´ĐşĐ° ĐżĐľ Đ¤ĐµŃ€ĐłĐ°Đ˝Ń?ĐşĐľĐą Đ´ĐľĐ»Đ¸Đ˝Đµ Đ˛ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đµ Đ˛ ĐĄŃ?Đ´Đ¶Đ°Đ˝Đ´ Đ˛ Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝Đµ. ĐˇĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝Đ¸Đą Đ´Đ¸Ń?Đş Đ´Đ»Đ¸Đ˝Đ˝Ń‹Đą Đ¸ ĐżŃ‹Đ»ŃŚĐ˝Ń‹Đą. ĐťĐľ Đ˝Đ°Ń? Đ˛ĐľĐ·Đ˝Đ°ĐłŃ€Đ°Đ¶Đ´Đ°ŃŽŃ‚ ĐĽĐ˝ĐľĐ¶ĐµŃ?Ń‚Đ˛ĐľĐĽ Đ˝ĐľĐ˛Ń‹Ń… Đ˝ĐµĐ¸Đ·Đ˛ĐµĐ´Đ°Đ˝Đ˝Ń‹Ń… Đ˛ĐżĐµŃ‡Đ°Ń‚Đ»ĐµĐ˝Đ¸Đą, ĐşĐľŃ‚ĐľŃ€Ń‹Đµ Đ·Đ°Ń?Ń‚Đ°Đ˛Đ»ŃŹŃŽŃ‚ Đ˝Đ°Ń? Đ·Đ°Đ±Ń‹Ń‚ŃŚ ĐľĐ±Đľ Đ˛Ń?ĐµŃ… Ń?Ń?Đ¸Đ»Đ¸ŃŹŃ…. Đ? Đ˛ĐµŃ‡ĐµŃ€ĐľĐĽ Đ˛ Đ˝Đ°Ń?ĐµĐĽ ĐżŃ€ĐµĐşŃ€Đ°Ń?Đ˝ĐľĐĽ ĐľŃ‚ĐµĐ»Đµ ĐżĐ¸Đ˛Đľ Đ˛ĐşŃ?Ń?Đ˝ĐµĐµ.",
        pamirTourP5: "Đ”ĐµĐ˝ŃŚ 4 ĐźĐµŃ€ĐµĐµĐ·Đ´ Đ˝Đ° ĐżĐµŃ€ĐµĐ˛Đ°Đ» Đ˛ Đ”Ń?Ń?Đ°Đ˝Đ±Đµ. ĐźĐľĐşĐ° Đ˝Đ°Ń?Đ° ĐĽĐ°Ń?Đ¸Đ˝Đ° Ń?ĐľĐżŃ€ĐľĐ˛ĐľĐ¶Đ´ĐµĐ˝Đ¸ŃŹ ĐżŃ€ĐľĐµĐ·Đ¶Đ°ĐµŃ‚ Ń?Ń?Ń‚Ń€Đ°Ń?Đ°ŃŽŃ‰Đ¸Đą Đ?Đ˝Đ·ĐľĐ±Ń?ĐşĐ¸Đą Ń‚ĐľĐ˝Đ˝ĐµĐ»ŃŚ ĐżĐľ Đ´ĐľŃ€ĐľĐłĐµ Đ˛ Đ”Ń?Ń?Đ°Đ˝Đ±Đµ, ĐĽŃ‹ ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµĐĽ ĐżĐµŃ€ĐµĐ˛Đ°Đ» Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 3000 ĐĽĐµŃ‚Ń€ĐľĐ˛. ĐźĐľŃ?ĐşĐľĐ»ŃŚĐşŃ? Đ˛ĐµŃ?ŃŚ Ń‚Ń€Đ°Đ˝Ń?ĐżĐľŃ€Ń‚ ĐżŃ€ĐľŃ…ĐľĐ´Đ¸Ń‚ Ń‡ĐµŃ€ĐµĐ· Ń‚ĐµĐĽĐ˝Ń‹Đą Đ¸ ĐĽĐľĐşŃ€Ń‹Đą Ń‚Ń?Đ˝Đ˝ĐµĐ»ŃŚ, ĐĽŃ‹ ĐżĐľĐ»Ń?Ń‡Đ°ĐµĐĽ Đ˛ĐżĐµŃ‡Đ°Ń‚Đ»ŃŹŃŽŃ‰Đ¸Đą ĐżŃ€ĐľŃ…ĐľĐ´. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ Đ”Ń?Ń?Đ°Đ˝Đ±Đµ.",
        pamirTourP6: "Đ”ĐµĐ˝ŃŚ 5 ĐšĐ°Đ»Đ°ĐąĐşŃ?ĐĽ, ĐľŃ‚ĐżŃ€Đ°Đ˛Đ˝Đ°ŃŹ Ń‚ĐľŃ‡ĐşĐ° ĐźĐ°ĐĽĐ¸Ń€Đ°. Đ”ĐľĐ±Ń€Đ°Ń‚ŃŚŃ?ŃŹ Đ´Đľ ĐšĐ°Đ»Đ°ĐąĐşŃ?ĐĽĐ° ĐĽĐľĐ¶Đ˝Đľ Đ´Đ˛Ń?ĐĽŃŹ Ń?ĐżĐľŃ?ĐľĐ±Đ°ĐĽĐ¸: Đ»Đ¸Đ±Đľ ĐżĐľ Đ·Đ¸ĐĽĐ˝ĐµĐĽŃ? ĐĽĐ°Ń€Ń?Ń€Ń?Ń‚Ń? Đ˝Đ° ŃŽĐłĐµ Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝Đ°, Đ»Đ¸Đ±Đľ ĐżĐľ Ń‚Ń€Đ°Ń?Ń?Đµ Đś41 Ń‡ĐµŃ€ĐµĐ· ĐłĐľŃ€Ń‹, ĐżĐľ Ń?Ń…Đ°Đ±Đ¸Ń?Ń‚Ń‹ĐĽ Đ´ĐľŃ€ĐľĐłĐ°ĐĽ, Ń‡Đ°Ń?Ń‚Đ¸Ń‡Đ˝Đľ Đ¸Đ·Ń€ĐµĐ·Đ°Đ˝Đ˝Ń‹ĐĽ Ń€Ń?Ń‡ŃŚŃŹĐĽĐ¸. ĐźĐľ Đ˛ĐľĐ·ĐĽĐľĐ¶Đ˝ĐľŃ?Ń‚Đ¸ Đ˛Ń‹Đ±Đ¸Ń€Đ°ĐµĐĽ Đ˛Ń‚ĐľŃ€ĐľĐą, Đ±ĐľĐ»ĐµĐµ Ń?Đ»ĐľĐ¶Đ˝Ń‹Đą, Đ˝Đľ Ń‚ĐµĐĽ Đ±ĐľĐ»ĐµĐµ ĐżŃ€Đ¸Đ˛Đ»ĐµĐşĐ°Ń‚ĐµĐ»ŃŚĐ˝Ń‹Đą ĐĽĐ°Ń€Ń?Ń€Ń?Ń‚. ĐśŃ‹ Đ¶Đ¸Đ˛ĐµĐĽ Đ˛ Ń?ĐµĐĽŃŚĐµ. ĐŁ Đ˝Đ°Ń? ĐµŃ?Ń‚ŃŚ Đ˛ĐľĐ·ĐĽĐľĐ¶Đ˝ĐľŃ?Ń‚ŃŚ ĐżĐľĐ·Đ˝Đ°ĐşĐľĐĽĐ¸Ń‚ŃŚŃ?ŃŹ Ń? ĐżĐľĐ˛Ń?ĐµĐ´Đ˝ĐµĐ˛Đ˝ĐľĐą Đ¶Đ¸Đ·Đ˝ŃŚŃŽ Ń‚Đ°Đ´Đ¶Đ¸ĐşŃ?ĐşĐľĐą Ń?ĐµĐĽŃŚĐ¸ Đ¸ Đ˝Đ°Ń?Đ»Đ°Đ´Đ¸Ń‚ŃŚŃ?ŃŹ Đ¸Ń… Ń‰ĐµĐ´Ń€Ń‹ĐĽ ĐłĐľŃ?Ń‚ĐµĐżŃ€Đ¸Đ¸ĐĽŃ?Ń‚Đ˛ĐľĐĽ.",
        pamirTourP7: "Đ”ĐµĐ˝ŃŚ 6 ĐźĐµŃ€ĐµĐµĐ·Đ´ Đ˛ ĐĄĐľŃ€ĐľĐł. ĐśĐľĐłŃ?Ń‡Đ°ŃŹ Ń€ĐµĐşĐ° ĐźĐ°Đ˝Ń? Đ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? Đ˛ ĐĄĐľŃ€ĐľĐł. Đ ĐµĐşĐ° Đ¸ Đ´ĐľŃ€ĐľĐłĐ° ĐżĐµŃ‚Đ»ŃŹŃŽŃ‚ Đ˛ Đ·Đ°Đ˛ĐľŃ€Đ°Đ¶Đ¸Đ˛Đ°ŃŽŃ‰ĐµĐĽ Ń?ĐşĐ°Đ»Đ¸Ń?Ń‚ĐľĐĽ Ń?Ń‰ĐµĐ»ŃŚĐµ. ĐťĐ° Đ´Ń€Ń?ĐłĐľĐĽ Đ±ĐµŃ€ĐµĐłŃ? Ń€ĐµĐşĐ¸ ĐżĐľŃ‡Ń‚Đ¸ ĐşĐ°Đ¶Đ´ĐľĐµ Đ·ĐµĐ»ĐµĐ˝ĐľĐµ ĐżŃŹŃ‚Đ˝Đľ Đ¸Ń?ĐżĐľĐ»ŃŚĐ·Ń?ĐµŃ‚Ń?ŃŹ ĐşĐ°Đş ĐĽĐµŃ?Ń‚Đľ Đ´Đ»ŃŹ Đ°Ń„ĐłĐ°Đ˝Ń?ĐşĐľĐą Đ´ĐµŃ€ĐµĐ˛Đ˝Đ¸. ĐĄĐľŃ€ĐľĐł, Ń?Đ˝Đ¸Đ˛ĐµŃ€Ń?Đ¸Ń‚ĐµŃ‚Ń?ĐşĐ¸Đą ĐłĐľŃ€ĐľĐ´ĐľĐş ĐżĐľŃ?Ń€ĐµĐ´Đ¸ ĐźĐ°ĐĽĐ¸Ń€Đ°, ĐżŃ€ĐµĐ´Đ»Đ°ĐłĐ°ĐµŃ‚ Đ˝Đ°ĐĽ Ń?ŃŽŃ‚Đ˝Ń‹Đą ĐľŃ‚ĐµĐ»ŃŚ Đ¸ Ń…ĐľŃ€ĐľŃ?Đ¸Đą Ń?Đ¶Đ¸Đ˝.",
        pamirTourP8: "Đ”ĐµĐ˝ŃŚ 7 ĐźŃ€ĐľĐ´ĐľĐ»Đ¶ĐµĐ˝Đ¸Đµ ĐżŃ?Ń‚Đ¸ Đ˛ Đ‘Đ¸Đ±Đ¸ Đ¤Đ°Ń‚Đ¸ĐĽĐ°. ĐťĐ°Ń?Đµ ĐżŃ?Ń‚ĐµŃ?ĐµŃ?Ń‚Đ˛Đ¸Đµ ĐżŃ€ĐľĐ´ĐľĐ»Đ¶Đ°ĐµŃ‚Ń?ŃŹ Ń‡ĐµŃ€ĐµĐ· Đ’Đ°Ń…Đ°Đ˝Ń?ĐşŃ?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń? Đ˛Đ´ĐľĐ»ŃŚ Đ°Ń„ĐłĐ°Đ˝Ń?ĐşĐľĐą ĐłŃ€Đ°Đ˝Đ¸Ń†Ń‹ Đ´Đľ Đ‘Đ¸Đ±Đ¸ Đ¤Đ°Ń‚Đ¸ĐĽĐ°. ĐžŃ‚Đ´ĐµĐ»ŃŚĐ˝Đ°ŃŹ ŃŤŃ‚Đ˝Đ¸Ń‡ĐµŃ?ĐşĐ°ŃŹ ĐłŃ€Ń?ĐżĐżĐ° ĐżŃ€ĐľĐ¶Đ¸Đ˛Đ°ĐµŃ‚ Đ˛ Đ´ĐľĐ»Đ¸Đ˝Đµ Đ˛Đ°ĐşŃ…Đ°Đ˝ĐľĐş. Đ­Ń‚Đ¸ Đ»ŃŽĐ´Đ¸ ĐľŃ‚Đ»Đ¸Ń‡Đ°ŃŽŃ‚Ń?ŃŹ ĐľŃ‚ Ń‚Đ°Đ´Đ¶Đ¸ĐşĐľĐ˛ Đ˝Đµ Ń‚ĐľĐ»ŃŚĐşĐľ Ń€ĐľĐ´Đ˝Ń‹ĐĽ ŃŹĐ·Ń‹ĐşĐľĐĽ, Đ˝Đľ Đ¸ Đ˛Đ˝ĐµŃ?Đ˝Đµ, Đ¸ ĐşŃ?Đ»ŃŚŃ‚Ń?Ń€Đ˝Đľ. Đ’ Đ‘Đ¸Đ±Đ¸ Đ¤Đ°Ń‚Đ¸ĐĽĐ° Ń? Đ˝Đ°Ń? ĐµŃ?Ń‚ŃŚ ĐżŃ€ĐµĐşŃ€Đ°Ń?Đ˝Ń‹Đą Đ˛Đ¸Đ´ Đ˝Đ° Đ’Đ°Ń…Đ°Đ˝Ń?ĐşŃ?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń?. ĐšĐľĐ˝ĐµŃ‡Đ˝Đľ, ĐĽŃ‹ Ń‚Đ°ĐşĐ¶Đµ ĐżĐľĐ»ŃŚĐ·Ń?ĐµĐĽŃ?ŃŹ ĐłĐľŃ€ŃŹŃ‡Đ¸ĐĽ Đ¸Ń?Ń‚ĐľŃ‡Đ˝Đ¸ĐşĐľĐĽ, ĐşĐľŃ‚ĐľŃ€Ń‹Đą Đ¸Đ´Đ¸Đ»Đ»Đ¸Ń‡ĐµŃ?ĐşĐ¸ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝ Đ˛ Ń?ĐşĐ°Đ»ŃŚĐ˝ĐľĐĽ Ń?ĐşĐ»ĐµĐżĐµ Đ¸ ĐżŃ€Đ¸ĐłĐ»Đ°Ń?Đ°ĐµŃ‚ ĐżŃ€Đ¸Đ˝ŃŹŃ‚ŃŚ Ń‡Ń?Đ´ĐµŃ?Đ˝Ń?ŃŽ Đ˛Đ°Đ˝Đ˝Ń? Ń? Đ˛ĐľĐ´ĐľĐą Ń? Ń‚ĐµĐĽĐżĐµŃ€Đ°Ń‚Ń?Ń€ĐľĐą Đ±ĐľĐ»ĐµĐµ 40 ĐłŃ€Đ°Đ´Ń?Ń?ĐľĐ˛. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ Đ‘Đ¸Đ±Đ¸ Đ¤Đ°Ń‚Đ¸ĐĽĐ°.",
        pamirTourP9: "Đ”ĐµĐ˝ŃŚ 8 ĐźĐµŃ€ĐµĐµĐ·Đ´ Đ˝Đ° ĐżĐ»Đ°Ń‚Đľ ĐźĐ°ĐĽĐ¸Ń€ Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 4000 ĐĽ.ĐźĐľ ĐżŃ?Ń‚Đ¸ Đş ĐżĐ»Đ°Ń‚Đľ ĐźĐ°ĐĽĐ¸Ń€ Đ˛ĐľĐ·Đ´Ń?Ń… Ń?Ń‚Đ°Đ˝ĐľĐ˛Đ¸Ń‚Ń?ŃŹ Đ˛Ń?Đµ Ń‚ĐľĐ˝ŃŚŃ?Đµ Đ¸ Ń‚ĐľĐ˝ŃŚŃ?Đµ, Đ˝Đľ Đ˛Đ¸Đ´ Ń?Ń‚Đ°Đ˝ĐľĐ˛Đ¸Ń‚Ń?ŃŹ ŃŹŃ?Đ˝ĐµĐµ. Đ•Ń?Đ»Đ¸ Đ˝Đµ Ń?Ń‡Đ¸Ń‚Đ°Ń‚ŃŚ Đ´Đ¸ĐşĐ¸Ń… Đ˛ĐµŃ€Đ±Đ»ŃŽĐ´ĐľĐ˛, ŃŹĐşĐľĐ˛ Đ¸ Đ˝ĐµŃ?ĐşĐľĐ»ŃŚĐşĐ¸Ń… ĐżĐ°Ń?Ń‚Ń?Ń…ĐľĐ˛, ĐĽŃ‹ ĐľĐ´Đ˝Đ¸ Đ˛ ŃŤŃ‚ĐľĐĽ Ń?ĐµĐ´Đ¸Đ˝ĐµĐ˝Đ¸Đ¸. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐłĐľŃ?Ń‚ĐµĐ˛ĐľĐĽ Đ´ĐľĐĽĐµ Đ˝Đ° ĐľĐ·ĐµŃ€Đµ Đ‘Ń?Đ»Ń?Đ˝ĐşŃ?Đ»ŃŚ, Ń?Ń?ĐżĐµĐ˛Đ°ĐµĐĽ ĐżĐľŃ?ĐµŃ‚Đ¸Ń‚ŃŚ ĐłĐľŃ€ŃŹŃ‡Đ¸Đµ Đ¸Ń?Ń‚ĐľŃ‡Đ˝Đ¸ĐşĐ¸ Đ¸ Â«ĐĽĐ¸Đ˝Đ¸-ĐłĐµĐąĐ·ĐµŃ€.",
        pamirTourP10: "Đ”ĐµĐ˝ŃŚ 9 + 10 ĐźĐľ ĐźĐ°ĐĽĐ¸Ń€Ń?ĐşĐľĐĽŃ? Ń‚Ń€Đ°ĐşŃ‚Ń?.Đ˘ĐµĐżĐµŃ€ŃŚ ĐĽŃ‹ Đ˝Đ° Đ»ĐµĐłĐµĐ˝Đ´Đ°Ń€Đ˝ĐľĐĽ ĐźĐ°ĐĽĐ¸Ń€Ń?ĐşĐľĐĽ Ń‚Ń€Đ°ĐşŃ‚Đµ Đ¸Đ»Đ¸ Đś41. Đ”ĐľŃ€ĐľĐłĐ° Đ±Ń‹Đ»Đ° ĐżĐľŃ?Ń‚Ń€ĐľĐµĐ˝Đ° ĐˇĐľĐ˛ĐµŃ‚Ń?ĐşĐ¸ĐĽ ĐˇĐľŃŽĐ·ĐľĐĽ Đ˛Đ´ĐľĐ»ŃŚ Đ°Ń„ĐłĐ°Đ˝Ń?ĐşĐľĐą Đ¸ ĐşĐ¸Ń‚Đ°ĐąŃ?ĐşĐľĐą ĐłŃ€Đ°Đ˝Đ¸Ń†. ĐžĐ˝ Đ¸ Ń?ĐµĐłĐľĐ´Đ˝ŃŹ Ń‡Đ°Ń?Ń‚Đ¸Ń‡Đ˝Đľ Đ¸Ń?ĐżĐľĐ»ŃŚĐ·Ń?ĐµŃ‚Ń?ŃŹ ĐşĐ¸Ń‚Đ°ĐąŃ?ĐşĐ¸ĐĽĐ¸ Đ°Đ˛Ń‚ĐľĐĽĐľĐ±Đ¸Đ»ŃŹĐĽĐ¸. ĐśŃ‹ ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµĐĽ Ń‡ĐµŃ‚Ń‹Ń€Đµ ĐżĐµŃ€ĐµĐ˛Đ°Đ»Đ° Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ Đ±ĐľĐ»ĐµĐµ 4000 ĐĽ. ĐźĐµŃ€ĐµĐ˛Đ°Đ» Đ?Đş-Đ‘Đ°ĐąŃ‚Đ°Đ» Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 4655 ĐĽ - Ń?Đ°ĐĽŃ‹Đą Đ˛Ń‹Ń?ĐľĐşĐ¸Đą Đ¸Đ· Đ˝Đ¸Ń…. Đ’ ĐśŃ?Ń€ĐłĐ°Đ±Đµ, Đ±Ń‹Đ˛Ń?ĐµĐĽ Ń?ĐłĐľĐ»ŃŚĐ˝ĐľĐĽ ĐłĐľŃ€ĐľĐ´ĐşĐµ, ĐĽŃ‹ Đ˝ĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐľŃ‚ĐµĐ»Đµ Đ¸, ĐżĐľĐĽĐ¸ĐĽĐľ ĐłĐľŃ€ŃŹŃ‡Đ¸Ń… Đ¸Ń?Ń‚ĐľŃ‡Đ˝Đ¸ĐşĐľĐ˛, ĐĽĐľĐ¶ĐµĐĽ Ń?Đ˝ĐľĐ˛Đ° ĐżŃ€Đ¸Đ˝ŃŹŃ‚ŃŚ Đ´Ń?Ń? Đ˝Đ° Đ˝ĐµŃ?ĐşĐľĐ»ŃŚĐşĐľ Đ´Đ˝ĐµĐą.",
        pamirTourP11: "11 + 12 Đ´Đ˝ĐµĐą Đş ĐľĐ·ĐµŃ€Ń? ĐšĐ°Ń€Đ°ĐşŃ?Đ»ŃŚ Đ¸ Ń‡ĐµŃ€ĐµĐ· ĐżĐµŃ€ĐµĐ˛Đ°Đ» ĐšŃ‹Đ·Ń‹Đ»-Đ?Ń€Ń‚ Đ˛ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝ ĐťĐ°Ń?Đµ Đ´Đ°Đ»ŃŚĐ˝ĐµĐąŃ?ĐµĐµ ĐżŃ?Ń‚ĐµŃ?ĐµŃ?Ń‚Đ˛Đ¸Đµ ĐżŃ€Đ¸Đ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? Đş Đ¶Đ¸Đ˛ĐľĐżĐ¸Ń?Đ˝Đľ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝Đ˝ĐľĐĽŃ? ĐľĐ·ĐµŃ€Ń? ĐšĐ°Ń€Đ°ĐşŃ?Đ»ŃŚ. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐšĐ°Ń€Đ°ĐşŃ?Đ»Đµ ĐżŃ€ŃŹĐĽĐľ Đ˝Đ° ĐľĐ·ĐµŃ€Đµ. ĐťĐ° Ń?Đ»ĐµĐ´Ń?ŃŽŃ‰Đ¸Đą Đ´ĐµĐ˝ŃŚ ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµĐĽ ĐżĐľŃ?Đ»ĐµĐ´Đ˝Đ¸Đą ĐżĐµŃ€ĐµĐ˛Đ°Đ» ĐšŃ‹Đ·Ń‹Đ»-Đ?Ń€Ń‚ Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 4200 ĐĽ. Đ’ĐľŃ‚ ĐĽŃ‹ Đ¸ ĐżĐľĐ´Ń…ĐľĐ´Đ¸ĐĽ Đş ĐłŃ€Đ°Đ˝Đ¸Ń†Đµ Ń? ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝ĐľĐĽ.",
        pamirTourP12: "Đ”ĐµĐ˝ŃŚ 13 Đ‘Đ°Đ·ĐľĐ˛Ń‹Đą Đ»Đ°ĐłĐµŃ€ŃŚ ĐźĐ¸Đş Đ›ĐµĐ˝Đ¸Đ˝Đ°, Đ˛ĐľĐ·Đ˛Ń€Đ°Ń‰ĐµĐ˝Đ¸Đµ Đ˛ ĐžŃ? ĐźĐµŃ€ĐµĐ´ Đ˛ĐľĐ·Đ˛Ń€Đ°Ń‰ĐµĐ˝Đ¸ĐµĐĽ Đ˛ ĐžŃ? ĐĽŃ‹ Ń?ĐľĐ˛ĐµŃ€Ń?Đ°ĐµĐĽ ĐľĐ±ŃŠĐµĐ·Đ´ Đ˛ Đ±Đ°Đ·ĐľĐ˛Ń‹Đą Đ»Đ°ĐłĐµŃ€ŃŚ ĐżĐ¸ĐşĐ° Đ›ĐµĐ˝Đ¸Đ˝Đ° Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ Đ±ĐľĐ»ĐµĐµ 3500 ĐĽ Đ¸ Đ˛ Ń…ĐľŃ€ĐľŃ?Ń?ŃŽ ĐżĐľĐłĐľĐ´Ń? Đ˝Đ°Ń?Đ»Đ°Đ¶Đ´Đ°ĐµĐĽŃ?ŃŹ Ń„Đ°Đ˝Ń‚Đ°Ń?Ń‚Đ¸Ń‡ĐµŃ?ĐşĐ¸ĐĽ Đ˛Đ¸Đ´ĐľĐĽ Đ˝Đ° ŃŤŃ‚Ń? ĐłĐ¸ĐłĐ°Đ˝Ń‚Ń?ĐşŃ?ŃŽ ĐłĐľŃ€Ń?.",
        pamirTourP13: "14-15 Đ´ĐµĐ˝ŃŚ ĐžŃ? Đ¸ ĐżŃ?Ń‚ĐµŃ?ĐµŃ?Ń‚Đ˛Đ¸Đµ Đ´ĐľĐĽĐľĐą ĐźĐľŃ?Đ»ĐµĐ´Đ˝Đ¸Đą Đ´ĐµĐ˝ŃŚ Đ˝Đ°Ń?ĐµĐłĐľ Ń‚Ń?Ń€Đ° ĐżĐľ ĐźĐ°ĐĽĐ¸Ń€Ń? ĐżŃ€Đ¸Đ˝Đ°Đ´Đ»ĐµĐ¶Đ¸Ń‚ ĐłĐľŃ€ĐľĐ´Ń? ĐžŃ?. ĐŁ Đ˝Đ°Ń? Đ´ĐľŃ?Ń‚Đ°Ń‚ĐľŃ‡Đ˝Đľ Đ˛Ń€ĐµĐĽĐµĐ˝Đ¸ Đ˝Đ° ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸ŃŽ ĐżĐľ ĐłĐľŃ€ĐľĐ´Ń? Đ¸Đ»Đ¸ ĐżĐľŃ?ĐµŃ‰ĐµĐ˝Đ¸Đµ Đ±Đ°Đ·Đ°Ń€Đ°. Đ Đ°Đ˝Đľ Ń?Ń‚Ń€ĐľĐĽ Ń?Đ»ĐµĐ´Ń?ŃŽŃ‰ĐµĐłĐľ Đ´Đ˝ŃŹ Đ˝Đ°Ń? ĐľŃ‚Đ˛ĐµĐ·Ń?Ń‚ Đ¸Đ· ĐľŃ‚ĐµĐ»ŃŹ Đ˛ Đ°ŃŤŃ€ĐľĐżĐľŃ€Ń‚, ĐľŃ‚ĐşŃ?Đ´Đ° ĐĽŃ‹ ĐľŃ‚ĐżŃ€Đ°Đ˛Đ¸ĐĽŃ?ŃŹ Đ´ĐľĐĽĐľĐą.",
//Mongolia tour
        mongoliaTourP1: "ĐśŃ‹ ĐµĐ´ĐµĐĽ Đ˝Đ° Đ˘ĐµĐ˝ĐµŃ€Đ¸Ń„Đµ Ń‡ĐµŃ€ĐµĐ· ĐśĐľĐ˝Đ¶ĐµĐ»Đ»Đ¸. ĐŁĐ·Đ˝Đ°ĐµĐĽ ĐľĐłŃ€ĐľĐĽĐ˝Ń?ŃŽ Ń?Ń‚Ń€Đ°Đ˝Ń?, Đ˛ĐżĐµŃ‡Đ°Ń‚Đ»ŃŹŃŽŃ‰Đ¸Đµ Ń€ĐµĐşĐ¸ Đ¸ ĐľĐ·ĐµŃ€Đ°, Đ±ĐµŃ?ĐşŃ€Đ°ĐąĐ˝Đ¸Đµ ĐżŃ€ĐľŃ?Ń‚ĐľŃ€Ń‹.",
        mongoliaTourP2: "Đ”ĐµĐ˝ŃŚ 1 ĐźŃ€Đ¸Đ±Ń‹Ń‚Đ¸Đµ Đ˛ ĐŁĐ»Đ°Đ˝-Đ‘Đ°Ń‚ĐľŃ€. Đ›ĐµŃ‚Đ¸ĐĽ Đ˛ ĐŁĐ»Đ°Đ˝-Đ‘Đ°Ń‚ĐľŃ€ Ń‡ĐµŃ€ĐµĐ· Đ‘ĐµŃ€Đ»Đ¸Đ˝ Đ¸Đ»Đ¸ Đ¤Ń€Đ°Đ˝ĐşŃ„Ń?Ń€Ń‚. ĐźĐľŃ?Đ»Đµ ĐżĐľĐµĐ·Đ´ĐşĐ¸ Đ˛ ĐľŃ‚ĐµĐ»ŃŚ ĐĽŃ‹ Đ˝Đ°Ń‡Đ˝ĐµĐĽ Ń? ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸Đ¸ ĐżĐľ ĐłĐľŃ€ĐľĐ´Ń? Ń? ĐżĐľŃ?ĐµŃ‰ĐµĐ˝Đ¸ĐµĐĽ ĐĽĐľĐ˝Đ°Ń?Ń‚Ń‹Ń€ŃŹ Đ“Đ°Đ˝Đ´Đ°Đ˝. ĐśŃ‹ ĐżŃ€ĐľĐ´ĐľĐ»Đ¶Đ¸ĐĽ ĐżŃ?Ń‚ŃŚ Đş Đ¦ĐľĐ˝Đ´Đ¶Đ¸Đ˝ Đ‘ĐľĐ»Đ´ĐľĐł, Đ˛ 57 ĐşĐĽ Đş Đ˛ĐľŃ?Ń‚ĐľĐşŃ? ĐľŃ‚ ĐŁĐ»Đ°Đ˝-Đ‘Đ°Ń‚ĐľŃ€Đ°, ĐłĐ´Đµ Đ˝Đ°Ń…ĐľĐ´Đ¸Ń‚Ń?ŃŹ Ń?Đ°ĐĽŃ‹Đą Đ±ĐľĐ»ŃŚŃ?ĐľĐą ĐşĐľĐ˝Đ˝Ń‹Đą ĐżĐ°ĐĽŃŹŃ‚Đ˝Đ¸Đş Đ˛ ĐĽĐ¸Ń€Đµ. Đ—Đ°Ń‚ĐµĐĽ ĐĽŃ‹ Đ˛ĐľĐ·Đ˛Ń€Đ°Ń‰Đ°ĐµĐĽŃ?ŃŹ Đ˛ ĐľŃ‚ĐµĐ»ŃŚ Đ¸ Đ˝Đ°Ń?Đ»Đ°Đ¶Đ´Đ°ĐµĐĽŃ?ŃŹ Ń‚Đ¸ĐżĐ¸Ń‡Đ˝Ń‹ĐĽ ĐĽĐľĐ˝ĐłĐľĐ»ŃŚŃ?ĐşĐ¸ĐĽ Ń?Đ¶Đ¸Đ˝ĐľĐĽ.",
        mongoliaTourP3: "Đ”ĐµĐ˝ŃŚ 2 ĐŁĐ»Đ°Đ˝-Đ‘Đ°Ń‚ĐľŃ€ - Đ?ĐĽĐ°Ń€Đ±Đ°ŃŹŃ?ĐłĐ°Đ»Đ°Đ˝Ń‚ ĐźĐľŃ?Đ»Đµ Đ·Đ°Đ˛Ń‚Ń€Đ°ĐşĐ° Đ˛Ń?Ń‚Ń€ĐµŃ‡Đ°ĐµĐĽŃ?ŃŹ Ń? Đ˝Đ°Ń?Đ¸ĐĽ ĐĽĐľĐ˝ĐłĐľĐ»ŃŚŃ?ĐşĐ¸ĐĽ ĐżĐ°Ń€Ń‚Đ˝ĐµŃ€ĐľĐĽ. ĐźĐľŃ?Đ»Đµ Đ˝ĐµĐżŃ€ĐľĐ´ĐľĐ»Đ¶Đ¸Ń‚ĐµĐ»ŃŚĐ˝ĐľĐłĐľ Đ·Đ˝Đ°ĐşĐľĐĽŃ?Ń‚Đ˛Đ° Đ¸ ĐżĐµŃ€ĐµĐ´Đ°Ń‡Đ¸ ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»ĐľĐ˛ ĐĽŃ‹ Đ˛Ń‹ĐµĐ·Đ¶Đ°ĐµĐĽ Đ˝Đ° Ń?ĐµĐ˛ĐµŃ€ Đ·Đ° ĐłĐľŃ€ĐľĐ´. ĐźĐµŃ€Đ˛Ń‹Đµ 80 ĐşĐĽ ĐżŃ€ĐľĐµĐ·Đ¶Đ°ĐµĐĽ ĐżĐľ Ń…ĐľŃ€ĐľŃ?ĐµĐą Đ°Ń?Ń„Đ°Đ»ŃŚŃ‚Đ¸Ń€ĐľĐ˛Đ°Đ˝Đ˝ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ, Ń‡Ń‚ĐľĐ±Ń‹ ĐżŃ€Đ¸Đ˛Ń‹ĐşĐ˝Ń?Ń‚ŃŚ Đş ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đ°ĐĽ. ĐĄĐľŃ€ĐľŃ?Đ¸Đą Ń?ĐżŃ?Ń?Đş ĐżŃ€Đ¸Đ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? ĐżŃ€Đ¸ĐĽĐµŃ€Đ˝Đľ Đ˛ 130 ĐşĐĽ Đş ĐĽĐľĐ˝Đ°Ń?Ń‚Ń‹Ń€ŃŽ Đ?ĐĽĐ°Ń€Đ±Đ°ŃŹŃ?ĐłĐ°Đ»Đ°Đ˝Ń‚. Đ­Ń‚ĐľŃ‚ ĐĽĐľĐ˝Đ°Ń?Ń‚Ń‹Ń€ŃŚ - ĐľĐ´Đ¸Đ˝ Đ¸Đ· 7 ĐľŃ€Đ¸ĐłĐ¸Đ˝Đ°Đ»ŃŚĐ˝Ń‹Ń… ĐĽĐľĐ˝Đ°Ń?Ń‚Ń‹Ń€ĐµĐą, Ń?ĐľŃ…Ń€Đ°Đ˝Đ¸Đ˛Ń?Đ¸Ń…Ń?ŃŹ Đ´Đľ Đ˝Đ°Ń?Đ¸Ń… Đ´Đ˝ĐµĐą. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ŃŽŃ€Ń‚ĐľŃ‡Đ˝ĐľĐĽ Đ»Đ°ĐłĐµŃ€Đµ.",
        mongoliaTourP4: "Đ”ĐµĐ˝ŃŚ 3 ĐšĐľĐĽĐ°Đ˝Đ´Đ° Đ?ĐĽĐ°Ń€Đ±Đ°ŃŹŃ?ĐłĐ°Đ»Đ°Đ˝Ń‚ ĐˇŃ‚Đ°Ń€Ń‚Ń?ĐµĐĽ ĐżĐµŃ€Đ˛Ń‹Đµ 40 ĐşĐĽ Đ±ĐµĐ·Đ´ĐľŃ€ĐľĐ¶ŃŚŃŹ. Đ”Đ°Đ»ĐµĐµ ĐżĐľ Đ°Ń?Ń„Đ°Đ»ŃŚŃ‚ĐľĐ˛ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ 60 ĐşĐĽ Đ˛ĐľĐşŃ€Ń?Đł ĐłĐľŃ€ĐľĐ´Đ° Đ­Ń€Đ´ŃŤĐ˝ŃŤŃ‚ Đ´Đľ Đ˝Đ°Ń?ĐµĐą Ń†ĐµĐ»Đ¸ Đ˝Đ° Đ´ĐµĐ˝ŃŚ - Ń?ĐµĐ»Đ° Đ®Đ˝Đ¸Ń‚. Đ‘Đ»Đ¸Đ¶Đµ Đş Đ˛ĐµŃ‡ĐµŃ€Ń? Đ´ĐľĐ±Đ¸Ń€Đ°ĐµĐĽŃ?ŃŹ Đ´Đľ Đ®Đ˝Đ¸Ń‚Đ° Ń‡ĐµŃ€ĐµĐ· ĐżĐµŃ€ĐµĐ˛Đ°Đ» Đ˝Đ° Ń…ĐľŃ€ĐľŃ?ĐµĐĽ Ń?ĐżŃ?Ń?ĐşĐµ. ĐťĐ° Ń?ĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝ĐµĐą Ń?Ń†ĐµĐ˝Đµ ĐĽŃ‹ ĐĽĐľĐ¶ĐµĐĽ ĐżĐľĐłŃ€Ń?Đ·Đ¸Ń‚ŃŚŃ?ŃŹ Đ˛ Ń‚Đ¸ĐżĐ¸Ń‡Đ˝Ń?ŃŽ ĐżĐľĐ˛Ń?ĐµĐ´Đ˝ĐµĐ˛Đ˝Ń?ŃŽ Đ¶Đ¸Đ·Đ˝ŃŚ ĐĽĐľĐ˝ĐłĐľĐ»ĐľĐ˛. ĐźŃ€ĐľĐµĐ·Đ¶Đ°ĐµĐĽ ĐĽĐ¸ĐĽĐľ ŃŹĐşĐľĐ˛, ŃŽŃ€Ń‚ Đ¸ Đ˛Ń?Ń‚Ń€ĐµŃ‡Đ°ĐµĐĽ ĐşĐľŃ‡ĐµĐ˛Đ˝Đ¸ĐşĐľĐ˛. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ŃŽŃ€Ń‚ĐľŃ‡Đ˝ĐľĐĽ Đ»Đ°ĐłĐµŃ€Đµ.",
        mongoliaTourP5: "Đ§Đ°Ń?Ń‚ŃŚ 4 Đ´Đ˝ŃŹ - Ń€ĐµĐşĐ° ĐˇĐµĐ»ĐµĐ˝ĐłĐ°. ĐˇĐµĐłĐľĐ´Đ˝ŃŹ ĐĽĐ°Ń€Ń?Ń€Ń?Ń‚ Đ˛ĐµĐ´ĐµŃ‚ Đş ĐľĐ·ĐµŃ€Ń? ĐĄŃ?Đ±Ń?Ń?ĐłŃ?Đ». Đ“ĐľĐ˛ĐľŃ€ŃŹŃ‚, Ń‡Ń‚Đľ Ń?ĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝Đ¸Đą Đ»Đ°Đ˝Đ´Ń?Đ°Ń„Ń‚ ĐżĐľŃ…ĐľĐ¶ Đ˝Đ° Đ®Đ¶Đ˝Ń?ŃŽ Đ?Ń„Ń€Đ¸ĐşŃ?. ĐśŃ‹ ĐµĐ´ĐµĐĽ ĐżĐľ Ń…ĐľŃ€ĐľŃ?ĐµĐą ĐµŃ?Ń‚ĐµŃ?Ń‚Đ˛ĐµĐ˝Đ˝ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ Đ˛Đ´ĐľĐ»ŃŚ Ń€ĐµĐşĐ¸ ĐˇĐµĐ»ĐµĐ˝ĐłĐ°, Ń‚Ń€ĐµŃ‚ŃŚĐµĐą ĐżĐľ Đ˛ĐµĐ»Đ¸Ń‡Đ¸Đ˝Đµ Ń€ĐµĐşĐ¸ ĐśĐľĐ˝ĐłĐľĐ»Đ¸Đ¸. ĐźĐ¸ĐşĐ˝Đ¸Đş Ń? Ń€ĐµĐşĐ¸, Đ˝ĐľŃ‡ĐµĐ˛ĐşĐ° Đ˛ ĐżĐ°Đ»Đ°Ń‚ĐşĐµ.",
        mongoliaTourP6: "Đ”ĐµĐ˝ŃŚ 5 Đ¸ 6 Đ ĐµĐşĐ° ĐˇĐµĐ»ĐµĐ˝ĐłĐ° - ĐľĐ·ĐµŃ€Đľ ĐĄŃ?Đ±Ń?Ń?ĐłŃ?Đ». ĐˇĐµĐłĐľĐ´Đ˝ŃŹ ĐµĐ´ĐµĐĽ ĐżĐľ Ń€ĐµĐşĐµ ĐˇĐµĐ»ĐµĐ˝ĐłĐ° Đ˛ ĐˇĐµĐ˛ĐµŃ€Đ˝Ń?ŃŽ ĐśĐľĐ˝ĐłĐľĐ»Đ¸ŃŽ. ĐťĐ°Ń?Đ° Ń†ĐµĐ»ŃŚ - ĐľĐ·ĐµŃ€Đľ ĐĄŃ?Đ±Ń?Ń?ĐłŃ?Đ», Đş ĐşĐľŃ‚ĐľŃ€ĐľĐĽŃ? ĐĽŃ‹ ĐżŃ€Đ¸Đ±Ń?Đ´ĐµĐĽ Ń‡ĐµŃ€ĐµĐ· ĐśŃ?Ń€Ń?Đ˝ Đ±Đ»Đ¸Đ¶Đµ Đş Đ˛ĐµŃ‡ĐµŃ€Ń?. ĐˇĐµĐłĐľĐ´Đ˝ŃŹ Đ˝Đ°Ń? ĐżĐµŃ€Đ˛Ń‹Đą Đ´ĐµĐ˝ŃŚ ĐľŃ‚Đ´Ń‹Ń…Đ°, Đ¸ Ń? Đ˝Đ°Ń? ĐµŃ?Ń‚ŃŚ Đ˛ĐľĐ·ĐĽĐľĐ¶Đ˝ĐľŃ?Ń‚ŃŚ Đ¸Ń?ĐşŃ?ĐżĐ°Ń‚ŃŚŃ?ŃŹ Đ˛ ĐľĐ·ĐµŃ€Đµ Đ¸Đ»Đ¸ Đ°Ń€ĐµĐ˝Đ´ĐľĐ˛Đ°Ń‚ŃŚ Đ»ĐľĐ´ĐşŃ?. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ŃŽŃ€Ń‚ĐľŃ‡Đ˝ĐľĐĽ Đ»Đ°ĐłĐµŃ€Đµ.",
        mongoliaTourP7: "Đ”ĐµĐ˝ŃŚ 7 ĐžĐ·ĐµŃ€Đľ ĐĄŃ?Đ±Ń?Ń?ĐłŃ?Đ» - Đ˘Đ°Đ˛Đ°Đ˝-Đ“ĐľĐ». ĐśŃ‹ Ń?Đ˝ĐľĐ˛Đ° Đ¸Đ´ĐµĐĽ Đ˝Đ° ŃŽĐł. ĐˇĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝Đ¸Đą Đ±ĐľĐ»ĐµĐµ ĐşĐľŃ€ĐľŃ‚ĐşĐ¸Đą ŃŤŃ‚Đ°Đż ĐżŃ€Đ¸Đ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? Đ˝Đ° Đ˘Đ°Đ˛Đ°Đ˝-Đ“ĐľĐ», ĐłĐ´Đµ ĐĽŃ‹ Đ˝ĐľŃ‡Ń?ĐµĐĽ Đ˛ ŃŽŃ€Ń‚ĐľŃ‡Đ˝ĐľĐĽ Đ»Đ°ĐłĐµŃ€Đµ.",
        mongoliaTourP8: "Đ”ĐµĐ˝ŃŚ 8 Đ˘Đ°Đ˛Đ°Đ˝-Đ“ĐľĐ» - Đ—Đ°Đ» Tavan Go River. Đ’ Ń?Đ»ĐµĐ´Ń?ŃŽŃ‰ĐµĐĽ ĐżĐľ Đ˛ĐµĐ»Đ¸Ń‡Đ¸Đ˝Đµ ĐłĐľŃ€ĐľĐ´Đµ, ĐśŃ?Ń€Đ¸Đ˝Đµ, ĐĽŃ‹ Đ´ĐµĐ»Đ°ĐµĐĽ Đ˝ĐµĐ±ĐľĐ»ŃŚŃ?Ń?ŃŽ ĐľŃ?Ń‚Đ°Đ˝ĐľĐ˛ĐşŃ?, Ń‡Ń‚ĐľĐ±Ń‹ ĐżĐľĐżĐľĐ»Đ˝Đ¸Ń‚ŃŚ Đ·Đ°ĐżĐ°Ń?Ń‹. ĐśŃ‹ ĐµĐ´ĐµĐĽ Ń?Đ˝Đ°Ń‡Đ°Đ»Đ° Đ˝Đ° ŃŽĐł, Đ° Đ·Đ°Ń‚ĐµĐĽ ĐľĐ±Ń€Đ°Ń‚Đ˝Đľ Đ˝Đ° Đ˛ĐľŃ?Ń‚ĐľĐş Đ˛ ĐŁĐ»Đ°Đ˝-Đ‘Đ°Ń‚ĐľŃ€. ĐźŃ?Đ˝ĐşŃ‚ ĐżŃ€Đ¸Đ±Ń‹Ń‚Đ¸ŃŹ - Đ·Đ°Đ» ĐľĐ¶Đ¸Đ´Đ°Đ˝Đ¸ŃŹ Đ˝Đ° Ń€ĐµĐşĐµ Đ˘Đ°Đ˛Đ°Đ˝-Đ“ĐľĐ». Đ—Đ´ĐµŃ?ŃŚ ĐżŃŹŃ‚ŃŚ Ń€ĐµĐş Đ˛Ń?Ń‚Ń€ĐµŃ‡Đ°ŃŽŃ‚Ń?ŃŹ Đ˛ ĐľĐ´Đ˝ĐľĐĽ ĐĽĐµŃ?Ń‚Đµ. Đ­Ń‚Đľ Đ¸Đ˝Ń‚ĐµŃ€ĐµŃ?Đ˝Đ°ŃŹ Đ¸ ĐşŃ€Đ°Ń?Đ¸Đ˛Đ°ŃŹ ĐĽĐµŃ?Ń‚Đ˝ĐľŃ?Ń‚ŃŚ. ĐśŃ‹ ĐżŃ€ĐľĐµĐ´ĐµĐĽ ĐżĐľ Ń€ĐµĐşĐµ Đ¸, Đ˛ĐľĐ·ĐĽĐľĐ¶Đ˝Đľ, Ń?Ń?ĐżĐµĐµĐĽ ĐżĐľŃ€Ń‹Đ±Đ°Ń‡Đ¸Ń‚ŃŚ Đ¸Đ»Đ¸ ĐżĐľĐşĐ°Ń‚Đ°Ń‚ŃŚŃ?ŃŹ Đ˝Đ° Đ»ĐľĐ´ĐşĐµ.",
        mongoliaTourP9: "Đ”ĐµĐ˝ŃŚ 9 Đ˘Đ°Đ˛Đ°Đ˝-Đ“ĐľĐ» - ĐťĐ°Ń†Đ¸ĐľĐ˝Đ°Đ»ŃŚĐ˝Ń‹Đą ĐżĐ°Ń€Đş ĐĄĐľŃ€ĐłĐľĐ˝. ĐźŃ€Đ¸ĐĽĐµŃ€Đ˝Đľ Ń‡ĐµŃ€ĐµĐ· 150 ĐşĐĽ Ń‚Ń€ĐľĐż Ń? Đ˝Đ°Ń? Đ±Ń?Đ´ĐµŃ‚ ĐżĐ¸ĐşĐ˝Đ¸Đş. Đ‘Đ»Đ¸Đ¶Đµ Đş Đ˛ĐµŃ‡ĐµŃ€Ń? ĐĽŃ‹ ĐżŃ€Đ¸Đ±Ń?Đ´ĐµĐĽ Đ˛ ĐżŃ?Đ˝ĐşŃ‚ Đ˝Đ°Đ·Đ˝Đ°Ń‡ĐµĐ˝Đ¸ŃŹ Đ˛ Đ˝Đ°Ń†Đ¸ĐľĐ˝Đ°Đ»ŃŚĐ˝ĐľĐĽ ĐżĐ°Ń€ĐşĐµ ĐĄĐľŃ€ĐłĐľĐ˝. Đ§Ń‚Đľ ĐľŃ?ĐľĐ±ĐµĐ˝Đ˝ĐľĐłĐľ Đ˛ ŃŤŃ‚ĐľĐĽ Đ˝Đ°Ń†Đ¸ĐľĐ˝Đ°Đ»ŃŚĐ˝ĐľĐĽ ĐżĐ°Ń€ĐşĐµ, Ń‚Đ°Đş ŃŤŃ‚Đľ ĐĽĐľĐ»ĐľĐ´Đ°ŃŹ Đ˛Ń?Đ»ĐşĐ°Đ˝Đ¸Ń‡ĐµŃ?ĐşĐ°ŃŹ ĐłĐľŃ€Đ°, Đ¸Đ·Đ˛ĐµŃ€ĐłĐ°Đ˛Ń?Đ°ŃŹŃ?ŃŹ 8000 Đ»ĐµŃ‚ Đ˝Đ°Đ·Đ°Đ´, Đ¸ Đ’Đ°ĐąŃ?ĐµĐ˝Đ·ĐµĐµ (Đ‘ĐµĐ»ĐľĐµ ĐľĐ·ĐµŃ€Đľ).",
        mongoliaTourP10: "Đ”ĐµĐ˝ŃŚ 10 ĐťĐ°Ń†Đ¸ĐľĐ˝Đ°Đ»ŃŚĐ˝Ń‹Đą ĐżĐ°Ń€Đş ĐĄĐľŃ€ĐłĐľĐ˝ - Đ—ĐµĐ˝Ń‡ĐµŃ€. Đ“ĐľŃ€ŃŹŃ‡Đ¸Đµ Đ¸Ń?Ń‚ĐľŃ‡Đ˝Đ¸ĐşĐ¸ Đ¦ĐµĐ˝Ń…ĐµŃ€ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝Ń‹ Đş ŃŽĐłĐľ-Đ·Đ°ĐżĐ°Đ´Ń? ĐľŃ‚ ĐľĐ·ĐµŃ€Đ° ĐŁĐłĐ¸Đ¸ Đ˛ ĐşŃ€Đ°Ń?Đ¸Đ˛ĐľĐĽ ĐĽĐµŃ?Ń‚Đµ ĐĽĐµĐ¶Đ´Ń? Ń?Ń‚ĐµĐżŃŹĐĽĐ¸ Đ¸ Đ»ĐµŃ?Đ¸Ń?Ń‚Ń‹ĐĽĐ¸ Ń…ĐľĐ»ĐĽĐ°ĐĽĐ¸ Ń? ĐżĐľĐ´Đ˝ĐľĐ¶Đ¸ŃŹ ĐĄĐ°Đ˝ĐłĐ°ĐąŃ?ĐşĐ¸Ń… ĐłĐľŃ€. Đ’ ŃŤŃ‚ĐľĐĽ Ń€Đ°Đ·Đ˝ĐľĐľĐ±Ń€Đ°Đ·Đ˝ĐľĐĽ ĐżŃ?Ń‚ĐµŃ?ĐµŃ?Ń‚Đ˛Đ¸Đ¸ ĐĽŃ‹ Đ¸Đ˝ĐľĐłĐ´Đ° ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµĐĽ Đ˝ĐµĐ±ĐľĐ»ŃŚŃ?Đ¸Đµ Ń€Ń?Ń‡ŃŚĐ¸ Đ¸ Ń€ĐµĐşĐ¸.",
        mongoliaTourP11: "Đ”ĐµĐ˝ŃŚ 11 Đ—ĐµĐ˝Ń‡ĐµŃ€ (Đ´ĐµĐ˝ŃŚ ĐľŃ‚Đ´Ń‹Ń…Đ°). ĐˇĐµĐłĐľĐ´Đ˝ŃŹ ĐĽŃ‹ ĐľŃ‚ĐżŃ€Đ°Đ˛Đ»ŃŹĐµĐĽŃ?ŃŹ Đ˛ ĐľĐ´Đ˝ĐľĐ´Đ˝ĐµĐ˛Đ˝Ń?ŃŽ ĐżĐľĐµĐ·Đ´ĐşŃ? Đ˛ Đ´ĐľĐ»Đ¸Đ˝Ń?, ĐşĐľŃ‚ĐľŃ€Đ°ŃŹ ĐżŃ€ĐľĐ¸Đ·Đ˛ĐµĐ´ĐµŃ‚ Đ˝Đ° Đ˛Ń?ĐµŃ… Đ˝ĐµĐ¸Đ·ĐłĐ»Đ°Đ´Đ¸ĐĽĐľĐµ Đ˛ĐżĐµŃ‡Đ°Ń‚Đ»ĐµĐ˝Đ¸Đµ. Đ•Đ´ĐµĐĽ Đ˝Đ° ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đµ ĐżĐľ Đ·ĐµĐ»ĐµĐ˝Ń‹ĐĽ ĐżĐ°Ń?Ń‚Đ±Đ¸Ń‰Đ°ĐĽ, Đ˛Đ´ĐľĐ»ŃŚ Ń€Ń?Ń‡ŃŚĐµĐ˛, Ń‡ĐµŃ€ĐµĐ· Đ»ĐµŃ?Đ° - Đ¸ ĐşĐľŃ‡ĐµĐ˛Đ˝Đ¸ĐşĐ¸ ĐżŃ€ĐľĐ´ĐľĐ»Đ¶Đ°ŃŽŃ‚ Đ˝Đ°ĐĽ ĐĽĐ°Ń…Đ°Ń‚ŃŚ Ń€Ń?ĐşĐ°ĐĽĐ¸. ĐźŃ€Đ¸ Đ¶ĐµĐ»Đ°Đ˝Đ¸Đ¸ ĐĽĐľĐ¶Đ˝Đľ ĐľŃ?Ń‚Đ°Đ˝ĐľĐ˛Đ¸Ń‚ŃŚŃ?ŃŹ Đ˛ ŃŽŃ€Ń‚ĐľŃ‡Đ˝ĐľĐĽ Đ»Đ°ĐłĐµŃ€Đµ Đ¸ ĐżĐľĐ±Đ°Đ»ĐľĐ˛Đ°Ń‚ŃŚ Ń?ĐµĐ±ŃŹ ĐĽĐ°Ń?Ń?Đ°Đ¶ĐµĐĽ Đ¸ Đ˛ĐľĐ´ĐľĐą Đ¸Đ· ĐłĐľŃ€ŃŹŃ‡ĐµĐłĐľ Đ¸Ń?Ń‚ĐľŃ‡Đ˝Đ¸ĐşĐ°.",
        mongoliaTourP12: "Đ”ĐµĐ˝ŃŚ 12 Đ—ĐµĐ˝Ń‡ĐµŃ€ - ĐŁŃ?Ń€Ń‚Đ¸Đ˝ Đ˘ĐľŃ…ĐľĐą. ĐˇĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝Đ¸Đą ĐĽĐ°Ń€Ń?Ń€Ń?Ń‚ ĐżŃ€ĐľŃ‚ŃŹĐ¶ĐµĐ˝Đ˝ĐľŃ?Ń‚ŃŚŃŽ ĐľĐşĐľĐ»Đľ 120 ĐşĐĽ Đ´Đľ Đ˝Đ°Ń?ĐµĐłĐľ Đ´Đ˝ĐµĐ˛Đ˝ĐľĐłĐľ ĐżŃ?Đ˝ĐşŃ‚Đ° Đ˝Đ°Đ·Đ˝Đ°Ń‡ĐµĐ˝Đ¸ŃŹ Đ˛ Curtain Tohoy Đ±Ń?Đ´ĐµŃ‚ Đ¸Đ˝Ń‚ĐµŃ€ĐµŃ?ĐµĐ˝. ĐśŃ‹ ĐżŃ€ĐľĐµĐ·Đ¶Đ°ĐµĐĽ Đ˝ĐµĐ±ĐľĐ»ŃŚŃ?Đ¸Đµ ĐłĐľŃ€Ń‹, Ń?Đ¸Ń€ĐľĐşĐ¸Đµ Đ´ĐľĐ»Đ¸Đ˝Ń‹ Đ¸ ĐĽĐµĐ»ĐşĐľĐ˛ĐľĐ´ŃŚĐµ. Đ Đ°Đą Đ´Đ»ŃŹ ĐşĐ°Đ¶Đ´ĐľĐłĐľ Đ˛ĐľĐ´Đ¸Ń‚ĐµĐ»ŃŹ ĐżĐľ Đ±ĐµĐ·Đ´ĐľŃ€ĐľĐ¶ŃŚŃŽ - Ń‡Ń?Đ˛Ń?Ń‚Đ˛Ń?ĐµŃ?ŃŚ Ń?ĐµĐ±ŃŹ Đ±ĐµĐ·ĐłŃ€Đ°Đ˝Đ¸Ń‡Đ˝ĐľĐą Ń?Đ˛ĐľĐ±ĐľĐ´ĐľĐą.",
        mongoliaTourP13: "Đ”ĐµĐ˝ŃŚ 13 ĐŁŃ?Ń€Ń‚Đ¸Đ˝ Đ˘ĐľŃ…ĐľĐą - ĐĄĐľĐłĐ˝Đľ ĐĄĐ°Đ°Đ˝. Đ Đ°Đ˝Đľ Ń?Ń‚Ń€ĐľĐĽ Đ˝Đ°ĐżŃ€Đ°Đ˛Đ»ŃŹĐµĐĽŃ?ŃŹ Đ˛ ĐĽĐľĐ˝Đ°Ń?Ń‚Ń‹Ń€ŃŚ Đ­Ń€Đ´ŃŤĐ˝ŃŤ Đ—Ń?Ń?. Đ­Ń‚Đľ Đ±Ń‹Đ» ĐżĐµŃ€Đ˛Ń‹Đą Đ±Ń?Đ´Đ´Đ¸ĐąŃ?ĐşĐ¸Đą ĐĽĐľĐ˝Đ°Ń?Ń‚Ń‹Ń€ŃŚ Đ˛ ĐśĐľĐ˝ĐłĐľĐ»Đ¸Đ¸. Đ”Đ°Đ»ŃŚŃ?Đµ Đ˝Đ° Đ˛ĐľŃ?Ń‚ĐľĐş ĐĽŃ‹ Đ´ĐľŃ?Ń‚Đ¸ĐłĐ°ĐµĐĽ ĐżŃ€ĐµĐ´ĐłĐľŃ€ŃŚŃŹ ĐżŃ?Ń?Ń‚Ń‹Đ˝Đ¸ Đ“ĐľĐ±Đ¸. ĐťĐ°Ń? Đ»Đ°ĐłĐµŃ€ŃŚ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝ Ń? ĐżĐľĐ´Đ˝ĐľĐ¶Đ¸ŃŹ ĐłŃ€Đ°Đ˝Đ¸Ń‚Đ˝ĐľĐą Ń?ĐşĐ°Đ»Ń‹ Ń? Đ˛ĐµĐ»Đ¸ĐşĐľĐ»ĐµĐżĐ˝Ń‹ĐĽ Đ˛Đ¸Đ´ĐľĐĽ. Đ’ Đ˝ĐµŃ?ĐşĐľĐ»ŃŚĐşĐ¸Ń… ĐşĐ¸Đ»ĐľĐĽĐµŃ‚Ń€Đ°Ń… ĐľŃ‚ ĐľŃ‚ĐµĐ»ŃŹ Đ˝Đ°Ń…ĐľĐ´Đ¸Ń‚Ń?ŃŹ Đ˛ĐľĐ»Ń?ĐµĐ±Đ˝Ń‹Đą ĐżĐµĐąĐ·Đ°Đ¶ ĐżĐµŃ?Ń‡Đ°Đ˝Ń‹Ń… Đ´ŃŽĐ˝, ĐłĐ´Đµ Đ˛Ń‹ ĐĽĐľĐ¶ĐµŃ‚Đµ Đ˛Ń‹ĐżŃ?Ń?Ń‚Đ¸Ń‚ŃŚ ĐżĐ°Ń€ Đ˛Đľ Đ˛Ń‚ĐľŃ€ĐľĐą ĐżĐľĐ»ĐľĐ˛Đ¸Đ˝Đµ Đ´Đ˝ŃŹ.",
        mongoliaTourP14: "Đ”ĐµĐ˝ŃŚ 14 Đ¸ 15 ĐĄĐľĐłĐ˝Đľ ĐĄĐ°Đ°Đ˝ - ĐŁĐ»Đ°Đ˝-Đ‘Đ°Ń‚ĐľŃ€. ĐśŃ‹ Đ´ĐľŃ?Ń‚Đ¸ĐłĐ°ĐµĐĽ ĐşĐľĐ˝ĐµŃ‡Đ˝ĐľĐłĐľ ĐżŃ?Đ˝ĐşŃ‚Đ° Đ˝Đ°Đ·Đ˝Đ°Ń‡ĐµĐ˝Đ¸ŃŹ ĐŁĐ»Đ°Đ˝-Đ‘Đ°Ń‚ĐľŃ€ ĐľĐşĐľĐ»Đľ ĐżĐľĐ»Ń?Đ´Đ˝ŃŹ ĐżĐľ Ń…ĐľŃ€ĐľŃ?ĐµĐą Đ°Ń?Ń„Đ°Đ»ŃŚŃ‚Đ¸Ń€ĐľĐ˛Đ°Đ˝Đ˝ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ. Đ”ĐµĐ˝ŃŚ Ń?Đ˛ĐľĐ±ĐľĐ´Đ˝Ń‹Đą. Đ Đ°Đ˝Đ˝Đ¸ĐĽ Đ˛ĐµŃ‡ĐµŃ€ĐľĐĽ ĐĽŃ‹ ĐµĐ´ĐµĐĽ Đ˛ Ń„ĐľĐ»ŃŚĐşĐ»ĐľŃ€Đ˝Ń‹Đą Ń†ĐµĐ˝Ń‚Ń€, ĐłĐ´Đµ Đ¸Ń?ĐżĐľĐ»Đ˝ŃŹŃŽŃ‚Ń?ŃŹ Đ˝Đ°Ń€ĐľĐ´Đ˝Ń‹Đµ Ń‚Đ°Đ˝Ń†Ń‹, Đ˝Đ°Ń€ĐľĐ´Đ˝Đ°ŃŹ ĐĽŃ?Đ·Ń‹ĐşĐ° Đ¸ ĐĽĐ¸Ń?Ń‚Đ¸Ń‡ĐµŃ?ĐşĐľĐµ ĐżĐµĐ˝Đ¸Đµ ĐłĐľŃ€Ń‚Đ°Đ˝Đ¸, Đ° Đ˛ ĐşĐľĐ˝Ń†Đµ ĐżĐľĐµĐ·Đ´ĐşĐ¸ ĐĽŃ‹ Đ˛ ĐżĐľŃ?Đ»ĐµĐ´Đ˝Đ¸Đą Ń€Đ°Đ· Đ˝Đ°Ń?Đ»Đ°Đ¶Đ´Đ°ĐµĐĽŃ?ŃŹ ĐĽĐľĐ˝ĐłĐľĐ»ŃŚŃ?ĐşĐľĐą ĐşŃ?Ń…Đ˝ĐµĐą.",
//Tien Shan tour
        tienShanTourP1: " ĐžŃ‚ĐşŃ€ĐľĐąŃ‚Đµ Đ´Đ»ŃŹ Ń?ĐµĐ±ŃŹ Ń?Đ°ĐĽŃ‹Đµ ĐşŃ€Đ°Ń?Đ¸Đ˛Ń‹Đµ Ń€ĐµĐłĐ¸ĐľĐ˝Ń‹ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đ° Đ˝Đ° ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đµ Đ·Đ° Đ´Đ˛Đµ Đ˝ĐµĐ´ĐµĐ»Đ¸",
        tienShanTourP2: " Đ”ĐµĐ˝ŃŚ 1 ĐźŃ€Đ¸Đ±Ń‹Ń‚Đ¸Đµ Đ˛ ĐžŃ? Đ¸ Ń‚ĐµŃ?Ń‚-Đ´Ń€Đ°ĐąĐ˛.ĐźĐľ ĐżŃ€Đ¸Đ±Ń‹Ń‚Đ¸Đ¸ Đ˛ ĐžŃ? Đ¸ ĐżĐľŃ?Đ»Đµ Đ˝ĐµŃ?ĐşĐľĐ»ŃŚĐşĐ¸Ń… Ń‡Đ°Ń?ĐľĐ˛ ĐľŃ‚Đ´Ń‹Ń…Đ° Đ˛ ĐľŃ‚ĐµĐ»Đµ ĐĽŃ‹ Đ·Đ˝Đ°ĐşĐľĐĽĐ¸ĐĽŃ?ŃŹ Ń? ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đ°ĐĽĐ¸ Đ˛ ĐşĐľŃ€ĐľŃ‚ĐşĐľĐą ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸Đ¸. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐžŃ?Đµ.",
        tienShanTourP3: " Đ”ĐµĐ˝ŃŚ 2 Đ­ĐşŃ?ĐşŃ?Ń€Ń?Đ¸ŃŹ Đ˝Đ° ĐľĐ·ĐµŃ€Đľ ĐźĐ°ĐżĐ°Đ˝ Ń? ĐżŃ€ĐľĐµĐ·Đ´Đ˝Ń‹ĐĽ.ĐˇĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝Đ¸Đą Đ´Đ˝ĐµĐ˛Đ˝ĐľĐą Ń‚Ń?Ń€ ĐżŃ€Đ¸Đ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? Ń?Đ˝Đ°Ń‡Đ°Đ»Đ° Đş ĐľĐ·ĐµŃ€Ń? ĐźĐ°ĐżĐ°Đ˝, ĐžŃ?Ń?ĐşĐľĐĽŃ? Đ˛ĐľĐ´ĐľŃ…Ń€Đ°Đ˝Đ¸Đ»Đ¸Ń‰Ń?. ĐśŃ‹ ĐµĐ´ĐµĐĽ ĐżĐľ ĐłŃ€Đ°Đ˛Đ¸ĐąĐ˝Ń‹ĐĽ ĐłŃ€Ń?Đ˝Ń‚ĐľĐ˛Ń‹ĐĽ Đ´ĐľŃ€ĐľĐłĐ°ĐĽ Ń‡ĐµŃ€ĐµĐ· Đ·ĐµĐ»ĐµĐ˝Ń?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń?, Đ° Đ·Đ°Ń‚ĐµĐĽ ĐżĐľ ĐľĐ´Đ˝ĐľĐĽŃ? Đ¸Đ· ĐĽĐ˝ĐľĐłĐľŃ‡Đ¸Ń?Đ»ĐµĐ˝Đ˝Ń‹Ń… ĐżĐµŃ€ĐµĐ˛Đ°Đ»ĐľĐ˛ Đş ŃŽĐłŃ? ĐľŃ‚ ĐłĐľŃ€ĐľĐ´Đ°. ĐźĐľ Ń…ĐľŃ€ĐľŃ?Đľ Ń€Đ°Đ·Đ˛Đ¸Ń‚ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ Đ¸Đ· ĐšĐ¸Ń‚Đ°ŃŹ Đ¸ Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝Đ° Đ˛Đľ Đ˛Ń‚ĐľŃ€ĐľĐą ĐżĐľĐ»ĐľĐ˛Đ¸Đ˝Đµ Đ´Đ˝ŃŹ Đ˛ĐľĐ·Đ˛Ń€Đ°Ń‰Đ°ĐµĐĽŃ?ŃŹ Đ˛ Đ˝Đ°Ń? ĐľŃ‚ĐµĐ»ŃŚ Đ˛ ĐžŃ?Đµ.",
        tienShanTourP4: "Đ”ĐµĐ˝ŃŚ 3 ĐžŃ? Ń‡ĐµŃ€ĐµĐ· ĐžŃ?ĐłĐľĐ˝ Đ˛ Đ?Ń€Ń?Đ»Đ°Đ˝Đ±ĐľĐ±. ĐˇĐµĐłĐľĐ´Đ˝ŃŹ ĐĽŃ‹ ĐżĐµŃ€Đ˛Ń‹Đµ Đ˝Đ° ĐłĐ»Đ°Đ˛Đ˝ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ Đ¸Đ· ĐžŃ?Đ° Đ˛ Đ‘Đ¸Ń?ĐşĐµĐş, Đ˝Đµ Đ´ĐľĐąĐ´ŃŹ Đ´Đľ ĐżĐµŃ€ĐµĐşŃ€ĐµŃ?Ń‚ĐşĐ° Ń? Đ?Ń€Ń?Đ»Đ°Đ˝Đ±ĐľĐ±ĐľĐĽ. Đ­Ń‚Đ° Đ´ĐµŃ€ĐµĐ˛Đ˝ŃŹ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝Đ° Đ˛ Ń?Đ°ĐĽĐľĐĽ Đ±ĐľĐ»ŃŚŃ?ĐľĐĽ ĐľŃ€ĐµŃ…ĐľĐ˛ĐľĐĽ Đ»ĐµŃ?Ń? Đ˛ ĐĽĐ¸Ń€Đµ. Đ?Đ· Đ˝Đ°Ń?ĐµĐą Đ¸Đ´Đ¸Đ»Đ»Đ¸Ń‡ĐµŃ?ĐşĐľĐą Ń?ĐµĐĽŃŚĐ¸ ĐĽŃ‹ ĐĽĐľĐ¶ĐµĐĽ Ń?ĐľĐ˛ĐµŃ€Ń?Đ¸Ń‚ŃŚ Đ˛ĐµŃ‡ĐµŃ€Đ˝ŃŽŃŽ ĐżŃ€ĐľĐłŃ?Đ»ĐşŃ? Đş Đ˛ĐľĐ´ĐľĐżĐ°Đ´Ń?.",
        tienShanTourP5: "Đ”ĐµĐ˝ŃŚ 4 Đš ĐľĐ·ĐµŃ€Ń? Đ˘ĐľĐşŃ‚ĐľĐłŃ?Đ». ĐźĐľŃ?Đ»Đµ ĐżŃ€ĐµĐşŃ€Đ°Ń?Đ˝ĐľĐłĐľ Đ·Đ°Đ˛Ń‚Ń€Đ°ĐşĐ° Đ˝Đ° Đ˛ĐµŃ€Đ°Đ˝Đ´Đµ Ń? Đ˛Đ¸Đ´ĐľĐĽ Đ˝Đ° ĐłĐľŃ€Ń‹ ĐĽŃ‹ ĐżŃ€ĐľŃ‰Đ°ĐµĐĽŃ?ŃŹ Ń? Đ˝Đ°Ń?Đ¸ĐĽĐ¸ ĐłĐľŃ?Ń‚ĐµĐżŃ€Đ¸Đ¸ĐĽĐ˝Ń‹ĐĽĐ¸ Ń…ĐľĐ·ŃŹĐµĐ˛Đ°ĐĽĐ¸. ĐťĐ°Ń?Đ° Ń†ĐµĐ»ŃŚ Đ˝Đ° Đ´ĐµĐ˝ŃŚ - ĐľŃ‚ĐµĐ»ŃŚ ĐżŃ€ŃŹĐĽĐľ Đ˝Đ° ĐľĐłŃ€ĐľĐĽĐ˝ĐľĐĽ Đ˘ĐľĐşŃ‚ĐľĐłŃ?Đ»ŃŚŃ?ĐşĐľĐĽ Đ˛ĐľĐ´ĐľŃ…Ń€Đ°Đ˝Đ¸Đ»Đ¸Ń‰Đµ. Đ•ĐłĐľ Ń‚ĐµĐżĐ»Đ°ŃŹ Ń‚ĐµĐĽĐżĐµŃ€Đ°Ń‚Ń?Ń€Đ° ĐżŃ€Đ¸ĐłĐ»Đ°Ń?Đ°ĐµŃ‚ Đ˛Đ°Ń? ĐżŃ€Đ¸Đ˝ŃŹŃ‚ŃŚ Đ˛Đ°Đ˝Đ˝Ń?.",
        tienShanTourP6: "Đ”ĐµĐ˝ŃŚ 5 ĐźĐµŃ€ĐµĐµĐ·Đ´ Đ˛ ĐšŃ‹Đ·Ń‹Đ»-ĐžĐą. ĐźĐľĐşĐľŃ€Đ¸Đ˛ ĐżĐµŃ€ĐµĐ˛Đ°Đ» Đ?Đ»Đ°Đ±ĐµĐ»ŃŚ Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 3400 ĐĽ, ĐĽŃ‹ Đ˛ĐľŃ?Ń…Đ¸Ń‰Đ°ĐµĐĽŃ?ŃŹ ĐżŃ€ĐľŃ?Ń‚ĐľŃ€Đ°ĐĽĐ¸ ĐˇŃ?Ń?Ń?Đ°ĐĽĐ¸Ń€Ń?ĐşĐľĐłĐľ ĐżĐ»Đ°Ń‚Đľ. ĐžŃ‚Ń‚Ń?Đ´Đ° ĐĽŃ‹ ĐżĐľĐµĐ´ĐµĐĽ Đ˛ ĐšŃ‹Đ·Ń‹Đ»-ĐľĐą Đş ĐłĐľŃ?Ń‚ĐµĐ˛ĐľĐĽŃ? Đ´ĐľĐĽŃ?.",
        tienShanTourP7: "Đ”ĐµĐ˝ŃŚ 6 ĐźŃ€ĐľĐ´ĐľĐ»Đ¶ĐµĐ˝Đ¸Đµ ĐżŃ?Ń‚Đ¸ Đ˛ ĐšĐľŃ‡ĐşĐľŃ€. ĐˇĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝Đ¸Đą ĐĽĐ°Ń€Ń?Ń€Ń?Ń‚ ĐżŃ€ĐľĐ»ĐµĐłĐ°ĐµŃ‚ ĐľŃ‚ ĐšŃ‹Đ·Ń‹Đ»-ĐľĐą Đ´Đľ ĐšĐľŃ‡ĐşĐľŃ€. ĐźŃ€Đ¸ Đ¶ĐµĐ»Đ°Đ˝Đ¸Đ¸ ĐĽĐľĐ¶Đ˝Đľ ĐľŃ‚ĐżŃ€Đ°Đ˛Đ¸Ń‚ŃŚŃ?ŃŹ Đ˝Đ° Ń?Ń‚Đ°Ń€Ń?ŃŽ Ń?Ń€Đ°Đ˝ĐľĐ˛Ń?ŃŽ Ń?Đ°Ń…Ń‚Ń? Đ˛ ĐłĐľŃ€ĐľĐ´Đµ ĐśĐ¸Đ˝Đł ĐšŃ?Ń?. Đ­Ń‚Đľ Ń?Đ´Đ°Đ»ĐµĐ˝Đ˝ĐľĐµ ĐĽĐµŃ?Ń‚Đľ ĐľŃ?ĐľĐ±ĐµĐ˝Đ˝Đľ ĐżĐľĐ»ĐµĐ·Đ˝Đľ Đ´Đ»ŃŹ Ń„ĐľŃ‚ĐľĐłŃ€Đ°Ń„ĐľĐ˛.",
        tienShanTourP8: "Đ”ĐµĐ˝ŃŚ 7 ĐˇĐµĐłĐľĐ´Đ˝ŃŹ Đ´ĐµĐ˝ŃŚ ĐľŃ‚Đ´Ń‹Ń…Đ°. ĐšŃ‚Đľ Ń…ĐľŃ‡ĐµŃ‚ ĐżĐľĐ±Ń‹Đ˛Đ°Ń‚ŃŚ Đ˝Đ° ĐşŃ‹Ń€ĐłŃ‹Đ·Ń?ĐşĐľĐĽ ĐşĐľĐ˛Ń€ĐľĐ˛ĐľĐĽ ĐżŃ€ĐľĐ¸Đ·Đ˛ĐľĐ´Ń?Ń‚Đ˛Đµ. Đ­Ń‚Đ¸ Đ˛ĐľĐąĐ»ĐľŃ‡Đ˝Ń‹Đµ ĐşĐľĐ˛Ń€Ń‹, Đ˝Đ°Đ·Ń‹Đ˛Đ°ĐµĐĽŃ‹Đµ Ń?Ń‹Ń€Đ´Đ°ĐşĐ°ĐĽĐ¸, Đ˛ ĐľŃ?Đ˝ĐľĐ˛Đ˝ĐľĐĽ ĐżŃ€ĐľĐ¸Đ·Đ˛ĐľĐ´ŃŹŃ‚Ń?ŃŹ Đ˛ Đ´ĐľĐĽĐ°Ń?Đ˝Đ¸Ń… Ń?Ń?Đ»ĐľĐ˛Đ¸ŃŹŃ….",
        tienShanTourP9: "Đ•Ń?Đ»Đ¸ Đ˛Ń‹ Đ˝Đµ Ń…ĐľŃ‚Đ¸Ń‚Đµ ĐżŃ€ĐľĐżŃ?Ń?Ń‚Đ¸Ń‚ŃŚ ĐżĐľĐµĐ·Đ´ĐşŃ? Đ˝Đ° ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đµ, Đ˛Ń‹ ĐĽĐľĐ¶ĐµŃ‚Đµ ĐľŃ‚ĐżŃ€Đ°Đ˛Đ¸Ń‚ŃŚŃ?ŃŹ Đ˝Đ° Đ±Đ»Đ¸Đ·Đ»ĐµĐ¶Đ°Ń‰Đ¸Đą Đ?Ń?Ń?Ń‹Đş-ĐšŃ?Đ»ŃŚ, Đ˛Ń‚ĐľŃ€ĐľĐą ĐżĐľ Đ˛ĐµĐ»Đ¸Ń‡Đ¸Đ˝Đµ Đ¸Ń?Ń‚ĐľŃ‡Đ˝Đ¸Đş ĐżŃ€ĐµŃ?Đ˝ĐľĐą Đ˛ĐľĐ´Ń‹ Đ˛ ĐĽĐ¸Ń€Đµ.",
        tienShanTourP10: "Đ”ĐµĐ˝ŃŚ 8 Đ’ ĐťĐ°Ń€Ń‹Đ˝. Đ Đ°Đ˝Đľ Ń?Ń‚Ń€ĐľĐĽ Đ˛Ń‹Ń…ĐľĐ´Đ¸ĐĽ Đ¸Đ· ĐşŃ€Đ°Ń?Đ¸Đ˛ĐľĐą ĐłĐľŃ?Ń‚Đ¸Đ˝ĐľĐą Đ¸ ĐľŃ‚ĐżŃ€Đ°Đ˛Đ»ŃŹĐµĐĽŃ?ŃŹ Đ˛ ĐťĐ°Ń€Ń‹Đ˝. ĐśŃ‹ Đ´ĐµĐ»Đ°ĐµĐĽ ĐżĐľĐ»ĐµĐ·Đ˝Ń‹Đą ĐľĐ±ŃŠĐµĐ·Đ´ Đ¸ Ń?Đ»ĐµĐ´Ń?ĐµĐĽ ĐżĐľ Ń€ĐµĐşĐµ ĐťĐ°Ń€Ń‹Đ˝ Ń‡ĐµŃ€ĐµĐ· Ń?ĐşŃ€ĐľĐĽĐ˝Ń‹Đµ Đ´ĐľĐ»Đ¸Đ˝Ń‹ Đ¸ Ń?Ń‰ĐµĐ»ŃŚŃŹ. ĐźĐµŃ€ĐµĐ˛Đ°Đ» Đ”Đ¶Đ°Đ»ĐżĐ°Đş Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 3300 ĐĽ ĐżŃ€Đ¸ĐłĐ»Đ°Ń?Đ°ĐµŃ‚ Đ˝Đ° ĐżĐ¸ĐşĐ˝Đ¸Đş!",
        tienShanTourP11: "Đ”ĐµĐ˝ŃŚ 9 Â«Đ–ĐµĐĽŃ‡Ń?Đ¶Đ¸Đ˝Đ°Â» ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đ° - ĐľĐ·ĐµŃ€Đľ ĐˇĐľĐ˝ĐłĐşĐľĐ»ŃŚ. Đ’ ŃŤŃ‚ĐľŃ‚ Đ´ĐµĐ˝ŃŚ ĐĽŃ‹ Ń?ĐľĐ±Đ¸Ń€Đ°ĐµĐĽŃ?ŃŹ Đ˝Đ° ĐˇĐľĐ˝ĐłĐşĐľĐ»ŃŚ. Đ­Ń‚Đľ Ń‡Ń?Đ´ĐµŃ?Đ˝ĐľĐµ ĐľĐ·ĐµŃ€Đľ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝Đľ Đ˝Đ° ĐłĐ¸ĐłĐ°Đ˝Ń‚Ń?ĐşĐľĐĽ ĐżĐ»Đ°Ń‚Đľ Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 3000 ĐĽ Đ˝Đ°Đ´ Ń?Ń€ĐľĐ˛Đ˝ĐµĐĽ ĐĽĐľŃ€ŃŹ. Đś., ĐłĐ´Đµ ĐşĐ¸Ń€ĐłĐ¸Đ·Ń?ĐşĐ¸Đµ ĐżĐ°Ń?Ń‚Ń?Ń…Đ¸ ĐżĐ°Ń?Ń?Ń‚ Ń?Đ˛ĐľĐ¸ Ń?Ń‚Đ°Đ´Đ° Đ˛ Đ»ĐµŃ‚Đ˝Đ¸Đµ ĐĽĐµŃ?ŃŹŃ†Ń‹. ĐťĐľŃ‡Đ¸ Đ·Đ´ĐµŃ?ŃŚ Đ˛ ĐľŃ?Đ˝ĐľĐ˛Đ˝ĐľĐĽ Ń…ĐľĐ»ĐľĐ´Đ˝Ń‹Đµ Đ¸ ŃŹŃ?Đ˝Ń‹Đµ Ń?Đľ Đ·Đ˛ĐµĐ·Đ´Đ°ĐĽĐ¸, Ń?Ń‚ĐľĐ¸Ń‚ ĐżĐľŃ?ĐĽĐľŃ‚Ń€ĐµŃ‚ŃŚ Đ˝Đ° Đ˝ĐµĐ±Đľ. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐşĐľĐĽŃ„ĐľŃ€Ń‚Đ°Đ±ĐµĐ»ŃŚĐ˝Ń‹Ń… ŃŽŃ€Ń‚Đ°Ń….",
        tienShanTourP12: "Đ”ĐµĐ˝ŃŚ 10 Đ’ĐľĐ·Đ˛Ń€Đ°Ń‰ĐµĐ˝Đ¸Đµ Đ˛ ĐťĐ°Ń€Ń‹Đ˝. ĐźĐľ Đ´Ń€Ń?ĐłĐľĐĽŃ?, Đ˝Đľ Đ˝Đµ ĐĽĐµĐ˝ĐµĐµ Ń?Đ˛Đ»ĐµĐşĐ°Ń‚ĐµĐ»ŃŚĐ˝ĐľĐĽŃ? ĐĽĐ°Ń€Ń?Ń€Ń?Ń‚Ń? ĐĽŃ‹ Đ˛ĐľĐ·Đ˛Ń€Đ°Ń‰Đ°ĐµĐĽŃ?ŃŹ Đ˛ ĐťĐ°Ń€Ń‹Đ˝, ĐłĐ´Đµ ĐżĐľĐ·Đ°Đ˛Ń‡ĐµŃ€Đ°Ń?Đ˝Đ¸Đµ ĐşĐľĐĽŃ„ĐľŃ€Ń‚Đ°Đ±ĐµĐ»ŃŚĐ˝Ń‹Đµ Đ˝ĐľĐĽĐµŃ€Đ° Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝Ń‹.",
        tienShanTourP13: "Đ”ĐµĐ˝ŃŚ 11 Đ’ ĐşĐ°Ń€Đ°Đ˛Đ°Đ˝-Ń?Đ°Ń€Đ°Đą Đ˘Đ°Ń?-Đ Đ°Đ±Đ°Ń‚. ĐźĐľ Ń…ĐľŃ€ĐľŃ?ĐµĐą Đ´ĐľŃ€ĐľĐłĐµ Ń‡ĐµŃ€ĐµĐ· Đ´ĐľĐ»Đ¸Đ˝Ń? Ń? ĐĽĐ˝ĐľĐ¶ĐµŃ?Ń‚Đ˛ĐľĐĽ Ń?Ń?Ń€ĐşĐľĐ˛ ĐĽŃ‹ ĐżĐľĐżĐ°Đ´Đ°ĐµĐĽ Đ˛ Đ˘Đ°Ń?-Đ Đ°Đ±Đ°Ń‚, Ń?Ń‚Đ°Ń€Ń?ŃŽ Ń?Ń‚ĐľŃŹĐ˝ĐşŃ? Đ´Đ»ŃŹ ĐşĐ°Ń€Đ°Đ˛Đ°Đ˝ĐľĐ˛ Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 3000 ĐĽ Đ˝Đ°Đ´ Ń?Ń€ĐľĐ˛Đ˝ĐµĐĽ ĐĽĐľŃ€ŃŹ. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ Ń?ŃŽŃ‚Đ˝ĐľĐą ŃŽŃ€Ń‚Đµ. ĐťĐ°Ń?Đ° ĐżŃ€Đ¸Đ˝Đ¸ĐĽĐ°ŃŽŃ‰Đ°ŃŹ Ń?ĐµĐĽŃŚŃŹ Đ˝Đ°ĐłŃ€ĐµĐ˛Đ°ĐµŃ‚ Đ´Đ»ŃŹ Đ˝Đ°Ń? Ń?Đ°Ń?Đ˝Ń?.",
        tienShanTourP14: "Đ”ĐµĐ˝ŃŚ 12: Đ˘Ń€ĐµĐşĐşĐ¸Đ˝Đł Ń? Đ˛Đ¸Đ´ĐľĐĽ Đ˝Đ° ĐťĐ°Ń€Ń‹Đ˝Ń?ĐşŃ?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń?. ĐˇĐµĐłĐľĐ´Đ˝ŃŹ Đ»Đ°Đ˝Đ´Ń?Đ°Ń„Ń‚, Ń†Đ˛ĐµŃ‚Đ° Đ¸ ĐłĐľŃ€Đ˝Ń‹Đµ Ń…Ń€ĐµĐ±Ń‚Ń‹ ĐĽĐµĐ˝ŃŹŃŽŃ‚Ń?ŃŹ ĐżĐľŃ‡Ń‚Đ¸ ĐşĐ°Đ¶Đ´Ń‹Đą Ń‡Đ°Ń?! Đ?Đ·ŃŽĐĽĐ¸Đ˝ĐşĐľĐą ŃŹĐ˛Đ»ŃŹĐµŃ‚Ń?ŃŹ ĐżĐµŃ€ĐµĐ˛Đ°Đ» ĐšŃ?Đ»Đ°Đş-Đ?Ń?Ń?Ń? Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 3400 ĐĽ.",
        tienShanTourP15: "ĐśŃ‹ Đ˝Đ°Ń…ĐľĐ´Đ¸ĐĽŃ?ŃŹ Đ˛ Ń†ĐµĐ˝Ń‚Ń€Đµ Đ˘ŃŹĐ˝ŃŚ-Đ¨Đ°Đ˝ŃŹ. Đ­Ń‚ĐľŃ‚ ĐłĐľŃ€Đ˝Ń‹Đą ĐĽĐ°Ń?Ń?Đ¸Đ˛ Đ˝Đ°Ń…ĐľĐ´Đ¸Ń‚Ń?ŃŹ Đ˝Đ° ĐłŃ€Đ°Đ˝Đ¸Ń†Đµ Ń? ĐšĐ¸Ń‚Đ°ĐµĐĽ Đ¸ Đ´Đ°Đ» Đ˝Đ°Đ·Đ˛Đ°Đ˝Đ¸Đµ Đ˝Đ°Ń?ĐµĐĽŃ? Ń‚Ń?Ń€Ń?. ĐˇĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝Đ¸Đą ŃŤŃ‚Đ°Đż Đ·Đ°ĐşĐ°Đ˝Ń‡Đ¸Đ˛Đ°ĐµŃ‚Ń?ŃŹ Đ˛ ĐšĐ°Đ·Đ°Ń€ĐĽĐ°Đ˝Đµ, Đ·ĐľĐ»ĐľŃ‚ĐľĐ´ĐľĐ±Ń‹Đ˛Đ°ŃŽŃ‰ĐµĐĽ ĐłĐľŃ€ĐľĐ´ĐşĐµ. ĐśŃ‹ Ń?Đ˝ĐľĐ˛Đ° ĐĽĐľĐ¶ĐµĐĽ ĐżŃ€Đ¸Đ˝ŃŹŃ‚ŃŚ Đ´Ń?Ń?.",
        tienShanTourP16: "Đ”ĐµĐ˝ŃŚ 13 Đ§ĐµŃ€ĐµĐ· ĐżĐµŃ€ĐµĐ˛Đ°Đ» ĐšĐ°Đ»Đ´Đ°ĐĽ Đ˛ ĐžŃ?. ĐžĐ±Ń€Đ°Ń‚Đ˝Ń‹Đą ĐżŃ?Ń‚ŃŚ Đ˛ ĐžŃ? Đ´ĐľĐ»ĐľĐł, Đ˝Đľ Ń€Đ°Đ·Đ˝ĐľĐľĐ±Ń€Đ°Đ·ĐµĐ˝. ĐťĐ° ĐšĐ°Đ»Đ´Đ°ĐĽŃ?ĐşĐľĐĽ ĐżĐµŃ€ĐµĐ˛Đ°Đ»Đµ Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 3062 ĐĽĐµŃ‚Ń€Đ° Ń‡Đ°Ń?Ń‚Đľ ĐľŃ?Ń‚Đ°ĐµŃ‚Ń?ŃŹ Ń?Đ˝ĐµĐł Đ˝Đ° ĐľĐ±ĐľŃ‡Đ¸Đ˝Đµ Đ´ĐľŃ€ĐľĐłĐ¸. Đ–Đ´ĐµĐĽ ĐşĐľĐĽŃ„ĐľŃ€Ń‚Đ°Đ±ĐµĐ»ŃŚĐ˝Ń‹Đą ĐľŃ‚ĐµĐ»ŃŚ Đ˛ ĐžŃ?Đµ Đ¸ ĐľŃ‚Đ»Đ¸Ń‡Đ˝Ń‹Đą Ń?Đ¶Đ¸Đ˝.",
        tienShanTourP17: "14-15 Đ´ĐµĐ˝ŃŚ ĐžŃ? Đ¸ ĐľŃ‚ŃŠĐµĐ·Đ´. ĐźĐľŃ?Đ»ĐµĐ´Đ˝Đ¸Đą Đ´ĐµĐ˝ŃŚ Ń‚Ń?Ń€Đ° ĐżŃ€ĐľĐ˛ĐľĐ´Đ¸ĐĽ Đ˛ ĐžŃ?Đµ. ĐŁ Đ˝Đ°Ń? ĐµŃ?Ń‚ŃŚ Đ˛Ń€ĐµĐĽŃŹ ĐżĐľŃ?ĐµŃ‚Đ¸Ń‚ŃŚ Đ±Đ°Đ·Đ°Ń€ Đ¸Đ»Đ¸ ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸ŃŽ ĐżĐľ ĐłĐľŃ€ĐľĐ´Ń?, Đ° Đ·Đ°Ń‚ĐµĐĽ ĐľŃ‚ĐżŃ€Đ°Đ·Đ´Đ˝ĐľĐ˛Đ°Ń‚ŃŚ Ń?Ń?ĐżĐµŃ?Đ˝Ń?ŃŽ ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸ŃŽ. ĐťĐ° Ń?Đ»ĐµĐ´Ń?ŃŽŃ‰ĐµĐµ Ń?Ń‚Ń€Đľ Đ˝Đ°Ń? ĐľŃ‚Đ˛ĐµĐ·Ń?Ń‚ Đ˛ Đ°ŃŤŃ€ĐľĐżĐľŃ€Ń‚.",
//Tosor tour
        tosorTourP1: "ĐžŃ‚ĐşŃ€ĐľĐąŃ‚Đµ Đ´Đ»ŃŹ Ń?ĐµĐ±ŃŹ Ń?Đ°ĐĽŃ‹Đµ ĐşŃ€Đ°Ń?Đ¸Đ˛Ń‹Đµ Ń€ĐµĐłĐ¸ĐľĐ˝Ń‹ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đ° Đ˝Đ° ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đµ Đ·Đ° Đ´Đ˛Đµ Đ˝ĐµĐ´ĐµĐ»Đ¸. Đˇ ĐżĐľĐµĐ·Đ´ĐşĐ°ĐĽĐ¸ ĐżĐľ Ń‚Ń€Ń?Đ´Đ˝ĐľĐżŃ€ĐľŃ…ĐľĐ´Đ¸ĐĽĐľĐą ĐĽĐµŃ?Ń‚Đ˝ĐľŃ?Ń‚Đ¸.",
        tosorTourP2: " Đ”ĐµĐ˝ŃŚ 1 ĐźŃ€Đ¸Đ±Ń‹Ń‚Đ¸Đµ Đ˛ ĐžŃ?. ĐźĐľŃ?Đ»Đµ ĐżĐľĐ»ĐµŃ‚Đ° Đ˛Ń‹ ĐżŃ€Đ¸Đ·ĐµĐĽĐ»Đ¸Ń‚ĐµŃ?ŃŚ Đ˛ ĐžŃ?Đµ, Đ˛Ń‚ĐľŃ€ĐľĐĽ ĐżĐľ Đ˛ĐµĐ»Đ¸Ń‡Đ¸Đ˝Đµ ĐłĐľŃ€ĐľĐ´Đµ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đ°. Đ’Đ°Ń? Đ·Đ°Đ±ĐµŃ€Ń?Ń‚, Đ¸ Đ˛Ń‹ Ń?ĐĽĐľĐ¶ĐµŃ‚Đµ ĐľŃ‚Đ´ĐľŃ…Đ˝Ń?Ń‚ŃŚ Đ˝ĐµŃ?ĐşĐľĐ»ŃŚĐşĐľ Ń‡Đ°Ń?ĐľĐ˛ Đ˛ Đ˝Đ°Ń?ĐµĐĽ ĐľŃ‚ĐµĐ»Đµ. ĐźĐľŃ?Đ»Đµ ĐľĐ±ĐµĐ´Đ° ĐĽŃ‹ Ń?ĐľĐ˛ĐµŃ€Ń?Đ¸ĐĽ Đ˝ĐµĐ±ĐľĐ»ŃŚŃ?Ń?ŃŽ ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸ŃŽ Đ·Đ° ĐłĐľŃ€ĐľĐ´, Ń‡Ń‚ĐľĐ±Ń‹ ĐżĐľĐ·Đ˝Đ°ĐşĐľĐĽĐ¸Ń‚ŃŚŃ?ŃŹ Ń? ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đ°ĐĽĐ¸. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐžŃ?Đµ.",
        tosorTourP3: "Đ”ĐµĐ˝ŃŚ 2 ĐźĐµŃ€ĐµĐµĐ·Đ´ Đ˝Đ° ĐľĐ·ĐµŃ€Đľ ĐźĐ°ĐżĐ°Đ˝ Đ¸ ĐżĐµŃ€Đ˛Ń‹Đą ĐżĐµŃ€ĐµĐµĐ·Đ´. Đ”Đ˝ĐµĐ˛Đ˝ĐľĐą Ń‚Ń?Ń€ (ĐľĐşĐľĐ»Đľ 150 ĐşĐĽ) ĐżŃ€Đ¸Đ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? Đş ĐľĐ·ĐµŃ€Ń? ĐźĐ°ĐżĐ°Đ˝, ĐžŃ?Ń?ĐşĐľĐĽŃ? Đ˛ĐľĐ´ĐľŃ…Ń€Đ°Đ˝Đ¸Đ»Đ¸Ń‰Ń?. ĐśŃ‹ ĐµĐ´ĐµĐĽ ĐżĐľ ĐłŃ€Đ°Đ˛Đ¸ĐąĐ˝Ń‹ĐĽ ĐłŃ€Ń?Đ˝Ń‚ĐľĐ˛Ń‹ĐĽ Đ´ĐľŃ€ĐľĐłĐ°ĐĽ Ń‡ĐµŃ€ĐµĐ· Đ·ĐµĐ»ĐµĐ˝Ń?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń? Đ¸ Ń‡ĐµŃ€ĐµĐ· ĐľĐ´Đ¸Đ˝ Đ¸Đ· ĐĽĐ˝ĐľĐłĐľŃ‡Đ¸Ń?Đ»ĐµĐ˝Đ˝Ń‹Ń… ĐżĐµŃ€ĐµĐ˛Đ°Đ»ĐľĐ˛ Đş ŃŽĐłŃ? ĐľŃ‚ ĐłĐľŃ€ĐľĐ´Đ°. Đ’ĐľĐ·Đ˛Ń€Đ°Ń‰Đ°ĐµĐĽŃ?ŃŹ ĐżĐľ Ń…ĐľŃ€ĐľŃ?Đľ Ń€Đ°Đ·Đ˛Đ¸Ń‚ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐžŃ?Đµ.",
        tosorTourP4: "Đ”ĐµĐ˝ŃŚ 3 Đ§ĐµŃ€ĐµĐ· ĐżĐµŃ€ĐµĐ˛Đ°Đ» ĐšĐ°Đ»Đ´Đ°ĐĽ Đ˛ Ń?Ń‚ĐľŃ€ĐľĐ˝Ń? ĐšĐ°Đ·Đ°Ń€ĐĽĐ°Đ˝Đ°. ĐťĐ°Ń?Đ° Ń†ĐµĐ»ŃŚ Ń?ĐµĐłĐľĐ´Đ˝ŃŹ - ĐšĐ°Đ·Đ°Ń€ĐĽĐ°Đ˝, ĐłĐľŃ€ĐľĐ´ Đ·ĐľĐ»ĐľŃ‚ĐľĐą Đ»Đ¸Ń…ĐľŃ€Đ°Đ´ĐşĐ¸ Đ˛ Ń†ĐµĐ˝Ń‚Ń€Đ°Đ»ŃŚĐ˝ĐľĐĽ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đµ. Đ’Ń‹Đ±Đ¸Ń€Đ°ĐµĐĽ Đ´ĐľŃ€ĐľĐłĐ¸ Ń? Đ˝Đ¸Đ·ĐşĐľĐą ĐżŃ€ĐľŃ…ĐľĐ´Đ¸ĐĽĐľŃ?Ń‚ŃŚŃŽ Đ¸ ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµĐĽ ĐżĐµŃ€ĐµĐ˛Đ°Đ» ĐšĐ°Đ»Đ´Đ°ĐĽ Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 3000 ĐĽ. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐłĐľŃ?Ń‚ĐµĐ˛ĐľĐĽ Đ´ĐľĐĽĐµ Ń? ĐşĐ¸Ń€ĐłĐ¸Đ·Ń?ĐşĐľĐą Ń?ĐµĐĽŃŚĐµĐą.",
        tosorTourP5: "Đ”ĐµĐ˝ŃŚ 4 ĐźĐµŃ€ĐµŃ…ĐľĐ´ Đ˛ ĐşĐ°Ń€Đ°Đ˛Đ°Đ˝-Ń?Đ°Ń€Đ°Đą Đ˘Đ°Ń?-Đ Đ°Đ±Đ°Ń‚. ĐˇĐµĐłĐľĐ´Đ˝ŃŹ Đ˛ ĐżŃ€ĐľĐłŃ€Đ°ĐĽĐĽĐµ Đ´Đ˛Đ° ĐżĐµŃ€ĐµĐ˛Đ°Đ»Đ° Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą Đ±ĐľĐ»ĐµĐµ 3000 ĐĽ. ĐťĐ°Ń?Đ»Đ°Đ¶Đ´Đ°ĐµĐĽŃ?ŃŹ ĐżŃ€ĐľŃ?Ń‚ĐľŃ€Đ°ĐĽĐ¸ Đ¸ Ń?ĐµĐ´Đ¸Đ˝ĐµĐ˝Đ¸ĐµĐĽ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đ° Đ¸ Ń?ĐĽĐľŃ‚Ń€Đ¸ĐĽ Đ˝Đ° ĐťĐ°Ń€Ń‹Đ˝Ń?ĐşŃ?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń?. Đ•Đ´ĐµĐĽ ĐżĐľ ĐşŃ€Ń?Ń‚Ń‹ĐĽ ĐłĐľŃ€Đ˝Ń‹ĐĽ Đ´ĐľŃ€ĐľĐłĐ°ĐĽ, ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµĐĽ Đ˛Ń‹Ń?ĐľŃ…Ń?Đ¸Đµ Ń€ĐµĐşĐ¸ Đ¸ Đ˛Đ¸Đ´Đ¸ĐĽ Ń?Ń‚Đ°Đ´Đ° ĐżĐ°Ń?Ń?Ń‰Đ¸Ń…Ń?ŃŹ ĐľĐ˛ĐµŃ† Đ¸ ŃŹĐşĐľĐ˛. ĐťĐ°Ń? ŃŽŃ€Ń‚ĐľŃ‡Đ˝Ń‹Đą Đ»Đ°ĐłĐµŃ€ŃŚ Đ˝Đ°Ń…ĐľĐ´Đ¸Ń‚Ń?ŃŹ Đ˛ Đ˝ĐµĐżĐľŃ?Ń€ĐµĐ´Ń?Ń‚Đ˛ĐµĐ˝Đ˝ĐľĐą Đ±Đ»Đ¸Đ·ĐľŃ?Ń‚Đ¸ ĐľŃ‚ ĐşĐ°Ń€Đ°Đ˛Đ°Đ˝-Ń?Đ°Ń€Đ°ŃŹ Đ˛ Đ˘Đ°Ń?-Đ Đ°Đ±Đ°Ń‚Đµ.",
        tosorTourP6: "Đ”ĐµĐ˝ŃŚ 5 F AHRT Đş ĐľĐ·ĐµŃ€Ń? Đ§Đ°Ń‚Ń‹Ń€-ĐšŃ?Đ»ŃŚ Đ¸ ĐťĐ°Ń€Ń‹Đ˝. ĐˇĐ´ĐµĐ»Đ°ĐµĐĽ ĐľĐ±ŃŠĐµĐ·Đ´ Đ˛ ĐťĐ°Ń€Ń‹Đ˝, Ń?Đ˝Đ¸Đ˛ĐµŃ€Ń?Đ¸Ń‚ĐµŃ‚Ń?ĐşĐ¸Đą ĐłĐľŃ€ĐľĐ´ĐľĐş Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 2000 ĐĽ, Đ˛Đ´ĐľĐ»ŃŚ ĐşĐ¸Ń‚Đ°ĐąŃ?ĐşĐľĐą ĐłŃ€Đ°Đ˝Đ¸Ń†Ń‹ Đ´Đľ ĐľĐ·ĐµŃ€Đ° Đ§Đ°Ń‚Ń‹Ń€-ĐšŃ?Đ»ŃŚ. Đ•Đ·Đ´Đ° Đ˝Đ° ŃŤĐ˝Đ´Ń?Ń€Đľ ĐżĐľ Ń?Ń…Đ°Đ±Đ¸Ń?Ń‚ĐľĐĽŃ? Ń?ĐşĐ»ĐľĐ˝Ń?, ĐżĐľĐ»Đ˝ĐľĐĽŃ? ĐżŃ€Đ¸ĐşĐ»ŃŽŃ‡ĐµĐ˝Đ¸Đą, Đ´ĐľŃ?Ń‚Đ°Đ˛Đ»ŃŹĐµŃ‚ ĐĽĐ°Ń?Ń?Ń? Ń?Đ´ĐľĐ˛ĐľĐ»ŃŚŃ?Ń‚Đ˛Đ¸ŃŹ. Đ§ĐµŃ€ĐµĐ· 210 ĐşĐĽ Đ˝Đ°Ń? Đ¶Đ´Ń‘Ń‚ Đ´Ń?Ń? Đ¸ Ń‡Ń?Đ´ĐµŃ?Đ˝Ń‹Đą Ń?Đ¶Đ¸Đ˝ Đ˛ ĐťĐ°Ń€Ń‹Đ˝Đµ.",
        tosorTourP7: "Đ”ĐµĐ˝ŃŚ 6 Đ§ĐµŃ€ĐµĐ· ĐżĐµŃ€ĐµĐ˛Đ°Đ» Đ˘ĐľŃ?ĐľŃ€ Đş ĐľĐ·ĐµŃ€Ń? Đ?Ń?Ń?Ń‹Đş-ĐšŃ?Đ»ŃŚ. ĐˇĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝ŃŹŃŹ ĐżĐľĐµĐ·Đ´ĐşĐ° ĐżŃ€ĐľĐ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? ĐżĐľ Ń€ĐµĐşĐµ ĐťĐ°Ń€Ń‹Đ˝. ĐśŃ‹ ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµĐĽ Ń?Đ¸Ń€ĐľĐşĐ¸Đµ Đ´ĐľĐ»Đ¸Đ˝Ń‹, Ń?Đ·ĐşĐ¸Đµ Đ¸ ĐşŃ€Ń?Ń‚Ń‹Đµ Ń?Ń‰ĐµĐ»ŃŚŃŹ Đ¸ ĐżŃ€ĐľŃ…ĐľĐ´Đ¸ĐĽ ĐżĐµŃ€ĐµĐ˛Đ°Đ» Đ˘ĐľŃ?ĐľŃ€ Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 3800 ĐĽ, ĐşĐľŃ‚ĐľŃ€Ń‹Đą Đ´Đ°Đ» Đ˝Đ°Đ·Đ˛Đ°Đ˝Đ¸Đµ ŃŤŃ‚ĐľĐĽŃ? ĐżŃ?Ń‚ĐµŃ?ĐµŃ?Ń‚Đ˛Đ¸ŃŽ. Đ­Ń‚ĐľŃ‚ ĐľĐżĐ°Ń?Đ˝Ń‹Đą ĐĽĐ°Ń€Ń?Ń€Ń?Ń‚ Đ·Đ°ĐşĐ°Đ˝Ń‡Đ¸Đ˛Đ°ĐµŃ‚Ń?ŃŹ Ń? ĐľĐ·ĐµŃ€Đ° Đ?Ń?Ń?Ń‹Đş-ĐšŃ?Đ»ŃŚ. ĐžĐ˝Đľ Đ˛ Đ´ĐµŃ?ŃŹŃ‚ŃŚ Ń€Đ°Đ· Đ±ĐľĐ»ŃŚŃ?Đµ Đ‘ĐľĐ´ĐµĐ˝Ń?ĐşĐľĐłĐľ ĐľĐ·ĐµŃ€Đ° Đ¸ ĐżŃ€Đ¸ĐłĐ»Đ°Ń?Đ°ĐµŃ‚ Đ˝Đ°Ń? ĐľŃ?Đ˛ĐµĐ¶Đ¸Ń‚ŃŚŃ?ŃŹ Đ˛ ĐşŃ€Đ¸Ń?Ń‚Đ°Đ»ŃŚĐ˝Đľ Ń‡Đ¸Ń?Ń‚ĐľĐą Đ˛ĐľĐ´Đµ. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐşŃ€Đ°Ń?Đ¸Đ˛ĐľĐĽ Ń…ĐľŃ?Ń‚ĐµĐ»Đµ ĐżŃ€ŃŹĐĽĐľ Đ˝Đ° Đ±ĐµŃ€ĐµĐłŃ? ĐľĐ·ĐµŃ€Đ°.",
        tosorTourP8: "Đ”ĐµĐ˝ŃŚ 7 ĐźŃ€ĐľĐ´ĐľĐ»Đ¶ĐµĐ˝Đ¸Đµ ĐżŃ?Ń‚Đ¸ Đ˛ ĐšĐľŃ‡ĐşĐľŃ€. ĐźĐľŃ?Đ»Đµ ĐżĐľŃ?Đ»ĐµĐ´Đ˝Đ¸Ń… Ń‚ŃŹĐ¶ĐµĐ»Ń‹Ń… Đ´Đ˝ĐµĐą ĐĽŃ‹ Ń?ĐµĐłĐľĐ´Đ˝ŃŹ Đ˝ĐµĐĽĐ˝ĐľĐłĐľ Ń€Đ°Ń?Ń?Đ»Đ°Đ±Đ¸Đ»Đ¸Ń?ŃŚ. ĐťĐ°Ń?Đ° Ń?Ń†ĐµĐ˝Đ° - ĐšĐľŃ‡ĐşĐľŃ€, Đ¸Đ·Đ˛ĐµŃ?Ń‚Đ˝Ń‹Đą ĐżŃ€ĐľĐ¸Đ·Đ˛ĐľĐ´Ń?Ń‚Đ˛ĐľĐĽ ĐşŃ‹Ń€ĐłŃ‹Đ·Ń?ĐşĐ¸Ń… Đ˛ĐľĐąĐ»ĐľŃ‡Đ˝Ń‹Ń… ĐşĐľĐ˛Ń€ĐľĐ˛.",
        tosorTourP9: "Đ”ĐµĐ˝ŃŚ 8 Đ§ĐµŃ€ĐµĐ· ĐżĐµŃ€ĐµĐ˛Đ°Đ» ĐšĐ°Ń€Đ°ĐşŃ?Đ»ŃŚ Đ´Đľ ĐšŃ‹Đ·Ń‹Đ»-ĐžĐą Đ›Đ°Đ˝Đ´Ń?Đ°Ń„Ń‚ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đ° Ń‡Ń€ĐµĐ·Đ˛Ń‹Ń‡Đ°ĐąĐ˝Đľ Ń€Đ°Đ·Đ˝ĐľĐľĐ±Ń€Đ°Đ·ĐµĐ˝. ĐźŃ€Đ°ĐşŃ‚Đ¸Ń‡ĐµŃ?ĐşĐ¸ ĐżĐľŃ?Đ»Đµ ĐşĐ°Đ¶Đ´ĐľĐłĐľ ĐżĐľĐ˛ĐľŃ€ĐľŃ‚Đ° ĐĽŃ‹ Đ˛Đ¸Đ´Đ¸ĐĽ Đ˝ĐľĐ˛Ń‹Đą Ń„Đ°Đ˝Ń‚Đ°Ń?Ń‚Đ¸Ń‡ĐµŃ?ĐşĐ¸Đą ĐżĐµĐąĐ·Đ°Đ¶. Đ­Ń‚Đľ ĐľŃ?ĐľĐ±ĐµĐ˝Đ˝Đľ Đ°ĐşŃ‚Ń?Đ°Đ»ŃŚĐ˝Đľ Đ´Đ»ŃŹ Ń?ĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝ĐµĐą Ń?Ń†ĐµĐ˝Ń‹. ĐžĐ˝ Đ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? Ń‡ĐµŃ€ĐµĐ· Ń€ĐµĐ´ĐşĐľ ĐżĐľŃ?ĐµŃ‰Đ°ĐµĐĽŃ‹Đą ĐżĐµŃ€ĐµĐ˛Đ°Đ» ĐšĐ°Ń€Đ°ĐşŃ?Đ»ŃŚ Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 3400 ĐĽ Đ˛ ĐšŃ‹Đ·Ń‹Đ»-ĐžĐą, Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝Đ˝Ń‹Đą Đ˝Đ° Đ´Đ¸ĐşĐľĐą ĐłĐľŃ€Đ˝ĐľĐą Ń€ĐµĐşĐµ. Đ—Đ´ĐµŃ?ŃŚ ĐĽŃ‹ Đ˝Đ°Ń?Đ»Đ°Đ¶Đ´Đ°ĐµĐĽŃ?ŃŹ ĐşŃ‹Ń€ĐłŃ‹Đ·Ń?ĐşĐ¸ĐĽ Ń?ĐµĐĽĐµĐąĐ˝Ń‹ĐĽ ĐłĐľŃ?Ń‚ĐµĐżŃ€Đ¸Đ¸ĐĽŃ?Ń‚Đ˛ĐľĐĽ.",
        tosorTourP10: "Đ”ĐµĐ˝ŃŚ 9 Đ”Đ˝ĐµĐ˛Đ˝ĐľĐą Ń‚Ń?Ń€ Đ¸Đ»Đ¸ Đ´ĐµĐ˝ŃŚ ĐľŃ‚Đ´Ń‹Ń…Đ° Đ˛ ĐšŃ‹Đ·Ń‹Đ»-ĐžĐą ĐˇĐµĐłĐľĐ´Đ˝ŃŹ Ń?Đ´Đ°Ń‡Đ˝Ń‹Đą Đ´ĐµĐ˝ŃŚ Đ´Đ»ŃŹ ŃŤĐ˝Đ´Ń?Ń€Đľ-Ń€Đ°ĐąĐ´ĐµŃ€ĐľĐ˛, Đ»ŃŽĐ±ŃŹŃ‰Đ¸Ń… ĐşŃ€Ń?Ń‚Ń‹Đµ Ń?ĐşĐ»ĐľĐ˝Ń‹. ĐšŃ€Ń?Ń‚Đ°ŃŹ Đ¸ ĐşĐ°ĐĽĐµĐ˝Đ¸Ń?Ń‚Đ°ŃŹ ĐłĐľŃ€Đ˝Đ°ŃŹ Ń‚Ń€ĐľĐżĐ° Ń‚Ń€ĐµĐ±Ń?ĐµŃ‚ ĐľŃ‚ Đ˝Đ°Ń? ĐĽĐ°ĐşŃ?Đ¸ĐĽĐ°Đ»ŃŚĐ˝ĐľĐą ĐşĐľĐ˝Ń†ĐµĐ˝Ń‚Ń€Đ°Ń†Đ¸Đ¸ Đ¸ Ń…ĐľŃ€ĐľŃ?Đ¸Ń… Đ˝Đ°Đ˛Ń‹ĐşĐľĐ˛ Đ˛ĐľĐ¶Đ´ĐµĐ˝Đ¸ŃŹ. Đ­Ń‚ĐľŃ‚ ĐľĐ´Đ˝ĐľĐ´Đ˝ĐµĐ˛Đ˝Ń‹Đą Ń‚Ń?Ń€ ĐżŃ€ĐľŃ…ĐľĐ´Đ¸Ń‚ Đ˛ Ń?ĐľĐ˛ĐµŃ€Ń?ĐµĐ˝Đ˝Đľ Đ±ĐµĐ·Đ»ŃŽĐ´Đ˝ĐľĐą ĐĽĐµŃ?Ń‚Đ˝ĐľŃ?Ń‚Đ¸. Đ˘Đµ, ĐşŃ‚Đľ ĐżŃ€ĐµĐ´ĐżĐľŃ‡Đ¸Ń‚Đ°ĐµŃ‚ ĐľŃ‚Đ´Ń‹Ń…Đ°Ń‚ŃŚ Đ˛ ŃŤŃ‚ĐľŃ‚ Đ´ĐµĐ˝ŃŚ, ĐĽĐľĐłŃ?Ń‚ ĐľŃ?Ń‚Đ°Đ˝ĐľĐ˛Đ¸Ń‚ŃŚŃ?ŃŹ Đ˛ ĐšŃ‹Đ·Ń‹Đ»-ĐžĐą.",
        tosorTourP11: "Đ”ĐµĐ˝ŃŚ 10 Đš ĐľĐ·ĐµŃ€Ń? ĐˇĐľĐ˝ĐłĐşĐľĐ»ŃŚ. ĐˇĐľĐ˝ĐłĐşĐľĐ»ŃŚ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝ Đ˝Đ° ĐľĐłŃ€ĐľĐĽĐ˝ĐľĐĽ ĐżĐ»Đ°Ń‚Đľ Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 3000 ĐĽ Đ¸ Ń?Ń‡Đ¸Ń‚Đ°ĐµŃ‚Ń?ŃŹ Đ¶ĐµĐĽŃ‡Ń?Đ¶Đ¸Đ˝ĐľĐą ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đ°. ĐžĐşĐľĐ»Đľ ĐżĐľĐ»Ń?Đ´Đ˝ŃŹ Đ´ĐľĐµĐ·Đ¶Đ°ĐµĐĽ Đ´Đľ ŃŽŃ€Ń‚ĐľŃ‡Đ˝ĐľĐłĐľ Đ»Đ°ĐłĐµŃ€ŃŹ ĐżŃ€ŃŹĐĽĐľ Đ˝Đ° Đ±ĐµŃ€ĐµĐłŃ? ĐľĐ·ĐµŃ€Đ°. Đ˘Đ°Đş Ń‡Ń‚Đľ Ń? Đ˝Đ°Ń? ĐµŃ?Ń‚ŃŚ Đ´ĐľŃ?Ń‚Đ°Ń‚ĐľŃ‡Đ˝Đľ Đ˛Ń€ĐµĐĽĐµĐ˝Đ¸, Ń‡Ń‚ĐľĐ±Ń‹ Đ˝Đ°Ń?Đ»Đ°Đ´Đ¸Ń‚ŃŚŃ?ŃŹ ŃŤŃ‚Đ¸ĐĽ Đ¸Đ´Đ¸Đ»Đ»Đ¸Ń‡ĐµŃ?ĐşĐ¸ĐĽ ĐĽĐµŃ?Ń‚ĐľĐĽ Đ¸ ĐżĐľĐ˝Đ°Đ±Đ»ŃŽĐ´Đ°Ń‚ŃŚ Đ·Đ° ĐżŃ€ĐľĐłŃ?Đ»ĐşĐľĐą ĐżĐ°Ń?Ń‚Ń?Ń…ĐľĐ˛.",
        tosorTourP12: "Đ”ĐµĐ˝ŃŚ 11 ĐźĐľ Ń?ĐµĐ˛ĐµŃ€Đ˝ĐľĐĽŃ? ĐĽĐ°Ń€Ń?Ń€Ń?Ń‚Ń? Đ´Đľ ĐšĐ°Đ·Đ°Ń€ĐĽĐ°Đ˝Đ°. ĐśŃ‹ Ń?Đ˝ĐľĐ˛Đ° ĐµĐ´ĐµĐĽ Đ˛ ĐšĐ°Đ·Đ°Ń€ĐĽĐ°Đ˝, Đ˝Đľ Đ˝Đ° ŃŤŃ‚ĐľŃ‚ Ń€Đ°Đ· ĐżĐľ Ń?ĐµĐ˛ĐµŃ€Đ˝ĐľĐĽŃ? ĐĽĐ°Ń€Ń?Ń€Ń?Ń‚Ń? Đ¸ Đ˝Đ°Ń?Đ»Đ°Đ¶Đ´Đ°ĐµĐĽŃ?ŃŹ Ń„Đ°Đ˝Ń‚Đ°Ń?Ń‚Đ¸Ń‡ĐµŃ?ĐşĐ¸ĐĽ Đ˛Đ¸Đ´ĐľĐĽ Đ˝Đ° ĐťĐ°Ń€Ń‹Đ˝Ń?ĐşŃ?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń?.",
        tosorTourP13: "Đ”ĐµĐ˝ŃŚ 12 ĐźĐµŃ€ĐµĐµĐ·Đ´ Đ˛ Đ“Ń?Đ»ŃŚŃ‡Ń?. ĐˇĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝ŃŹŃŹ ĐżĐľĐµĐ·Đ´ĐşĐ° Đ˛ Đ“Ń?Đ»ŃŚŃ‡Ń? ĐżŃ€ĐľĐ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? Ń‡ĐµŃ€ĐµĐ· ĐžŃ?ĐłĐľĐ˝ Đ¸ Ń‡ĐµŃ€ĐµĐ· Ń‡Ń?Đ´ĐµŃ?Đ˝ĐľĐµ Ń?Ń‰ĐµĐ»ŃŚĐµ. Đ­Ń‚Đľ Đ´Đ°ĐµŃ‚ Đ˝Đ°ĐĽ ĐĽĐ˝ĐľĐłĐľ Đ˛ĐľĐ·ĐĽĐľĐ¶Đ˝ĐľŃ?Ń‚ĐµĐą ĐşĐ°Ń‚Đ°Ń‚ŃŚŃ?ŃŹ Đ˛Đ˝Đµ Ń‚Ń€Đ°Ń?Ń?.",
        tosorTourP14: "Đ”ĐµĐ˝ŃŚ 13 ĐźĐ°Đ˝ĐľŃ€Đ°ĐĽĐ˝Ń‹Đą ĐżĐµŃ€ĐµĐµĐ·Đ´ Đ¸ Đ˛ĐľĐ·Đ˛Ń€Đ°Ń‰ĐµĐ˝Đ¸Đµ Đ˛ ĐžŃ?. Đ’ ĐşĐľĐ˝Ń†Đµ ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸Đ¸ Đ˝Đ°Ń? Ń?ĐµĐłĐľĐ´Đ˝ŃŹ Đ¶Đ´ĐµŃ‚ Đ·Đ´ĐľŃ€ĐľĐ˛ĐµĐ˝Đ˝Ń‹Đą Đ´ĐµŃ?ĐµŃ€Ń‚. ĐźŃ€ĐľĐµĐ·Đ¶Đ°ĐµĐĽ ĐĽĐ¸ĐĽĐľ ĐşŃ€Đ°Ń?Đ¸Đ˛Ń‹Ń… ĐżĐ°Ń?Ń‚Đ±Đ¸Ń‰ Đ¸ Ń?Đ·ĐşĐ¸Ń… Ń?Ń‰ĐµĐ»Đ¸Đą, Đ´ĐľŃ?Ń‚Đ¸ĐłĐ°ŃŹ Đ˛Ń‹Ń?ĐľŃ‚Ń‹ 3500 ĐĽ. ĐśŃ‹ Đ˝Đ°Đ´ĐľĐ»ĐłĐľ ĐľŃ?Ń‚Đ°ĐµĐĽŃ?ŃŹ Đ˝Đ° ŃŤŃ‚ĐľĐą Đ˛Ń‹Ń?ĐľŃ‚Đµ Đ¸ Đ˝Đ°Ń?Đ»Đ°Đ¶Đ´Đ°ĐµŃ?ŃŹ Đ±ĐµŃ?ĐşŃ€Đ°ĐąĐ˝ĐµĐą ĐżĐ°Đ˝ĐľŃ€Đ°ĐĽĐľĐą. Đˇ Đ˛Đ¸Đ´ĐľĐĽ Đ˝Đ° Đ·Đ°Ń?Đ˝ĐµĐ¶ĐµĐ˝Đ˝Ń‹Đµ ĐłĐľŃ€Ń‹ ĐšĐ¸Ń‡Đ¸Đł-Đ?Đ»Đ°ŃŹ. Đ”Đ°Đ»ĐµĐµ Ń?ĐżŃ?Ń?ĐşĐ°ĐµĐĽŃ?ŃŹ Đş Ń€ĐµĐşĐµ Đ?Đş-Đ‘Ń?Ń?Ń€Đ°, ĐżĐľ ĐşĐľŃ‚ĐľŃ€ĐľĐą Đ˛ĐľĐ·Đ˛Ń€Đ°Ń‰Đ°ĐµĐĽŃ?ŃŹ Đ˛ ĐžŃ?.",
        tosorTourP15: "Đ”ĐµĐ˝ŃŚ 14 + 15, Đ´ĐµĐ˝ŃŚ ĐľŃ‚Đ´Ń‹Ń…Đ° Đ˛ ĐžŃ?Đµ Đ¸ ĐľĐ±Ń€Đ°Ń‚Đ˝Ń‹Đą Đ˛Ń‹Đ»ĐµŃ‚. ĐźĐľŃ?Đ»ĐµĐ´Đ˝Đ¸Đą Đ´ĐµĐ˝ŃŚ ĐĽŃ‹ Đ¸Ń?ĐżĐľĐ»ŃŚĐ·Ń?ĐµĐĽ, Ń‡Ń‚ĐľĐ±Ń‹ ĐżĐľĐ±Ń‹Đ˛Đ°Ń‚ŃŚ Đ˝Đ° Đ±Đ°Đ·Đ°Ń€Đµ Đ¸Đ»Đ¸ ĐżŃ€ĐľŃ?Ń‚Đľ Ń€Đ°Ń?Ń?Đ»Đ°Đ±Đ¸Ń‚ŃŚŃ?ŃŹ ĐżĐľŃ?Đ»Đµ Đ˝Đ°Ń?Ń‹Ń‰ĐµĐ˝Đ˝ĐľĐą ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸Đ¸. Đ’ĐµŃ‡ĐµŃ€ ĐżŃ€ĐľĐ˛ĐľĐ´Đ¸ĐĽ Đ˛ Ń…ĐľŃ€ĐľŃ?ĐµĐĽ Ń€ĐµŃ?Ń‚ĐľŃ€Đ°Đ˝Đµ, Đ˝Đ°Ń?Đ»Đ°Đ¶Đ´Đ°ĐµĐĽŃ?ŃŹ Ń?ĐľŃ‡Đ˝Ń‹ĐĽ Ń?Đ°Ń?Đ»Ń‹ĐşĐľĐĽ (Ń?Đ°Ń?Đ»Ń‹ĐşĐľĐĽ) Đ¸ Ń‚ĐľŃ?Ń‚Đ°ĐĽĐ¸ Đ·Đ° Ń?Đ´Đ°Ń‡Đ˝Ń?ŃŽ Đ¸ Ń?Đ´Đ°Ń‡Đ˝Ń?ŃŽ ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸ŃŽ. Đ Đ°Đ˝Đľ Ń?Ń‚Ń€ĐľĐĽ Ń?Đ»ĐµĐ´Ń?ŃŽŃ‰ĐµĐłĐľ Đ´Đ˝ŃŹ Đ˝Đ°Ń? ĐľŃ‚Đ˛ĐµĐ·Ń?Ń‚ Đ¸Đ· ĐľŃ‚ĐµĐ»ŃŹ Đ˛ Đ°ŃŤŃ€ĐľĐżĐľŃ€Ń‚ Đ´Đ»ŃŹ Đ˝Đ°Ń?ĐµĐłĐľ ĐľĐ±Ń€Đ°Ń‚Đ˝ĐľĐłĐľ Ń€ĐµĐąŃ?Đ° Đ´ĐľĐĽĐľĐą.",
//Bartang tour
        bartangTourP1: " ĐťĐµĐżŃ€ĐľŃ?Ń‚ĐľĐą Ń‚Ń?Ń€ ĐżĐľ Ń†ĐµĐ˝Ń‚Ń€Ń? ĐźĐ°ĐĽĐ¸Ń€Đ°. Đ§Đ°Ń?Ń‚ŃŚ Ń‚Ń?Ń€Đ° Ń‚Đ°ĐşĐ°ŃŹ Đ¶Đµ, ĐşĐ°Đş Đ¸ Ń‚Ń?Ń€ ĐżĐľ ĐźĐ°ĐĽĐ¸Ń€Ń?, Đ˝Đľ Ń‚ĐµŃ…Đ˝Đ¸Ń‡ĐµŃ?ĐşĐ¸ Đ˝Đ°ĐĽĐ˝ĐľĐłĐľ Ń?Đ»ĐľĐ¶Đ˝ĐµĐµ. Đ˘Ń?Ń€ ĐżŃ€ĐľŃ…ĐľĐ´Đ¸Ń‚ Đ˛ Ń?Ń?Đ»ĐľĐ˛Đ¸ŃŹŃ… Đ˛Ń‹Ń?ĐľĐşĐ¸Ń… ĐłĐľŃ€ Đ¸ Ń‚Ń€Ń?Đ´Đ˝ĐľŃ?Ń‚ĐµĐą. ĐťĐ°ĐĽ ĐşĐľĐĽĐżĐµĐ˝Ń?Đ¸Ń€Ń?ŃŽŃ‚ ĐľŃ‡ĐµĐ˝ŃŚ Ń?ĐµĐ´Đ¸Đ˝ĐµĐ˝Đ˝Ń‹Đµ Đ¸ Đ˝ĐµŃ‚Ń€ĐľĐ˝Ń?Ń‚Ń‹Đµ Ń€Đ°ĐąĐľĐ˝Ń‹, Đ·Đ°Ń…Đ˛Đ°Ń‚Ń‹Đ˛Đ°ŃŽŃ‰Đ¸Đµ Đ´Ń?Ń… ĐłĐľŃ€Ń‹ Đ¸ Ń€ĐµĐşĐ¸.",
        bartangTourP2: " Đ”ĐµĐ˝ŃŚ 1 ĐźŃ€Đ¸Đ±Ń‹Ń‚Đ¸Đµ Đ˛ ĐžŃ?. ĐźĐľŃ?Đ»Đµ ĐżĐľĐ»ĐµŃ‚Đ° Đ˛Ń‹ ĐżŃ€Đ¸Đ·ĐµĐĽĐ»Đ¸Ń‚ĐµŃ?ŃŚ Đ˛ ĐžŃ?Đµ, Đ˛Ń‚ĐľŃ€ĐľĐĽ ĐżĐľ Đ˛ĐµĐ»Đ¸Ń‡Đ¸Đ˝Đµ ĐłĐľŃ€ĐľĐ´Đµ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đ°. Đ’Đ°Ń? Đ·Đ°Đ±ĐµŃ€Ń?Ń‚, Đ¸ Đ˛Ń‹ Ń?ĐĽĐľĐ¶ĐµŃ‚Đµ ĐľŃ‚Đ´ĐľŃ…Đ˝Ń?Ń‚ŃŚ Đ˝ĐµŃ?ĐşĐľĐ»ŃŚĐşĐľ Ń‡Đ°Ń?ĐľĐ˛ Đ˛ Đ˝Đ°Ń?ĐµĐĽ ĐľŃ‚ĐµĐ»Đµ. ĐźĐľŃ?Đ»Đµ ĐľĐ±ĐµĐ´Đ° ĐĽŃ‹ Ń?ĐľĐ˛ĐµŃ€Ń?Đ¸ĐĽ Đ˝ĐµĐ±ĐľĐ»ŃŚŃ?Ń?ŃŽ ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸ŃŽ Đ·Đ° ĐłĐľŃ€ĐľĐ´, Ń‡Ń‚ĐľĐ±Ń‹ ĐżĐľĐ·Đ˝Đ°ĐşĐľĐĽĐ¸Ń‚ŃŚŃ?ŃŹ Ń? ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đ°ĐĽĐ¸. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐžŃ?Đµ.",
        bartangTourP3: "Đ”ĐµĐ˝ŃŚ 2 ĐźĐµŃ€ĐµĐµĐ·Đ´ Đ˛ ĐˇĐ°Ń€Ń‹-Đ˘Đ°Ń?. ĐźĐľĐµĐ·Đ´ĐşĐ° Đ˛ ĐˇĐ°Ń€Ń‹-Đ˘Đ°Ń? ĐżŃ€Đ¸Đ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? Đ˛Đ´ĐľĐ»ŃŚ Ń€ĐµĐşĐ¸ Đ?Đş Đ‘Ń?Ń€Đ° Đ˛ Đ´Đ¸ĐşŃ?ŃŽ Đ¸ Ń€ĐľĐĽĐ°Đ˝Ń‚Đ¸Ń‡ĐµŃ?ĐşŃ?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń?. Đ—Đ°Ń‚ĐµĐĽ ĐżŃ€ĐľĐ´ĐľĐ»Đ¶Đ°ĐąŃ‚Đµ Đ´Đ˛Đ¸Đ¶ĐµĐ˝Đ¸Đµ ĐżĐľ Ń„Đ°Đ˝Ń‚Đ°Ń?Ń‚Đ¸Ń‡ĐµŃ?ĐşĐľĐą ĐżĐ°Đ˝ĐľŃ€Đ°ĐĽĐ˝ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 3000 ĐĽ Đ´Đľ Đ´ĐµĐąŃ?Ń‚Đ˛Ń?ŃŽŃ‰ĐµĐą Ń?ĐłĐľĐ»ŃŚĐ˝ĐľĐą Ń?Đ°Ń…Ń‚Ń‹. ĐźĐľĐ´Đ˝Đ¸ĐĽĐ°ĐµĐĽŃ?ŃŹ ĐżĐľ Ń?Đ·ĐşĐľĐĽŃ? Ń?Ń‰ĐµĐ»ŃŚŃŽ, ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµĐĽ ĐµŃ‰Đµ Đ´Đ˛Đ° ĐżĐµŃ€ĐµĐ˛Đ°Đ»Đ° Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 3500 ĐĽ Đ¸ ĐżĐľĐżĐ°Đ´Đ°ĐµĐĽ Đ˛ Đ§ĐľĐ˝ Đ?Đ»Đ°Đą (Đ±ĐľĐ»ŃŚŃ?Đ°ŃŹ Đ´ĐľĐ»Đ¸Đ˝Đ°), ĐłĐ´Đµ Đ˝ĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐˇĐ°Ń€Ń‹-Đ˘Đ°Ń?Đµ Đ˛ ĐłĐľŃ?Ń‚ĐµĐ˛ĐľĐĽ Đ´ĐľĐĽĐµ.",
        bartangTourP4: "Đ”ĐµĐ˝ŃŚ 3 Đš ĐľĐ·ĐµŃ€Đ°ĐĽ Ń? ĐżĐľĐ´Đ˝ĐľĐ¶Đ¸ŃŹ ĐżĐ¸ĐşĐ° Đ›ĐµĐ˝Đ¸Đ˝Đ° Đ¸ ĐˇĐ°Ń€Ń‹-ĐśĐľĐłĐľĐ»Đ°. Đ’ Ń…ĐľŃ€ĐľŃ?Ń?ŃŽ ĐżĐľĐłĐľĐ´Ń? Ń?ĐµĐłĐľĐ´Đ˝ŃŹ ĐĽŃ‹ Ń?ĐľĐ˛ĐµŃ€Ń?Đ¸ĐĽ ĐľĐ±ŃŠĐµĐ·Đ´ Đş ĐżĐľĐ´Đ˝ĐľĐ¶Đ¸ŃŽ ĐżĐ¸ĐşĐ° Đ›ĐµĐ˝Đ¸Đ˝Đ° Ń? ĐµĐłĐľ ĐłĐľŃ€Đ´ĐľĐą Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 7134 ĐĽĐµŃ‚Ń€Đ°. Đ­Ń‚Đľ Đ´Đ°ĐµŃ‚ Đ˝Đ°ĐĽ Đ˛ĐľĐ·ĐĽĐľĐ¶Đ˝ĐľŃ?Ń‚ŃŚ ĐżŃ€Đ¸Đ˛Ń‹ĐşĐ˝Ń?Ń‚ŃŚ Đş Đ˛Ń‹Ń?ĐľŃ‚Đµ. Đ’ ĐżĐ»ĐľŃ…Ń?ŃŽ ĐżĐľĐłĐľĐ´Ń? ĐĽŃ‹ Đ´ĐµĐ»Đ°ĐµĐĽ ŃŤŃ‚ĐľŃ‚ ĐľĐ±ŃŠĐµĐ·Đ´ Đ˛ ĐşĐľĐ˝Ń†Đµ Đ˝Đ°Ń?ĐµĐą ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸Đ¸. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ŃŽŃ€Ń‚Đµ Đ˛ ĐˇĐ°Ń€Ń‹-ĐśĐľĐłŃ?Đ»Đµ.",
        bartangTourP5: "Đ”ĐµĐ˝ŃŚ 4 ĐźĐµŃ€ĐµŃ…ĐľĐ´ ĐłŃ€Đ°Đ˝Đ¸Ń†Ń‹ Ń? Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝ĐľĐĽ, ĐľĐ·ĐµŃ€Đľ ĐšĐ°Ń€Đ°ĐşŃ?Đ»ŃŚ. ĐˇĐµĐłĐľĐ´Đ˝ŃŹ ĐĽŃ‹ ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµĐĽ ĐłŃ€Đ°Đ˝Đ¸Ń†Ń? Ń? Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝ĐľĐĽ. ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?ĐşĐ¸Đą Ń‚Đ°ĐĽĐľĐ¶ĐµĐ˝Đ˝Ń‹Đą ĐżĐľŃ?Ń‚ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝ Ń? Đ˛ŃŠĐµĐ·Đ´Đ° Đ˝Đ° ĐżĐµŃ€ĐµĐ˛Đ°Đ» ĐšŃ‹Đ·Ń‹Đ»-Đ?Ń€Ń‚, Đ° Ń‚Đ°Đ´Đ¶Đ¸ĐşŃ?ĐşĐ¸Đą Ń‚Đ°ĐĽĐľĐ¶ĐµĐ˝Đ˝Ń‹Đą ĐżĐľŃ?Ń‚ Đ˝Đ°Ń…ĐľĐ´Đ¸Ń‚Ń?ŃŹ ĐżŃ€Đ¸ĐĽĐµŃ€Đ˝Đľ Đ˛ 30 ĐşĐĽ, Đ˛Ń?ĐşĐľŃ€Đµ ĐżĐľŃ?Đ»Đµ Đ˛ĐµŃ€Ń?Đ¸Đ˝Ń‹ ĐżĐµŃ€ĐµĐ˛Đ°Đ»Đ°. ĐźŃ€ĐľĐĽĐµĐ¶Ń?Ń‚ĐľŃ‡Đ˝Ń‹Đą ĐĽĐ°Ń€Ń?Ń€Ń?Ń‚ Đ˛Ń€ĐľĐ´Đµ Đ±Ń‹ Đ˝Đ¸ĐşŃ‚Đľ Đ˝Đµ ĐşĐľĐ˝Ń‚Ń€ĐľĐ»Đ¸Ń€Ń?ĐµŃ‚, Đ´ĐľŃ€ĐľĐłĐ° Đ·Đ°Đ±Ń€ĐľŃ?ĐµĐ˝Đ°, Đ˝Đľ Đ¸Đ´ĐµĐ°Đ»ŃŚĐ˝Đľ ĐżĐľĐ´Ń…ĐľĐ´Đ¸Ń‚ Đ´Đ»ŃŹ Ń…ĐľŃ€ĐľŃ?Đ¸Ń… ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đ¸Ń?Ń‚ĐľĐ˛. ĐśŃ‹ Ń?ĐµĐąŃ‡Đ°Ń? Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ ĐżĐľŃ‡Ń‚Đ¸ 4000 ĐĽ. ĐťĐ°Ń?Đ° Ń?ĐµĐĽŃŚŃŹ Đ˝Đ°Ń…ĐľĐ´Đ¸Ń‚Ń?ŃŹ ĐżŃ€ŃŹĐĽĐľ Đ˝Đ° Đ±ĐµŃ€ĐµĐłŃ? ĐľĐ·ĐµŃ€Đ° ĐšĐ°Ń€Đ°ĐşŃ?Đ»ŃŚ.",
        bartangTourP6: "Đ”ĐµĐ˝ŃŚ 5 ĐźĐ°ĐĽĐ¸Ń€Ń?ĐşĐľĐµ ĐżĐ»Đ°Ń‚Đľ. Đ•Đ´ĐµĐĽ Đ˝Đ° Đ·Đ°ĐżĐ°Đ´ ĐżĐľ ĐźĐ°ĐĽĐ¸Ń€Ń?ĐşĐľĐĽŃ? Ń‚Ń€Đ°ĐşŃ‚Ń?. ĐźŃ€Đ¸ĐĽĐµŃ€Đ˝Đľ Ń‡ĐµŃ€ĐµĐ· Ń‡Đ°Ń? Ń?Đ˛ĐľŃ€Đ°Ń‡Đ¸Đ˛Đ°ĐµĐĽ Đ˛ Đ˝Đ¸ĐşŃ?Đ´Đ°. Đ”ĐľŃ€ĐľĐłĐ¸ Đ·Đ´ĐµŃ?ŃŚ Đ˝ĐµŃ‚, Ń‚ĐľĐ»ŃŚĐşĐľ Đ´ĐľĐ»Đ¸Đ˝Đ° Ń?Đ¸Ń€Đ¸Đ˝ĐľĐą 5 ĐşĐĽ Ń? Đ˝ĐµŃ?ĐşĐľĐ»ŃŚĐşĐ¸ĐĽĐ¸ ĐżĐµŃ€ĐµŃ?Đ»ĐşĐ°ĐĽĐ¸. Đ­Ń‚Đľ Đ˝Đ°Ń? ĐżŃ?Ń‚ŃŚ Đ˛ Đ´ĐľĐ»Đ¸Đ˝Ń? Đ‘Đ°Ń€Ń‚Đ°Đ˝Đł.",
        bartangTourP7: "Đ”ĐµĐ˝ŃŚ 6 Đ’ Đ ĐľŃ?ĐľŃ€Đ˛Đµ Đ˛ Đ´ĐľĐ»Đ¸Đ˝Đµ Đ‘Đ°Ń€Ń‚Đ°Đ˝Đł. Đ§Ń‚ĐľĐ±Ń‹ ĐżĐľĐżĐ°Ń?Ń‚ŃŚ Đ˛ Đ´ĐľĐ»Đ¸Đ˝Ń? Đ‘Đ°Ń€Ń‚Đ°Đ˝Đł, Đ˛Đ°ĐĽ Đ˝Ń?Đ¶Đ˝Đľ Ń?ĐżŃ?Ń?Ń‚Đ¸Ń‚ŃŚŃ?ŃŹ Đ˛ Đ´ĐľĐ»Đ¸Đ˝Ń? ĐżĐľ Ń?Đ·ĐşĐ¸ĐĽ, Đ˛ĐµŃ?ĐµĐ»Ń‹ĐĽ Đ¸ ĐżĐľĐ»ĐľĐłĐ¸ĐĽ ĐłŃ€Đ°Đ˛Đ¸ĐąĐ˝Ń‹ĐĽ Đ´ĐľŃ€ĐľĐłĐ°ĐĽ. ĐťĐ°Ń? ĐĽĐµŃ…Đ°Đ˝Đ¸Đ·ĐĽ ĐżĐľĐ´Đ´ĐµŃ€Đ¶ĐşĐ¸ Ń€Đ°Đ±ĐľŃ‚Đ°ĐµŃ‚ Ń?Ń?ĐżĐµŃ?Đ˝Đľ. Đ­Ń‚ĐľŃ‚ Ń€Đ°Đ·Đ´ĐµĐ» Ń‚Ń€ĐµĐ±Ń?ĐµŃ‚ ĐĽĐ°ĐşŃ?Đ¸ĐĽĐ°Đ»ŃŚĐ˝ĐľĐą ĐşĐľĐ˝Ń†ĐµĐ˝Ń‚Ń€Đ°Ń†Đ¸Đ¸ Đ±ĐµĐ· ĐľŃ?Đ¸Đ±ĐľĐş. ĐšĐ°Đş Ń‚ĐľĐ»ŃŚĐşĐľ ĐĽŃ‹ Đ´ĐľŃ?Ń‚Đ¸ĐłĐ»Đ¸ Đ´ĐľĐ»Đ¸Đ˝Ń‹ Đ‘Đ°Ń€Ń‚Đ°Đ˝Đł, Đş Đ˝Đ°Ń?ĐµĐĽŃ? Ń?Đ´Đ¸Đ˛Đ»ĐµĐ˝Đ¸ŃŽ, ĐĽŃ‹ Ń?Đ˝ĐľĐ˛Đ° Ń?Đ˛Đ¸Đ´ĐµĐ»Đ¸ ĐĽĐ°Đ»ĐµĐ˝ŃŚĐşĐ¸Đµ Đ´ĐµŃ€ĐµĐ˛Ń?Ń?ĐşĐ¸. Đ?Đ˝Ń‚ĐµŃ€ĐµŃ?Đ˝Đľ, ĐşĐ°Đş Đ¸ Ń? Ń‡ĐµĐĽ Đ·Đ´ĐµŃ?ŃŚ Đ˛Ń‹Đ¶Đ¸Ń‚ŃŚ. ĐśŃ‹ Ń?Ń‚Đ°Đ˛Đ¸ĐĽ Đ˝Đ°Ń?Đ¸ ĐżĐ°Đ»Đ°Ń‚ĐşĐ¸ Đ˛ Đ¸Đ´Đ¸Đ»Đ»Đ¸Ń‡ĐµŃ?ĐşĐľĐĽ ĐĽĐµŃ?Ń‚Đµ Ń? Ń€ĐµĐşĐ¸.",
        bartangTourP8: "Đ”ĐµĐ˝ŃŚ 7 ĐźĐµŃ€ĐµĐµĐ·Đ´ Đ˛ ĐĄĐľŃ€ĐľĐł. ĐźĐµŃ€ĐµĐµĐ·Đ´ Đ˛ ĐĄĐľŃ€ĐľĐł, Ń?Ń‚ĐľĐ»Đ¸Ń†Ń? Đ“ĐľŃ€Đ˝ĐľĐłĐľ Đ‘Đ°Đ´Đ°Ń…Ń?Đ°Đ˝Đ°, ĐşĐ°Đş Đ˝Đ°Đ·Ń‹Đ˛Đ°ĐµŃ‚Ń?ŃŹ ŃŤŃ‚Đ° Ń‡Đ°Ń?Ń‚ŃŚ Đ˘Đ°Đ´Đ¶Đ¸ĐşĐ¸Ń?Ń‚Đ°Đ˝Đ°, ĐżŃ€ĐľĐ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? Đ˛Đ´ĐľĐ»ŃŚ Ń€ĐµĐşĐ¸ Đ‘Đ°Ń€Ń‚Đ°Đ˝Đł. ĐŁĐ»Đ¸Ń†Ń? Đ·Đ°Ń‚Đ°ĐżĐ»Đ¸Đ˛Đ°ĐµŃ‚ Ń€ĐµĐłŃ?Đ»ŃŹŃ€Đ˝Đľ. ĐśĐľĐşŃ€Ń‹Đµ Đ˝ĐľĐłĐ¸ ĐłĐ°Ń€Đ°Đ˝Ń‚Đ¸Ń€ĐľĐ˛Đ°Đ˝Ń‹. Đš Ń?Ń‡Đ°Ń?Ń‚ŃŚŃŽ, Đ·Đ´ĐµŃ?ŃŚ Ń‚ĐµĐżĐ»ĐµĐµ, Ń‡ĐµĐĽ Đ±Ń‹Đ»Đľ Đ˝Đ°ĐşĐ°Đ˝Ń?Đ˝Đµ, Đ¸ ĐĽŃ‹ ĐĽĐľĐ¶ĐµĐĽ Ń€Đ°Ń?Ń?Ń‡Đ¸Ń‚Ń‹Đ˛Đ°Ń‚ŃŚ Đ˝Đ° Ń?Đ´ĐľĐ±Đ˝Ń?ŃŽ ĐłĐľŃ?Ń‚Đ¸Đ˝Đ¸Ń‡Đ˝Ń?ŃŽ ĐşŃ€ĐľĐ˛Đ°Ń‚ŃŚ, Ń‚ĐµĐżĐ»Ń‹Đą Đ´Ń?Ń? Đ¸ Ń‡Ń?Đ´ĐµŃ?Đ˝Ń‹Đą Ń†Đ¸Đ˛Đ¸Đ»Đ¸Đ·ĐľĐ˛Đ°Đ˝Đ˝Ń‹Đą Ń?Đ¶Đ¸Đ˝.",
        bartangTourP9: "Đ”ĐµĐ˝ŃŚ 8 Đš ĐľĐ·ĐµŃ€Ń? Đ˘Ń?Ń€Ń?ĐĽŃ‚Đ°Đą Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 4200 ĐĽ. Đ?Đ· ĐĄĐľŃ€ĐľĐłĐ° Đ˝Đ° Đ˛ĐľŃ?Ń‚ĐľĐş ĐĽĐľĐ¶Đ˝Đľ ĐżĐľĐżĐ°Ń?Ń‚ŃŚ Ń‚Ń€ĐµĐĽŃŹ Ń?ĐżĐľŃ?ĐľĐ±Đ°ĐĽĐ¸: ĐżŃ€ŃŹĐĽĐľĐą ĐĽĐ°Ń€Ń?Ń€Ń?Ń‚ M41, Đ´ĐľĐ»Đ¸Đ˝Đ° Đ’Đ°Ń…Đ°Đ˝Đ° Đ˝Đ° ŃŽĐłĐµ Đ¸Đ»Đ¸ ĐĽĐµĐ¶Đ´Ń? Đ˝Đ¸ĐĽĐ¸, Ń‚Đ°Đş Đ˝Đ°Đ·Ń‹Đ˛Đ°ĐµĐĽĐ°ŃŹ ĐšĐ°Ń€Đ»-ĐśĐ°Ń€ĐşŃ?-Ń?Ń‚Ń€Đ°Ń?Ń?Đµ. Đ’Ń‹Đ±Đ¸Ń€Đ°ĐµĐĽ ĐżĐľŃ?Đ»ĐµĐ´Đ˝Đ¸Đą Đ˛Đ°Ń€Đ¸Đ°Đ˝Ń‚ Đ¸ Đ˝Đ°Ń?Đ»Đ°Đ¶Đ´Đ°ĐµĐĽŃ?ŃŹ Đ±ĐµĐ»Ń‹ĐĽĐ¸ ĐłĐľŃ€Đ˝Ń‹ĐĽĐ¸ ĐłĐ¸ĐłĐ°Đ˝Ń‚Đ°ĐĽĐ¸, Đ¸Đ· ĐşĐľŃ‚ĐľŃ€Ń‹Ń… ĐżĐ¸Đş ĐśĐ°Ń€ĐşŃ?Đ° ŃŹĐ˛Đ»ŃŹĐµŃ‚Ń?ŃŹ Ń?Đ°ĐĽŃ‹ĐĽ Đ¸Đ·Đ˛ĐµŃ?Ń‚Đ˝Ń‹ĐĽ Đ¸ Ń?Đ°ĐĽŃ‹ĐĽ Đ˛Ń‹Ń?ĐľĐşĐ¸ĐĽ. ĐˇŃ‚Đ°Đ˛Đ¸ĐĽ ĐżĐ°Đ»Đ°Ń‚ĐşĐ¸ Đ˝Đ° ĐľĐ·ĐµŃ€Đµ Đ˘Ń?Ń€Ń?ĐĽŃ‚Đ°Đą. ĐźŃ€ĐµĐşŃ€Đ°Ń?Đ˝Ń‹Đµ ĐżĐµĐąĐ·Đ°Đ¶Đ¸ Đ¸ Đ·Đ˛ĐµĐ·Đ´Đ˝Ń‹Đµ Đ˝ĐľŃ‡Đ¸ Đ´ĐµĐ»Đ°ŃŽŃ‚ ŃŤŃ‚ĐľŃ‚ Đ»Đ°ĐłĐµŃ€ŃŚ ĐľŃ?ĐľĐ±ĐµĐ˝Đ˝Ń‹ĐĽ.",
        bartangTourP10: "Đ”ĐµĐ˝ŃŚ 9 ĐźĐľ ĐźĐ°ĐĽĐ¸Ń€Ń?ĐşĐľĐĽŃ? Ń‚Ń€Đ°ĐşŃ‚Ń? Đ˛ ĐĄĐľŃ€ĐľĐł. Đ’ĐľĐ·Đ˛Ń€Đ°Ń‰Đ°ĐµĐĽŃ?ŃŹ Đ˛ ĐłĐľŃ?Ń‚Đ¸Đ˝Đ¸Ń†Ń? Đ˛ ĐĄĐľŃ€ĐľĐłĐµ ĐżĐľ Ń‚Ń€Đ°Ń?Ń?Đµ Đś41, ĐľŃ‚Đ´Ń‹Ń…Đ°ĐµĐĽ Đ¸ Đ˝Đ°Đ±Đ¸Ń€Đ°ĐµĐĽŃ?ŃŹ Ń?Đ¸Đ» Đ´Đ»ŃŹ Ń?Đ»ĐµĐ´Ń?ŃŽŃ‰ĐµĐłĐľ ĐżŃ€Đ¸ĐşĐ»ŃŽŃ‡ĐµĐ˝Đ¸ŃŹ.",
        bartangTourP11: "Đ”ĐµĐ˝ŃŚ 10 Đ§ĐµŃ€ĐµĐ· Đ’Đ°Ń…Đ°Đ˝Ń?ĐşŃ?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń? Đ´Đľ Đ‘Đ¸Đ±Đ¸ Đ¤Đ°Ń‚Đ¸ĐĽĐ°. ĐťĐ°Ń?Đµ Đ´Đ°Đ»ŃŚĐ˝ĐµĐąŃ?ĐµĐµ ĐżŃ?Ń‚ĐµŃ?ĐµŃ?Ń‚Đ˛Đ¸Đµ ĐżŃ€ĐľĐ˛ĐµĐ´ĐµŃ‚ Đ˝Đ°Ń? Ń‡ĐµŃ€ĐµĐ· Đ’Đ°Ń…Đ°Đ˝Ń?ĐşŃ?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń?, Đ˛Đ´ĐľĐ»ŃŚ ĐłŃ€Đ°Đ˝Đ¸Ń†Ń‹ Ń? Đ?Ń„ĐłĐ°Đ˝Đ¸Ń?Ń‚Đ°Đ˝ĐľĐĽ Đ´Đľ Đ‘Đ¸Đ±Đ¸ Đ¤Đ°Ń‚Đ¸ĐĽĐ°. ĐžŃ‚Đ´ĐµĐ»ŃŚĐ˝Đ°ŃŹ ŃŤŃ‚Đ˝Đ¸Ń‡ĐµŃ?ĐşĐ°ŃŹ ĐłŃ€Ń?ĐżĐżĐ° ĐżŃ€ĐľĐ¶Đ¸Đ˛Đ°ĐµŃ‚ Đ˛ Đ’Đ°Ń…Đ°Đ˝Ń?ĐşĐľĐą Đ´ĐľĐ»Đ¸Đ˝Đµ. Đ­Ń‚Đ¸ Đ»ŃŽĐ´Đ¸ ĐľŃ‚Đ»Đ¸Ń‡Đ°ŃŽŃ‚Ń?ŃŹ ĐľŃ‚ Ń‚Đ°Đ´Đ¶Đ¸ĐşĐľĐ˛ Đ˝Đµ Ń‚ĐľĐ»ŃŚĐşĐľ Ń€ĐľĐ´Đ˝Ń‹ĐĽ ŃŹĐ·Ń‹ĐşĐľĐĽ, Đ˝Đľ Đ¸ Đ˛Đ˝ĐµŃ?Đ˝Đµ, Đ¸ ĐşŃ?Đ»ŃŚŃ‚Ń?Ń€Đ˝Đľ. Đ’ Đ‘Đ¸Đ±Đ¸ Đ¤Đ°Ń‚Đ¸ĐĽĐ° Ń? Đ˝Đ°Ń? ĐµŃ?Ń‚ŃŚ ĐżŃ€ĐµĐşŃ€Đ°Ń?Đ˝Ń‹Đą Đ˛Đ¸Đ´ Đ˝Đ° Đ’Đ°Ń…Đ°Đ˝Ń?ĐşŃ?ŃŽ Đ´ĐľĐ»Đ¸Đ˝Ń?. ĐšĐľĐ˝ĐµŃ‡Đ˝Đľ, ĐĽŃ‹ Ń‚Đ°ĐşĐ¶Đµ ĐżĐľĐ»ŃŚĐ·Ń?ĐµĐĽŃ?ŃŹ ĐłĐľŃ€ŃŹŃ‡Đ¸ĐĽ Đ¸Ń?Ń‚ĐľŃ‡Đ˝Đ¸ĐşĐľĐĽ, ĐşĐľŃ‚ĐľŃ€Ń‹Đą Đ¸Đ´Đ¸Đ»Đ»Đ¸Ń‡ĐµŃ?ĐşĐ¸ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝ Đ˛ Ń?ĐşĐ°Đ»ŃŚĐ˝ĐľĐĽ Ń?ĐşĐ»ĐµĐżĐµ Đ¸ ĐżŃ€Đ¸ĐłĐ»Đ°Ń?Đ°ĐµŃ‚ ĐżŃ€Đ¸Đ˝ŃŹŃ‚ŃŚ Ń‡Ń?Đ´ĐµŃ?Đ˝Ń?ŃŽ Đ˛Đ°Đ˝Đ˝Ń? Ń? Đ˛ĐľĐ´ĐľĐą Ń? Ń‚ĐµĐĽĐżĐµŃ€Đ°Ń‚Ń?Ń€ĐľĐą Đ±ĐľĐ»ĐµĐµ 40 ĐłŃ€Đ°Đ´Ń?Ń?ĐľĐ˛. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐłĐľŃ?Ń‚ĐµĐ˛ĐľĐĽ Đ´ĐľĐĽĐµ Đ˛ Đ‘Đ¸Đ±Đ¸ Đ¤Đ°Ń‚Đ¸ĐĽĐ°.",
        bartangTourP12: "Đ”ĐµĐ˝ŃŚ 11 Đš ĐľĐ·ĐµŃ€Ń? Đ‘Ń?Đ»Ń?Đ˝ĐşŃ?Đ»ŃŚ. ĐźĐľ ĐżŃ?Ń‚Đ¸ Đş ĐżĐ»Đ°Ń‚Đľ ĐźĐ°ĐĽĐ¸Ń€ Đ˛ĐľĐ·Đ´Ń?Ń… Ń?Ń‚Đ°Đ˝ĐľĐ˛Đ¸Ń‚Ń?ŃŹ Đ˛Ń?Đµ Ń‚ĐľĐ˝ŃŚŃ?Đµ Đ¸ Ń‚ĐľĐ˝ŃŚŃ?Đµ, Đ˝Đľ Đ˛Đ¸Đ´ Ń?Ń‚Đ°Đ˝ĐľĐ˛Đ¸Ń‚Ń?ŃŹ Đ˛Ń?Đµ ŃŹŃ?Đ˝ĐµĐµ Đ¸ ŃŹŃ?Đ˝ĐµĐµ. Đ•Ń?Đ»Đ¸ Đ˝Đµ Ń?Ń‡Đ¸Ń‚Đ°Ń‚ŃŚ Đ´Đ¸ĐşĐ¸Ń… Đ˛ĐµŃ€Đ±Đ»ŃŽĐ´ĐľĐ˛, ŃŹĐşĐľĐ˛ Đ¸ Đ˝ĐµŃ?ĐşĐľĐ»ŃŚĐşĐ¸Ń… ĐżĐ°Ń?Ń‚Ń?Ń…ĐľĐ˛, ĐĽŃ‹ ĐľĐ´Đ˝Đ¸ Đ˛ ŃŤŃ‚ĐľĐĽ Ń?ĐµĐ´Đ¸Đ˝ĐµĐ˝Đ¸Đ¸. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐłĐľŃ?Ń‚ĐµĐ˛ĐľĐĽ Đ´ĐľĐĽĐµ Đ˝Đ° ĐľĐ·ĐµŃ€Đµ Đ‘Ń?Đ»Ń?Đ˝ĐşŃ?Đ»ŃŚ, Ń?Ń?ĐżĐµĐ˛Đ°ĐµĐĽ ĐżĐľŃ?ĐµŃ‚Đ¸Ń‚ŃŚ ĐłĐľŃ€ŃŹŃ‡Đ¸Đµ Đ¸Ń?Ń‚ĐľŃ‡Đ˝Đ¸ĐşĐ¸ Đ¸ Â«ĐĽĐ¸Đ˝Đ¸-ĐłĐµĐąĐ·ĐµŃ€Â».",
        bartangTourP13: "Đ”ĐµĐ˝ŃŚ 12 ĐźĐµŃ€ĐµĐµĐ·Đ´ Đ˛ ĐśŃ?Ń€ĐłĐ°Đ±. ĐśŃ‹ Ń?Đ˝ĐľĐ˛Đ° Đ˝Đ° ĐźĐ°ĐĽĐ¸Ń€Ń?ĐşĐľĐĽ Ń‚Ń€Đ°ĐşŃ‚Đµ Đ¸Đ»Đ¸ Đś41. Đ”ĐľŃ€ĐľĐłĐ° Đ±Ń‹Đ»Đ° ĐżĐľŃ?Ń‚Ń€ĐľĐµĐ˝Đ° ĐˇĐľĐ˛ĐµŃ‚Ń?ĐşĐ¸ĐĽ ĐˇĐľŃŽĐ·ĐľĐĽ Đ˛Đ´ĐľĐ»ŃŚ Đ°Ń„ĐłĐ°Đ˝Ń?ĐşĐľĐą Đ¸ ĐşĐ¸Ń‚Đ°ĐąŃ?ĐşĐľĐą ĐłŃ€Đ°Đ˝Đ¸Ń†. ĐžĐ˝ Đ¸ Ń?ĐµĐłĐľĐ´Đ˝ŃŹ Ń‡Đ°Ń?Ń‚Đ¸Ń‡Đ˝Đľ Đ¸Ń?ĐżĐľĐ»ŃŚĐ·Ń?ĐµŃ‚Ń?ŃŹ ĐşĐ¸Ń‚Đ°ĐąŃ?ĐşĐ¸ĐĽĐ¸ Đ°Đ˛Ń‚ĐľĐĽĐľĐ±Đ¸Đ»ŃŹĐĽĐ¸. Đ’ ĐśŃ?Ń€ĐłĐ°Đ±Đµ, Đ±Ń‹Đ˛Ń?ĐµĐą Đ˛ĐľĐµĐ˝Đ˝ĐľĐą Đ±Đ°Đ·Đµ, Đ˝ĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐłĐľŃ?Ń‚Đ¸Đ˝Đ¸Ń†Đµ, Đ° ĐşŃ€ĐľĐĽĐµ ĐłĐľŃ€ŃŹŃ‡Đ¸Ń… Đ¸Ń?Ń‚ĐľŃ‡Đ˝Đ¸ĐşĐľĐ˛ ĐĽĐľĐ¶ĐµĐĽ ĐżŃ€Đ¸Đ˝ŃŹŃ‚ŃŚ Đ´Ń?Ń?.",
        bartangTourP14: "Đ”ĐµĐ˝ŃŚ 13 Đ’ĐľĐ·Đ˛Ń€Đ°Ń‰ĐµĐ˝Đ¸Đµ Đ˛ ĐžŃ?. ĐžĐ±Ń€Đ°Ń‚Đ˝Ń‹Đą ĐżŃ?Ń‚ŃŚ ĐżŃ€ĐľŃ…ĐľĐ´Đ¸Ń‚ Ń‡ĐµŃ€ĐµĐ· ĐżĐµŃ€ĐµĐ˛Đ°Đ» Đ?Đş-Đ‘Đ°ĐąŃ‚Đ°Đ». ĐťĐ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 4655 ĐĽ ŃŤŃ‚Đľ Ń?Đ°ĐĽŃ‹Đą Đ˛Ń‹Ń?ĐľĐşĐ¸Đą ĐżĐµŃ€ĐµĐ˛Đ°Đ» ĐźĐ°ĐĽĐ¸Ń€Đ°. Đ—Đ°Ń‚ĐµĐĽ ĐĽŃ‹ ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµĐĽ ĐżĐľŃ?Đ»ĐµĐ´Đ˝Đ¸Đą ĐżĐµŃ€ĐµĐ˛Đ°Đ» ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸Đ¸: ĐšŃ‹Đ·Ń‹Đ»-Đ?Ń€Ń‚ Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 4200 ĐĽ. Đ—Đ´ĐµŃ?ŃŚ ĐĽŃ‹ Đ´ĐľŃ…ĐľĐ´Đ¸ĐĽ Đ´Đľ ĐłŃ€Đ°Đ˝Đ¸Ń†Ń‹ Ń? ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝ĐľĐĽ Đ¸ ĐµĐ´ĐµĐĽ ĐľĐ±Ń€Đ°Ń‚Đ˝Đľ Đ˛ ĐžŃ? Ń‡ĐµŃ€ĐµĐ· ĐˇĐ°Ń€Ń‹-Đ˘Đ°Ń?.",
        bartangTourP15: "Đ”ĐµĐ˝ŃŚ 14 + 15 Đ”ĐµĐ˝ŃŚ ĐľŃ‚Đ´Ń‹Ń…Đ° Đ˛ ĐžŃ?Đµ, ĐľĐ±Ń€Đ°Ń‚Đ˝Ń‹Đą Đ˛Ń‹Đ»ĐµŃ‚. Đ’ Đ˝Đ°Ń? ĐżĐľŃ?Đ»ĐµĐ´Đ˝Đ¸Đą Đ´ĐµĐ˝ŃŚ ĐµŃ‰Đµ ĐµŃ?Ń‚ŃŚ Đ˛Ń€ĐµĐĽŃŹ ĐżĐľŃ?ĐµŃ‚Đ¸Ń‚ŃŚ Đ±Đ°Đ·Đ°Ń€ Đ¸Đ»Đ¸ ĐżŃ€ĐľŃ?Ń‚Đľ Ń€Đ°Ń?Ń?Đ»Đ°Đ±Đ¸Ń‚ŃŚŃ?ŃŹ ĐżĐľŃ?Đ»Đµ Đ˝Đ°Ń?Ń‹Ń‰ĐµĐ˝Đ˝ĐľĐą ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸Đ¸. Đ’ĐµŃ‡ĐµŃ€ ĐżŃ€ĐľĐ˛ĐµĐ´ĐµĐĽ Đ˛ Ń…ĐľŃ€ĐľŃ?ĐµĐĽ Ń€ĐµŃ?Ń‚ĐľŃ€Đ°Đ˝Đµ, ĐżĐľĐżŃ€ĐľĐ±Ń?ĐµĐĽ Ń?ĐľŃ‡Đ˝Ń‹Đą Ń?Đ°Ń?Đ»Ń‹Đş (Ń?Đ°Ń?Đ»Ń‹Đş) Đ¸ Đ·Đ°Đ¶Đ°Ń€Đ¸ĐĽ Ń?Đ´Đ°Ń‡Đ˝Ń‹Đą Đ¸ Ń?Ń?ĐżĐµŃ?Đ˝Ń‹Đą Ń‚Ń?Ń€. Đ Đ°Đ˝Đľ Ń?Ń‚Ń€ĐľĐĽ Ń?Đ»ĐµĐ´Ń?ŃŽŃ‰ĐµĐłĐľ Đ´Đ˝ŃŹ Đ˝Đ°Ń? ĐľŃ‚Đ˛ĐµĐ·Ń?Ń‚ Đ¸Đ· ĐľŃ‚ĐµĐ»ŃŹ Đ˛ Đ°ŃŤŃ€ĐľĐżĐľŃ€Ń‚ Đ´Đ»ŃŹ Đ˝Đ°Ń?ĐµĐłĐľ ĐľĐ±Ń€Đ°Ń‚Đ˝ĐľĐłĐľ Ń€ĐµĐąŃ?Đ° Đ´ĐľĐĽĐľĐą.",
//Naryn tour
        narynTourP1: "ĐźŃ€ĐľĐµĐ·Đ¶Đ°ĐąŃ‚Đµ Ń‡ĐµŃ€ĐµĐ· ĐľĐ´Đ˝Đ¸ Đ¸Đ· Ń?Đ°ĐĽŃ‹Ń… ĐşŃ€Đ°Ń?Đ¸Đ˛Ń‹Ń… Ń€ĐµĐłĐ¸ĐľĐ˝ĐľĐ˛ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đ° Đ˝Đ° ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đµ Đ·Đ° ĐľĐ´Đ˝Ń? Đ˝ĐµĐ´ĐµĐ»ŃŽ.",
        narynTourP2: "1. ĐźŃ€Đ¸Đ±Ń‹Ń‚Đ¸Đµ Đ˛ ĐžŃ? ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝. ĐźĐľŃ?Đ»Đµ ĐżĐľĐ»ĐµŃ‚Đ° Đ˛Ń‹ ĐżŃ€Đ¸Đ·ĐµĐĽĐ»Đ¸Ń‚ĐµŃ?ŃŚ Đ˛ ĐžŃ?Đµ, Đ˛Ń‚ĐľŃ€ĐľĐĽ ĐżĐľ Đ˛ĐµĐ»Đ¸Ń‡Đ¸Đ˝Đµ ĐłĐľŃ€ĐľĐ´Đµ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đ°. Đ’Đ°Ń? Đ·Đ°Đ±ĐµŃ€Ń?Ń‚, Đ¸ Đ˛Ń‹ Ń?ĐĽĐľĐ¶ĐµŃ‚Đµ ĐľŃ‚Đ´ĐľŃ…Đ˝Ń?Ń‚ŃŚ Đ˝ĐµŃ?ĐşĐľĐ»ŃŚĐşĐľ Ń‡Đ°Ń?ĐľĐ˛ Đ˛ Đ˝Đ°Ń?ĐµĐĽ ĐľŃ‚ĐµĐ»Đµ. ĐźĐľŃ?Đ»Đµ ĐľĐ±ĐµĐ´Đ° ĐĽŃ‹ Ń?ĐľĐ˛ĐµŃ€Ń?Đ¸ĐĽ Đ˝ĐµĐ±ĐľĐ»ŃŚŃ?Ń?ŃŽ ŃŤĐşŃ?ĐşŃ?Ń€Ń?Đ¸ŃŽ Đ·Đ° ĐłĐľŃ€ĐľĐ´, Ń‡Ń‚ĐľĐ±Ń‹ ĐżĐľĐ·Đ˝Đ°ĐşĐľĐĽĐ¸Ń‚ŃŚŃ?ŃŹ Ń? ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Đ°ĐĽĐ¸. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐžŃ?Đµ.",
        narynTourP3: "Đ”ĐµĐ˝ŃŚ 2 ĐźĐµŃ€ĐµĐµĐ·Đ´ Đ˝Đ° ĐľĐ·ĐµŃ€Đľ Đ˘ĐľĐşŃ‚ĐľĐłŃ?Đ». ĐˇĐµĐłĐľĐ´Đ˝ŃŹ ĐĽŃ‹ Đ˝Đ°Ń…ĐľĐ´Đ¸ĐĽŃ?ŃŹ Đ˝Đ° ĐłĐ»Đ°Đ˛Đ˝ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ Đ¸Đ· ĐžŃ?Đ° Đ˛ Đ‘Đ¸Ń?ĐşĐµĐş. ĐˇĐ˝Đ°Ń‡Đ°Đ»Đ° ĐĽŃ‹ ĐżĐµŃ€ĐµŃ?ĐµĐşĐ°ĐµĐĽ ĐżĐ»ĐľĐ´ĐľŃ€ĐľĐ´Đ˝Ń?ŃŽ Đ¤ĐµŃ€ĐłĐ°Đ˝Ń?ĐşŃ?ŃŽ Đ˛ĐżĐ°Đ´Đ¸Đ˝Ń?, Đ° ĐżĐľŃ‚ĐľĐĽ Đ˝Đ°Ń?Đ»Đ°Đ¶Đ´Đ°ĐµŃ‚ĐµŃ?ŃŚ Đ±ĐµŃ?Ń‡Đ¸Ń?Đ»ĐµĐ˝Đ˝Ń‹ĐĽĐ¸ Đ¸Đ·Đ»Ń?Ń‡Đ¸Đ˝Đ°ĐĽĐ¸ Ń€ĐµĐşĐ¸ ĐťĐ°Ń€Ń‹Đ˝. ĐťĐ°Ń?Đ° Ń†ĐµĐ»ŃŚ Đ˝Đ° Đ´ĐµĐ˝ŃŚ - ĐľŃ‚ĐµĐ»ŃŚ ĐżŃ€ŃŹĐĽĐľ Đ˝Đ° ĐľĐłŃ€ĐľĐĽĐ˝ĐľĐĽ Đ˘ĐľĐşŃ‚ĐľĐłŃ?Đ»ŃŚŃ?ĐşĐľĐĽ Đ˛ĐľĐ´ĐľŃ…Ń€Đ°Đ˝Đ¸Đ»Đ¸Ń‰Đµ. Đ›ĐµŃ‚ĐľĐĽ ĐľĐ˝ ĐżŃ€Đ¸ĐłĐ»Đ°Ń?Đ°ĐµŃ‚ Đ˛Đ°Ń? ĐżĐľĐżĐ»Đ°Đ˛Đ°Ń‚ŃŚ Ń? ĐµĐłĐľ Ń‚ĐµĐżĐ»ĐľĐą Ń‚ĐµĐĽĐżĐµŃ€Đ°Ń‚Ń?Ń€ĐľĐą.",
        narynTourP4: "Đ”ĐµĐ˝ŃŚ 3 ĐźĐľ Ń€ĐµĐşĐµ ĐťĐ°Ń€Ń‹Đ˝ Đ´Đľ ĐšŃ‹Đ·Ń‹Đ»-ĐžĐą. ĐźĐľĐşĐľŃ€Đ¸Đ˛ ĐżĐµŃ€ĐµĐ˛Đ°Đ» Đ?Đ»Đ°Đ±ĐµĐ»ŃŚ Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 3400 ĐĽ, ĐĽŃ‹ Đ»ŃŽĐ±Ń?ĐµĐĽŃ?ŃŹ ĐżŃ€ĐľŃ?Ń‚ĐľŃ€Đ°ĐĽĐ¸ ĐˇŃ?Ń?Ń?Đ°ĐĽĐ¸Ń€Ń?ĐşĐľĐłĐľ ĐżĐ»Đ°Ń‚Đľ, Đ° Ń?Đ°ĐĽŃ‹Đµ Ń?ĐĽĐµĐ»Ń‹Đµ Đ¸Đ· Đ˝Đ°Ń? ĐżŃ€ĐľĐ±Ń?ŃŽŃ‚ Â«ĐšŃ?ĐĽĐ¸Đ·Â», ĐşĐ¸Ń?Đ»ĐľĐĽĐľĐ»ĐľŃ‡Đ˝ĐľĐµ ĐşĐľĐ±Ń‹Đ»ŃŚĐµ ĐĽĐľĐ»ĐľĐşĐľ, ĐşĐľŃ‚ĐľŃ€ĐľĐµ ĐżŃ€ĐµĐ´Đ»Đ°ĐłĐ°ŃŽŃ‚ Đ˝Đ° Đ˛ĐµĐ»ĐľŃ?Đ¸ĐżĐµĐ´Đµ ĐżĐľ ĐżŃ?Ń‚Đ¸. ĐźĐľ Ń…ĐľŃ€ĐľŃ?ĐµĐą ĐłŃ€Đ°Đ˛Đ¸ĐąĐ˝ĐľĐą Đ´ĐľŃ€ĐľĐłĐµ ĐĽŃ‹ ĐµĐ´ĐµĐĽ Đ˛Đ´ĐľĐ»ŃŚ Đ¶Đ¸Đ˛ĐľĐżĐ¸Ń?Đ˝ĐľĐą Ń€ĐµĐşĐ¸ ĐšŃ‘ĐşĐµĐĽĐµŃ€ĐµĐ˝ Đ˛ Ń?Ń‚ĐľŃ€ĐľĐ˝Ń? ĐšŃ‹Đ·Ń‹Đ»-ĐžĐą Đş ĐşŃ‹Ń€ĐłŃ‹Đ·Ń?ĐşĐľĐą Ń?ĐµĐĽŃŚĐµ, ĐşĐľŃ‚ĐľŃ€Đ°ŃŹ ĐżŃ€ĐµĐ´ĐľŃ?Ń‚Đ°Đ˛Đ»ŃŹĐµŃ‚ Đ˝Đ°ĐĽ Ń?Đ˛ĐľĐą Đ´ĐľĐĽ Đ˝Đ° Đ˝ĐľŃ‡ŃŚ.",
        narynTourP5: "Đ”ĐµĐ˝ŃŚ 4 Đ’ĐľŃ?Ń…ĐľĐ¶Đ´ĐµĐ˝Đ¸Đµ Đ˝Đ° ĐľĐ·ĐµŃ€Đľ ĐˇĐľĐ˝ĐłĐşĐľĐ»ŃŚ. ĐťĐ°Ń? ĐżŃ?Ń‚ŃŚ Đ»ĐµĐ¶Đ¸Ń‚ Ń‡ĐµŃ€ĐµĐ· ĐşŃ€Đ°Ń?Đ¸Đ˛Ń‹Đµ Ń…ĐľĐ»ĐĽŃ‹, Đ»ĐµŃ?Đ° Đ¸ Đ»Ń?ĐłĐ°. ĐśŃ‹ ĐżŃ€ĐľĐµĐ·Đ¶Đ°ĐµĐĽ Ń?ĐłĐľĐ»ŃŚĐ˝Ń?ŃŽ Ń?Đ°Ń…Ń‚Ń? Đ¸ Đ˛Ń?ĐşĐľŃ€Đµ Ń?Đ˛Đ¸Đ´Đ¸ĐĽ ĐşŃ€Đ°Ń?Đ¸Đ˛ĐľĐµ ĐľĐ·ĐµŃ€Đľ ĐˇĐľĐ˝ĐłĐşĐľĐ»ŃŚ Đ¸Đ·Đ´Đ°Đ»ĐµĐşĐ°. ĐžĐ˝ Ń€Đ°Ń?ĐżĐľĐ»ĐľĐ¶ĐµĐ˝ Đ˝Đ° ĐłĐ¸ĐłĐ°Đ˝Ń‚Ń?ĐşĐľĐĽ ĐżĐ»Đ°Ń‚Đľ Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 3000 ĐĽĐµŃ‚Ń€ĐľĐ˛ Đ˝Đ°Đ´ Ń?Ń€ĐľĐ˛Đ˝ĐµĐĽ ĐĽĐľŃ€ŃŹ, ĐłĐ´Đµ ĐşĐ¸Ń€ĐłĐ¸Đ·Ń?ĐşĐ¸Đµ ĐżĐ°Ń?Ń‚Ń?Ń…Đ¸ ĐżĐ°Ń?Ń?Ń‚ Ń?Đ˛ĐľĐ¸ Ń?Ń‚Đ°Đ´Đ° Đ˛ Đ»ĐµŃ‚Đ˝Đ¸Đµ ĐĽĐµŃ?ŃŹŃ†Ń‹. ĐťĐľŃ‡Đ¸ Đ˛ ĐľŃ?Đ˝ĐľĐ˛Đ˝ĐľĐĽ Ń…ĐľĐ»ĐľĐ´Đ˝Ń‹Đµ Đ¸ ŃŹŃ?Đ˝Ń‹Đµ Ń?Đľ Đ·Đ˛ĐµĐ·Đ´Đ°ĐĽĐ¸: Ń?Ń‚ĐľĐ¸Ń‚ ĐżĐľŃ?ĐĽĐľŃ‚Ń€ĐµŃ‚ŃŚ Đ˛ Đ˝ĐµĐ±Đľ. ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ ĐşĐľĐĽŃ„ĐľŃ€Ń‚Đ°Đ±ĐµĐ»ŃŚĐ˝Ń‹Ń… ŃŽŃ€Ń‚Đ°Ń…. Đ•Ń?Đ»Đ¸ ĐżĐľĐ˛ĐµĐ·ĐµŃ‚, Đ˝Đ° Ń?Đ¶Đ¸Đ˝ ĐĽĐľĐ¶Đ˝Đľ Ń?ŃŠĐµŃ?Ń‚ŃŚ Ń?Đ˛ĐµĐ¶ĐµĐ˛Ń‹Đ»ĐľĐ˛Đ»ĐµĐ˝Đ˝Ń?ŃŽ Đ¶Đ°Ń€ĐµĐ˝Ń?ŃŽ Đ¸Đ· ĐľĐ·ĐµŃ€Đ° Ń€Ń‹Đ±Ń?.",
        narynTourP6: "Đ”ĐµĐ˝ŃŚ 5 Đ’ ĐşĐ°Ń€Đ°Đ˛Đ°Đ˝-Ń?Đ°Ń€Đ°Đą Đ˛ Đ˘Đ°Ń?-Đ Đ°Đ±Đ°Ń‚Đµ. ĐťĐ°Ń?Đ° Ń†ĐµĐ»ŃŚ Ń?ĐµĐłĐľĐ´Đ˝ŃŹ - ĐşĐ°Ń€Đ°Đ˛Đ°Đ˝-Ń?Đ°Ń€Đ°Đą Đ˛ Đ˘Đ°Ń?-Đ Đ°Đ±Đ°Ń‚Đµ. Đ”ĐľŃ€ĐľĐłĐ° Ń?ĐżŃ?Ń?ĐşĐ°ĐµŃ‚Ń?ŃŹ Ń? ĐłĐľŃ€Ń‹ Đ±ĐµŃ?Ń‡Đ¸Ń?Đ»ĐµĐ˝Đ˝Ń‹ĐĽĐ¸ Ń?ĐµŃ€ĐżĐ°Đ˝Ń‚Đ¸Đ˝Đ°ĐĽĐ¸. ĐźĐľĐżĐľĐ»Đ˝ŃŹĐµĐĽ Ń?ĐşĐ»Đ°Đ´Ń?ĐşĐ¸Đµ Đ·Đ°ĐżĐ°Ń?Ń‹ Đ˛ ĐťĐ°Ń€Ń‹Đ˝Đµ. ĐźĐľŃ?Đ»Đµ Ń„Đ°Đ˝Ń‚Đ°Ń?Ń‚Đ¸Ń‡ĐµŃ?ĐşĐľĐą ĐżĐľĐµĐ·Đ´ĐşĐ¸ Đ˛ Ń?ĐľĐżŃ€ĐľĐ˛ĐľĐ¶Đ´ĐµĐ˝Đ¸Đ¸ 4000-ĐĽĐµŃ‚Ń€ĐľĐ˛Ń‹Ń… ĐłĐľŃ€ Ń? ĐľĐ±ĐµĐ¸Ń… Ń?Ń‚ĐľŃ€ĐľĐ˝ Đ¸ Ń‡ĐµŃ€ĐµĐ· Đ´ĐľĐ»Đ¸Đ˝Ń?, ĐżĐľĐ»Đ˝Ń?ŃŽ Ń?Ń?Ń€ĐşĐľĐ˛, ĐĽŃ‹ ĐżŃ€Đ¸Đ±Ń‹Đ˛Đ°ĐµĐĽ Đ˛ Đ˘Đ°Ń? Đ Đ°Đ±Đ°Ń‚, Ń?Ń‚Đ°Ń€ĐľĐµ ĐĽĐµŃ?Ń‚Đľ Đ´Đ»ŃŹ ĐşĐ°Ń€Đ°Đ˛Đ°Đ˝ĐľĐ˛ Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 3000 ĐĽĐµŃ‚Ń€ĐľĐ˛ Đ˝Đ°Đ´ Ń?Ń€ĐľĐ˛Đ˝ĐµĐĽ ĐĽĐľŃ€ŃŹ. ĐśĐµŃ?Ń‚Đ˝Ń‹Đą Đ´Ń?Ń? ĐĽĐľĐ¶Đ˝Đľ Đ˝Đ°ĐąŃ‚Đ¸ Đ˛ Đ±Đ°Đ˝Đµ (ĐĽĐµŃ?Ń‚Đ˝Đ°ŃŹ Đ±Đ°Đ˝ŃŹ). ĐťĐľŃ‡Ń?ĐµĐĽ Đ˛ Ń?ŃŽŃ‚Đ˝ĐľĐą ŃŽŃ€Ń‚Đµ.",
        narynTourP7: "Đ”ĐµĐ˝ŃŚ 6 ĐźĐµŃ€ĐµŃ…ĐľĐ´ Ń‡ĐµŃ€ĐµĐ· Đ´Đ˛Đ° ĐżĐµŃ€ĐµĐ˛Đ°Đ»Đ° Đ˛ ĐšĐ°Đ·Đ°Ń€ĐĽĐ°Đ˝. ĐˇĐµĐłĐľĐ´Đ˝ŃŹ Đ»Đ°Đ˝Đ´Ń?Đ°Ń„Ń‚, Ń†Đ˛ĐµŃ‚Đ° Đ¸ ĐłĐľŃ€Đ˝Ń‹Đµ Ń…Ń€ĐµĐ±Ń‚Ń‹ ĐĽĐµĐ˝ŃŹŃŽŃ‚Ń?ŃŹ ĐżĐľŃ‡Ń‚Đ¸ ĐşĐ°Đ¶Đ´Ń‹Đą Ń‡Đ°Ń?! ĐžŃ?Đ˝ĐľĐ˛Đ˝Ń‹Đµ ĐĽĐľĐĽĐµĐ˝Ń‚Ń‹ Đ˝Đ°Ń?ĐµĐą ĐżĐľĐµĐ·Đ´ĐşĐ¸ - Đ´Đ˛Đ° ĐżĐµŃ€ĐµĐ˛Đ°Đ»Đ° ĐšŃ?Đ»Đ°Đş-Đ?Ń?Ń?Ń? Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 3400 ĐĽ Đ¸ ĐżĐµŃ€ĐµĐ˛Đ°Đ» ĐšĐ°ŃŽĐ˝ Đ˝Đ° Đ˛Ń‹Ń?ĐľŃ‚Đµ 2930 ĐĽ. ĐˇĐµĐłĐľĐ´Đ˝ŃŹŃ?Đ˝Đ¸Đą ŃŤŃ‚Đ°Đż Đ·Đ°ĐşĐ°Đ˝Ń‡Đ¸Đ˛Đ°ĐµŃ‚Ń?ŃŹ Đ˛ ĐšĐ°Đ·Đ°Ń€ĐĽĐ°Đ˝Đµ, Đ·ĐľĐ»ĐľŃ‚ĐľĐ´ĐľĐ±Ń‹Đ˛Đ°ŃŽŃ‰ĐµĐĽ ĐłĐľŃ€ĐľĐ´ĐşĐµ.",
        narynTourP8: "Đ”ĐµĐ˝ŃŚ 7 Đ§ĐµŃ€ĐµĐ· ĐżĐµŃ€ĐµĐ˛Đ°Đ» ĐšĐ°Đ»Đ´Đ°ĐĽ Đ¸ ĐľĐ±Ń€Đ°Ń‚Đ˝Đľ Đ˛ ĐžŃ?. ĐžĐ±Ń€Đ°Ń‚Đ˝Ń‹Đą ĐżŃ?Ń‚ŃŚ Đ´Đľ ĐžŃ?Đ° Đ´ĐľĐ»ĐłĐľ, Đ˝Đľ Ń€Đ°Đ·Đ˝ĐľĐľĐ±Ń€Đ°Đ·Đ˝Đľ. ĐťĐ° ĐšĐ°Đ»Đ´Đ°ĐĽŃ?ĐşĐľĐĽ ĐżĐµŃ€ĐµĐ˛Đ°Đ»Đµ Đ˛Ń‹Ń?ĐľŃ‚ĐľĐą 3062 ĐĽ Đ»Đ¸Ń‡Đ¸Đ˝ĐşĐ¸ Ń?Đ˝ĐµĐłĐ° Ń‡Đ°Ń?Ń‚Đľ Đ»ĐµĐ¶Đ°Ń‚ Đ˛Đ´ĐľĐ»ŃŚ Đ´ĐľŃ€ĐľĐłĐ¸ Đ´Đľ Đ¸ŃŽĐ˝ŃŹ. Đ? Đ´Đ°Đ»ŃŚŃ?Đµ Đ˝Đ°Ń? Đ¶Đ´Ń?Ń‚ Ń?Đ¶Đµ Đ·Đ˝Đ°ĐşĐľĐĽĐ°ŃŹ ĐłĐľŃ?Ń‚Đ¸Đ˝Đ¸Ń†Đ° Đ˛ ĐžŃ?Đµ Đ¸ ĐżĐľŃ?Đ»ĐµĐ´Đ˝Đ¸Đą Đ·Đ°ĐĽĐµŃ‡Đ°Ń‚ĐµĐ»ŃŚĐ˝Ń‹Đą Ń?Đ¶Đ¸Đ˝ Đ˛ ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đµ.",
        narynTourP9: "Đ”ĐµĐ˝ŃŚ 8 ĐžŃ? Đ¸ ĐľŃ‚ŃŠĐµĐ·Đ´. Đ Đ°Đ˝Đľ Ń?Ń‚Ń€ĐľĐĽ Ń?Đ»ĐµĐ´Ń?ŃŽŃ‰ĐµĐłĐľ Đ´Đ˝ŃŹ Đ˝Đ°Ń? ĐľŃ‚Đ˛ĐµĐ·Ń?Ń‚ Đ˛ Đ°ŃŤŃ€ĐľĐżĐľŃ€Ń‚, Ń‡Ń‚ĐľĐ±Ń‹ Đ˛Ń‹Đ»ĐµŃ‚ĐµŃ‚ŃŚ Đ´ĐľĐĽĐľĐą Đ˝Đ° Đ·Đ°ĐżĐ°Đ´.",
//Repair shop
        repairShopPH1: "ĐşĐ°Ń‡ĐµŃ?Ń‚Đ˛ĐµĐ˝Đ˝Ń‹Đą Đ¸ Đ˝Đ°Đ´ĐµĐ¶Đ˝Ń‹Đą Ń?ĐµŃ€Đ˛Đ¸Ń?",
        serviceDescription: "ĐžĐżĐ¸Ń?Đ°Đ˝Đ¸Đµ Ń?Ń?Đ»Ń?Đł",
        repairShopP1: "ĐťĐ°Ń?Đ° ĐşĐľĐĽĐżĐ°Đ˝Đ¸ŃŹ Ń?ĐľŃ?Ń‚ĐľĐ¸Ń‚ Đ¸Ń?ĐşĐ»ŃŽŃ‡Đ¸Ń‚ĐµĐ»ŃŚĐ˝Đľ Đ¸Đ· ĐżŃ€ĐľŃ„ĐµŃ?Ń?Đ¸ĐľĐ˝Đ°Đ»ĐľĐ˛. ĐśŃ‹, ĐşĐ°Đş Đ¸ Đ˛Ń‹, ĐľŃ‡ĐµĐ˝ŃŚ Đ»ŃŽĐ±Đ¸ĐĽ ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»Ń‹ Đ¸ Đ˛Đ˝ĐµĐ´ĐľŃ€ĐľĐ¶Đ˝Đ¸ĐşĐ¸, Đ° Ń‚Đ°ĐşĐ¶Đµ Đ·Đ˝Đ°ĐµĐĽ ĐĽĐ˝ĐľĐłĐ¸Đµ Ń‚ĐľĐ˝ĐşĐľŃ?Ń‚Đ¸ ĐµĐłĐľ Ń€Đ°Đ±ĐľŃ‚Ń‹. ĐźĐľĐ´ Đ˝Đ°Ń?ĐµĐą ĐşŃ€Ń‹Ń?ĐµĐą Ń?ĐľĐ±Ń€Đ°Đ»Đ¸Ń?ŃŚ ĐµĐ´Đ¸Đ˝ĐľĐĽŃ‹Ń?Đ»ĐµĐ˝Đ˝Đ¸ĐşĐ¸, Đ´Đ»ŃŹ Đ˝Đ°Ń? Ń€ĐµĐĽĐľĐ˝Ń‚ Đ¸Đ»Đ¸ Ń?Đ»Ń?Ń‡Ń?ĐµĐ˝Đ¸Đµ Ń‚Ń€Đ°Đ˝Ń?ĐżĐľŃ€Ń‚Đ° - ŃŤŃ‚Đľ Đ˝Đµ ĐżĐľĐ˛Ń?ĐµĐ´Đ˝ĐµĐ˛Đ˝Đ°ŃŹ Ń€Ń?Ń‚Đ¸Đ˝Đ˝Đ°ŃŹ Ń€Đ°Đ±ĐľŃ‚Đ°, Đ° Đ»ŃŽĐ±Đ¸ĐĽĐľĐµ Đ¸ Đ¸Đ˝Ń‚ĐµŃ€ĐµŃ?Đ˝ĐľĐµ Đ·Đ°Đ˝ŃŹŃ‚Đ¸Đµ. Đ’Ń‹ ĐĽĐľĐ¶ĐµŃ‚Đµ Đ±Ń‹Ń‚ŃŚ Ń?Đ˛ĐµŃ€ĐµĐ˝Ń‹, Ń‡Ń‚Đľ Đ˛Ń?Đµ Đ±ĐľĐ»Ń‚Ń‹ Đ¸ Ń€Đ°Đ±ĐľŃ‡Đ¸Đµ Đ´ĐµŃ‚Đ°Đ»Đ¸ Đ±Ń?Đ´Ń?Ń‚ ĐşĐ°Ń‡ĐµŃ?Ń‚Đ˛ĐµĐ˝Đ˝Ń‹ĐĽĐ¸ Đ¸ Đ˝Đ°Đ´ĐµĐ¶Đ˝Ń‹ĐĽĐ¸. ĐťĐ°ĐľĐ±ĐľŃ€ĐľŃ‚, ĐĽŃ‹ Đ¸Ń?ĐżŃ€Đ°Đ˛Đ¸ĐĽ Đ˝ĐµĐ¸Ń?ĐżŃ€Đ°Đ˛Đ˝Ń‹Đµ ŃŤĐ»ĐµĐĽĐµĐ˝Ń‚Ń‹, Đ¸ ĐľĐ˝ Đ±Ń?Đ´ĐµŃ‚ Ń€Đ°Đ±ĐľŃ‚Đ°Ń‚ŃŚ ĐşĐ°Đş Đ˝ĐľĐ˛Ń‹Đą Đ´Đ»ŃŹ Đ´Đ°Đ»ŃŚĐ˝ĐµĐąŃ?ĐµĐą ŃŤĐşŃ?ĐżĐ»Ń?Đ°Ń‚Đ°Ń†Đ¸Đ¸. ĐśŃ‹ Đ˝Đµ Đ±Ń?Đ´ĐµĐĽ Đ˝Đ°ĐşŃ€Ń?Ń‡Đ¸Đ˛Đ°Ń‚ŃŚ Đ±ĐµŃ?ĐµĐ˝Ń‹Đµ Đ·Đ°Ń‚Ń€Đ°Ń‚Ń‹ Đ˝Đ° Ń€ĐµĐĽĐľĐ˝Ń‚ Đ¸ Đ˝Đµ ĐżŃ€Đ¸Đ´Ń?ĐĽŃ‹Đ˛Đ°Ń‚ŃŚ Đ´ĐľĐżĐľĐ»Đ˝Đ¸Ń‚ĐµĐ»ŃŚĐ˝Ń‹Ń… Đ˝ĐµĐ¸Ń?ĐżŃ€Đ°Đ˛Đ˝ĐľŃ?Ń‚ĐµĐą. ĐśŃ‹ Ń€Đ°Đ±ĐľŃ‚Đ°ĐµĐĽ Đ˝Đµ Đ˝Đ° ĐşĐľĐ»Đ¸Ń‡ĐµŃ?Ń‚Đ˛Đľ, Đ° Đ˝Đ° ĐşĐ°Ń‡ĐµŃ?Ń‚Đ˛Đľ, ĐżĐľŃŤŃ‚ĐľĐĽŃ? Đ±ĐľĐ»ŃŚŃ?Đ¸Đ˝Ń?Ń‚Đ˛Đľ Đ˝Đ°Ń?Đ¸Ń… ĐşĐ»Đ¸ĐµĐ˝Ń‚ĐľĐ˛ ĐżŃ€Đ¸Ń…ĐľĐ´ŃŹŃ‚ Đş Đ˝Đ°ĐĽ ĐżĐľ Ń€ĐµĐşĐľĐĽĐµĐ˝Đ´Đ°Ń†Đ¸Đ¸ Ń?ĐµĐĽŃŚĐ¸ Đ¸ Đ´Ń€Ń?Đ·ĐµĐą. Đ•Ń?Đ»Đ¸ Đ˛Đ°Ń? Ń‚Ń€Đ°Đ˝Ń?ĐżĐľŃ€Ń‚ Ń?Đ»ĐľĐĽĐ°ĐµŃ‚Ń?ŃŹ, Đ˝Đ°Ń?Đ¸ Ń?ĐµŃ€Đ˛Đ¸Ń?Đ˝Ń‹Đµ Đ´Đ˛ĐµŃ€Đ¸ Đ˛Ń?ĐµĐłĐ´Đ° ĐľŃ‚ĐşŃ€Ń‹Ń‚Ń‹ Đ´Đ»ŃŹ Đ˛Đ°Ń?.",
        selfServing: "Ń?Đ°ĐĽĐľĐľĐ±Ń?Đ»Ń?Đ¶Đ¸Đ˛Đ°Đ˝Đ¸Đµ",
        nteRepairShop: "Ń€ĐµĐĽĐľĐ˝Ń‚Đ˝Đ°ŃŹ ĐĽĐ°Ń?Ń‚ĐµŃ€Ń?ĐşĐ°ŃŹ nte",
        tiresChange: "Đ·Đ°ĐĽĐµĐ˝Đ° Ń?Đ¸Đ˝",
        tigWelding: "Đ˘Đ?Đ“ Ń?Đ˛Đ°Ń€ĐşĐ¸",
        mmaWelding: "ĐśĐśĐ? Ń?Đ˛Đ°Ń€ĐşĐ°",
//About us
        aboutUsP1: "ĐšĐľĐĽĐżĐ°Đ˝Đ¸ŃŹ Nature Travel and Engineering Đ¸ĐĽĐµĐµŃ‚ Đ±ĐľĐ»ĐµĐµ Ń‡ĐµĐĽ 20-Đ»ĐµŃ‚Đ˝Đ¸Đą ĐľĐżŃ‹Ń‚ Ń€Đ°Đ±ĐľŃ‚Ń‹ Đ˝Đ° Ń€Ń‹Đ˝ĐşĐµ. ĐśŃ‹ ĐżŃ€ĐµĐ´ĐľŃ?Ń‚Đ°Đ˛Đ»ŃŹĐµĐĽ Đ˝Đ°Đ´ĐµĐ¶Đ˝Ń‹Đą, Đ±ĐµĐ·ĐľĐżĐ°Ń?Đ˝Ń‹Đą Đ¸ ĐşĐ°Ń‡ĐµŃ?Ń‚Đ˛ĐµĐ˝Đ˝Ń‹Đą Ń?ĐµŃ€Đ˛Đ¸Ń?. Đ•Đ´Đ¸Đ˝Ń?Ń‚Đ˛ĐµĐ˝Đ˝ĐľĐµ ĐĽĐµŃ?Ń‚Đľ, ĐłĐ´Đµ Đ˛Ń‹ ĐĽĐľĐ¶ĐµŃ‚Đµ ĐżĐľŃ‡Đ¸Đ˝Đ¸Ń‚ŃŚ Đ¸Đ»Đ¸ Ń?Đ»Ń?Ń‡Ń?Đ¸Ń‚ŃŚ Ń?Đ˛ĐľĐą ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ», Đ°Đ˛Ń‚ĐľĐĽĐľĐ±Đ¸Đ»ŃŚ, Đ»ŃŽĐ±ĐľĐą Đ˛Đ¸Đ´ Ń‚Ń€Đ°Đ˝Ń?ĐżĐľŃ€Ń‚Đ°, Đ´ĐľĐ˛ĐµŃ€ŃŹŃŹ Đ»Ń?Ń‡Ń?Đ¸ĐĽ ĐĽĐµŃ…Đ°Đ˝Đ¸ĐşĐ°ĐĽ Đ˛ ŃŤŃ‚ĐľĐą ĐľĐ±Đ»Đ°Ń?Ń‚Đ¸. Đ˘Đ°ĐşĐ¶Đµ Đ˛Ń‹ Đ±ĐµĐ· Ń‚Ń€Ń?Đ´Đ° Ń?ĐĽĐľĐ¶ĐµŃ‚Đµ Đ°Ń€ĐµĐ˝Đ´ĐľĐ˛Đ°Ń‚ŃŚ Đ°Đ˛Ń‚ĐľĐĽĐľĐ±Đ¸Đ»ŃŚ Đ¸Đ»Đ¸ ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ».",
        aboutUsP2: "ĐśŃ‹ Ń?ĐľŃ‚Ń€Ń?Đ´Đ˝Đ¸Ń‡Đ°ĐµĐĽ Ń?Đľ Ń?Đ˛ĐµĐąŃ†Đ°Ń€Ń?ĐşĐľĐą Ń‚Ń?Ń€Đ¸Ń?Ń‚Đ¸Ń‡ĐµŃ?ĐşĐľĐą ĐşĐľĐĽĐżĐ°Đ˝Đ¸ĐµĐą Alatoo-Moto, ĐşĐľŃ‚ĐľŃ€Đ°ŃŹ ĐżŃ€ĐµĐ´Đ»Đ°ĐłĐ°ĐµŃ‚ Ń?Đ´Đ¸Đ˛Đ¸Ń‚ĐµĐ»ŃŚĐ˝Ń‹Đµ ĐżŃ€Đ¸ĐşĐ»ŃŽŃ‡ĐµĐ˝Ń‡ĐµŃ?ĐşĐ¸Đµ Ń‚Ń?Ń€Ń‹ ĐżĐľ ĐˇŃ€ĐµĐ´Đ˝ĐµĐą Đ?Đ·Đ¸Đ¸.",
        aboutUsP3: "ĐťĐ°Ń?Đ° Ń†ĐµĐ»ŃŚ",
        aboutUsP4: "â€˘ ĐˇĐľĐ·Đ´Đ°Ń‚ŃŚ ĐşĐľĐĽŃ„ĐľŃ€Ń‚",
        aboutUsP5: "â€˘ ĐźĐľĐ´Đ°Ń€Đ¸Ń‚ŃŚ Đ˝ĐµĐ·Đ°Đ±Ń‹Đ˛Đ°ĐµĐĽŃ‹Đµ ĐľŃ‰Ń?Ń‰ĐµĐ˝Đ¸ŃŹ",
        aboutUsP6: "â€˘ ĐžĐ±ĐµŃ?ĐżĐµŃ‡ĐµĐ˝Đ¸Đµ Đ±ĐµĐ·ĐľĐżĐ°Ń?Đ˝ĐľŃ?Ń‚Đ¸",
        aboutUsP7: "â€˘ Đ§Ń‚ĐľĐ±Ń‹ Đ˛Ń‹ ĐżĐľŃ‡Ń?Đ˛Ń?Ń‚Đ˛ĐľĐ˛Đ°Đ»Đ¸ Đ˛Ń?ŃŽ ĐżŃ€Đ¸Ń€ĐľĐ´Ń? ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝Đ°",
        aboutUsP8: "â€˘ Đ”ĐľŃ?Ń‚Đ¸Ń‡ŃŚ Đ´ĐľŃ?Ń‚ĐľĐąĐ˝Ń‹Ń… Đ˛Ń‹Ń?ĐľŃ‚",
        ourTeam: "ĐťĐ°Ń?Đ° ĐşĐľĐĽĐ°Đ˝Đ´Đ°",
        aboutUsP9: "Đ¨ĐľŃ…Ń€Ń?Ń…",
        aboutUsP10: "(ĐśĐµĐ˝ĐµĐ´Đ¶ĐµŃ€)",
        aboutUsP11: "ĐšĐ°ĐĽĐ¸Đ»",
        aboutUsP12: "(ĐśĐµŃ…Đ°Đ˝Đ¸Đş)",
        aboutUsP13: "ĐšĐľĐ»ŃŹ",
        aboutUsP14: "(ĐśĐµŃ…Đ°Đ˝Đ¸Đş)",
        aboutUsP15: "ĐťĐ°Ń„Đ¸Ń?Đ°",
        aboutUsP16: "(Đ“Đ»Đ°Đ˛Đ˝Ń‹Đą Đ‘Ń?Ń…ĐłĐ°Đ»Ń‚ĐµŃ€)",
//Contacts
        contactDescription: "ĐľĐżĐ¸Ń?Đ°Đ˝Đ¸Đµ ĐşĐľĐ˝Ń‚Đ°ĐşŃ‚Đ°",
        contactsAddress:`Đ?Đ´Ń€ĐµŃ?: ĐžŃ?, ĐšŃ‹Ń€ĐłŃ‹Đ·Ń?Ń‚Đ°Đ˝
Đ‘ĐµŃ? ĐšĐ°ĐżĐ° ĐŁĐ»Đ¸Ń†Đ° -101, 14
ĐźĐľŃ‡Ń‚ĐľĐ˛Ń‹Đą Đ¸Đ˝Đ´ĐµĐşŃ? ĐžŃ? - 723500
Đ˘ĐµĐ»: : +996555550146
WhatsApp: +996556356666
Email: naturetravel.osh@gmail.com`,
//Tires
        description: "ĐžĐżĐ¸Ń?Đ°Đ˝Đ¸Đµ",
        tiresShinko: "Đ¨Đ¸Đ˝ĐşĐľ",
        tiresMitas: "ĐśĐ¸Ń‚Đ°Ń?",
//Housing
        housingP1: "24/7 â€“ ĐľŃ…Ń€Đ°Đ˝Đ°",
        housingP2: "24/7 - Đ±ĐµŃ?ĐżĐ»Đ°Ń‚Đ˝Ń‹Đą wi-fi",
        housingP3: "ĐżŃ€Đ°Ń‡ĐµŃ‡Đ˝Đ°ŃŹ",
        housingP4: "Ń?Ń‚ĐľŃŹĐ˝ĐşĐ°",
        housingP5: "Đ˛Đ°Đ˝Đ˝Đ°ŃŹ",
        housingP6: "Ń?Đ±ĐľŃ€Đ˝Đ°ŃŹ",
        housingP7: "ĐşŃ?Ń…Đ˝ŃŹ",
//404
        error404: "ĐžŃ?Đ¸Đ±ĐşĐ° 404",
        errorDescription: "ĐźĐľŃ…ĐľĐ¶Đµ, Ń‡Ń‚Đľ-Ń‚Đľ ĐżĐľŃ?Đ»Đľ Đ˝Đµ Ń‚Đ°Đş! ĐˇŃ‚Ń€Đ°Đ˝Đ¸Ń†Đ°, ĐşĐľŃ‚ĐľŃ€Ń?ŃŽ Đ˛Ń‹ Đ·Đ°ĐżŃ€Đ°Ń?Đ¸Đ˛Đ°ĐµŃ‚Đµ Đ˝Đµ Ń?Ń?Ń‰ĐµŃ?Ń‚Đ˛Ń?ĐµŃ‚. ĐžĐ˝ ĐĽĐľĐ¶ĐµŃ‚ Đ±Ń‹Ń‚ŃŚ Ń?Ń?Ń‚Đ°Ń€ĐµĐ˛Ń?Đ¸ĐĽ, Ń?Đ´Đ°Đ»ĐµĐ˝Đ˝Ń‹ĐĽ Đ¸Đ»Đ¸ Đ˛ Đ°Đ´Ń€ĐµŃ?Đ˝ĐľĐą Ń?Ń‚Ń€ĐľĐşĐµ Đ±Ń‹Đ» Đ˛Đ˛ĐµĐ´ĐµĐ˝ Đ˝ĐµĐ˛ĐµŃ€Đ˝Ń‹Đą Đ°Đ´Ń€ĐµŃ?.",
//Save Budget
        saveBudgetP1: "ĐšĐ°Đ¶Đ´Ń‹Đą, ĐşŃ‚Đľ Ń…ĐľŃ‡ĐµŃ‚ ĐżŃ?Ń‚ĐµŃ?ĐµŃ?Ń‚Đ˛ĐľĐ˛Đ°Ń‚ŃŚ, Đ˛Ń?ĐµĐłĐ´Đ° Đ´Ń?ĐĽĐ°ĐµŃ‚ Đľ Ń€Đ°Ń?Ń…ĐľĐ´Đ°Ń… Đ˝Đ° ĐżĐľĐµĐ·Đ´ĐşŃ? Đ¸Đ»Đ¸ Ń‚Ń?Ń€. Đ˘Đľ ĐµŃ?Ń‚ŃŚ ĐĽŃ‹ Đ˛Ń?Đµ Ń…ĐľŃ‚Đ¸ĐĽ Ń?ŃŤĐşĐľĐ˝ĐľĐĽĐ¸Ń‚ŃŚ Đ˝Đ°Ń? Đ±ŃŽĐ´Đ¶ĐµŃ‚. ĐšĐľĐĽĐżĐ°Đ˝Đ¸ŃŹ Nature Travel Engineering, Đ·Đ°Đ±ĐľŃ‚ŃŹŃ?ŃŚ Đľ Ń?Đ˛ĐľĐ¸Ń… ĐşĐ»Đ¸ĐµĐ˝Ń‚Đ°Ń…, ĐżŃ€ĐµĐ´ĐľŃ?Ń‚Đ°Đ˛Đ»ŃŹĐµŃ‚ Đ˝Đµ Ń‚ĐľĐ»ŃŚĐşĐľ Đ°Ń€ĐµĐ˝Đ´Ń? Đ°Đ˛Ń‚ĐľĐĽĐľĐ±Đ¸Đ»ĐµĐą Đ¸Đ»Đ¸ ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ»ĐľĐ˛, Đ˝Đľ Đ¸ Đ°Ń€ĐµĐ˝Đ´Ń? ĐľĐ±ĐľŃ€Ń?Đ´ĐľĐ˛Đ°Đ˝Đ¸ŃŹ Đ´Đ»ŃŹ Ń€ĐµĐĽĐľĐ˝Ń‚Đ° Đ¸Đ»Đ¸ Ń‚ŃŽĐ˝Đ¸Đ˝ĐłĐ° Đ°Đ˛Ń‚ĐľĐĽĐľĐ±Đ¸Đ»ĐµĐą.",
        saveBudgetP2: "Nature Travel Engineering Ń?ĐľŃ‚Ń€Ń?Đ´Đ˝Đ¸Ń‡Đ°ĐµŃ‚ Ń?Đľ ĐĽĐ˝ĐľĐłĐ¸ĐĽĐ¸ ĐľŃ‚ĐµĐ»ŃŹĐĽĐ¸ ĐłĐľŃ€ĐľĐ´Đ°. Đ•Ń?Đ»Đ¸ Đ˛Ń‹ Ń…ĐľŃ‚Đ¸Ń‚Đµ ĐżĐľĐ»Ń?Ń‡Đ¸Ń‚ŃŚ Ń?ĐşĐ¸Đ´ĐşĐ¸ Đ˝Đ° ĐľŃ‚ĐµĐ»Đ¸, Đ˛Ń‹ ĐĽĐľĐ¶ĐµŃ‚Đµ Đ·Đ°Đ±Ń€ĐľĐ˝Đ¸Ń€ĐľĐ˛Đ°Ń‚ŃŚ Đ˝ĐľĐĽĐµŃ€ Ń? Đ˝Đ°Ń?. ĐžĐ´Đ˝Đ°ĐşĐľ Đ˝Đ°Ń?Đ° ĐşĐľĐĽĐżĐ°Đ˝Đ¸ŃŹ ĐżŃ€ĐµĐ´ĐľŃ?Ń‚Đ°Đ˛Đ»ŃŹĐµŃ‚ Ń?Đ˛ĐľĐ¸ ĐżĐľĐĽĐµŃ‰ĐµĐ˝Đ¸ŃŹ Ń€ŃŹĐ´ĐľĐĽ Ń? ĐľŃ„Đ¸Ń?ĐľĐĽ. ĐšĐľŃ‚ĐľŃ€Ń‹Đµ Đ˛ Đ˝ĐµĐĽ ĐĽĐľĐ¶Đ˝Đľ ĐżŃ€Đ¸ĐżĐ°Ń€ĐşĐľĐ˛Đ°Ń‚ŃŚ Đ¸Đ»Đ¸ ĐľŃ‚Ń€ĐµĐĽĐľĐ˝Ń‚Đ¸Ń€ĐľĐ˛Đ°Ń‚ŃŚ ĐĽĐ°Ń?Đ¸Đ˝Ń? Đ¸Đ»Đ¸ ĐĽĐľŃ‚ĐľŃ†Đ¸ĐşĐ».",


    },

};

function changePageLang(lang) {
    const langKey = elems("[lang-key]");

    langKey.forEach((key) => {
        const attrValue = key.getAttribute("lang-key");
        key.textContent = language[lang][attrValue];
    });
}

const selectLang = elem("#lang");

selectLang.addEventListener('click', (e) => {

  const langUrlKey = e.target.getAttribute('lang-value');

  e.target.classList.contains('selected')
   ? ''
   :(location.href = window.location.pathname + "#" + langUrlKey,
    location.reload());

  
});

const removeClass = (arr, str) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.contains(str)
     ? arr[i].classList.remove(str)
     : '';
  }
}

const activatedLang = (arg) => {
  const selectedLanguage = elem(`p[lang-value="${arg}"]`),
        langsList = selectLang.children;

  removeClass(langsList, 'selected');
  elem('#activeLanguage').innerText = selectedLanguage.textContent;
  selectedLanguage.classList.add('selected');
}

// ĐŻĐ·Ń‹Đş Ń?Ń‚Ń€Đ°Đ˝Đ¸Ń†Ń‹ ĐżĐľ Ń?ĐĽĐľĐ»Ń‡Đ°Đ˝Đ¸ŃŽ
function defaultPageLang() {
    const availableLangs = Object.keys(language);

    let userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.split("-")[0];

    !availableLangs.includes(userLang)
        ? ''
        : (changePageLang(userLang), activatedLang(userLang));
}

defaultPageLang();


// Đ?Đ·ĐĽĐµĐ˝ĐµĐ˝Đ¸Đµ ĐżŃ€Đ¸ Đ˛Ń‹Đ±ĐľŃ€Đµ ŃŹĐ·Ń‹ĐşĐ°
const selectLangChange = () => {
    const hashKey = window.location.hash;
    const hashLang = hashKey.slice(1);

    !hashKey
        ? ''
        : (changePageLang(hashLang), activatedLang(hashLang));
};

selectLangChange()