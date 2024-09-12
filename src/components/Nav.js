/* eslint-disable no-restricted-globals */
import React from "react";
import { Tooltip } from "react-tooltip";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import styles from "./Nav.module.css";
import { NavLink, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <nav>
      <NavLink
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Home"
        data-tooltip-place="top"
        to="/"
        className={`${location.pathname === "/" ? styles.active : ""}`}
      >
        <AiOutlineHome color="white" />
      </NavLink>

      <NavLink
        data-tooltip-id="my-tooltip"
        data-tooltip-content="About"
        data-tooltip-place="top"
        to="/about"
        className={`${location.pathname === "/about" ? styles.active : ""}`}
      >
        <AiOutlineUser color="white" />
      </NavLink>

      <NavLink
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Skills"
        data-tooltip-place="top"
        to="/skill"
        className={`${location.pathname === "/skill" ? styles.active : ""}`}
      >
        <BiBook color="white" />
      </NavLink>
      <NavLink
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Project"
        data-tooltip-place="top"
        to="/project"
        className={`${location.pathname === "/project" ? styles.active : ""}`}
      >
        <RiServiceLine color="white" />
      </NavLink>
      <NavLink
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Contact"
        data-tooltip-place="top"
        to="/contact"
        className={`${location.pathname === "/contact" ? styles.active : ""}`}
      >
        <MdOutlineMessage color="white" />
      </NavLink>
      <Tooltip id="my-tooltip" />
    </nav>
  );
}

export default Nav;
