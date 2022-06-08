import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import AniSphere from "./sphere";

function My() {
  return (
    <div className="my_container">
      <Canvas
        className="canvas"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 15], fov: 22 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} position={[30, -50, 3]} />
        <rectAreaLight
          width={9}
          height={9}
          intensity={3}
          position={[5, 5, 3]}
        />
        <Suspense fallback={null}>
          <Caption
            color="#5F3DB4"
            position={[-0.5, 0, 2]}
            lineHeight="1"
            fontSize="12"
          >{`CONTENTS\nDESIGNER`}</Caption>
          <Caption
            color="#5F3DB4"
            position={[-0.5, -0.8, 2]}
            lineHeight="1"
            fontSize="50"
          >{`Jang Ho Seung`}</Caption>
          <AniSphere />
          <Rig />
        </Suspense>
      </Canvas>
      {/* <div className="my_wrapper">
        <div className="my_my">
          <span className="my_my-position">CONTENTS DESIGNER</span>
        </div>
        <div className="my_story">Jang Ho Seung</div>
      </div> */}
    </div>
  );
}

function Caption({ children, position, lineHeight, fontSize, color }) {
  const { width } = useThree((state) => state.viewport);
  return (
    <Text
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

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
}

export default My;
