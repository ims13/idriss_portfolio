// components/main/StarBackground.tsx

"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const validatePositions = (positions: Float32Array) => {
    let hasNaN = false;
  
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        console.error(`Invalid position at index ${i}:`, positions[i]);
        hasNaN = true;
      }
    }
  
    if (hasNaN) {
      console.error("Positions array contains invalid data:", positions);
    }
  
    return !hasNaN;
  };
  
  const StarBackground = (props: any) => {
    const ref: any = useRef();
  
    const [sphere] = useState(() => {
      const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  
      // Validate positions before using them
      if (!validatePositions(positions)) {
        console.error("Generated positions contain invalid values.");
        return new Float32Array(); // Return an empty array to prevent errors
      }
  
      return positions;
    });
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
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

const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-[10] stars-canvas">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
