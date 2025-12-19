// import { validateStepOne } from "@/utils/Validators";
// import { motion } from "framer-motion";

// export default function StepOne({
//   next,
//   update,
//   formvalues,
//   formerrors,
//   setformvalues,
//   setformerrors,
// }) {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // setformvalues((prev) => ({ ...prev, [name]: value }));
//     const errors = validateStepOne({ ...formvalues, [name]: value });
//     setformerrors(errors);
//     update({ [name]: value });
//   };

//   return (
//     <motion.div
//       className="flex flex-col gap-4 items-center pt-24 bg-violet-200 h-screen w-screen"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       <motion.div
//         className="flex flex-col gap-4 bg-white p-10 rounded-2xl shadow-lg w-109 h-150"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <div>
//           <img className="w-15 h-15" src="Main.png" alt="" />
//           <h1 className="text-2xl">Join Us 😎</h1>
//           <h2 className="opacity-40">
//             Please provide all current information accurately.
//           </h2>
//         </div>

//         <div>
//           <div className="flex gap-1">
//             <h2>First name</h2>
//             <h2 className="text-red-600">*</h2>
//           </div>
//           <input
//             className="p-2 border rounded opacity-40 w-90"
//             name="firstName"
//             placeholder="firstName"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <div className="flex gap-1">
//             <h2>Last name</h2>
//             <h2 className="text-red-600">*</h2>
//           </div>
//           <input
//             className="p-2 border rounded opacity-40 w-90"
//             name="lastName"
//             placeholder="LastName"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <div className="flex gap-1">
//             <h2>Username</h2>
//             <h2 className="text-red-600">*</h2>
//           </div>
//           <input
//             className="p-2 border rounded opacity-40 w-90"
//             name="username"
//             placeholder="username"
//             onChange={handleChange}
//           />
//         </div>
//         <motion.button
//           className="w-90 h-10 mt-20 bg-black text-zinc-100 rounded"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={next}
//         >
//           Continue 1/3 →
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// }
