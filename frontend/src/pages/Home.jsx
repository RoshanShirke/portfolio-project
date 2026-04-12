import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Hello, I'm</h3>

        <h1>Roshan Shirke</h1>

        <h2>Python Full Stack & AI Developer</h2>

        <p>
          I build scalable web applications and intelligent systems using
          modern technologies like React, FastAPI, and Machine Learning.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => navigate("/projects")}
          >
            View Projects
          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </button>
        </div>
      </motion.div>

    </section>
  );
}

export default Home;