import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Models = ({ position, scale }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.005;
  });

  const { nodes, materials } = useGLTF("/fbx/cube.gltf", true);
  const { Material } = materials;

  return (
    <mesh
      scale={scale}
      position={position}
      ref={ref}
      material={Material}
      geometry={nodes.Cube.geometry}
    />
  );
};

export default Models;
