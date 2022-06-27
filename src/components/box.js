import React, { useRef } from "react";
import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Boxes({ color, args, scale, position }) {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y = delta / 2;
    ref.current.rotation.x = delta / 2;
  });

  return (
    <Box ref={ref} args={args} scale={scale} position={position}>
      <meshPhongMaterial color={color} />
    </Box>
  );
}
