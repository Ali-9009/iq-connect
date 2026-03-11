import { useNavigate } from "react-router-dom";
import { useState } from "react";
import IpButtons from "../../components/Buttons/IpButtons";

function Step6() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl card-background p-8 lg:p-12">
      <div className="flex items-center justify-center">
        <img src="/images/congratulations.png" alt="" />
      </div>
      <div className="max-w-xl mx-auto space-y-2 mt-4">
        <h2 className="card-heading">Congratulations!</h2>
        <p className="lg:text-lg text-center">
          Your MVNO brand has been successfully launched. Now it’s time to start
          getting customers.
        </p>
        <p className="lg:text-lg text-center">
          Share the link below to collect required customer information
        </p>
        <p className="lg:text-lg text-center">
          Update your DNS A record using the IP address provided
        </p>
      </div>
      <IpButtons />
    </div>
  );
}

export default Step6;
