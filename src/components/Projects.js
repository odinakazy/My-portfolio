import React from "react";
import classes from "./Projects.module.css";
import Moviemania from "../assets/moviemania.png";
import Expensestracker from "../assets/tracker.png";
import Africanfilm from "../assets/Africanfilmfinance.png";
import Okhma from "../assets/Okhma.png";
import Elite from "../assets/Elite.png";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    imgSrc: Africanfilm,
    altText: "Africanfilmfinance website",
    title: " Africanfilmfinance Website",
    liveDemoLink: "https://africafilmfinanceforum.com/",
    githubLink: "https://github.com/odinakazy/",
  },
  {
    imgSrc: Elite,
    altText: "Elite Concierge Website",
    title: "Elite Concierge Website",
    liveDemoLink: "https://elite-concierge.netlify.app/",
    githubLink: "https://github.com/odinakazy/",
  },

  {
    imgSrc: Okhma,
    altText: "Okhma Website",
    title: "Okhma Website",
    liveDemoLink: "https://okhma.com/",
    githubLink: "https://github.com/odinakazy/",
  },
  {
    imgSrc: Moviemania,
    altText: "moviemania",
    title: "Moviemania App",
    liveDemoLink: "https://moviemania-eight.vercel.app/",
    githubLink: "https://github.com/odinakazy/Moviemania",
  },
  {
    imgSrc: Expensestracker,
    altText: "tracker app",
    title: "Expenses tracker App",
    liveDemoLink: "https://expenses-tracker-app-brown.vercel.app/",
    githubLink: "https://github.com/odinakazy/ExpensesTracker-App",
  },
];
function Projects() {
  return (
    <div className={classes.project}>
      <h5 className={classes.header}>My recent work </h5>
      <h2 className={classes.headerss}>Projects</h2>

      <div className={classes.project__wrapper}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            altText={project.altText}
            title={project.title}
            liveDemoLink={project.liveDemoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
