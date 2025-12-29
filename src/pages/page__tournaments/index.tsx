/*
  Date 18 Dec 2025
*/

import styles from './styles.module.css';

import tournamentsData from '@/databaseFake/events';
import TournamentCard from '@/components/TournamentCard';

const Tournament = () => { 
    return (
        <section className={styles.container}>

            {
                /* Events List Component */
                tournamentsData.map((tournament) => (
                    <TournamentCard 
                        key={tournament.id}  
                        slug={tournament.slug}
                        banner={tournament.images.banner}
                        title={tournament.name}
                        location={tournament.overview.location[0]}
                    />
                ))
            }

        </section>
    )
}

export default Tournament;