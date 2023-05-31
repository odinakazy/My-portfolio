import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skill">Skills</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <a
          href="https://linkedin.com/in/odinakazy-solomon"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className={classes.changefont} />
        </a>
        <a href="https://github.com/odinakazy" target="_blank" rel="noreferrer">
          <FaGithubSquare className={classes.changefont} />
        </a>
        <a
          href="https://twitter.com/SolomonOdinaka2"
          target="_blank"
          rel="noreferrer"
        >
          <GrTwitter className={classes.changefont} />
        </a>
      </div>
      <div>
        <small>© 2022, Designed and developed by solomon odinaka wisdom </small>
      </div>
    </footer>
  );
}

export default Footer;
