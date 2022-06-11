import React from "react";
import { useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function Caption({
  children,
  position,
  lineHeight,
  fontSize,
  color,
}) {
  const { width } = useThree((state) => state.viewport);
  return (
    <Text
      maxWidth={1}
      color={color}
      position={position}
      lineHeight={lineHeight}
      fontSize={width / fontSize}
      material-toneMapped={true}
      anchorX="left"
      anchorY="middle"
    >
      <meshPhysicalMaterial attach="material" />
      {children}
    </Text>
  );
}
