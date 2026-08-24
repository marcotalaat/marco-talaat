import { Mail, Phone, Linkedin } from "lucide-react";
import ContactPaper from "@/assets/images/texture/contact-paper.webp";
import ContactForm from "./ContactForm";

const ContactCard = () => {
  return (
    <section id="contact" className="pb-24 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <span className="text-primary uppercase tracking-[4px] text-sm font-medium">
          Get In Touch
        </span>

        <h2 className="text-5xl md:text-7xl font-black mt-4">Contact Us</h2>
      </div>
      <div className="grid lg:grid-cols-12 gap-8 mt-20">
        {/* Contact Card */}
        <div className="lg:col-span-4">
          <div
            className="
              relative
              rounded-[32px]
              p-8
              overflow-hidden
              border border-white/10
              shadow-[0_20px_60px_rgba(0,0,0,.35)]
              h-full
            "
            style={{
              backgroundImage: `
                linear-gradient(
                    rgba(43,43,43,.97),
                    rgba(43,43,43,.70)
                ),
                url(${ContactPaper})
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Let's Talk</h3>

            {/* Email */}
            <div className="space-y-5">
              <a
                href="mailto:marcotalaat91@gmail.com"
                className="
                  flex items-center gap-4
                  p-5 rounded-2xl
                  bg-white/5
                  backdrop-blur-sm
                  border border-white/10
                  hover:border-primary/40
                  hover:bg-white/10
                  transition-all duration-300
                  group
                "
              >
                <div
                  className="
                    w-12 h-12 rounded-xl
                    bg-primary/15
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:bg-primary
                  "
                >
                  <Mail
                    size={22}
                    className="text-primary text-white group-hover:text-white"
                  />
                </div>

                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="text-white font-medium break-all">
                    marcotalaat91@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+201101420629"
                className="
                  flex items-center gap-4
                  p-5 rounded-2xl
                  bg-white/5
                  backdrop-blur-sm
                  border border-white/10
                  hover:border-primary/40
                  hover:bg-white/10
                  transition-all duration-300
                  group
                "
              >
                <div
                  className="
                    w-12 h-12 rounded-xl
                    bg-primary/15
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:bg-primary
                  "
                >
                  <Phone
                    size={22}
                    className="text-primary text-white group-hover:text-white"
                  />
                </div>

                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <p className="text-white font-medium">+20 110 142 0629</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/marco-talaat-b349911a0/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-4
                  p-5 rounded-2xl
                  bg-white/5
                  backdrop-blur-sm
                  border border-white/10
                  hover:border-primary/40
                  hover:bg-white/10
                  transition-all duration-300
                  group
                "
              >
                <div
                  className="
                    w-12 h-12 rounded-xl
                    bg-primary/15
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:bg-primary
                  "
                >
                  <Linkedin
                    size={22}
                    className="text-primary text-white group-hover:text-white"
                  />
                </div>

                <div>
                  <p className="text-sm text-white/60">LinkedIn</p>
                  <p className="text-white font-medium">Marco Talaat</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="lg:col-span-8 scroll-mt-24">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
