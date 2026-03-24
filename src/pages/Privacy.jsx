import Footer from "../components/Footer";
import Header from "../components/Header";

function Privacy() {
  return (
    <main className="relative">
        <div className="absolute top-0 left-0 w-full h-[100vh] primary-background -z-1"></div>
        <Header />
      <div className="px-2 pt-2 max-w-7xl mx-auto">

        {/* hero section */}
        <section className="px-3 md:px-8 lg:pt-12 lg:py-0 py-12">
          <h1 className="secondary-heading text-center mb-8">Privacy Policy</h1>

          <div className="space-y-5 text-(--primary-color) capitalize">

            {/* Your Privacy */}
            <h4 className="heading3">Your Privacy</h4>
            <p>
              Iq Connect Follows All Legal Requirements To Protect Your Privacy. Our Privacy Policy Is A Legal Statement That Explains How We May Collect Information From You, How We May Share Your Information, And How You Can Limit The Sharing Of Your Information. We Utilize The Personal Data You Offer In A Way That Is Consistent With This Personal Privacy Policy. If You Provide Personal Data For A Particular Reason, We May Use The Personal Data In Connection With The Reason For Which It Was Provided.
            </p>

            {/* Definitions */}
            <h4 className="heading3">Definitions</h4>
            <p>
              Non-Personal Information Is Information That Is Not Personally Identifiable To You And That We Automatically Collect When You Access Our Website With A Web Browser. It May Also Include Publicly Available Information That Is Shared Between You And Others.
            </p>
            <p>
              Personally Identifiable Information Is Non-Public Information That Is Personally Identifiable To You And Obtained In Order For Us To Provide Services Within Our Website. This May Include Your Name, Email Address, And Other Related Information That You Provide To Us.
            </p>

            {/* Information We Collect */}
            <h4 className="heading3">Information We Collect</h4>
            <p>
              Generally, You Control The Amount And Type Of Information You Provide To Us When Using Our Website. As A Visitor, You Can Browse Our Website Without Providing Personally Identifiable Information.
            </p>

            {/* Electronic Communication */}
            <h4 className="heading3">Electronic Communication</h4>
            <p>
              When You Use Our Website, We Automatically Collect Certain Computer Information Through Interaction Of Your Mobile Phone Or Web Browser With Our Site. This Is Typically Non-Personal Information.
            </p>

            {/* Cookies */}
            <h4 className="heading3">Cookies</h4>
            <p>
              Our Website Uses Cookies To Identify The Areas You Have Visited. Cookies Help Personalize Content And Improve User Experience. You May Disable Cookies In Your Browser Settings, But This May Limit Website Functionality.
            </p>

            {/* Geographical Information */}
            <h4 className="heading3">Geographical Information</h4>
            <p>
              If You Use Our Mobile Application, We May Use Gps Technology To Determine Your Location To Display City Specific Content Or Ads. Your Location Is Not Shared With Others.
            </p>

            {/* Automatic Information */}
            <h4 className="heading3">Automatic Information</h4>
            <p>
              We Receive Automatic Information From Your Browser Or Device Including Your Ip Address, Browser Type, Device Type, And Operating System. This Helps Us Improve Our Services.
            </p>

            {/* Log Data */}
            <h4 className="heading3">Log Data</h4>
            <p>
              We Collect Log Data Including Your Ip Address, Visited Pages, Visit Duration, And Other Statistics To Analyze User Behavior.
            </p>

            {/* Children Privacy */}
            <h4 className="heading3">Children’s Privacy</h4>
            <p>
              In Compliance With The Children’s Online Privacy Protection Act, We Do Not Knowingly Collect Personal Information From Children Under 13 Without Parental Consent.
            </p>

            {/* Customizing */}
            <h4 className="heading3">Customizing Our Website</h4>
            <p>
              We May Use Your Information To Customize Content, Layout, And Functionality For A Better User Experience.
            </p>

            {/* Sharing Information */}
            <h4 className="heading3">Sharing Information</h4>
            <p>
              We Do Not Sell Or Rent Your Personally Identifiable Information. We May Share It With Trusted Partners Who Help Operate Our Website Under Strict Confidentiality Agreements.
            </p>

            {/* Data Aggregation */}
            <h4 className="heading3">Data Aggregation</h4>
            <p>
              We May Use Non-Personal Information For Analytics And Business Purposes. Personally Identifiable Information Is Never Included In Aggregated Reports.
            </p>

            {/* Legal Disclosure */}
            <h4 className="heading3">Legally Required Disclosures</h4>
            <p>
              We May Disclose Information If Required By Law Or To Protect Our Rights, Property, Or Users.
            </p>

            {/* Opt-Out */}
            <h4 className="heading3">Opt-Out Option</h4>
            <p>
              You May Opt Out Of Receiving Non-Essential Emails Or Notifications Through Your Account Settings.
            </p>

            {/* External Links */}
            <h4 className="heading3">External Links</h4>
            <p>
              Our Website May Contain Links To Third Party Websites. We Are Not Responsible For Their Privacy Practices.
            </p>

            {/* Security */}
            <h4 className="heading3">Security</h4>
            <p>
              We Use Industry Standard Security Measures Including Encryption To Protect Your Information. However, No Method Of Transmission Over The Internet Is Completely Secure.
            </p>

            {/* Updates */}
            <h4 className="heading3">Privacy Policy Updates</h4>
            <p>
              We May Update This Privacy Policy From Time To Time. Changes Will Be Posted On This Page With The Updated Date.
            </p>

            {/* Questions */}
            <h4 className="heading3">Questions</h4>
            <p>
              If You Have Any Questions About This Privacy Policy, Please Contact Us.
            </p>

          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

export default Privacy;
