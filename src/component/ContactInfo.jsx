// export default function ContactInfo({ update }) {
//   const [contactInfo, setContactInfo] = useState({
//     address: "",
//     city: "",
//     country: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setContactInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     update({ contactInfo });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="address"
//         placeholder="Хаяг"
//         value={contactInfo.address}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="city"
//         placeholder="Хот"
//         value={contactInfo.city}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="country"
//         placeholder="Улс"
//         value={contactInfo.country}
//         onChange={handleChange}
//       />
//       <button type="submit">Дараагийн алхам</button>
//     </form>
//   );
// }
