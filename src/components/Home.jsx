import DynamicWords from './DynamicWords';
import { motion } from "framer-motion";
import Animation from './LottieAnimation'

export default function Home() {
  return (
    <section className="pt-10 flex flex-col items-center justify-center text-center min-h-screen">
      <Animation />
      <DynamicWords />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-4 text-lg text-gray-400"
      >
        Jr Full Stack Developer | Software Developer
      </motion.p>
    </section>
  );
}
