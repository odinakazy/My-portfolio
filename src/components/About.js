import React from "react";
import Photo from "../assets/photo.jpeg";

function About() {
  return (
    <section>
      <div>
        <div>
          <img src={Photo} alt="showcase" />
        </div>
        <div>
          <h2>About Me</h2>
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
        </div>
      </div>
    </section>
  );
}

export default About;
