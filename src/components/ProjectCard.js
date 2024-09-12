import React from "react";
import styles from "./Projects.module.css";

function ProjectCard({ imgSrc, altText, title, liveDemoLink, githubLink }) {
  return (
    <div className={styles.container__portfolio}>
      <article className={styles.portfolio__items}>
        <div className={styles.portfolio_image}>
          <img src={imgSrc} alt={altText} className={styles.img} />
        </div>
        <h3 className={styles.text}>{title}</h3>
        <div className={styles.link}>
          <a
            href={liveDemoLink}
            className={styles.btn1}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a href={githubLink} className={styles.btn}>
            Github
          </a>
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;
