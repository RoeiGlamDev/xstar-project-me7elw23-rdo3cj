import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <Box args={[1, 1, 1]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#6a0dad" />
          </Box>
        </motion.mesh>
      </Canvas>
      <div className="absolute top-10 left-10">
        <h1 className="text-5xl font-bold text-purple-600">{title}</h1>
        <p className="mt-4 text-lg text-gray-700">Welcome to CleanSSR, where technology meets cleanliness.</p>
      </div>
    </div>
  );
};

export default Scene;