import React from "react";
import Photo from "../assets/photo.jpeg";
import classes from "./About.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function About() {
  return (
    <section id="About" className={classes.section}>
      <div className={classes.hello}>
        <h5>
          <span>Get</span> To Know
        </h5>
        <h2 className={classes.head}>
          About<span> Me</span>
        </h2>
      </div>
      <div className={classes.container}>
        <motion.div
          className={classes.aboutme}
          initial={{ x: -300, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={classes.aboutimg}>
            <img src={Photo} alt="showcase" />
          </div>
        </motion.div>
        <motion.div
          className={classes.paragraph}
          initial={{ x: 300, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            I am a detailed and result-oriented Frontend developer with three
            years of solid working experience on the field and a proven track
            record in creating cutting-edge and impactful solutions, specialized
            in Web Development, Project Management and JavaScript. I have
            demonstrated success by contributing and deploying processes and
            products that improves operational efficiency and user experience
            which ultimately boosts company’s revenue. My passion for innovation
            fuels my ability to leverage diverse web development packages,
            tailoring bespoke websites and designs that prioritize client
            objectives and user experience.
          </p>
          <p>
            My meticulous approach guarantees pixel-perfect designs, ensuring
            seamless responsiveness and meeting the needs of each client. Known
            for my positivity, collaborative team spirit, and a keen eye for
            detail, I contribute a creative mindset to every team and
            consistently aligning efforts with company objectives to drive
            overall success.
          </p>
          <div>
            <Link to="/contact" className={classes.btn}>
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
      <br />
      <br />
      <h2 className={classes.head}>
        Exper<span>ience</span>
      </h2>
      <div className={classes.timeline}>
        <div className={classes.timeline__wrapper}>
          <h2>React Developer</h2>
          <h3>Dowell Research sinagore</h3>
          <h6>Jan 2023 - present</h6>
        </div>
        <div className={classes.timeline__wrapper}>
          <h2>React Developer</h2>
          <h3>Upwork(freelancer)</h3>
          <h6>jan 2022 - present</h6>
        </div>
      </div>
    </section>
  );
}

export default About;
