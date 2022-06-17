import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AniSphere from "./sphere";
import {
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Caption from "./caption";
import Rig from "./rig";
import Bg from "./bg";
import Stars from "./stars";

function My() {
  return (
    <div className="my_container">
      <Canvas
        className="canvas"
        camera={{
          position: [0, 0, 1],
        }}
      >
        <Stars />
        <EffectComposer>
          <Vignette eskil={false} offset={0.5} darkness={0.5} />
          <Noise premultiply blendFunction={BlendFunction.ADD} />
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
            color="#A53CB9"
            position={[0, 0, 0]}
            lineHeight="1"
            fontSize="1.2"
          >{`I'M CONTENTS DESIGNER`}</Caption>

          <AniSphere
            color="#6254C6"
            args={[1, 100, 300]}
            scale="4"
            position={[-5, 3, -5]}
            distort={0.5}
            speed={1}
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

        <Bg />
      </Canvas>
      <span className="chevron">
        Scroll Down
        <span>&#129147;</span>
      </span>
    </div>
  );
}

export default My;
