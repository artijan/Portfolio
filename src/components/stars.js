import React, { useRef, useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import { useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";

export default function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(8000), { radius: 15 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 50;
  });

  return (
    <group rotation={[0, Math.PI / 10, Math.PI / 10]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={2}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
