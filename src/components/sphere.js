import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function AniSphere() {
  return (
    <Sphere args={[1, 100, 300]} scale={2}>
      <MeshDistortMaterial
        color="violet"
        attach="material"
        distort={0.5}
        speed={3}
        roughness={0.5}
      />
    </Sphere>
  );
}
