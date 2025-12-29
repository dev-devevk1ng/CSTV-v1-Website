/*
  Date 24 Dec 2025

  ST Season 5 part 2
*/
/*
    first time with TailwindCSS
*/

import { useNavigate } from 'react-router-dom';

//import styles from './styles.module.css';
import type { Match } from '@/types/match';

type MatchCardProps = {
    matchData: Match;
}

// Temp
//import tournamentIcon from "@/assets/tournaments/esl_one_rio_major_2020__pic.jpg";
import tournamentIcon from "@/assets/tournaments/pgl_major_stockholm_2021_pic.jpg";
import ctIcon from '@/assets/cs-ct-icon.png'
import trIcon from '@/assets/cs-tr-icon.png'

const MatchCard = ({ matchData }: MatchCardProps) => {

    const navigate = useNavigate();

    return (
        <div 
            className="
            min-w-80 h-40 flex bg-(--bg-secondary) p-1

            xs:w-80 
            sm:w-80 
            md:w-80 
            lg:w-80 
            xl:w-80 
            2xl:w-80  
            
            "
            onClick={() => { navigate(`/matches/${matchData.slug}`) }}
        >
            <div
                className="w-1/4 h-38 flex flex-col justify-evenly gap-0
                
                "
            >
                <img
                    className="min-h-2/4 w-20 object-contain p-1"
                    src={ctIcon}
                    alt=""
                />
                <div 
                    className="min-h-1/4 flex justify-center items-center font-semibold text-xs 
                    "
                >
                    {matchData.teams[0]}
                </div>
                <div className='min-h-1/4 flex justify-center items-center font-semibo'>{matchData.score[0]}</div>
            </div>

            <div

                style={{ backgroundImage: `url(${tournamentIcon})` }}
                className="w-2/4 relative flex flex-col justify-center items-center gap-2 p-1 bg-center bg-no-repeat bg-size-[6rem_auto]
                sm:
                "
            >

                <div
                    className="
                    absolute inset-0
                    bg-(--glass-bg)
                    backdrop-blur-xs
                    "
                />

                <div
                    className="relative flex flex-col items-center">
                    <p 
                        className="
                        text-center font-semibold text-(--glass-text-color) text-shadow-(--glass-text-shadow) text-sm
                        
                        "
                    >
                        {matchData.date}
                    </p>
                    <p className='text-center text-xs text-(--glass-text-color) text-shadow-(--glass-text-shadow)'>
                        {matchData.tournament}
                    </p>
                </div>

            </div>

            <div
                className="w-1/4 h-38 flex flex-col justify-evenly gap-0
                
                "
            >
                <img
                    className="min-h-2/4 w-20 object-contain p-1"
                    src={trIcon}
                    alt=""
                />
                <div 
                    className="min-h-1/4 flex justify-center items-center text-center font-semibold text-xs
                    "
                >
                    {matchData.teams[1]}
                </div>
                <div className="min-h-1/4 flex justify-center items-center text-center font-semibold ">{matchData.score[1]}</div>
            </div>
        </div>
    )
};

export default MatchCard;