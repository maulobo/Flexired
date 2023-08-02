"use client";
import { useEffect, useRef } from "react";
import MyButton from "./MyButton";
import MyButton2 from "./MyButton2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import style from "./nuestrosServicios.module.scss";

const boxes = [
  {
    id: 1,
    info: "Data",
    buton: <MyButton text="PIDE AHORA" />,
  },
  {
    id: 2,
    info: "Data",
    buton: <MyButton2 text="PIDE AHORA" />,
    styless: style.card,
  },
  {
    id: 3,
    info: "Data",
    buton: <MyButton text="PIDE AHORA" />,
  },
];

const NuestrosServicios = () => {
  const phrase =
    "Nuestros servicios de Internet por Fibra Óptica adaptados a tus necesidades";

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
        markers: true,
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
    <div className={style.container} id="servicios">
      <section ref={container} className={style.h2}>
        <div className={style.apperas}>{splitWords()}</div>
      </section>
      <section className={style.h2}>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem
          tempore reprehenderit debitis cumque necessitatibus. Sequi, amet
          temporibus quas quam provident omnis atque facilis fuga accusamus odio
          dolor dolorum fugiat.
        </h4>
      </section>
      <section className={style.downBox}>
        {boxes.map(({ id, info, buton, styless }) => (
          <div className={style.child}>
            <div className={styless || style.boxes}>
              <h3 className={style.font}>{info}</h3>
              {buton}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default NuestrosServicios;
