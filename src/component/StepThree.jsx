export default function StepThree({ back, update }) {
  return (
    <div className="flex flex-col gap-4 items-center pt-100 bg-violet-200 h-screen w-screen">
      <div className="flex flex-col gap-4 bg-white p-10 rounded shadow-lg w-100 h-150">
        <div>
          {" "}
          <img className="w-15 h-15 " src="Main.png" alt="" />
          <h2 className="text-2xl">Join Us 😎</h2>
          <h2 className="opacity-40">
            Please provide all current information accurately.
          </h2>
        </div>
        <div>
          <div className="flex flex-row gap-1">
            <h2> Data of birth </h2>
            <h2 className="text-red-600">*</h2>
          </div>
          <input
            className="border rounded p-2"
            type="date"
            onChange={(e) => update({ dob: e.target.value })}
          />
        </div>
        <div>
          <div className="flex flex-row gap-1">
            <h2>Profile image </h2>
            <h2 className="text-red-600">*</h2>
          </div>
          <input
            className="border rounded h-40 opacity-40"
            type="file"
            onChange={(e) => update({ image: e.target.files[0] })}
          />
        </div>
        <div className="flex justify-between gap-2 mt-10">
          <div className="flex justify-between border flex items-center justify-center rounded h-10 w-30">
            <button onClick={back}>← Back</button>
          </div>
          <div className="flex justify-between bg-black text-amber-50 flex justify-center rounded h-10 w-50">
            <button onClick={() => alert("Submitted!")}>Continue 3/3 →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
