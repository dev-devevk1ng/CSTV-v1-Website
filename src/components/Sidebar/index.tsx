/*
    Date 29 Dec 2025
*/

/*
interface NavbarOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}
*/

import { useSidebar } from "@/contexts/sidebar/useSidebar"

import userIcon1 from "../../../public/user-icon-1.jpg"
import { MdLogout } from "react-icons/md";

const NavbarOptions = () => {

    console.log('sidebar is open')

    const {
        isOpen: isOpen,
        closeSidebar: close,
    } = useSidebar();

    if (!isOpen) return null;

    return (
        <div 
            className="fixed z-20 inset-0 w-full min-h-full bg-black/45"
            onClick={() => close()}
        >
            <div className="w-80 h-full flex flex-col items-center p-2 bg-(--bg-primary)">
                <div className="min-w-full h-min flex justify-between items-center p-1 bg-blue-300">
                    <div className="w-full font-semibold text-lg text-(--text-primary) bg-red-300">CSTV v1</div>
                    <button 
                        className="font-semibold text-2xl text-(--text-primary)

                        " 
                        onClick={() => close()}
                    >
                        X
                    </button>
                </div>
                <div
                    className="w-full h-20 flex jus items-center gap-2"
                >
                    <img 
                        className="max-h-15 w-1/6 rounded-full object-contain"
                        src={userIcon1} alt="userIcon" 
                    />
                    <div
                        className="w-4/6 flex flex-col bg-amber-950"
                    >
                        <div className="font-semibold text-(--text-primary)">username</div>
                        <div className="font-semibold text-(--text-primary)">name@email.com</div>
                    </div>
                    <MdLogout className="w-1/6 text-2xl bg-amber-300"/>
                </div>
                <div
                    className="w-full h-auto bg-red-300"
                >

                </div>
                <div
                    className="w-full h-auto bg-blue-300"
                >

                </div>
            </div>
        </div>
    )
}

export default NavbarOptions;