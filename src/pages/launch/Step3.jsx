import { useNavigate } from "react-router-dom";
import FileUpload from "../../components/FileUpload";

function Step3() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl card-background p-8 lg:p-12">
      <h2 className="card-heading">Select Your Network</h2>

      <div className="mt-12 space-y-4">

          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
              <div className="bg-white lg:min-h-23 min-h-18 flex items-center justify-center rounded-2xl border-light box-shadow">
                <img src="/images/at&t.png" className="w-33 lg:w-43" alt="" />
              </div>
              <div className="bg-white lg:min-h-23 min-h-18 flex items-center justify-center rounded-2xl border-light box-shadow">
                <img src="/images/t-mobile.png" className="w-33 lg:w-43" alt="" />
              </div>
              <div className="bg-white lg:min-h-23 min-h-18 flex items-center justify-center rounded-2xl border-light box-shadow">
                <img src="/images/verizon.png" className="w-33 lg:w-43" alt="" />
              </div>
          </div>

        <div className="flex sm:flex-row flex-col items-center justify-between gap-4 lg:gap-6 max-w-4xl mx-auto mt-8"> 
          <button onClick={() => navigate("/launch/step-4")} className="card-btn">
          Skip Now
        </button>
          <button onClick={() => navigate("/launch/step-4")} className="card-btn">
          Continue
        </button>
      </div>
        </div>
    </div>
  );
}

export default Step3;
