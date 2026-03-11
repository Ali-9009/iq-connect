import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DistributionPortal() {
  return (
    <main className="relative">
      <div className="absolute top-0 left-0 w-full h-[100vh] primary-background -z-1"></div>
        <Header />
      <div className="px-2 pt-2 ">

        {/* hero section */}
        <section className="hero-section">
          <h1 className="primary-heading">IQ Connect Partner Portal</h1>
          <p className="para1 max-w-214 ">
            Built for MVNOs & Carriers Scaling Prepaid Distribution
          </p>
          <p className="para1 max-w-214 ">
            IQ Connect is an enterprise-grade distribution portal purpose-built
            for MVNOs, carriers, and aggregators launching or scaling prepaid
            wireless products through indirect sales channels.
          </p>
          <p className="para1 max-w-214 ">
            From dealer activations to commissions and settlements, IQ Connect
            gives you full operational and financial control of your
            distribution network — without custom development.
          </p>
        </section>
      </div>

      <section className="lg:mt-28">
        <div className="main-section">
          <div>
            <h2 className="secondary-heading text-center mb-2">
              Why IQ Connect
            </h2>
            <p className="para4 text-center">
              IQ Connect was designed to solve the real challenges MVNOs and
              carriers face when selling through dealer networks:
            </p>
          </div>

          <div className="grid xl:gap-10 md:gap-0 gap-y-6 grid-cols-2 md:grid-cols-4 mt-8">
            {/* card1 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="p-4 text-center flex flex-col items-center h-full w-full space-y-6">
                <div>
                  <img src="/images/tool-icon.png" alt="Icon" />
                </div>
                <h6 className="sm:text-base text-sm font-semibold text-(--primary-color)">
                  Launch prepaid distribution without building internal tooling
                </h6>
              </div>
            </div>

            {/* card2 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="p-4 text-center flex flex-col items-center h-full w-full space-y-6">
                <div>
                  <img src="/images/pricing-icon.png" alt="Icon" />
                </div>
                <h6 className="sm:text-base text-sm font-semibold text-(--primary-color)">
                  Control pricing, vending terms, and commissions at every level
                </h6>
              </div>
            </div>

            {/* card3 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="p-4 text-center flex flex-col items-center h-full w-full space-y-6">
                <div>
                  <img src="/images/activate-icon.png" alt="Icon" />
                </div>
                <h6 className="sm:text-base text-sm font-semibold text-(--primary-color)">
                  Enable fast, compliant activations across retail channels
                </h6>
              </div>
            </div>

            {/* card4 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="p-4 text-center flex flex-col items-center h-full w-full space-y-6">
                <div>
                  <img src="/images/billing-icon.png" alt="Icon" />
                </div>
                <h6 className="sm:text-base text-sm font-semibold text-(--primary-color)">
                  Automate billing, settlements, and partner payouts
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="secondary-background section py-12">
        <div className="main-section">
          <div className="flex lg:flex-row flex-col-reverse items-center gap-4 lg:gap-6">
            {/* leftside */}
            <div className="lg:w-[50%] max-w-2xl mx-auto flex justify-center">
              <img src="/images/activation-portal.png" alt="" />
            </div>
            {/* rightside */}
            <div className=" lg:w-[50%] space-y-0">
              <div className="space-y-3">
                <h2 className="secondary-heading ">
                  A Single Activation Platform for Your Entire Channel
                </h2>
                <p className="para1">Partner-Facing Activation Portal</p>
                <h6 className="font-semibold text-(--primary-color)">
                  Give dealers, agents, and non-traditional retail partners a
                  fast, intuitive front-end to activate your prepaid wireless
                  products.
                </h6>
                <ul className="para2 ml-4 list-decimal">
                  <li>Carrier-aligned activation workflows</li>
                  <li>Real-time validations to reduce errors and retries</li>
                  <li>
                    Optimized for retail stores, kiosks, and mobile devices
                  </li>
                  <li>
                    Role-based access for dealers, sub-agents, and sales reps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="main-section">

          <div>
            <h2 className="secondary-heading text-center mb-2">
              Enterprise Billing & Commission Engine
            </h2>
            <p className="para4 text-center">
              IQ Connect includes a robust billing and commission engine built
              for complex distribution hierarchies.
            </p>
          </div>

          <div className="grid xl:gap-10 gap-3 sm:gap-6  grid-cols-2 lg:grid-cols-4 mt-8">
            {/* card1 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full space-y-4">
                <div>
                  <img src="/images/footprint-icon.png" alt="Icon" />
                </div>
                <h6 className="sm:text-base text-sm text-(--primary-color)">
                  Flat, tiered, and spiff-based commission structures
                </h6>
              </div>
            </div>

            {/* card2 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full space-y-4">
                <div>
                  <img src="/images/handprint-icon.png" alt="Icon" />
                </div>
                <h6 className="sm:text-base text-sm text-(--primary-color)">
                  Support for master agents, sub-agents, and sales reps
                </h6>
              </div>
            </div>

            {/* card3 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full space-y-4">
                <div>
                  <img src="/images/file-icon.png" alt="Icon" />
                </div>
                <h6 className="sm:text-base text-sm text-(--primary-color)">
                  Real-time commission accrual and reporting
                </h6>
              </div>
            </div>

            {/* card4 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full space-y-4">
                <div>
                  <img src="/images/love-icon.png" alt="Icon" />
                </div>
                <h6 className="sm:text-base text-sm text-(--primary-color)">
                  Automated settlement calculations with audit-ready records
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="secondary-background section py-12">
        <div className="main-section">
          <div className="flex lg:flex-row flex-col-reverse items-center gap-4 lg:gap-6">
            {/* leftside */}
            <div className=" lg:w-[50%] lg:pl-20">
              <div className="space-y-3">
                <h2 className="secondary-heading ">
                  Why MVNOs & Carriers Choose IQ Connect
                </h2>
                <ul className="para2 ml-4 list-decimal">
                  <li>Faster time-to-market without internal builds</li>
                  <li>
                    Full control over dealer behavior and financial exposure
                  </li>
                  <li>Reduced operational overhead and support burden</li>
                  <li>A professional, branded experience for partners</li>
                </ul>
              </div>
            </div>
            {/* rightside */}
            <div className="lg:w-[50%] max-w-2xl mx-auto flex justify-center">
              <img src="/images/choose-carriers.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="main-section">
          <div>
            <h2 className="secondary-heading text-center mb-2">
              Flexible Vending Models for Prepaid & Postpaid
            </h2>
            <p className="para4 text-center">
              Configure how your products are sold and how partners are billed
              by product, partner, or channel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-10 relative">
            {/* image */}
            <img
              src="/images/vector.png"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] md:block hidden"
              alt=""
            />

            {/* left side */}
            <div>
              <h6 className="para1 font-semibold text-center mb-6">
                Supported Vending Models
              </h6>
              <div className="grid xl:gap-10 gap-3 lg:gap-6 grid-cols-1 sm:grid-cols-12">
                {/* card1 */}
                <div className=" bg-white text-(--black-color) sm:col-span-6 ">
                  {/* Content */}
                  <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full space-y-4">
                    <h6 className="text-[13px] lg:text-sm text-(--primary-color)">
                      Hybrid models with partner-specific rules
                    </h6>
                  </div>
                </div>

                {/* card2 */}
                <div className=" bg-white text-(--black-color) sm:col-span-6">
                  {/* Content */}
                  <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full space-y-4">
                    <h6 className="text-[13px] lg:text-sm text-(--primary-color) ">
                      Prepaid wallet-based vending
                    </h6>
                  </div>
                </div>

                {/* card3 */}
                <div className=" bg-white text-(--black-color) sm:col-span-6 sm:col-start-4">
                  {/* Content */}
                  <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full space-y-4">
                    <h6 className="text-[13px] lg:text-sm text-(--primary-color)">
                      Postpaid or credit-based vending
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            {/* right side */}
            <div>
              <h6 className="para1 font-semibold text-center mb-6">
                Partner Account Terms
              </h6>
              <div className="grid xl:gap-10 gap-3 lg:gap-6 grid-cols-1 sm:grid-cols-12">
                {/* card1 */}
                <div className=" bg-white text-(--black-color) sm:col-span-6 ">
                  {/* Content */}
                  <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full space-y-4">
                    <h6 className="text-[13px] lg:text-sm text-(--primary-color)">
                      ACH billing for channel partners
                    </h6>
                  </div>
                </div>

                {/* card2 */}
                <div className=" bg-white text-(--black-color) sm:col-span-6">
                  {/* Content */}
                  <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full space-y-4">
                    <h6 className="text-[13px] lg:text-sm text-(--primary-color) ">
                      Custom credit limits and payment schedules
                    </h6>
                  </div>
                </div>

                {/* card3 */}
                <div className=" bg-white text-(--black-color) sm:col-span-6 sm:col-start-4">
                  {/* Content */}
                  <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full space-y-4">
                    <h6 className="text-[13px] lg:text-sm text-(--primary-color)">
                      Automated balance monitoring and enforcement
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="main-section">
          <div>
            <h2 className="secondary-heading text-center mb-2">
              Why MVNOs & Carriers Choose IQ Connect
            </h2>
          </div>

          <div className="grid xl:gap-10 gap-3 sm:gap-6  sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {/* card1 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full relative">
                <div className="absolute -left-1 top-0 bottom-0 my-auto h-[80%] w-[3px] rounded-full bg-[var(--primary-color)]"></div>

                <h6 className="sm:text-base text-sm text-[var(--primary-color)]">
                  Flat, tiered, and spiff-based commission structures
                </h6>
              </div>
            </div>

            {/* card2 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full relative">
                <div className="absolute -left-1 top-0 bottom-0 my-auto h-[80%] w-[3px] rounded-full bg-[var(--primary-color)]"></div>
                <h6 className="sm:text-base text-sm text-(--primary-color)">
                  Support for master agents, sub-agents, and sales reps
                </h6>
              </div>
            </div>

            {/* card3 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full relative">
                <div className="absolute -left-1 top-0 bottom-0 my-auto h-[80%] w-[3px] rounded-full bg-[var(--primary-color)]"></div>
                <h6 className="sm:text-base text-sm text-(--primary-color)">
                  Real-time commission accrual and reporting
                </h6>
              </div>
            </div>

            {/* card4 */}
            <div className=" bg-white text-(--black-color) ">
              {/* Content */}
              <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full relative">
                <div className="absolute -left-1 top-0 bottom-0 my-auto h-[80%] w-[3px] rounded-full bg-[var(--primary-color)]"></div>
                <h6 className="sm:text-base text-sm text-(--primary-color)">
                  Automated settlement calculations with audit-ready records
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default DistributionPortal;
