/*
  Date 24 Dec 2025
*/

import { useState, useEffect } from 'react';

import MatchCard from '@/components/MatchCard';

// database
import type { Match } from '@/types/match';
import { MatchService, CategoriesService } from "@/services/match.service";


const Matches = () => {

    const [matches, setMatches] = useState<Match[]>([]);
    const [categories, setCategories] = useState<string[]>()

    useEffect(() => {
        MatchService.getAll().then(data => setMatches(data));
        CategoriesService.getAll().then(data => setCategories(data))
    }, []);

    console.log(categories)

    return (
        <section
            className="min-w-full flex flex-col gap-1 

            "
        >
            <div
                className="min-w-full p-1 bg-(--bg-secondary)
                "
            >
                categories
            </div>
            {
                categories?.map((categorie) => {
                    return (
                        <div>
                            <div className="text-xs font-semibold p-0.5 ">{categorie}</div>
                            <div
                                className="w-full flex overflow-x-auto gap-5
                                "
                            >
                                {
                                    matches.map((match, index) => {
                                        if (match.date.split("-")[0] !== categorie) {
                                            console.log(match.date.split("-")[0])
                                            return null
                                        }

                                        return (
                                            <MatchCard
                                                key={index}
                                                matchData={match}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }   
        </section>
    )
}

export default Matches;