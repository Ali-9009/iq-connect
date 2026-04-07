import { useNavigate } from "react-router-dom";

function Kiosk() {
  const navigate = useNavigate();
  return (
    <main className="relative">
   
      <div className="px-2 pt-2 ">

        {/* hero section */}
        <section className="main-section lg:pt-16 lg:pb-0 pt-12 pb-2">
          <div className="flex items-center gap-8 sm:gap-4 sm:flex-row flex-col">
            {/* leftside */}
            <div className="space-y-6 sm:w-[50%] text-center sm:text-start">
              <h1 className="primary-heading">Interactive Display</h1>
              <p className="lg:text-lg font-bold">
                The Future of Telecom Industry
              </p>
              <p className="para1 max-w-134">
                A self-service terminal cuts a store’s costs on operations and
                labor cost.
              </p>
              <button onClick={() => navigate('/contact')} className="py-2 px-6 max-sm:text-sm border-2 border-(--primary-color) text-(--primary-color) rounded-4xl">
                Talk to an Expert
              </button>
            </div>

            {/* rightside */}
            <div className="sm:w-[50%]">
              <img src="/images/kiosk.png" alt="" />
            </div>
          </div>
        </section>
      </div>

      <section className="section">
        <div className="main-section text-center">
          <h2 className="secondary-heading  mb-5">Elegant Yet Powerful.</h2>
          <h4 className="lg:text-[26px] md:text-[22px] text-[18px] text-(--primary-color) font-semibold lg:leading-11">
            Standard NFC Support For SoftPOS
          </h4>
          <p className="para4">
            Built-in NFC capabilities of devices to provide a secure, flexible,
            and cost-effective solution for accepting contactless payments. NFC
            technology enables fast and efficient transactions, providing a
            seamless payment experience for customers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="main-section text-center">
          <h2 className="secondary-heading  mb-16">
            Different Versions To Fit Your Use Case.
          </h2>
          <div className="grid xl:gap-10 lg:gap-7 md:gap-7 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {/* card1 */}
            <div className="relative flex bg-white text-(--black-color) items-start ">
              {/* Number badge */}
              <span className="absolute lg:-top-10 -top-7  font-bold lg:text-[50px] md:text-[40px] text-[36px]">
                01
              </span>

              {/* Content */}
              <div className="p-4 text-start border border-light h-full w-full">
                <h3 className="lg:text-lg font-semibold text-(--primary-color) my-4">
                  Esim Generator
                </h3>

                <ul className="para2 list-disc ml-4">
                  <li>QR CODE SCAN</li>
                  <li>RECEIPT PRINTING</li>
                  <li>A4/A5 LASER PRINTING (OPTIONAL)</li>
                </ul>
              </div>
            </div>

            {/* card2 */}
            <div className="relative flex  bg-white text-(--black-color) items-start">
              {/* Number badge */}
              <span className="absolute lg:-top-10 -top-7  font-bold lg:text-[50px] md:text-[40px] text-[36px]">
                02
              </span>

              {/* Content */}
              <div className="p-4 text-start border border-light h-full w-full">
                <h3 className="lg:text-lg font-semibold text-(--primary-color) my-4">
                  Refills & Topup
                </h3>

                <ul className="para2 list-disc ml-4">
                  <li>CONTACTLESS LOYALTY</li>
                  <li>CARD READING</li>
                  <li>QR CODE SCAN</li>
                  <li>CARD PAYMENT</li>
                  <li>RECEIPT PRINTING</li>
                  <li>NFC-SUPPORTED</li>
                  <li>SOFTPOS SUPPORTED</li>
                </ul>
              </div>
            </div>

            {/* card3 */}
            <div className="relative flex bg-white text-(--black-color) items-start">
              {/* Number badge */}
              <span className="absolute lg:-top-10 -top-7  font-bold lg:text-[50px] md:text-[40px] text-[36px]">
                03
              </span>

              {/* Content */}
              <div className="p-4 text-start border border-light h-full w-full">
                <h3 className="lg:text-lg font-semibold text-(--primary-color) my-4">
                  Esim Generator
                </h3>

                <ul className="para2 list-disc ml-4">
                  <li>QR CODE SCAN</li>
                  <li>RECEIPT PRINTING</li>
                  <li>A4/A5 LASER PRINTING (OPTIONAL)</li>
                </ul>
              </div>
            </div>

            {/* card4 */}
            <div className="relative flex bg-white text-(--black-color) items-start">
              {/* Number badge */}
              <span className="absolute lg:-top-10 -top-7  font-bold lg:text-[50px] md:text-[40px] text-[36px]">
                04
              </span>

              {/* Content */}
              <div className="p-4 text-start border border-light h-full w-full">
                <h3 className="lg:text-lg font-semibold text-(--primary-color) my-4">
                  Extensible Version
                </h3>

                <ul className="para2 list-disc ml-4">
                  <li>PASSPORT READING</li>
                  <li>RFID IDENTIFICATION</li>
                  <li>LABEL PRINTING</li>
                  <li>PERFORATED INVOICE PRINTING</li>
                  <li>TICKET PRINTING</li>
                  <li>A4/A5 LASER PRINTING</li>
                  <li>AUTOMATIC IC CARD ISSUE WRITING & READING</li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Kiosk;
