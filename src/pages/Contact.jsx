import { Phone, Mail, MapPin, Clock } from "lucide-react";

function Contact() {
  return (
    <main className="relative">

      <div className="px-2 pt-2 ">

        {/* hero section */}
        <section className="text-center flex flex-col items-center px-5 md:px-8 lg:pt-16 lg:py-0 py-16 gap-4">
          <h1 className="primary-heading">Get in touch</h1>
          <p className="para1 max-w-160 ">
            Reach out, and let's create a universe of possibilities together!
          </p>
        </section>
        
        <section className="lg:mt-16">
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            {/* Card Wrapper */}
            <div className="bg-[#f9fbfd] rounded-xl md:rounded-3xl shadow-xl p-4 sm:p-10 md:px-12 md:py-10 grid lg:grid-cols-2 gap-10 items-center">
              {/* LEFT SIDE (Form) */}
              <div>
                <h2 className="secondary-heading lg:text-nowrap mb-4">
                  Let’s connect constellations
                </h2>

                <p className="text-(--primary-color) max-lg:text-sm mb-8">
                  Let's align our constellations! Reach out and let the magic of
                  collaboration illuminate our skies.
                </p>

                <form className="space-y-4">
                  {/* Name Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input-primary "
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input-primary "
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email"
                    className="input-primary w-full"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input-primary w-full"
                  />

                  <textarea
                    rows="4"
                    placeholder="Message"
                    className="w-full input-primary"
                  />

                  {/* Button */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-(--primary-color) w-full text-white px-6 py-2 rounded-full "
                    >
                      Send it
                    </button>
                  </div>
                </form>
              </div>

              {/* RIGHT SIDE (Contact Info) */}
              <div className="flex justify-center">
                <div className="lg:w-full md:max-w-lg p-8 space-y-6"> 

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Phone className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">+1 (800) 123-4567</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Mail className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">sales@iqconnect.com</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <MapPin className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">New York, United States</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Clock className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Working Hours</p>
                      <p className="text-gray-600">8:00 AM – 5:00 PM AEST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
