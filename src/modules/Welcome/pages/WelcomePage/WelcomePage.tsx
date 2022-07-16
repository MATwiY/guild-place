import { Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledButton,
  WelcomeBackground,
  WelcomeButtonAnimation,
  WelcomeTextAnimation,
} from "../../../shared/StyledComponents";

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToRegisterPage = () => {
    navigate("/register");
  };

  const navigateToLoginPage = () => {
    navigate("/login");
  };

  return (
    <WelcomeBackground>
      <WelcomeTextAnimation>
        <h1>Welcome to Guild Place </h1>
        <h3>
          Guild Place is an application created with gamers in mind, where we
          want to bring you all of the neccessary features to organize your
          guild!
        </h3>
      </WelcomeTextAnimation>
      <WelcomeButtonAnimation>
        <Stack
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
        >
          <StyledButton variant="contained" onClick={navigateToRegisterPage}>
            REGISTER
          </StyledButton>
          <StyledButton variant="contained" onClick={navigateToLoginPage}>
            LOGIN
          </StyledButton>
        </Stack>
      </WelcomeButtonAnimation>
    </WelcomeBackground>
  );
};
