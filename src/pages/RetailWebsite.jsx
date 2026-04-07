import ScheduleButton from "../components/Buttons/ScheduleButton";
import FAQ from "../components/Services/Faq";
import FeatureSection from "../components/Services/FeatureSection";
import WhoItsFor from "../components/Services/WhoItsFor";
import Cta from "../components/Services/Cta";

import { ctaData2 } from "../data/cta";
import {  whoItsForData2 } from "../data/whoItsFor";
import { retailFeatures } from "../data/featuresData";
import { faq2 } from "../data/faqs";
import MobileTable from "../components/Services/MobileTable";

function RetailWebsite() {
  return (
    <main className="relative">

      <div className="px-2 pt-2 ">
        <section className="hero-section">
          <h4 className="py-1 px-3 text-sm rounded-full bg-blue-200">Retail Website + Mobile App</h4>
          <h1 className="primary-heading">Meet Your Customers Where They Are.</h1>
          <p className="para1 max-w-214 ">
            A branded online store and a native mobile app built for wireless, connected to your entire operation. Your subscribers buy, activate, and manage their service on your terms, on any device.
          </p>
          <ScheduleButton onClick={() => setIsOpenSchedule(true)}>Get a Demo</ScheduleButton>
        </section>
      </div>

      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* LEFT: PROBLEM */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The Problem
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              You're running a wireless brand but your customers can't interact with it beyond your store.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              They want to check their balance at midnight. Buy a plan on a Sunday. Pay their bill without calling anyone. And right now you're either sending them to a generic portal or making them wait until Monday.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Every touchpoint you're missing is a churn risk. A branded retail website and mobile app fix that and they work better together than either does alone.
            </p>
          </div>

          {/* RIGHT: SOLUTION */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The Solution
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Two channels. One ecosystem. Zero disconnected data.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Your retail website and mobile app aren't separate products bolted together. They're both powered by the same iQ Connect platform same subscriber data, same billing engine, same real-time sync.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              What happens on the website reflects instantly in the app and vice versa.
            </p>

            {/* Highlight Box */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-gray-200">
              <p className="text-sm text-gray-500">
                Real-time sync across all touchpoints
              </p>
              <p className="text-lg font-semibold text-gray-900">
                No delays. No duplicate systems.
              </p>
            </div>
          </div>

        </div>
      </section>

      <FeatureSection
        title="Retail Website"
        subtitle="Your storefront. Open 24/7. Fully yours."
        features={retailFeatures}
      />

      <section className="py-6 section">
        <div className="main-section">
          <div>
            <h2 className="secondary-heading text-center mb-2">
              Mobile App
            </h2>
          </div>

          <div className="grid xl:gap-10 gap-3 sm:gap-6  sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {/* card1 */}
            <div className=" bg-white text-(--black-color) ">
              <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full relative">
                <div className="absolute -left-1 top-0 bottom-0 my-auto h-[80%] w-0.75 rounded-full bg-(--primary-color)"></div>
                <h2 className="font-semibold mb-2">For Your Subscribers</h2>
                <h6 className="sm:text-base text-sm text-(--primary-color)">
                  Flat, tiered, and spiff-based commission structures
                </h6>
              </div>
            </div>

            {/* card2 */}
            <div className=" bg-white text-(--black-color) ">
              <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full relative">
                <div className="absolute -left-1 top-0 bottom-0 my-auto h-[80%] w-0.75 rounded-full bg-(--primary-color)"></div>
                <h2 className="font-semibold mb-2">For Your Subscribers</h2>
                <h6 className="sm:text-base text-sm text-(--primary-color)">
                  Flat, tiered, and spiff-based commission structures
                </h6>
              </div>
            </div>

            {/* card3 */}
            <div className=" bg-white text-(--black-color) ">
              <div className="sm:p-4 p-2 text-start border-light rounded-lg light-shadow h-full w-full relative">
                <div className="absolute -left-1 top-0 bottom-0 my-auto h-[80%] w-0.75 rounded-full bg-(--primary-color)"></div>
                <h2 className="font-semibold mb-2">For Your Subscribers</h2>
                <h6 className="sm:text-base text-sm text-(--primary-color)">
                  Flat, tiered, and spiff-based commission structures
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MobileTable />

      <WhoItsFor audience={whoItsForData2} />

      <FAQ faqs={faq2} title="FAQs" />

      <Cta data={ctaData2} />

    </main>
  );
}

export default RetailWebsite;
