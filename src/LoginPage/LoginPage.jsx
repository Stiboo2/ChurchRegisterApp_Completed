import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Icon from "./components/Icon";
import Input from "./components/Input";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";

function LoginPage() {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

  const [loginWithText, setLoginWithText] = useState("OR LOGIN WITH");
  const [buttonText, setButtonText] = useState("Sign Up");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {
    console.log("registerEmail", registerEmail);

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
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
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input
          type="text"
          placeholder="Email"
          onBlur={(event) => {
            if (buttonText === "Sign Up") {
              setRegisterEmail(event.target.value);
              console.log("registerEmail_____", registerEmail);
            } else if (buttonText === "LOGIN") {
              setLoginEmail(event.target.value);
              console.log("loginEmail____", loginEmail);
            }
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          onBlur={(event) => {
            if (buttonText === "Sign Up") {
              setRegisterPassword(event.target.value);
            } else if (buttonText === "LOGIN") {
              setLoginPassword(event.target.value);
            }
          }}
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
  margin-top: -12rem;
  margin-left: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
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
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
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
