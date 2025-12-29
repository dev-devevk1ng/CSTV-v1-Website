/*
  Date 18 Dec 2025
*/

import { Outlet } from "react-router-dom";

import styles from "./DefaultLayout.module.css";
//components
import NavigationBar from "@/components/NavigationBar";

const DefaultLayout = () => {
    return (
        <div className={styles.defaultLayout}>
            <NavigationBar />
            <Outlet />
        </div>
    )
}

export default DefaultLayout;