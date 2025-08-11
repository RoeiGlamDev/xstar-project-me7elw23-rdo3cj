import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook to integrate 3D interaction features for CleanSSR.
 * This hook utilizes Three.js to render 3D elements specific to CleanSSR's branding and technology focus.
 * 
 * @returns {Object} - Contains the reference to the mounted 3D scene.
 */
export const use3D = (): { sceneRef: React.RefObject<HTMLDivElement> } => {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        sceneRef.current?.appendChild(renderer.domElement);

        // Set background color to white
        scene.background = new THREE.Color(0xffffff);

        // Create a minimal purple cube to represent CleanSSR's branding
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x6a0dad }); // Purple
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            window.removeEventListener('resize', () => {});
            renderer.dispose();
            sceneRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return { sceneRef };
};