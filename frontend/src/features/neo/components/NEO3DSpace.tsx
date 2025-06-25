import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Type for individual asteroid data
interface AsteroidData {
  x: number;
  y: number;
  z: number;
  size: number;
  isHazardous: boolean;
  name: string;
}

// Props for NEO3DSpace component
interface NEO3DSpaceProps {
  neoData: AsteroidData[];
}

/**
 * Earth component
 * Renders a textured sphere representing Earth
 */
function Earth() {
  // Load Earth texture
  const texture = useLoader(TextureLoader, "/earthmap.jpg");

  return (
    <mesh receiveShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.4}
        roughness={0.5}
      />
    </mesh>
  );
}

/**
 * Asteroids component
 * Renders asteroids in 3D space with appropriate color/material
 */
function Asteroids({ data }: { data: AsteroidData[] }) {
  return (
    <>
      {data.map((asteroid, idx) => (
        <mesh
          key={idx}
          position={[asteroid.x, asteroid.y, asteroid.z]}
          castShadow
        >
          <sphereGeometry args={[asteroid.size, 16, 16]} />
          <meshStandardMaterial
            color={asteroid.isHazardous ? "#ff4d4d" : "#9b59b6"}
            emissive={asteroid.isHazardous ? "#ff4d4d" : "#9b59b6"}
            emissiveIntensity={0.4}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      ))}
    </>
  );
}

/**
 * NEO3DSpace component
 * Displays Earth + asteroids in a 3D scene with postprocessing and controls
 */
export const NEO3DSpace = ({ neoData }: NEO3DSpaceProps) => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Background + lighting */}
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={2}
          color="#fffacd"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Star field */}
        <Stars radius={300} depth={60} count={3000} factor={6} fade />

        {/* 3D objects */}
        <Suspense fallback={null}>
          <Earth />
          <Asteroids data={neoData} />
        </Suspense>

        {/* Postprocessing effects */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.1}
            luminanceSmoothing={0.8}
            intensity={1.2}
          />
        </EffectComposer>

        {/* Controls: no pan, constrained zoom, slow rotate */}
        <OrbitControls
          enablePan={false}
          minDistance={1.5} // Prevent zooming inside Earth
          maxDistance={10} // Prevent excessive zoom out
          enableDamping
          dampingFactor={0.1}
          rotateSpeed={0.5}
          target={[0, 0, 0]}
        />
      </Canvas>

      {/* Legend + disclaimer */}
      <div className="mt-4 text-center text-sm text-purple-300">
        <div className="flex justify-center gap-4 mb-2">
          <div className="flex items-center gap-1">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: "#9b59b6" }}
            ></span>
            <span>Non-hazardous asteroid</span>
          </div>
          <div className="flex items-center gap-1">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: "#ff4d4d" }}
            ></span>
            <span>Potentially hazardous asteroid</span>
          </div>
        </div>
        <div className="text-purple-400">
          Note: This visualization is for illustration only.
          Distances, sizes, and positions are not to scale.
        </div>
      </div>
    </>
  );
};
