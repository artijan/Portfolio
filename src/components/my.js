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
          position: [0, 0, 10],
          fov: "22",
        }}
      >
        <EffectComposer>
          <Vignette eskil={false} offset={0.5} darkness={0.5} />
          <Noise premultiply blendFunction={BlendFunction.ADD} />
          <DepthOfField
            focusDistance={0.009}
            focalLength={0.005}
            bokehScale={1}
          />
        </EffectComposer>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.2} position={[30, -50, 1]} />
        <rectAreaLight
          width={9}
          height={9}
          intensity={5}
          position={[5, 7, 3]}
        />

        <Suspense fallback={null}>
          <Caption
            color="#A53CB9"
            position={[-1, 0, 0]}
            lineHeight="1"
            fontSize="12"
          >{`HI THERE!`}</Caption>

          <AniSphere
            color="#6254C6"
            args={[1, 100, 300]}
            scale="4"
            position={[-5, 3, -5]}
            distort={0.5}
            speed={1}
            roughness={0.5}
          />
          <AniSphere
            color="#76954F"
            args={[1, 100, 100]}
            scale="0.3"
            position={[3, 2, -8]}
            distort={0.6}
            speed={5}
            roughness={0.2}
          />
          <AniSphere
            color="#DC4C59"
            args={[1, 100, 100]}
            scale="1"
            position={[4, -2, -1]}
            distort={1}
            speed={2}
            roughness={0.8}
          />
          <AniSphere
            color="#721ABB"
            args={[1, 100, 100]}
            scale="1"
            position={[-1, 3, -20]}
            distort={0.6}
            speed={1}
            roughness={0.8}
          />
          <AniSphere
            color="#1A96BB"
            args={[2, 100, 100]}
            scale="1.5"
            position={[9, 5, -20]}
            distort={0.4}
            speed={2}
            roughness={0.8}
          />
          <AniSphere
            color="#7E61DF"
            args={[1, 100, 100]}
            scale="0.2"
            position={[-2, 0, -1]}
            distort={0.3}
            speed={6}
            roughness={0.3}
          />
          <AniSphere
            color="#7E61DF"
            args={[1, 100, 100]}
            scale="0.5"
            position={[-3, -1, -1]}
            distort={0.3}
            speed={6}
            roughness={0.3}
          />
          <Rig />
        </Suspense>
        <Stars />
        <Bg />
      </Canvas>
      <span className="chevron">
        My Works Here!
        <span>&#129147;</span>
      </span>
    </div>
  );
}

export default My;
