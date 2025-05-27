import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AlternativeHeader.module.css';

export default function AlternativeHeader() {
  return (
       <header className={styles.header}>
      <div className={styles.leftSection}>
        <Link to="home">
          <img
            src="../src/assets/Logo oficial.png"
            alt="Logo 4Easy"
            className={styles.logo}
          />
        </Link>
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.rightSection}>
        <h2>Sobre nós</h2>
      </div>
    </header>
                
  );

  
}