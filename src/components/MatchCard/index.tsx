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
            w-100 h-40 flex bg-(--bg-secondary) p-1
            xs:w-100  xs:bg-yellow-300
            sm:w-75 sm:bg-red-400
            md:w-85 md:bg-blue-400
            lg:w-85 lg:bg-green-400
            xl:w-85 xl:bg-fuchsia-400
            2xl:w-90 2xl:bg-gray-600
            
            "
            onClick={() => { navigate(`/matches/${matchData.slug}`) }}
        >
            <div
                className="w-1/4 h-38 flex flex-col justify-evenly items-center p-1 bg-amber-300
                sm:
                "
            >
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
                    className="relative z-10 flex flex-col items-center">
                    <p className='text-base font-semibold text-(--glass-text-color) text-shadow-(--glass-text-shadow)'>
                        {matchData.date}
                    </p>
                    <p className='text-center text-xs text-(--glass-text-color) text-shadow-(--glass-text-shadow)'>
                        {matchData.tournament}
                    </p>
                </div>

            </div>

            <div
                className="w-1/4 h-38 flex flex-col justify-evenly items-center p-1 bg-amber-300
                sm:
                "
            >
                <img
                    className="h-full w-20 object-contain "
                    src={trIcon}
                    alt=""
                />
                <div className="text-center font-semibold text-xs whitespace-pre-line bg-red-500">{matchData.teams[1]}</div>
                <div className="text-center font-semibold">{matchData.score[1]}</div>
            </div>
        </div>
    )
};

export default MatchCard;