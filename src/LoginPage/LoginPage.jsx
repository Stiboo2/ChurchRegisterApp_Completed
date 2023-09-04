import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Icon from "./components/Icon";
import Input from "./components/Input";
import { FaTimes } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";
import classes from "./LoginPage.module.css";
import { useGlobalContext } from "../store/context";

function LoginPage() {
  const { setWantToLogIn } = useGlobalContext();
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

  const [loginWithText, setLoginWithText] = useState("REGISTER");
  const [buttonText, setButtonText] = useState("LOGIN");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const LoadUserPassword = (event) => {
    {
      if (buttonText === "Sign Up") {
        setRegisterEmail(event.target.value);
        console.log("registerEmail_____", registerEmail);
      } else if (buttonText === "LOGIN") {
        setLoginEmail(event.target.value);
        console.log("loginEmail____", loginEmail);
      }
    }
  };
  const LoadUserEmail = (event) => {
    if (buttonText === "Sign Up") {
      setRegisterPassword(event.target.value);
    } else if (buttonText === "LOGIN") {
      setLoginPassword(event.target.value);
    }
    }



  const checkIfEmpty = () => {
    console.log("checkIfEmpty");

    const isRegisterEmpty = !registerEmail || !registerPassword;
    const isLoginEmpty = !loginEmail || !loginPassword;

    if (isRegisterEmpty && isLoginEmpty) {
      console.log("Both registration and login fields are empty.");
    } else if (isRegisterEmpty) {
      console.log("Registration fields are empty.");
    } else if (isLoginEmpty) {
      console.log("Login fields are empty.");
    } else {
      console.log("All fields are filled.");
    }
  };
  const register = async () => {
    checkIfEmpty();
    console.log("registerEmail", registerEmail);

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setWantToLogIn(false);
      console.log(user);
    } catch (error) {
      console.log(":" + error.message + ":");
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        console.log("email__________________use");
        setLoginPassword(registerPassword);
        setLoginEmail(registerEmail);
        login();
      }
    }
  };

  const login = async () => {

    checkIfEmpty();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      setWantToLogIn(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLoginToggle = () => {
    console.log("handleLoginToggle");
    if (loginWithText === "OR LOGIN WITH") {
      setLoginWithText("REGISTER");
      setButtonText("LOGIN");
    } else {
      setLoginWithText("OR LOGIN WITH");
      setButtonText("Sign Up");
    }
  };
  const handleCloseLogIn = () => {
    console.log("consthandleCloseLogIn");
    setWantToLogIn(false);
  };

  
  return (
    <MainContainer>
      <div className={classes.closeLogIn} onClick={handleCloseLogIn}>
        <FaTimes className={classes.closeTimes} />
      </div>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input
          type="text"
          placeholder="Email"
          onChange={(event) => LoadUserPassword(event)}
          onBlur={(event) => LoadUserPassword(event)}
          onInput={(event) => LoadUserPassword(event)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(event) => LoadUserEmail(event)}
          onBlur={(event) => LoadUserEmail(event)}
          onInput={(event) => LoadUserEmail(event)}
        />
      </InputContainer>
      <ButtonContainer>
        <Button
          onClick={buttonText === "LOGIN" ? login : register}
          content={buttonText}
        />
      </ButtonContainer>
      <LoginWith onClick={handleLoginToggle}>{loginWithText}</LoginWith>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  margin-top: -40rem;
  margin-left: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 30 remn;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 60vh;
    margin-top: -11rem;
    margin-left: 2rem;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 40vh;
    margin-top: -20rem;
    margin-left: 6rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 60vh;
    margin-top: -40rem;
    margin-left: 30rem;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
    margin-top: -39rem;
    margin-left: 30rem;
  }
  @media only screen and (min-width: 1366px) {
    width: 30vw;
    height: 85vh;
    margin-top: -38rem;
    margin-left: 30rem;
  }
  @media only screen and (min-width: 1400px) {
    width: 30vw;
    height: 55vh;
    margin-top: -40rem;
    margin-left: 30rem;
  }
`;
const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default LoginPage;
