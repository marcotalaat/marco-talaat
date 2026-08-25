import { useState } from "react";
import { X, Menu, Sparkles, Mail, Linkedin, Github } from "lucide-react";
import { trackClick } from "@/lib/clickTracker";

import logo from "../../assets/images/marco-white.png";
import logoDark from "../../assets/images/marco-logo-dark.svg";
import MenuPaper from "../../assets/images/texture/review-card.webp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (label) => {
    trackClick("nav", label);
  };

  const handleHireMeClick = () => {
    trackClick("nav", "Hire Me");
  };

  return (
    <>
      {/* =========================
          DESKTOP NAVBAR
      ========================= */}
      <div className="hidden md:block fixed top-4 left-0 right-0 z-50 px-4">
        <nav
          className="
            max-w-7xl mx-auto
            grid grid-cols-[1fr_auto_1fr]
            items-center
            px-8 py-3
            rounded-2xl
            backdrop-blur-xl
            bg-white/10
            border border-white/10
            shadow-[0_20px_60px_rgba(0,0,0,.1)]
          "
        >
          <a href="/">
            <img src={logoDark} alt="Marco Talaat" className="h-8 w-auto" />
          </a>

          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.label)}
                  className="
          relative
          inline-block
          text-lg
          transition-colors
          duration-300
          hover:text-primary

          after:absolute
          after:left-0
          after:bottom-[-4px]
          after:h-[2px]
          after:w-full
          after:origin-left
          after:scale-x-0
          after:bg-primary
          after:transition-transform
          after:duration-300
          hover:after:scale-x-100
        "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-end">
            <a
              href="/contact"
              onClick={handleHireMeClick}
              className="
                main-btn
                px-6 py-2
                rounded-xl
                bg-primary
                text-white
                font-medium
                shadow-[0_8px_24px_rgba(62,180,137,0.35)]
                hover:opacity-90
                hover:scale-105
                transition-all duration-300
              "
            >
              Hire Me
            </a>
          </div>
        </nav>
      </div>

      {/* =========================
          MOBILE TOP BAR
      ========================= */}
      {/* Dynamic Island (brand) — centered */}
      <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <a
          href="/"
          className="
            w-[135px]
            h-[42px]
            rounded-full
            bg-black
            border border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,0.6)]
            flex items-center justify-center
            transition-all duration-300
            hover:scale-105
          "
        >
          <img
            src={logo}
            alt="Marco Talaat"
            className="h-7 w-auto object-contain"
          />
        </a>
      </div>

      {/* Menu Trigger Button — right side */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          className="
            relative
            w-[42px] h-[42px]
            rounded-full
            bg-black
            border border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,0.6)]
            flex items-center justify-center
            text-primary
            transition-all duration-300
            hover:scale-105
            hover:border-primary/50
            group
          "
        >
          <Menu
            size={18}
            className="text-white group-hover:text-primary transition-colors"
          />
        </button>
      </div>

      {/* =========================
          MOBILE MENU POPUP
      ========================= */}
      {mobileMenuOpen && (
        <div
          className="
            md:hidden fixed inset-4 z-50
            rounded-[32px]
            border border-white/10
            shadow-[0_20px_60px_rgba(0,0,0,0.8)]
            overflow-hidden
            animate-in fade-in zoom-in duration-300
            flex flex-col
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(10,10,10,.6),
                rgba(10,10,10,.9)
              ),
              url(${MenuPaper})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
            <img src={logo} alt="Marco Talaat" className="h-7 w-auto" />

            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="
                w-10 h-10
                rounded-full
                bg-white/10
                border border-white/10
                flex items-center justify-center
                text-white
                hover:bg-primary
                hover:border-primary
                transition-all duration-300
              "
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu List */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <ul className="space-y-7 text-center">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => {
                      handleNavClick(link.label);
                      setMobileMenuOpen(false);
                    }}
                    className="text-3xl font-bold text-white hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer: Social + Hire Me */}
          <div className="shrink-0 px-6 pb-8 pt-4 space-y-6 border-t border-white/10">
            <div className="flex justify-center gap-4">
              <a
                href="mailto:marcotalaat91@gmail.com"
                aria-label="Email"
                className="
                  w-12 h-12 rounded-2xl
                  bg-white/5 border border-white/10
                  flex items-center justify-center
                  text-white
                  hover:bg-primary hover:border-primary
                  transition-all duration-300
                "
              >
                <Mail size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  w-12 h-12 rounded-2xl
                  bg-white/5 border border-white/10
                  flex items-center justify-center
                  text-white
                  hover:bg-primary hover:border-primary
                  transition-all duration-300
                "
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  w-12 h-12 rounded-2xl
                  bg-white/5 border border-white/10
                  flex items-center justify-center
                  text-white
                  hover:bg-primary hover:border-primary
                  transition-all duration-300
                "
              >
                <Github size={20} />
              </a>
            </div>

            <a
              href="/contact"
              onClick={() => {
                handleHireMeClick();
                setMobileMenuOpen(false);
              }}
              className="
                block text-center
                px-8 py-4
                rounded-2xl
                bg-primary
                text-white
                font-semibold
                shadow-[0_8px_24px_rgba(62,180,137,0.35)]
                hover:opacity-90
                transition-all duration-300
              "
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
