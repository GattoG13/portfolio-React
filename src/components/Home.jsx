import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center"
      >
        My Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-4 text-lg text-gray-400"
      >
        Jr Full Stack Developer | Software Engineer
      </motion.p>
    </main>
  );
}
