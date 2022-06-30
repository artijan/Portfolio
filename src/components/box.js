import React, { useRef, useState } from "react";
import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Boxes({ color, args, scale, position, rotation }) {
  const ref = useRef();

  const [hovered, hover] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.y += 0.002;
    ref.current.rotation.x += 0.002;

    if (hovered === true) {
      ref.current.rotation.y += 0.008;
      ref.current.rotation.x += 0.008;
    }
  });

  return (
    <Box
      ref={ref}
      args={args}
      scale={scale}
      position={position}
      rotation={rotation}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <meshPhongMaterial color={hovered ? "hotpink" : color} />
    </Box>
  );
}
