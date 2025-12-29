/*
  Date 24 Dec 2025
*/

import { useState, useEffect } from 'react';

import MatchCard from '@/components/MatchCard';

// database
import type { Match } from '@/types/match';
import { MatchService } from "@/services/match.service";


const Matches = () => {

    const [matches, setMatches] = useState<Match[]>([]);

    useEffect(() => {
        MatchService.getAll().then(data => setMatches(data));
    }, []);

    return (
        <section
            className="flex flex-wrap justify-center gap-2.5
            xs:justify-between  
            sm:justify-between 
            md:justify-between 
            lg:justify-between 
            xl:justify-between 
            2xl:justify-between
            

            "
        >
            {
                matches.map((match) => {
                    return (
                        <MatchCard
                            key={match.id}
                            matchData={match}
                        />
                    )
                })
            }
        </section>
    )
}

export default Matches;