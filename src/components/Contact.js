import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import classes from "./Contact.module.css";
function Contact() {
  return (
    <section className={classes.hello}>
      <div className={classes.hello}>
        <h1 className={classes.contacttext}>
          Get In <span>Touch</span>
        </h1>
        <p className={classes.contactparagraph}>
          Do you want a website for your business? Contact me to get your nicely
          designed and reponsive website.
        </p>
      </div>
      <div className={classes.contactcontainer}>
        <motion.div
          className={classes.contactoptions}
          initial={{ x: -300, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
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
              href="https://wa.me/23408133460762"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </motion.div>
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
