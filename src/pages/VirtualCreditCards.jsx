import ScheduleButton from "../components/Buttons/ScheduleButton";
import FAQ from "../components/Services/Faq";
import FeatureSection from "../components/Services/FeatureSection";
import WhoItsFor from "../components/Services/WhoItsFor";
import Cta from "../components/Services/Cta";

import { ctaData4 } from "../data/cta";
import { whoItsForData4 } from "../data/whoItsFor";
import { howItWorks3 } from "../data/featuresData";
import { faq4 } from "../data/faqs";

function VirtualCreditCards() {
  return (
    <main className="relative">

      <div className="px-2 pt-2 ">
        <section className="hero-section">
          <h4 className="py-1 px-3 text-sm rounded-full bg-blue-200">Virtual Credit Cards</h4>
          <h1 className="primary-heading">Pay, Control, and Scale Without the Friction.</h1>
          <p className="para1 max-w-214 ">
            Issue virtual credit cards for your operation, your dealers, and your subscribers instantly, with full spending controls and real-time visibility. No bank paperwork. No waiting.
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
                <p className="para1">Wireless operations move fast. Traditional payment infrastructure doesn't.</p>
                <p className="para1">You're managing dealer payouts, supplier payments, and subscriber refunds across multiple carriers and distribution channels. And you're doing it with bank transfers that take days, physical cards that get lost, and zero visibility into where the money actually went until the statement closes.</p>
                <p className="para1">That's not a payment problem. That's an operational problem disguised as one.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        title="How It Works"
        subtitle="Issue cards instantly. Control every dollar in real time."
        features={howItWorks3}
      />

      <WhoItsFor audience={whoItsForData4} />

      <FAQ faqs={faq4} title="FAQs" />

      <Cta data={ctaData4} />

    </main>
  );
}

export default VirtualCreditCards;
