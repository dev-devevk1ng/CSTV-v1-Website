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
        <div className="
            w-120 h-40 flex bg-(--bg-secondary) p-1
            
            sm:w-60 sm:bg-amber-800
            md:w-60 md:bg-amber-800
            lg:w-60 lg:bg-amber-800
            "
            onClick={() => { navigate(`/matches/${matchData.slug}`) }}
        >
            <div className="flex flex-col justify-evenly items-center w-35 h-38 p-1">
                <img
                    className="h-full w-20 object-contain "
                    src={ctIcon}
                    alt=""
                />
                <div className="flex justify-center font-semibold text-sm">{matchData.teams[0]}</div>
                <div className='flex justify-center font-semibold'>{matchData.score[0]}</div>
            </div>

            <div
                style={{ backgroundImage: `url(${tournamentIcon})` }}
                className='relative flex flex-col justify-center items-center gap-2 p-1 w-50 bg-center bg-no-repeat bg-size-[8rem_auto]'>

                <div
                    className="
                    absolute inset-0
                    bg-(--glass-bg)
                    backdrop-blur-xs
                    "
                />

                <div
                    className="relative z-10 flex flex-col items-center">
                    <p className='text-base font-semibold text-(--glass-text-color) text-shadow-(--glass-text-shadow)'>
                        {matchData.date}
                    </p>
                    <p className='text-sm text-(--glass-text-color) text-shadow-(--glass-text-shadow)'>
                        {matchData.tournament}
                    </p>
                </div>

            </div>

            <div className="flex flex-col justify-evenly items-center w-35 h-38 p-1 ">
                <img
                    className="h-full w-20 object-contain "
                    src={trIcon}
                    alt=""
                />
                <div className="flex justify-center font-semibold text-sm">{matchData.teams[1]}</div>
                <div className='flex justify-center font-semibold'>{matchData.score[1]}</div>
            </div>
        </div>
    )
};

export default MatchCard;