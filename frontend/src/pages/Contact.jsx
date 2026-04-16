import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting:", formData);

    try {
      const res = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("Response:", data);

      setResponseMsg(data.message);

      // ✅ Reset form after submission
      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.error(error);
      setResponseMsg("Error sending message");
    }
  };

  return (
    <section className="contact">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1>Contact Me</h1>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}              // ✅ controlled input
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}             // ✅ controlled input
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}           // ✅ controlled input
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {responseMsg && <p>{responseMsg}</p>}
      </motion.div>

    </section>
  );
}

export default Contact;