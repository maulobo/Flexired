"use client";
import Cambiate from "./components/Cambiate";
import Descubre from "./components/Descubre";
import NuestrosServicios from "./components/NuestosServicios";
import styles from "./page.module.css";
import Beneficios from "./components/Beneficios";
import Eleginos from "./components/Eleginos";
import Alcance from "./components/Alcance";
import BlurCard from "./components/BlurCard";
import Contactanos from "./components/Contactanos";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import BVirtualScroll from "./components/BVirtualScroll";
import Loader from "./components/Loader";
import Navegacion from "./components/Navegacion";

export default function Home() {
  const [preloader, setpreloader] = useState(false);

  const [timer, setTimer] = useState(4);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setpreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: targetSection.offsetTop, autoKill: false },
        ease: "power2.out",
      });
    }
  };
  return (
    <>
      {preloader ? (
        <Loader />
      ) : (
        <>
          <Navegacion />
          <main className={styles.container}>
            <BVirtualScroll scrollToSection={handleNavClick} />
            <Cambiate />
            <Beneficios />
            <section style={{ backgroundColor: "#273069" }}>
              <NuestrosServicios />
              <Descubre />
              <Eleginos />
            </section>
            <section style={{ backgroundColor: "#ec661b" }}>
              <Alcance />
            </section>
            <BlurCard />
            <Contactanos />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}
