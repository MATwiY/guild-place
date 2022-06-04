import { Grid } from "@mui/material";
import React from "react";
import { ToDoList } from "../../components/ToDoList";
import styles from "./DashboardPage.module.scss";

export const DashboardPage: React.FC = () => {
  return (
    <>
      <Grid height="100%" container justifyContent="center" alignItems="center">
        <ToDoList />
      </Grid>
    </>
  );
};
