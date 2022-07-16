import React, { useState } from "react";
import { Stack } from "@mui/material";

import {
  StyledButton,
  StyledTextField,
  StyledBackground,
} from "../../../shared/StyledComponents";

import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

export const LoginPage: React.FC = () => {
  const [formValue, setFormValue] = useState({
    login: "",
    password: "",
  });

  const navigate = useNavigate();

  const navigateToWelcomePage = () => {
    navigate("/");
  };

  const onLoginChange = (e: any) => {
    const updatedValue = { login: e.target.value };
    setFormValue((formValue) => ({
      ...formValue,
      ...updatedValue,
    }));
  };

  const onPasswordChange = (e: any) => {
    const updatedValue = { password: e.target.value };

    setFormValue((formValue) => ({
      ...formValue,
      ...updatedValue,
    }));
  };

  const handleSubmit = (values: any, errors: any) => {
    console.log(values, errors);
  };

  const validationSchema = Yup.object().shape({
    login: Yup.string().required("Need it").min(3, "Too short"),
    password: Yup.string().required("Need it").min(6, "Too short"),
  });

  return (
    <StyledBackground>
      <Formik
        initialValues={{ login: "", password: "" }}
        onSubmit={(values, errors) => {
          handleSubmit(values, errors);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
                marginTop="15%"
              >
                <StyledTextField
                  label="Login"
                  variant="filled"
                  type="text"
                  value={values.login}
                  error={touched.login && Boolean(errors.login)}
                  helperText={touched.login ? errors.login : ""}
                  onChange={handleChange("login")}
                  onBlur={handleBlur("login")}
                />

                <StyledTextField
                  label="Password"
                  variant="filled"
                  type="password"
                  value={values.password}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password ? errors.password : ""}
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                />

                <Stack spacing={3} direction="row">
                  <StyledButton
                    size="large"
                    variant="contained"
                    onClick={navigateToWelcomePage}
                  >
                    Back
                  </StyledButton>
                  <StyledButton size="large" variant="contained" type="submit">
                    Login
                  </StyledButton>
                </Stack>

                <Stack
                  spacing={-2}
                  direction="column"
                  textAlign="right"
                  sx={{ color: "#fff" }}
                >
                  <p>you don't have account?</p>
                  <p>you don't remember your password?</p>
                </Stack>
              </Stack>
            </form>
          );
        }}
      </Formik>
    </StyledBackground>
  );
};
