import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../components/Loader";

const Astronaut = () => {
  const astronaut = useGLTF("./astronaut/scene.gltf");

  //   return <primitive object={astronaut.scene} scale={2.5} position-y={0} rotation-y={0} />;
  return(  
  <mesh>
    <hemisphereLight intensity={0.15} groundColor="black" />
    <pointLight intensity={10} />
    <primitive object={astronaut.scene} scale={2.5}/>
  </mesh>
  )

};

const AstronautCanvas = () => {
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
        <Astronaut />

        {/* Add a directional light */}
        <directionalLight intensity={1} position={[1, 1, 1]} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AstronautCanvas;
