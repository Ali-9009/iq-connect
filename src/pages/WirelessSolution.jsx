import ScheduleButton from "../components/Buttons/ScheduleButton";
import FAQ from "../components/Services/Faq";
import FeatureSection from "../components/Services/FeatureSection";
import WhoItsFor from "../components/Services/WhoItsFor";
import WhyIQConnect from "../components/Services/WhyIQConnect";
import Cta from "../components/Services/Cta";

import { ctaData1 } from "../data/cta";
import { howItWorksData } from "../data/featuresData";
import { faq1 } from "../data/faqs";
import { whoItsForData1 } from "../data/whoItsFor";


function WirelessSolution() {
  return (
    <main className="relative">

      <div className="px-2 pt-2 ">
        <section className="hero-section">
          <h4 className="py-1 px-3 text-sm rounded-full bg-blue-200">Wireless Solution</h4>
          <h1 className="primary-heading">Your Wireless Brand. Live in Days.</h1>
          <p className="para1 max-w-214 ">
            AT&T, T-Mobile, or Verizon pick your network and launch an MVNO without building the infrastructure from scratch. iQ Connect handles activations, billing, and distribution so you can focus on growing your subscriber base.
          </p>
          <ScheduleButton onClick={() => setIsOpenSchedule(true)}>Get a Demo</ScheduleButton>
        </section>
      </div>

      <section className="secondary-background section py-12">
        <div className="main-section">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 lg:gap-6">
            <div className="">
              <img src="/images/activation-portal.png" alt="" />
            </div>
            <div className="">
              <div className="space-y-3">
                <h2 className="secondary-heading">
                  The Problem
                </h2>
                <p className="para1">Running an MVNO is complex. Your platform shouldn't make it harder.</p>
                <p className="para1">Most operators are juggling multiple systems one for activations, another for billing, another for commissions, another for reporting. Nothing talks to each other, everything breaks at the worst moment, and your team is spending more time fixing tools than selling lines.</p>
                <p className="para1">That's the problem iQ Connect was built to solve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        title="How It Works"
        subtitle="One platform. Every moving part covered."
        features={howItWorksData}
      />

      <WhoItsFor audience={whoItsForData1} />

      <WhyIQConnect />

      <FAQ faqs={faq1} title="FAQs" />

      <Cta data={ctaData1} />

    </main>
  );
}

export default WirelessSolution;
