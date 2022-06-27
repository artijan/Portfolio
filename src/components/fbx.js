import React from "react";
import { useFBX } from "@react-three/drei";

const FBX = () => {
  const fbx = useFBX("fbx/square.fbx");
  return <primitive object={fbx} scale={0.5} />;
};

export default FBX;
