/*
    24 Dec 2025
    made by chatGPT
*/

export type PlayerStats = {
  player: string;
  kills: number;
  deaths: number;
  adr: number;
  rating: number;
};

export type MapStats = {
  map: string;
  winner: string;
  team1: PlayerStats[];
  team2: PlayerStats[];
};

export type MapsOverview = {
  bestOf: number;
  mapList: object[]
};

export type Match = {
  id: number;
  teams: [string, string]; // exatamente 2 times
  tournament: string;
  date: string;
  slug: string;
  score: [number, number];
  mapsOverview: MapsOverview;
  statsOverview: MapStats[];
};