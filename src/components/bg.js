import React from "react";
import * as THREE from "three";
import { LayerMaterial, Depth } from "lamina";

export default function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial attach="material" side={THREE.BackSide}>
        <Depth
          colorA="#30cfd0"
          colorB="#200640"
          alpha={1}
          mode="normal"
          near={5}
          far={20}
          origin={[1, 1, 1]}
        />
      </LayerMaterial>
    </mesh>
  );
}
