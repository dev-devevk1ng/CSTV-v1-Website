/*
  Date 18 Dec 2025
*/


import { NavLink } from "react-router-dom";

// Theme
import styles from "@/components/NavigationBar/styles.module.css";

// Modal
import { ProfileModal } from "@/components/Modal/ProfileModal";
import { useProfileModal } from "@/hooks/useProfileModal.ts";

import { ThemeModal } from "@/components/Modal/ThemeModal";
import { useThemeModal } from "@/hooks/useThemeModal"

import navbarIcon from "@/assets/cs2-favicon.png";
import { FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";


const NavigationBar = () => {

    const {
        isOpen: isProfileOpen,
        open: openProfile,
        close: closeProfile,
    } = useProfileModal();

    const {
        isOpen: isThemeOpen,
        open: openTheme,
        close: closeTheme,
    } = useThemeModal();

    return (
        <>
            <nav className={styles.navbar}>

                <img className={styles.Icon} src={navbarIcon} />

                <ul className={styles.PagesContainer}>
                    <li className={styles.PageContainer}>
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li className={styles.PageContainer}>
                        <NavLink to="/matches">Matches</NavLink>
                    </li>
                    <li className={styles.PageContainer}>
                        <NavLink to="/tournaments">Events</NavLink>
                    </li>
                    <li className={styles.PageContainer}>
                        <NavLink to="/players">Players</NavLink>
                    </li>
                    <li className={styles.PageContainer}>
                        <NavLink to="/teams">Teams</NavLink>
                    </li>

                    <li className={styles.PageContainer}>
                        <button className={styles.ThemeButton} onClick={openTheme}>
                            <FiSettings className={styles.ThemeIcon} />

                        </button>
                    </li>

                    <li className={styles.PageContainer}>
                        <button className={styles.ProfileButton} onClick={openProfile}>
                            <FaUserCircle size={30} />
                        </button>
                    </li>

                </ul>

            </nav>

            <ProfileModal
                isOpen={isProfileOpen}
                onClose={closeProfile}
            />
            <ThemeModal
                isOpen={isThemeOpen}
                onClose={closeTheme}
            />

        </>

    )
}

export default NavigationBar;