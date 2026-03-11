import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Step5() {
  const navigate = useNavigate();

  // ✅ selected payment state
  const [method, setMethod] = useState(""); // default selected

  const cardStyle = (name) =>
    `lg:min-h-23 min-h-18 flex flex-col items-center justify-center rounded-2xl border-light box-shadow cursor-pointer transition bg-white 
     ${method === name ? "border-[#5AFB1F]" : ""}`;

  const dotStyle = (name) =>
    `size-4 rounded-full mt-2 ${
      method === name ? "bg-[#5AFB1F]" : "bg-gray-300"
    }`;

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl card-background p-8 lg:p-12">
      <h2 className="card-heading">Set up payments</h2>
      <p className="lg:text-lg text-center">How would you like to get paid?</p>

      <div className="mt-12 space-y-4">

        {/* Payment Methods */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">

          {/* Stripe */}
          <div
            onClick={() => setMethod("stripe")}
            className={cardStyle("stripe")}
          >
            <img src="/images/strip.png" alt="" />
            <div className={dotStyle("stripe")} />
          </div>

          {/* NMI */}
          <div
            onClick={() => setMethod("nmi")}
            className={cardStyle("nmi")}
          >
            <img src="/images/nmi.png" alt="" />
            <div className={dotStyle("nmi")} />
          </div>

        </div>

        {/* Buttons */}
        <div className="flex sm:flex-row flex-col items-center justify-between gap-4 lg:gap-6 max-w-4xl mx-auto mt-8">
          <button
            onClick={() => navigate("/launch/step-6")}
            className="card-btn"
          >
            Continue
          </button>

          <button
            onClick={() => navigate("/launch/step-6")}
            className="card-btn"
          >
            Skip For Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step5;
