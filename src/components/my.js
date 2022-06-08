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
        <ambientLight intensity={0.6} />
        {/* <directionalLight intensity={4} position={[-5, 8, 1]} /> */}
        <rectAreaLight
          width={800}
          height={800}
          intensity={5}
          position={[30, 10, 2]}
        />
        <Suspense fallback={null}>
          <AniSphere />
        </Suspense>
      </Canvas>
      <div className="my_wrapper">
        <div className="my_my">
          <span className="my_my-position">CONTENTS DESIGNER</span>
        </div>
        <div className="my_story">TEST</div>
      </div>
    </div>
  );
}

export default My;
