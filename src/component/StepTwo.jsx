import { motion } from "framer-motion";

export default function StepTwo({ next, back, update }) {
  const handleChange = (e) => update({ [e.target.name]: e.target.value });

  return (
    <motion.div
      className="flex flex-col gap-4 items-center pt-24 bg-violet-200 h-screen w-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex flex-col gap-4 bg-white p-10 rounded-2xl shadow-lg w-110 h-160"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="">
          <img className="w-15 h-15" src="Main.png" alt="" />

          <h2 className="text-2xl">Join Us 😎</h2>
          <h2 className="opacity-40">
            Please provide all current information accurately.
          </h2>
        </div>
        <div>
          <div className="flex flex-row gap-1">
            <h2>email </h2>
            <h2 className="text-red-600">*</h2>
          </div>

          <input
            className="p-2 border rounded opacity-40 w-90"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="flex flex-row gap-1">
            <h2>phone number </h2>
            <h2 className="text-red-600">*</h2>
          </div>
          <input
            className="p-2 border rounded opacity-40 w-90"
            name="phoneNumber"
            placeholder="PhoneNumber"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="flex flex-row gap-1">
            <h2>password </h2>
            <h2 className="text-red-600">*</h2>
          </div>
          <input
            className="p-2 border rounded opacity-40 w-90 "
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <div>
          <div className="flex flex-row gap-1">
            <h2>confirm Password </h2>
            <h2 className="text-red-600">*</h2>
          </div>
          <input
            className="p-2 border rounded opacity-40 w-90"
            type="password"
            name="confirmPassword"
            placeholder="ConfirmPassword"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between gap-2 mt-10 ">
          <motion.div
            className="flex justify-between border flex items-center justify-center rounded h-10 w-40"
            whileHover={{ scale: 1.05 }}
          >
            <button onClick={back}>← Back</button>
          </motion.div>
          <motion.div
            className="flex justify-between bg-black text-amber-50 flex justify-center rounded h-10 w-60"
            whileHover={{ scale: 1.05 }}
          >
            <button onClick={next}>Continue 2/3 →</button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
