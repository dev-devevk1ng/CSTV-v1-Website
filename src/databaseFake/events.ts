/*
    18 Dec 2025
*/

/*
    {
        id: 1, // id do evento
        name: 'PGL Major Stockholm 2021', // nome do evento
        overview: {
            series: ['valve', 'PGL'], // criadora do evento
            date: ['2021-10-26', '2021-11-07'],
            location: ['Stockholm, Sweden', 'SE'],
            prizePool: 2000000,
            teams: 24,
            LiquidpediaTier: 'S-Tier',
            type: 'LAN',
            maps: ['Mirage', 'Inferno', 'Nuke', 'Overpass', 'Dust II', 'Vertigo', 'Ancient']
        }
    },
*/

const events = [
    {
        id: 1,
        name: 'PGL Major Stockholm 2021',
        slug: "pgl-major-stockholm-2021",
        overview: {
            series: ['PGL', 'Valve Corporation'],
            date: ['2021-10-26', '2021-11-07'],
            location: ['Stockholm, Sweden', 'SE'],
            prizePool: 2000000,
            teams: 24,
            LiquidpediaTier: 'S-Tier',
            type: 'LAN',
            maps: ['Mirage', 'Inferno', 'Nuke', 'Overpass', 'Dust II', 'Vertigo', 'Ancient'],
            stages: ['Challengers Stage', 'Legends Stage', 'Champions Stage'],
            game: 'CS:GO',
        },
        images: {
            banner: '',
        },
        teamsAttending: [
            {

            },
        ],
        playerMVP: {},
    },
    {
        id: 2,
        name: 'ESL One: Rio Major 2020',
        slug: "esl-one-rio-major-2020",
        overview: {
            series: ['ESL', 'Valve Corporation'],
            data: ['2020-11-09', '2020-11-22'],
            location: ['Rio de Janeiro, Brazil', 'BR'],
            prizePool: 2000000,
            teams: 24,
            LiquidpediaTier: 'S-Tier',
            type: 'LAN',
            maps: ['Mirage', 'Inferno', 'Nuke', 'Overpass', 'Dust II', 'Vertigo', 'Train'],
            stages: ['Challengers Stage', 'Legends Stage', 'Champions Stage'],
            game: 'CS:GO',
        },
        images: {
            banner: '',
        },
        teamsAttending: [
            {

            },
        ],
        playerMVP: {},
    }
];

export default events;