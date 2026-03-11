import { useNavigate } from "react-router-dom";

function Step1() {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl card-background p-8">
      <h2 className="card-heading">Your Brand</h2>

      <div className="mt-8 space-y-4">
        <div className="">
          <label htmlFor="" className="lg:text-lg">
            Brand Name
          </label>
          <input
            placeholder="....."
            className="w-full rounded-lg p-3 mt-2 input-border focus:outline-none"
          />
        </div>

        <div className="">
          <label htmlFor="" className="lg:text-lg">
            Discription
          </label>
          <textarea
            placeholder="....."
            rows="3"
            className="w-full border rounded-lg p-3 mt-2 input-border focus:outline-none"
          />
        </div>
        <button onClick={() => navigate("/launch/step-2")} className="card-btn">
          Continue
        </button>
      </div>
    </div>
  );
}

export default Step1;
