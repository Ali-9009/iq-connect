import { Facebook, Instagram, Twitter } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ScheduleModel from "../components/Models/ScheduleModel";
import ScheduleButton from "../components/Buttons/ScheduleButton";


const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.11-2.12C19.34 3.5 12 3.5 12 3.5s-7.34 0-9.388.566a2.994 2.994 0 0 0-2.11 2.12A31.636 31.636 0 0 0 0 12a31.636 31.636 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.11 2.12C4.66 20.5 12 20.5 12 20.5s7.34 0 9.388-.566a2.994 2.994 0 0 0 2.11-2.12A31.636 31.636 0 0 0 24 12a31.636 31.636 0 0 0-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-22.43.36 9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 0 0-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.49 4.49 0 0 1-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.55 4.55 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.14A9.07 9.07 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.18 9.18 0 0 0 23 3z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const ChevronDown = ({ open }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transition: "transform 0.25s",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      flexShrink: 0,
    }}
  >
    <polyline points="6,9 12,15 18,9" />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Logo = () => (
  <a href="#" className="flex items-center gap-1 no-underline flex-shrink-0">
    <svg width="52" height="38" viewBox="0 0 52 38" fill="none">
      <path
        d="M6 30 Q26 4 46 30"
        stroke="#4aa8e8"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <text
        x="3"
        y="38"
        fill="white"
        fontSize="22"
        fontWeight="700"
        fontFamily="'Segoe UI', sans-serif"
        letterSpacing="-0.5px"
      >
        iQ
      </text>
    </svg>
    <span className="text-white text-xl font-light tracking-wide">connect</span>
  </a>
);

const solutionItems = [
  "Distribution Portal",
  "Taxation & Regulatory Solutions",
  "Kiosk",
];

const socialLinks = [
  { icon: <FacebookIcon />, label: "Facebook", url: "https://www.facebook.com/yourpage" },
  { icon: <InstagramIcon />, label: "Instagram", url: "https://www.instagram.com/iqconnect" },
  { icon: <TwitterIcon />, label: "Twitter", url: "https://twitter.com/yourpage" },
  { icon: <Youtube />, label: "Youtube", url: "https://www.youtube.com/@iqconnect_1" },
];

function Header() {
  const location = useLocation();

  const isSolutionsActive = location.pathname.startsWith("/solutions");

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopDropOpen, setDesktopDropOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);
  const [isOpenSchedule, setIsOpenSchedule] = useState(false);

  return (
    <>
      <header className="sticky top-2 mx-2 z-[10] bg-(--primary-color) rounded-bl-xl rounded-br-xl">
        {/* ── Top Info Bar ── */}
        <div className="md:block hidden">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-2.5 flex items-center justify-between flex-wrap gap-3">
            {/* Left: Email & Hours */}
            <div className="flex items-start gap-7 flex-wrap text-white">
              <a
                href="mailto:sales@iqconnect.com"
                className="flex items-center gap-1.5  text-[11.5px] font-medium tracking-widest uppercase no-underline hover:text-white transition-colors"
              >
                <MailIcon /> EMAIL: SALES@IQCONNECT.COM
              </a>
              <span className="flex items-start gap-1.5 text-[11.5px] font-medium tracking-widest uppercase">
                <ClockIcon /> HOURS: 8:00 AM – 5:00 PM AEST
              </span>
            </div>

            {/* Right: Social Icons */}
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-white">
              
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

        {/* ── Main Nav Bar ── */}
        <div className="">
          <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-[70px]">
           <Link to="/"> <img src="/logo.png" className="lg:w-38 w-30" alt="" /></Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {/* Home */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-[15px] px-4 py-2 pb-1.5 no-underline border-b-2 transition
      ${
        isActive
          ? "text-white border-[#4aa8e8] font-semibold"
          : "text-white/70 border-transparent hover:text-white"
      }`
                }
              >
                Home
              </NavLink>

              {/* Feature */}
              <NavLink
                to="/feature"
                className={({ isActive }) =>
                  `text-[15px] px-4 py-2 border-b-2 transition
      ${
        isActive
          ? "text-white border-[#4aa8e8] font-semibold"
          : "text-white/70 border-transparent hover:text-white"
      }`
                }
              >
                Feature
              </NavLink>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDesktopDropOpen(true)}
                onMouseLeave={() => setDesktopDropOpen(false)}
              >
                <button
                  className={`
                  bg-transparent border-none cursor-pointer text-[15px] px-4 py-2 pb-1.5 border-b-2 transition flex items-center gap-1.5
                  ${
                    isSolutionsActive
                      ? "text-white border-[#4aa8e8] font-semibold"
                      : "text-white/70 border-transparent hover:text-white"
                  }
                `}
                >
                  Solutions <ChevronDown open={desktopDropOpen} />
                </button>

                <div
                  className="absolute top-[calc(100%+2px)] left-0 bg-(--primary-color) border border-white/10 rounded-xl min-w-[185px]  z-50 shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
                  style={{
                    opacity: desktopDropOpen ? 1 : 0,
                    pointerEvents: desktopDropOpen ? "auto" : "none",
                    transform: desktopDropOpen
                      ? "translateY(0)"
                      : "translateY(-6px)",
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                >
                  {solutionItems.map((item) => (
                    <NavLink
                      key={item}
                      to={`/solutions/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className={({ isActive }) =>
                        `block px-5 py-2.5 text-sm transition text-nowrap 
            ${
              isActive
                ? "text-white bg-[#4aa8e8]/20"
                : "text-white/70 hover:text-white hover:bg-[#4aa8e8]/10"
            }`
                      }
                    >
                      {item}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Launch */}
              <NavLink
                to="/launch"
                className={({ isActive }) =>
                  `text-[15px] px-4 py-2 border-b-2 whitespace-nowrap transition
      ${
        isActive
          ? "text-white border-[#4aa8e8] font-semibold"
          : "text-white/70 border-transparent hover:text-white"
      }`
                }
              >
                Launch Your MVNO
              </NavLink>

              {/* Contact */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-[15px] px-4 py-2 border-b-2 transition
      ${
        isActive
          ? "text-white border-[#4aa8e8] font-semibold"
          : "text-white/70 border-transparent hover:text-white"
      }`
                }
              >
                Contact Us
              </NavLink>
            </nav>

            <ScheduleButton
              className="hidden lg:block py-2 px-6 border-2 border-white text-white rounded-4xl"
              onClick={() => setIsOpenSchedule(true)}
            >
              Schedule a Strategy Session
            </ScheduleButton>
            <ScheduleModel isOpen={isOpenSchedule} onClose={() => setIsOpenSchedule(false)}
                        title="Schedule a Conversation"
                      ></ScheduleModel>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden bg-transparent border-none text-white cursor-pointer p-1.5 rounded-md flex items-center justify-center"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* ── Dark Overlay ── */}
      <div
        onClick={closeSidebar}
        className="fixed inset-0 z-[998] bg-black/60"
        style={{
          opacity: sidebarOpen ? 1 : 0,
          pointerEvents: sidebarOpen ? "auto" : "none",
          transition: "opacity 0.3s",
        }}
      />

      {/* ── Right Sidebar ── */}
      <div
        className="fixed top-0 right-0 bottom-0 w-[285px] bg-(--primary-color) z-[999] flex flex-col shadow-[−10px_0_40px_rgba(0,0,0,0.6)] overflow-y-auto"
        style={{
          transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-end px-5 py-4  flex-shrink-0">
          {/* <Logo /> */}
          <button
            onClick={closeSidebar}
            className="bg-white/[0.06] border border-white/10 rounded-lg text-[#adc4d9] cursor-pointer p-1.5 flex items-center justify-center hover:bg-white/[0.12] hover:text-white transition-all duration-200"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <nav className="flex-1 pt-2">
          {/* Home */}
          <NavLink
            to="/"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center px-6 py-3.5 text-[15px] border-l-[3px] transition-all duration-200
      ${
        isActive
          ? "text-[#4aa8e8] border-[#4aa8e8] bg-[#4aa8e8]/[0.07] font-semibold"
          : "text-white/75 border-transparent hover:text-white hover:border-l-[#4aa8e8]"
      }`
            }
          >
            Home
          </NavLink>

          {/* Feature */}
          <NavLink
            to="/feature"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center px-6 py-3.5 text-[15px] border-l-[3px] border-b border-b-white/[0.05]
      ${
        isActive
          ? "text-[#4aa8e8] border-[#4aa8e8] bg-[#4aa8e8]/[0.07] font-semibold"
          : "text-white/75 border-transparent hover:text-white hover:border-l-[#4aa8e8]"
      }`
            }
          >
            Feature
          </NavLink>

          {/* Solutions Accordion */}
          <div className="border-b border-white/[0.05]">
            <button
              onClick={() => setMobileSolOpen(!mobileSolOpen)}
              className={`w-full flex items-center justify-between px-6 py-3.5 border-l-[3px] text-[15px] transition-all duration-200
    ${
      isSolutionsActive
        ? "text-[#4aa8e8] border-[#4aa8e8] bg-[#4aa8e8]/[0.07] font-semibold"
        : "text-white/75 border-transparent hover:text-white hover:border-l-[#4aa8e8]"
    }`}
            >
              Solutions <ChevronDown open={mobileSolOpen} />
            </button>

            <div
              className="overflow-hidden bg-black/[0.18]"
              style={{
                maxHeight: mobileSolOpen ? "240px" : "0",
                transition: "max-height 0.3s ease",
              }}
            >
              {solutionItems.map((item) => (
                <NavLink
                  key={item}
                  to={`/solutions/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 py-3 pl-9 pr-6 text-sm transition-colors
            ${
              isActive
                ? "text-white bg-[#4aa8e8]/20 bg-[#4aa8e8]/[0.07] font-semibold"
                : "text-white/60 hover:text-white"
            }`
                  }
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4aa8e8]" />
                  {item}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Launch */}
          <NavLink
            to="/launch"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center px-6 py-3.5 text-[15px] border-l-[3px]
      ${
        isActive
          ? "text-[#4aa8e8] border-[#4aa8e8] bg-[#4aa8e8]/[0.07] font-semibold"
          : "text-white/75 border-transparent hover:text-white hover:border-l-[#4aa8e8]"
      }`
            }
          >
            Launch Your MVNO
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center px-6 py-3.5 text-[15px] border-l-[3px]
      ${
        isActive
          ? "text-[#4aa8e8] border-[#4aa8e8] bg-[#4aa8e8]/[0.07] font-semibold"
          : "text-white/75 border-transparent hover:text-white hover:border-l-[#4aa8e8]"
      }`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Sidebar Footer — Social Icons */}
        {/* <div className="px-6 py-5 border-t border-white/[0.07] flex-shrink-0">
          <p className="text-white/30 text-[11px] tracking-[0.09em] uppercase mb-3">
            Follow Us
          </p>
          <div className="flex gap-2.5">
            {socialLinks.map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-[34px] h-[34px] border border-white/[0.15] rounded-lg flex items-center justify-center text-[#adc4d9] no-underline hover:border-[#4aa8e8] hover:text-white hover:bg-[#4aa8e8]/10 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Header;
