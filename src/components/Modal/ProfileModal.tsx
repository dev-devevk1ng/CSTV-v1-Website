/*
    18 Dec 2025
*/

import styles from "./ProfileModal.module.css";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <h3>Profile</h3>
          <button onClick={onClose}>✕</button>
        </header>

        <div className={styles.content}>
          <p>Daniel Malon</p>
          <p>danielmalon2003@email.com</p>

          <button className={styles.logout}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};