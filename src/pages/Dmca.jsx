import Footer from "../components/Footer";
import Header from "../components/Header";

function Dmca() {
  return (
    <main className="relative">
        <div className="absolute top-0 left-0 w-full h-[100vh] primary-background -z-1"></div>
        <Header />
      <div className="px-2 pt-2">

        <section className="px-3 md:px-8 lg:pt-16 lg:py-0 py-16">
          <h1 className="secondary-heading mb-8">
            Digital Millennium Copyright Act (Dmca) Compliance
          </h1>

          <div className="space-y-5 text-(--primary-color) capitalize">

            {/* Intro */}
            <h4 className="heading3">Dmca</h4>
            <p>
              Iq Connect Abides By The Federal Digital Millennium Copyright Act
              By Responding To Notices Of Alleged Infringement That Comply With
              The Dmca And Other Applicable Laws. We May Remove Or Disable
              Access To Material That Is Claimed To Be Infringing.
            </p>

            <p>
              We Do Not Control Content Hosted On Third Party Websites And
              Cannot Remove Content From Sites We Do Not Own Or Operate. If You
              Are The Copyright Owner Of Content Hosted On A Third Party Site,
              Please Contact That Site’s Administrator Directly.
            </p>

            <p>
              Before Submitting A Notice Of Infringement Or Counter Notification,
              You May Wish To Consult An Attorney To Understand Your Rights And
              Obligations Under The Law.
            </p>

            <p>
              The Following Notice Requirements Are Provided To Comply With Our
              Rights And Obligations Under The Dmca And Do Not Constitute Legal
              Advice.
            </p>

            {/* Notice */}
            <h4 className="heading3">Notice To Copyright Owners</h4>
            <p>
              If You Believe That Material Posted On Or Accessible From This Site
              Is Infringing, Please Provide A Written And Signed Dmca Notice To
              The Designated Agent Using The Contact Information Provided On Our
              Contact Page.
            </p>

            <p>
              Your Dmca Notice Must Include The Following Information:
            </p>

            {/* Bullet style using paragraphs for same layout */}
            <p>• A Physical Or Electronic Signature Of The Copyright Owner Or Authorized Person</p>
            <p>• Identification Of The Copyrighted Work Claimed To Have Been Infringed</p>
            <p>• Identification Of The Infringing Material And Information To Locate It</p>
            <p>• Contact Information Including Address, Phone Number, And Email</p>
            <p>• A Statement Of Good Faith Belief That The Use Is Not Authorized</p>
            <p>• A Statement Under Penalty Of Perjury That The Notice Is Accurate</p>

            {/* Send Notice */}
            <p>
              Please Send All Dmca Notices To The Address Listed On Our Contact Page.
            </p>

            {/* Warning */}
            <p>
              Please Note That Under The Dmca You May Be Held Liable For Damages,
              Including Attorney Fees, If You Knowingly Misrepresent That Content
              Is Infringing. If You Are Unsure, Consult A Qualified Legal
              Professional Before Submitting A Notice.
            </p>

          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

export default Dmca;
