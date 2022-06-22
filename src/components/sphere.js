import React, { useRef } from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function AniSphere({
  color,
  args,
  scale,
  position,
  distort,
  speed,
  roughness,
}) {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y = delta / 2;
    ref.current.rotation.x = delta / 2;
  });

  return (
    <Sphere ref={ref} args={args} scale={scale} position={position}>
      <MeshDistortMaterial
        attach="material"
        color={color}
        distort={distort}
        speed={speed}
        roughness={roughness}
      />
    </Sphere>
  );
}
