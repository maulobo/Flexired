import React, { useEffect, useRef } from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
  const letters = "FLEXIRED".split("");
  const barRef = useRef(null);

  useEffect(() => {
    const animateProgressBar = () => {
      const halfTime = 750; // 0.75 segundos para la primera mitad
      const fullTime = 1500; // 1.5 segundos para la segunda mitad

      barRef.current.style.width = "0";
      barRef.current.style.transition = `width ${halfTime}ms ease-in-out`;

      setTimeout(() => {
        barRef.current.style.width = "50%";
        barRef.current.style.transition = `width ${fullTime}ms ease-in-out`;
      }, halfTime);

      setTimeout(() => {
        barRef.current.style.width = "100%";
      }, halfTime + fullTime);
    };

    animateProgressBar();
  }, []);

  return (
    <div className={styles.loader}>
      <div className={styles.text}>
        {letters.map((letter, index) => (
          <span
            key={index}
            className={styles.letter}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className={styles["bar-container"]}>
        <div ref={barRef} className={styles.bar}></div>
      </div>
    </div>
  );
};

export default Loader;
