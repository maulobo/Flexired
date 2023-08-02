"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "./Model";

const Scene = () => {
  return (
    <Canvas
      style={{ cursor: "pointer" }}
      camera={{
        fov: 75,
        position: [0, 0, 25],
      }}
    >
      <Model />

      <ambientLight intensity={1.6} />
    </Canvas>
  );
};

export default Scene;
