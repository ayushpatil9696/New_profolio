import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../components/Loader";

// Load the GLTF model once and memoize it
const LoadedAstronaut = () => {
  const astronaut = useGLTF("./astronaut/scene.gltf");
  return astronaut;
};

// Create a material with a color
const Astronaut = ({ astronaut }) => {
  return (
    <primitive
      object={astronaut.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const AstronautCanvas = () => {
  const astronaut = useMemo(() => LoadedAstronaut(), []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Astronaut astronaut={astronaut} />

        {/* Add a directional light */}
        <directionalLight intensity={1} position={[1, 1, 1]} />

        {/* Add an ambient light */}
        <ambientLight intensity={0.5} color={0xffffff} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AstronautCanvas;
