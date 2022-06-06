import { MeshDistortMaterial } from "@react-three/drei";
import React from "react";

export default function Box() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <MeshDistortMaterial attach="material" color={0xe9fefc} distort={0.3} />
    </mesh>
  );
}
