import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="lg:px-2">
      <div className="bg-(--primary-color) lg:rounded-tl-xl lg:rounded-tr-xl">
      <div className="main-section  text-white pb-4 pt-12 section">
        <div className="">
          {/* Top Grid */}
          <div className="grid  md:grid-cols-5 gap-6">
            {/* Left Side */}
            <div className="space-y-5 col-span-2 md:block md:text-start  flex flex-col items-start justify-center">
              <div>
                <img src="logo.png" alt="" />
              </div>

              <p className="para3 sm:max-w-xs">
                Powering the future of telecom operations with innovative,
                scalable solutions.
              </p>

              <div className="hidden sm:block">
                <p className="para3">EMAIL: SALES@IQCONNECT.COM</p>

                <p className="para3">HOURS: 8:00 AM – 5:00 PM AEST</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="max-sm:col-span-2  ">
              <h3 className="font-semibold md:text-lg mb-5">Quick Links</h3>
              <ul className="space-y-3 font-light text-xs sm:text-sm">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/launch'>Launch Your MVNO</Link></li>
                  <li><Link to='/integratedPartners'>Integrated Partners</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='/insights'>Blog</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="max-sm:col-span-2 ">
              <h3 className="font-semibold md:text-lg mb-5">Services</h3>
              <ul className="space-y-3 font-light text-xs sm:text-sm">
                  <li><Link to="/services/Wireless-Solution">Wireless Solution</Link></li>
                  <li><Link to="/services/retail-website-+-mobile-app">Retail Website + Mobile App</Link></li>
                  <li><Link to="/services/Api-Solution">Api Solution</Link></li>
                  <li><Link to="/services/Virtual-Credit-Cards">Virtual Credit Cards</Link></li>
              </ul>
            </div>

            {/* Terms */}
            <div className="max-sm:col-span-2 ">
              <div className=" ">
              <h3 className="font-semibold md:text-lg mb-5">Terms</h3>
              <ul className="space-y-3 font-light text-xs sm:text-sm">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions">Term of Services</Link></li>
                <li><Link to="/dmca">DMCA</Link></li>
              </ul>
            </div>
            </div>

            {/* Contact */}
            <div className="max-sm:col-span-2 sm:hidden">
              <div className=" ">
              <h3 className="font-semibold md:text-lg mb-5">Contact</h3>
              <ul className="space-y-3 font-light text-xs sm:text-sm">
                <li><p className="">EMAIL: SALES@IQCONNECT.COM</p></li>
                <li><p className="">HOURS: 8:00 AM – 5:00 PM AEST</p></li>
              </ul>
            </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-[#04AFEE] my-5"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className=" text-xs sm:text-sm">
              © 2026 IQ CONNECT. ALL RIGHTS RESERVED.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/iqconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-white rounded-md hover:bg-white hover:text-black transition"
                >
                  <Instagram size={16} />
                </a>

                <a
                  href="https://www.youtube.com/@iqconnect_1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-white rounded-md hover:bg-white hover:text-black transition"
                >
                  <Youtube size={16} />
                </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
