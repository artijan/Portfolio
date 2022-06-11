import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AniSphere from "./sphere";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import Caption from "./caption";
import Rig from "./rig";

function Career({ name }) {
  return (
    <div className="my_carrer">
      <div className="carrer first">
        <Canvas
          className="canvas"
          dpr={[1, 2]}
          camera={{
            position: [0, 0, 10],
            fov: 22,
          }}
        >
          <EffectComposer>
            <DepthOfField
              focusDistance={0.009}
              focalLength={0.005}
              bokehScale={1}
            />
          </EffectComposer>
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
              color="#403361"
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

export default Career;
