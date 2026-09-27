// src/components/Hero3DScene.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check device / reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // 2. Futuristic Core Object: Holographic Nested Geometric Structures
    const group = new THREE.Group();
    scene.add(group);

    // Outer wireframe icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(2.0, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    group.add(icoMesh);

    // Inner glowing torus knot (tech artifact)
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.05, 0.28, 100, 16, 2, 3);
    const torusKnotMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.55
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    group.add(torusKnot);

    // Inner glowing core sphere
    const coreGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: false,
      transparent: true,
      opacity: 0.8
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Outer orbital rings
    const ringGeo = new THREE.RingGeometry(2.35, 2.38, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat.clone());
    ring2.material.color.setHex(0xc084fc);
    ring2.rotation.y = Math.PI / 3;
    ring2.rotation.z = Math.PI / 6;
    group.add(ring2);

    // 3. Cyber Star / Data Points Cloud
    const particleCount = 280;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color(0x00d2ff);
    const purple = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 ? cyan : purple;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // 4. Mouse reactivity & Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handlePointerMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotationY = mouseX * 0.7;
      targetRotationX = -mouseY * 0.5;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // 5. Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 6. Animation loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous smooth rotation
        torusKnot.rotation.x = elapsedTime * 0.45;
        torusKnot.rotation.y = elapsedTime * 0.65;

        icoMesh.rotation.x = -elapsedTime * 0.2;
        icoMesh.rotation.y = -elapsedTime * 0.25;

        ring1.rotation.z = elapsedTime * 0.3;
        ring2.rotation.z = -elapsedTime * 0.25;

        particleSystem.rotation.y = elapsedTime * 0.05;
        particleSystem.rotation.x = elapsedTime * 0.02;

        // Smooth mouse parallax damping
        currentRotationX += (targetRotationX - currentRotationX) * 0.05;
        currentRotationY += (targetRotationY - currentRotationY) * 0.05;

        group.rotation.x = currentRotationX;
        group.rotation.y = currentRotationY;

        // Subtle pulsing scale
        const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
        coreMesh.scale.set(pulse, pulse, pulse);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      resizeObserver.disconnect();

      // Dispose Three resources
      icoGeometry.dispose();
      icoMaterial.dispose();
      torusKnotGeo.dispose();
      torusKnotMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[520px] flex items-center justify-center pointer-events-none">
      {/* Glow aura behind the 3D scene */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/15 via-purple-600/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div ref={containerRef} className="w-full h-full pointer-events-auto" />
      
      {/* Floating HUD elements in 3D frame */}
      <div className="absolute -bottom-2 -left-2 sm:left-4 glass-panel px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 flex items-center space-x-2 border border-cyan-500/20 pointer-events-none shadow-lg shadow-cyan-950/40">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>THREE.JS // 3D_CORE_ACTIVE</span>
      </div>

      <div className="absolute top-2 -right-2 sm:right-4 glass-panel px-3 py-1.5 rounded-lg text-xs font-mono text-purple-300 flex items-center space-x-2 border border-purple-500/20 pointer-events-none shadow-lg shadow-purple-950/40">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        <span>VECTORS // STL // SHADERS</span>
      </div>
    </div>
  );
}
