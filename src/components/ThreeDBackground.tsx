"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Starfield - thousands of stars
function Starfield() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    const colors = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      // Spread stars across a large sphere
      const radius = 50 + Math.random() * 100;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Random colors - white, blue, purple
      const colorChoice = Math.random();
      if (colorChoice < 0.6) {
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
      } else if (colorChoice < 0.8) {
        colors[i * 3] = 0.6;
        colors[i * 3 + 1] = 0.8;
        colors[i * 3 + 2] = 1;
      } else {
        colors[i * 3] = 0.8;
        colors[i * 3 + 1] = 0.6;
        colors[i * 3 + 2] = 1;
      }
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Nebula clouds
function NebulaClouds() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-20, 10, -40]}>
        <sphereGeometry args={[15, 32, 32]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh position={[25, -15, -50]}>
        <sphereGeometry args={[20, 32, 32]} />
        <meshBasicMaterial
          color="#ec4899"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh position={[0, 20, -60]}>
        <sphereGeometry args={[18, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.09}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// Shooting stars
function ShootingStars() {
  const linesRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, i) => {
        const speed = 0.5 + (i % 3) * 0.3;
        line.position.x -= speed;
        line.position.y -= speed * 0.3;
        
        if (line.position.x < -50) {
          line.position.x = 50;
          line.position.y = Math.random() * 30 - 15;
          line.position.z = Math.random() * -30 - 10;
        }
      });
    }
  });

  const shootingStars = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const points = [];
      points.push(new THREE.Vector3(0, 0, 0));
      points.push(new THREE.Vector3(-2, -0.5, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      return (
        <line
          key={i}
          geometry={geometry}
          position={[
            Math.random() * 100 - 50,
            Math.random() * 30 - 15,
            Math.random() * -30 - 10
          ]}
        >
          <lineBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </line>
      );
    });
  }, []);

  return <group ref={linesRef}>{shootingStars}</group>;
}

// Wireframe planet/sphere - bottom right
function WireframePlanet() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05);
    }
  });

  return (
    <mesh ref={meshRef} position={[9, -5, -3]}>
      <icosahedronGeometry args={[3, 2]} />
      <meshStandardMaterial
        color="#06b6d4"
        wireframe
        emissive="#06b6d4"
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}

// Distant planets
function DistantPlanets() {
  return (
    <>
      <mesh position={[-30, 15, -80]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[35, -20, -100]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
        />
      </mesh>
    </>
  );
}

export default function ThreeDBackground() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none" 
      style={{ 
        zIndex: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.9) 0%, rgba(0, 0, 0, 1) 100%)'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />
        
        <Starfield />
        <NebulaClouds />
        <ShootingStars />
        <WireframePlanet />
        <DistantPlanets />
      </Canvas>
    </div>
  );
}