import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Models = ({ position, scale, url }) => {
  const ref = useRef();

  const [hovered, hover] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.005;
  });

  const { nodes, materials } = useGLTF(`/fbx/${url}.gltf`, true);
  const { Material } = materials;
  const { color } = Material;

  return (
    <mesh
      scale={scale}
      position={position}
      ref={ref}
      material={Material}
      geometry={nodes.Cube.geometry}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <meshStandardMaterial color={hovered ? "violet" : color} />
    </mesh>
  );
};

export default Models;
