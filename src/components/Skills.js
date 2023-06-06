import React from "react";
import classes from "./Skills.module.css";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import bootstrap from "../assets/boostrap.png";
import next from "../assets/next-js-.png";
import git from "../assets/Git.png";
import github from "../assets/github.png";
function Skills() {
  return (
    <section>
      <h2 className={classes.header}>
        {" "}
        My <span>Skills</span>
      </h2>
      <div className={classes.skillcontainer}>
        <div className={classes.card}>
          <img src={html} alt="htmlimage" />
          <h3>HTML</h3>
        </div>
        <div className={classes.card}>
          <img src={css} alt="cssimage" />
          <h3>CSS</h3>
        </div>
        <div className={classes.card}>
          <img src={javascript} alt="cssimage" />
          <h3>JavaScript</h3>
        </div>
        <div className={classes.card}>
          <img src={bootstrap} alt="cssimage" />
          <h3>Bootstrap</h3>
        </div>
        <div className={classes.card}>
          <img src={react} alt="cssimage" />
          <h3>React JS</h3>
        </div>
        <div className={classes.card}>
          <img src={next} alt="cssimage" />
          <h3>Next JS</h3>
        </div>
        <div className={classes.card}>
          <img src={git} alt="cssimage" />
          <h3>Git</h3>
        </div>
        <div className={classes.card}>
          <img src={github} alt="cssimage" />
          <h3>GitHub</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
