import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function AniSphere({
  color,
  args,
  scale,
  position,
  distort,
  speed,
}) {
  return (
    <Sphere args={args} scale={scale} position={position}>
      <MeshDistortMaterial
        attach="material"
        color={color}
        distort={distort}
        speed={speed}
        roughness={0.5}
      />
    </Sphere>
  );
}
