/*
    date 12 Dec 2024

*/

/*
  orgs
*/

type OrgType = {
  id: number;
  names: string[];
  logo: { year: number; img: any }[];
  date: string[];
  jerseys: any[]
};

type OrgList = OrgType[];

const Teams:OrgList = [

  {
    id: 1,
    names: ["Luminosity", "LG", "Luminosity Gaming",],
    logo: [
      {
        year: 2015,
        img: require("@/assets/team__logos/luminosity__2015.png"),
      }
    ],
    date: ["2015-4-30", "present"],
    jerseys: [
      {
        info: { year:2016, order: 1 },
        img: require("@/assets/teams__jerseys/luminosity__jersey__2016-1.png")
      },
      {
        info: { year:2015, order: 1 },
        img: require("@/assets/teams__jerseys/luminosity__jersey__2015-1.png")
      }
    ]
  },
  {
    id: 2,
    names: ["SK Gaming", "SK"],
    logo: [
      {
        year: 2016,
        img: require("@/assets/team__logos/sk__2016.png"),
      }
    ],
    date: ["2001-9-23", "present"],
    jerseys: [
      {
        info: {year: 2017, order: 1},
        img: require("@/assets/teams__jerseys/sk__jersey__2017-1.png")
      },
            {
        info: {year: 2016, order: 3.1},
        img: require("@/assets/teams__jerseys/sk__jersey__2016-3.1.png")
      },
      {
        info: {year: 2016, order: 3},
        img: require("@/assets/teams__jerseys/sk__jersey__2016-3.png")
      },
      {
        info: {year: 2016, order: 2},
        img: require("@/assets/teams__jerseys/sk__jersey__2016-2.png")
      },
      {
        info: {year: 2016, order: 1},
        img: require("@/assets/teams__jerseys/sk__jersey__2016-1.png")
      },
    ]
  },
  {
    id: 3,
    names: ["MIBR", "Made in Brazil"],
    logo: [
      {
        year: 2021,
        img: require("@/assets/team__logos/mibr__2018.png"),
      },
      {
        year: 2020,
        img: require("@/assets/team__logos/mibr__2020.png"),
      },
      {
        year: 2019,
        img: require("@/assets/team__logos/mibr__2019.png"),
      },
      {
        year: 2018,
        img: require("@/assets/team__logos/mibr__2018.png"),
      },
    ],
    date: ["2003-3-8", "present"],
    jerseys: [
      {
        info: {year: 2025, order:1},
        img: require("@/assets/teams__jerseys/mibr__jersey__2025-1.png")
      },
      {
        info: {year: 2023, order:1},
        img: require("@/assets/teams__jerseys/mibr__jersey__2023-1.png")
      },
      {
        info: {year: 2022, order:1},
        img: require("@/assets/teams__jerseys/mibr__jersey__2022-1.png")
      },
      {
        info: {year: 2021, order:2},
        img: require("@/assets/teams__jerseys/mibr__jersey__2021-2.png")
      },
      {
        info: {year: 2021, order:1},
        img: require("@/assets/teams__jerseys/mibr__jersey__2021-1.png")
      },
      {
        info: {year: 2020, order:1},
        img: require("@/assets/teams__jerseys/mibr__jersey__2020-1.png")
      },
      {
        info: {year: 2019, order:2},
        img: require("@/assets/teams__jerseys/mibr__jersey__2019-2.png")
      },
      {
        info: {year: 2019, order:1},
        img: require("@/assets/teams__jerseys/mibr__jersey__2019-1.png")
      },
      {
        info: {year: 2018, order:1},
        img: require("@/assets/teams__jerseys/mibr__jersey__2018-1.png")
      },
    ]
    
  },
  {
    id: 4,
    names: ["FURIA"],
    logo: [
      {
        year: 2017,
        img: require("@/assets/team__logos/furia__2017.png"),
      }
    ],
    date: ["2017-8-10", "present"],
    jerseys: [
      {
        info: {year: 2025, order: 1},
        img: require("@/assets/teams__jerseys/furia__jersey__2025-1.png")
      },
      {
        info: {year: 2023, order: 1},
        img: require("@/assets/teams__jerseys/furia__jersey__2023-1.png")
      },
      {
        info: {year: 2022, order: 1},
        img: require("@/assets/teams__jerseys/furia__jersey__2022-1.png")
      },
      {
        info: {year: 2021, order: 2},
        img: require("@/assets/teams__jerseys/furia__jersey__2021-2.png")
      },
      {
        info: {year: 2021, order: 1},
        img: require("@/assets/teams__jerseys/furia__jersey__2021-1.png")
      },
      {
        info: {year: 2020, order: 1},
        img: require("@/assets/teams__jerseys/furia__jersey__2020-1.png")
      },
      {
        info: {year: 2019, order: 1},
        img: require("@/assets/teams__jerseys/furia__jersey__2019-1.png")
      },
    ]
  },
  {
    id: 5,
    names: ["IMPERIAL"],
    logo: [
      {
        year: 2022,
        img: require("@/assets/team__logos/imperial__2022.png"),
      }
    ],
    date: ["2018-9-5", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 2},
        img: require("@/assets/teams__jerseys/imperial__jersey__2024-2.png")
      },
      {
        info: {year: 2024, order: 1},
        img: require("@/assets/teams__jerseys/imperial__jersey__2024-1.png")
      },
      {
        info: {year: 2022, order: 2},
        img: require("@/assets/teams__jerseys/imperial__jersey__2022-2.png")
      },
      {
        info: {year: 2022, order: 1},
        img: require("@/assets/teams__jerseys/imperial__jersey__2022-1.png")
      },
    ]
  },
  {
    id: 6,
    names: ["00 NATION"],
    logo: [
      {
        year: 2022,
        img: require("@/assets/team__logos/00nation__2022.png"),
      },
      {
        year: 2021,
        img: require("@/assets/team__logos/00nation__2021.png"),
      }
    ],
    date: ["2021-9-3", "present"],
    jerseys: [
      {
        info: {year: 2023, order: 1},
        img: require("@/assets/teams__jerseys/00nation__jersey__2023-1.png")
      },
      {
        info: {year: 2022, order: 1},
        img: require("@/assets/teams__jerseys/00nation__jersey__2022-1.png")
      },
      {
        info: {year: 2021, order: 1},
        img: null,
      },
    ]
    
  },
  {
    id: 7,
    names: ["paiN", "paiN Gaming"],
    logo: [
      {
        year: 2023,
        img: require("@/assets/team__logos/painGaming__2023.png"),
      }
    ],
    date: ["2011-5-10", "present"],
    jerseys: [
      {
        info: {year: 2025, order: 1},
        img: null,
      },
    ]
    
  },
  {
    id: 8,
    names: ["RED Canids"],
    logo: [
      {
        year: 2024,
        img: require("@/assets/team__logos/redcanids__2024.png"),
      }
    ],
    date: ["2016-8-1", "present"],
    jerseys: [
      {
        info: { year: 2025, order: 1 },
        img: null,
      },
      {
        info: { year: 2024, order: 2 },
        img: null,
      },
    ]
    
  },

  {
    id: 9,
    names: ["FaZe", "Faze Clan"],
    logo: [
      {
        year: 2025,
        img: require("@/assets/team__logos/faze__2025.png"),
      },
      {
        year: 2020,
        img: require("@/assets/team__logos/fazeclan__2020.png"),
      },
      {
        year: 2016,
        img: require("@/assets/team__logos/fazeclan__2016.png"),
      },
    ],
    date: ["2016-1-20", "present"],
    jerseys: [
      {
        info: {year: 2019, order: 2},
        img: require("@/assets/teams__jerseys/faze__jersey__2019-2.png")
      },
    ]
    
  },
  {
    id: 10,
    names: ["G2", "G2 Esports"],
    logo: [
      {
        year: 2020,
        img: require("@/assets/team__logos/g2__2020.png"),
      }
    ],
    date: ["2015-2-11", "present"],
    jerseys: [
      
    ]
  },
  {
    id: 11,
    names: ["Natus Vincere", "NAVI"],
    logo: [
      {
        year: 2020,
        img: require("@/assets/team__logos/navi__2021.png"),
      }
    ],
    date: ["2009-12-17", "present"],
    jerseys: [
      
    ]
  },
  {
    id: 12,
    names: ["Vitality"],
    logo: [
      {
        year: 2022,
        img: require("@/assets/team__logos/vitality__2022.png"),
      }
    ],
    date: ["2018-10-08", "present"],
    jerseys: [
      
    ]
  },
  {
    id: 13,
    names: ["Liquid", "Team Liquid"],
    logo: [
      {
        year: 2025,
        img: require("@/assets/team__logos/teamliquid__2025.png"),
      },
      {
        year: 2021,
        img: require("@/assets/team__logos/teamliquid__2021.png"),
      },
      {
        year: 2019,
        img: require("@/assets/team__logos/teamliquid__2019.png"),
      },
      {
        year: 2018,
        img: require("@/assets/team__logos/teamliquid__2018.png"),
      },
      {
        year: 2015,
        img: require("@/assets/team__logos/teamliquid__2015.png"),
      },
    ],
    date: ["2015-1-13", "present"],
    jerseys: [
      {
        info: {year: 2023, order: 1},
        img: require("@/assets/teams__jerseys/liquid__jersey__2023-1.png")
      },
      {
        info: {year: 2021, order: 2},
        img: require("@/assets/teams__jerseys/liquid__jersey__2021-2.png")
      },
      {
        info: {year: 2021, order: 1},
        img: require("@/assets/teams__jerseys/liquid__jersey__2021-1.png")
      },
      {
        info: {year: 2020, order: 2},
        img: require("@/assets/teams__jerseys/liquid__jersey__2020-2.png")
      },
      {
        info: {year: 2018, order: 1},
        img: require("@/assets/teams__jerseys/liquid__jersey__2018-1.png")
      },
      {
        info: {year: 2017, order: 1},
        img: require("@/assets/teams__jerseys/liquid__jersey__2017-1__2sides.png")
      },
    ]
  },
  {
    id: 14,
    names: ["Ninja in Pyjamas", "NiP"],
    logo: [
      {
        year: 2021,
        img: require("@/assets/team__logos/nip__2021.png"),
      },
      {
        year: 2016,
        img: require("@/assets/team__logos/nip__2016.png"),
      }
    ],
    date: ["2000-06-??", "present"],
    jerseys: [
      
    ]
  },
  {
    id: 15,
    names: ["Virtus.pro", "VP"],
    logo: [
      {
        year: 2014,
        img: require("@/assets/team__logos/virtuspro__2014.png"),
      },
    ],
    date: ["2003-11-??", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 16,
    names: ["Fnatic"],
    logo: [
      {
        year: 2020,
        img: require("@/assets/team__logos/fnatic__2020.png"),
      },
      {
        year: 2013,
        img: require("@/assets/team__logos/fnatic__2013.png"),
      },
    ],
    date: ["2005-06-25", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 17,
    names: ["MOUZ", "mousesports"],
    logo: [
      {
        year: 2021,
        img: require("@/assets/team__logos/mouz__2021.png"),
      },
      {
        year: 2012,
        img: require("@/assets/team__logos/mousesports__2012.png"),
      },
    ],
    date: ["2002-03-24", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 18,
    names: ["Spirit", "Team Spirit"],
    logo: [
      {
        year: 2023,
        img: require("@/assets/team__logos/spirit__2023.png"),
      },

    ],
    date: ["2016-06-09", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 19,
    names: ["Falcons"],
    logo: [
      {
        year: 2022,
        img: require("@/assets/team__logos/falcons__2022.png"),
      },

    ],
    date: ["2016-06-09", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 20,
    names: ["The Mongolz"],
    logo: [
      {
        year: 2023,
        img: require("@/assets/team__logos/themongolz__2023.png"),
      },

    ],
    date: ["2015-07-17", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 21,
    names: ["Aurora"],
    logo: [
      {
        year: 2025,
        img: require("@/assets/team__logos/aurora__2025.png"),
      },

    ],
    date: ["2022-12-05", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 22,
    names: ["GamerLegion"],
    logo: [
      {
        year: 2022,
        img: require("@/assets/team__logos/gamerlegion__2022.png"),
      },

    ],
    date: ["2019-03-29", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 23,
    names: ["HEROIC"],
    logo: [
      {
        year: 2023,
        img: require("@/assets/team__logos/heroic__2023.png"),
      },

    ],
    date: ["2016-08-26", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 24,
    names: ["Astralis"],
    logo: [
      {
        year: 2016,
        img: require("@/assets/team__logos/astralis__2016.png"),
      },

    ],
    date: ["2016-01-18", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 25,
    names: ["Complexity", "CoL"],
    logo: [
      {
        year: 2021,
        img: require("@/assets/team__logos/complexity__2021.png"),
      },
      {
        year: 2020,
        img: require("@/assets/team__logos/complexity__2020.png"),
      },
      {
        year: 2025,
        img: require("@/assets/team__logos/complexity__2025.png"),
      },
    ],
    date: ["2004-??-??", "present"],
    jerseys: [
      {
        info: { year: 2021, order: 1 },
        img: require("@/assets/teams__jerseys/complexity__jersey__2021-2.png")
      }
    ]
  },
  {
    id: 26,
    names: ["Legacy"],
    logo: [
      {
        year: 2023,
        img: require("@/assets/team__logos/legacy__2023.png"),
      },
    ],
    date: ["2023-08-15", "present"],
    jerseys: [
      {
        info: { year: 2023, order: 1 },
        img: null,
      },
    ]
  },
  {
    id: 27,
    names: ["Tyloo"],
    logo: [
      {
        year: 2025,
        img: require("@/assets/team__logos/tyloo__2025.png"),
      },
    ],
    date: ["2010-??-??", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 28,
    names: ["BIG", "Berlim International Gaming"],
    logo: [
      {
        year: 2017,
        img: require("@/assets/team__logos/big__2017.png"),
      },
    ],
    date: ["2017-01-02", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 29,
    names: ["OG"],
    logo: [
      {
        year: 2019,
        img: require("@/assets/team__logos/og__2019.png"),
      },
    ],
    date: ["2019-12-04", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 30,
    names: ["ENCE"],
    logo: [
      {
        year: 2020,
        img: require("@/assets/team__logos/ence__2020.png"),
      },
      {
        year: 2013,
        img: require("@/assets/team__logos/ence__2013.png"),
      },
    ],
    date: ["2013-04-13", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 31,
    names: ["Cloud9", "C9"],
    logo: [
      {
        year: 2014,
        img: require("@/assets/team__logos/cloud9__2014.png"),
      },

    ],
    date: ["2014-08-01", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 32,
    names: ["Tempo Storm"],
    logo: [
      {
        year: 2015,
        img: require("@/assets/team__logos/tempostorm__2015.png"),
      },
    ],
    date: ["2015-03-31", "present"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 33,
    names: ["Immortals"],
    logo: [
      {
        year: 2016,
        img: require("@/assets/team__logos/immortals__2016.png"),
      },
    ],
    date: ["2016-06-01", "present"],
    jerseys: [
      {
        info: { year: 2017, order: 1 },
        img: require("@/assets/teams__jerseys/immortals__jersey__2016-1.png"),
      },
      {
        info: { year: 2016, order: 1 },
        img: require("@/assets/teams__jerseys/immortals__jersey__2016-1.png"),
      },
    ]
  },
  {
    id: 34,
    names: ["Last Dance"],
    logo: [
      {
        year: 2021,
        img: null,
      },
    ],
    date: ["2021-11-8", "2022-1-18"],
    jerseys: [
      {
        info: { year: 2021, order: 0 },
        img: null,
      }
    ]
  },
  {
    id: 35,
    names: ["Godsent"],
    logo: [
      {
        year: 2021,
        img: require("@/assets/team__logos/godsent__2021.png"),
      },
    ],
    date: ["2016-04-04", "2025-02-17"],
    jerseys: [
      {
        info: { year: 2021, order: 2 },
        img: require("@/assets/teams__jerseys/godsent__jersey__2021-2.png")
      },
      {
        info: { year: 2021, order: 1 },
        img: require("@/assets/teams__jerseys/godsent__jersey__2021-1.png")
      }
    ]
  },
  {
    id: 36,
    names: ["NTC"],
    logo: [
      {
        year: 2018,
        img: require("@/assets/team__logos/ntc__2018.png"),
      },
    ],
    date: ["2015-07-21", "2018-08-22"],
    jerseys: [
      {
        info: {year: 2024, order: 1},
        img: null,
      },
    ]
  },
  {
    id: 37,
    names: ["100 Thieves"],
    logo: [
      {
        year: 2018,
        img: require("@/assets/team__logos/100thieves__2018.png"),
      },
    ],
    date: ["2016-04-04", "2025-02-17"],
    jerseys: [
      {
        info: { year: 2024, order: 1 },
        img: null,
      },
    ]
  },
  {
    id: 38,
    names: ["Fluxo"],
    logo: [
      {
        year: 2022,
        img: require("@/assets/team__logos/fluxo__2022.png"),
      },
    ],
    date: ["2022-08-09", "PRESENT"],
    jerseys: [
      {
        info: { year: 2022, order: 1 },
        img: require("@/assets/teams__jerseys/fluxo__jersey__2022-1.png"),
      },
    ]
  },
  {
    id: 39,
    names: ["BOOM"],
    logo: [
      {
        year: 2020,
        img: require("@/assets/team__logos/boom__2020.png"),
      },
    ],
    date: ["2016-12-14", "2021-01-15"],
    jerseys: [
      {
        info: { year: 2020, order: 1 },
        img: require("@/assets/teams__jerseys/boom__jersey__2020-1.png"),
      },
    ]
  },
  {
    id: 40,
    names: ["INTZ"],
    logo: [
      {
        year: 2015,
        img: require("@/assets/team__logos/intz__2015.png"),
      },
    ],
    date: ["2015-11-20", "PRESENT"],
    jerseys: [
      {
        info: { year: 2018, order: 1 },
        img: null,
      },
    ] 
  },
  {
    id: 41,
    names: ["G3X", "g3nerationX"],
    logo: [
      {
        year: 2001,
        img: require("@/assets/team__logos/g3x__2001.png"),
      },
    ],
    date: ["2015-10-16", "PRESENT"],
    jerseys: [
      {
        info: { year: 2018, order: 1 },
        img: require("@/assets/teams__jerseys/boom__jersey__2020-1.png"),
      },
    ] 
  },
  {
    id: 42,
    names: ["KaBuM.TD"],
    logo: [
      {
        year: 2014,
        img: require("@/assets/team__logos/kabum.td__2014.png"),
      },
    ],
    date: ["2014-11-05", "2015-02-24"],
    jerseys: [
      {
        info: { year: 2014, order: 1 },
        img: require("@/assets/teams__jerseys/boom__jersey__2020-1.png"),
      },
    ] 
  },
  {
    id: 43,
    names: ["Keyd Stars"],
    logo: [
      {
        year: 2015,
        img: require("@/assets/team__logos/keydstars__2015.png"),
      },
    ],
    date: ["2014-11-05", "2015-02-24"],
    jerseys: [
      {
        info: { year: 2014, order: 1 },
        img: require("@/assets/teams__jerseys/boom__jersey__2020-1.png"),
      },
    ] 
  },
  {
    id: 44,
    names: ["O Plano"],
    logo: [
      {
        year: 2022,
        img: require("@/assets/team__logos/oplano__2022.png"),
      },
      {
        year: 2021,
        img: require("@/assets/team__logos/oplano__2021.png"),
      },
    ],
    date: ["2014-11-05", "2015-02-24"],
    jerseys: [
      {
        info: { year: 2024, order: 1 },
        img: null,
      },
    ] 
  },
  {
    id: 45, // incompleto
    names: ["Movistar Riders"],
    logo: [
      {
        year: 0,
        img: null,
      },
      
    ],
    date: ["0000-00-00", "0000-00-00"],
    jerseys: [
      {
        info: { year: 0, order: 0 },
        img: null,
      },
    ] 
  },
  {
    id: 46, // incompleto
    names: ["Dexterity Team"],
    logo: [
      {
        year: 0,
        img: null,
      },
      
    ],
    date: ["0000-00-00", "0000-00-00"],
    jerseys: [
      {
        info: { year: 0, order: 0 },
        img: null,
      },
    ] 
  },
  {
    id: 47,
    names: ["ODDIK"],
    logo: [
      {
        year: 2023,
        img: require("@/assets/team__logos/oddik__2023.png"),
      },
    ],
    date: ["2014-11-05", "2015-02-24"],
    jerseys: [
      {
        info: { year: 2024, order: 1 },
        img: null,
      },
    ] 
  },
  {
    id: 48,
    names: ['Evil Geniuses', 'EG'],
    logo: [
      {
        year: 2020,
        img: require("@/assets/team__logos/EvilGeniuses__2020-1.png"),
      },
      {
        year: 2019,
        img: require("@/assets/team__logos/EvilGeniuses__2019-1.png"),
      },
      {
        year: 2017,
        img: require("@/assets/team__logos/EvilGeniuses__2017-1.png"),
      },
    ],
    date: [],
    jerseys: [
      {
        info: { year: 2020, order: 1 },
        img: require("@/assets/teams__jerseys/EvilGeniuses__jersey__2020-1.png"),
      },
      {
        info: { year: 2019, order: 2 },
        img: require("@/assets/teams__jerseys/EvilGeniuses__jersey__2019-2__2sides.png"),
      },
      {
        info: { year: 2019, order: 1 },
        img: require("@/assets/teams__jerseys/EvilGeniuses__jersey__2019-1__2sides.png"),
      },
    ]
  },
  {
    id: 49,
    names: ['NRG'],
    logo: [
      {
        year: 2019,
        img: require("@/assets/team__logos/NRG__2019-1.png"),
      },
    ],
    date: [],
    jerseys: [

    ]
  },
  
];

export default Teams;
