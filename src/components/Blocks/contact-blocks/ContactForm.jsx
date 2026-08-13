import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

/**
 * EmailJS setup (free, no backend required — https://www.emailjs.com):
 * 1. Create an account, add an Email Service connected to marcotalaat91@gmail.com
 *    (Gmail service is easiest — just sign in with that account).
 * 2. Create an Email Template. In the template body use these variables:
 *    {{from_name}}, {{from_email}}, {{subject}}, {{message}}
 *    Set the template's "To email" field to marcotalaat91@gmail.com
 * 3. Run: npm install @emailjs/browser
 * 4. Replace the three placeholders below with your real Service ID,
 *    Template ID, and Public Key (found in EmailJS dashboard > Account > API Keys).
 */
const SERVICE_ID = "service_vagt0pn";
const TEMPLATE_ID = "template_alfunel";
const PUBLIC_KEY = "olmh400L2LdpnRI3v";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "marcotalaat91@gmail.com",
        },
        PUBLIC_KEY,
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const isSending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10
      bg-white/5 backdrop-blur-sm p-8 shadow-[0_20px_50px_rgba(0,0,0,.1)]"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSending}
          className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none disabled:opacity-50"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSending}
          className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none disabled:opacity-50"
        />
      </div>

      <div className="mt-6">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          disabled={isSending}
          className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none disabled:opacity-50"
        />
      </div>

      <div className="mt-6">
        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSending}
          className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none resize-none disabled:opacity-50"
        />
      </div>

      <div className="mt-6 flex items-center gap-5 flex-wrap">
        <button
          type="submit"
          disabled={isSending}
          className="px-8 py-4 rounded-xl bg-primary text-white font-medium hover:scale-105 transition disabled:opacity-60 disabled:hover:scale-100 flex items-center gap-2"
        >
          {isSending && <Loader2 size={18} className="animate-spin" />}
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <span className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
            <CheckCircle2 size={18} />
            Message sent — I'll reply soon.
          </span>
        )}

        {status === "error" && (
          <span className="flex items-center gap-2 text-red-400 text-sm font-medium">
            <XCircle size={18} />
            Something went wrong. Please email me directly.
          </span>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
