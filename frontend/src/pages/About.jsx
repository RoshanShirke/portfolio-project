import { motion } from "framer-motion";

function About() {
  return (
    <section className="about">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1>About Me</h1>

        <p>
          I am a passionate Python Full Stack Developer and AI enthusiast with
          experience in building scalable web applications and working on
          machine learning projects.
        </p>

        <h2>Education</h2>
        <p>
          MCA (Pursuing) | BCA Graduate (CGPA: 7)
        </p>

        <h2>Skills</h2>
        <ul className="skills">
          <li>Python</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>FastAPI</li>
          <li>MongoDB</li>
          <li>Machine Learning</li>
        </ul>

        <h2>Experience</h2>
        <p>
          Google Student Ambassador & AI/ML Data Associate with experience in
          data annotation, workshops, and real-world AI applications.
        </p>
      </motion.div>

    </section>
  );
}

export default About;