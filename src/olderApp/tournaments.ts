/*
    Date 20 Dec 2024
    Naruto S1E7, S1E16
*/

/*
  cs_summit 8
*/

const tournaments = [
  {
    id: 1,
    tittle: "MLG Columbus 2016",
    overview: {
      date: ["3-29-2016", "4-3-2016"],
      prizePool: 1000000,
      teams: 16,
      location: ["Columbus, Ohio, USA", "US"],
    },
    mvp: {
      player: `Marcelo 'coldzera' David`, 
      rating: [1.32, 'Rating 2.0'],
      adr: 88.7,
      impact: 1.26,
      kast: 76.3,
      dpr: 0.58,
      kpr: 0.90,
    },
    evps: [
      {player: "Egor 'flamie' Vasilyev", rating: 1.25},
      {player: "Oleksandr 's1mple' Kostyliev", rating: 1.24},
      {player: "Lincoln 'fnx' Lau", rating: 1.19},
      {player: "Gabriel 'FalleN' Toledo", rating: 1.18},
      {player: "Fernando 'fer' Alvarenga", rating: 1.14},
    ],
    topPlayers: [
      {player: "Marcelo 'coldzera' David", rating: {value: 1.32, maps: 9}},
      {player: "Nikola 'NiKo' Kovač", rating: {value: 1.30, maps: 5}},
      {player: "Ioann 'Edward' Sukhariev", rating: {value: 1.28, maps: 8}},
      {player: "Egor 'flamie' Vasilyev", rating: {value: 1.25, maps: 8}},
      {player: "Oleksandr 's1mple' Kostyliev", rating: {value: 1.24, maps: 6}},
      {player: "Nicolai 'device' Reedtz", rating: {value: 1.22, maps: 6}},
      {player: "Oleksandr 'Shara' Hordieyev", rating: {value: 1.21, maps: 2}},
      {player: "Peter 'dupreeh' Rasmussen", rating: {value: 1.20, maps: 6}},
    ],
    places: [
      {
        team: "Luminosity",
        place: "1st",
      },
      {
        team: "Natus Vincere",
        place: "2nd",
      },
      {
        team: "Liquid",
        place: "3-4th",
      },
      {
        team: "Astralis",
        place: "3-4th",
      },
    ],
    playoffs: [
      {
        stage: "Quarter-finals",
        matches: [
          { team1: "Natus Vincere", score1: 2, team2: "Ninjas in Pyjamas", score2: 0 },
          { team1: "Astralis", score1: 2, team2: "Fnatic", score2: 0 },
          { team1: "Liquid", score1: 2, team2: "CLG", score2: 0 },
          { team1: "Luminosity", score1: 2, team2: "Virtus.pro", score2: 1 },
        ],
      },
      {
        stage: "Semi-finals",
        matches: [
          { team1: "Natus Vincere", score1: 2, team2: "Astralis", score2: 0 },
          { team1: "Liquid", score1: 0, team2: "Luminosity", score2: 2 },
        ],
      },
      {
        stage: "Grand final",
        matches: [
          { team1: "Natus Vincere", score1: 0, team2: "Luminosity", score2: 2 },
        ],
      },
    ],
    topTeams: [
      {
        team: "Luminosity",
        rating: {value: 1.18, maps: 9}
      },
      {
        team: "Natus Vincere",
        rating: {value: 1.12, maps: 8}
      },
      {
        team: "Astralis",
        rating: {value: 1.10, maps: 6}
      },
      {
        team: "FlipSid3",
        rating: {value: 1.10, maps: 2}
      },
      {
        team: "Liquid",
        rating: {value: 1.09, maps: 6}
      },
      {
        team: "Fnatic",
        rating: {value: 1.08, maps: 6}
      },
      {
        team: "Virtus.pro",
        rating: {value: 1.07, maps: 8}
      },
      {
        team: "mousesports",
        rating: {value: 1.02, maps: 5}
      },
    ],
    descriptions: ["coldzera jumpshot grafitti", ""],
    logo: require("@/assets/tournaments__logo/MLG Columbus 2016 Logo.png"),
    banner: require("@/assets/tournaments__logo/Banner Default.png"),
    trophy: require("@/assets/tournaments__logo/MLG Columbus 2016 Trophy.png"),
    Galleries: []
  },
  {
    id: 2,
    tittle: "DreamHack Austin 2016",
    overview: {
      date: ["5-6-2016", "5-8-2016"],
      prizePool: 100000,
      teams: 8,
      location: ["Austin, Texas, USA", "US"],
    },
    mvp: {
      player: `Marcelo 'coldzera' David`, 
      rating: [1.42, 'Rating 2.0'],
      adr: 80.1,
      impact: 1.32,
      kast: 82.1,
      dpr: 0.45,
      kpr: 0.84,
    },
    evps: [
      {player: "Jake 'Stewie2K' Yip", rating: 1.47},
      {player: "Marcelo 'coldzera' David", rating: 1.44},
      {player: "Tarik 'tarik' Celik", rating: 1.29},
    ],
    places: [
      {
        team: "Luminosity",
        place: "1st",
      },
      {
        team: "Tempo Storm",
        place: "2nd",
      },
      {
        team: "Liquid",
        place: "3-4th",
      },
      {
        team: "Cloud9",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/DreamHack Austin 2016 Logo.png"),
    banner: require("@/assets/tournaments__logo/Banner Default.png"),
    trophy: require("@/assets/tournaments__logo/DreamHack Austin 2016 Trophy.png"),
    Galleries: []
  },
  {
    id: 3,
    tittle: "ESL Pro League Season 3 Finals",
    overview: {
      date: ["05-6-2016", "5-8-2016"],
      prizePool: 512000,
      teams: 8,
      location: ["London, United Kingdom", "UK"],
    },
    mvp: {
      player: `Marcelo 'coldzera' David`, 
      rating: [1.42, 'Rating 2.0'],
      adr: 80.1,
      impact: 1.32,
      kast: 82.1,
      dpr: 0.45,
      kpr: 0.84,
    },
    evps: [
      {player: "Jake 'Stewie2K' Yip", rating: 1.47},
      {player: "Marcelo 'coldzera' David", rating: 1.44},
      {player: "Tarik 'tarik' Celik", rating: 1.29},
    ],
    places: [
      {
        team: "Luminosity",
        place: "1st",
      },
      {
        team: "G2",
        place: "2nd",
      },
      {
        team: "Ninja in Pyjamas",
        place: "3-4th",

      },
      {
        team: "Fnatic",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/ESL Pro League Season 3 Finals Logo.png"),
    banner: require("@/assets/tournaments__logo/ESL Pro League Season 3 Finals Banner.jpg"), 
    trophy: require("@/assets/tournaments__logo/ESL Pro League Season 3 Finals Trophy.png"), 
    Galleries: []
  },
  {
    id: 4,
    tittle: "ESL One Cologne 2016",
    overview: {
      date: ["7-5-2016", "7-10-2016"],
      prizePool: 1000000,
      teams: 16,
      location: ["Cologne, Germany", "DE"],
    },
    mvp: {
      player: `Marcelo 'coldzera' David`, 
      rating: [1.42, 'Rating 2.0'],
      adr: 80.1,
      impact: 1.32,
      kast: 82.1,
      dpr: 0.45,
      kpr: 0.84,
    },
    evps: [
      {player: "Jake 'Stewie2K' Yip", rating: 1.47},
      {player: "Marcelo 'coldzera' David", rating: 1.44},
      {player: "Tarik 'tarik' Celik", rating: 1.29},
    ],
    places: [
      {
        team: "SK Gaming",
        place: "1st",
      },
      {
        team: "Liquid",
        place: "2nd",
      },
      {
        team: "Fnatic",
        place: "3-4th",
      },
      {
        team: "Virtus.pro",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/ESL One Cologne 2016 Logo.png"),
    banner: require("@/assets/tournaments__logo/ESL One Cologne 2016 Banner.jpg"),
    trophy: require("@/assets/tournaments__logo/ESL One Cologne 2016 Trophy.png"),
    Galleries: []
  },
  {
    id: 5,
    tittle: "cs_summit Spring 2017",
    overview: {
      date: ["4-20-2017", "4-23-2017"],
      prizePool: 150000,
      teams: 8,
      location: ["Los Angeles, California", "USA"],
    },
    mvp: {
      player: `Marcelo 'coldzera' David`, 
      rating: [1.42, 'Rating 2.0'],
      adr: 80.1,
      impact: 1.32,
      kast: 82.1,
      dpr: 0.45,
      kpr: 0.84,
    },
    evps: [
      {player: "Jake 'Stewie2K' Yip", rating: 1.47},
      {player: "Marcelo 'coldzera' David", rating: 1.44},
      {player: "Tarik 'tarik' Celik", rating: 1.29},
    ],
    places: [
      {
        team: "SK Gaming",
        place: "1st",
      },
      {
        team: "Gambit",
        place: "2nd",
      },
      {
        team: "OpTic",
        place: "3rd",
      },
      {
        team: "Cloud9",
        place: "4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/cs_summit Spring 2017 Logo.png"),
    banner: require("@/assets/tournaments__logo/cs_summit Spring 2017 Banner.jpg"),
    trophy: require("@/assets/tournaments__logo/cs_summit Spring 2017 Trophy.png"),
    Galleries: []
  },
  {
    id: 6,
    tittle: "IEM Sydney 2017",
    overview: {
      date: ["5-3-2017", "5-5-2017"],
      prizePool: 200000,
      teams: 8,
      location: ["Sydney, Australia", "AU"],
    },
    mvp: {
      player: `Marcelo 'coldzera' David`, 
      rating: [1.42, 'Rating 2.0'],
      adr: 80.1,
      impact: 1.32,
      kast: 82.1,
      dpr: 0.45,
      kpr: 0.84,
    },
    evps: [
      {player: "Jake 'Stewie2K' Yip", rating: 1.47},
      {player: "Marcelo 'coldzera' David", rating: 1.44},
      {player: "Tarik 'tarik' Celik", rating: 1.29},
    ],
    places: [
      {
        team: "SK Gaming",
        place: "1st",
      },
      {
        team: "Faze Clan",
        place: "2nd",
      },
      {
        team: "OpTic",
        place: "3-4th",
      },
      {
        team: "Astralis",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/IEM Sydney 2017 Logo.png"),
    banner: require("@/assets/tournaments__logo/IEM Sydney 2017 Banner.jpg"),
    trophy: require("@/assets/tournaments__logo/IEM Sydney 2017 Trophy.png"),
    Galleries: []
  },
  {
    id: 7,
    tittle: "DreamHack Open Summer 2017",
    overview: {
      date: ["6-17-2017", "6-19-2017"],
      prizePool: 100000,
      teams: 8,
      location: ["Jönköping, Sweden", "SE"],
    },
    mvp: {
      player: `Marcelo 'coldzera' David`, 
      rating: [1.42, 'Rating 2.0'],
      adr: 80.1,
      impact: 1.32,
      kast: 82.1,
      dpr: 0.45,
      kpr: 0.84,
    },
    evps: [
      {player: "Jake 'Stewie2K' Yip", rating: 1.47},
      {player: "Marcelo 'coldzera' David", rating: 1.44},
      {player: "Tarik 'tarik' Celik", rating: 1.29},
    ],
    places: [
      {
        team: "SK Gaming",
        place: "1st",
      },
      {
        team: "Fnatic",
        place: "2nd",
      },
      {
        team: "CLG",
        place: "3-4th",
      },
      {
        team: "Immortals",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/DreamHack Open Summer 2017 Logo.png"),
    banner: require("@/assets/tournaments__logo/DreamHack Open Summer 2017 Banner.jpg"),
    trophy: require("@/assets/tournaments__logo/DreamHack Open Summer 2017 Trophy.png"),
    Galleries: []
  },
  {
    id: 8,
    tittle: "ECS Season 3 Finals",
    overview: {
      date: ["6-23-2017", "6-25-2017"],
      prizePool: 660000,
      teams: 8,
      location: ["London, United Kingdom", "UK"],
    },
    mvp: {
      player: `Marcelo 'coldzera' David`, 
      rating: [1.42, 'Rating 2.0'],
      adr: 80.1,
      impact: 1.32,
      kast: 82.1,
      dpr: 0.45,
      kpr: 0.84,
    },
    evps: [
      {player: "Jake 'Stewie2K' Yip", rating: 1.47},
      {player: "Marcelo 'coldzera' David", rating: 1.44},
      {player: "Tarik 'tarik' Celik", rating: 1.29},
    ],
    places: [
      {
        team: "SK Gaming",
        place: "1st",
      },
      {
        team: "Faze Clan",
        place: "2nd",
      },
      {
        team: "Cloud9",
        place: "3-4th",
      },
      {
        team: "Astralis",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/ECS Season 3 Finals Logo.png"),
    banner: require("@/assets/tournaments__logo/ECS Season 3 Finals Banner.jpg"),
    trophy: require("@/assets/tournaments__logo/ECS Season 3 Finals Trophy.png"),
    Galleries: []
  },
  {
    id: 9,
    tittle: "ESL One Cologne 2017",
    overview: {
      date: ["7-4-2017", "7-9-2017"],
      prizePool: 250000,
      teams: 16,
      location: ["Cologne, Germany", "GE"],
    },
    mvp: {
      player: `Marcelo 'coldzera' David`, 
      rating: [1.42, 'Rating 2.0'],
      adr: 80.1,
      impact: 1.32,
      kast: 82.1,
      dpr: 0.45,
      kpr: 0.84,
    },
    evps: [
      {player: "Jake 'Stewie2K' Yip", rating: 1.47},
      {player: "Marcelo 'coldzera' David", rating: 1.44},
      {player: "Tarik 'tarik' Celik", rating: 1.29},
    ],
    places: [
      {
        team: "SK Gaming",
        place: "1st",
      },
      {
        team: "Cloud9",
        place: "2nd",
      },
      {
        team: "Natus Vincere",
        place: "3-4th",
      },
      {
        team: "Faze Clan",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/ESL One Cologne 2017 Logo.png"),
    banner: require("@/assets/tournaments__logo/ESL One Cologne 2017 Banner.jpg"),
    trophy: require("@/assets/tournaments__logo/ESL One Cologne 2017 Trophy.png"),
    Galleries: []
  },
  {
    id: 10,
    tittle: "EPICENTER 2017",
    overview: {
      date: ["10-24-2017", "10-29-2017"],
      prizePool: 490000,
      teams: 8,
      location: ["Saint Petersburg, Russia", "RU"],
    },
    mvp: {
      player: `Marcelo 'coldzera' David`, 
      rating: [1.42, 'Rating 2.0'],
      adr: 80.1,
      impact: 1.32,
      kast: 82.1,
      dpr: 0.45,
      kpr: 0.84,
    },
    evps: [
      {player: "Jake 'Stewie2K' Yip", rating: 1.47},
      {player: "Marcelo 'coldzera' David", rating: 1.44},
      {player: "Tarik 'tarik' Celik", rating: 1.29},
    ],
    places: [
      {
        team: "SK Gaming",
        place: "1st",
      },
      {
        team: "Virtus.pro",
        place: "2nd",
      },
      {
        team: "G2",
        place: "3-4th",
      },
      {
        team: "Astralis",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/EPICENTER 2017 Logo.png"),
    banner: require("@/assets/tournaments__logo/EPICENTER 2017 Banner.jpg"),
    trophy: require("@/assets/tournaments__logo/EPICENTER 2017 Trophy.png"),
    Galleries: []
  },
  {
    id: 11,
    tittle: "BLAST Pro Series Copenhagen 2017",
    overview: {
      date: ["11-24-2017", "11-25-2017"],
      prizePool: 250000,
      teams: 6,
      location: ["Copenhagen, Denmark", "DK"],
    },
    mvp: {
      player: `Marcelo 'coldzera' David`, 
      rating: [1.42, 'Rating 2.0'],
      adr: 80.1,
      impact: 1.32,
      kast: 82.1,
      dpr: 0.45,
      kpr: 0.84,
    },
    evps: [
      {player: "Jake 'Stewie2K' Yip", rating: 1.47},
      {player: "Marcelo 'coldzera' David", rating: 1.44},
      {player: "Tarik 'tarik' Celik", rating: 1.29},
    ],
    places: [
      {
        team: "SK Gaming",
        place: "1st",
      },
      {
        team: "Astralis",
        place: "2nd",
      },
      {
        team: "Faze Clan",
        place: "3-4th",
      },
      {
        team: "North",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/BLAST Pro Series Copenhagen 2017 Logo.png"),
    banner: require("@/assets/tournaments__logo/BLAST Pro Series Copenhagen 2017 Banner.jpg"),
    trophy: require("@/assets/tournaments__logo/BLAST Pro Series Copenhagen 2017 Trophy.png"),
    Galleries: []
  },
  {
    id: 12,
    tittle: "ESL Pro League Season 6 Finals",
    overview: {
      date: ["12-5-2017", "12-10-2017"],
      prizePool: 750000,
      teams: 12,
      location: ["Odense, Denmark", "DK"],
    },
    mvp: {
      player: `Marcelo 'coldzera' David`, 
      rating: [1.42, 'Rating 2.0'],
      adr: 80.1,
      impact: 1.32,
      kast: 82.1,
      dpr: 0.45,
      kpr: 0.84,
    },
    evps: [
      {player: "Jake 'Stewie2K' Yip", rating: 1.47},
      {player: "Marcelo 'coldzera' David", rating: 1.44},
      {player: "Tarik 'tarik' Celik", rating: 1.29},
    ],
    places: [
      {
        team: "SK Gaming",
        place: "1st",
      },
      {
        team: "Faze Clan",
        place: "2nd",
      },
      {
        team: "Fnatic",
        place: "3-4th",
      },
      {
        team: "Misfits",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/ESL Pro League Season 6 Finals Logo.png"),
    banner: require("@/assets/tournaments__logo/ESL Pro League Season 6 Finals Banner.jpg"),
    trophy: require("@/assets/tournaments__logo/ESL Pro League Season 6 Finals Trophy.png"),
    Galleries: []
  },
  { //ok
    id: 13,
    tittle: "ZOTAC Cup Masters 2018 Grand Finals",
    overview: {
      date: ["8-24-2017", "8-26-2017"],
      prizePool: 300000,
      teams: 8,
      location: ["Hong Kong", "HK"],
    },
    mvp: {
      player: `Gabriel 'FalleN' Toledo`, 
      rating: [1.42, 'Rating 2.0'],
      adr: 80.1,
      impact: 1.32,
      kast: 82.1,
      dpr: 0.45,
      kpr: 0.84,
    },
    evps: [
      {player: "Jake 'Stewie2K' Yip", rating: 1.47},
      {player: "Marcelo 'coldzera' David", rating: 1.44},
      {player: "Tarik 'tarik' Celik", rating: 1.29},
    ],
    places: [
      {
        team: "MIBR",
        place: "1st",
      },
      {
        team: "Kinguin",
        place: "2nd",
      },
      {
        team: "MVP PK",
        place: "3-4th",
      },
      {
        team: "Ghost",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/ZOTAC Cup Masters 2018 Grand Finals Logo.png"),
    banner: require("@/assets/tournaments__logo/ZOTAC Cup Masters 2018 Grand Finals Banner.jpg"),
    trophy: require("@/assets/tournaments__logo/ZOTAC-Cup-Masters-2018-Grand-Finals Trophy.png"),
    Galleries: []
  },
  {
    id: 14,
    tittle: "BLAST Pro Series Copenhagen 2019",
    overview: {
      date: ["11-1-2019", "11-2-2019"],
      prizePool: 250000,
      teams: 6,
      location: ["Copenhagen, Denmark", "DK"],
    },
    mvp: {
      player: `Nikola 'NiKo' Kovač`, 
      rating: [1.33, 'Rating 2.0'],
      adr: 92.8,
      impact: 1.30,
      kast: 78.0,
      dpr: 0.62,
      kpr: 0.84,
    },
    evps: [
      {player: "Oleksandr 's1mple' Kostyliev", rating: 1.33},
      {player: "Jonathan 'EliGE' Jablonowski", rating: 1.38},
      {player: "Marcelo 'coldzera' David", rating: 1.22},
      {player: "Håvard 'rain' Nygaard", rating: 1.14},
      {player: "Helvijs 'broky' Saukants", rating: 1.14},
      {player: "Patrik 'f0rest' Lindberg", rating: 1.07},
    ],
    places: [
      {
        team: "FaZe",
        place: "1st",
      },
      {
        team: "Ninja in Pyjamas",
        place: "2nd",
      },
      {
        team: "Natus Vincere",
        place: "3rd",
      },
      {
        team: "Astralis",
        place: "4th",
      },
      {
        team: "Liquid",
        place: "5th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/BLAST Pro Series Copenhagen 2019 Logo.png"),
    banner: require("@/assets/tournaments__logo/BLAST Pro Series Copenhagen 2019 Banner.png"),
    trophy: require("@/assets/tournaments__logo/BLAST Pro Series Copenhagen 2019 Trophy.png"),
    Galleries: []
  },
  {
    id: 15,
    tittle: "IEM New York 2020 Europe",
    overview: {
      date: ["10-6-2020", "10-11-2020"],
      prizePool: 140000,
      teams: 8,
      location: ["Europe (Online)", "EU"],
    },
    mvp: {
      player: `Nikola 'NiKo' Kovač`, 
      rating: [1.28, 'Rating 2.0'],
      adr: 89.1,
      impact: 1.38,
      kast: 74.9,
      dpr: 0.65,
      kpr: 0.82
    },
    evps: [
      {player: "Mathieu 'ZywOo' Herbaut", rating: 1.34},
      {player: "Benjamin 'blameF' Bremer", rating: 1.27},
      {player: "Helvijs 'broky' Saukants", rating: 1.17},
      {player: "Markus 'Kjaerbye' Kjærbye", rating: 1.12},
    ],
    places: [
      {
        team: "FaZe Clan",
        place: "1st",
      },
      {
        team: "OG",
        place: "2nd",
      },
      {
        team: "Vitality",
        place: "3-4th",
      },
      {
        team: "Fnatic",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/IEM New York 2020 Europe Logo.png"),
    banner: require("@/assets/tournaments__logo/IEM New York 2020 Europe Banner.png"),
    trophy: require("@/assets/tournaments__logo/IEM New York 2020 Europe Trophy.png"),
    Galleries: []
  },
  {
    id: 16,
    tittle: "Elisa Masters Espoo 2023",
    overview: {
      date: ["10-6-2023", "10-11-2023"],
      prizePool: 140000,
      teams: 8,
      location: ["Europe (Online)", "EU"],
    },
    mvp: {
      player: `Tim 'nawwk' Jonasson`, 
      rating: [1.24, 'Rating 2.1'],
      adr: 78.6,
      impact: 1.19,
      kast: 78.1,
      dpr: 0.52,
      kpr: 0.84
    },
    evps: [
      {player: "Kaike 'KSCERATO' Cerato", rating: 1.17},
      {player: "Andrei 'arT' Piovezan", rating: 1.09},
    ],
    places: [
      {
        team: "FURIA",
        place: "1st",
      },
      {
        team: "Apeks",
        place: "2nd",
      },
      {
        team: "HAVU",
        place: "3-4th",
      },
      {
        team: "ENCE",
        place: "3-4th",
      },
      {
        team: "MOUZ",
        place: "5-6th",
      },
      {
        team: "GamerLegion",
        place: "5-6th",
      },
      {
        team: "Complexity",
        place: "7-8th",
      },
      {
        team: "Fnatic",
        place: "7-8th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/Elisa Masters Espoo 2023 Logo.png"),
    banner: require("@/assets/tournaments__logo/Elisa Masters Espoo 2023 Banner.jpg"),
    trophy: require("@/assets/tournaments__logo/Elisa Masters Espoo 2023 Trophy.png"),
    MVP: `Tim 'nawwk' Jonasson`, 
    Galleries: []
  },

  {
    id: 17,
    tittle: "IEM Fall 2021 North America",
    overview: {
      date: ["10-5-2021", "10-10-2021"],
      prizePool: 70000,
      teams: 12,
      location: ["North America (Online)", "NA"],
    },
    mvp: null,
    evps: null,
    places: [
      {
        team: "FURIA",
        place: "1st",
      },
      {
        team: "GODSENT",
        place: "2nd",
      },
      {
        team: "Liquid",
        place: "3rd",
      },
      {
        team: "paiN",
        place: "4th",
      },
      {
        team: "Evil Geniuses",
        place: "4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/IEM Fall 2021 North America Logo.png"),
    banner: require("@/assets/tournaments__logo/IEM Fall 2021 North America Banner.png"),
    trophy: require("@/assets/tournaments__logo/IEM Fall 2021 North America Trophy.png"),
    MVP: `none`, 
    Galleries: []
  },
  {
    id: 18,
    tittle: "Elisa Invitational Summer 2021",
    overview: {
      date: ["6-3-2021", "07-4-2021"],
      prizePool: 100000,
      teams: 18,
      location: ["Europe (Online)", "EU"],
    },
    mvp: {
      player: `Yuri 'yuurih' Santos`, 
      rating: [1.19, 'Rating 2.0'],
      adr: 81.4,
      impact: 1.23,
      kast: 72.3,
      dpr: 0.61,
      kpr: 0.75
    },
    evps: [null],
    places: [
      {
        team: "FURIA",
        place: "1st",
      },
      {
        team: "SKADE",
        place: "2nd",
      },
      {
        team: "Endpoint",
        place: "3-4th",
      },
      {
        team: "Entropiq",
        place: "3-4th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/Elisa Invitational Summer 2021 Logo.png"),
    banner: require("@/assets/tournaments__logo/Elisa Invitational Summer 2021 Banner.png"),
    trophy: require("@/assets/tournaments__logo/Elisa Invitational Summer 2021 Trophy.png"),
    Galleries: []
  },
  {
    id: 19,
    tittle: "DreamHack Masters Spring 2020 - North America",
    overview: {
      date: ["5-19-2020", "6-14-2020"],
      prizePool: 100000,
      teams: 8,
      location: ["North America (Online)", "NA"],
    },
    mvp: {
      player: `Yuri 'yuurih' Santos`, 
      rating: [1.19, 'Rating 2.0'],
      adr: 81.4,
      impact: 1.23,
      kast: 72.3,
      dpr: 0.61,
      kpr: 0.75
    },
    evps: [
      {player: "Ricky 'floppy' Kemery", rating: 1.29},
      {player: "Justin 'jks' Savage", rating: 1.24},
      {player: "Keith 'NAF' Markovic", rating: 1.22},
      {player: "Jonathan 'EliGE' Jablonowski", rating: 1.19},
      {player: "Henrique 'HEN1' Teles", rating: 1.14},
      {player: "Kaike 'KSCERATO' Cerato", rating: 1.11},
    ],
    places: [
      {
        team: "FURIA",
        place: "1st",
      },
      {
        team: "Liquid",
        place: "2nd",
      },
      {
        team: "100 Thieves",
        place: "3rd",
      },
      {
        team: "Cloud9",
        place: "4th",
      },
      {
        team: "Gen.G",
        place: "5-6th",
      },
      {
        team: "MIBR",
        place: "5-6th",
      },
      {
        team: "Chaos",
        place: "7-8th",
      },
      {
        team: "Evil Geniuses",
        place: "7-8th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/DreamHack Masters Spring 2020 - North America Logo.png"),
    banner: require("@/assets/tournaments__logo/DreamHack Masters Spring 2020 - North America Banner.jpg"),
    trophy: require("@/assets/tournaments__logo/DreamHack Masters Spring 2020 - North America Trophy.png"),
    Galleries: []
  },
  {
    id: 20,
    tittle: "ESL Pro League Season 12 North America",
    overview: {
      date: ["9-1-2020", "09-27-2020"],
      prizePool: 225000,
      teams: 8,
      location: ["North America (Online)", "NA"],
    },
    mvp: {
      player: `Henrique 'HEN1' Teles`, 
      rating: [1.29, 'Rating 2.0'],
      adr: 81.0,
      impact: 1.30,
      kast: 77.3,
      dpr: 0.54,
      kpr: 0.79
    },
    evps: [
      {player: "Yuri 'yuurih' Santos", rating: 1.21},
      {player: "Justin 'jks' Savage", rating: 1.18},
      {player: "Vincent 'Brehze' Cayonte", rating: 1.18},
      {player: "Tsvetelin 'CeRq' Dimitrov", rating: 1.18},
      {player: "Kaike 'KSCERATO' Cerato", rating: 1.16},
      {player: "Sean 'Gratisfaction' Kaiwai", rating: 1.11},
    ],
    places: [
      {
        team: "FURIA",
        place: "1st",
      },
      {
        team: "100 Thieves",
        place: "2nd",
      },
      {
        team: "Evil Geniuses",
        place: "3rd",
      },
      {
        team: "Liquid",
        place: "4th",
      },
      {
        team: "Chaos",
        place: "5th",
      },
      {
        team: "Gen.G",
        place: "6th",
      },
      {
        team: "Cloud9",
        place: "7th",
      },
      {
        team: "Triumph",
        place: "8th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/ESL Pro League Season 12 North America Logo.png"),
    banner: require("@/assets/tournaments__logo/ESL Pro League Season 12 North America Banner.jpg"),
    trophy:require("@/assets/tournaments__logo/ESL Pro League Season 12 North America Trophy.png"),
    Galleries: []
  },
  {
    id: 21,
    tittle: "IEM New York 2020 North America",
    overview: {
      date: ["10-6-2020", "10-18-2020"],
      prizePool: 225000,
      teams: 8,
      location: ["North America (Online)", "NA"],
    },

    mvp: {
      player: `Yuri 'yuurih' Santos`, 
      rating: [1.19, 'Rating 2.0'],
      adr: 83.8,
      impact: 1.16,
      kast: 73.8,
      dpr: 0.61,
      kpr: 0.75
    },
    evps: [
      {player: "Vincent 'Brehze' Cayonte", rating: 1.47},
      {player: "Jonathan 'EliGE' Jablonowski", rating: 1.36},
      {player: "Ethan 'Ethan' Arnold", rating: 1.33},
      {player: "Keith 'NAF' Markovic", rating: 1.23},
      {player: "Justin 'jks' Savage", rating: 1.19},
      {player: "Joakim 'jkaem' Myrbostad", rating: 1.17},
      {player: "Henrique 'HEN1' Teles", rating: 1.15},
      {player: "Kaike 'KSCERATO' Cerato", rating: 1.13},
      {player: "Sean 'Gratisfaction' Kaiwai", rating: 1.13},
    ],
    places: [
      {
        team: "FURIA",
        place: "1st",
      },
      {
        team: "100 Thieves",
        place: "2nd",
      },
      {
        team: "Evil Geniuses",
        place: "3rd",
      },
      {
        team: "TeamOne",
        place: "4th",
      },
      {
        team: "Liquid",
        place: "5th",
      },
      {
        team: "Triumph",
        place: "7-8th",
      },
      {
        team: "Chaos",
        place: "7-8th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/IEM New York 2020 North America Logo.png"),
    banner: require("@/assets/tournaments__logo/IEM New York 2020 North America Banner.png"),
    trophy: require("@/assets/tournaments__logo/IEM New York 2020 North America Trophy.png"),
    Galleries: []
  },
  {
    id: 22,
    tittle: "SuperNova CS:GO Malta",
    overview: {
      date: ["11-29-2018", "12-2-2018"],
      prizePool: 150000,
      teams: 8,
      location: ["Saint Julian's, Malta", "MT"],
    },
    mvp: {
      player: `Keith 'NAF' Markovic`, 
      rating: [1.31, 'Rating 2.0'],
      adr: 78.3,
      impact: 1.17,
      kast: 82.9,
      dpr: 0.50,
      kpr: 0.76
    },
    evps: [null],
    places: [
      {
        team: "Liquid",
        place: "1st",
      },
      {
        team: "NRG",
        place: "2nd",
      },
      {
        team: "BIG",
        place: "3rd",
      },
      {
        team: "HellRaisers",
        place: "4th",
      },
      {
        team: "TYLOO",
        place: "5-6th",
      },
      {
        team: "Virtus.pro",
        place: "5-6th",
      },
      {
        team: "Kinguin",
        place: "7-8th",
      },
      {
        team: "Gambit",
        place: "7-8th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/SuperNova CSGO Malta Logo.png"),
    banner: require("@/assets/tournaments__logo/SuperNova CSGO Malta Banner.png"),
    trophy: require("@/assets/tournaments__logo/SuperNova CSGO Malta Trophy.png"),
    Galleries: []
  },
  {
    id: 23,
    tittle: "CEVO Gfinity Professional Season 9 Finals",
    overview: {
      date: ["4-28-2016", "5-1-2016"],
      prizePool: 125000,
      teams: 8,
      location: ["London, United Kingdom", "UK"],
    },
    mvp: {
      player: `Ricardo 'boltz' Prass`, 
      rating: [1.21, 'Rating 2.0'],
      adr: 82.7,
      impact: 1.14,
      kast: 74.0,
      dpr: 0.63,
      kpr: 0.79
    },
    evps: [null],
    places: [
      {
        team: "Tempo Storm",
        place: "1st",
      },
      {
        team: "SK",
        place: "2nd",
      },
      {
        team: "Virtus.pro",
        place: "3-4th",
      },
      {
        team: "HellRaisers",
        place: "3-4th",
      },
      {
        team: "OpTic",
        place: "5-6th",
      },
      {
        team: "Dignitas",
        place: "5-6th",
      },
      {
        team: "Splyce",
        place: "7-8th",
      },
      {
        team: "Selfless",
        place: "7-8th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/CEVO Gfinity Professional Season 9 Finals Logo.png"),
    banner: require("@/assets/tournaments__logo/CEVO Gfinity Professional Season 9 Finals Banner.png"),
    trophy: require("@/assets/tournaments__logo/CEVO Gfinity Professional Season 9 Finals Trophy.png"),
    Galleries: []
  },
  {
    id: 24,
    tittle: "DreamHack ZOWIE Open Summer 2016",
    overview: {
      date: ["6-18-2016", "6-20-2016"],
      prizePool: 100000,
      teams: 8,
      location: ["Jönköping, Sweden", "SE"],
    },
    mvp: {
      player: `João 'felps' Vasconcellos`, 
      rating: [1.23, 'Rating 2.0'],
      adr: 94.3,
      impact: 1.48,
      kast: 67.9,
      dpr: 0.75,
      kpr: 0.84
    },
    evps: [null],
    places: [
      {
        team: "Immortals",
        place: "1st",
      },
      {
        team: "Ninjas in Pyjamas",
        place: "2nd",
      },
      {
        team: "Astralis",
        place: "3-4th",
      },
      {
        team: "GODSENT",
        place: "3-4th",
      },
      {
        team: "Epsilon",
        place: "5-6th",
      },
      {
        team: "SK",
        place: "5-6th",
      },
      {
        team: "ENCE",
        place: "7-8th",
      },
      {
        team: "HellRaisers",
        place: "7-8th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/DreamHack ZOWIE Open Summer 2016 Logo.png"),
    banner: require("@/assets/tournaments__logo/Banner Default.png"),
    trophy: require("@/assets/tournaments__logo/DreamHack ZOWIE Open Summer 2016 Trophy.png"),
    Galleries: []
  },
  {
    id: 25,
    tittle: "cs_summit 2",
    overview: {
      date: ["2-08-2018", "2-11-2018"],
      prizePool: 150000,
      teams: 8,
      location: ["Los Angeles, California", "US"],
    },
    mvp: {
      player: `Keith 'NAF' Markovic`, 
      rating: [1.23, 'Rating 2.0'],
      adr: 86.9,
      impact: 1.18,
      kast: 77.6,
      dpr: 0.64,
      kpr: 0.77,
    },
    evps: [
      { player: "Valdemar 'valde' Bjørn Vangså", rating: 1.32 },
      { player: "William 'RUSH' Wierzba", rating: 1.22 },
      { player: "Marcelo 'coldzera' David", rating: 1.17 },
      { player: "Jonathan 'EliGE' Jablonowski", rating: 1.14 },
      { player: "Timothy 'autimatic' Ta", rating: 1.12 },
      { player: "Tyler 'Skadoodle' Latham", rating: 1.11 },
    ],
    places: [
      {
        team: "Liquid",
        place: "1st",
      },
      {
        team: "Cloud9",
        place: "2nd",
      },
      {
        team: "SK",
        place: "3rd",
      },
      {
        team: "HEROIC",
        place: "4th",
      },
      {
        team: "Torqued",
        place: "5-6th",
      },
      {
        team: "North",
        place: "5-6th",
      },
      {
        team: "Ninjas in Pyjamas",
        place: "7-8th",
      },
      {
        team: "Vega Squadron",
        place: "7-8th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/cs_summit 2 Logo.png"),
    banner: require("@/assets/tournaments__logo/cs_summit 2 Banner.png"),
    trophy: require("@/assets/tournaments__logo/cs_summit 2 Trophy.png"),
    Galleries: []
  },
  {
    id: 26,
    tittle: "ESL One: Road to Rio - North America",
    overview: {
      date: ["2020-4-22", "2020-5-10"],
      prizePool: 60000,
      teams: 12,
      location: ["North America (Online)", "US"],
    },
    mvp: {
      player: "Yuri 'yuurih' Santos", 
      rating: [1.24, 'Rating 2.0'],
      adr: 86.4,
      impact: 1.17,
      kast: 75.6,
      dpr: 0.61,
      kpr: 0.81,
    },
    evps: [
      { player: "Kaike 'KSCERATO' Cerato", rating: 1.25 },
      { player: "Jonathan 'EliGE' Jablonowski", rating: 1.20 },
      { player: "Buğra 'Calyx' Arkın", rating: 1.20 },
      { player: "Henrique 'HEN1' Teles", rating: 1.19 },
      { player: "Timothy 'autimatic' Ta", rating: 1.12 },
      { player: "Tyler 'Skadoodle' Latham", rating: 1.11 },
    ],
    places: [
      {
        team: "Liquid",
        place: "1st",
      },
      {
        team: "Cloud9",
        place: "2nd",
      },
      {
        team: "SK",
        place: "3rd",
      },
      {
        team: "HEROIC",
        place: "4th",
      },
      {
        team: "Torqued",
        place: "5-6th",
      },
      {
        team: "North",
        place: "5-6th",
      },
      {
        team: "Ninjas in Pyjamas",
        place: "7-8th",
      },
      {
        team: "Vega Squadron",
        place: "7-8th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/cs_summit 2 Logo.png"),
    banner: require("@/assets/tournaments__logo/cs_summit 2 Banner.png"),
    trophy: require("@/assets/tournaments__logo/cs_summit 2 Trophy.png"),
    Galleries: []
  },
  {
    id: 27,
    tittle: "Global Esports Tour Rio 2024",
    overview: {
      date: ["2024-4-18", "2022-4-20"],
      prizePool: 200000,
      teams: 8,
      location: ["Rio de Janeiro", "BR"],
    },
    mvp: {
      player: "none", 
      rating: [0, 'Rating 2.0'],
      adr: 0,
      impact: 0,
      kast: 0,
      dpr: 0,
      kpr: 0,
    },
    evps: null,
    places: [
      {
        team: "paiN",
        place: "1st",
      },
      {
        team: "IMPERIAL",
        place: "2nd",
      },
      {
        team: "MIBR",
        place: "3rd",
      },
      {
        team: "OG",
        place: "4th",
      },
      {
        team: "9z",
        place: "5-6th",
      },
      {
        team: "FURIA",
        place: "5-6th",
      },
      {
        team: "Monte",
        place: "7-8th",
      },
      {
        team: "Metizport",
        place: "7-8th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/Global Esports Tour Rio 2024 Logo.png"),
    banner: require("@/assets/tournaments__logo/Global Esports Tour Rio 2024 Banner.png"),
    trophy: require("@/assets/tournaments__logo/Global Esports Tour Rio 2024 Logo.png"),
    Galleries: []
  },
  {
    id: 28,
    tittle: "ESL One Cologne 2020 North America",
    overview: {
      date: ["2020-8-18", "2022-8-29"],
      prizePool: 135000,
      teams: 8,
      location: ["North America (Online)", "USA"],
    },
    mvp: {
      player: "Ethan 'Ethan' Arnold", 
      rating: [1.27, 'Rating 2.0'],
      adr: 88.4,
      impact: 1.36,
      kast: 76.9,
      dpr: 0.67,
      kpr: 0.80,
    },
    evps: null,
    places: [
      {
        team: "Evil Geniuses",
        place: "1st",
      },
      {
        team: "Liquid",
        place: "2nd",
      },
      {
        team: "Chaos",
        place: "3-4th",
      },
      {
        team: "FURIA",
        place: "3-4th",
      },
      {
        team: "Cloud9",
        place: "5-6th",
      },
      {
        team: "100Thieves",
        place: "5-6th",
      },
      {
        team: "Triumph",
        place: "7-8th",
      },
      {
        team: "Gen.G",
        place: "7-8th",
      },
    ],
    descriptions: [""],
    logo: require("@/assets/tournaments__logo/ESL One Cologne 2020 North America Logo.png"),
    banner: require("@/assets/tournaments__logo/ESL One Cologne 2020 North America Banner.png"),
    trophy: require("@/assets/tournaments__logo/ESL One Cologne 2020 North America Logo.png"),
    Galleries: []
  },
  {
    id: 29,
    tittle: "ESL One New York 2019",
    overview: {
      date: ["2019-9-26", "2019-9-29"],
      prizePool: 200000,
      teams: 8,
      location: ["Brooklyn, New York", "USA"],
    },
    mvp: {
      player: "Vincent 'Brehze' Cayonte", 
      rating: [1.29, 'Rating 2.0'],
      adr: 84.2,
      impact: 1.26,
      kast: 74.3,
      dpr: 0.58,
      kpr: 0.84,
    },
    evps: null,
    places: [
      {
        team: "Evil Geniuses",
        place: "1st",
      },
      {
        team: "Astralis",
        place: "2nd",
      },
      {
        team: "Liquid",
        place: "3-4th",
      },
      {
        team: "G2",
        place: "3-4th",
      },
      {
        team: "ENCE",
        place: "5-6th",
      },
      {
        team: "OpTic",
        place: "5-6th",
      },
      {
        team: "Faze",
        place: "7-8th",
      },
      {
        team: "eUnited",
        place: "7-8th",
      },
    ],
    descriptions: ["EG derrotando Astralis no prime"],
    logo: require("@/assets/tournaments__logo/ESL One New York 2019 Logo.png"),
    banner: require("@/assets/tournaments__logo/ESL One New York 2019 Banner.png"),
    trophy: require("@/assets/tournaments__logo/ESL One New York 2019 Logo.png"),
    Galleries: []
  },
  {
    id: 30,
    tittle: "ELEAGUE Major 2018",
    overview: {
      date: ["2018-1-19", "2018-1-28"],
      prizePool: 1000000,
      teams: 16,
      location: ["Atlanta & Boston", "USA"],
    },
    mvp: {
      player: "Tarik 'tarik' Celik", 
      rating: [1.22, 'Rating 2.0'],
      adr: 87.8,
      impact: 1.18,
      kast: 76.1,
      dpr: 0.65,
      kpr: 0.78,
    },
    evps: [
      { player: "Egor 'flamie' Vasilyev", rating: 1.39 },
      { player: "Freddy 'KRIMZ' Johansson", rating: 1.29 },
      { player: "Nikola 'NiKo' Kovač", rating: 1.25 },
      { player: "Ladislav 'GuardiaN' Kovács", rating: 1.24 },
      { player: "Timothy 'autimatic' Ta", rating: 1.20 },
      { player: "Olof 'olofmeister' Kajbjer", rating: 1.20 },
      { player: "William 'RUSH' Wierzba", rating: 1.16 },
      { player: "Tyler 'Skadoodle' Latham", rating: 1.15 },
      { player: "Jake 'Stewie2K' Yip", rating: 1.14 },
    ],
    places: [
      {
        team: "Cloud9",
        place: "1st",
      },
      {
        team: "FaZe",
        place: "2nd",
      },
      {
        team: "Natus Vincere",
        place: "3-4th",
      },
      {
        team: "SK",
        place: "3-4th",
      },
      {
        team: "mousesports",
        place: "5-8th",
      },
      {
        team: "Fnatic",
        place: "5-8th",
      },
      {
        team: "Quantum Bellator Fire",
        place: "5-8th",
      },
      {
        team: "G2",
        place: "5-8th",
      },
      {
        team: "Vega Squadron",
        place: "9-11th",
      },
      {
        team: "Gambit",
        place: "9-11th",
      },
      {
        team: "Space Soldiers",
        place: "9-11th",
      },
      {
        team: "Astralis",
        place: "12-14th",
      },
      {
        team: "Liquid",
        place: "12-14th",
      },
      {
        team: "BIG",
        place: "12-14th",
      },
      {
        team: "Virtus.pro",
        place: "15-16th",
      },
      {
        team: "North",
        place: "15-16th",
      },
    ],
    descriptions: ["primeiro Major norte-americano"],
    logo: require("@/assets/tournaments__logo/ELEAGUE Major 2018 Logo.png"),
    banner: require("@/assets/tournaments__logo/ELEAGUE Major 2018 Banner.png"),
    trophy: require("@/assets/tournaments__logo/ELEAGUE Major 2018 Trophy.png"),
    Galleries: []
  },
  {
    id: 31,
    tittle: "IEM Dallas 2024",
    overview: {
      date: ["2024-15-27", "2024-6-2"],
      prizePool: 250000,
      teams: 16,
      location: ["Dallas, TX", "US"],
    },
    mvp: {
      player: "Ilya 'm0NESY' Osipov", 
      rating: [1.36, 'Rating 3.0'],
      adr: 87.8,
      impact: 0,
      kast: 0,
      dpr: 0,
      kpr: 0,
    },
    evps: [
      { player: "Nikola 'NiKo' Kovač", rating: 1.29 },
      { player: "Mathieu 'ZywOo' Herbaut", rating: 1.23 },
      { player: "Dmitry 'sh1ro' Sokolov", rating: 1.23 },
      { player: "William 'mezii' Merriman", rating: 1.15 },
      { player: "Lotan 'Spinx' Giladi", rating: 1.13 },
    ],
    places: [
      {
        team: "Cloud9",
        place: "1st",
      },
      {
        team: "Vitality",
        place: "2nd",
      },
      {
        team: "9z",
        place: "3-4th",
      },
      {
        team: "Spirit",
        place: "3-4th",
      },
      {
        team: "Faze",
        place: "5-6th",
      },
      {
        team: "Heroic",
        place: "5-6th",
      },
      {
        team: "Liquid",
        place: "7-8th",
      },
      {
        team: "BIG",
        place: "7-8th",
      },
      {
        team: "Virtus.pro",
        place: "9-12th",
      },
      {
        team: "Natus Vincere",
        place: "9-12th",
      },
      {
        team: "MOUZ",
        place: "9-12th",
      },
      {
        team: "Falcons",
        place: "9-12th",
      },
      {
        team: "FlyQuest",
        place: "13-16th",
      },
      {
        team: "M80",
        place: "13-16th",
      },
      {
        team: "Complexity",
        place: "13-16th",
      },
      {
        team: "Monte",
        place: "13-16th",
      },
    ],
    descriptions: ["Stewie2k Last dance"],
    logo: require("@/assets/tournaments__logo/IEM Dallas 2024 Logo.png"),
    banner: require("@/assets/tournaments__logo/IEM Dallas 2024 Banner.png"),
    trophy: require("@/assets/tournaments__logo/IEM Dallas 2024 Trophy.png"),
    Galleries: []
  },
  {
    id: 32,
    tittle: "ESL Pro League Season 11 North America",
    overview: {
      date: ["2020-3-26", "2020-4-12"],
      prizePool: 219000,
      teams: 6,
      location: ["North America (Online)", "USA"],
    },
    mvp: {
      player: "Jonathan 'EliGE' Jablonowski", 
      rating: [1.27, 'Rating 2.0'],
      adr: 90.5,
      impact: 1.38,
      kast: 70.2,
      dpr: 0.63,
      kpr: 0.82,
    },
    evps: [
      { player: "Keith 'NAF' Markovic", rating: 1.25 },
      { player: "Kaike 'KSCERATO' Cerato", rating: 1.19 },
      { player: "Vincent 'Brehze' Cayonte", rating: 1.14 },
      { player: "Henrique 'HEN1' Teles", rating: 1.12 },
      { player: "Russel 'Twistzz' Van Dulken", rating: 1.07 },
      { player: "Tsvetelin 'CeRq' Dimitrov", rating: 1.06 }
    ],
    places: [
      {
        team: "Liquid", place: "1st",
      },
      {
        team: "Evil Geniuses", place: "2nd",
      },
      {
        team: "FURIA", place: "3rd",
      },
      {
        team: "MIBR", place: "4th",
      },
      {
        team: "100 Thieves", place: "5th",
      },
      {
        team: "Swole Patrol", place: "6th",
      },
      
    ],
    descriptions: ["ONLINE ERA"],
    logo: require("@/assets/tournaments__logo/ESL Pro League Season 11 North America Logo.png"),
    banner: require("@/assets/tournaments__logo/ESL Pro League Season 11 North America Banner.png"),
    trophy: require("@/assets/tournaments__logo/ESL Pro League Season 11 North America Trophy.png"),
    Galleries: []
  },
];

export default tournaments;
