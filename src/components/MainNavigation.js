import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import LoginPage from "../LoginPage/LoginPage";

const MainNavigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={Logo} alt="logo" />
      </div>

      <nav>
        <ul className={classes.navMenu}>
          <li className={classes.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="showcouples"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Couples
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="review"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Fathers
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="mothers"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Mothers
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="socials"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Socials
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="birthday"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Birthdays
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="unauthorizedpage"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Church Database
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className={classes.loga} onClick="{buttonReloadHandler}">
        login
      </button>
      <div className={classes.hamburger} onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </div>
    </div>
  );
};

export default MainNavigation;
