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
  const [msgType, setMsgType] = useState("success"); // success or error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMsg("");

    // Create an AbortController with 10-second timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch("https://portfolio-project-qgov.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      setMsgType("success");
      setResponseMsg(data.message || "Message sent successfully 🚀");

      // ✅ Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: ""
      });

      // ✅ Auto-clear message after 4 seconds
      setTimeout(() => setResponseMsg(""), 4000);

    } catch (error) {
      clearTimeout(timeoutId);
      
      let errorMsg = "Error sending message";
      
      if (error.name === "AbortError") {
        errorMsg = "Request timed out. Please try again or email directly.";
      } else if (error instanceof TypeError) {
        errorMsg = "Network error. Please check your connection.";
      } else {
        errorMsg = error.message || "Failed to send message";
      }

      setMsgType("error");
      setResponseMsg(errorMsg);
      
      // ✅ Auto-clear error message after 5 seconds
      setTimeout(() => setResponseMsg(""), 5000);
      
      console.error("Contact form error:", error);
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
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isLoading}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isLoading}
          ></textarea>

          <button type="submit" disabled={isLoading} className={isLoading ? "loading" : ""}>
            {isLoading ? "⏳ Sending..." : "📧 Send Message"}
          </button>
        </form>

        {responseMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`response-message ${msgType}`}
          >
            {responseMsg}
          </motion.div>
        )}

        {/* Email Fallback */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="contact-fallback"
        >
          <p className="fallback-text">
            Having trouble sending? You can also reach me directly at:
          </p>
          <a 
            href="mailto:roshanshirke6735@gmail.com" 
            className="fallback-email"
          >
            📧 roshanshirke6735@gmail.com
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}

export default Contact;