import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ScheduleButton from "../components/Buttons/ScheduleButton";
import ScheduleModel from "../components/Models/ScheduleModel";

function TaxationAndRegulatorySolutions() {
  const navigate = useNavigate();
  const [isOpenSchedule, setIsOpenSchedule] = useState(false);
  return (
    <main className="relative">
      <div className="px-2 pt-2 ">

        {/* hero section */}
        <section className="hero-section">
          <h1 className="primary-heading">Taxation & Regulatory Solutions</h1>
          <p className="para1 max-w-214 ">
            Because Telecom Compliance Shouldn’t Be a Headache Telecom taxation
            and regulation are complicated. IQ Connect makes them manageable.
          </p>
          <p className="para1 max-w-214 ">
            Our Taxation & Regulatory platform is built for telecom operators,
            governments, ISPs, MVNOs, and regulators who need precision,
            transparency, and control—without drowning in spreadsheets, manual
            audits, or outdated systems.
          </p>
          <ScheduleButton onClick={() => setIsOpenSchedule(true)}>
            Schedule a Conversation
          </ScheduleButton>
          <ScheduleModel
            isOpen={isOpenSchedule}
            onClose={() => setIsOpenSchedule(false)}
            title="Schedule a Conversation"
          ></ScheduleModel>
        </section>
      </div>

      <section className="py-12 lg:mt- mt-4 bg-(--primary-color) text-white">
        <div className="main-section grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT — Image */}
          <div className="flex justify-center md:justify-center">
            <img
              src="/images/billingandcharging.png"
              alt="Dashboard "
              className="w-full max-w-lg rounded-2xl"
            />
          </div>

          {/* RIGHT — Content */}
          <div className="space-y-3 ">
            <h1 className="secondary-heading text-white">
              Built for Telecom Operators Who Don’t Guess
            </h1>

            <p className="para4 text-white">
              Easily manage all your subscriptions with real time, insight,
              recent orders, and performance analytics.
            </p>

            <p className="para4 text-white">With IQ Connect, you can:</p>
            <ul className="para2 ml-4 list-decimal text-white">
              <li>
                Calculate taxes and fees with precision (yes, even the messy
                ones)
              </li>
              <li>
                Stay compliant with evolving local and international regulations
              </li>
              <li>Track usage in real time across all services</li>
              <li>Generate clean, audit-ready invoices</li>
              <li>Collect revenue without friction</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="main-section">
          <div>
            <h2 className="secondary-heading text-center mb-2">
              Billing & Charging That Actually Keeps Up
            </h2>
            <p className="para4 text-center">
              Telecom moves fast. Regulations change faster. IQ Connect is built
              for both.
            </p>
          </div>

          <div className="grid xl:gap-10 gap-6 sm:gap-3 lg:gap-6 md:grid-cols-3 mt-8">
            {/* card1 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="sm:p-4 p-2 text-start  rounded-lg shadow1 h-full w-full flex items-center gap-4">
                <div className="bg-(--primary-color) shrink-0 size-14 flex items-center justify-center rounded-full shrink-0">
                  <img src="/images/card-icon.png" className="w-9" alt="Icon" />
                </div>
                <h6 className="lg:text-lg font-semibold text-base text-(--primary-color)">
                  Flat, tiered, and spiff-based commission structures
                </h6>
              </div>
            </div>

            {/* card2 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="sm:p-4 p-2 text-start  rounded-lg shadow1 h-full w-full flex items-center gap-4">
                <div className="bg-(--primary-color) shrink-0 size-14 flex items-center justify-center rounded-full shrink-0">
                  <img
                    src="/images/power-icon.png"
                    className="w-8"
                    alt="Icon"
                  />
                </div>
                <h6 className="lg:text-lg font-semibold text-base text-(--primary-color)">
                  Handles high volumes, complex pricing, and regulatory shifts
                </h6>
              </div>
            </div>

            {/* card3 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="sm:p-4 p-2 text-start  rounded-lg shadow1 h-full w-full flex items-center gap-4">
                <div className="bg-(--primary-color) shrink-0 size-14 flex items-center justify-center rounded-full shrink-0">
                  <img
                    src="/images/weather-icon.png"
                    className="w-9"
                    alt="Icon"
                  />
                </div>
                <h6 className="lg:text-lg font-semibold text-base text-(--primary-color)">
                  Adapts instantly to new products, markets, and mandates
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="main-section">
          <div className="space-y-3 mb-8">
            <h2 className="secondary-heading text-center ">
              Taxation & Regulatory Solutions for Governments
            </h2>
            <p className="para4 text-[#60C5FF] font-semibold text-center">
              Serious Oversight. Zero Guesswork.
            </p>
            <p className="para4 text-center">
              IQ Connect equips governments and regulators with deep visibility
              into telecom operations—powered by real data, not assumptions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-8 max-md:px-4">
            <div className="p-5 rounded-lg space-y-1 shadow2 ">
              <h6 className="font-semibold lg:text-base text-sm text-(--primary-color)">
                Platform delivers advanced analysis across:
              </h6>
              <ul className="text-sm ml-4 list-decimal -space-y-1 ">
                <li>CDR, EDR, TDR, PMDR, GGSN, and network records</li>
                <li>Duplicate and anomaly detection</li>
                <li>Traffic volume measurement by category</li>
                <li>
                  Automated calculation of traffic taxes, usage taxes, VAT, and
                  other levies
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-lg  space-y-1 shadow2 ">
              <h6 className="font-semibold lg:text-base text-sm text-(--primary-color)">
                Supports precise classification across:
              </h6>
              <ul className="text-sm ml-4 list-decimal -space-y-1 ">
                <li>On-net and off-net traffic</li>
                <li>National interconnection traffic</li>
                <li>International outgoing traffic (by destination)</li>
                <li>Roaming services</li>
                <li>SMS, MMS, data, and value-added services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:mb-20 sm:mb-20 mb-16 section">
        <div className="main-section">
          <div>
            <h2 className="secondary-heading text-center mb-2">
              Who Uses IQ Connect
            </h2>
          </div>

          <div className="grid sm:gap-12 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {/* card1 */}
            <div className="  py-4 text-(--black-color) relative">
              {/* Content */}
              <div className="bg-white sm:py-7 px-4 p-8 border-10 border-(--primary-color) text-start  rounded-2xl shadow1 h-full w-full flex flex-col justify-center items-center gap-4">
                <div className="bg-(--primary-color) h-33 w-30 rounded-2xl absolute bottom-0 -right-5 -z-1"></div>

                <div className="bg-(--primary-color) shrink-0 size-16 flex items-center justify-center rounded-full shrink-0">
                  <img src="/images/law-icon.png" className="w-9" alt="Icon" />
                </div>
                <h6 className="lg:text-base font-semibold text-base text-center text-(--primary-color)">
                  Governments & Regulatory Authorities
                </h6>
              </div>
            </div>

            {/* card2 */}
            <div className="  py-4 text-(--black-color) relative">
              {/* Content */}
              <div className="bg-white sm:py-7 px-4 p-8 border-10 border-(--primary-color) text-start  rounded-2xl shadow1 h-full w-full flex flex-col justify-center items-center gap-4">
                <div className="bg-(--primary-color) h-33 w-30 rounded-2xl absolute bottom-0 -right-5 -z-1"></div>

                <div className="bg-(--primary-color) shrink-0 size-16 flex items-center justify-center rounded-full shrink-0">
                  <img
                    src="/images/telecom-icon.png"
                    className="w-9"
                    alt="Icon"
                  />
                </div>
                <h6 className="lg:text-base font-semibold text-base text-center text-(--primary-color)">
                  Telecom Operators & MVNOs
                </h6>
              </div>
            </div>

            {/* card3 */}
            <div className="  py-4 text-(--black-color) relative">
              {/* Content */}
              <div className="bg-white sm:py-7 px-4 p-8 border-10 border-(--primary-color) text-start  rounded-2xl shadow1 h-full w-full flex flex-col justify-center items-center gap-4">
                <div className="bg-(--primary-color) h-33 w-30 rounded-2xl absolute bottom-0 -right-5 -z-1"></div>

                <div className="bg-(--primary-color) shrink-0 size-16 flex items-center justify-center rounded-full shrink-0">
                  <img
                    src="/images/hotspot-icon.png"
                    className="w-9"
                    alt="Icon"
                  />
                </div>
                <h6 className="lg:text-base font-semibold text-base text-center text-(--primary-color)">
                  Wireless & Infrastructure Providers
                </h6>
              </div>
            </div>

            {/* card4 */}
            <div className="  py-4 text-(--black-color) relative">
              {/* Content */}
              <div className="bg-white sm:py-7 px-4 p-8 border-8 border-(--primary-color) text-start  rounded-2xl shadow1 h-full w-full flex flex-col justify-center items-center gap-4">
                <div className="bg-(--primary-color) h-33 w-30 rounded-2xl absolute bottom-0 -right-5 -z-1"></div>

                <div className="bg-(--primary-color) shrink-0 size-16 flex items-center justify-center rounded-full shrink-0">
                  <img src="/images/isp-icon.png" className="w-9" alt="Icon" />
                </div>
                <h6 className="lg:text-base font-semibold text-base text-center text-(--primary-color)">
                  ISPs & VoIP Providers
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="main-section grid md:grid-cols-2 gap-4 items-center">
          {/* LEFT — Image */}
          <div className="flex justify-center md:justify-center">
            <img
              src="/images/why-iqconnect.png"
              alt="Dashboard "
              className="w-full max-w-lg rounded-2xl"
            />
          </div>

          {/* RIGHT — Content */}
          <div className="space-y-3 ">
            <h1 className="secondary-heading ">
              Why Governments & Regulators Choose IQ Connect
            </h1>

            <p className="para4 font-medium">
              Because compliance shouldn’t be blind—and enforcement shouldn’t be
              manual.
            </p>

            <p className="para4 font-semibold">IQ Connect delivers:</p>
            <ul className="text-sm ml-4 list-decimal ">
              <li>Accurate, defensible tax calculations</li>
              <li>Advanced analytics and regulatory reporting</li>
              <li>Built-in fraud detection</li>
              <li>Quality of Service (QoS) insights</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="main-section text-center space-y-4">
          <h1 className="secondary-heading ">Ready to Talk?</h1>
          <p className="max-lg:text-sm text-(--primary-color) max-w-100 mx-auto  font-semibold ">
            Got questions? Need clarity? Want a system that actually works?
          </p>
          <button onClick={() => navigate('/contact')} className="py-2 px-6 border-2 border-(--primary-color) text-(--primary-color) rounded-4xl">
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );
}

export default TaxationAndRegulatorySolutions;
