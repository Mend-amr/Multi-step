// import { motion } from "framer-motion";
// export default function StepThree({ next, back, update, hidden = false }) {
//   return (
//     <motion.div
//       className="flex flex-col gap-4 items-center pt-24 bg-violet-200 h-screen w-screen"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       <motion.div
//         className="flex flex-col gap-4 bg-white p-10 rounded-2xl shadow-lg w-110 h-150"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <div>
//           {" "}
//           <img className="w-15 h-15 " src="Main.png" alt="" />
//           <h2 className="text-2xl">Join Us 😎</h2>
//           <h2 className="opacity-40">
//             Please provide all current information accurately.
//           </h2>
//         </div>
//         <div>
//           <div className="flex flex-row gap-1">
//             <h2> Data of birth </h2>
//             <h2 className="text-red-600">*</h2>
//           </div>
//           <input
//             className="border rounded p-2"
//             type="date"
//             onChange={(e) => update({ dob: e.target.value })}
//           />
//         </div>
//         <div>
//           <div className="flex flex-row gap-1">
//             <h2>Profile image </h2>
//             <h2 className="text-red-600">*</h2>
//           </div>
//           <div>
//             <input
//               hidden={true}
//               className="border rounde h-40 opacity-40"
//               type="file"
//               onChange={(e) => update({ image: e.target.files[0] })}
//             />
//             <div
//               hidden={hidden}
//               className=" h-40 w-90 bg-gray-200 flex items-center justify-center flex-col gap-2 rounded"
//             >
//               <div className="rounded-4xl bg-white h-7 w-7 flex items-center justify-center">
//                 <img className="h-3 w-3" src="image1.png" alt="" />
//               </div>
//               Add Image
//             </div>
//             <div>
//               <h2 className="opacity-40 text-sm">Max size: 5MB</h2>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-between gap-2 mt-4">
//           <div className="flex justify-between border flex items-center justify-center rounded h-10 w-40">
//             <button onClick={back}>← Back</button>
//           </div>
//           <div className="flex justify-between bg-black text-amber-50 flex justify-center rounded h-10 w-60">
//             <button onClick={next}>Sumbit 3/3 →</button>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }
