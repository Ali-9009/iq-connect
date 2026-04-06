import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/Faqs";
import CounterX from "../components/Counter";


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
    "/images/17.png",
    "/images/18.png",
    "/images/19.webp",
    "/images/21.png",
    "/images/22.png",

];

const tabContent = [
    {
        label: "Telecom Infrastructure & MVNO",
        text: "The backbone of any wireless retail operation. These partners power carrier connectivity, SIM provisioning, number portability,and MVNO backend management — natively inside the IQ Connect workflow.",
        tags: ["Telgoo5", "Telispire", "Amdocs", "Helix Wireless", "MVNO Connect", "PrepaidiQ", "321 Communications"],
    },
    {
        label: "Payment Processing",
        text: "IQ Connect supports certified, PCI-compliant payment rails so every transaction at the counter is processed correctly whether by card, ACH, or digital wallet — with full settlement reporting builtin.experiences on top of our platform — all with developer-friendly documentation and dedicated technical support.",
        tags: ["Stripe", "NMI", "epay", "PAX"],
    },
    {
        label: "Lease-to-Own & Consumer Financing",
        text: "Device affordability is a real barrier in wireless retail. By integrating lease- to - own providers directly at checkout, IQ Connect turns a potential lost sale into a closed deal — without the retailer carrying any credit risk.",
        tags: ["Acima Leasing", "Progressive Leasing", "Terrace Finance"],
    },
    {
        label: "Logistics & Fulfillment",
        text: "Shipping rate quotes, label generation, and tracking — integrated at the point of sale.Whether a retailer ships a device to a customer or manages inventory transfers between locations,logistics is handled inside IQ Connect.",
        tags: ["FedEx", "Amazon"]
    },
    {
        label: "Tax Compliance",
        text: "Wireless taxes are among the most complex in retail. Telecomspecific tax rates vary by state, county, and transaction type. IQ Connect removes the compliance burden by calculating and applying the correct rates in real time — automatically.",
        tags: ["Avalara", "Ceretax"]
    },
    {
        label: "Hardware & Cloud Infrastructure",
        text: "The physical and cloud layer behind the platform. SUNMI smart POS devices deliver the in-store hardware experience, while Google Cloud underpins IQ Connect's uptime, data integrity, and scalability across every retail location.",
        tags: ["SUNMI", "Google"]
    },
];

const cards = [
    {
        name: "PrepaidiQ",
        description: "As a telecom technology service provider built specifically for the prepaid wireless channel, PrepaidiQ shares architectural DNA with IQ Connect. The integration covers dealer account management, activation workflows, and commission reconciliation — all handled inside the same session where the sale happens."
    },
    {
        name: "Telgoo5 & Telispire",
        description: "Two of the most widely deployed MVNO platforms in North America. Their presence in IQ Connect means retailers managing their own branded wireless offering — or working with white-label carriers — can handle billing, provisioning, and customer account management without switching platforms mid-transaction."
    },
    {
        name: "Amdocs",
        description: "Amdocs is the enterprise backbone behind many of the world's largest carriers. Its integration into IQ Connect extends the platform's reach to retailers operating at carrier-grade volume, where BSS/OSS connectivity, mediation, and complex billing scenarios need to work without custom development on the retailer's side."
    },
    {
        name: "Helix Wireless & MVNO Connect",
        description: "Purpose-built MVNO enablers that handle the operational complexity of running a wireless brand on top of a major carrier's network. Their integration lets IQ Connect retailers launch or support branded wireless products without managing separate back-office portals for every carrier relationship."
    },
    {
        name: "Stripe & NMI",
        description: "Stripe handles the card-present and card-not-present transaction layer with the reliability and developer-grade infrastructure that high-volume retail demands. NMI adds gateway-level flexibility for retailers with existing processor relationships they want to keep. Together, they ensure IQ Connect accommodates any payment configuration a retailer walks in with."
    },
    {
        name: "epay",
        description: "A global prepaid product distribution network that connects IQ Connect retailers to top-up, airtime, and prepaid PIN inventory from multiple carriers — managed through one integrated interface. No separate epay terminal needed at the counter."
    },
    {
        name: "PAX Technology",
        description: "PAX payment terminals are PCI-certified, field-tested, and widely deployed across North American retail. By certifying IQ Connect on PAX hardware, retailers get a single payment terminal that handles EMV chip, NFC contactless, and magstripe — all reconciling directly into the platform's reporting layer."
    },
    {
        name: "Acima Leasing & Progressive Leasing",
        description: "Two of the country's largest lease-to-own providers. When a customer can't — or won't — pay full retail for a device, these integrations present a lease option at checkout in real time. The retailer gets paid, the customer gets the device, and the financing is handled entirely by the lessor. No credit exposure for the store."
    },
    {
        name: "Terrace Finance",
        description: "Terrace Finance adds a secondary consumer financing option for retailers serving markets where traditional lease-to-own products aren't available or aren't the right fit. Having multiple financing integrations means IQ Connect retailers can present the right option for each customer's situation — rather than losing the sale entirely."
    },
    {
        name: "Avalara & Ceretax",
        description: "Telecom tax compliance is a specialized field. Rates change, jurisdictions overlap, and getting it wrong creates liability. Avalara and Ceretax both specialize in communications tax, and their integration with IQ Connect means the correct rate is applied to every transaction — automatically, in real time, with audit-ready records stored in the platform."
    },
    {
        name: "FedEx",
        description: "Rate shopping, label generation, and shipment tracking — embedded in the IQ Connect platform. Retailers shipping devices to customers or between locations don't need a separate FedEx account interface. The shipping workflow is part of the order workflow."
    },
    {
        name: "Amazon",
        description: "Amazon's fulfillment and marketplace infrastructure opens a direct channel for device and accessory sourcing. IQ Connect retailers can tap into product availability and fulfillment speed that would otherwise require negotiating direct distribution agreements — compressing the supply chain significantly."
    },
    {
        name: "SUNMI",
        description: "SUNMI's Android-based POS hardware is built for high-transaction retail environments. IQ Connect runs natively on SUNMI devices, giving retailers a single-vendor hardware answer for the counter — touchscreen interface, payment terminal, receipt printer, and barcode scanner in one certified configuration."
    },
    {
        name: "Google",
        description: "Google Cloud provides the infrastructure layer beneath IQ Connect — handling data storage, API scalability, and the uptime guarantees that a multi-location retail platform requires. Beyond infrastructure, the Google partnership opens pathways for analytics and workspace integrations that give operators better visibility into how their locations perform."
    },
    {
        name: "321 Communications",
        description: "A telecommunications solutions provider focused on today's independent dealer channel.Their integration supports the specific transaction types, carrier relationships, and operational workflows that smaller wireless operators depend on — ensuring IQ Connect serves the independent dealer market as effectively as it serves larger chains."
    }
];

const IntegrationPartners = () => {
    return (
        <>
            <Header />

            <section className="hero-section">
                <h1 className="primary-heading">
                    Why Partner Integrations
                </h1>
                <h1 className="secondary-heading">
                    Define the Platform
                </h1>
                <p className="para1 max-w-300 ">
                    Most point-of-sale platforms handle transactions. IQ Connect
                    handles the full picture. That distinction comes from a deliberate
                    choice: instead of building every capability from scratch, IQ
                    Connect integrates with the companies that have already set the
                    standard in their respective categories.
                </p>
                <p className="para1 max-w-300">
                    The result is a platform where a wireless retailer can activate a
                    prepaid line, collect payment through a certified processor, apply
                    the correct tax rate, ship a device, and offer a lease option
                    without ever logging into a separate system. The integrations aren't
                    add-ons. They're load-bearing walls.
                </p>
                <p className="para1 max-w-300">
                    Each partner below was selected based on market depth, API
                    reliability, industry adoption, and direct alignment with the day-today operational needs of independent wireless dealers, MVNOs,
                    and multi-location retailers.
                </p>
            </section>

            <section className="pt-16">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="secondary-heading text-center mb-12">
                        Integrated partners
                    </h2>

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

            <section className="lg:mt-22 mt-4 py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-6">
                        <h3 className="text-(--primary-color) font-bold">
                            HOW IT FITS TOGETHER
                        </h3>
                        <h1 className="secondary-heading">
                            Six Categories. One Platform.
                        </h1>
                        <p className="para1 max-w-2xl">
                            IQ Connect's partner ecosystem covers every operational layer of a
                            modern wireless retail business from the first sale to the last
                            mile.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tabContent.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                                    {item.label}
                                </h3>

                                <p className="text-sm text-[#475569] leading-relaxed mb-5">
                                    {item.text}
                                </p>

                                {/* Dynamic Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 rounded-full border border-gray-300 text-[#0F172A] bg-white"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lg:mt-16 mt-4 py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-6">
                        <h3 className="text-(--primary-color) font-bold">
                            PARTNER DETAILS
                        </h3>
                        <h1 className="secondary-heading">
                            What Each Partner Brings to
                            the Table
                        </h1>
                        <p className="para1 max-w-2xl">
                            A closer look at why these specific companies were chosen — and
                            what their presence inside IQ Connect actually means at the store
                            level.  
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-[#475569] leading-relaxed mb-5">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CounterX />

            <FAQ />

            <Footer />

        </>

    );
};

export default IntegrationPartners;