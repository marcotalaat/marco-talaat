import ContactForm from "./ContactForm";
import { Mail, Phone, Linkedin, Github, Facebook } from "lucide-react";

import ContactPaper from "@/assets/images/texture/contact-paper.webp";

const HomeContact = () => {
  return (
    <section id="contact" className="pb-24 md:px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <span className="text-primary uppercase tracking-[4px] text-sm font-medium">
          Get In Touch
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">Contact With Me</h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or need a WordPress developer? Feel free to
          reach out and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
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
            </div>

            {/* Social */}
            <div className="mt-12">
              <p className="text-white font-medium mb-5">Follow Me</p>

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-14 h-14 rounded-2xl
                    bg-white/5
                    border border-white/10
                    flex items-center justify-center
                    text-white
                    hover:bg-primary
                    hover:border-primary
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
