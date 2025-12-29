/*
  Date 18 Dec 2025
*/

//components
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/Sidebar"
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div className="flex flex-col p-2">
            <NavigationBar />
            <SideBar />
            <Outlet />
        </div>
    )
}

export default DefaultLayout;