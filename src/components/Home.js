import React from "react";
import classes from "./Home.module.css";
import Cv from "../assets/Cv.pdf";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Home() {
  return (
    <header className={classes.hero} id="header">
      <div className={classes.content}>
        <motion.div
          initial={{ x: -300, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h4>Hello I'm</h4>
          <h1>Solomon, Odinaka Wisdom</h1>
          <p>A Frontend Developer</p>

          <div>
            <a href={Cv} download className={classes.btn}>
              Download Cv
            </a>
            <Link to="/contact" className={classes.btn}>
              Contact Me
            </Link>
          </div>
        </motion.div>
        <div className={classes.socials}>
          <a
            href="https://linkedin.com/in/odinakazy-solomon"
            target="_blank"
            rel="noreferrer"
            className={classes.changeColor}
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/odinakazy"
            target="_blank"
            rel="noreferrer"
            className={classes.changeColor}
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://twitter.com/SolomonOdinaka2"
            target="_blank"
            rel="noreferrer"
            className={classes.changeColor}
          >
            <GrTwitter />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Home;
