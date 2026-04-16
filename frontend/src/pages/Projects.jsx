import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="projects">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1>My Projects</h1>

        <div className="project-card">

          <h2>CLTV Prediction (Machine Learning Project)</h2>

          <p>
            Built a machine learning model to predict Customer Lifetime Value
            using data preprocessing, feature engineering, and predictive modeling.
          </p>

          <p>
            <strong>Impact:</strong> Helps businesses identify high-value customers
            and improve decision-making strategies.
          </p>

          <p>
            <strong>Tech:</strong> Python, Pandas, Scikit-learn, Machine Learning
          </p>

          {/* 🔥 Buttons with working links */}
          <div className="project-buttons">
            <button
              className="btn-primary"
              onClick={() =>
                window.open("https://github.com/RoshanShirke/CLTV-Prediction-ML", "_blank")
              }
            >
              View Code
            </button>

            <button
              className="btn-secondary"
              onClick={() =>
                window.open("https://cltv-prediction-ml.streamlit.app", "_blank")
              }
            >
              Live Demo
            </button>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Projects;