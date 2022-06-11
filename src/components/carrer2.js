import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AniSphere from "./sphere";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import Caption from "./caption";
import Rig from "./rig";

function Career2({ name }) {
  return (
    <div className="my_carrer">
      <div className="carrer">
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
            intensity={3}
            position={[5, 5, 3]}
          />
          <Suspense fallback={null}>
            <Caption
              className="caption"
              color="#A53CB9"
              position={[0, 0, 1]}
              lineHeight="1"
              fontSize="12"
            >
              {`${name}`}
            </Caption>
            <AniSphere
              color="#6254C6"
              args={[1, 100, 300]}
              scale="4"
              position={[-4, 3, -5]}
              distort={0.5}
              speed={2}
            />
            <AniSphere
              color="#4F9593"
              args={[1, 100, 100]}
              scale="0.3"
              position={[3, -2, -8]}
              distort={0.6}
              speed={5}
            />
            <Rig />
          </Suspense>
        </Canvas>
        {/* <div className="img">
          <span className="text">{props.name}</span>
        </div> */}
      </div>
    </div>
  );
}

export default Career2;
