import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function AniSphere() {
  return (
    <Sphere args={[1, 100, 300]} scale={1.5}>
      <MeshDistortMaterial
        color="#6254C6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.5}
      />
    </Sphere>
  );
}
