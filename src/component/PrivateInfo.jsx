// export default function PrivateInfo({ update }) {
//   const [privateInfo, setPrivateInfo] = useState({
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPrivateInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     update({ privateInfo });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         name="email"
//         placeholder="Имэйл хаяг"
//         value={privateInfo.email}
//         onChange={handleChange}
//       />
//       <input
//         type="tel"
//         name="phone"
//         placeholder="Утасны дугаар"
//         value={privateInfo.phone}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Нууц үг оруулна уу"
//         value={privateInfo.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Дараагийн алхам</button>
//     </form>
//   );
// }
