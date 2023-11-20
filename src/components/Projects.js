import React from "react";
import classes from "./Projects.module.css";
import Moviemania from "../assets/moviemania.png";
import Expensestracker from "../assets/tracker.png";
import BankistWebsite from "../assets/bankistweb.png";
import Edger from "../assets/edgerlegder.png";
function Projects() {
  return (
    <div className={classes.project}>
      <h5 className={classes.header}>My recent work </h5>
      <h2 className={classes.headerss}>Projects</h2>

      <div className={classes.project__wrapper}>
        <div className={classes.container__portfolio}>
          <article className={classes.portfolio__items}>
            <div className={classes.portfolio_image}>
              <img src={Moviemania} alt="moviemania" className={classes.img} />
            </div>
            <h3 className={classes.text}>Moviemania App</h3>

            <div className={classes.link}>
              <a
                href="https://moviemania-web.netlify.app/"
                className={classes.btn1}
              >
                Live Demo
              </a>
              <a
                href="https://github.com/odinakazy/Moviemania"
                className={classes.btn}
              >
                Github
              </a>
            </div>
          </article>
        </div>
        <div className={classes.container__portfolio}>
          <article className={classes.portfolio__items}>
            <div className={classes.portfolio_image}>
              <img
                src={Expensestracker}
                alt="tracker app"
                className={classes.img}
              />
            </div>
            <h3 className={classes.text}>Expenses tracker App</h3>

            <div className={classes.link}>
              <a
                href="https://expenses-tracker-odinaka.netlify.app/"
                className={classes.btn1}
              >
                Live Demo
              </a>
              <a
                href="https://github.com/odinakazy/ExpensesTracker-App"
                className={classes.btn}
              >
                Github
              </a>
            </div>
          </article>
        </div>
        <div className={classes.container__portfolio}>
          <article className={classes.portfolio__items}>
            <div className={classes.portfolio_image}>
              <img
                src={BankistWebsite}
                alt="bankistwebsite app"
                className={classes.img}
              />
            </div>
            <h3 className={classes.text}>Bankist Website </h3>

            <div className={classes.links}>
              <a
                href="https://bankistwebsite-odinaka.netlify.app/"
                className={classes.btn1}
              >
                Live Demo
              </a>
              <a href="https://github.com/odinakazy/" className={classes.btn}>
                Github
              </a>
            </div>
          </article>
        </div>
        <div className={classes.container__portfolio}>
          <article className={classes.portfolio__items}>
            <div className={classes.portfolio_image}>
              <img src={Edger} alt="moviemania" className={classes.img} />
            </div>
            <h3 className={classes.text}>Edgerlegder Website</h3>

            <div className={classes.links}>
              <a
                href="https://legder-static-website-odinaka.netlify.app/"
                className={classes.btn1}
              >
                Live Demo
              </a>
              <a href="https://github.com/odinakazy/" className={classes.btn}>
                Github
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Projects;
