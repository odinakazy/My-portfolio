import React from "react";
import Photo from "../assets/photo.jpeg";
import classes from "./About.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function About() {
  return (
    <section id="About">
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
            I'm a software developer with a passion for creating innovative and
            effective solutions. I'm going through self-training to be an
            impacting Software Engineer with broad knowledge and understanding
            of the needed skillset. I use various web development packages to
            develop custom-crafted, customer-focused websites and designs. With
            a proven track record of achievements, I can bring positivity,
            support, and a creative mindset to any team to achieve company
            goals.
          </p>
          <p>
            Also i create pixel-perfect designs ensuring that i meet my client
            needs and develop highly responsive designs
          </p>
          <div>
            <Link to="/contact" className={classes.btn}>
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
