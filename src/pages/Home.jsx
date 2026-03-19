import { useState } from "react";
import ScheduleButton from "../components/Buttons/ScheduleButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WhyIQConnect from "../components/WhyIQConnect";
import ScheduleModel from "../components/Models/ScheduleModel";
import CtaSection from "../components/CtaSection";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";

// const partners = [
//   "/images/Cricket.png",
//   "/images/Claro.png",
//   "/images/Cubacel.png",
//   "/images/Digicel.png",
//   "/images/Boost.png",
//   "/images/H2O.png",
//   "/images/Link Up.png",
//   "/images/Lyca.png",
//   "/images/MetroPCS.png",
//   "/images/MobileX.png",
//   "/images/Net10.png",
//   "/images/Qué Tal Mobile.png",
//   "/images/2.png",
//   "/images/Red Pocket Mobile.png",
//   "/images/Simple Mobile.png",
//   "/images/U2C - AT&T.png",
//   "/images/Ultra.png",
//   "/images/Xfinity.png",
//   "/images/AT&T.png",
//   "/images/T-Mobile.png",
//   "/images/Verizon.png",
// ];

const partners = [
  "/images/1.png",
  "/images/20.webp",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.png",
  "/images/12.webp",
  "/images/13.png",
  "/images/14.png",
  "/images/15.png",
  "/images/16.png",
  "/images/17.png",
  "/images/18.png",
  "/images/19.webp",
  "/images/21.png",
  "/images/22.png",

];


function Home() {
  const [isOpenSchedule, setIsOpenSchedule] = useState(false);

  return (
    <main className="relative">
   
      <div className="absolute  w-full h-screen primary-background -z-1"></div>
      <Header />

      <div className="px-2 pt-2 ">
        
    
        <section className="hero-section">
          <h1 className="primary-heading">
            The Premier MVNO Billing Platform & OSS BSS System.
          </h1>
          <p className="para1 max-w-214 ">
            Streamline your telecom operations with a unified platform for subscriber management, real-time billing, and
            automated activations across AT&T, T-Mobile, and Verizon.
          </p>
          <p className="para1 max-w-184 italic">
            Built for scale. Designed for growth. Trusted by operators
            worldwide.
          </p>
          <ScheduleButton onClick={() => setIsOpenSchedule(true)}>Schedule a Strategy Session</ScheduleButton>
          <ScheduleModel isOpen={isOpenSchedule} onClose={() => setIsOpenSchedule(false)}
            title="Schedule a Conversation"
          ></ScheduleModel>
        </section>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="secondary-heading text-center mb-12">Integrated partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            {partners.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={logo}
                  alt="partner logo"
                  className="max-h-10 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="w-full bg-(--primary-color) text-white py-12 lg:mt-28 mt-4">
        <div className="main-section grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT — Image */}
          <div className="flex justify-center md:justify-center">
            <img src="/images/dashboard.jpg" // 👈 apni image path yahan do alt="Dashboard Preview"
              className="w-full max-w-lg rounded-2xl" />
          </div>

          {/* RIGHT — Content */}
          <div className="space-y-6 ">
            <h1 className="secondary-heading text-white">
              One Unified Interface. Infinite Scalability.
            </h1>

            <p className="para1 text-white">
              iQ Connect is the engine behind successful mobile network virtual operators. We bridge the gap between complex
              carrier networks and your daily growth.
            </p>

            <ul className="para1 text-white who-we-power">
              <li>
                <strong>AT&T MVNO Partners:</strong>
                Launch faster with pre-integrated AT&T MVNO programs.
              </li>
              <li>
                <strong>Distributors & Retailers:</strong>
                Manage complex hierarchies and real-time commissions for GSM & CDMA MVNO models.
              </li>
              <li>
                <strong>Digital Marketplaces:</strong>
                Seamless API integration for high-volume telecom billing services.
              </li>
              <li>
                <strong>IoT & M2M:</strong>
                Robust connectivity management for the next generation of devices.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <WhyIQConnect />

      <section className="section">
        <div className="main-section">
          <h2 className="secondary-heading text-center mb-8">
            Features That Power Telecom Operations.
          </h2>

          <div className="flex lg:flex-row flex-col items-center gap-4">
            {/* left-side */}
            <div className="p-6 rounded-xl box-shadow lg:w-[50%] space-y-6">
              <div>
                <h6 className="font-semibold text-(--primary-color)">
                  Activations & Provisioning
                </h6>
                <p className="para2">
                  Real-time domestic and international routing for any AT&T MVNO or GSM/CDMA carrier.
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-(--primary-color)">
                  Convergent Billing Engine
                </h6>
                <p className="para2">
                  A flexible, PCI-compliant MVNO billing solution for prepaid, postpaid, and hybrid models.
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-(--primary-color)">
                  Subscriber Lifecycle Management
                </h6>
                <p className="para2">
                  Automate the journey from enrollment to retention with an intuitive business support system.
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-(--primary-color)">
                  Branded Dealer Portals
                </h6>
                <p className="para2">
                  Fully white-labeled interfaces. Your brand, powered by our OSS and BSS technology.
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-(--primary-color)">
                  Advanced Analytics
                </h6>
                <p className="para2">
                  Real-time dashboards for churn, ARPU, and sales velocity—turning "data" into "decisions".
                </p>
              </div>
            </div>
            {/* right-side */}
            <div className="lg:w-[50%] ">
              <img src="/images/power-growth.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="px-4 py-10 overflow-hidden">
        <div className="relative">

          <div className="flex gap-16 w-max animate-logo-slide items-center">

            <img src="/images/Cricket.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Claro.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Cubacel.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Digicel.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Boost.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/H2O.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Link Up.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Lyca.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/MetroPCS.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/MobileX.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Net10.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Qué Tal Mobile.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/2.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Red Pocket Mobile.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Simple Mobile.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/U2C - AT&T.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Ultra.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Xfinity.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/AT&T.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/T-Mobile.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Verizon.png" alt="Logo" className="h-10 w-auto" />

            <img src="/images/Cricket.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Claro.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Cubacel.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Digicel.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Boost.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/H2O.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Link Up.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Lyca.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/MetroPCS.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/MobileX.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Net10.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Qué Tal Mobile.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/2.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Red Pocket Mobile.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Simple Mobile.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/U2C - AT&T.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Ultra.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Xfinity.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/AT&T.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/T-Mobile.png" alt="Logo" className="h-10 w-auto" />
            <img src="/images/Verizon.png" alt="Logo" className="h-10 w-auto" />

          </div>

        </div>
      </section> */}

      <Testimonials />

      <CtaSection />

      <Blog />

      <Footer />
    </main>
  );
}

export default Home;
