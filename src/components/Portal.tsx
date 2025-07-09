'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Portal() {
  const portalRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (portalRef.current) {
      portalRef.current.rotation.z += 0.002;
    }
  });

  return (
    <mesh ref={portalRef} position={[0, 0, -5]}>
      <torusGeometry args={[3, 0.4, 64, 100]} />
      <meshStandardMaterial color="cyan" emissive="cyan" emissiveIntensity={1} />
    </mesh>
  );
}
