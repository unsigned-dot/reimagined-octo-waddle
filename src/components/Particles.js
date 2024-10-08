// src/components/Particles.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Particles = () => {
  const mountRef = useRef(null);
  const particlesCount = 500; // Nombre de particules
  const positions = new Float32Array(particlesCount * 3);
  const mouse = new THREE.Vector2(); // Vecteur pour la position de la souris
  let attractParticles = false;

  useEffect(() => {
    // Création de la scène, de la caméra et du rendu
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Création des particules
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleTexture = new THREE.TextureLoader().load('/assets/ellipse.png');
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2, // Taille des particules
      map: particleTexture,
      blending: THREE.AdditiveBlending, // Pour un effet lumineux
      transparent: true,
      opacity: 0.5, // Ajuste l'opacité pour permettre de mieux voir à travers
      depthWrite: false,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 5;

    // Gérer l'attraction des particules
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1; // Normaliser X entre -1 et 1
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1; // Normaliser Y entre -1 et 1
      attractParticles = true; // Activer l'attraction
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Fonction d'animation
    const animate = () => {
      requestAnimationFrame(animate);

      if (attractParticles) {
        const positions = particles.geometry.attributes.position.array;
        for (let i = 0; i < particlesCount; i++) {
          // Récupérer les coordonnées de la particule
          const particleX = positions[i * 3];
          const particleY = positions[i * 3 + 1];
          const particleZ = positions[i * 3 + 2];

          // Calculer la distance en 3D par rapport à la position de la souris
          const mouse3D = new THREE.Vector3(mouse.x * 5, mouse.y * 5, 0); // La position de la souris en 3D
          const distance = mouse3D.distanceTo(new THREE.Vector3(particleX, particleY, particleZ));

          // Si la particule est dans un rayon de 2, l'attirer vers la souris
          if (distance < 2) {
            const attractionStrength = (2 - distance) * 0.05; // Ajuste la force d'attraction
            positions[i * 3] += (mouse3D.x - particleX) * attractionStrength; // Attirer vers la souris (X)
            positions[i * 3 + 1] += (mouse3D.y - particleY) * attractionStrength; // Attirer vers la souris (Y)
            positions[i * 3 + 2] += (mouse3D.z - particleZ) * attractionStrength; // Attirer vers la souris (Z)
          }
        }
        particles.geometry.attributes.position.needsUpdate = true; // Indiquer que les positions ont changé
      }

      particles.rotation.y += 0.001; // Rotation des particules
      renderer.render(scene, camera);
    };

    animate();

    // Gérer le redimensionnement
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
    
    // Nettoyage
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  useEffect(() => {
    // Désactiver l'attraction après 3 secondes
    const timer = setTimeout(() => {
      attractParticles = false;
    }, 3000);

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default Particles;
