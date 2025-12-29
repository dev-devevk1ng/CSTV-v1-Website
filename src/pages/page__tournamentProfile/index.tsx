
/*
    Date 24 Dec 2025
*/

import { useParams } from "react-router-dom";

const TournamentProfile = () => {

    const { tournamentSlug } = useParams();

    return (
        <section>
            <div>Tournament Profile Page</div>
            <div>{tournamentSlug}</div>
        </section>
    )
};

export default TournamentProfile;