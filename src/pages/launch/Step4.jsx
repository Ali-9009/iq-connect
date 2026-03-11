import { useNavigate } from "react-router-dom";
import FileUpload from "../../components/FileUpload";
import PlansSection from "../../components/PlansSection";

function Step4() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl card-background p-8 px-2 lg:p-12">
      <h2 className="card-heading">Choose Your Plans</h2>

      <div className="mt-12 space-y-4">
        {/* <!-- Swiper Container --> */}
       <PlansSection />

        <div className="flex sm:flex-row flex-col items-center justify-between gap-4 lg:gap-6 max-w-md mx-auto mt-8">
          <button
            onClick={() => navigate("/launch/step-5")}
            className="card-btn"
          >
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step4;
