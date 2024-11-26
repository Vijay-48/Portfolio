import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function Character({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const characterRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (characterRef.current) {
      // Smooth character movement based on mouse position
      characterRef.current.position.x += (mousePosition.x * 2 - characterRef.current.position.x) * 0.05;
      characterRef.current.position.y += (mousePosition.y * 1.5 - characterRef.current.position.y) * 0.05;
      
      // Subtle floating animation
      const time = state.clock.getElapsedTime();
      characterRef.current.rotation.z = Math.sin(time) * 0.2;
    }
  });

  return (
    <Sphere ref={characterRef} args={[1, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#4299e1"
        attach="material"
        distort={0.4}
        speed={4}
        roughness={0}
        metalness={0.8}
      />
    </Sphere>
  );
}