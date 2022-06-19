import React, { useRef, useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import { useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";

export default function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(4000), { radius: 7 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[2, Math.PI / 2, Math.PI / 8]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={4}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#FFF1A0"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
