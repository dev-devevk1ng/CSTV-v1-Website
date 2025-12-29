/*
  Date 19 Dec 2025
*/
/*
  page event's component
*/

import { useNavigate } from 'react-router-dom';

import type React from 'react';
import styles from './styles.module.css';
//import tournamentsData from '@/databaseFake/events';

import banner from '@/assets/tournaments/pgl_major_stockholm_2021_banner.jpg';
import countryFlag from "@/assets/country__logos/SE.png";


type TournamentTypes = {
  banner: React.ReactNode;
  title: string;
  location: string;
  slug: string;
}

const TournamentCard = ({title, location, slug}: TournamentTypes) => {

  const navigate = useNavigate();

  return (
    <div 
      className={styles.cardContainer}
      onClick={() => {
        navigate(`/tournaments/${slug}`);
      }}
    >
      {/* View 1 - Banner */}
      <img className={styles.tournanmentBanner} 
        src={banner} alt="Tournament Banner"
      /> 
      {/* View 2 - Tittle, Location */}
      <div className={styles.view2}>
        <h2 className={styles.tittle}>{title}</h2>
        <div className={styles.locationContainer}>
          <img className={styles.countryFlag}
            src={countryFlag} alt="Country Flag"
          />
          <div className={styles.locationText}>
            {location}
          </div>
        </div>
      </div>
      {/* View 3 - Overview */}
      <div className={styles.view3}>
        <div className={styles.overviewContent}>
          <div className={styles.Value}>26 Oct 2021 - 07 Nov 2021</div>
          <div className={styles.Label}>Date</div> 
        </div>
        <div className={styles.overviewContent}>
          <div className={styles.Value}>$2,000,000</div>
          <div className={styles.Label}>Prize Pool</div>
        </div>
        <div className={styles.overviewContent}>
          <div className={styles.Value}>24</div>
          <div className={styles.Label}>Teams</div>
        </div>
      </div>
    </div>
  )

}

export default TournamentCard;
