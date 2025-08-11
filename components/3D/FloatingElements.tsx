import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useAnimation } from 'framer-motion';
import { OrbitControls } from '@react-three/drei';
import { useSpring, animated } from 'react-spring';

const FloatingElements: React.FC = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({ rotateY: [0, 360], transition: { duration: 10, loop: Infinity } });
  }, [controls]);

  const floatAnimation = useSpring({
    from: { position: [0, 0, 0] },
    to: { position: [0, 0.2, 0] },
    config: { tension: 120, friction: 14 },
    loop: true
  });

  return (
    <div className="w-full h-screen bg-white">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <animated.mesh position={floatAnimation.position} rotation={controls}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#6A0DAF" />
        </animated.mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

const CleanSSR: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-purple-600 p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to CleanSSR</h1>
      <p className="text-lg mb-4">
        At CleanSSR, we leverage cutting-edge technology to deliver unparalleled cleaning solutions tailored to your needs.
      </p>
      <p className="text-lg mb-4">
        Our innovative cleaning methodologies ensure a spotless environment, utilizing state-of-the-art equipment and eco-friendly products.
      </p>
      <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Smart Cleaning Solutions</li>
        <li>Efficient Service Delivery</li>
        <li>Sustainable Practices</li>
        <li>Customizable Cleaning Plans</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Client Reviews</h2>
      <blockquote className="border-l-4 border-purple-600 pl-4 italic mb-6">
        "CleanSSR transformed our workspace! A breath of fresh air!" - TechCorp
      </blockquote>
      <blockquote className="border-l-4 border-purple-600 pl-4 italic mb-6">
        "Their attention to detail is unmatched." - Innovate LLC
      </blockquote>
      <FloatingElements />
    </div>
  );
};

export default CleanSSR;