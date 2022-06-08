import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import AniSphere from "./sphere";

function My() {
  return (
    <div className="my_container">
      <Canvas
        className="canvas"
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 10],
          fov: 22,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.8} position={[30, -50, 1]} />
        <rectAreaLight
          width={9}
          height={9}
          intensity={3}
          position={[5, 5, 3]}
        />
        <Suspense fallback={null}>
          <Caption
            color="#A53CB9"
            position={[-0.5, 0, 2]}
            lineHeight="1"
            fontSize="12"
          >{`CONTENTS\nDESIGNER`}</Caption>
          <Caption
            color="#A53CB9"
            position={[-0.5, -0.8, 2]}
            lineHeight="1"
            fontSize="50"
          >{`Jang Ho Seung`}</Caption>
          <AniSphere
            color="#6254C6"
            args={[1, 100, 300]}
            scale="4"
            position={[-4, 0, -3]}
            distort={0.5}
            speed={2}
          />
          <AniSphere
            color="#4F9593"
            args={[1, 100, 100]}
            scale="0.3"
            position={[3, -2, -6]}
            distort={0.6}
            speed={5}
          />
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
