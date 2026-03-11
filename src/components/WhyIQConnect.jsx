export default function WhyIQConnect() {
  const features = [
    {
      id: "01",
      classes: 'md:col-span-4',
      title: "Purpose-Built Telecom DNA",
      desc: "We aren't a generic SaaS. Every workflow is engineered for the OSS BSS industry, ensuring your business support systems are future-proof.",
    },
    {
      id: "02",
      classes: 'md:col-span-4',
      title: "Your Dedicated Growth Partner",
      desc: "You aren’t just buying MVNO software. You get a Dedicated Support Expert who acts as an extension of your team—providing real-world billing support as you scale.",
    },
    {
      id: "03",
      classes: 'md:col-span-4',
      title: "Carrier-Grade Resilience",
      desc: "Built with redundancy and failover at its core. We ensure 99.9% uptime for activations and convergent billing solutions.",
    },
  ];

  return (
    <section className="section">
      <div className="main-section">
        {/* Heading */}
        <h2 className="secondary-heading text-center mb-8">Why Leaders Choose iQ Connect over Legacy OSS BSS Systems.</h2>

        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-8 lg:grid-cols-12">
          {features.map((item) => (
            <div key={item.id} className={'relative flex bg-white items-start ' + item.classes}>
              {/* Number badge */}
              <span className="mt-4 box-background text-white font-bold px-4 py-2 rounded-tl-lg rounded-bl-lg shadow">
                {item.id}
              </span>

              {/* Content */}
              <div className="border-light p-3 text-center rounded-2xl h-full">
                <h3 className="lg:text-lg font-semibold text-(--primary-color) mb-4">
                  {item.title}
                </h3>

                <p className="para2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
