import React from "react";
import classes from "./Skills.module.css";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import bootstrap from "../assets/boostrap.png";
function Skills() {
  return (
    <section>
      <h2 className={classes.header}> My Skills</h2>
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
      </div>
    </section>
  );
}

export default Skills;
