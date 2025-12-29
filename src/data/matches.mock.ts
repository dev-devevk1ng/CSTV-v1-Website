/*
  Date 18 Dec 2025
*/

import type { Match } from '@/types/match';

export const Matches: Match[] = [
    {
        id: 1,
        teams: ['G2', 'Ninjas in Pyjamas'],
        tournament: "PGL Major Stockholm 2021",
        date: "2021-11-04",
        slug: "g2-vs-ninjas-in-pyjamas-pgl-major-stockholm-2021-2021-11-04",
        score: [2, 0],
        mapsOverview: {
            bestOf: 3,
            mapList: [
                { name: 'Inferno', score: [16, 11], pickBy: 'Ninjas in Pyjamas' },
                { name: 'Mirage', score: [16, 11], pickBy: 'G2' },
                { name: 'Mirage', score: null, pickBy: 'decider' },
            ],
        },
        statsOverview: [
            {
                map: 'Inferno',
                winner: 'G2',
                team1: [
                    { player: 'NiKo', kills: 29, deaths: 19, adr: 111, rating: 1.54 },
                    { player: 'huNter-', kills: 21, deaths: 17, adr: 77, rating: 1.09 },
                    { player: 'nexa', kills: 14, deaths: 15, adr: 57, rating: 0.98 },
                    { player: 'JACKZ', kills: 14, deaths: 17, adr: 70, rating: 0.94 },
                    { player: 'amanek', kills: 15, deaths: 14, adr: 67, rating: 1.06 },
                ],
                team2: [
                    { player: 'REZ', kills: 17, deaths: 18, adr: 69, rating: 1.16 },
                    { player: 'dev1ce', kills: 18, deaths: 20, adr: 69, rating: 0.95 },
                    { player: 'Plopski', kills: 18, deaths: 17, adr: 85, rating: 1.13 },
                    { player: 'LNZ', kills: 11, deaths: 19, adr: 36, rating: 0.66 },
                    { player: 'hampus', kills: 17, deaths: 19, adr: 80, rating: 0.99 },

                ]
            },
            {
                map: 'Mirage',
                winner: 'G2',
                team1: [
                    { player: 'NiKo', kills: 22, deaths: 18, adr: 84, rating: 1.35 },
                    { player: 'huNter-', kills: 21, deaths: 13, adr: 84, rating: 1.31 },
                    { player: 'nexa', kills: 20, deaths: 13, adr: 70, rating: 1.30 },
                    { player: 'JACKZ', kills: 18, deaths: 76, adr: 81, rating: 1.20 },
                    { player: 'amanek', kills: 11, deaths: 11, adr: 46, rating: 0.98 },
                ],
                team2: [
                    { player: 'REZ', kills: 24, deaths: 20, adr: 85, rating: 1.17 },
                    { player: 'dev1ce', kills: 16, deaths: 17, adr: 63, rating: 0.92 },
                    { player: 'Plopski', kills: 11, deaths: 17, adr: 60, rating: 0.74 },
                    { player: 'LNZ', kills: 7, deaths: 16, adr: 62, rating: 0.68 },
                    { player: 'hampus', kills: 13, deaths: 22, adr: 61, rating: 0.66 },

                ]
            },
        ],
    },
    {
        id: 2,
        teams: ['IMPERIAL', 'Cloud9'],
        tournament: "PGL Major Antwerp 2022",
        date: "2022-05-16",
        slug: "imperial-vs-cloud9-pgl-major-antwep-2022-2022-05-16",
        score: [2, 1],
        mapsOverview: {
            bestOf: 3,
            mapList: [
                { name: 'Overpass', score: [25, 23], pickBy: 'IMPERIAL' },
                { name: 'Vertigo', score: [9, 16], pickBy: 'Cloud9' },
                { name: 'Mirage', score: [16, 3], pickBy: 'decider' },
            ],
        },
        statsOverview: [
            {
                map: 'Overpass',
                winner: 'IMPERIAL',
                team1: [
                    { player: "Gabriel 'FalleN' Toledo", kills: 35, deaths: 28, adr: 71, rating: 1.14 },
                    { player: "Fernando 'fer' Alvarenga", kills: 33, deaths: 29, adr: 78, rating: 1.14 },
                    { player: "Ricardo 'boltz' Prass", kills: 26, deaths: 28, adr: 76, rating: 0.98 },
                    { player: "Vinicius 'VINI' Figueiredo", kills: 31, deaths: 29, adr: 64, rating: 1.03 },
                    { player: "Lincoln 'fnx' Lau", kills: 20, deaths: 39, adr: 50, rating: 0.61 },
                ],
                team2: [
                    { player: "Dmitry 'sh1ro' Sokolov", kills: 37, deaths: 27, adr: 69, rating: 1.17 },
                    { player: "Sergey 'Ax1Le' Rykhtorov", kills: 36, deaths: 39, adr: 91, rating: 1.26 },
                    { player: "Abay 'HObbit' Khassenov", kills: 25, deaths: 30, adr: 58, rating: 0.83 },
                    { player: "Vladislav 'nafany' Gorshkov", kills: 31, deaths: 34, adr: 380, rating: 0.99 },
                    { player: "Timofey 'interz' Yakushin", kills: 23, deaths: 24, adr: 44, rating: 1.00 },

                ]
            },
            {
                map: 'Vertigo',
                winner: 'Cloud9',
                team1: [
                    { player: "Gabriel 'FalleN' Toledo", kills: 12, deaths: 18, adr: 60, rating: 0.81 },
                    { player: "Fernando 'fer' Alvarenga", kills: 21, deaths: 19, adr: 90, rating: 1.10 },
                    { player: "Ricardo 'boltz' Prass", kills: 11, deaths: 18, adr: 65, rating: 0.74 },
                    { player: "Vinicius 'VINI' Figueiredo", kills: 9, deaths: 23, adr: 52, rating: 0.46 },
                    { player: "Lincoln 'fnx' Lau", kills: 10, deaths: 17, adr: 53, rating: 0.71 },
                ],
                team2: [
                    { player: "Dmitry 'sh1ro' Sokolov", kills: 16, deaths: 10, adr: 62.9, rating: 1.25 },
                    { player: "Sergey 'Ax1Le' Rykhtorov", kills: 21, deaths: 15, adr: 87.2, rating: 1.28 },
                    { player: "Abay 'HObbit' Khassenov", kills: 23, deaths: 13, adr: 89.7, rating: 1.45 },
                    { player: "Vladislav 'nafany' Gorshkov", kills: 18, deaths: 13, adr: 78.3, rating: 1.24 },
                    { player: "Timofey 'interz' Yakushin", kills: 17, deaths: 13, adr: 83.2, rating: 1.23 },

                ]
            },
            {
                map: 'Mirage',
                winner: 'IMPERIAL',
                team1: [
                    { player: "Fernando 'fer' Alvarenga", kills: 25, deaths: 8, adr: 127.4, rating: 1.95 },
                    { player: "Vinicius 'VINI' Figueiredo", kills: 20, deaths: 9, adr: 107.2, rating: 1.66 },
                    { player: "Gabriel 'FalleN' Toledo", kills: 14, deaths: 6, adr: 83.9, rating: 1.49 },
                    { player: "Lincoln 'fnx' Lau", kills: 15, deaths: 6, adr: 56.6, rating: 1.29 },
                    { player: "Ricardo 'boltz' Prass", kills: 8, deaths: 12, adr: 66.1, rating: 0.95 },
                ],
                team2: [
                    { player: "Dmitry 'sh1ro' Sokolov", kills: 6, deaths: 16, adr: 34.8, rating: 0.38 },
                    { player: "Sergey 'Ax1Le' Rykhtorov", kills: 9, deaths: 16, adr: 64.6, rating: 0.76 },
                    { player: "Abay 'HObbit' Khassenov", kills: 7, deaths: 18, adr: 51.8, rating: 0.45 },
                    { player: "Vladislav 'nafany' Gorshkov", kills: 14, deaths: 15, adr: 85.5, rating: 1.05 },
                    { player: "Timofey 'interz' Yakushin", kills: 4, deaths: 17, adr: 38.2, rating: 0.38 },

                ]
            },
        ],
    },
    {
        id: 3,
        teams: ['GODSENT', 'Heroic'],
        tournament: "IEM Winter 2021",
        date: "2021-12-02",
        slug: "godsent-vs-heroic-iem-winter-2021-2021-12-02",
        score: [16, 13],
        mapsOverview: {
            bestOf: 3,
            mapList: [
                { name: 'Mirage', score: [16, 13], pickBy: 'decider' },
            ],
        },
        statsOverview: [
            {
                map: 'Mirage',
                winner: 'GODSENT',
                team1: [
                    { player: "João 'felps' Vasconcellos", kills: 21, deaths: 20, adr: 83.0, rating: 1.05 },
                    { player: "Epitacio 'TACO' de Melo", kills: 22, deaths: 20, adr: 81.5, rating: 1.12 },
                    { player: "Eduardo 'dumau' Wolkmer", kills: 16, deaths: 21, adr: 71.6, rating: 0.91 },
                    { player: "Bruno 'latto' Rebelatto", kills: 29, deaths: 17, adr: 79.8, rating: 1.27 },
                    { player: "Bruno 'b4rtiN' Câmara", kills: 13, deaths: 22, adr: 50.9, rating: 0.73 },
                ],
                team2: [
                    { player: "Casper 'cadiaN' Møller", kills: 14, deaths: 20, adr: 53.3, rating: 0.81 },
                    { player: "René 'TeSeS' Madsen", kills: 19, deaths: 21, adr: 69.7, rating: 0.89 },
                    { player: "Martin 'stavn' Lund", kills: 27, deaths: 21, adr: 110.0, rating: 1.53 },
                    { player: "Rasmus 'sjuush' Beck", kills: 22, deaths: 20, adr: 70.6, rating: 1.14 },
                    { player: "Ismail 'refrezh' Ali", kills: 17, deaths: 20, adr: 60.7, rating: 0.86 },
                ]
            },
        ],
    },
    {
        id: 4,
        teams: ['GODSENT', 'Heroic'],
        tournament: "IEM Winter 2021",
        date: "2021-12-02",
        slug: "godsent-vs-heroic-iem-winter-2021-2021-12-02",
        score: [16, 13],
        mapsOverview: {
            bestOf: 3,
            mapList: [
                { name: 'Mirage', score: [16, 13], pickBy: 'decider' },
            ],
        },
        statsOverview: [
            {
                map: 'Mirage',
                winner: 'GODSENT',
                team1: [
                    { player: "João 'felps' Vasconcellos", kills: 21, deaths: 20, adr: 83.0, rating: 1.05 },
                    { player: "Epitacio 'TACO' de Melo", kills: 22, deaths: 20, adr: 81.5, rating: 1.12 },
                    { player: "Eduardo 'dumau' Wolkmer", kills: 16, deaths: 21, adr: 71.6, rating: 0.91 },
                    { player: "Bruno 'latto' Rebelatto", kills: 29, deaths: 17, adr: 79.8, rating: 1.27 },
                    { player: "Bruno 'b4rtiN' Câmara", kills: 13, deaths: 22, adr: 50.9, rating: 0.73 },
                ],
                team2: [
                    { player: "Casper 'cadiaN' Møller", kills: 14, deaths: 20, adr: 53.3, rating: 0.81 },
                    { player: "René 'TeSeS' Madsen", kills: 19, deaths: 21, adr: 69.7, rating: 0.89 },
                    { player: "Martin 'stavn' Lund", kills: 27, deaths: 21, adr: 110.0, rating: 1.53 },
                    { player: "Rasmus 'sjuush' Beck", kills: 22, deaths: 20, adr: 70.6, rating: 1.14 },
                    { player: "Ismail 'refrezh' Ali", kills: 17, deaths: 20, adr: 60.7, rating: 0.86 },
                ]
            },
        ],
    },
    {
        id: 4,
        teams: ['GODSENT', 'Heroic'],
        tournament: "IEM Winter 2021",
        date: "2021-12-02",
        slug: "godsent-vs-heroic-iem-winter-2021-2021-12-02",
        score: [16, 13],
        mapsOverview: {
            bestOf: 3,
            mapList: [
                { name: 'Mirage', score: [16, 13], pickBy: 'decider' },
            ],
        },
        statsOverview: [
            {
                map: 'Mirage',
                winner: 'GODSENT',
                team1: [
                    { player: "João 'felps' Vasconcellos", kills: 21, deaths: 20, adr: 83.0, rating: 1.05 },
                    { player: "Epitacio 'TACO' de Melo", kills: 22, deaths: 20, adr: 81.5, rating: 1.12 },
                    { player: "Eduardo 'dumau' Wolkmer", kills: 16, deaths: 21, adr: 71.6, rating: 0.91 },
                    { player: "Bruno 'latto' Rebelatto", kills: 29, deaths: 17, adr: 79.8, rating: 1.27 },
                    { player: "Bruno 'b4rtiN' Câmara", kills: 13, deaths: 22, adr: 50.9, rating: 0.73 },
                ],
                team2: [
                    { player: "Casper 'cadiaN' Møller", kills: 14, deaths: 20, adr: 53.3, rating: 0.81 },
                    { player: "René 'TeSeS' Madsen", kills: 19, deaths: 21, adr: 69.7, rating: 0.89 },
                    { player: "Martin 'stavn' Lund", kills: 27, deaths: 21, adr: 110.0, rating: 1.53 },
                    { player: "Rasmus 'sjuush' Beck", kills: 22, deaths: 20, adr: 70.6, rating: 1.14 },
                    { player: "Ismail 'refrezh' Ali", kills: 17, deaths: 20, adr: 60.7, rating: 0.86 },
                ]
            },
        ],
    },

]
