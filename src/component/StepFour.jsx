import { motion } from "framer-motion";

export default function StepFour({ next, update }) {
  return (
    <motion.div
      className="flex flex-col gap-4 items-center pt-24 bg-violet-200 h-screen w-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex flex-col gap-4 bg-white p-10 rounded-2xl shadow-lg w-110 h-60"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <img className="w-15 h-15" src="Main.png" alt="" />
          <h1 className="text-2xl">You're All Set 🔥</h1>
          <h2 className="opacity-40">
            We have received your submission. Thank you!
          </h2>
        </div>
      </motion.div>
    </motion.div>
  );
}
