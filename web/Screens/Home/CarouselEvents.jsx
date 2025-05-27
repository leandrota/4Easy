import React, { useState } from 'react';
import styles from './CarouselEvents.module.css';

const CarouselEvents = ({ events }) => {

  if (!events || events.length === 0) {
    return <div className={styles.noEvents}>Nenhum evento disponível</div>;
  }
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const getAdjacentIndex = (offset) => {
    return (currentIndex + offset + events.length) % events.length;
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.navButton} onClick={prevSlide} aria-label="Slide anterior">
        &lt;
      </button>
      
      <div className={styles.carousel}>
        {/* Slide anterior */}
        <div className={`${styles.slide} ${styles.leftSlide}`}>
          <div className={styles.imageWrapper}>
            <img 
              src={events[getAdjacentIndex(-1)].image} 
              alt={events[getAdjacentIndex(-1)].alt} 
              className={styles.slideImage}
            />
          </div>
          <div className={styles.slideInfo}>
            <h3>{events[getAdjacentIndex(-1)].nome}</h3>
          </div>
        </div>

        {/* Slide atual */}
        <div className={`${styles.slide} ${styles.centerSlide}`}>
          <div className={styles.imageWrapper}>
            <img 
              src={events[currentIndex].image} 
              alt={events[currentIndex].alt} 
              className={styles.slideImage}
            />
          </div>
          <div className={styles.slideInfo}>
            <h3>{events[currentIndex].nome}</h3>
            <p>{events[currentIndex].descricao}</p>
          </div>
        </div>

        {/* Próximo slide */}
        <div className={`${styles.slide} ${styles.rightSlide}`}>
          <div className={styles.imageWrapper}>
            <img 
              src={events[getAdjacentIndex(1)].image} 
              alt={events[getAdjacentIndex(1)].alt} 
              className={styles.slideImage}
            />
          </div>
          <div className={styles.slideInfo}>
            <h3>{events[getAdjacentIndex(1)].nome}</h3>
          </div>
        </div>
      </div>

      <button className={styles.navButton} onClick={nextSlide} aria-label="Próximo slide">
        &gt;
      </button>
    </div>
  );
};

export default CarouselEvents;   