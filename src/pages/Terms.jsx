import Footer from "../components/Footer";
import Header from "../components/Header";

function Terms() {
  return (
    <main className="relative">
      <div className="absolute top-0 left-0 w-full h-[100vh] primary-background -z-1"></div>
        <Header />
      <div className="px-2 pt-2 max-w-7xl mx-auto">

        <section className="px-3 md:px-8 lg:pt-12 lg:py-0 py-12">
          <h1 className="secondary-heading text-center mb-8">Terms Of Service</h1>

          <div className="space-y-5 text-(--primary-color) capitalize">
            <p>
              This Web Page Represents A Legal Document That Serves As Our Terms
              Of Service And It Governs The Legal Terms Of All Websites,
              Webpages, Subdomains, And Any Associated Web-Based And Mobile
              Applications.
            </p>

            <p>
              By Accessing This Website, You Agree To Be Bound By These Terms
              And Conditions Of Use And All Applicable Laws And Regulations. If
              You Do Not Agree With Any Of These Terms, You Are Prohibited From
              Using This Website.
            </p>

            <p>
              We May Revise These Terms At Any Time Without Notice. You Should
              Review Them Periodically To Stay Informed Of Any Changes.
            </p>

            <p>Last Updated January 15, 2021</p>

            {/* Definitions */}
            <h4 className="heading3">Definitions</h4>
            <p>
              The Terms Us, We, Or Our Refer To Iqconnect.Com, The Owner Of The
              Website. A Visitor Is Someone Who Browses The Website. A Member Is
              Someone Who Has Registered With Us To Use Our Services. A User
              Refers To Either A Visitor Or A Member.
            </p>

            {/* Restrictions */}
            <h4 className="heading3">Restrictions On Use</h4>
            <p>
              You May Not Modify Or Copy The Materials, Use Them For Commercial
              Purposes, Attempt To Reverse Engineer Any Software, Or Remove
              Copyright Notices From The Website.
            </p>

            {/* Account */}
            <h4 className="heading3">Your Account</h4>
            <p>
              You Are Responsible For Maintaining The Confidentiality Of Your
              Account And Password. We Reserve The Right To Suspend Or Terminate
              Accounts That Violate These Terms.
            </p>

            {/* User Content */}
            <h4 className="heading3">User Content And Comments</h4>
            <p>
              Users May Post Reviews Or Comments As Long As They Are Not
              Illegal, Offensive, Or Infringing. By Posting Content, You Grant
              Us A Royalty Free License To Use, Display, And Distribute That
              Content.
            </p>

            {/* Legal Compliance */}
            <h4 className="heading3">Legal Compliance</h4>
            <p>
              You Agree To Comply With All Local, State, And International Laws
              While Using Our Website. We May Investigate Complaints And Take
              Necessary Action If Required.
            </p>

            {/* Intellectual Property */}
            <h4 className="heading3">Intellectual Property</h4>
            <p>
              All Content, Logos, Trademarks, And Code On This Website Are
              Protected By Intellectual Property Laws. You May Not Use Them
              Without Written Permission.
            </p>

            {/* Disclaimer */}
            <h4 className="heading3">Disclaimer</h4>
            <p>
              All Content On This Website Is Provided As Is Without Warranties
              Of Any Kind. Your Use Of The Website Is At Your Own Risk.
            </p>

            {/* Limitation */}
            <h4 className="heading3">Limitation Of Liability</h4>
            <p>
              We Shall Not Be Liable For Any Damages Arising From The Use Or
              Inability To Use This Website. Our Liability Shall Not Exceed The
              Maximum Amount Permitted By Law.
            </p>

            {/* Third Party */}
            <h4 className="heading3">Links To Third Parties</h4>
            <p>
              Our Website May Contain Links To Third Party Websites. We Are Not
              Responsible For Their Content Or Privacy Practices.
            </p>

            {/* Governing Law */}
            <h4 className="heading3">Governing Law</h4>
            <p>
              These Terms Are Governed By The Laws Of Florida Without Regard To
              Conflict Of Law Principles. Any Disputes Shall Be Resolved In
              Florida Courts.
            </p>

            {/* Indemnity */}
            <h4 className="heading3">Indemnity</h4>
            <p>
              You Agree To Indemnify And Hold Us Harmless From Any Claims,
              Losses, Or Damages Arising From Your Use Of The Website Or
              Violation Of These Terms.
            </p>

            {/* General */}
            <h4 className="heading3">General Terms</h4>
            <p>
              These Terms Constitute The Entire Agreement Between You And Us. If
              Any Provision Is Found Invalid, The Remaining Provisions Shall
              Continue In Full Force And Effect.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

export default Terms;
