/*
  Date 18 Dec 2025
*/


import { NavLink } from "react-router-dom";

// Themes Styles
import styles from "@/components/NavigationBar/styles.module.css";

// Modal
import { ThemeModal } from "@/components/Modal/ThemeModal";
import { useThemeModal } from "@/hooks/useThemeModal"

// Sidebar
import { useSidebar } from "@/contexts/sidebar/useSidebar";


import navbarIcon from "@/assets/cs2-favicon.png";

import { FiSettings } from "react-icons/fi";
import { MdMenu } from "react-icons/md";


const NavigationBar = () => {

    const {
        isOpen: isThemeOpen,
        open: openTheme,
        close: closeTheme,
    } = useThemeModal();

    const {
        openSidebar: openSidebar
    } = useSidebar()

    return (
        <>
            <nav className="w-full h-10 flex items-center mb-2">

                <img className="w-10 h-10" src={navbarIcon} />

                <ul
                    className="w-full h-10 flex justify-evenly bg-(--bg-secondary)">
                    <li
                        className="
                        h-10 flex items-center cursor-pointer font-semibold text-xs
                        sm:text-sm 
                        md:text-base 
  
                        "
                    >
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li
                        className="
                        h-10 flex items-center cursor-pointer font-semibold text-xs
                        sm:text-sm 
                        md:text-base
                        
                        "
                    >
                        <NavLink to="/matches">Matches</NavLink>
                    </li>
                    <li
                        className="
                        h-10 flex items-center cursor-pointer font-semibold text-xs 
                        sm:text-sm 
                        md:text-base
                        
                        "
                    >
                        <NavLink to="/tournaments">Events</NavLink>
                    </li>
                    <li
                        className="
                        h-10 flex items-center cursor-pointer font-semibold text-xs 
                        sm:text-sm 
                        md:text-base
                        
                        "
                    >
                        <NavLink to="/players">Players</NavLink>
                    </li>
                    <li
                        className="
                        h-10 flex items-center cursor-pointer font-semibold text-xs 
                        sm:text-sm 
                        md:text-base
                        
                        "
                    >
                        <NavLink to="/teams">Teams</NavLink>
                    </li>

                    <li
                        className="
                        h-10 flex items-center cursor-pointer font-semibold text-xs 
                        sm:text-sm 
                        md:text-base
                        
                        "
                    >
                        <button className="text-(--text-primary)" onClick={openTheme}>
                            <FiSettings className={styles.ThemeIcon} />

                        </button>
                    </li>

                    <li
                        className="
                        h-10 flex items-center cursor-pointer font-semibold text-xs 
                        sm:text-sm 
                        md:text-base
                        
                        "
                    >
                        <button className="text-(--text-primary)" onClick={openSidebar}>
                            <MdMenu className={styles.ThemeIcon} />
                        </button>
                    </li>


                </ul>

            </nav>

            <ThemeModal
                isOpen={isThemeOpen}
                onClose={closeTheme}
            />

        </>

    )
}

export default NavigationBar;