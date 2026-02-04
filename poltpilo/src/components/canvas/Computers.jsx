import { Canvas  } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState, useRef } from "react";

/* ================= MODEL ================= */

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef();

  

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.4} groundColor="black" />
      <directionalLight position={[6, 6, 6]} intensity={1.2} />
      <pointLight intensity={1.2} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5:1.25}   // 🔥 SIZE BADA
        position={[0, isMobile ? -2.2 : -1.2, 0]}
        rotation={[-0.01, -0.25, -0.08]}
      />
    </mesh>
  );
};

/* ================= CANVAS ================= */

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [30, 4, 7], fov: 22 }} // 🔥 camera thoda zoom-in
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        {/* 🖱️ HOVER + DRAG CONTROLS */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate
          rotateSpeed={1}          // 🔥 mouse drag strong
          autoRotate
          autoRotateSpeed={0.1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
