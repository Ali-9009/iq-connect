import {
  Instagram,
  Youtube,
  Mail,
  Clock,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ScheduleModel from "../components/Models/ScheduleModel";
import ScheduleButton from "../components/Buttons/ScheduleButton";

// 🔹 NAV DATA
const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Solutions",
    base: "/services",
    dropdown: [
      "Wireless Solution",
      "Retail Website + Mobile App",
      "API Solution",
      "Virtual Credit Cards",
    ],
  },
  { label: "Launch Your MVNO", path: "/launch" },
  { label: "Integrated partners", path: "/integratedPartners" },
  { label: "Contact Us", path: "/contact" },
];

// 🔹 SOCIAL
const socialLinks = [
  { icon: Instagram, url: "https://www.instagram.com/iqconnect" },
  { icon: Youtube, url: "https://www.youtube.com/@iqconnect_1" },
];

// 🔹 STYLE
const navStyle = (active) =>
  `text-[15px] px-4 py-2 pb-1.5 border-b-2 transition
   ${active
    ? "text-white border-[#4aa8e8] font-semibold"
    : "text-white/70 border-transparent hover:text-white"
  }`;

function Header() {
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopDrop, setDesktopDrop] = useState(null);
  const [mobileDrop, setMobileDrop] = useState(null);
  const [isOpenSchedule, setIsOpenSchedule] = useState(false);

  // ─── Scroll Hide/Reveal ───
  const [hideNavbar, setHideNavbar] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHideNavbar(true); // scrolling down
      } else {
        setHideNavbar(false); // scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* ── Top Bar ── */}
      <div className="mx-2 mt-2">
        <div className="md:block hidden bg-(--primary-color)">
          <div className="max-w-360 mx-auto px-5 md:px-8 py-2.5 flex items-center justify-between">
            <div className="flex gap-7 text-white text-[11.5px] font-medium tracking-widest uppercase">
              <a href="mailto:sales@iqconnect.com" className="flex items-center gap-1.5">
                <Mail size={14} /> EMAIL: SALES@IQCONNECT.COM
              </a>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> HOURS: 8:00 AM – 5:00 PM AEST
              </span>
            </div>

            <div className="flex gap-4 text-white">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-white rounded-md hover:bg-white hover:text-black transition"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <header
        className={`sticky top-0 z-[10] mx-2 bg-(--primary-color) rounded-bl-xl rounded-br-xl transition-transform duration-300 ${hideNavbar ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <div className="max-w-360 mx-auto px-8 flex items-center justify-between py-6">
          <Link to="/">
            <img src="/logo.png" className="lg:w-38 w-30" alt="logo" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item, i) => {
              if (!item.dropdown) {
                return (
                  <NavLink
                    key={i}
                    to={item.path}
                    className={({ isActive }) => navStyle(isActive)}
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => setDesktopDrop(item.label)}
                  onMouseLeave={() => setDesktopDrop(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 ${navStyle(
                      location.pathname.startsWith(item.base)
                    )}`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition ${desktopDrop === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className="absolute top-full left-0 mt-1 bg-(--primary-color) border border-white/10 rounded-xl min-w-60 z-50 shadow-md"
                    style={{
                      opacity: desktopDrop === item.label ? 1 : 0,
                      pointerEvents: desktopDrop === item.label ? "auto" : "none",
                      transform: desktopDrop === item.label ? "translateY(0)" : "translateY(-6px)",
                      transition: "0.2s",
                    }}
                  >
                    {item.dropdown.map((sub) => (
                      <NavLink
                        key={sub}
                        to={`${item.base}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                        className={({ isActive }) =>
                          `block px-5 py-2.5 text-sm transition ${isActive
                            ? "text-white bg-[#4aa8e8]/20"
                            : "text-white/70 hover:text-white hover:bg-[#4aa8e8]/10"
                          }`
                        }
                      >
                        {sub}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <ScheduleButton
            className="hidden lg:block py-2 px-6 border-2 border-white text-white rounded-4xl"
            onClick={() => setIsOpenSchedule(true)}
          >
            Schedule a Strategy Session
          </ScheduleButton>

          <ScheduleModel
            isOpen={isOpenSchedule}
            onClose={() => setIsOpenSchedule(false)}
            title="Schedule a Conversation"
          />

          {/* Mobile Menu Btn */}
          <button className="lg:hidden text-white" onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={closeSidebar}
        className="fixed inset-0 bg-black/60 z-[998]"
        style={{
          opacity: sidebarOpen ? 1 : 0,
          pointerEvents: sidebarOpen ? "auto" : "none",
        }}
      />

      {/* Sidebar */}
      <div
        className="fixed top-0 right-0 bottom-0 w-[285px] bg-(--primary-color) z-[999] flex flex-col"
        style={{
          transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
          transition: "0.3s",
        }}
      >
        <div className="flex justify-end p-4">
          <button className="text-white" onClick={closeSidebar}>
            <X />
          </button>
        </div>

        <nav className="flex-1">
          {navItems.map((item, i) => {
            if (!item.dropdown) {
              return (
                <NavLink
                  key={i}
                  to={item.path}
                  onClick={closeSidebar}
                  className="block px-6 py-3 text-white/80 hover:text-white"
                >
                  {item.label}
                </NavLink>
              );
            }

            return (
              <div key={i}>
                <button
                  onClick={() =>
                    setMobileDrop(mobileDrop === item.label ? null : item.label)
                  }
                  className="w-full flex justify-between px-6 py-3 text-white/80"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`${mobileDrop === item.label ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className="overflow-hidden"
                  style={{ maxHeight: mobileDrop === item.label ? "200px" : "0" }}
                >
                  {item.dropdown.map((sub) => (
                    <NavLink
                      key={sub}
                      to={`${item.base}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={closeSidebar}
                      className="block pl-10 py-2 text-white/60"
                    >
                      {sub}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        {/* Sidebar Footer — Social */}
        <div className="px-6 py-5 border-t border-white/[0.07]">
          <p className="text-white/30 text-[11px] tracking-[0.09em] uppercase mb-3">
            Follow Us
          </p>
          <div className="flex gap-2.5">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[34px] h-[34px] border border-white/[0.15] rounded-lg flex items-center justify-center text-[#adc4d9] hover:border-[#4aa8e8] hover:text-white hover:bg-[#4aa8e8]/10 transition"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;