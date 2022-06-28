import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Models = () => {
  const gltf = useGLTF("/fbx/cube.gltf");
  console.log(gltf);
  const { nodes, materials } = useGLTF("/fbx/cube.gltf", true);
  console.log(nodes, materials);
  return <mesh material={materials.Material} geometry={nodes.Cube.geometry} />;
};

export default Models;
