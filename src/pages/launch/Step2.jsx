import { useNavigate } from "react-router-dom";
import FileUpload from "../../components/FileUpload";

function Step2() {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl card-background p-8">
      <h2 className="card-heading">Branding & Business Information</h2>

      <div className="mt-8 space-y-4">
        <div className="">
          <label htmlFor="" className="lg:text-lg">
            Legal Business Name
          </label>
          <input
            placeholder="....."
            className="w-full rounded-lg p-3 mt-2 input-border focus:outline-none"
          />
        </div>

        <div className="">
          <label htmlFor="" className="lg:text-lg">
            Business Email
          </label>
          <input
            placeholder="....."
            className="w-full rounded-lg p-3 mt-2 input-border focus:outline-none"
          />
        </div>

        <div className="">
          <label htmlFor="" className="lg:text-lg">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="....."
            className="w-full rounded-lg p-3 mt-2 input-border focus:outline-none"
          />
        </div>

        <div className="">
          <label htmlFor="" className="lg:text-lg">
            Business Address
          </label>
          <textarea
            placeholder="......"
            rows="4"
            className="w-full border rounded-lg p-3 mt-2 input-border focus:outline-none"
          />
        </div>

        {/* file upload input */}
        <FileUpload />

        <button onClick={() => navigate("/launch/step-3")} className="card-btn">
          Continue
        </button>
      </div>
    </div>
  );
}

export default Step2;
