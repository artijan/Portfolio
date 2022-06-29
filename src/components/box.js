import React, { useRef } from "react";
import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Boxes({ color, args, scale, position, rotation }) {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += 0.002;
    ref.current.rotation.x += 0.002;
  });

  return (
    <Box
      ref={ref}
      args={args}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <meshPhongMaterial color={color} />
    </Box>
  );
}
