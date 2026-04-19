import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [responseMsg, setResponseMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://portfolio-project-qgov.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      setResponseMsg(data.message || "Message sent successfully 🚀");

      // ✅ Reset form after submission
      setFormData({
        name: "",
        email: "",
        message: ""
      });

      // ✅ Auto-clear message after 3 seconds
      setTimeout(() => setResponseMsg(""), 3000);

    } catch (error) {
      console.error(error);
      setResponseMsg("Error sending message");
      setTimeout(() => setResponseMsg(""), 3000);
    } finally {
      setIsLoading(false);
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

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {responseMsg && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              marginTop: "15px",
              padding: "10px 15px",
              borderRadius: "8px",
              backgroundColor: responseMsg.includes("Error") ? "#dc2626" : "#10b981",
              color: "white"
            }}
          >
            {responseMsg}
          </motion.p>
        )}
      </motion.div>

    </section>
  );
}

export default Contact;