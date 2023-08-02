import Image from "next/image";
import React from "react";
import style from "./eleginos.module.scss";

const Eleginos = () => {
  const elegirnosCards = [
    {
      id: 1,
      image: "",
      alt: "",
      h2: "lorem",
      h3: " Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      id: 2,
      image: "",
      alt: "",
      h2: "lorem",
      h3: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      id: 3,
      image: "",
      alt: "",
      h2: "lorem",
      h3: "Lorem ipsum dolor sit amet, consectetur.",
      stylee: style.styleDif,
    },
  ];

  return (
    <div className={style.container}>
      <main className={style.containerMain}>
        <h2 className={style.subtitulo}>
          ¿Por qué elegir nuestro servicio de internet?
        </h2>
        <div id="ofertas" className={style.cardsContainer}>
          {elegirnosCards.map(({ h2, h3, image, alt }) => (
            <article className={style.cards}>
              <Image src={image} alt={alt} />
              <h2 className={style.fontSub}>{h2}</h2>
              <h3 className={style.fontSub}>{h3}</h3>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Eleginos;
