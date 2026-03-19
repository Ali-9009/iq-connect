import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const tabContent = [
  {
    label: "Partner Portal",
    text: "A powerful partner portal that lets you define multiple distribution points with custom pricing, permissions, and access controls. Enable smooth activations and refills across your partner network while maintaining full visibility, consistency, and control over how your services are sold.",
  },
  {
    label: "API Solution",
    text: "Seamlessly integrate our robust API suite into your existing systems. Automate workflows, sync data in real-time, and build custom experiences on top of our platform — all with developer-friendly documentation and dedicated technical support.",
  },
  {
    label: "Retail Website",
    text: "Launch a fully branded retail website with built-in ecommerce capabilities. Let your customers browse plans, activate SIMs, manage accounts, and make payments — all from a white-labeled storefront you fully control.",
  },
  {
    label: "Wireless Customer Support Specialists",
    text: "Access a team of trained wireless support specialists who handle customer inquiries on your behalf. Reduce your operational burden while ensuring every subscriber receives fast, professional, and brand-consistent support.",
  },
  {
    label: "Subscriber Management",
    text: "Manage your entire subscriber base from one centralized dashboard. View usage, update plans, handle suspensions, process refunds, and track lifecycle events — all in real time with full audit trails.",
  },
  {
    label: "Kiosk Station",
    text: "Deploy self-service kiosk stations at retail locations to drive activations and top-ups without staff involvement. Our kiosk solution is fully brandable, easy to operate, and integrates directly with your MVNO platform.",
  },
  {
    label: "Promotions at Your Fingertips",
    text: "Create, schedule, and manage promotions effortlessly. Offer discounts, bonus data, referral rewards, and limited-time deals — all configurable from your dashboard with no engineering effort required.",
  },
  {
    label: "Real-Time Analytics & Control",
    text: "Get instant visibility into revenue, activations, churn, and usage patterns. Make data-driven decisions with live dashboards, exportable reports, and customizable alerts that keep you ahead of the curve.",
  },
];

function Feature() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="relative">
      <div className="absolute top-0 left-0 w-full primary-background -z-1"></div>
        <Header />
      <div className="px-2 pt-2 ">

        {/* hero section */}
        <section className="hero-section">
          <h1 className="primary-heading">
            Everything You Need to Operate and Scale an MVNO
          </h1>
          <p className="para1 max-w-184 italic">
            Built so you don't have to think about it.
          </p>
        </section>
      </div>

      <section className="lg:mt-22 mt-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabContent.map((item, index) => (
              <div key={index} className="relative group rounded-2xl p-0.5">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border border-gray-200"></div>

                {/* Card Content */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 ">
                  <h3 className="text-xl font-semibold mb-4">{item.label}</h3>
                  <p className="text-[#12243A] text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 section secondary-background text-white mb-4">
        <div className="main-section">
          <div className="bg-white rounded-lg xl:p-16 lg:p-14 md:p-10 px-2 max-md:py-6 box-shadow">
            <h2 className="secondary-heading max-md:text-center mb-4">
              Built to Support Growth at Every Stage
            </h2>

            <div className="grid md:grid-cols-3 gap-2 max-md:px-4">
              <div className="px-2 py-4 rounded-lg border border-[#DDDDDD] space-y-1 light-shadow">
                <div>
                  <img src="/images/cart-icon.png" alt="" />
                </div>
                <h6 className="font-semibold max-lg:text-sm text-(--primary-color)">
                  Launch Faster, Expand Smarter
                </h6>
                <p className="small-para">
                  Enter new markets and channels without opening stores, rebuilding systems, or increasing operational complexity.
                </p>
              </div>

              <div className="px-2 py-4 rounded-lg border border-[#DDDDDD] space-y-1 light-shadow">
                <div>
                  <img src="/images/hand-icon.png" alt="" />
                </div>
                <h6 className="font-semibold max-lg:text-sm text-(--primary-color)">
                  Deliver Better Experiences
                </h6>
                <p className="small-para">
                  Consistent activations, billing, and support across every customer touchpoint.
                </p>
              </div>

              <div className="px-2 py-4 rounded-lg border border-[#DDDDDD] space-y-1 light-shadow">
                <div>
                  <img src="/images/down-arrow.png" alt="" />
                </div>
                <h6 className="font-semibold max-lg:text-sm text-(--primary-color)">
                  Lower Operational Overhead
                </h6>
                <p className="small-para">
                  Reduce staffing, training, and support costs through centralized workflows and automated processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Feature;