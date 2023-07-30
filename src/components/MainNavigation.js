import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import classes from "./MainNavigation.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { useGlobalContext } from "../store/context";
import { useUserContext } from "../store/user_context";
import CartButtons from "./Layout/CartButtons";
import LogInAndOut from "./Layout/LogInAndOut";

const MainNavigation = () => {
  const { myUser } = useUserContext();
  const { setWantToLogIn, LogIn } = useGlobalContext();
  const [logBtnClick, setLogBtnClick] = useState(LogIn);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick((prevState) => !prevState);
  const buttonWantToLogIn = () => {
    setLogBtnClick((prevState) => !prevState);
    setWantToLogIn(!logBtnClick);
  };

  useEffect(() => {
    setLogBtnClick(LogIn);
  }, [LogIn]);

  /*   if (myUser) {
    setWantToLogIn(false);
  } */

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img className={classes.logo} src={Logo} alt="logo" />
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
              CHURCH DATABASE
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="sendreport"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              SEND REPORT
            </NavLink>
          </li>
        </ul>
      </nav>
      <LogInAndOut></LogInAndOut>
      {/*    <button className={classes.loga} onClick={buttonWantToLogIn}>
        {LogIn ? "Loging-in" : "Login"}
      </button> */}
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
