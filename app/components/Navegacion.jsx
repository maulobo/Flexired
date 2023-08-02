"use client";
import { Navbar } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import img from "../icon.png";
import styles from "./navegacion.module.scss";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import BVirtualScroll from "./BVirtualScroll";

const paginas = [
  {
    name: "Home",
    path: "/",
    id: "home", // ID de la sección correspondiente
  },
  {
    name: "Beneficios",
    path: "#beneficios",
    id: "beneficios", // ID de la sección correspondiente
  },
  {
    name: "Servicios",
    path: "#servicios",
    id: "servicios", // ID de la sección correspondiente
  },
  {
    name: "Ofertas",
    path: "#ofertas",
    id: "ofertas", // ID de la sección correspondiente
  },
  {
    name: "Contacto",
    path: "#contacto",
    id: "contacto", // ID de la sección correspondiente
  },
];

function ColorSchemesExample({ ref1 }) {
  useEffect(() => {
    const lenisScroll = new Lenis({
      lerp: 0.1,
    });

    lenisScroll.on("scroll", ScrollTrigger.update);

    const onTick = (time) => {
      lenisScroll.raf(time * 1000);
    };

    gsap.ticker.add(onTick);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(onTick);
      lenisScroll.off("scroll", ScrollTrigger.update);
      lenisScroll.destroy();
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    } else if (targetSection === null) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <BVirtualScroll />
      <Navbar
        isBordered
        variant="sticky"
        maxWidth="fluid"
        className={styles.navCont}
      >
        <Navbar.Toggle showIn="xs" className={styles.btnNav} />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        ></Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight-rounded"
        >
          {paginas.map((ruta) => (
            <Navbar.Link
              href={ruta.path}
              to={ruta.path}
              className={styles.navFont}
              onClick={(e) => handleNavClick(e, ruta.id)}
              key={ruta.id}
            >
              {ruta.name}
            </Navbar.Link>
          ))}
        </Navbar.Content>

        <Image src={img} width={45} height={30} />
        <Navbar.Collapse>
          {paginas.map((item, index) => (
            <Navbar.CollapseItem
              key={item.id}
              activeColor="warning"
              isActive={index === 0}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item.path}
              >
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
