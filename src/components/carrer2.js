import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import Caption from "./caption";
import Rig from "./rig";
import Boxes from "./box";

function Career2({ name }) {
  return (
    <div id="work2" className="my_carrer">
      <div className="carrer second">
        <Canvas
          className="canvas"
          dpr={[1, 2]}
          camera={{
            position: [0, 0, 10],
            fov: 22,
          }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight intensity={0.8} position={[30, -50, 1]} />
          <rectAreaLight
            width={9}
            height={9}
            intensity={1}
            position={[1, 5, 2]}
          />
          <Suspense fallback={null}>
            {/* <Boxes
              color="#6254C6"
              args={[1, 3, 1]}
              scale="1"
              position={[-3, 1, -5]}
              rotation={[1, 1, 3]}
            /> */}
            <Caption
              className="caption"
              color="#E3BA16"
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

export default Career2;
