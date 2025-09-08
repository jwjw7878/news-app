import { motion } from "framer-motion";

export default function Loading() {
  return (
    <p className="py-6 text-center text-blue-500 text-3xl font-extrabold">
      {"loading...".split("").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.2, repeat: Infinity }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
