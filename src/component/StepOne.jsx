export default function StepOne({ next, update }) {
  const handleChange = (e) => update({ [e.target.name]: e.target.value });

  return (
    <div className="flex flex-col gap-4 items-center pt-100 bg-violet-200 h-screen w-screen">
      <div className="flex flex-col gap-4 bg-white p-10 rounded shadow-lg w-100 h-150">
        <div className="">
          {" "}
          <img className="w-15 h-15" src="Main.png" alt="" />
          <h1 className="text-2xl">Join Us 😎</h1>
          <h2 className="opacity-40">
            Please provide all current information accurately.
          </h2>
        </div>
        <div className="">
          <div className="flex flex-row gap-1">
            <h2>First name </h2>
            <h2 className="text-red-600">*</h2>
          </div>
          <input
            className="p-2 border rounded opacity-40 w-80"
            name="firstName"
            placeholder="First name"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="flex flex-row gap-1">
            <h2>Last name </h2>
            <h2 className="text-red-600">*</h2>
          </div>
          <input
            className="p-2 border rounded opacity-40 w-80"
            name="lastName"
            placeholder="Last name"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="flex flex-row gap-1">
            <h2>Username </h2>
            <h2 className="text-red-600">*</h2>
          </div>
          <input
            className="p-2 border rounded opacity-40 w-80"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <button
          className="w-80 h-10 mt-20 bg-black text-zinc-100 rounded"
          onClick={next}
        >
          Continue 1/3 →
        </button>
      </div>
    </div>
  );
}
