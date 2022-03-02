const stories = [{
    url: "https://www.thenationalnews.com/coronavirus/2022/01/22/public-fears-thwart-algerias-covid-vaccination-drive/",
    title: "Public fears thwart Algeria’s Covid vaccination drive",
    author: "Samira Nebbati",
    location: "Algiers",
    date: "Jan 22, 2022",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/x0J1cCQ4Te-tOsGPpqx3a6T-J00=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/QQF3HYVIMFAQLDR5CWNTGEUQDM.jpg",
  },
  {
    url: "https://www.thenationalnews.com/mena/2022/01/28/snow-in-libya-sparks-joy-for-children-off-school-and-adults-in-search-of-fun/",
    title: "Snow in Libya sparks joy for children off school and adults in search of fun",
    author: "Hendia Alashepy",
    location: "Lybia",
    date: "Jan 28, 2022",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/ls9rmhst3GAJ57A4zqiltXJJyug=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/53ZJDL7QLRGIZNLGRO3FCD5XYI.jpg",
  },
  {
    url: "https://www.thenationalnews.com/mena/egypt/2022/02/04/world-cancer-day-2022-natural-hair-wigs-give-egypts-child-cancer-sufferers-new-hope/",
    title: "Natural hair wigs give Egypt’s child sufferers new hope on World Cancer Day 2022",
    author: "Menna El Nade",
    location: "Cairo",
    date: "Feb 04, 2022",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/8xTST5Mh4OHNk6cT1RprJeVMkW8=/800x0/filters:format(jpg):quality(70):focal(618x239:628x249)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/O6ZNYXRKNBDXBNOGYVGARBOPRQ.jpg",
  },
  {
    url: "https://www.thenationalnews.com/mena/2022/02/06/death-of-rayan-5-crushes-hearts-in-morocco/?utm_medium=Social&utm_source=Twitter#Echobox=1644171812",
    title: "Death of Rayan, 5, crushes hearts in Morocco",
    author: "Abdelhak Sabry",
    location: "Rabat",
    date: "Feb 06, 2022",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/_Jk0Z56i2Sima6v48RGqz02FoC8=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/3GBKEFQXWQZGJNKTQJMSPTT4IM.jpg",
  },
  {
    url: "https://www.dw.com/en/sextortion-in-syria-young-women-support-each-other/a-55990420",
    title: "Sextortion in Syria: Young women support each other",
    author: "unknown",
    location: "Syria",
    date: null,
    cover: "https://static.dw.com/image/55978559_401.jpg",
  },
  {
    url: "https://www.thenationalnews.com/world/mena/beirut-explosion-palestinian-rescuers-behind-rescue-of-man-from-rubble-1.1061384",
    title: "Beirut explosion: Palestinian rescuers behind rescue of man from rubble",
    author: "Zainab Chamoun",
    location: "Beirut",
    date: "Aug 09, 2020",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/tMIZhTepNTBxfADX_3pfPr76ZgY=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/6LWN4CSZBLHLPONZ5GJ2XR2KHM.jpg",
  },
  {
    url: "https://religionunplugged.com/news/2020/8/13/yfx832suf9dtrtzvbyt8xyb3vhk4i8",
    title: "Downtown Beirut Church Hit By Blast Is A Symbol Of Hope, Unity And Grit",
    author: "Zainab Chamoun",
    location: "Beirut",
    date: "August 13, 2020",
    cover: "August 13, 2020",
  },
  {
    url: "https://religionunplugged.com/news/2020/8/17/a-lebanese-muslim-womans-experience-in-a-french-christian-community",
    title: "Countering Islamophobia With Community: A Lebanese Woman's Spiritual Retreat In France",
    author: "Zainab Chamoun",
    location: "France",
    date: "August 18, 2020",
    cover: "https://images.squarespace-cdn.com/content/v1/586d154f03596e5605562ea7/1597694300334-LTLGQ08DMDWVTKMHJTC9/Screen+Shot+2020-08-17+at+3.57.20+PM.png?format=750w"
  },
  {
    url: "https://www.euronews.com/green/2022/01/24/how-the-largest-mooring-system-in-the-world-is-saving-egypt-s-corals",
    title: "How the largest mooring system in the world is saving Egypt’s corals",
    author: "Eman Mounir",
    location: "Egypt",
    date: "24/01/2022",
    cover: 'https://static.euronews.com/articles/stories/06/40/27/78/808x608_cmsv2_81c87cff-c98c-5cfe-8e3a-759a83eb57fe-6402778.jpg'
  },
  {
    url: "https://womensmediacenter.com/women-under-siege/the-war-in-yemen-spurs-surprising-challenges-to-traditional-gender-roles",
    title: "The War in Yemen Spurs Surprising Challenges to Traditional Gender Roles",
    author: "Abdullah Ali",
    location: "Yemen",
    date: "JANUARY 04, 2022",
    cover: "https://womensmediacenter.com/assets/site/main/_600xAUTO_crop_center-center_none/Image-1.jpg"
  },
  {
    url: "https://www.theguardian.com/global-development/2021/dec/28/from-criminal-to-teacher-the-the-ex-gangster-tackling-crime-in-nairobi",
    title: "From criminal to ‘teacher’: the ex-gangster tackling crime in Nairobi",
    author: "unknown",
    location: "Nairobi",
    date: "unknown",
    cover: "https://i.guim.co.uk/img/media/d9e55cd489063391ac67a717f1c88f30b3740aaf/32_3_1015_609/master/1015.jpg?width=620&quality=85&auto=format&fit=max&s=2c25e14d63ab8d3244a07c845092ee2d"
  },
  {
    url: "https://www.africanews.com/2021/12/22/tribal-endorsements-at-the-helm-of-libya-s-politics-as-polls-near//",
    title: "Tribal endorsements at the helm of Libya's politics as polls near",
    author: "By Rédaction Africanews and with the collaboration of Egab",
    location: "Lybia",
    date: "27/12/2020",
    cover: null
  },
  {
    url: "https://arabic.euronews.com/2021/12/22/libya-elections-tribes-role-in-political-scene-is-colossal-says-analyst",
    title: "محلل: القبائل الليبية توغلت في السياسة وبعض من يشغلون مناصب كبرى رهائن عندها",
    author: "هندية العشيبي",
    location: "Lybia",
    date: "27/12/2021",
    cover: null
  },
  {
    url: "https://www.thenationalnews.com/mena/2021/12/24/we-needed-the-vote-say-libyans-as-hopes-of-first-elected-president-crushed/",
    title: "‘We needed the vote’, say Libyans as hopes of first elected president crushed",
    author: "Hendia Alashepy",
    location: "Libya",
    date: "Dec 24, 2021",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/Ppi0fJIi77HCNIQLJvUOxfh4E94=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/56B5CJXMYDRLQQXN7Y7I32ZXCI.jpg"
  },
  {
    url: "https://www.thenewhumanitarian.org/news-feature/2021/6/9/gaza-vicious-circle-war-truce-and-reconstruction?utm_source=twitter&utm_medium=social&utm_campaign=social",
    title: "Gaza’s vicious circle of war, truce, and reconstruction",
    author: "Motaz al-Hallaq",
    location: "Gaza",
    date: "9 June 2021",
    cover: "https://assets.irinnews.org/styles/responsive_large/s3/2021-06-09t080602z_317368693_rc2wwn9hcffw_rtrmadp_3_israel-palestinians.jpg?tD_JCkHJz6IcOuwT33V3d__bSyJ_V5ZN&itok=p7WVkIq7"
  },
  {
    url: "https://www.thenationalnews.com/mena/2021/08/18/as-wildfires-dampen-misinformation-threatens-more-lives-in-algeria/",
    title: "In Algeria's wildfires blame game, misinformation threatens more lives",
    author: "Farah Souames",
    location: "Algiers",
    date: "Aug 18, 2021",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/-cNJjiaIm1w0_SyW4IZty4OF50Y=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/D2UEVTXTMLRF5V336FSD5NOTNY.jpg"
  },
  {
    url: "https://www.thenationalnews.com/mena/egypt/reeling-it-in-egypt-s-fishermen-exchange-the-nile-s-plastic-waste-for-cash-1.1242297",
    title: "Reeling it in: Egypt's fishermen exchange the Nile's plastic waste for cash",
    author: "Toka Omar",
    location: "Egypt",
    date: "Jun 16, 2021",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/LyV1naw-haUGyvl5bbXcj3CxftA=/1440x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/I6LHUSHPMIVICJBJSCVUT4BBY4.jpg"
  },
  {
    url: "https://www.dw.com/en/in-egypt-online-group-qawem-saving-hundreds-of-women-from-sextortion/a-57950634",
    title: "In Egypt, online group Qawem saving hundreds of women from sextortion",
    author: "unknown",
    location: "Egypt",
    date: "unknown",
    cover: "https://static.dw.com/image/57907453_303.png"
  },
  {
    url: "https://www.dw.com/ar/%D9%82%D8%A7%D9%88%D9%85-%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9-%D9%84%D8%AF%D8%B9%D9%85-%D9%88%D9%85%D8%B3%D8%A7%D9%86%D8%AF%D8%A9-%D8%B6%D8%AD%D8%A7%D9%8A%D8%A7-%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%B2%D8%A7%D8%B2-%D8%A7%D9%84%D8%AC%D9%86%D8%B3%D9%8A-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/a-57982535",
    title: "'قاوم'.. مبادرة لدعم ومساندة ضحايا الابتزاز الجنسي في مصر",
    author: "unknown",
    location: "Egypt",
    date: "unknown",
    cover: "https://static.dw.com/image/57907453_303.png"
  },
  {
    url: "https://www.dw.com/de/%C3%A4gypten-hilfe-f%C3%BCr-opfer-sexueller-erpressung/a-57983756?maca=de-Twitter-sharing",
    title: "Ägypten: Hilfe für Opfer sexueller Erpressung",
    author: "unknown",
    location: "Egypt",
    date: "unknown",
    cover: "https://static.dw.com/image/57907453_303.png"
  },
  {
    url: "https://www.thenationalnews.com/world/mena/in-the-age-of-social-distancing-sudanese-open-their-homes-to-ethiopian-refugees-1.1147898",
    title: "In the age of social distancing, Sudanese open their homes to Ethiopian refugees",
    author: "Hadeel Imad al Deen",
    location: "Sudan",
    date: "Jan 19, 2021",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/QHXR-ubTHPp1jyslNfoxnV0CWDU=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/ENMQKKUVB4QOFWPL5D7CFZT3FU.jpg"
  },
  {
    url: "https://www.dw.com/en/libyas-battle-to-protect-its-endangered-forests/a-58205945",
    title: "Libya's battle to protect its endangered forests",
    author: "unknown",
    location: "Lybia",
    date: "unknown",
    cover: "https://static.dw.com/image/58249055_303.jpg"
  },
  {
    url: "https://www.dw.com/de/libyens-kampf-um-den-erhalt-seiner-w%C3%A4lder/a-58216160",
    title: "Libyens Kampf um den Erhalt seiner Wälder",
    author: "unknown",
    location: "Lybia",
    date: "unknown",
    cover: "https://static.dw.com/image/58249055_303.jpg"
  },
  {
    url: "https://www.dw.com/es/la-batalla-de-libia-por-conservar-sus-bosques/a-58249793",
    title: "La batalla de Libia por conservar sus bosques",
    author: "unknown",
    location: "Lybia",
    date: "unknown",
    cover: "https://static.dw.com/image/58249055_303.jpg"
  },
  {
    url: "https://www.dw.com/ar/%D8%BA%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%AC%D8%A8%D9%84-%D8%A7%D9%84%D8%A3%D8%AE%D8%B6%D8%B1-%D9%81%D9%8A-%D9%84%D9%8A%D8%A8%D9%8A%D8%A7-%D8%AA%D8%B5%D8%B1%D8%AE-%D9%84%D9%84%D8%AD%D9%81%D8%A7%D8%B8-%D8%B9%D9%84%D9%8A%D9%87%D8%A7/a-58253360",
    title: "غابات الجبل الأخضر في ليبيا تصرخ للحفاظ عليها",
    author: "unknown",
    location: "Lybia",
    date: "unknown",
    cover: "https://static.dw.com/image/58249055_303.jpg"
  },
  {
    url: "https://www.thenationalnews.com/mena/egypt/2021/08/30/pandemic-creates-skating-craze-in-egypt/",
    title: "Pandemic creates skating craze in Egypt",
    author: "Toka Omar",
    location: "Egypt",
    date: "Aug 30, 2021",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/U_IL6NEPFqqs9MiqONodSQq2tx8=/800x0/filters:format(jpg):quality(70):focal(-5x-5:5x5)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/YY62I3UMVBEIVK5G27RMPEDHG4.jpg"
  },
  {
    url: "https://www.theguardian.com/global-development/2021/sep/03/nigerias-idp-camp-midwife-bringing-joy-to-mothers-left-behind-by-state",
    title: "Delivering babies in a Nigerian camp: ‘I’ve had to use plastic bags as gloves’",
    author: "unknown",
    location: "Nigeria",
    date: "unknown",
    cover: "https://i.guim.co.uk/img/media/07f2e2800f38ec853584235257c67797a2aee705/0_0_4160_3120/master/4160.jpg?width=620&quality=85&auto=format&fit=max&s=b0b99386941e5ddbb7ea839747c79ea4"
  },
  {
    url: "https://www.thenationalnews.com/mena/2021/09/08/first-time-voters-view-moroccos-election-with-hope/",
    title: "First-time voters view Morocco's election with hope",
    author: "Soulaimane Bakbach",
    location: "Morocco",
    date: "Sep 08, 2021",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/GcHm5TtEsCT-TB26hQmaQb6Lk3c=/800x0/filters:format(jpg):quality(70):focal(-5x-5:5x5)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/EA6DACKJOADW3KY52MRDDLLRFM.jpg"
  },
  {
    url: "https://www.thenewhumanitarian.org/news-feature/2021/9/9/lebanese-women-fight-period-poverty-with-eco-friendly-alternatives?utm_source=twitter&utm_medium=social&utm_campaign=social",
    title: "Lebanese women fight period poverty with eco-friendly alternatives",
    author: "Zainab Chamoun",
    location: "Lebanon",
    date: "9 September 2021",
    cover: "https://assets.irinnews.org/s3fs-public/styles/responsive_large/public/menstrual-cup-lebanon.jpg?dgw34Pw2VKUo6HERantxd30IYdbWOO5C&itok=wcdeBnoF"
  },
  {
    url: "https://www.thenationalnews.com/mena/2021/09/08/moroccan-voters-head-to-the-polls-to-decide-fate-of-ruling-islamists/",
    title: "Moroccan voters head to the polls to decide fate of ruling Islamists",
    author: "Soulaimane Bakbach",
    location: "Morocco",
    date: "Sep 08, 2021",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/GcHm5TtEsCT-TB26hQmaQb6Lk3c=/800x0/filters:format(jpg):quality(70):focal(-5x-5:5x5)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/EA6DACKJOADW3KY52MRDDLLRFM.jpg"
  },
  {
    url: "https://www.thenationalnews.com/gulf-news/2021/12/18/animals-are-the-forgotten-victims-of-crisis-in-war-torn-yemen/",
    title: "Animals are the forgotten victims of crisis in war-torn Yemen",
    author: "Nahla Alqadasi",
    location: "Yemen",
    date: "Dec 19, 2021",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/yPMVEGp-6Vgk0sSfF06OMO1szWo=/800x0/filters:format(jpg):quality(70):focal(-5x-5:5x5)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/PTPQZAJGRBELBCV5AW44VTMT5U.jpg"
  },
  {
    url: "https://www.euronews.com/2021/10/08/syrian-families-struggle-to-get-bread-during-wheat-crisis",
    title: "Syrian families struggle to get bread during wheat crisis ",
    author: "Safaa Sallal",
    location: "Syria",
    date: "12/10/2021",
    cover: null
  },
  {
    url: "https://www.thenationalnews.com/mena/2021/10/29/libyas-registered-female-voters-double-in-number-before-polls/",
    title: "Armed with pamphlets: the battle to register women voters in Libya",
    author: "Hendia Alashepy",
    location: "Lybia",
    date: "Oct 29, 2021",
    cover: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/5653_BDreDmw96TnPdc3_ZiQQpw=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/OTLBBWLVZ4GK6RSNXV7ZLGO5K4.jpg"
  },
  {
    url: "https://www.opendemocracy.net/en/north-africa-west-asia/egypts-desertification-is-ruining-fields-cutting-crops-and-displacing-farmers/",
    title: "Egypt’s desertification is ruining fields, cutting crops and displacing farmers",
    author: "Eman Mounir",
    location: "Egypt",
    date: "8 November 2021",
    cover: "https://cdn2.opendemocracy.net/media/images/olives2.max-760x504.jpg"
  },
  {
    url: "https://www.opendemocracy.net/en/north-africa-west-asia/climate-change-is-killing-libyas-honey-bees/",
    title: "Climate change is killing Libya’s honey bees",
    author: "Hendia Alashepy",
    location: "Lybia",
    date: "11 November 2021",
    cover: "https://cdn2.opendemocracy.net/media/images/3_3TS6QJt.max-760x504.jpg"
  },
  {
    url: "https://www.thenewhumanitarian.org/news-feature/2021/11/24/Yemen-Marib-displacement-endless-cycle?utm_campaign=social&utm_medium=social&utm_source=Twitter",
    title: "‘The war crushed our dreams’: Displaced again and again in Yemen’s Marib",
    author: "Mohamed Ghazi",
    location: "Yemen",
    date: "24 November 2021",
    cover: "https://assets.irinnews.org/s3fs-public/styles/responsive_large/public/yemen-marib-shelter-building.jpg?VdyPsAAFKS7LOsNQE2DU9yasMivgOYW8&itok=I7wyhAZn"
  }
];
