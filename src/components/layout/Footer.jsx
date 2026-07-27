import FooterPaper from "@/assets/images/texture/contact-paper.webp";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `
                          linear-gradient(
                              rgba(43,43,43,.97),
                              rgba(43,43,43,.8)
                          ),
                          url(${FooterPaper})
                        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative overflow-hidden border-t border-white/10"
    >
      {/* Texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-soft-light" />

      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-6 text-center">
        <p className="text-md text-gray-300">
          © {new Date().getFullYear()} Marco Talaat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
