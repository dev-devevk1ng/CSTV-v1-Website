/*
  date 13 Dec 2024
  Major PWE Shangai 2024 Playoffs
  Naruto
  Round6 S2
  Major BLAST Austin 2025
*/

/*
  {
    id: 0,
    name: `firstName 'nickname' lastName`,
    favorites: true,
    picMain: require("@/assets/player__pics/firstName 'nickname' lastName/.png"),
    pic: require("@/assets/player__pics/firstName 'nickname' lastName/.png"),
    fullpic: require("@/assets/player__pics/firstName 'nickname' lastName/.png"),
    infos: {
      nationality: ["Brazil", "BR"],
      date: "10-31-1994",
      yearsActive: [2012, "present"],
      roles: ["Riffler", "In-game leader", "AWPer"],
      approxTotalWinnings: 1044347,
      alternativeIDs: ["The Man", "The Myth", "The Beast", "The Milf"],
    },
    achievements: [
      {
        type: 'top20 hltv',
        name: '#18 Best Player in 2017'
      },
    ],
    teams: [
      {
        teamName: ["RED Canids"],
        teamLogo: { year: 0 }
        timePeriod: {
          contract: ["04-25-2024", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["04-25-2024", "present"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__redcanids__2025__2.png"),
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__redcanids__2025__1.png"),
          },
        ],
        acheviements: [],
      },
    ],
  }
*/

/*
  Player achievements rules
  types: tournament, top20 hltv, mvp, major mvp, major
*/

const PlayersV2 = [
  {
    id: 1,
    name: `Marcelo 'coldzera' David`,
    favorites: true,
    picMain: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__faze__2019-2__pic__bg.png"),
    pic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__mibr__2018-1__fullpic__a1.png"),
    fullpic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__mibr__2018-1__fullpic.png"),
    //major: {trophie: 2, mvp: 2},
    infos: {
      nationality: ["Brazil", "BR"],
      date: "10-31-1994",
      yearsActive: [2012, "present"],
      roles: ["Riffler", "In-game leader", "AWPer"],
      approxTotalWinnings: 1044347,
      alternativeIDs: ["The Man", "The Myth", "The Beast", "The Milf"],
    },
    achievements: [
      {
        type: 'tournament',
        name: 'IEM New York 2020 Europe',
      },
      {
        type: 'tournament',
        name: 'BLAST Pro Series Copenhagen 2019',
      },
      {
        type: 'top20 hltv',
        name: '#10 Best Player in 2018'
      },
      {
        type: 'tournament',
        name: 'ZOTAC Cup Masters 2018 Grand Finals',
      },
      {
        type: 'top20 hltv',
        name: '#1 Best Player in 2017'
      },
      {
        type: 'mvp',
        name: 'ESL Pro League Season 6 Finals',
      },
      {
        type: 'tournament',
        name: 'ESL Pro League Season 6 Finals',
      },
      {
        type: 'tournament',
        name: 'BLAST Pro Series Copenhagen 2017',
      },
      {
        type: 'mvp',
        name: 'EPICENTER 2017',
      },
      {
        type: 'tournament',
        name: 'EPICENTER 2017',
      },
      {
        type: 'tournament',
        name: 'ESL One Cologne 2017',
      },
      {
        type: 'tournament',
        name: 'ECS Season 3 Finals',
      },
      {
        type: 'mvp',
        name: 'DreamHack Open Summer 2017',
      },
      {
        type: 'tournament',
        name: 'DreamHack Open Summer 2017',
      },
      {
        type: 'mvp',
        name: 'IEM Sydney 2017',
      },
      {
        type: 'tournament',
        name: 'IEM Sydney 2017',
      },
      {
        type: 'mvp',
        name: 'cs_summit Spring 2017',
      },
      {
        type: 'tournament',
        name: 'cs_summit Spring 2017',
      },
      {
        type: 'top20 hltv',
        name: '#1 Best Player in 2016'
      },
      {
        type: 'the games awards best player',
        name: 'The Games Awards Best Player'
      },
      {
        type: 'major mvp',
        name: 'ESL One Cologne 2016',
      },
      {
        type: 'major',
        name: 'ESL One Cologne 2016',
      },
      {
        type: 'mvp',
        name: 'ESL Pro League Season 3 Finals',
      },
      {
        type: 'tournament',
        name: 'ESL Pro League Season 3 Finals',
      },
      {
        type: 'tournament',
        name: 'DreamHack Austin 2016',
      },
      {
        type: 'major mvp',
        name: 'MLG Columbus 2016',
      },
      {
        type: 'major',
        name: 'MLG Columbus 2016',
      },
    ],
    teams: [
      {
        teamName: ["RED Canids"],
        teamLogo: { year: 2024 },
        timePeriod: {
          contract: ["04-25-2024", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["04-25-2024", "present"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__redcanids__2025__2.png"),
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__redcanids__2025__1.png"),
          },
          {
            info: {year: 2024, order: 2},
            pic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__redcanids__2024__2.png"),
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__redcanids__2024__1.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Legacy"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["08-15-2023", "04-19-2024"],
          status: [
            {
              staus: "BENCHED", 
              period: ["03-25-2024", "04-19-2024"],
            },
            {
              staus: "STARTER", 
              period: ["08-15-2023", "03-25-2024"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__legacy__2023__2.png"),
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__legacy__2023__1.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["00 NATION"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["01-03-2022", "08-15-2023"],
          status: [
            {
              staus: "STARTER", 
              period: ["01-03-2022", "08-15-2023"],
            },
          ],
        },

        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__00nation__2023-1__fullpic.png"),
          },
          {
            info: {year: 2022, order: 1},
            pic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__00nation__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__00nation__2022-1__fullpic.png"),
          },
        ],
        acheviements: [

        ],
      },
      {
        teamName: ["Last Dance"],
        teamLogo: { year: 0 },
        timePeriod: {
          contract: ["11-8-2021", "11-30-2021"],
          status: [
            {
              staus: "STARTER",
              period: ["11-8-2021", "11-30-2021"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: require("@/assets/player__pics/unknow.png"),
            fullPic: require("@/assets/player__pics/unknow.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Complexity"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["9-8-2021", "11-8-2021"],
          status: [
            {
              staus: "STARTER", 
              period: ["9-8-2021", "11-8-2021"],
            },
          ],
        },

        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__complexity__2021-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["FaZe Clan"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["9-25-2019", "9-8-2021"],
          status: [
            {
              status: "BENCHED",
              period: ["5-31-2021", "9-8-2021"]
            },
            {
              staus: "STARTER", 
              period: ["9-25-2019", "5-31-2021"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2019, order: 2},
            pic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__faze__2019-2__pic__bg.png"),
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__faze__2019-2__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'IEM New York 2020 Europe',
          },
          {
            type: 'tournament',
            name: 'BLAST Pro Series Copenhagen 2019',
          },
        ],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["6-21-2018", "9-25-2019"],
          status: [
            {
              status: "BENCHED",
              period: ["7-12-2019", "9-25-2019"]
            },
            {
              staus: "STARTER", 
              period: ["6-21-2018", "7-12-2019"],
            },
          ],
        },

        jerseys: [
          {
            info: {year: 2019, order: 1},
            pic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__mibr__2019-1__pic.png"),
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__mibr__2019-1__fullpic.png"),
          },
          {
            info: {year: 2018, order: 1},
            pic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__mibr__2018-1__fullpic__a1.png"),
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__mibr__2018-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'top20 hltv',
            name: '#10 Best Player in 2018'
          },
          {
            type: 'tournament',
            name: 'ZOTAC Cup Masters 2018 Grand Finals',
          },
        ],
      },
      {
        teamName: ["SK Gaming"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["7-1-2016", "6-23-2018"],
          status: [
            {
              staus: "STARTER",
              period: ["7-1-2016", "6-23-2018"],
            },
          ],
        },

        jerseys: [
          {
            info: {year: 2017, order: 1},
            pic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__sk__2017-1__pic.png"),
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__sk__2017-1__fullpic.png"),
          },
          {
            info: {year: 2016, order: 3},
            pic: null,
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__sk__2016-3__fullpic.png"),
          },
          {
            info: {year: 2016, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__sk__2016-2__fullpic.png"),
          },
          {
            info: {year: 2016, order: 1},
            pic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__sk__2016-1__pic__bg.png"),
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__sk__2016-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'top20 hltv',
            name: '#1 Best Player in 2017'
          },
          {
            type: 'mvp',
            name: 'ESL Pro League Season 6 Finals',
          },
          {
            type: 'tournament',
            name: 'ESL Pro League Season 6 Finals',
          },
          {
            type: 'tournament',
            name: 'BLAST Pro Series Copenhagen 2017',
          },
          {
            type: 'mvp',
            name: 'EPICENTER 2017',
          },
          {
            type: 'tournament',
            name: 'EPICENTER 2017',
          },
          {
            type: 'tournament',
            name: 'ESL One Cologne 2017',
          },
          {
            type: 'tournament',
            name: 'ECS Season 3 Finals',
          },
          {
            type: 'mvp',
            name: 'DreamHack Open Summer 2017',
          },
          {
            type: 'tournament',
            name: 'DreamHack Open Summer 2017',
          },
          {
            type: 'mvp',
            name: 'IEM Sydney 2017',
          },
          {
            type: 'tournament',
            name: 'IEM Sydney 2017',
          },
          {
            type: 'mvp',
            name: 'cs_summit Spring 2017',
          },
          {
            type: 'tournament',
            name: 'cs_summit Spring 2017',
          },
          {
            type: 'top20 hltv',
            name: '#1 Best Player in 2016'
          },
          {
            type: 'the games awards best player',
            name: 'The Games Awards Best Player'
          },
          {
            type: 'major mvp',
            name: 'ESL One Cologne 2016',
          },
          {
            type: 'major',
            name: 'ESL One Cologne 2016',
          },
        ],
      },
      {
        teamName: ["Luminosity"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["7-28-2015", "07-1-2016"],
          status: [
            {
              staus: "STARTER",
              period: ["7-28-2015", "07-1-2016"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__luminosity__2016-1__fullpic.png"),
          },
          {
            info: { year: 2015, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Marcelo 'coldzera' David/coldzera__luminosity__2015-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'mvp',
            name: 'ESL Pro League Season 3 Finals',
          },
          {
            type: 'tournament',
            name: 'ESL Pro League Season 3 Finals',
          },
          {
            type: 'tournament',
            name: 'DreamHack Austin 2016',
          },
          {
            type: 'major mvp',
            name: 'MLG Columbus 2016',
          },
          {
            type: 'major',
            name: 'MLG Columbus 2016',
          },
        ],
      },
    ],
  },
  
  
  {
    id: 2,
    name: `Gabriel 'FalleN' Toledo`,
    favorites: true,
    picMain: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__liquid__2021-2__pic__bg.png"),
    pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__mibr__2018-1__fullpic.png"),
    fullpic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__mibr__2019-1__fullpic.png"),
    achievements: [
      {
        type: 'tournament',
        name: 'Elisa Masters Espoo 2023',
      },
      {
        type: 'mvp',
        name: 'ZOTAC Cup Masters 2018 Grand Finals',
      },
      {
        type: 'tournament',
        name: 'ZOTAC Cup Masters 2018 Grand Finals',
      },
      {
        type: 'top20 hltv',
        name: '#6 Best Player in 2017'
      },
      {
        type: 'tournament',
        name: 'ESL Pro League Season 6 Finals',
      },
      {
        type: 'mvp',
        name: 'BLAST Pro Series Copenhagen 2017',
      },
      {
        type: 'tournament',
        name: 'BLAST Pro Series Copenhagen 2017',
      },
      {
        type: 'tournament',
        name: 'EPICENTER 2017',
      },
      {
        type: 'mvp',
        name: 'ESL One Cologne 2017',
      },
      {
        type: 'tournament',
        name: 'ESL One Cologne 2017',
      },
      {
        type: 'tournament',
        name: 'ECS Season 3 Finals',
      },
      {
        type: 'tournament',
        name: 'DreamHack Open Summer 2017',
      },
      {
        type: 'tournament',
        name: 'IEM Sydney 2017',
      },
      {
        type: 'tournament',
        name: 'cs_summit Spring 2017',
      },
      {
        type: 'top20 hltv',
        name: '#2 Best Player in 2016'
      },
      {
        type: 'major',
        name: 'ESL One Cologne 2016',
      },
      {
        type: 'tournament',
        name: 'ESL Pro League Season 3 Finals',
      },
      {
        type: 'mvp',
        name: 'DreamHack Austin 2016',
      },
      {
        type: 'tournament',
        name: 'DreamHack Austin 2016',
      },
      {
        type: 'major',
        name: 'MLG Columbus 2016',
      },
    ],
    infos: {
      nationality: ["Brazil", "BR"],
      date: '5-30-1991',
      yearsActive: [2003, "present"],
      roles: ["AWPer", "In-game leader"],
      approxTotalWinnings: 1227088,
      alternativeIDs: ["Professor", "BAD Fallen", "Wallen", "Follen"],
    },
    teams: [
      {
        teamName: ["FURIA"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["7-2-2023", "present"],
          status: [
            {
              staus: "STARTER",
              period: ["7-2-2023", "present"],
            },
          ],
        },
        jerseys: [
          {  
            info: {year: 2025, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__furia__2025-1__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__furia__2025-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__furia__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__furia__2023-1__fullpic.png"),
          },
          {
            info: {year: 2022, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__furia__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__furia__2022-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'Elisa Masters Espoo 2023',
          },
        ],
      },
      {
        teamName: ["IMPERIAL"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2-18-2022", "07-2-2023"],
          status: [
            {
              staus: "STARTER",
              period: ["2-18-2022", "7-2-2023"],
            },
          ],
        },

        jerseys: [
          {
            info: { year: 2022, order: 2 },
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__imperial__2022-2__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__imperial__2022-2__fullpic.png"),
          },
          {
            info: { year: 2022, order: 1 },
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__imperial__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__imperial__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Last Dance"],
        teamLogo: { year: 0 },
        timePeriod: {
          contract: ["11-8-2021", "2-18-2022"],
          status: [
            {
              staus: "STARTER",
              period: ["11-8-2021", "2-18-2022"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2021, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Liquid"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["1-8-2021", "2-17-2022"],
          status: [
            {
              staus: "STARTER",
              period: ["1-8-2021", "12-21-2021"],
            },
          ],
        },

        jerseys: [
          {
            info: {year: 2021, order: 2},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__liquid__2021-1__pic__bg.jpg"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__liquid__2021-2__fullpic.png"),
          },
          {
            info: {year: 2021, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__liquid__2021-1__pic__bg.jpg"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__liquid__2021-1__fullpic.png"),
          },
          {
            info: {year: 2020, order: 2},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__liquid__2020-2__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__liquid__2020-2__fullpic.png"),
          },

        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["06-21-2018", "1-9-2021"],
          status: [
            {
              status: "BENCHED",
              period: ["9-13-2020", "1-9-2021"]
            },
            {
              staus: "STARTER",
              period: ["6-21-2018", "9-13-2020"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2020, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__mibr__2020-1__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__mibr__2020-1__fullpic.png"),
          },
          {
            info: {year: 2019, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__mibr__2019-2__fullpic.png"),
          },
          {
            info: {year: 2019, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__mibr__2019-1__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__mibr__2019-1__fullpic.png"),
          },
          {
            info: {year: 2018, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__mibr__2018-1__fullpic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__mibr__2018-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'mvp',
            name: 'ZOTAC Cup Masters 2018 Grand Finals',
          },
          {
            type: 'tournament',
            name: 'ZOTAC Cup Masters 2018 Grand Finals',
          },
        ],
      },
      {
        teamName: ["SK Gaming"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["7-1-2016", "6-23-2018"],
          status: [
            {
              staus: "STARTER",
              period: ["7-1-2016", "6-23-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2017, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__sk__2017-1__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__sk__2017-1__fullpic.png"),
          },
          {
            info: {year: 2016, order: 3},
            pic: require("@/assets/player__pics/unknow.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__sk__2016-3__fullpic.png"),
          },
          {
            info: {year: 2016, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__sk__2016-2__fullpic.png"),
          },
          {
            info: {year: 2016, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__sk__2016-1__pic__bg.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__sk__2016-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'top20 hltv',
            name: '#6 Best Player in 2017'
          },
          {
            type: 'tournament',
            name: 'ESL Pro League Season 6 Finals',
          },
          {
            type: 'mvp',
            name: 'BLAST Pro Series Copenhagen 2017',
          },
          {
            type: 'tournament',
            name: 'BLAST Pro Series Copenhagen 2017',
          },
          {
            type: 'tournament',
            name: 'EPICENTER 2017',
          },
          {
            type: 'mvp',
            name: 'ESL One Cologne 2017',
          },
          {
            type: 'tournament',
            name: 'ESL One Cologne 2017',
          },
          {
            type: 'tournament',
            name: 'ECS Season 3 Finals',
          },
          {
            type: 'tournament',
            name: 'DreamHack Open Summer 2017',
          },
          {
            type: 'tournament',
            name: 'IEM Sydney 2017',
          },
          {
            type: 'tournament',
            name: 'cs_summit Spring 2017',
          },
          {
            type: 'top20 hltv',
            name: '#2 Best Player in 2016'
          },
          {
            type: 'major',
            name: 'ESL One Cologne 2016',
          },
        ],
      },
      {
        teamName: ["Luminosity"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["7-28-2015", "7-1-2016"],
          status: [
            {
              staus: "STARTER",
              period: ["7-28-2015", "7-1-2016"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2016, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__luminosity__2016-1__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__luminosity__2016-1__fullpic.png"),
          },
          {
            info: {year: 2015, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__luminosity__2016-1__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'FalleN' Toledo/fallen__luminosity__2015-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'ESL Pro League Season 3 Finals',
          },
          {
            type: 'mvp',
            name: 'DreamHack Austin 2016',
          },
          {
            type: 'tournament',
            name: 'DreamHack Austin 2016',
          },
          {
            type: 'major',
            name: 'MLG Columbus 2016',
          },
        ],
      },
    ],
  },
  
  {
    id: 3,
    name: `Fernando 'fer' Alvarenga`,
    favorites: true,
    picMain: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__00nation__2021-1__pic__bg.png"),
    pic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__mibr__2018__1.png"),
    fullpic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__00nation__2021-1__fullpic.png"),
    achievements: [
      {
        type: 'tournament',
        name: 'ZOTAC Cup Masters 2018 Grand Finals',
      },
      {
        type: 'top20 hltv',
        name: '#3 Best Player in 2017'
      },
      {
        type: 'tournament',
        name: 'ESL Pro League Season 6 Finals',
      },
      {
        type: 'tournament',
        name: 'BLAST Pro Series Copenhagen 2017',
      },
      {
        type: 'tournament',
        name: 'EPICENTER 2017',
      },
      {
        type: 'tournament',
        name: 'ESL One Cologne 2017',
      },
      {
        type: 'mvp',
        name: 'ECS Season 3 Finals',
      },
      {
        type: 'tournament',
        name: 'ECS Season 3 Finals',
      },
      {
        type: 'tournament',
        name: 'DreamHack Open Summer 2017',
      },
      {
        type: 'tournament',
        name: 'IEM Sydney 2017',
      },
      {
        type: 'tournament',
        name: 'cs_summit Spring 2017',
      },
      {
        type: 'top20 hltv',
        name: '#15 Best Player in 2016'
      },
      {
        type: 'major',
        name: 'ESL One Cologne 2016',
      },
      {
        type: 'tournament',
        name: 'ESL Pro League Season 3 Finals',
      },
      {
        type: 'tournament',
        name: 'DreamHack Austin 2016',
      },
      {
        type: 'major',
        name: 'MLG Columbus 2016',
      },
    ],
    infos: {
      nationality: ["Brazil", "BR"],
      date: '10-30-1991',
      yearsActive: [2011, 2022],
      roles: ["Riffler", "Lurker"],
      approxTotalWinnings: 1058736,
      alternativeIDs: ["Dona Morte", "fermonster", "ferGod"],
    },
    teams: [
      {
        teamName: ["IMPERIAL"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2-18-2022", "1-13-2023"],
          status: [
            {
              staus: "STARTER",
              period: ["2-18-2022", "1-13-2023"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2022, order: 2 },
            pic: null,
            fullPic: null,
          },
          {
            info: { year: 2022, order: 1 },
            pic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__imperial__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__imperial__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Last Dance"],
        teamLogo: { year: 0 },
        timePeriod: {
          contract: ["11-08-2021", "02-18-2022"],
          status: [
            {
              staus: "STARTER",
              period: ["11-08-2021", "02-18-2022"],
            },
          ],
        },

        jerseys: [
          {
            info: { year: 2021, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["00 Nation"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["10-14-2021", "12-5-2021"],
          status: [
            {
              staus: "STARTER",
              period: ["10-14-2021", "12-5-2021"],
            },
          ],
        },

        jerseys: [
          {
            info: { year: 2021, order: 1 },
            pic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__00nation__2021-1__pic__bg.png"),
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__00nation__2021-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },

      {
        teamName: ["MIBR"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["6-23-2018", "12-1-2020"],
          status: [
            {
              status: "BENCHED",
              period: ["9-13-2020", "12-1-2020"]
            },
            {
              staus: "STARTER",
              period: ["6-23-2018", "9-13-2020"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2020, order: 1},
            pic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__mibr__2020-1__pic.png"),
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__mibr__2020-1__fullpic.png"),
          },
          {
            info: {year: 2019, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__mibr__2019-2__fullpic.png"),
          },
          {
            info: {year: 2019, order: 1},
            pic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__mibr__2019-1__pic.png"),
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__mibr__2019-1__fullpic.png"),
          },
          {
            info: {year: 2018, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__mibr__2018__1.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'ZOTAC Cup Masters 2018 Grand Finals',
          },
        ],
      },
      {
        teamName: ["SK Gaming"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["07-01-2016", "06-23-2018"],
          status: [
            {
              staus: "STARTER",
              period: ["07-01-2016", "06-23-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2017, order: 1},
            pic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__sk__2017-1__pic.png"),
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__sk__2017-1__fullpic.png"),
          },
          {
            info: { year: 2016, order: 3.1 },
            pic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__sk__2016-3.1__pic__bg.png"),
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__sk__2016-3.1__fullpic.png"),
          },
          {
            info: { year: 2016, order: 3 },
            pic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__sk__2016-3__pic__bg.jpg"),
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__sk__2016-3__fullpic.png"),
          },
          {
            info: { year: 2016, order: 2 },
            pic: null,
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__sk__2016-2__fullpic.png"),
          },
          {
            info: {year: 2016, order: 1},
            pic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__sk__2016-1__pic.png"),
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__sk__2016-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'top20 hltv',
            name: '#3 Best Player in 2017'
          },
          {
            type: 'tournament',
            name: 'ESL Pro League Season 6 Finals',
          },
          {
            type: 'tournament',
            name: 'BLAST Pro Series Copenhagen 2017',
          },
          {
            type: 'tournament',
            name: 'EPICENTER 2017',
          },
          {
            type: 'tournament',
            name: 'ESL One Cologne 2017',
          },
          {
            type: 'mvp',
            name: 'ECS Season 3 Finals',
          },
          {
            type: 'tournament',
            name: 'ECS Season 3 Finals',
          },
          {
            type: 'tournament',
            name: 'DreamHack Open Summer 2017',
          },
          {
            type: 'tournament',
            name: 'IEM Sydney 2017',
          },
          {
            type: 'tournament',
            name: 'cs_summit Spring 2017',
          },
          {
            type: 'top20 hltv',
            name: '#15 Best Player in 2016'
          },
          {
            type: 'major',
            name: 'ESL One Cologne 2016',
          },
        ],
      },
      {
        teamName: ["Luminosity"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["07-28-2015", "07-01-2016"],
          status: [
            {
              staus: "STARTER",
              period: ["07-28-2015", "07-01-2016"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__luminosity__2016-1__fullpic.png"),
          },
          {
            info: { year: 2015, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Fernando 'fer' Alvarenga/fer__luminosity__2015-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'ESL Pro League Season 3 Finals',
          },
          {
            type: 'tournament',
            name: 'DreamHack Austin 2016',
          },
          {
            type: 'major',
            name: 'MLG Columbus 2016',
          },
        ],
      },
    ],
  },
  
  {
    id: 4,
    name: `Epitacio 'TACO' de Melo`,
    favorites: true,
    picMain: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__liquid__2018-1__pic__bg.jpg"),
    pic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__mibr__2018-1__fullpic__a1.png"),
    fullpic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__mibr__2018-1__fullpic__a1.png"),
    achievements: [
      {
        type: 'tournament',
        name: 'SuperNova CS:GO Malta',
      },
      {
        type: 'tournament',
        name: 'ESL Pro League Season 6 Finals',
      },
      {
        type: 'tournament',
        name: 'BLAST Pro Series Copenhagen 2017',
      },
      {
        type: 'tournament',
        name: 'EPICENTER 2017',
      },
      {
        type: 'tournament',
        name: 'ESL One Cologne 2017',
      },
      {
        type: 'tournament',
        name: 'ECS Season 3 Finals',
      },
      {
        type: 'tournament',
        name: 'DreamHack Open Summer 2017',
      },
      {
        type: 'tournament',
        name: 'IEM Sydney 2017',
      },
      {
        type: 'tournament',
        name: 'cs_summit Spring 2017',
      },
      {
        type: 'major',
        name: 'ESL One Cologne 2016',
      },
      {
        type: 'tournament',
        name: 'ESL Pro League Season 3 Finals',
      },
      {
        type: 'tournament',
        name: 'DreamHack Austin 2016',
      },
      {
        type: 'major',
        name: 'MLG Columbus 2016',
      },
    ],
    infos: {
      nationality: ["Brazil", "BR"],
      date: '1-24-1994',
      yearsActive: [2011, 2023],
      roles: ["Riffler", "Entry"],
      approxTotalWinnings: 1078476,
      alternativeIDs: ["VACO"],
    },
    teams: [
      {
        teamName: ["00 Nation"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["7-30-2022", "3-14-2023"],
          status: [
            {
              staus: "BENCHED",
              period: ["22-2-2023", "3-14-2023"],
            },
            {
              staus: "STARTER",
              period: ["7-30-2022", "22-2-2023"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__00nation__2023__2.png"),
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__00nation__2023__1.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["GODSENT"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["1-21-2021", "7-1-2022"],
          status: [
            {
              staus: "STARTER",
              period: ["1-21-2021", "7-1-2022"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2021, order: 2 },
            pic: null,
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__godsent__2021-2__fullpic.png"),
          },
          {
            info: { year: 2021, order: 1 },
            pic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__godsent__2021-1__pic.png"),
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__godsent__2021-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["6-23-2018", "12-1-2020"],
          status: [
            {
              status: "BENCHED",
              period: ["9-13-2020", "12-1-2020"]
            },
            {
              staus: "STARTER",
              period: ["6-23-2018", "9-13-2020"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2020, order: 1 },
            pic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__mibr__2020-1__pic.png"),
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__mibr__2020-1__fullpic.png"),
          },
          {
            info: { year: 2019, order: 2 },
            pic: null,
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__mibr__2019-2__fullpic.png"),
          },
          {
            info: { year: 2019, order: 1 },
            pic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__mibr__2019-1__pic.png"),
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__mibr__2019-1__fullpic.png"),
          },
          {
            info: { year: 2018, order: 1 },
            pic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__mibr__2018-1__fullpic.png"),
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__mibr__2018-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Liquid"],
        teamLogo: { year: 2018 }, 
        timePeriod: {
          contract: ["4-6-2018", "12-21-2018"],
          status: [
            {
              staus: "STARTER",
              period: ["4-6-2018", "12-21-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2018, order: 1},
            pic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__liquid__2018-1__pic.png"),
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__liquid__2018-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'SuperNova CS:GO Malta',
          },
        ],
      },
      {
        teamName: ["SK Gaming"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["07-01-2016", "06-23-2018"],
          status: [
            {
              staus: "STARTER",
              period: ["07-01-2016", "06-23-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2017, order: 1 },
            pic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__sk__2017-1__pic.png"),
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__sk__2017-1__fullpic.png"),
          },
          {
            info: { year: 2016, order: 3 },
            pic: null,
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__sk__2016-3__fullpic.png"),
          },
          {
            info: { year: 2016, order: 2 },
            pic: null,
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__sk__2016-2__fullpic.png"),
          },
          {
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__sk__2016-1__fullpic.png"),
          },
        ],
        acheviements: [
           {
            type: 'tournament',
            name: 'ESL Pro League Season 6 Finals',
          },
          {
            type: 'tournament',
            name: 'BLAST Pro Series Copenhagen 2017',
          },
          {
            type: 'tournament',
            name: 'EPICENTER 2017',
          },
          {
            type: 'tournament',
            name: 'ESL One Cologne 2017',
          },
          {
            type: 'tournament',
            name: 'ECS Season 3 Finals',
          },
          {
            type: 'tournament',
            name: 'DreamHack Open Summer 2017',
          },
          {
            type: 'tournament',
            name: 'IEM Sydney 2017',
          },
          {
            type: 'tournament',
            name: 'cs_summit Spring 2017',
          },
          {
            type: 'major',
            name: 'ESL One Cologne 2016',
          },
        ],
      },
      {
        teamName: ["Luminosity"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["07-28-2015", "07-01-2016"],
          status: [
            {
              staus: "STARTER",
              period: ["07-28-2015", "07-01-2016"],
            },
          ],
        },

        jerseys: [
          {
            info: {year: 2016, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Epitacio 'TACO' de Melo/taco__luminosity__2016-1__fullpic.png"),
          },
          {
            info: {year: 2015, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'ESL Pro League Season 3 Finals',
          },
          {
            type: 'tournament',
            name: 'DreamHack Austin 2016',
          },
          {
            type: 'major',
            name: 'MLG Columbus 2016',
          },
        ],
      },
    ],
  },  

  {
    id: 5,
    name: `João 'felps' Vasconcellos`,
    favorites: true,
    picMain: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__fluxo__2022-1__mainpic.png"),
    pic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__mibr__2018-1__pic.png"),
    fullpic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__mibr__2018-1__pic.png"),
    achievements: [
      {
        type: 'tournament',
        name: 'ESL One Cologne 2017',
      },
      {
        type: 'tournament',
        name: 'ECS Season 3 Finals',
      },
      {
        type: 'tournament',
        name: 'DreamHack Open Summer 2017',
      },
      {
        type: 'tournament',
        name: 'IEM Sydney 2017',
      },
      {
        type: 'tournament',
        name: 'cs_summit Spring 2017',
      },
      {
        type: 'tournament',
        name: 'DreamHack ZOWIE Open Summer 2016',
      },
      {
        type: 'mvp',
        name: 'CEVO Gfinity Professional Season 9 Finals',
      },
      {
        type: 'tournament',
        name: 'CEVO Gfinity Professional Season 9 Finals',
      },
    ],
    infos: {
      nationality: ["Brazil", "BR"],
      date: "12-16-1996",
      yearsActive: [2011, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 404639,
      alternativeIDs: ["felpera"],
    },
    teams: [
      {
        teamName: ["RED Canids"],
        teamLogo: { year: 2024 },
        timePeriod: {
          contract: ["01-20-2025", "PRESENT"],
          status: [
            {
              staus: "BENCHED", 
              period: ["04-17-2025", "PRESENT"],
            },
            {
              staus: "STARTER", 
              period: ["01-20-2025", "04-17-2025"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__redcanids__2025-1__pic.png"),
            fullPic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__redcanids__2025-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Imperial"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["07-10-2023", "01-20-2025"],
          status: [
            {
              staus: "STARTER", 
              period: ["07-10-2023", "01-20-2025"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2024, order: 1},
            pic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__imperial__2024-1__pic.png"),
            fullPic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__imperial__2024-1__fullpic.png"),
          },
          {
            info: {year: 2022, order: 2},
            pic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__imperial__2022-2__pic.png"),
            fullPic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__imperial__2022-2__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Fluxo"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["08-09-2022", "07-10-2023"],
          status: [
            {
              staus: "STARTER", 
              period: ["08-09-2022", "07-10-2023"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__fluxo__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Godsent"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["01-21-2021", "08-09-2022"],
          status: [
            {
              staus: "BENCHED", 
              period: ["03-15-2022", "08-09-2022"],
            },
            {
              staus: "STARTER", 
              period: ["01-21-2021", "03-15-2022"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2021, order: 1 },
            pic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__godsent__2021-1__pic.png"),
            fullPic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__godsent__2021-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["BOOM"],
        teamLogo: { year: 2020 },
        timePeriod: {
          contract: ["02-24-2020", "01-15-2021"],
          status: [
            {
              staus: "BENCHED", 
              period: ["12-05-2020", "01-15-2021"],
            },
            {
              staus: "STARTER", 
              period: ["08-06-2020", "12-05-2020"],
            },
            {
              staus: "LOAN", 
              period: ["02-24-2020", "08-06-2020"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2020, order: 1 },
            pic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__boom__2020-1__pic.png"),
            fullPic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__boom__2020-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Luminosity"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["06-25-2019", "09-12-2019"],
          status: [
            {
              staus: "LOAN", 
              period: ["06-25-2019", "09-12-2019"],
            },
          ],
        },
        jerseys: [
          { 
            info: { year: 2019, order: 1 },
            pic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__luminosity__2019-1__pic.png"),
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["01-12-2019", "08-06-2020"],
          status: [
            {
              staus: "BENCHED", 
              period: ["06-25-2019", "08-06-2020"],
            },
            {
              staus: "STARTER", 
              period: ["01-12-2019", "06-25-2019"],
            },
          ],
        },
        jerseys: [
          { 
            info: { year: 2019, order: 1 },
            pic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__mibr__2019-1__pic.png"),
            fullPic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__mibr__2019-1__fullpic.png"),
          },
          { 
            info: { year: 2018, order: 1 },
            pic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__mibr__2018-1__pic.png"),
            fullPic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__mibr__2018-1__pic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["INTZ"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["09-27-2018", "01-12-2019"],
          status: [
            {
              staus: "STARTER", 
              period: ["09-27-2018", "01-12-2019"],
            },
          ],
        },
        jerseys: [
          {   //arrumar
            info: { year: 2018, order: 0 },
            pic: null,
            fullPic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__intz__2018-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["NTC"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["02-19-2018", "08-21-2018"],
          status: [
            {
              staus: "STARTER", 
              period: ["02-19-2018", "08-21-2018"],
            },
          ],
        },
        jerseys: [
          {   
            info: { year: 2018, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["SK Gaming"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["02-05-2017", "09-27-2018"],
          status: [
            {
              staus: "BENCHED", 
              period: ["10-31-2017", "09-27-2018"],
            },
            {
              staus: "STARTER", 
              period: ["02-05-2017", "10-31-2017"],
            },
          ],
        },
        jerseys: [
          {   
            info: { year: 2017, order: 1 },
            pic: null,
            fullPic: null,
          },
          {   
            info: { year: 2016, order: 3 },
            pic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__sk__2016-3__fullpic.png"),
            fullPic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__sk__2016-3__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'ESL One Cologne 2017',
          },
          {
            type: 'tournament',
            name: 'ECS Season 3 Finals',
          },
          {
            type: 'tournament',
            name: 'DreamHack Open Summer 2017',
          },
          {
            type: 'tournament',
            name: 'IEM Sydney 2017',
          },
          {
            type: 'tournament',
            name: 'cs_summit Spring 2017',
          },
        ],
      },
      {
        teamName: ["Immortals"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["06-01-2016", "02-05-2017"],
          status: [
            {
              staus: "STARTER", 
              period: ["06-01-2016", "02-05-2017"],
            },
          ],
        },
        jerseys: [
          {   
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__immortals__2016-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'DreamHack ZOWIE Open Summer 2016',
          },     
        ],
      },
      {
        teamName: ["Tempo Storm"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["02-10-2016", "06-01-2016"],
          status: [
            {
              staus: "STARTER", 
              period: ["02-10-2016", "06-01-2016"],
            },
          ],
        },
        jerseys: [
          {   
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/João 'felps' Vasconcellos/felps__tempostorm__2016-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'mvp',
            name: 'CEVO Gfinity Professional Season 9 Finals',
          },
          {
            type: 'tournament',
            name: 'CEVO Gfinity Professional Season 9 Finals',
          },
        ],
      },
      {
        teamName: ["g3nerationX"],
        teamLogo: { year: 2001 },
        timePeriod: {
          contract: ["10-16-2015", "11-29-2015"],
          status: [
            {
              staus: "STARTER", 
              period: ["10-16-2015", "11-29-2015"],
            },
          ],
        },
        jerseys: [
          {  
            info: { year: 2015, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },  
  
  {
    id: 6,
    name: `Lincoln 'fnx' Lau`,
    favorites: false,
    picMain: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__redcanids__2019-1__pic__bg.jpg"),
    pic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__sk__2016-1__fullpic.png"),
    fullpic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__sk__2016-1__fullpic.png"),
    achievements: [
      {
        type: 'top20 hltv',
        name: '#19 Best Player in 2016'
      },
      {
        type: 'major',
        name: 'ESL One Cologne 2016',
      },
      {
        type: 'tournament',
        name: 'ESL Pro League Season 3 Finals',
      },
      {
        type: 'tournament',
        name: 'DreamHack Austin 2016',
      },
      {
        type: 'major',
        name: 'MLG Columbus 2016',
      },
    ],
    infos: {
      nationality: ["Brazil", "BR"],
      date: '1-30-1990',
      yearsActive: [2004, 2022],
      roles: ["Riffler", "Entry"],
      approxTotalWinnings: 426184,
      alternativeIDs: ["fnxNTC", ],
    },
    teams: [
      {
        teamName: ["Imperial"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2-18-2022", "11-14-2022"],
          status: [
            {
              staus: "STARTER",
              period: ["2-18-2022", "8-21-2022"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2022, order: 1 },
            pic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__imperial__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__imperial__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Last Dance"],
        teamLogo: { year: 0 },
        timePeriod: {
          contract: ["11-08-2021", "02-18-2022"],
          status: [
            {
              staus: "STARTER",
              period: ["11-08-2021", "02-18-2022"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2021, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["RED Canids"],
        teamLogo: { year: 2024 },
        timePeriod: {
          contract: ["8-19-2019", "5-20-2020"],
          status: [
            {
              staus: "STARTER",
              period: ["8-19-2019", "5-20-2020"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2019, order: 1 },
            pic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__redcanids__2019-1__pic__bg.jpg"),
            fullPic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__redcanids__2019-1__fullpic.png")
          }
        ],
        acheviements: [
        ],
      },
      {
        teamName: ["NTC"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["2-19-2018", "8-22-2018"],
          status: [
            {
              staus: "STARTER",
              period: ["2-19-2018", "8-22-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2018, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [
        ],
      },
      {
        teamName: ["100 Thieves"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["12-12-2017", "1-31-2018"],
          status: [
            {
              staus: "STARTER",
              period: ["12-12-2017", "1-31-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2018, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [
        ],
      },

      {
        teamName: ["Immortals"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["2-5-2017", "12-12-2017"],
          status: [
            {
              staus: "BENCHED",
              period: ["5-15-2017", "12-12-2017"],
            },
            {
              staus: "STARTER",
              period: ["2-5-2017", "5-15-2017"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__immortals__2017-1__fullpic.png")
          }
        ],
        acheviements: [
        ],
      },
      
      {
        teamName: ["SK Gaming"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["07-01-2016", "12-6-2016"],
          status: [
            {
              staus: "STARTER",
              period: ["07-01-2016", "12-6-2016"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2016, order: 3 },
            pic: null,
            fullPic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__sk__2016-3__fullpic.png"),
          },
          {
            info: { year: 2016, order: 2 },
            pic: null,
            fullPic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__sk__2016-2__fullpic.png"),
          },
          {
            info: { year: 2016, order: 1 },
            pic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__sk__2016-1__pic__bg.png"),
            fullPic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__sk__2016-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'top20 hltv',
            name: '#19 Best Player in 2016'
          },
          {
            type: 'major',
            name: 'ESL One Cologne 2016',
          },
        ],
      },
      {
        teamName: ["Luminosity"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["07-28-2015", "07-01-2016"],
          status: [
            {
              staus: "STARTER",
              period: ["07-28-2015", "07-01-2016"],
            },
          ],
        },

        jerseys: [
          {
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__luminosity__2016-1__fullpic.png"),
          },
          {
            info: { year: 2015, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Lincoln 'fnx' Lau/fnx__luminosity__2015-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'ESL Pro League Season 3 Finals',
          },
          {
            type: 'tournament',
            name: 'DreamHack Austin 2016',
          },
          {
            type: 'major',
            name: 'MLG Columbus 2016',
          },
        ],
      },
    ],
  },  
  
  {
    id: 7,
    name: `Ricardo 'boltz' Prass`,
    favorites: true,
    picMain: require("@/assets/player__pics/Ricardo 'boltz' Prass/boltz__mibr__2021-2__mainpic.png"),
    pic: require("@/assets/player__pics/Ricardo 'boltz' Prass/boltz__sk__2017-1__pic.png"),
    fullpic: require("@/assets/player__pics/Ricardo 'boltz' Prass/boltz__mibr__2021-2__mainpic.png"),
    achievements: [
      {
        type: 'top20 hltv',
        name: '#18 Best Player in 2017'
      },
      {
        type: 'tournament',
        name: 'ESL Pro League Season 6 Finals',
      },
      {
        type: 'tournament',
        name: 'BLAST Pro Series Copenhagen 2017',
      },
      {
        type: 'tournament',
        name: 'EPICENTER 2017',
      },
      {
        type: 'tournament',
        name: 'DreamHack ZOWIE Open Summer 2016',
      },
      {
        type: 'mvp',
        name: 'CEVO Gfinity Professional Season 9 Finals',
      },
      {
        type: 'tournament',
        name: 'CEVO Gfinity Professional Season 9 Finals',
      },
    ],
    infos: {
      nationality: ["Brazil", "BR"],
      date: "4-10-1997",
      yearsActive: [2014, 2023],
      roles: ["Riffler", "In-game leader"],
      approxTotalWinnings: 410084,
      alternativeIDs: ["Boltalha"],
    },
    teams: [
      {
        teamName: ["Imperial"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["02-18-2022", "10-30-2023"],
          status: [
            {
              staus: "STARTER", 
              period: ["02-18-2022", "10-30-2023"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2022, order: 2 },
            pic: require("@/assets/player__pics/Ricardo 'boltz' Prass/boltz__imperial__2022-2__pic.png"),
            fullPic: require("@/assets/player__pics/Ricardo 'boltz' Prass/boltz__imperial__2022-2__fullpic.png"),
          },
          {
            info: { year: 2022, order: 1 },
            pic: require("@/assets/player__pics/Ricardo 'boltz' Prass/boltz__imperial__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Ricardo 'boltz' Prass/boltz__imperial__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Last Dance"],
        teamLogo: { year: 0 },
        timePeriod: {
          contract: ["11-08-2021", "02-18-2022"],
          status: [
            {
              staus: "STARTER",
              period: ["11-08-2021", "02-18-2022"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2021, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["01-15-2021", "02-11-2022"],
          status: [
            {
              staus: "BENCHED",
              period: ["01-15-2021", "02-11-2022"],
            },
            {
              staus: "STARTER",
              period: ["01-15-2021", "01-15-2022"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2021, order: 2 },
            pic: null,
            fullPic: require("@/assets/player__pics/Ricardo 'boltz' Prass/boltz__mibr__2021-2__fullpic.png"),
          },
          {
            info: { year: 2021, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["BOOM"],
        teamLogo: { year: 2020 },
        timePeriod: {
          contract: ["02-24-2020", "01-15-2021"],
          status: [
            {
              staus: "STARTER",
              period: ["11-08-2021", "02-18-2022"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2020, order: 1 },
            pic: require("@/assets/player__pics/Ricardo 'boltz' Prass/boltz__boom__2020-1__pic.png"),
            fullPic: require("@/assets/player__pics/Ricardo 'boltz' Prass/boltz__boom__2020-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["INTZ"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["11-05-2019", "02-18-2020"],
          status: [
            {
              staus: "STARTER",
              period: ["11-05-2019", "02-18-2020"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2019, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Luminosity"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["12-12-2018", "10-01-2019"],
          status: [
            {
              staus: "BENCHED",
              period: ["09-12-2019", "10-01-2019"],
            },
            {
              staus: "STARTER",
              period: ["12-12-2018", "09-12-2019"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2018, order: 1 },
            pic: require("@/assets/player__pics/Ricardo 'boltz' Prass/boltz__luminosity__2018-1__pic.png"),
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["06-23-2018", "11-30-2018"],
          status: [
            {
              staus: "BENCHED",
              period: ["07-14-2018", "11-30-2018"],
            },
            {
              staus: "STARTER",
              period: ["06-23-2018", "07-14-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2018, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["SK Gaming"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["10-24-2017", "06-23-2018"],
          status: [
            {
              staus: "LOAN",
              period: ["06-23-2018", "07-14-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2017, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [
          {
            type: 'top20 hltv',
            name: '#18 Best Player in 2017'
          },
          {
            type: 'tournament',
            name: 'ESL Pro League Season 6 Finals',
          },
          {
            type: 'tournament',
            name: 'BLAST Pro Series Copenhagen 2017',
          },
          {
            type: 'tournament',
            name: 'EPICENTER 2017',
          },         
        ],
      },
      {
        teamName: ["Immortals"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["06-01-2016", "06-23-2018"],
          status: [
            {
              staus: "BENCHED",
              period: ["10-31-2017", "06-23-2018"],
            },
            {
              staus: "STARTER",
              period: ["06-01-2016", "10-31-2017"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'DreamHack ZOWIE Open Summer 2016',
          },          
        ],
      },
      {
        teamName: ["Tempo Storm"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["02-10-2016", "06-01-2016"],
          status: [
            {
              staus: "STARTER",
              period: ["02-10-2016", "06-01-2016"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [
          {
            type: 'mvp',
            name: 'CEVO Gfinity Professional Season 9 Finals',
          },
          {
            type: 'tournament',
            name: 'CEVO Gfinity Professional Season 9 Finals',
          },
        ],
      },
      {
        teamName: ["Luminosity"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["11-29-2015", "11-23-2015"],
          status: [
            {
              staus: "STARTER",
              period: ["11-29-2015", "11-23-2015"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2015, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Keyd Stars"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["02-24-2015", "07-17-2015"],
          status: [
            {
              staus: "STARTER",
              period: ["02-24-2015", "07-17-2015"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2015, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["KaBuM.TD"],
        teamLogo: { year: 2014 },
        timePeriod: {
          contract: ["02-24-2015", "07-17-2015"],
          status: [
            {
              staus: "STARTER",
              period: ["02-24-2015", "07-17-2015"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2015, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 8,
    name: `Vito 'kNgV-' Giuseppe`,
    favorites: false,
    picMain: require("@/assets/player__pics/Vito 'kNgV-' Giuseppe/kngv__mibr__2019-2__pic.png"),
    pic: require("@/assets/player__pics/Vito 'kNgV-' Giuseppe/kngv__mibr__2019-2__pic.png"),
    fullpic: require("@/assets/player__pics/Vito 'kNgV-' Giuseppe/kngv__mibr__2019-2__fullpic.png"),
    achievements: [],
    infos: {
      nationality: ["Brazil", "BR"],
      date: "9-26-1992",
      yearsActive: [2007, "present"],
      roles: ["AWPer", "In-game leader"],
      approxTotalWinnings: 209003,
      alternativeIDs: [""],
    },
    teams: [
      {
        teamName: ["O Plano"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["04-08-2022", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["04-08-2022", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2024, order: 1 },
            pic: require("@/assets/player__pics/Vito 'kNgV-' Giuseppe/kngv__oplano__2024-1__pic.png"),
            fullPic: require("@/assets/player__pics/Vito 'kNgV-' Giuseppe/kngv__oplano__2024-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["00 Nation"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["09-03-2021", "06-03-2022"],
          status: [
            {
              staus: "BENCHED", 
              period: ["01-24-2022", "06-03-2022"],
            },
            {
              staus: "STARTER", 
              period: ["09-03-2021", "01-24-2022"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2021, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Vito 'kNgV-' Giuseppe/kng__00nation__2021-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["O Plano"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["05-01-2021", "09-03-2021"],
          status: [
            {
              staus: "STARTER", 
              period: ["05-01-2021", "09-03-2021"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2021, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2020 },
        timePeriod: {
          contract: ["09-05-2019", "05-01-2021"],
          status: [
            {
              staus: "BENCHED", 
              period: ["01-08-2021", "05-01-2021"],
            },
            {
              staus: "STARTER", 
              period: ["09-05-2019", "01-08-2021"],
            },
          ],
        },
        jerseys: [ 
          {
            info: { year: 2020, order: 1 },
            pic: require("@/assets/player__pics/Vito 'kNgV-' Giuseppe/kngv__mibr__2020-1__pic.png"),
            fullPic: require("@/assets/player__pics/Vito 'kNgV-' Giuseppe/kngv__mibr__2020-2__fullpic.png"),
          },
          {
            info: { year: 2019, order: 2 },
            pic: require("@/assets/player__pics/Vito 'kNgV-' Giuseppe/kngv__mibr__2019-2__pic.png"),
            fullPic: require("@/assets/player__pics/Vito 'kNgV-' Giuseppe/kngv__mibr__2019-2__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["INTZ"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["09-27-2018", "09-05-2019"],
          status: [
            {
              staus: "STARTER", 
              period: ["09-27-2018", "09-05-2019"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2021, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["NTC"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["04-05-2018", "08-21-2018"],
          status: [
            {
              staus: "STARTER", 
              period: ["04-05-2018", "08-21-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2018, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["100 Thieves"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["12-12-2017", "01-25-2018"],
          status: [
            {
              staus: "STARTER", 
              period: ["12-12-2017", "01-25-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2017, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Immortals"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["05-24-2017", "09-20-2017"],
          status: [
            {
              staus: "STARTER",
              period: ["07-25-2017", "09-20-2017"],
            },
            {
              staus: "LOAN", 
              period: ["05-24-2017", "07-25-2017"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2017, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Vito 'kNgV-' Giuseppe/kngv__immortals__2017-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["g3x"],
        teamLogo: { year: 2001 },
        timePeriod: {
          contract: ["05-14-2016", "12-05-2016"],
          status: [
            {
              staus: "STARTER",
              period: ["05-14-2016", "12-05-2016"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2016, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Keyd Stars"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["12-23-2015", "05-08-2016"],
          status: [
            {
              staus: "STARTER",
              period: ["12-23-2015", "05-08-2016"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2015, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["g3x"],
        teamLogo: { year: 2001 },
        timePeriod: {
          contract: ["08-27-2015", "12-23-2015"],
          status: [
            {
              staus: "STARTER",
              period: ["08-27-2015", "12-23-2015"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2015, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 9,
    name: `Henrique 'HEN1' Teles`,
    favorites: true,
    picMain: null,
    pic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__furia__2019-2__mainpic.png"),
    fullpic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__furia__2019-2__fullpic.png"),
    infos: {
      nationality: ["Brazil", "BR"],
      date: "7-14-1995",
      yearsActive: [2010, "present"],
      roles: ["AWPer"],
      approxTotalWinnings: 342063,
      alternativeIDs: ["Jacaré"],
    },
    achievements: [
      {
        type: "top20 hltv",
        name: "#16 best player in 2020"
      },
      {
        type: "tournament",
        name: "IEM New York 2020 North America"
      },
      {
        type: "mvp",
        name: "ESL Pro League Season 12 North America"
      },
      {
        type: "tournament",
        name: "ESL Pro League Season 12 North America"
      },
      {
        type: "tournament",
        name: "DreamHack Masters Spring 2020 - North America"
      },
      {
        type: 'tournament',
        name: 'DreamHack ZOWIE Open Summer 2016',
      },
      {
        type: 'tournament',
        name: 'CEVO Gfinity Professional Season 9 Finals',
      },
    ],
    teams: [
      {
        teamName: ["RED Canids"],
        teamLogo: { year: 2024 },
        timePeriod: {
          contract: ["04-25-2024", "PRESENT"],
          status: [
            {
              staus: "BENCHED", 
              period: ["04-17-2025", "PRESENT"],
            },
            {
              staus: "STARTER", 
              period: ["04-25-2024", "04-17-2025"],
            },
            {
              staus: "LOAN", 
              period: ["08-07-2024", "01-21-2025"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2025, order: 1 },
            pic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__redcanids__2025-1__pic.png"),
            fullPic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__redcanids__2025-1__fullpic.png"),
          },
          {
            info: { year: 2024, order: 2 },
            pic: null,
            fullPic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__redcanids__2024-2__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Imperial"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["07-10-2023", "01-21-2025"],
          status: [
            {
              staus: "BENCHED", 
              period: ["07-15-2024", "01-21-2025"],
            },
            {
              staus: "STARTER", 
              period: ["07-10-2023", "07-15-2024"],
            },
          ],
        },
        jerseys: [     
          {
            info: { year: 2023, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__imperial__2024-1__fullpic.png"),
          }, 
          {
            info: { year: 2023, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__imperial__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["08-10-2022", "07-10-2023"],
          status: [
            {
              staus: "BENCHED", 
              period: ["06-27-2023", "07-10-2023"],
            },
            {
              staus: "STARTER", 
              period: ["08-10-2022", "06-27-2023"],
            },
          ],
        },
        jerseys: [         
          {
            info: { year: 2022, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__mibr__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Godsent"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["03-22-2022", "06-30-2022"],
          status: [
            {
              staus: "STARTER", 
              period: ["03-22-2022", "06-30-2022"],
            },
          ],
        },
        jerseys: [         
          {
            info: { year: 2021, order: 2 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["00 Nation"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["09-03-2021", "12-14-2021"],
          status: [
            {
              staus: "BENCHED", 
              period: ["10-14-2021", "12-14-2021"],
            },
            {
              staus: "STARTER", 
              period: ["09-03-2021", "10-14-2021"],
            },
          ],
        },
        jerseys: [         
          {
            info: { year: 2021, order: 2 },
            pic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__00nation__2021-1__pic.png"),
            fullPic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__00nation__2021-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["O Plano"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["05-01-2021", "09-03-2021"],
          status: [
            {
              staus: "STARTER", 
              period: ["05-01-2021", "09-03-2021"],
            },
          ],
        },
        jerseys: [         
          {
            info: { year: 2021, order: 2 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["FURIA"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["09-23-2019", "05-01-2021"],
          status: [
            {
              staus: "BENCHED", 
              period: ["01-08-2021", "05-01-2021"],
            },
            {
              staus: "STARTER", 
              period: ["09-23-2019", "01-08-2021"],
            },
          ],
        },
        jerseys: [  
          {
            info: { year: 2020, order: 1 },
            pic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__furia__2020-1__pic.png"),
            fullPic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__furia__2020-1__fullpic.png"),
          },       
          {
            info: { year: 2019, order: 2 },
            pic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__furia__2019-2__pic.png"),
            fullPic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__furia__2019-2__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: "top20 hltv",
            name: "#16 best player in 2020"
          },
          {
            type: "tournament",
            name: "IEM New York 2020 North America"
          },
          {
            type: "mvp",
            name: "ESL Pro League Season 12 North America"
          },
          {
            type: "tournament",
            name: "ESL Pro League Season 12 North America"
          },
          {
            type: "tournament",
            name: "DreamHack Masters Spring 2020 - North America"
          },
        ],
      },
      {
        teamName: ["Luminosity"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["06-10-2018", "09-12-2019"],
          status: [
            {
              staus: "BENCHED", 
              period: ["08-20-2019", "09-12-2019"],
            },
            {
              staus: "STARTER", 
              period: ["06-10-2018", "08-20-2019"],
            },
          ],
        },
        jerseys: [      
          {
            info: { year: 2018, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["NTC"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["06-10-2018", "09-12-2019"],
          status: [
            {
              staus: "STARTER", 
              period: ["02-19-2018", "03-21-2018"],
            },
          ],
        },
        jerseys: [      
          {
            info: { year: 2018, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["100 Thieves"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["12-12-2017", "1-31-2018"],
          status: [
            {
              staus: "STARTER",
              period: ["12-12-2017", "1-31-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2018, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [
        ],
      },
      {
        teamName: ["Immortals"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["06-01-2016", "12-12-2017"],
          status: [
            {
              staus: "BENCHED", 
              period: ["09-22-2017", "12-12-2017"],
            },
            {
              staus: "STARTER", 
              period: ["06-01-2016", "09-22-2017"],
            },
          ],
        },
        jerseys: [
          {   
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__immortals__2016-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'DreamHack ZOWIE Open Summer 2016',
          },
        ],
      },
      {
        teamName: ["Tempo Storm"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["02-10-2016", "06-01-2016"],
          status: [
            {
              staus: "STARTER", 
              period: ["02-10-2016", "06-01-2016"],
            },
          ],
        },
        jerseys: [
          {   
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Henrique 'HEN1' Teles/hen1__tempostorm__2016-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'CEVO Gfinity Professional Season 9 Finals',
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: `Lucas 'LUCAS1' Teles`,
    favorites: true,
    picBG: null,
    pic: require("@/assets/player__pics/Lucas 'LUCAS1' Teles/lucas1__mibr__2019-1__pic-main.png"),
    fullpic: require("@/assets/player__pics/Lucas 'LUCAS1' Teles/lucas1__mibr__2019-1__fullpic-main.png"),
    infos: {
      nationality: ["Brazil", "BR"],
      date: "7-14-1995",
      yearsActive: [2010, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 224313,
      alternativeIDs: ["LUCAS Telas"],
    },
    achievements: [
      {
        type: 'tournament',
        name: 'DreamHack ZOWIE Open Summer 2016',
      },
      {
        type: 'tournament',
        name: 'CEVO Gfinity Professional Season 9 Finals',
      },
    ],
    teams: [
      {
        teamName: ["00 Nation"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["09-03-2021", "12-14-2021"],
          status: [
            {
              staus: "BENCHED", 
              period: ["10-14-2021", "12-14-2021"],
            },
            {
              staus: "STARTER", 
              period: ["09-03-2021", "10-14-2021"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Lucas 'LUCAS1' Teles/lucas1__00nation__2021-1__fullpic.png"),
          },
        ]
      },
      {
        teamName: ["O Plano"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["05-01-2021", "09-03-2021"],
          status: [
            {
              staus: "STARTER", 
              period: ["05-01-2021", "09-03-2021"],
            },
          ],
        },
        jerseys: [         
          {
            info: { year: 2021, order: 2 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2019 },
        timePeriod: {
          contract: ["06-25-2019", "12-11-2019"],
          status: [
            {
              staus: "STARTER", 
              period: ["09-12-2019", "12-11-2019"],
            },
            {
              staus: "LOAN", 
              period: ["06-25-2019", "09-12-2019"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2019, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/Lucas 'LUCAS1' Teles/lucas1__mibr__2019-2__fullpic.png"),
          },
          {
            info: {year: 2019, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Lucas 'LUCAS1' Teles/lucas1__mibr__2019-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Luminosity"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["06-10-2018", "09-12-2019"],
          status: [
            {
              staus: "BENCHED", 
              period: ["06-25-2019", "09-12-2019"],
            },
            {
              staus: "STARTER", 
              period: ["06-10-2018", "06-25-2019"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2019, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Lucas 'LUCAS1' Teles/lucas1__mibr__2019-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["NTC"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["02-19-2018", "03-21-2018"],
          status: [
            {
              staus: "STARTER", 
              period: ["02-19-2018", "03-21-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2018, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["100 Thieves"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["12-12-2017", "1-31-2018"],
          status: [
            {
              staus: "STARTER",
              period: ["12-12-2017", "1-31-2018"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2018, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Immortals"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["06-01-2016", "12-12-2017"],
          status: [
            {
              staus: "BENCHED", 
              period: ["09-22-2017", "12-12-2017"],
            },
            {
              staus: "STARTER", 
              period: ["06-01-2016", "09-22-2017"],
            },
          ],
        },
        jerseys: [
          {   
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: require("@/assets/player__pics/Lucas 'LUCAS1' Teles/lucas1__immortals__2016-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'DreamHack ZOWIE Open Summer 2016',
          },
        ],
      },
      {
        teamName: ["Tempo Storm"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["02-10-2016", "06-01-2016"],
          status: [
            {
              staus: "STARTER", 
              period: ["02-10-2016", "06-01-2016"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2016, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'CEVO Gfinity Professional Season 9 Finals',
          },
        ],
      },
      {
        teamName: ["Games Academy"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["08-02-2015", "02-10-2016"],
          status: [
            {
              staus: "STARTER", 
              period: ["08-02-2015", "02-10-2016"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2015, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["NTC"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["07-21-2015", "08-02-2015"],
          status: [
            {
              staus: "STARTER", 
              period: ["07-21-2015", "08-02-2015"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2015, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Dexterity Team"],
        teamLogo: { year: 0 },
        timePeriod: {
          contract: ["02-01-2015", "07-21-2015"],
          status: [
            {
              staus: "STARTER", 
              period: ["02-01-2015", "07-21-2015"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2015, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 11,
    name: `Lucas 'steel' Lopes`,
    favorites: true,
    picMain: require("@/assets/player__pics/Lucas 'steel' Lopes/steel__liquid__2018-1__fullpic.png"),
    pic: require("@/assets/player__pics/Lucas 'steel' Lopes/steel__liquid__2018-1__fullpic.png"),
    fullpic: require("@/assets/player__pics/Lucas 'steel' Lopes/steel__liquid__2018-1__fullpic.png"),
    infos: {
      nationality: ["Brazil", "BR"],
      date: "11-19-1993",
      yearsActive: [ 2009, 2023 ],
      roles: ["Riffler", "In-game leader"],
      approxTotalWinnings: 196715,
      alternativeIDs: ["steelega"],
    },
    achievements: [
      {
        type: 'tournament',
        name: 'cs_summit 2'
      },
    ],
    teams: [
      
      {
        teamName: ["Movistar Riders"],
        teamLogo: { year: 0 },
        timePeriod: {
          contract: ["2019-10-19", "2021-10-15"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2021-07-31", "2021-10-15"],
            },
            {
              staus: "STARTER", 
              period: ["2019-10-19", "2021-07-31"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2015, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Luminosity"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["2018-04-22", "2019-09-12"],
          status: [
            {
              staus: "STARTER", 
              period: ["2018-04-22", "2019-09-12"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2015, order: 1 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Liquid"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["2017-11-13", "2018-04-22"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2018-04-06", "2018-04-22"],
            },
            {
              staus: "STARTER", 
              period: ["2017-11-13", "2018-04-06"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2017, order: 1 },
            pic: require("@/assets/player__pics/Lucas 'steel' Lopes/steel__liquid__2018-1__pic.png"),
            fullPic: require("@/assets/player__pics/Lucas 'steel' Lopes/steel__liquid__2018-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'cs_summit 2'
          },
        ],
      },
      {
        teamName: ["Immortals"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["2016-11-04", "2017-11-13"],
          status: [
            {
              staus: "STARTER", 
              period: ["2016-11-04", "2017-11-13"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 2016, order: 1 },
            pic: require("@/assets/player__pics/Lucas 'steel' Lopes/steel__immortals__2016-1__pic.png"),
            fullPic: require("@/assets/player__pics/Lucas 'steel' Lopes/steel__immortals__2016-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 12,
    name: `Kaike 'KSCERATO' Cerato`,
    favorites: true,
    picMain: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2022-1__pic.png"),
    pic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2022-1__pic-main.png"),
    fullpic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2022-1__fullpic.png"),
    infos: {
      nationality: ["Brazil", "BR"],
      date: "9-12-1999",
      yearsActive: [2013, "present"],
      roles: ["Riffler", ],
      approxTotalWinnings: 421879,
      alternativeIDs: ["rei do bracinho"],
    },
    achievements: [
      {
        type: "top20 hltv",
        name: "#19 best player in 2023"
      },
      {
        type: 'tournament',
        name: 'Elisa Masters Espoo 2023'
      },
      {
        type: "top20 hltv",
        name: "#9 best player in 2022"
      },
      {
        type: "top20 hltv",
        name: "#15 best player in 2021"
      },
      {
        type: 'tournament',
        name: 'IEM Fall 2021 North America'
      },
      {
        type: "top20 hltv",
        name: "#18 best player in 2020"
      },
      {
        type: "tournament",
        name: "IEM New York 2020 North America"
      },
      {
        type: "tournament",
        name: "ESL Pro League Season 12 North America"
      },
      {
        type: "tournament",
        name: "DreamHack Masters Spring 2020 - North America"
      },
    ],
    teams: [
      {
        teamName: ["FURIA"],
        teamLogo: { year: 0 },
        timePeriod: {
          contract: ["2018-02-06", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2018-02-06", "present"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2025-1__pic.png"),
            fullPic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2025-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2023-1__fullpic.png"),
          },
          {
            info: {year: 2022, order: 1},
            pic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2022-1__fullpic.png"),
          },
          {
            info: {year: 2021, order: 2},
            pic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2021-2__pic.png"),
            fullPic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2021-2__fullpic.png"),
          },
          {
            info: {year: 2021, order: 1},
            pic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2021-1__pic.png"),
            fullPic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2021-1__fullpic.png"),
          },
          {
            info: {year: 2020, order: 1},
            pic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2020-1__pic.png"),
            fullPic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2020-1__fullpic.png"),
          },
          {
            info: {year: 2019, order: 1},
            pic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2019-1__pic.png"),
            fullPic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2019-1__fullpic.png"),
          },
          {
            info: {year: 2018, order: 1},
            pic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2018-1__pic.png"),
            fullPic: require("@/assets/player__pics/Kaike 'KSCERATO' Cerato/kscerato__furia__2018-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: "top20 hltv",
            name: "#19 best player in 2023"
          },
          {
            type: 'tournament',
            name: 'Elisa Masters Espoo 2023'
          },
          {
            type: "top20 hltv",
            name: "#9 best player in 2022"
          },
          {
            type: "top20 hltv",
            name: "#15 best player in 2021"
          },
          {
            type: 'tournament',
            name: 'IEM Fall 2021 North America'
          },
          {
            type: "top20 hltv",
            name: "#18 best player in 2020"
          },
          {
            type: "tournament",
            name: "IEM New York 2020 North America"
          },
          {
            type: "tournament",
            name: "ESL Pro League Season 12 North America"
          },
          {
            type: "tournament",
            name: "DreamHack Masters Spring 2020 - North America"
          },
        ],
      },
      {
        teamName: ["FURIA Academy"],
        teamLogo: { year: 0 },
        timePeriod: {
          contract: ["2018-01-28", "2018-02-06"],
          status: [
            {
              staus: "STARTER", 
              period: ["2018-01-28", "2018-02-06"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 0, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },

  {
    id: 13,
    name: `Andrei 'arT' Piovezan`,
    favorites: true,
    picMain: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2019-1__mainpic.png"),
    pic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2019-1__mainpic.png"),
    fullpic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2019-1__mainfullpic.png"),
    infos: {
      nationality: ["Brazil", "BR"],
      date: "3-27-1996",
      yearsActive: [2016, "present"],
      roles: ["Riffler", ],
      approxTotalWinnings: 390575,
      alternativeIDs: ["cachorro do art"],
    },
    achievements: [
      {
        type: 'tournament',
        name: 'Elisa Masters Espoo 2023'
      },
      {
        type: 'tournament',
        name: 'IEM Fall 2021 North America'
      },
      {
        type: "tournament",
        name: "IEM New York 2020 North America"
      },
      {
        type: "tournament",
        name: "ESL Pro League Season 12 North America"
      },
      {
        type: "tournament",
        name: "DreamHack Masters Spring 2020 - North America"
      },
    ],
    teams: [
      {
        teamName: ["FLUXO"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2017-08-14", "2018-02-06"],
          status: [
            {
              staus: "STARTER", 
              period: ["2017-08-14", "2018-02-06"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__fluxo__2025-1__fullpic.png"),
          },
          {
            info: {year: 2024, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__fluxo__2024-2__fullpic.png"),
          },
          {
            info: {year: 2024, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__fluxo__2024-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["FURIA"],
        teamLogo: { year: 0 },
        timePeriod: {
          contract: ["2018-02-06", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2018-02-06", "present"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2023-1__fullpic.png"),
          },
          {
            info: {year: 2022, order: 1},
            pic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2022-1__fullpic.png"),
          },
          {
            info: {year: 2021, order: 2},
            pic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2021-2__pic.png"),
            fullPic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2021-2__fullpic.png"),
          },
          {
            info: {year: 2021, order: 1},
            pic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2021-1__pic.png"),
            fullPic: null,
          },
          {
            info: {year: 2020, order: 1},
            pic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2020-2__pic.png"),
            fullPic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2020-1__fullpic.png"),
          },
          {
            info: {year: 2019, order: 1},
            pic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2019-1__pic.png"),
            fullPic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2019-1__fullpic.png"),
          },
          {
            info: {year: 2018, order: 1},
            pic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2018-1__pic.png"),
            fullPic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__furia__2018-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'Elisa Masters Espoo 2023'
          },
          {
            type: 'tournament',
            name: 'IEM Fall 2021 North America'
          },
          {
            type: "tournament",
            name: "IEM New York 2020 North America"
          },
          {
            type: "tournament",
            name: "ESL Pro League Season 12 North America"
          },
          {
            type: "tournament",
            name: "DreamHack Masters Spring 2020 - North America"
          },
        ],
      },
      {
        teamName: ["INTZ"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["2017-08-14", "2018-02-06"],
          status: [
            {
              staus: "STARTER", 
              period: ["2017-08-14", "2018-02-06"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2018, order: 1},
            pic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__intz__2018-1__pic.png"),
            fullPic: require("@/assets/player__pics/Andrei 'arT' Piovezan/art__intz__2018-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },

  {
    id: 14,
    name: `Yuri 'yuurih' Santos`,
    favorites: true,
    picMain: null,
    pic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2019-1__mainpic.png"),
    fullpic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2019-1__mainfullpic.png"),
    infos: {
      nationality: ["Brazil", "BR"],
      date: "12-22-1999",
      yearsActive: [2016, "present"],
      roles: ["Riffler", ],
      approxTotalWinnings: 426721,
      alternativeIDs: [""],
    },
    achievements: [
      {
        type: 'tournament',
        name: 'Elisa Masters Espoo 2023'
      },
      {
        type: "top20 hltv",
        name: "#19 best player in 2022"
      },
      {
        type: 'tournament',
        name: 'IEM Fall 2021 North America'
      },
      {
        type: "top20 hltv",
        name: "#14 best player in 2020"
      },
      {
        type: "mvp",
        name: "IEM New York 2020 North America"
      },
      {
        type: "tournament",
        name: "IEM New York 2020 North America"
      },
      {
        type: "tournament",
        name: "ESL Pro League Season 12 North America"
      },
      {
        type: "mvp",
        name: "DreamHack Masters Spring 2020 - North America"
      },
      {
        type: "tournament",
        name: "DreamHack Masters Spring 2020 - North America"
      },
      {
        type: "mvp",
        name: "ESL One: Road to Rio - North America"
      },
    ],
    teams: [
      {
        teamName: ["FURIA"],
        teamLogo: { year: 2017 },
        timePeriod: {
          contract: ["2017-11-08", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2017-11-08", "present"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2025-1__pic.png"),
            fullPic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2025-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2023-1__fullpic.png"),
          },
          {
            info: {year: 2022, order: 1},
            pic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2022-1__fullpic.png"),
          },
          {
            info: {year: 2021, order: 2},
            pic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2021-2__pic.png"),
            fullPic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2021-2__fullpic.png"),
          },
          {
            info: {year: 2021, order: 1},
            pic: null,
            fullPic: null,
          },
          {
            info: {year: 2020, order: 1},
            pic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2020-1__pic.png"),
            fullPic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2020-1__fullpic.png"),
          },
          {
            info: {year: 2019, order: 1},
            pic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2019-1__pic.png"),
            fullPic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2019-1__fullpic.png"),
          },
          {
            info: {year: 2018, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Yuri 'yuurih' Santos/yuurih__furia__2018-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament',
            name: 'Elisa Masters Espoo 2023'
          },
          {
            type: 'tournament',
            name: 'IEM Fall 2021 North America'
          },
          {
            type: "mvp",
            name: "IEM New York 2020 North America"
          },
          {
            type: "tournament",
            name: "IEM New York 2020 North America"
          },
          {
            type: "tournament",
            name: "ESL Pro League Season 12 North America"
          },
          {
            type: "mvp",
            name: "DreamHack Masters Spring 2020 - North America"
          },
          {
            type: "tournament",
            name: "DreamHack Masters Spring 2020 - North America"
          },
          {
            type: "mvp",
            name: "ESL One: Road to Rio - North America"
          },
        ],
      },
      {
        teamName: ["INTZ"],
        teamLogo: { year: 2015 },
        timePeriod: {
          contract: ["2017-09-06", "2017-11-06"],
          status: [
            {
              staus: "STARTER", 
              period: ["2017-09-06", "2017-11-06"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2017, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 15,
    name: `Vinicius 'VINI' Figueiredo`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Vinicius 'VINI' Figueiredo/vini__furia__2019-1__mainpic.png"),
    fullpic: require("@/assets/player__pics/Vinicius 'VINI' Figueiredo/vini__furia__2019-1__mainfullpic.png"),
    infos: {
      nationality: ["Brazil", "BR"],
      date: "5-20-1999",
      yearsActive: [2014, "present"],
      roles: ["Riffler", "In-game leader"],
      approxTotalWinnings: 341730,
      alternativeIDs: ["Tubarão Linguiça"],
    },
    achievements: [
      {
        type: "tournament",
        name: "IEM New York 2020 North America"
      },
      {
        type: "tournament",
        name: "ESL Pro League Season 12 North America"
      },
      {
        type: "tournament",
        name: "DreamHack Masters Spring 2020 - North America"
      },
    ],
    teams: [
      {
        teamName: ["IMPERIAL"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2-18-2022", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2-18-2022", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2024, order: 1},
            pic: require("@/assets/player__pics/Vinicius 'VINI' Figueiredo/vini__imperial__2024-1__pic.png"),
            fullPic: require("@/assets/player__pics/Vinicius 'VINI' Figueiredo/vini__imperial__2024-1__fullpic.png"),
          },
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Vinicius 'VINI' Figueiredo/vini__imperial__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Last Dance"],
        teamLogo: { year: 0 },
        timePeriod: {
          contract: ["1-15-2022", "2-18-2022"],
          status: [
            {
              staus: "STARTER",
              period: ["1-15-2022", "2-18-2022"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: require("@/assets/player__pics/unknow.png"),
            fullPic: require("@/assets/player__pics/unknow.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["FURIA"],
        teamLogo: { year: 2017 },
        timePeriod: {
          contract: ["2017-11-08", "2022-02-18"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2021-11-25", "2022-02-18"],
            },
            {
              staus: "STARTER", 
              period: ["2018-02-06", "2021-11-25"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/Vinicius 'VINI' Figueiredo/vini__furia__2021-2__fullpic.png"),
          },
          {
            info: {year: 2021, order: 1},
            pic: null,
            fullPic: null,
          },
          {
            info: {year: 2020, order: 1},
            pic: require("@/assets/player__pics/Vinicius 'VINI' Figueiredo/vini__furia__2020-1__pic.png"),
            fullPic: require("@/assets/player__pics/Vinicius 'VINI' Figueiredo/vini__furia__2020-1__fullpic.png"),
          },
          {
            info: {year: 2019, order: 1},
            pic: require("@/assets/player__pics/Vinicius 'VINI' Figueiredo/vini__furia__2019-1__pic.png"),
            fullPic: require("@/assets/player__pics/Vinicius 'VINI' Figueiredo/vini__furia__2019-1__fullpic.png"),
          },
          {
            info: {year: 2018, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [
          {
            type: "tournament",
            name: "IEM New York 2020 North America"
          },
          {
            type: "tournament",
            name: "ESL Pro League Season 12 North America"
          },
          {
            type: "tournament",
            name: "DreamHack Masters Spring 2020 - North America"
          },
        ],
      },      
      {
        teamName: ["FURIA Academy"],
        teamLogo: { year: 0 },
        timePeriod: {
          contract: ["2018-01-28", "2018-02-06"],
          status: [
            {
              staus: "STARTER", 
              period: ["2018-01-28", "2018-02-06"],
            },
          ],
        },
        jerseys: [
          {
            info: { year: 0, order: 0 },
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 16,
    name: `Eduardo 'dumau' Wolkmer`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Eduardo 'dumau' Wolkmer/dumau__godsent__2021-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: "11-9-2003",
      yearsActive: [2018, "present"],
      roles: ["Riffler", "AWPer"],
      approxTotalWinnings: 93303,
      alternativeIDs: [""],
    },
    achievements: [
     
    ],
    teams: [
      {
        teamName: ["Legacy"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-09-22", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2023-09-22", "present"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: require("@/assets/player__pics/Eduardo 'dumau' Wolkmer/dumau__legacy__2025-1__pic.png"),
            fullPic: require("@/assets/player__pics/Eduardo 'dumau' Wolkmer/dumau__legacy__2025-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Eduardo 'dumau' Wolkmer/dumau__legacy__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Eduardo 'dumau' Wolkmer/dumau__legacy__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["00 NATION"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2022-06-30", "2023-08-15"],
          status: [
            {
              staus: "STARTER", 
              period: ["2022-06-30", "2023-08-15"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Eduardo 'dumau' Wolkmer/dumau__00nation__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Eduardo 'dumau' Wolkmer/dumau__00nation__2023-1__fullpic.png"),
          },
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Godsent"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2021-01-21", "2022-06-30"],
          status: [
            {
              staus: "STARTER", 
              period: ["2021-01-21", "2022-06-30"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/Eduardo 'dumau' Wolkmer/dumau__godsent__2021-2__fullpic.png"),
          },
          {
            info: {year: 2021, order: 1},
            pic: require("@/assets/player__pics/Eduardo 'dumau' Wolkmer/dumau__godsent__2021-1__pic.png"),
            fullPic: require("@/assets/player__pics/Eduardo 'dumau' Wolkmer/dumau__godsent__2021-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Yeah Gaming"],
        teamLogo: { year: 2020 },
        timePeriod: {
          contract: ["2020-01-09", "2021-01-13"],
          status: [
            {
              staus: "STARTER", 
              period: ["2020-01-09", "2021-01-13"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2020, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Eduardo 'dumau' Wolkmer/dumau__yeahgaming__2020-1__fullpic.png"),
          },
          
        ],
        acheviements: [],
      },
    ],
  },
  // voltei a programar, se aparecer algum erro no app, provavelmente o bo ta em baixo
  {
    id: 17,
    name: `Bruno 'latto' Rebelatto`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Bruno 'latto' Rebelatto/latto__godsent__2021-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '12-21-2002',
      yearsActive: [2018, "present"],
      roles: ["Riffler", "AWPer"],
      approxTotalWinnings: 75433,
      alternativeIDs: ["The Man", "The Myth", "The Beast", "The Milf"],
    },
    achievements: [
      {
        type: 'top20 hltv',
        name: '#18 Best Player in 2017'
      },
    ],
    teams: [
      {
        teamName: ["Legacy"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-09-22", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2023-09-22", "present"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Bruno 'latto' Rebelatto/latto__legacy__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Bruno 'latto' Rebelatto/latto__legacy__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["00 NATION"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2022-06-30", "2023-08-15"],
          status: [
            {
              staus: "STARTER", 
              period: ["2022-06-30", "2023-08-15"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Godsent"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2021-01-21", "2022-06-30"],
          status: [
            {
              staus: "STARTER", 
              period: ["2021-01-21", "2022-06-30"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/Bruno 'latto' Rebelatto/latto__godsent__2021-2__fullpic.png"),
          },
          {
            info: {year: 2021, order: 1},
            pic: require("@/assets/player__pics/Bruno 'latto' Rebelatto/latto__godsent__2021-1__pic.png"),
            fullPic: require("@/assets/player__pics/Bruno 'latto' Rebelatto/latto__godsent__2021-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      
    ],
  },
  {
    id: 18,
    name: `Rafael 'saffee' Costa`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Rafael 'saffee' Costa/saffee__mibr__2025-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '12-19-1994',
      yearsActive: [2010, "present"],
      roles: ["AWPer"],
      approxTotalWinnings: 187958,
      alternativeIDs: [""],
    },
    achievements: [
     
    ],
    teams: [
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-06-30", "PRESENT"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2025-08-25", "PRESENT"],
            },
            {
              staus: "STARTER", 
              period: ["2023-06-30", "2025-08-25"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: require("@/assets/player__pics/Rafael 'saffee' Costa/saffee__mibr__2025-1__pic.png"),
            fullPic: require("@/assets/player__pics/Rafael 'saffee' Costa/saffee__mibr__2025-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Rafael 'saffee' Costa/saffee__mibr__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["FURIA"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2022-01-06", "2023-06-30"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2023-06-28", "2023-06-30"],
            },
            {
              staus: "STARTER", 
              period: ["2022-01-06", "2023-06-28"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: require("@/assets/player__pics/Rafael 'saffee' Costa/saffee__furia__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Rafael 'saffee' Costa/saffee__furia__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["PaiN Gaming"],
        teamLogo: { year: 2020 },
        timePeriod: {
          contract: ["2020-07-13", "2022-01-06"],
          status: [     
            {
              staus: "STARTER", 
              period: ["2020-07-13", "2022-01-06"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: require("@/assets/player__pics/Rafael 'saffee' Costa/saffee__pain__2021-1__pic.png"),
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 19,
    name: `André 'drop' Abreu`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/André 'drop' Abreu/drop__furia__2022-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '1-15-2004',
      yearsActive: [2019, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 171116,
      alternativeIDs: [""],
    },
    achievements: [
     
    ],
    teams: [
      {
        teamName: ["RED Canids"],
        teamLogo: { year: 2025 },
        timePeriod: {
          contract: ["2025-02-19", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2023-06-30", "2025-02-19"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/André 'drop' Abreu/drop__redcanids__2025-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-06-30", "2025-02-19"],
          status: [
            {
              staus: "STARTER", 
              period: ["2023-06-30", "2025-02-19"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/André 'drop' Abreu/drop__mibr__2025-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/André 'drop' Abreu/drop__mibr__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["FURIA"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2021-08-23", "2023-06-30"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2023-06-27", "2023-06-30"],
            },
            {
              staus: "STARTER", 
              period: ["2021-08-23", "2023-06-28"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: require("@/assets/player__pics/André 'drop' Abreu/drop__furia__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/André 'drop' Abreu/drop__furia__2022-1__fullpic.png"),
          },
          {
            info: {year: 2021, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/André 'drop' Abreu/drop__furia__2021-2__fullpic.png"),
          },
          {
            info: {year: 2021, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/André 'drop' Abreu/drop__furia__2021-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["FURIA Academy"],
        teamLogo: { year: 2020 },
        timePeriod: {
          contract: ["2020-02-06", "2021-08-23"],
          status: [     
            {
              staus: "STARTER", 
              period: ["2020-02-06", "2021-08-23"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 20,
    name: `Felipe 'skullz' Medeiros`,
    favorites: true,
    picMain: null,
    pic: require("@/assets/player__pics/Felipe 'skullz' Medeiros/skullz__liquid__2023-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '4-20-2002',
      yearsActive: [2017, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 126191,
      alternativeIDs: [""],
    },
    achievements: [
     
    ],
    teams: [
      {
        teamName: ["IMPERIAL"],
        teamLogo: { year: 2025 },
        timePeriod: {
          contract: ["2025-08-20 ", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2025-08-20 ", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Felipe 'skullz' Medeiros/skullz__imperial__2025-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["FURIA"],
        teamLogo: { year: 2024 },
        timePeriod: {
          contract: ["2024-07-09", "2025-08-20"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2025-04-22", "2025-08-20"],
            },
            {
              staus: "STARTER", 
              period: ["2024-07-09", "2025-04-22"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Felipe 'skullz' Medeiros/skullz__furia__2024-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Team Liquid"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2023-12-04", "2024-07-09"],
          status: [
            {
              staus: "STARTER", 
              period: ["2023-12-04", "2024-07-09"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Felipe 'skullz' Medeiros/skullz__liquid__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["paiN"],
        teamLogo: { year: 2024 },
        timePeriod: {
          contract: ["2022-08-15 ", "2023-11-09"],
          status: [
            {
              staus: "STARTER", 
              period: ["2022-08-15 ", "2023-11-09"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Felipe 'skullz' Medeiros/skullz__pain__2022-2__fullpic.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 21,
    name: `Rodrigo 'biguzera' Bittencourt`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Rodrigo 'biguzera' Bittencourt/biguzera__pain__2025-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '2-18-1997',
      yearsActive: [2018, "present"],
      roles: ["In-game leader", "Riffler"],
      approxTotalWinnings: 211617,
      alternativeIDs: [""],
    },
    achievements: [
      {
        type: 'tournament',
        name: 'Global Esports Tour Rio 2024',
      },  
    ],
    teams: [
      {
        teamName: ["paiN Gaming"],
        teamLogo: { year: 2019 },
        timePeriod: {
          contract: ["2019-02-02", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2019-02-02", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: require("@/assets/player__pics/Rodrigo 'biguzera' Bittencourt/biguzera__pain__2025-1__pic.png"),
            fullPic: require("@/assets/player__pics/Rodrigo 'biguzera' Bittencourt/biguzera__pain__2025-1__fullpic.png"),
          },
          {
            info: {year: 2024, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Rodrigo 'biguzera' Bittencourt/biguzera__pain__2024-1__fullpic.png"),
          },
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Rodrigo 'biguzera' Bittencourt/biguzera__pain__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 22,
    name: `Lucas 'nqz' Soares`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Lucas 'nqz' Soares/nqz__pain__2025-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '1-18-2005',
      yearsActive: [2019, "present"],
      roles: ["AWPer"],
      approxTotalWinnings: 133626,
      alternativeIDs: [""],
    },
    achievements: [
      {
        type: 'tournament', name: 'Global Esports Tour Rio 2024',
      },  
    ],
    teams: [
      {
        teamName: ["paiN Gaming"],
        teamLogo: { year: 2019 },
        timePeriod: {
          contract: ["2023-11-11", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2023-11-11", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: require("@/assets/player__pics/Lucas 'nqz' Soares/nqz__pain__2025-1__pic.png"),
            fullPic: require("@/assets/player__pics/Lucas 'nqz' Soares/nqz__pain__2025-1__fullpic.png"),
          },
          {
            info: {year: 2024, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Lucas 'nqz' Soares/nqz__pain__2024-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament', name: 'Global Esports Tour Rio 2024',
          },  
        ],
      },
      {
        teamName: ["Legacy"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-09-22", "2023-11-11"],
          status: [
            {
              staus: "BECHED", 
              period: ["2023-10-25", "2023-11-11"],
            },
            {
              staus: "STARTER", 
              period: ["2023-09-22", "2023-10-25"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Lucas 'nqz' Soares/nqz__legacy__2023-1__fullpic.png"),
          },         
        ],
        acheviements: [
        ],
      },
      {
        teamName: ["00 NATION"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-01-04", "2023-08-15"],
          status: [
            {
              staus: "STARTER", 
              period: ["2023-01-04", "2023-08-15"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: null,
          },         
        ],
        acheviements: [
        ],
      },
      {
        teamName: ["9z"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2022-06-21", "2023-01-04"],
          status: [
            {
              staus: "STARTER", 
              period: ["2022-06-21", "2023-01-04"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: null,
          },         
        ],
        acheviements: [
        ],
      },
    ],
  },
  {
    id: 23,
    name: `Bruno 'b4rtiN' Câmara`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Bruno 'b4rtiN' Câmara/b4rtiN__godsent__2021-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '1-11-2002',
      yearsActive: [2017, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 60985,
      alternativeIDs: [""],
    },
    achievements: [ 
    ],
    teams: [
      {
        teamName: ["Legacy"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-10-25", "2025-07-02"],
          status: [
            {
              staus: "BECHED", 
              period: ["2024-11-23", "2025-07-02"],
            },
            {
              staus: "STARTER", 
              period: ["2023-10-25", "2024-11-23"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Bruno 'b4rtiN' Câmara/b4rtiN__legacy__2023-1__fullpic.png"),
          },         
        ],
        acheviements: [
        ],
      },
      {
        teamName: ["Godsent"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2021-01-21", "2022-12-19"],
          status: [
            {
              staus: "STARTER", 
              period: ["2021-01-21", "2022-12-19"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/Bruno 'b4rtiN' Câmara/b4rtiN__godsent__2021-2__fullpic.png"),
          },
          {
            info: {year: 2021, order: 1},
            pic: require("@/assets/player__pics/Bruno 'b4rtiN' Câmara/b4rtiN__godsent__2021-1__pic.png"),
            fullPic: require("@/assets/player__pics/Bruno 'b4rtiN' Câmara/b4rtiN__godsent__2021-1__fullpic.png"),
          },
        ],
        acheviements: [ 
        ],
      },
    ],
  },
  {
    id: 24,
    name: `Marcelo 'chelo' Cespedes`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Marcelo 'chelo' Cespedes/chelo__furia__2023-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '6-8-1998',
      yearsActive: [2015, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 200095,
      alternativeIDs: [""],
    },
    achievements: [ 
      { type: 'tournament', name: 'Elisa Masters Espoo 2023' },
    ],
    teams: [
      {
        teamName: ["IMPERIAL"],
        teamLogo: { year: 2025 },
        timePeriod: {
          contract: ["2025-07-01 ", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2025-07-01 ", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Marcelo 'chelo' Cespedes/chelo__imperial__2025-1__fullpic.png"),
          },         
        ],
        acheviements: [
        ],
      },
      {
        teamName: ["FURIA"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-07-03", "2025-07-01"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2025-04-11", "2025-07-01"],
            },
            {
              staus: "STARTER", 
              period: ["023-07-03", "2025-04-11"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Marcelo 'chelo' Cespedes/chelo__furia__2024-1__pic.png"),
            fullPic: require("@/assets/player__pics/Marcelo 'chelo' Cespedes/chelo__furia__2024-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Marcelo 'chelo' Cespedes/chelo__furia__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Marcelo 'chelo' Cespedes/chelo__furia__2023-1__fullpic.png"),
          },
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Marcelo 'chelo' Cespedes/chelo__furia__2022-1__fullpic.png"),
          },
        ],
        acheviements: [
          { type: 'tournament', name: 'Elisa Masters Espoo 2023' },
        ],
      },
      {
        teamName: ["IMPERIAL"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2022-08-22", "2023-07-03"],
          status: [
            {
              staus: "STARTER", 
              period: ["2022-08-22", "2023-07-03"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2021-01-15", "2022-08-09"],
          status: [
            {
              staus: "STARTER", 
              period: ["2021-01-15", "2022-08-09"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["BOOM"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2020-02-24", "2021-01-15"],
          status: [
            {
              staus: "STARTER", 
              period: ["2020-02-24", "2021-01-15"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2020, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 25,
    name: `Felipe 'insani' Yuji`,
    favorites: true,
    picMain: null,
    pic: require("@/assets/player__pics/Felipe 'insani' Yuji/insani__mibr__2023-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '4-25-2004',
      yearsActive: [2019, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 99763,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-01-17", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2023-01-17", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Felipe 'insani' Yuji/insani__mibr__2025-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Felipe 'insani' Yuji/insani__mibr__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Felipe 'insani' Yuji/insani__mibr__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR Academy"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2021-08-13", "2023-01-17"],
          status: [
            {
              staus: "STARTER", 
              period: ["2021-08-13", "2023-01-17"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 26,
    name: `Breno 'brnz4n' Poletto`,
    favorites: true,
    picMain: null,
    pic: require("@/assets/player__pics/Breno 'brnz4n' Poletto/brnz4n__mibr__2023-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '8-26-2003',
      yearsActive: [2010, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 115200,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2022-05-19", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2025-02-19", "PRESENT"],
            },
            {
              staus: "BENCHED", 
              period: ["2024-09-24", "2025-02-19"],
            },
            {
              staus: "STARTER", 
              period: ["2022-05-19", "2024-09-24"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Breno 'brnz4n' Poletto/brnz4n__mibr__2025-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Breno 'brnz4n' Poletto/brnz4n__mibr__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Breno 'brnz4n' Poletto/brnz4n__mibr__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR Academy"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2021-08-16", "2022-05-19"],
          status: [
            {
              staus: "STARTER", 
              period: ["2021-08-16", "2022-05-19"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 27,
    name: `Raphael 'exit' Lacerda`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Raphael 'exit' Lacerda/exit__mibr__2022-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '8-29-1996',
      yearsActive: [2016, "present"],
      roles: ["In-game leader", "Riffler"],
      approxTotalWinnings: 175596,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2021-03-30", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2021-03-30", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Raphael 'exit' Lacerda/exit__mibr__2025-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Raphael 'exit' Lacerda/exit__mibr__2023-1__fullpic.png"),
          },
          {
            info: {year: 2022, order: 1},
            pic: require("@/assets/player__pics/Raphael 'exit' Lacerda/exit__mibr__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Raphael 'exit' Lacerda/exit__mibr__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Sharks"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2017-07-17", "2021-03-30"],
          status: [
            {
              staus: "STARTER", 
              period: ["2017-07-17", "2021-03-30"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 28,
    name: `Lucas 'Lucaozy' Neves`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Lucas 'Lucaozy' Neves/lucaozy__mibr__2023-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '10-16-2001',
      yearsActive: [2018, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 88229,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["Fluxo"],
        teamLogo: { year: 2025 },
        timePeriod: {
          contract: ["2025-07-10", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2025-07-10", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2024 },
        timePeriod: {
          contract: ["2024-09-24", "2025-07-10"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2025-06-13", "2025-07-10"],
            },
            {
              staus: "STARTER", 
              period: ["2024-09-24", "2025-06-13"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Lucas 'Lucaozy' Neves/lucaozy__mibr__2025-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Lucas 'Lucaozy' Neves/lucaozy__mibr__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Lucas 'Lucaozy' Neves/lucaozy__mibr__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Fluxo"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2022-08-09", "2024-09-23"],
          status: [
            {
              staus: "STARTER", 
              period: ["2022-08-09", "2024-09-23"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Lucas 'Lucaozy' Neves/lucaozy__fluxo__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Sharks"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2020-11-04", "2022-08-09"],
          status: [
            {
              staus: "STARTER", 
              period: ["2020-11-04", "2022-08-09"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 29,
    name: `Vinicius 'vsm' Moreira`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Vinicius 'vsm' Moreira/vsm__mibr__2020-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '7-1-1999',
      yearsActive: [2018, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 71057,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["Fluxo"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2022-08-09", "2024-10-07"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2024-05-09", "2024-10-07"],
            },
            {
              staus: "STARTER", 
              period: ["2022-08-09", "2024-05-09"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["00 NATION"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2021-09-03", "2022-08-09"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2022-06-13", "2022-08-09"],
            },
            {
              staus: "STARTER", 
              period: ["2021-09-03", "2022-06-13"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Vinicius 'vsm' Moreira/vsm__00nation__2021-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["O Plano"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2021-05-01", "2021-09-03"],
          status: [
            {
              staus: "STARTER", 
              period: ["2021-05-01", "2021-09-03"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2020 },
        timePeriod: {
          contract: ["2020-10-23", "2021-1-2"],
          status: [
            {
              staus: "LOAN", 
              period: ["2020-10-23", "2021-1-2"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2020, order: 1},
            pic: require("@/assets/player__pics/Vinicius 'vsm' Moreira/vsm__mibr__2020-1__pic.png"),
            fullPic: require("@/assets/player__pics/Vinicius 'vsm' Moreira/vsm__mibr__2020-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 30,
    name: `Kaiky 'noway' Santos`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Kaiky 'noway' Santos/noway__imperial__2023-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '5-12-2005',
      yearsActive: [2022, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 75782,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["IMPERIAL"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-10-08", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2023-10-08", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2024, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Kaiky 'noway' Santos/noway__imperial__2024-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Kaiky 'noway' Santos/noway__imperial__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Kaiky 'noway' Santos/noway__imperial__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 31,
    name: `Lucas 'decenty' Bacelar`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Lucas 'decenty' Bacelar/decenty__imperial__2024-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '3-1-2004',
      yearsActive: [2020, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 77262,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["Fluxo"],
        teamLogo: { year: 2025 },
        timePeriod: {
          contract: ["2025-07-10", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2025-07-10", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["IMPERIAL"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-10-31", "2025-07-10"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2025-06-28", "2025-07-10"],
            },
            {
              staus: "STARTER", 
              period: ["2023-10-31", "2025-06-28"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2024, order: 1},
            pic: require("@/assets/player__pics/Lucas 'decenty' Bacelar/decenty__imperial__2024-1__pic.png"),
            fullPic: require("@/assets/player__pics/Lucas 'decenty' Bacelar/decenty__imperial__2024-1__fullpic.png"),
          },
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Lucas 'decenty' Bacelar/decenty__imperial__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["O Plano"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2022-12-07", "2023-10-31"],
          status: [
            {
              staus: "STARTER", 
              period: ["2022-12-07", "2023-10-31"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["FURIA Academy"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2022-04-06", "2022-12-07"],
          status: [
            {
              staus: "STARTER", 
              period: ["2022-04-06", "2022-12-07"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Lucas 'decenty' Bacelar/decenty__furiaAcademy__2021-2__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["FURIA Academy"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2021-06-11", "2022-03-07"],
          status: [
            {
              staus: "STARTER", 
              period: ["2021-06-11", "2022-03-07"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/Lucas 'decenty' Bacelar/decenty__furiaAcademy__2021-2__fullpic.png"),
          },
        ],
        acheviements: [],
      },

    ],
  },
  {
    id: 32,
    name: `João 'snow' Vinicius`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/João 'snow' Vinicius/snow__godsent__2021-2__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '3-22-2007',
      yearsActive: [2021, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 85742,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["paiN"],
        teamLogo: { year: 2024 },
        timePeriod: {
          contract: ["2024-05-04", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2024-05-04", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/João 'snow' Vinicius/snow__pain__2025-1__fullpic.png"),
          },
          {
            info: {year: 2024, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/João 'snow' Vinicius/snow__pain__2024-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Godsent"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2021-09-30", "2022-07-26"],
          status: [
            {
              staus: "STARTER", 
              period: ["2021-09-30", "2022-07-26"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/João 'snow' Vinicius/snow__godsent__2021-2__fullpic.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 33,
    name: `Nicollas 'nicks' Polonio`,
    favorites: true,
    picMain: null,
    pic: require("@/assets/player__pics/Nicollas 'nicks' Polonio/nicks__mibr__2025-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '7-12-2005',
      yearsActive: [2022, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 23809,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2024 },
        timePeriod: {
          contract: ["2025-07-14", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2025-07-14", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: require("@/assets/player__pics/Nicollas 'nicks' Polonio/nicks__mibr__2025-1__pic.png"),
            fullPic: require("@/assets/player__pics/Nicollas 'nicks' Polonio/nicks__mibr__2025-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Fluxo"],
        teamLogo: { year: 2024 },
        timePeriod: {
          contract: ["2024-05-09", "2025-07-14"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2025-03-03", "2025-07-14"],
            },
            {
              staus: "STARTER", 
              period: ["2024-05-09 ", "2025-03-03"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2024, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Nicollas 'nicks' Polonio/nicks__fluxo__2024-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR Academy"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-01-17", "2024-05-08"],
          status: [
            {
              staus: "STARTER", 
              period: ["2023-01-17", "2024-05-08"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: null,
          }
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 34,
    name: `Adriano 'WOOD7' Cerato`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Adriano 'WOOD7' Cerato/wood7__mibr__2022-2__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '5-23-1995',
      yearsActive: [2016, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 74060,
      alternativeIDs: ["ZywOod"],
    },
    achievements: [],
    teams: [
      {
        teamName: ["ODDIK"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-07-20", "PRESENT"],
          status: [
            {
              staus: "STARTER", 
              period: ["2023-07-20", "PRESENT"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2025, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Adriano 'WOOD7' Cerato/wood7__oddik__2025-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["Fluxo"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2022-08-09", "2023-07-20"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2023-07-09", "2023-07-20"],
            },
            {
              staus: "STARTER", 
              period: ["2022-08-09", "2023-07-09"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2021 },
        timePeriod: {
          contract: ["2021-10-06", "2022-07-01"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2022-05-18", "2022-07-01"],
            },
            {
              staus: "STARTER", 
              period: ["2021-10-06", "2022-05-18"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Adriano 'WOOD7' Cerato/wood7__mibr__2022-2__fullpic.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 35,
    name: `Gabriel 'NEKIZ' Schenato`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Gabriel 'NEKIZ' Schenato/nekiz__pain__2022-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '11-17-1995',
      yearsActive: [2013, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 131131,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["Legacy"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-09-22", "2025-07-02"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2024-12-26", "2025-07-02"],
            },
            {
              staus: "STARTER", 
              period: ["2023-09-22", "2024-12-26"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'NEKIZ' Schenato/nekiz__legacy__2023-1__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'NEKIZ' Schenato/nekiz__legacy__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["00 NATION"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-07-07", "2023-08-15"],
          status: [
            {
              staus: "STARTER", 
              period: ["2023-07-07", "2023-08-15"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["paiN"],
        teamLogo: { year: 2023 },
        timePeriod: {
          contract: ["2023-02-06", "2023-07-07"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2023-06-22", "2023-07-07"],
            },
            {
              staus: "STARTER", 
              period: ["2023-02-06", "2023-06-22"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["O Plano"],
        teamLogo: { year: 2022 },
        timePeriod: {
          contract: ["2022-08-12", "2022-10-21"],
          status: [
            {
              staus: "LOAN", 
              period: ["2022-08-12", "2022-10-21"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [],
      },
      {
        teamName: ["paiN"],
        teamLogo: { year: 2019 },
        timePeriod: {
          contract: ["2019-11-26", "2023-02-06"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2022-07-17", "2023-02-06"],
            },
            {
              staus: "STARTER", 
              period: ["2019-11-26", "2022-07-17"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Gabriel 'NEKIZ' Schenato/nekiz__pain__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 36,
    name: `Vinicios 'PKL' Coelho`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Vinicios 'PKL' Coelho/PKL__pain__2023-1__fullpic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '7-21-1994',
      yearsActive: [2008, "present"],
      roles: ["Riffler", "In-game leader"],
      approxTotalWinnings: 135622,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["paiN"],
        teamLogo: { year: 2019 },
        timePeriod: {
          contract: ["2019-2-2", "2023-07-09"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2023-02-06", "2023-07-09"],
            },
            {
              staus: "STARTER", 
              period: ["2019-2-2", "2023-02-06"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Vinicios 'PKL' Coelho/PKL__pain__2023-1__fullpic.png"),
            fullPic: require("@/assets/player__pics/Vinicios 'PKL' Coelho/PKL__pain__2023-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 37,
    name: `Wesley 'hardzao' Lopes`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Wesley 'hardzao' Lopes/hardzao__pain__2022-1__fullpic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '1-16-2001',
      yearsActive: [2017, "present"],
      roles: ["Riffler"],
      approxTotalWinnings: 118644,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["paiN"],
        teamLogo: { year: 2019 },
        timePeriod: {
          contract: ["2019-08-20", "2023-07-13"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2023-07-13", "2023-07-13"],
            },
            {
              staus: "STARTER", 
              period: ["2019-08-20", "2023-07-13"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2023, order: 1},
            pic: require("@/assets/player__pics/Wesley 'hardzao' Lopes/hardzao__pain__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Wesley 'hardzao' Lopes/hardzao__pain__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 38,
    name: `Gabriel 'nython' Lino`,
    favorites: false,
    picMain: null,
    pic: require("@/assets/player__pics/Gabriel 'nython' Lino/nython__pain__2022-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["Brazil", "BR"],
      date: '10-10-1997',
      yearsActive: [2019, "present"],
      roles: ["AWPer"],
      approxTotalWinnings: 64485,
      alternativeIDs: [""],
    },
    achievements: [],
    teams: [
      {
        teamName: ["paiN"],
        teamLogo: { year: 2019 },
        timePeriod: {
          contract: ["2022-02-22", "2023-01-16"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2023-07-13", "2023-01-16"],
            },
            {
              staus: "STARTER", 
              period: ["2022-02-22", "2023-07-13"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2022, order: 1},
            pic: require("@/assets/player__pics/Gabriel 'nython' Lino/nython__pain__2022-1__pic.png"),
            fullPic: require("@/assets/player__pics/Gabriel 'nython' Lino/nython__pain__2022-1__fullpic.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 39,
    name: `Tarik 'tarik' Celik`,
    favorites: true,
    picMain: null,
    pic: require("@/assets/player__pics/Tarik 'tarik' Celik/tarik__evilgeniuses__2020-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["United States", "US"],
      date: '2-18-1996',
      yearsActive: [2014, 2021],
      roles: ["Riffler"],
      approxTotalWinnings: 784552,
      alternativeIDs: ["TaRiK do ceu", "Rei do Spray"],
    },
    achievements: [
      {
        type: 'tournament', name: 'ESL One Cologne 2020 North America'
      },
      {
        type: 'tournament', name: 'cs_summit 6 North America'
      },
      {
        type: 'tournament', name: 'BLAST Premier Spring 2020 Americas Finals'
      },
      {
        type: 'tournament', name: 'StarSeries i-League Season 8'
      },
      {
        type: 'tournament', name: 'ESL One New York 2019'
      },
      {
        type: 'tournament', name: 'ZOTAC Cup Masters 2018 Grand Finals'
      },
      {
        type: 'major mvp', name: 'ELEAGUE Major 2018'
      },
      {
        type: 'major', name: 'ELEAGUE Major 2018'
      },
      {
        type: 'tournament', name: 'iBUYPOWER Masters 2017'
      },
      {
        type: 'tournament', name: 'DreamHack Open Denver 2017'
      },
      {
        type: 'tournament', name: 'ELEAGUE Season 2'
      },
    ],
    teams: [
      {
        teamName: ["Evil Geniuses"],
        teamLogo: { year: 2019 },
        timePeriod: {
          contract: ["2019-09-26", "2022-01-04"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2021-04-15", "2022-01-04"],
            },
            {
              staus: "STARTER", 
              period: ["2019-09-26", "2021-04-15"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2020, order: 1},
            pic: require("@/assets/player__pics/Tarik 'tarik' Celik/tarik__evilgeniuses__2020-1__pic.png"),
            fullPic: require("@/assets/player__pics/Tarik 'tarik' Celik/tarik__evilgeniuses__2020-1__fullpic.png"),
          },
          {
            info: {year: 2019, order: 2},
            pic: null,
            fullPic: null,
          },
          {
            info: {year: 2019, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [
          {
            type: 'tournament', name: 'ESL One Cologne 2020 North America'
          },
          {
            type: 'tournament', name: 'cs_summit 6 North America'
          },
          {
            type: 'tournament', name: 'BLAST Premier Spring 2020 Americas Finals'
          },
          {
            type: 'tournament', name: 'StarSeries i-League Season 8'
          },
          {
            type: 'tournament', name: 'ESL One New York 2019'
          },
        ],
      },
      {
        teamName: ["NRG"],
        teamLogo: { year: 2019 },
        timePeriod: {
          contract: ["2019-02-28", "2019-09-26"],
          status: [
            {
              staus: "STARTER", 
              period: ["2019-02-28", "2019-09-26"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2019, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Tarik 'tarik' Celik/tarik__nrg__2019-1__fullpic.png"),
          },
        ],
        acheviements: [
        ],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["2018-07-14", "2019-02-28"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2019-01-12", "2019-02-28"],
            },
            {
              staus: "STARTER", 
              period: ["2018-07-14", "2019-01-12"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2018, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Tarik 'tarik' Celik/tarik__mibr__2018-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament', name: 'ZOTAC Cup Masters 2018 Grand Finals'
          },
        ],
      },
      {
        teamName: ["Cloud9"],
        teamLogo: { year: 2017 },
        timePeriod: {
          contract: ["2017-08-15", "2018-07-12"],
          status: [
            {
              staus: "STARTER", 
              period: ["2017-08-15", "2018-07-12"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2018, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Tarik 'tarik' Celik/tarik__cloud9__2017-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'major mvp', name: 'ELEAGUE Major 2018'
          },
          {
            type: 'major', name: 'ELEAGUE Major 2018'
          },
          {
            type: 'tournament', name: 'iBUYPOWER Masters 2017'
          },
          {
            type: 'tournament', name: 'DreamHack Open Denver 2017'
          },
        ],
      },
      {
        teamName: ["OpTic Gaming"],
        teamLogo: { year: 2016 },
        timePeriod: {
          contract: ["2016-08-20", "2017-08-15"],
          status: [
            {
              staus: "STARTER", 
              period: ["2016-08-20", "2017-08-15"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2016, order: 1},
            pic: null,
            fullPic: null,
          },
        ],
        acheviements: [
          {
            type: 'tournament', name: 'ELEAGUE Season 2'
          },
        ],
      },
    ],
  },
  {
    id: 40,
    name: `Jake 'Stewie2K' Yip`,
    favorites: true,
    picMain: null,
    pic: require("@/assets/player__pics/Jake 'Stewie2K' Yip/stewie2k__liquid__2021-1__pic.png"),
    fullpic: null,
    infos: {
      nationality: ["United States", "US"],
      date: '1-7-1998',
      yearsActive: [2015, "present"],
      roles: ["Riffler", "In-game leader", "AWPer"],
      approxTotalWinnings: 1196892,
      alternativeIDs: ["Tchutch", ],
    },
    achievements: [
      {
        type: 'tournament', name: 'IEM Dallas 2024'
      },
      {
        type: 'tournament', name: 'ESL Pro League Season 11 North America'
      },
      {
        type: 'tournament', name: 'IEM Chicago 2019'
      },
      {
        type: 'tournament', name: 'BLAST Pro Series Los Angeles 2019'
      },
      {
        type: 'Intel Grand Slam', name: 'Intel Grand Slam Season 2'
      },
      {
        type: 'tournament', name: 'ESL One Cologne 2019'
      },
      {
        type: 'tournament', name: 'ESL Pro League Season 9 Finals'
      },
      {
        type: 'tournament', name: 'DreamHack Masters Dallas 2019'
      },
      {
        type: 'tournament', name: 'IEM Sydney 2019'
      },
      {
        type: 'tournament', name: 'iBUYPOWER Masters 2019'
      },
      {
        type: 'tournament', name: 'ZOTAC Cup Masters 2018 Grand Finals'
      },
      {
        type: 'major', name: 'ELEAGUE Major 2018'
      },
      {
        type: 'mvp', name: 'iBUYPOWER Masters 2017'
      },
      {
        type: 'tournament', name: 'iBUYPOWER Masters 2017'
      },
      {
        type: 'mvp', name: 'DreamHack Open Denver 2017'
      },
      {
        type: 'tournament', name: 'DreamHack Open Denver 2017'
      },
      {
        type: 'tournament', name: 'ELEAGUE Season 2'
      },
      {
        type: 'tournament', name: 'ESL Pro League Season 4 Finals'
      },
    ],
    teams: [
      {
        teamName: ["G2"],
        teamLogo: { year: 2024 },
        timePeriod: {
          contract: ["2018-07-14", "2019-02-28"],
          status: [
            {
              staus: "Stand-in", 
              period: ["2018-07-14", "2019-01-12"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2024, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Jake 'Stewie2K' Yip/stewie2k__g2__2024-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament', name: 'IEM Dallas 2024'
          },
        ],
      },
      {
        teamName: ["Liquid"],
        teamLogo: { year: 2019 },
        timePeriod: {
          contract: ["2018-07-14", "2019-02-28"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2019-01-12", "2019-02-28"],
            },
            {
              staus: "STARTER", 
              period: ["2018-07-14", "2019-01-12"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2021, order: 1},
            pic: require("@/assets/player__pics/Jake 'Stewie2K' Yip/stewie2k__liquid__2021-1__pic.png"),
            fullPic: require("@/assets/player__pics/Jake 'Stewie2K' Yip/stewie2k__liquid__2021-1__fullpic.png"),
          },
          {
            info: {year: 2019, order: 2},
            pic: null,
            fullPic: require("@/assets/player__pics/Jake 'Stewie2K' Yip/stewie2k__liquid__2019-2__fullpic.png"),
          },
          {
            info: {year: 2019, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Jake 'Stewie2K' Yip/stewie2k__liquid__2019-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament', name: 'ESL Pro League Season 11 North America'
          },
          {
            type: 'tournament', name: 'IEM Chicago 2019'
          },
          {
            type: 'tournament', name: 'BLAST Pro Series Los Angeles 2019'
          },
          {
            type: 'Intel Grand Slam', name: 'Intel Grand Slam Season 2'
          },
          {
            type: 'tournament', name: 'ESL One Cologne 2019'
          },
          {
            type: 'tournament', name: 'ESL Pro League Season 9 Finals'
          },
          {
            type: 'tournament', name: 'DreamHack Masters Dallas 2019'
          },
          {
            type: 'tournament', name: 'IEM Sydney 2019'
          },
          {
            type: 'tournament', name: 'iBUYPOWER Masters 2019'
          },
        ],
      },
      {
        teamName: ["MIBR"],
        teamLogo: { year: 2018 },
        timePeriod: {
          contract: ["2018-07-14", "2019-02-28"],
          status: [
            {
              staus: "BENCHED", 
              period: ["2019-01-12", "2019-02-28"],
            },
            {
              staus: "STARTER", 
              period: ["2018-07-14", "2019-01-12"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2018, order: 1},
            pic: require("@/assets/player__pics/Jake 'Stewie2K' Yip/stewie2k__mibr__2018-1__pic.png"),
            fullPic: require("@/assets/player__pics/Jake 'Stewie2K' Yip/stewie2k__mibr__2018-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'tournament', name: 'ZOTAC Cup Masters 2018 Grand Finals'
          },
        ],
      },
      {
        teamName: ["Cloud9"],
        teamLogo: { year: 2017 },
        timePeriod: {
          contract: ["2017-08-15", "2018-07-12"],
          status: [
            {
              staus: "STARTER", 
              period: ["2017-08-15", "2018-07-12"],
            },
          ],
        },
        jerseys: [
          {
            info: {year: 2017, order: 1},
            pic: null,
            fullPic: require("@/assets/player__pics/Jake 'Stewie2K' Yip/stewie2k__cloud9__2017-1__fullpic.png"),
          },
        ],
        acheviements: [
          {
            type: 'major mvp', name: 'ELEAGUE Major 2018'
          },
          {
            type: 'major', name: 'ELEAGUE Major 2018'
          },
          {
            type: 'mvp', name: 'iBUYPOWER Masters 2017'
          },
          {
            type: 'tournament', name: 'iBUYPOWER Masters 2017'
          },
          {
            type: 'mvp', name: 'DreamHack Open Denver 2017'
          },
          {
            type: 'tournament', name: 'DreamHack Open Denver 2017'
          },
          {
            type: 'tournament', name: 'ESL Pro League Season 4 Finals'
          },
        ],
      },
      
    ],
  },

  // proximos:  tarik, stewie2k, try, davideus, dgt, C9's players

  {
    id: -1,
    name: "Egor 'flamie' Vasilyev",
    picMain: require("@/assets/player__pics/flamie__navi__2020__1.png"),
    pic: require("@/assets/player__pics/flamie__navi__2019__2.png"),
    infos: {
      nationality: ["Ukraine", "UK"],
      date: '??-??-????',
    },
    teams: [],
    
  },

  /*

  {
    id: 21,
    name: `Nikola 'NiKo' Kovač`,
    date: "02-16-1997",
    country: ["Bosnia", "BA"],
    favorites: true,
    picMain: require("@/assets/player__pics/niko__g2__2020__2.png"),
    major: {trophie: 0, mvp: 0},
    status: true,
    mvps: [],
    teams: [
      {
        teamName: ["G2 Esports"],
        logo: require("@/assets/team__logos/g2__2020.png"),
        date: ["04-00-2024", "present"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/niko__g2__2020__2.png"),
            fullPic: require("@/assets/player__pics/niko__g2__2020__1.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 22,
    name: `Nemanja 'huNter-' Kovač`,
    date: '01-03-1996',
    country: ["Bosnia", "BA"],
    favorites: false,
    picMain: require("@/assets/player__pics/hunter__g2__2021__2.png"),
    major: {trophie: 0, mvp: 0},
    status: true,
    mvps: [],
    teams: [
      {
        teamName: ["G2 Esports"],
        logo: require("@/assets/team__logos/g2__2020.png"),
        date: ["04-00-2019", "present"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/hunter__g2__2021__2.png"),
            fullPic: require("@/assets/player__pics/hunter__g2__2021__1.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 23,
    name: `Kenny 'kennyS' Schrub`,
    date: '05-19-1995',
    country: ['France', 'FR'],
    favorites: true,
    picMain: require("@/assets/player__pics/kennys__g2__2020__1.png"),
    major: {trophie: 1, mvp: 1},
    status: false,
    mvps: [],
    teams: [
      {
        teamName: ["G2 Esports"],
        logo: require("@/assets/team__logos/g2__2020.png"),
        date: ["00-00-2016", "00-00-2020"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/kennys__g2__2020__1.png"),
            fullPic: require("@/assets/player__pics/kennys__g2__2020__1.png"),
          },
        ],
        acheviements: [],
      },
    ],

  },        
  {
    id: 24,
    name: `Nicolai 'device' Reedtz`,
    date: '09-08-1995',
    country: ['Denmark', 'DK'],
    favorites: true,
    picMain: require("@/assets/player__pics/device__astralis__2019__2.png"),
    major: {trophie: 4, mvp: 2},
    status: true,
    mvps: [],
    teams: [
      {
        teamName: ["Ninjas in Pyjamas"],
        logo: require("@/assets/team__logos/nip__2021.png"),
        date: ["00-00-2021", "00-00-2021"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/device__nip__2021__2.png"),
            fullPic: require("@/assets/player__pics/device__nip__2021__1.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 25,
    name: `Lukas 'gla1ve' Rossander`,
    date: '06-07-1995',
    country: ['Denmark', 'DK'],
    favorites: true,
    picMain: require("@/assets/player__pics/gla1ve__astralis__2019__2.png"),
    major: {trophie: 4, mvp: 0},
    status: true,
    mvps: [],
    teams: [
      {
        teamName: ["Astralis"],
        logo: require("@/assets/team__logos/nip__2021.png"),
        date: ["00-00-2016", "00-00-2024"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/gla1ve__astralis__2019__2.png"),
            fullPic: require("@/assets/player__pics/gla1ve__astralis__2019__2.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 26,
    name: `Peter 'dupreeh' Rasmussen`,
    date: '03-26-1993',
    country: ['Denmark', 'DK'],
    favorites: true,
    picMain: require("@/assets/player__pics/dupreeh__vitality__2022__2.png"),
    major: {trophie: 5, mvp: 0},
    status: true,
    mvps: [],
    teams: [
      {
        teamName: ["Vitality"],
        logo: require("@/assets/team__logos/vitality__2022.png"),
        date: ["00-00-2022", "00-00-2000"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/dupreeh__vitality__2022__2.png"),
            fullPic: require("@/assets/player__pics/dupreeh__vitality__2022__2.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 27,
    name: `Emil 'Magisk' Reif`,
    date: '03-05-1998',
    country: ['Denmark', 'DK'],
    favorites: false,
    picMain: require("@/assets/player__pics/magisk__astralis__2019__2.png"),
    major: {trophie: 5, mvp: 0},
    status: true,
    mvps: [],
    teams: [
      {
        teamName: ["Astralis"],
        logo: require("@/assets/team__logos/vitality__2022.png"),
        date: ["00-00-2022", "00-00-2000"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/magisk__astralis__2019__2.png"),
            fullPic: require("@/assets/player__pics/magisk__astralis__2019__1.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 28,
    name: `Andreas 'Xyp9x' Højsleth`,
    date: '09-11-1995',
    country: ['Denmark', 'DK'],
    favorites: false,
    picMain: require("@/assets/player__pics/xyp9x__astralis__2019__2.png"),
    major: {trophie: 5, mvp: 0},
    status: false,
    mvps: [],
    teams: [
      {
        teamName: ["Astralis"],
        logo: require("@/assets/team__logos/vitality__2022.png"),
        date: ["00-00-2016", "00-00-2000"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/xyp9x__astralis__2019__2.png"),
            fullPic: require("@/assets/player__pics/xyp9x__astralis__2019__1.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 29,
    name: `Olof 'olofmeister' Kajbjer`,
    date: '01-31-1992',
    country: ['Denmark', 'SE'],
    favorites: true,
    picMain: require("@/assets/player__pics/olofmeister__faze__2019__2.png"),
    major: {trophie: 1, mvp: 1},
    status: false,
    mvps: [],
    teams: [
      {
        teamName: ["Faze Clan"],
        logo: require("@/assets/team__logos/faze__2020.png"),
        date: ["00-00-2016", "00-00-2022"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/olofmeister__faze__2019__2.png"),
            fullPic: require("@/assets/player__pics/olofmeister__faze__2021__1.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 30,
    name: `Håvard 'rain' Nygaard`,
    date: '08-27-1994',
    country: ['Norway', 'NO'],
    favorites: false,
    picMain: require("@/assets/player__pics/rain__faze__2019__2.png"),
    major: {trophie: 1, mvp: 1},
    status: true,
    mvps: [],
    teams: [
      {
        teamName: ["Faze Clan"],
        logo: require("@/assets/team__logos/faze__2020.png"),
        date: ["00-00-2016", "00-00-2000"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/rain__faze__2021__1.png"),
            fullPic: require("@/assets/player__pics/rain__faze__2021__1.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 31,
    name: `Helvijs 'broky' Saukants`,
    date: '02-14-2001',
    country: ['Latvia', 'LV'],
    favorites: true,
    picMain: require("@/assets/player__pics/broky__faze__2019__2.png"),
    major: {trophie: 1, mvp: 0},
    status: true,
    mvps: [],
    teams: [
      {
        teamName: ["Astralis"],
        logo: require("@/assets/team__logos/faze__2020.png"),
        date: ["00-00-2019", "present"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/broky__faze__2021__1.png"),
            fullPic: require("@/assets/player__pics/broky__faze__2021__1.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 32,
    name: `Robin 'ropz' Kool`,
    date: '12-22-1999',
    country: ['Estonia', 'EE'],
    favorites: true,
    picMain: require("@/assets/player__pics/unknow.png"),
    major: {trophie: 1, mvp: 0},
    status: true,
    mvps: [],
    teams: [
      {
        teamName: ["Faze Clan"],
        logo: require("@/assets/team__logos/faze__2020.png"),
        date: ["00-01-2022", "00-00-2024"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/unknow.png"),
            fullPic: require("@/assets/player__pics/unknow.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 33,
    name: `Finn 'karrigan' Anderson`,
    date: '04-14-1990',
    country: ['Denmark', 'DK'],
    favorites: true,
    picMain: require("@/assets/player__pics/unknow.png"),
    major: {trophie: 1, mvp: 0},
    status: true,
    mvps: [],
    teams: [
      {
        teamName: ["Astralis"],
        logo: require("@/assets/team__logos/vitality__2022.png"),
        date: ["00-00-2016", "00-00-2000"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/unknow.png"),
            fullPic: require("@/assets/player__pics/unknow.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  {
    id: 34,
    name: `Russel 'Twistzz' Van Dulken`,
    date: '11-14-1999',
    country: ['Canada', 'CA'],
    favorites: true,
    picMain: require("@/assets/player__pics/twistzz__faze__2021__2.png"),
    major: {trophie: 1, mvp: 0},
    status: true,
    mvps: [],
    teams: [
      {
        teamName: ["Faze Clan"],
        logo: require("@/assets/team__logos/faze__2020.png"),
        date: ["00-00-2016", "00-00-2000"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/twistzz__faze__2021__2.png"),
            fullPic: require("@/assets/player__pics/twistzz__faze__2021__2.png"),
          },
        ],
        acheviements: [],
      },
    ],
  },
  

  {
    id: 12312312,
    name: `Tyler 'Skadoodle' Latham`,
    date: "07-21-1993",
    country: ["United States", "US"],
    favorites: true,
    picMain: require("@/assets/player__pics/skadoodle__cloud9__2019__2.png"),
    major: {trophie: 1, mvp: 0},
    status: false,
    mvps: [],
    teams: [
      {
        teamName: ["Cloud9"],
        logo: require("@/assets/team__logos/redcanids__2024.png"),
        date: ["04-29-2015", "10-16-2018"],
        jerseys: [
          {
            pic: require("@/assets/player__pics/skadoodle__cloud9__2019__2.png"),
            fullPic: require("@/assets/player__pics/skadoodle__cloud9__2019__1.png"),
          },
        ],
        acheviements: [],
      },
    ],

  },
  */
];

const Players = [


  /*


    // GODSENT


    {
        id: 19,
        name: `Bruno 'b4rtiN' Câmara`,
        date: '01-11-1992',
        country: ['Brazil', 'BR'],
        pic2: require('@/assets/player__pics/b4rtin__godsent__2021__2.png'),
        timeline: [
            {
                year: '2023',
                teams: ['Legacy'],
                top20hltv: 0,
                trophie: [],
                mvp: [],
                position: ['Riffler'],
                pics2: [
                    require('@/assets/player__pics/b4rtin__godsent__2021__2.png')
                ],
            },
        ],
        favorites: false,
    },
    
    // O PLANO
    {
        id: 20,
        name: `Vinicius 'vsm' Moreira`,
        date: '07-02-1999',
        country: ['Brazil', 'BR'],
    },
    {
        id: 21,
        name: `Alencar 'trk' Rossato`,
        date: '06-24-1995',
        country: ['Brazil', 'BR'],
    },
    {
        id: 22,
        name: `Leonardo 'leo_drk' Oliveira`,
        date: '10-19-1999',
        country: ['Brazil', 'BR'],
    },
    
    //MIBR

    {
        id: 24,
        name: `Lucas 'Lucaozy' Neves`,
        date: '10-16-2001',
        country: ['Brazil', 'BR'],
        pic2: require('@/assets/player__pics/lucaozy__mibr__2024__2.png'),
        timeline: [
            {
                year: '2024',
                teams: ['MIBR'],
                top20hltv: 0,
                trophie: [],
                mvp: [],
                position: ['Riffler'],
                pics2: [
                    require('@/assets/player__pics/lucaozy__mibr__2024__2.png')
                ],
            },
        ],
        favorites: false,
    },
    {
        id: 25,
        name: `Raphael 'exit' Lacerda`,
        date: '08-29-1996',
        country: ['Brazil', 'BR'],
        pic2: require('@/assets/player__pics/exit__mibr__2024__2.png'),
        timeline: [
            {
                year: '2024',
                teams: ['MIBR'],
                top20hltv: 0,
                trophie: [],
                mvp: [],
                position: ['Riffler'],
                pics2: [
                    require('@/assets/player__pics/exit__mibr__2024__2.png')
                ],
            },
        ],
        favorites: false,
    },
    

    
    // G2 2020
    

    {
        id: 32,
        name: `Nemanja 'nexa' Isaković`,
        date: '04-27-1997',
        country: ['Serbia', 'RS'],
        pic2: require('@/assets/player__pics/nexa__g2__2021__2.png'),
        timeline: [
            {
                year: '2021',
                teams: ['G2'],
                top20hltv: 0,
                trophie: [],
                mvp: [],
                position: ['Riffler'],
                pics2: [
                    require('@/assets/player__pics/nexa__g2__2021__2.png')
                ],
            },
        ],
        favorites: false,
    },
    {
        id: 33,
        name: `Audric 'JACKZ' Jug`,
        date: '07-07-1992',
        country: ['France', 'FR'],
        pic2: require('@/assets/player__pics/jackz__g2__2021__2.png'),
        timeline: [
            {
                year: '2021',
                teams: ['G2'],
                top20hltv: 0,
                trophie: [],
                mvp: [],
                position: ['Riffler'],
                pics2: [
                    require('@/assets/player__pics/jackz__g2__2021__2.png')
                ],
            },
        ],
        favorites: false,
    },
    {
        id: 34,
        name: `François 'AMANEK' Delaunay`,
        date: '08-24-1993',
        country: ['France', 'FR'],
        pic2: require('@/assets/player__pics/amanek__g2__2021__2.png'),
        timeline: [
            {
                year: '2021',
                teams: ['G2'],
                top20hltv: 0,
                trophie: [],
                mvp: [],
                position: ['Riffler'],
                pics2: [
                    require('@/assets/player__pics/amanek__g2__2021__2.png')
                ],
            },
        ],
        favorites: false,
    },

    
    // NiP 2021
    {
        id: 40,
        name: `Fredrik 'REZ' Sterner`,
        date: '01-11-1998',
        country: ['Sweden', 'SE'],
        pic2: require('@/assets/player__pics/rez__nip__2021__2.png'),
        timeline: [
            {
                year: '2021',
                teams: ['G2'],
                top20hltv: 0,
                trophie: [],
                mvp: [],
                position: ['Riffler'],
                pics2: [
                    require('@/assets/player__pics/rez__nip__2021__2.png')
                ],
            },
        ],
        favorites: false,
    },
    {
        id: 41,
        name: `Nicolas 'Plopski' Gonzalez Zamora`,
        date: '05-14-2002',
        country: ['Sweden', 'SE'],
        pic2: require('@/assets/player__pics/plopski__nip__2021__2.png'),
        timeline: [
            {
                year: '2021',
                teams: ['G2'],
                top20hltv: 0,
                trophie: [],
                mvp: [],
                position: ['Riffler'],
                pics2: [
                    require('@/assets/player__pics/plopski__nip__2021__2.png')
                ],
            },
        ],
        favorites: false,
    },
    {
        id: 42,
        name: `Hampus 'hampus' Poser`,
        date: '11-26-1998',
        country: ['Sweden', 'SE'],
        pic2: require('@/assets/player__pics/hampus__nip__2021__2.png'),
        timeline: [
            {
                year: '2021',
                teams: ['G2'],
                top20hltv: 0,
                trophie: [],
                mvp: [],
                position: ['Riffler'],
                pics2: [
                    require('@/assets/player__pics/hampus__nip__2021__2.png')
                ],
            },
        ],
        favorites: false,
    },
    {
        id: 43,
        name: `Linus 'LNZ' Holtäng`,
        date: '10-20-2002',
        country: ['Sweden', 'SE'],
        pic2: require('@/assets/player__pics/lnz__nip__2021__2.png'),
        timeline: [
            {
                year: '2021',
                teams: ['NiP'],
                top20hltv: 0,
                trophie: [],
                mvp: [],
                position: ['Riffler'],
                pics2: [
                    require('@/assets/player__pics/lnz__nip__2021__2.png')
                ],
            },
        ],
        favorites: false,
    },
    */
];

export default PlayersV2;
