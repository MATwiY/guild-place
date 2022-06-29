import { Button, createTheme, Grid, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./RegisterPage.module.scss";

const defaultValues = {
  login: "",
  email: "",
  password: "",
};

const CustomTextField = styled(TextField)({
  backgroundColor: "#505975",
  opacity: 0.9,
  borderRadius: 5,
  borderColor: "rgba(0, 0, 0, 0)",
  width: "300px",
}) as typeof TextField;

export const RegisterPage: React.FC = () => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleLoginChange = (e: any) => {
    const { value } = e.target;
    setFormValues({ ...formValues, login: value });
  };

  const handlePasswordChange = (e: any) => {
    const { value } = e.target;
    setFormValues({ ...formValues, password: value });
  };

  const handleEmailChange = (e: any) => {
    const { value } = e.target;
    setFormValues({ ...formValues, email: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          alignItems="center"
          justifyItems="center"
          direction="column"
          spacing={3}
        >
          <Grid item>
            <CustomTextField
              required
              id="login-required"
              name="login"
              type="text"
              variant="filled"
              label="Login"
              value={formValues.login}
              onChange={handleLoginChange}
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "#A8BAF7" } }}
            />
          </Grid>
          <Grid item>
            <CustomTextField
              required
              id="password-required"
              name="password"
              type="password"
              variant="filled"
              label="Password"
              value={formValues.password}
              onChange={handlePasswordChange}
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "#A8BAF7" } }}
            />
          </Grid>
          <Grid item>
            <CustomTextField
              required
              id="email-required"
              name="email"
              type="text"
              variant="filled"
              label="Email"
              value={formValues.email}
              onChange={handleEmailChange}
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "#A8BAF7" } }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              type="submit"
              className={styles.SubButton}
              size="large"
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

// login
// email
// password
