import React from "react";
import classes from "./Home.module.css";
import Cv from "../assets/Cv.pdf";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
function Home() {
  return (
    <header className={classes.hero}>
      <div className={classes.content}>
        <h4>Hello I'm</h4>
        <h1>Solomon, Odinaka Wisdom</h1>
        <p>A Frontend Developer</p>
        <div>
          <a href={Cv} download className={classes.btn}>
            Download Cv
          </a>
          <a href="#contact" className={classes.btn}>
            Contact Me
          </a>
        </div>
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