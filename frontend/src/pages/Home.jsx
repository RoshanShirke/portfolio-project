import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// images
import profileImg from "../assets/profile.jpg";
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

  // 🔥 AUTO COUNTER ANIMATION
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

    animateCounter(setCount1, 45);    // Projects
    animateCounter(setCount2, 50);    // Happy Clients
  }, []);

  // 🔥 AUTO SLIDER - Change image every 4 seconds
  useEffect(() => {
    if (pause) return; // Stop if paused (on hover)

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pause, images.length]);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-container">
          {/* LEFT SIDE - TEXT */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="hero-greeting">Hey There,</h3>
            <h1 className="hero-name">I'm Roshan</h1>
            <p className="hero-tagline">
              I design intelligent systems and scalable solutions. And I love what I do.
            </p>
            <a href="mailto:roshanshirke6735@gmail.com" className="hero-email">
              roshanshirke6735@gmail.com
            </a>
          </motion.div>

          {/* RIGHT SIDE - PROFILE CARD */}
          <motion.div
            className="hero-profile"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-image-wrapper">
              <div className="profile-image-placeholder">
                <img src={profileImg} alt="Roshan Shirke" className="profile-img" />
              </div>
            </div>
            <div className="profile-badge">
              <div className="badge-icon">🎯</div>
              <div className="badge-text">
                <p className="badge-label">FULL STACK</p>
                <p className="badge-title">AI Developer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="services-section">
        <div className="services-container">
          <motion.div
            className="services-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="services-title">What do I help?</h2>
            <p className="services-description">
              I will help you with finding a solution and solve your problems. We use process design to create digital products. Besides that also help their business.
            </p>
            <p className="services-description">
              We use process design to create scalable solutions. Besides that also help their business.
            </p>
          </motion.div>

          {/* SERVICE CARDS */}
          <div className="services-cards">
            <motion.div
              className="service-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon web"></div>
              <h3 className="service-name">Web Development</h3>
              <p className="service-count">{count1}+ Projects</p>
            </motion.div>

            <motion.div
              className="service-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon ai"></div>
              <h3 className="service-name">AI & Machine Learning</h3>
              <p className="service-count">25+ Projects</p>
            </motion.div>

            <motion.div
              className="service-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon mobile"></div>
              <h3 className="service-name">Full Stack Solutions</h3>
              <p className="service-count">30+ Projects</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats-section">
        <div className="stats-container">
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="stat-number">{count1}+</h2>
            <p className="stat-label">Projects Completed</p>
          </motion.div>

          <motion.div
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="stat-number">{count2}+</h2>
            <p className="stat-label">Happy Clients</p>
          </motion.div>
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
          <img key={current} src={images[current]} alt="Seminar" />
        </div>
      </section>

      {/* ===== FOOTER SECTION ===== */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            <div>
              <h2 className="footer-title">Let's Work Together</h2>
              <p className="footer-description">
                Have a project in mind? I'd love to hear from you. Let's collaborate and create something amazing together!
              </p>
              
              <div className="footer-links">
                <a href="mailto:roshanshirke6735@gmail.com" className="footer-link">
                  📧 Email: roshanshirke6735@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/roshan-shirke" target="_blank" rel="noopener noreferrer" className="footer-link">
                  💼 LinkedIn Profile
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  🐙 GitHub Projects
                </a>
              </div>
            </div>

            <div className="footer-quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Me</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 Roshan Shirke. All rights reserved.
            </p>
            <p className="footer-copyright">
              Designed & Built with React & Passion
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;