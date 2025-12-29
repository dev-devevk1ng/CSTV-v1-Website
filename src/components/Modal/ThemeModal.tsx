/*
  Date 26 Dec 2025
*/

import { useTheme } from '@/contexts/theme/useTheme';

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeModal = ({ isOpen, onClose }: ThemeModalProps) => {
  
  const { 
    //theme, 
    setTheme 
  } = useTheme();

  if (!isOpen) return null;

  return (
    <div 
      className="flex items-center justify-center fixed inset-0 bg-black/45 z-100" 
      onClick={onClose}>
      <div
        className="
          flex flex-col items-center w-80 h-80 p-8 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.158)] bg-[var(--bg-secondary)] text-(--text)
          border-2 border-(--border-color)
        " 
        
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex w-full h-1/10 items-center justify-between ">
          <h3 className="font-bold">Settings</h3>
          <button 
            className="font-bold"
            onClick={onClose}
          >
            ✕
          </button>
        </header>

        <div className="h-9/10 mt-5">
          
          <ul className="flex flex-col gap-2">
            <h4 className='font-bold'>themes</h4>
            <li>
              <button
                onClick={() => {setTheme('light')}}
              >
                Light
              </button>
            </li>
            <li>
              <button
                onClick={() => {setTheme('dark')}}
              >
                Dark
              </button>
            </li>
            <li>
              <button
                onClick={() => {setTheme('blast-pro-series')}}
              >
                BLAST Pro Series
              </button>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};