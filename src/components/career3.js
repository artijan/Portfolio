import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Caption from "./caption";
import Rig from "./rig";

function Career3({ name }) {
  return (
    <div id="work3" className="my_carrer">
      <div className="carrer third">
        <Canvas
          className="canvas"
          dpr={[1, 2]}
          camera={{
            position: [0, 0, 10],
            fov: 22,
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight intensity={0.8} position={[30, -50, 1]} />
          <rectAreaLight
            width={9}
            height={9}
            intensity={1}
            position={[1, 5, 2]}
          />
          <Suspense fallback={null}>
            <Caption
              className="caption"
              color="#7AA7C7"
              position={[-1, 0, 1]}
              lineHeight="1"
              fontSize="16"
            >
              {`${name}`}
            </Caption>
            <Rig />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default Career3;
