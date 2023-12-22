"use client";
import React, { useEffect, useRef } from "react";
import DivAnimateB from "./animated/DivAnimateB";
import style from "./descubre.module.scss";
import MyButton2 from "./MyButton2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Descubre = () => {
  const phrase = "Descubre los mejores servicios para tu empresa";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();
  }, []);

  const refs = useRef([]);
  const container = useRef(null);

  const createAnimations = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: "none",
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 700px",
        end: `+=${window.innerHeight / 1.7}`,
        scrub: true,
      },
    });
  };

  const splitWords = () => {
    let body = [];
    phrase.split(" ").forEach((word, index) => {
      const letters = splitLetters(word);
      body.push(<p key={`word_${index}`}>{letters}</p>);
    });

    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span
          ref={(el) => {
            refs.current.push(el);
          }}
          key={`letter+${index}`}
        >
          {letter}
        </span>
      );
    });

    return letters;
  };

  return (
    <>
      <div ref={container} className={style.container}>
        <div className={style.apperas}>{splitWords()}</div>
        <main className={style.main}>
          <article className={style.box}>
            <DivAnimateB>
              <div className={style.boxes}>
                <h3>data</h3>
                <MyButton2 text="COTIZAR" />
              </div>
            </DivAnimateB>
          </article>
          <article className={style.box}>
            <DivAnimateB>
              <div className={style.box2}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt corporis quam ex consectetur rerum accusantium
                  aliquam! Necessitatibus debitis reiciendis, inventore cumque
                  velit, aliquam quisquam repudiandae facere assumenda illo
                  beatae.
                </p>
              </div>
            </DivAnimateB>
            <div className={style.box2}>
              <DivAnimateB>
                <div className={style.boxes}>
                  <h3>data</h3>
                  <MyButton2 text="COTIZAR" />
                </div>
              </DivAnimateB>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default Descubre;
