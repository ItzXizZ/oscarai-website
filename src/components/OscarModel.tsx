import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface OscarModelProps {
  binColor?: string;
  accentColor?: string;
  glowIntensity?: number;
}

const OscarModel: React.FC<OscarModelProps> = ({
  binColor = '#333333',
  accentColor = '#22c55e',
  glowIntensity = 0.3
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Try to load the OBJ model
  useEffect(() => {
    const loadModel = async () => {
      try {
        // Dynamic import for Three.js loaders
        const { OBJLoader } = await import('three/examples/jsm/loaders/OBJLoader.js');
        const objLoader = new OBJLoader();
        
        // Try to load materials first
        try {
          const { MTLLoader } = await import('three/examples/jsm/loaders/MTLLoader.js');
          const mtlLoader = new MTLLoader();
          const materials = await mtlLoader.loadAsync('/oscarAI_v8.mtl');
          materials.preload();
          objLoader.setMaterials(materials);
        } catch (mtlError) {
          console.log('MTL file not found, loading OBJ without materials');
        }

        const object = await objLoader.loadAsync('/oscarAI_v8.obj');
        
        // Scale and position the model (much smaller to fix zoom)
        object.scale.set(0.1, 0.1, 0.1);
        object.position.set(0, -2, 0);
        
        // Apply materials and shadows
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            
            // Apply custom materials if none exist
            if (!child.material || Array.isArray(child.material)) {
              child.material = new THREE.MeshPhongMaterial({
                color: new THREE.Color(binColor),
                shininess: 100,
                emissive: new THREE.Color(accentColor),
                emissiveIntensity: glowIntensity * 0.1
              });
            }
          }
        });

        setModel(object);
        setIsLoaded(true);
        console.log('OBJ model loaded successfully');
        
      } catch (error) {
        console.error('Error loading OBJ model:', error);
        console.log('Creating fallback model...');
        createFallbackModel();
      }
    };

    loadModel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [binColor, accentColor, glowIntensity]);

  // Create fallback model if OBJ fails to load
  const createFallbackModel = () => {
    const group = new THREE.Group();

    // Main cylinder (trash bin body)
    const cylinderGeometry = new THREE.CylinderGeometry(1.2, 1, 2.5, 32);
    const cylinderMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(binColor),
      shininess: 100,
      transparent: true,
      opacity: 0.9,
      emissive: new THREE.Color(accentColor),
      emissiveIntensity: glowIntensity * 0.1
    });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    group.add(cylinder);

    // Lid
    const lidGeometry = new THREE.CylinderGeometry(1.3, 1.3, 0.2, 32);
    const lidMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(accentColor),
      shininess: 100,
      emissive: new THREE.Color(accentColor),
      emissiveIntensity: glowIntensity
    });
    const lid = new THREE.Mesh(lidGeometry, lidMaterial);
    lid.position.y = 1.35;
    lid.castShadow = true;
    group.add(lid);

    // Handle
    const handleGeometry = new THREE.TorusGeometry(0.3, 0.05, 8, 16);
    const handleMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(accentColor),
      shininess: 100
    });
    const handle = new THREE.Mesh(handleGeometry, handleMaterial);
    handle.position.set(0, 1.35, 0);
    handle.rotation.x = Math.PI / 2;
    group.add(handle);

    // AI indicator light
    const indicatorGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const indicatorMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(accentColor)
    });
    const indicator = new THREE.Mesh(indicatorGeometry, indicatorMaterial);
    indicator.position.set(0.8, 0.5, 0.8);
    group.add(indicator);

    setModel(group);
    setIsLoaded(true);
  };

  // Animation loop
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.1;
      
      // Update indicator light if it exists
      meshRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
          // Animate color intensity for basic material
          const intensity = 0.5 + Math.sin(time * 3) * 0.2;
          if (child.geometry instanceof THREE.SphereGeometry && child.geometry.parameters.radius === 0.1) {
            child.material.color.setScalar(intensity);
          }
        }
      });
    }
  });

  // Hide loading overlay when model is loaded
  useEffect(() => {
    if (isLoaded) {
      const overlay = document.querySelector('.canvas-overlay');
      if (overlay) {
        overlay.classList.add('hidden');
        setTimeout(() => {
          (overlay as HTMLElement).style.display = 'none';
        }, 300);
      }
    }
  }, [isLoaded]);

  return (
    <group ref={meshRef}>
      {model && <primitive object={model} />}
    </group>
  );
};

export default OscarModel;
