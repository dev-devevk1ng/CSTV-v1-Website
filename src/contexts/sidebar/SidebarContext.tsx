/*
    Date 29 Dec 2025
*/

import { createContext } from "react";

export type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);


