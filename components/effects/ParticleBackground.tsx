import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const particles: THREE.Points[] = [];
        const particleCount = 1000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            positions[i  3] = (Math.random() - 0.5)  200; // x
            positions[i  3 + 1] = (Math.random() - 0.5)  200; // y
            positions[i  3 + 2] = (Math.random() - 0.5)  200; // z
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const material = new THREE.PointsMaterial({ color: new THREE.Color(0x800080), size: 0.5 });
        const particlesMesh = new THREE.Points(geometry, material);
        scene.add(particlesMesh);

        camera.position.z = 50;

        const animate = () => {
            requestAnimationFrame(animate);
            particlesMesh.rotation.y += 0.001;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div
                className="flex items-center justify-center h-screen text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl font-bold">Welcome to CleanSSR</h1>
            </motion.div>
        </div>
    );
};

export default ParticleBackground;