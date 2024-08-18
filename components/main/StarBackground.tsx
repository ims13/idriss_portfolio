// components/main/StarBackground.tsx

"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { isMobileDevice } from "@/utils/detectMobile"; // Import the utility function

const validatePositions = (positions: Float32Array) => {
  let hasInvalid = false;

  for (let i = 0; i < positions.length; i++) {
    if (isNaN(positions[i]) || !isFinite(positions[i]) || positions[i] === null) {
      console.error(`Invalid position at index ${i}:`, positions[i]);
      hasInvalid = true;
      positions[i] = 0; // Reset invalid value to 0
    }
  }

  if (hasInvalid) {
    console.error("Positions array contains invalid data:", positions);
  }

  return positions;
};

const StarBackground: React.FC = (props) => {
  const ref = useRef<any>();

  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(2000), { radius: 1.2 });
    return validatePositions(positions);
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  if (isMobileDevice()) {
    return null;
  }
  return (
    <div className="w-full h-full fixed inset-0 z-[10] stars-canvas">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;