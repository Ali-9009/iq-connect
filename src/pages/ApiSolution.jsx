import ScheduleButton from "../components/Buttons/ScheduleButton";
import FAQ from "../components/Services/Faq";
import FeatureSection from "../components/Services/FeatureSection";
import WhoItsFor from "../components/Services/WhoItsFor";
import Cta from "../components/Services/Cta";

import { ctaData3 } from "../data/cta";
import { whoItsForData3 } from "../data/whoItsFor";
import { howItWorks2 } from "../data/featuresData";
import { faq3 } from "../data/faqs";

function ApiSolution() {
  return (
    <main className="relative">

      <div className="px-2 pt-2 ">
        <section className="hero-section">
          <h4 className="py-1 px-3 text-sm rounded-full bg-blue-200">API Solution</h4>
          <h1 className="primary-heading">Build on Infrastructure That Already Works.</h1>
          <p className="para1 max-w-214 ">
            Connect your systems to iQ Connect through a clean, well-documented API. Automate activations, sync subscriber data, and build exactly what your operation needs without starting from scratch.
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
                <p className="para1">Most telecom APIs are a nightmare to work with.</p>
                <p className="para1">Outdated documentation. Inconsistent endpoints. Support that takes three days to respond. Your dev team ends up spending more time reverse-engineering the integration than actually building the product.</p>
                <p className="para1">If you're connecting a marketplace, automating a workflow, or building a custom experience on top of a wireless platform the API either gets out of your way or it becomes your biggest bottleneck.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        title="How It Works"
        subtitle="Clean endpoints. Real documentation. A team that actually picks up the phone."
        features={howItWorks2}
      />

      <WhoItsFor audience={whoItsForData3} />

      <FAQ faqs={faq3} title="FAQs" />

      <Cta data={ctaData3} />

    </main>
  );
}

export default ApiSolution;
