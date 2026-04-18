import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// images
import img1 from "../assets/Seminar1.jpeg";
import img2 from "../assets/Seminar2.jpeg";
import img3 from "../assets/Seminar3.jpeg";
import img4 from "../assets/Seminar4.jpeg";

const images = [img1, img2, img3, img4];

function Home() {
  const navigate = useNavigate();

  // slider state
  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);

  // counter state
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // 🔥 AUTO SLIDER
  useEffect(() => {
  const animateCounter = (setter, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const update = () => {
      start += increment;
      if (start < target) {
        setter(Math.floor(start));
        requestAnimationFrame(update);
      } else {
        setter(target);
      }
    };

    update();
  };

  animateCounter(setCount1, 10);    // Workshops
  animateCounter(setCount2, 150);   // People
  animateCounter(setCount3, 20);    // Sessions
}, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3>Hello, I'm</h3>
          <h1>Roshan Shirke</h1>
          <h2>Python Full Stack & AI Developer</h2>

          <p>
            I build scalable web applications and intelligent systems using
            React, FastAPI, and Machine Learning.
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

      {/* 🔥 COUNTER SECTION */}
      <section className="stats">
        <div className="stat-box">
          <h1>{count1}+</h1>
          <p>Workshops Conducted</p>
        </div>

        <div className="stat-box">
          <h1>{count2}+</h1>
          <p>People Impacted</p>
        </div>

        <div className="stat-box">
          <h1>{count3}+</h1>
          <p>Sessions Delivered</p>
        </div>
      </section>

      {/* 🔥 SEMINAR SLIDER */}
      <section className="seminar">
        <h1>Workshops & Seminars</h1>

        <p>
          Conducted multiple technical workshops as a Google Student Ambassador,
          helping students learn AI, Cloud, and Development.
        </p>

        <div
          className="slider"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <img src={images[current]} alt="Seminar" />
        </div>
      </section>
    </>
  );
}

export default Home;