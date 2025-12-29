/*
    24 Dec 2025
    made by chatGPT
*/

import type { Match } from "@/types/match";
import { Matches, Categories } from "@/data/matches.mock";

export const MatchService = {
  async getAll(): Promise<Match[]> {
    return Matches;
  },

  async getBySlug(slug: string) {
    return Matches.find(match => match.slug === slug);
  }
};

export const CategoriesService = {
  async getAll() {
    return Categories
  }
}