import React from "react";
import { Tooltip } from "react-tooltip";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("");
  return (
    <nav>
      <Link
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Home"
        data-tooltip-place="top"
        to="/"
        className={activeNav === "" ? styles.active : ""}
        onClick={() => {
          setActiveNav("");
        }}
      >
        <AiOutlineHome color="white" />
      </Link>

      <Link
        data-tooltip-id="my-tooltip"
        data-tooltip-content="About"
        data-tooltip-place="top"
        to="/about"
        onClick={() => {
          setActiveNav("about");
        }}
        className={activeNav === "about" ? styles.active : ""}
      >
        <AiOutlineUser color="white" />
      </Link>

      <Link
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Skills"
        data-tooltip-place="top"
        to="/skill"
        onClick={() => {
          setActiveNav("#skill");
        }}
        className={activeNav === "#skill" ? styles.active : ""}
      >
        <BiBook color="white" />
      </Link>
      <Link
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Project"
        data-tooltip-place="top"
        to="/project"
        onClick={() => {
          setActiveNav("#project");
        }}
        className={activeNav === "#project" ? styles.active : ""}
      >
        <RiServiceLine color="white" />
      </Link>
      <Link
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Contact"
        data-tooltip-place="top"
        to="/contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? styles.active : ""}
      >
        <MdOutlineMessage color="white" />
      </Link>
      <Tooltip id="my-tooltip" />
    </nav>
  );
}

export default Nav;
