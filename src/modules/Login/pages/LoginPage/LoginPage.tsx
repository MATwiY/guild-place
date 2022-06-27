import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import {
  Button,
  createTheme,
  Stack,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

// send background image to index.tsx (root)
// for smooth transition between welcomePage loginPage and RegisterPage

const theme = createTheme({
  palette: {
    text: {
      primary: "white",
      secondary: "#000",
    },

    action: {
      active: "rgba(0, 0, 0, 0)",
      hover: "rgba(1,1,1,0)",
      disabled: "#fff",
    },
  },
});

const CustomTextField = styled(TextField)({
  backgroundColor: "#42a5f5",
  opacity: 0.8,
  borderRadius: 4,
  borderColor: "rgba(0, 0, 0, 0)",
}) as typeof TextField;

export const LoginPage: React.FC = () => {
  const [formValue, setFormValue] = useState({
    login: "",
    password: "",
  });

  const navigate = useNavigate();

  const navigateToWelcomePage = () => {
    navigate("/");
  };

  const onTextChange = (e: any) => {
    const updatedValue = { login: e.target.value };

    setFormValue((formValue) => ({
      ...formValue,
      ...updatedValue,
    }));
  };

  const onPassChange = (e: any) => {
    const updatedValue = { password: e.target.value };

    setFormValue((formValue) => ({
      ...formValue,
      ...updatedValue,
    }));
  };

  const handleSubmit = () => {
    console.log(`Login: ${formValue.login}`, `Password: ${formValue.password}`);
  };

  return (
    <>
      <div className={styles.backgroundPlace}>
        <div className={styles.loginForm}>
          <Stack
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <ThemeProvider theme={theme}>
              <CustomTextField
                label="Login"
                variant="filled"
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                onChange={onTextChange}
                value={formValue.login}
              />

              <CustomTextField
                label="Password"
                variant="filled"
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                onChange={onPassChange}
                value={formValue.password}
              />
            </ThemeProvider>
          </Stack>

          <Stack
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ padding: "30px" }}
          >
            <Button
              size="large"
              variant="contained"
              onClick={navigateToWelcomePage}
            >
              Back
            </Button>
            <Button size="large" variant="contained" onClick={handleSubmit}>
              Login
            </Button>
          </Stack>

          <p>you don't have account?</p>
          <p>you don't remember your password?</p>
        </div>
      </div>
    </>
  );
};
{
  /* <p>login field</p>
          <p>password field</p>
          <p>logi button</p>
          <p>back button</p>
          <p>you don't have account?</p>
          <p>you don't remember your password?</p> */
}
