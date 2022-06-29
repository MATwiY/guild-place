import { BottomNavigation, Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import styles from "./WelcomePage.module.scss";

export const WelcomePage: React.FC = () => {
  return (
    <div className={styles.backgroundPlace}>
      <div className={styles.welcomeText}>
        <h1>Welcome to Guild Place </h1>
        <h3>
          Guild Place is an application created with gamers in mind, where we
          want to bring you all of the neccessary features to organize your
          guild!
        </h3>
      </div>
      <div className={styles.welcomeButtons}>
        <Stack
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Button variant="contained" size="large">
            REGISTER
          </Button>
          <Button variant="contained" size="large">
            LOGIN
          </Button>
        </Stack>
      </div>
    </div>
  );
};
