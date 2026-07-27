import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // EmailJS send here
  };

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
          className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none"
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
          className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none"
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
          className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-6 px-8 py-4 rounded-xl bg-primary text-white font-medium hover:scale-105 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
