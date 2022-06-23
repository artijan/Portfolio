import React from "react";
import { useFBX } from "@react-three/drei";

export default function FBX() {
  const fbx = useFBX("fbx/test.fbx");
  return <primitive object={fbx} position={[0, 0, 0]} scale={0.5} />;
}
