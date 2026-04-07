import { Outlet, useLocation } from "react-router-dom";

function LaunchLayout() {
  const location = useLocation();

  const steps = [
    "/launch",
    "/launch/step-2",
    "/launch/step-3",
    "/launch/step-4",
    "/launch/step-5",
    "/launch/step-6",
  ];

  const currentStep = steps.indexOf(location.pathname) + 1;

  const progress = (currentStep / 6) * 100;

  return (
    <main className="relative">
    
      <div className="px-2 pt-2 ">

        {/* hero section */}
        <section className="text-center flex flex-col items-center px-5 md:px-8 lg:pt-16 lg:py-0 pt-16 pb-12 gap-4">
          <h1 className="primary-heading">Launch Your MVNO</h1>
          <p className="para1 max-w-160 ">
            A guided, step-by-step experience to bring your wireless brand to
            life
          </p>
        </section>
      </div>

      {/* Step Info */}
      <div className="max-w-3xl mx-auto lg:mt-14 px-4">
        <p className="mb-2 font-semibold">Step {currentStep} Of 6</p>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-(--primary-color)"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 🔥 YAHI CONTENT CHANGE HOGA */}
      <div className="mt-10 px-4">
        <Outlet />
      </div>
    </main>
  );
}

export default LaunchLayout;
