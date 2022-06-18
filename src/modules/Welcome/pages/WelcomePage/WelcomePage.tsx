import { Grid, Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import styles from "./WelcomePage.module.scss";

export const WelcomePage: React.FC = () => {
  return (
    <>
      <Container maxWidth="sm">
        <h1>Welcome to Guild Place </h1>
        <h3>Lorem Ipsum polskie smiecie </h3>
        <Stack spacing={2} direction="row">
          <Button variant="contained">REGISTER</Button>
          <Button variant="contained">LOGIN</Button>
        </Stack>
      </Container>
    </>
  );
};
