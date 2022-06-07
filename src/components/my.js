import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./box";
import AniSphere from "./sphere";

function My() {
  return (
    <div className="my_container">
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <spotLight intensity={2} position={[-3, 10, 7]} />
        <Suspense fallback={null}>
          <AniSphere />
        </Suspense>
      </Canvas>
      <div className="my_wrapper">
        <div className="my_my">
          <span className="my_my-position">Contents Desinger</span>
        </div>
        <div className="my_story">
          테에에에에에에스스스스스스스트트트 <br />
          테에에에에에ㅔ에에스스스스스트트트 <br />
          테에에에에에에에에스스스스트트트틑 <br />
          테에에에에에에에에스스스스트트트틑 <br />
          테에에에에에에에에스스스스트트트틑 <br />
        </div>
      </div>
    </div>
  );
}

export default My;
