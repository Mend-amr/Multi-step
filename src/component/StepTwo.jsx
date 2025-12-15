export default function StepTwo({ next, back, update }) {
  const handleChange = (e) => update({ [e.target.name]: e.target.value });

  return (
    <div className="flex flex-col gap-4 items-center pt-100 bg-violet-200 h-screen w-screen">
      <div className="flex flex-col gap-4 bg-white p-10 rounded shadow-lg w-100 h-150">
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
            className="p-2 border rounded opacity-40 w-80"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="flex flex-row gap-1">
            <h2>phone number </h2>
            <h2 className="text-red-600">*</h2>
          </div>
          <input
            className="p-2 border rounded opacity-40 w-80"
            name="phone"
            placeholder="Phone number"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="flex flex-row gap-1">
            <h2>password </h2>
            <h2 className="text-red-600">*</h2>
          </div>
          <input
            className="p-2 border rounded opacity-40 w-80 "
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
            className="p-2 border rounded opacity-40 w-80"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between gap-2  ">
          <div className="flex justify-between border flex items-center justify-center rounded h-10 w-30">
            <button onClick={back}>← Back</button>
          </div>
          <div className="flex justify-between bg-black text-amber-50 flex justify-center rounded h-10 w-50">
            <button onClick={next}>Continue 2/3 →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
