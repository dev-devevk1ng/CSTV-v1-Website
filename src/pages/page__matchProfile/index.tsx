/*
    Date 24 Dec 2025
*/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Match } from "@/types/match";
import { MatchService } from "@/services/match.service";

import styles from './styles.module.css';


const MatchProfile = () => {

    const { matchSlug } = useParams();
    const [match, setMatch] = useState<Match | null>(null);

    useEffect(() => {

        if (typeof matchSlug !== "string") return;

        const loadMatch = async () => {
            const data = await MatchService.getBySlug(matchSlug);
            setMatch(data ?? null);
        };

        loadMatch();
    }, [matchSlug]);

    console.log(match);

    return (
        <section className={styles.container}>
            <div>Match Profile Page</div>
            <div>{match?.teams[0]}</div>
            
        </section>
    )
};

export default MatchProfile;