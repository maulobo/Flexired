import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "./BVirtualScroll.scss";

const BVirtualScroll = ({ scrollToSection }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

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

  return null;
};

export default BVirtualScroll;
