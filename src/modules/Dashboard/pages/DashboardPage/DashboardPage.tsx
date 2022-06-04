import { Grid } from "@mui/material";
import React from "react";
import { ToDoList } from "../../components/ToDoList";
import { Weather } from "../../components/Weather";
import styles from "./DashboardPage.module.scss";


export const DashboardPage: React.FC = () => {
  return (
    <>

      <Grid height="100%" container justifyContent="center" spacing={2}>
        <Grid item xs={4}>
          <Weather />
        </Grid>
        <Grid item xs={8} maxHeight="500px">
          <ToDoList />
        </Grid>
      </Grid>
    </>
  );
};
