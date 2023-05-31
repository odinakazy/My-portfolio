import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import classes from "./Contact.module.css";
function Contact() {
  return (
    <section>
      <h1 className={classes.contacttext}>Get In Touch</h1>
      <p className={classes.contactparagraph}>
        Do you want a website for your business? Contact me to get your nicely
        designed and reponsive website.
      </p>
      <div className={classes.contactcontainer}>
        <div className={classes.contactoptions}>
          <article className={classes.contactoption}>
            <MdOutlineMail className={classes.changeFont} />
            <h4>Email</h4>
            <a
              href="mailto:odinakasolomon4@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className={classes.contactoption}>
            <CiLinkedin className={classes.changeFont} />
            <h4>Linkedin</h4>
            <a
              href="https://linkedin.com/in/odinakazy-solomon"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className={classes.contactoption}>
            <BsWhatsapp className={classes.changeFont} />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone+23408133460762"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form
          target="_blank"
          action="https://formsubmit.co/odinakasolomon4@gmail.com"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Full Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button className={classes.btn} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
