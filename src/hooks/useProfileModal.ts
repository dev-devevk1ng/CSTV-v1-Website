/* 
    18 Dec 2025
*/

import { useState } from "react";

export const useProfileModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(prev => !prev);

  return { isOpen, open, close, toggle };
};