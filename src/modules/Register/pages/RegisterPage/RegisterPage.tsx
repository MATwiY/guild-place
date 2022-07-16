import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Stack,
} from "@mui/material";
import React from "react";

import { Formik } from "formik";
import validationSchema from "./ValidationSchema";
import {
  StyledTextField,
  StyledButton,
  StyledBackground,
} from "../../../shared/StyledComponents";
import { useNavigate } from "react-router-dom";

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const navigateBackToWelcome = () => {
    navigate("/");
  };
  const handleSubmit = (values: any, errors: any) => {
    console.log(values, errors);
  };

  return (
    <StyledBackground>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          acceptTOS: false,
        }}
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
                direction="column"
                spacing={3}
                alignItems="center"
                justifyContent="center"
                marginTop="15%"
              >
                <StyledTextField
                  error={touched.username && Boolean(errors.username)}
                  variant="filled"
                  name="username"
                  type="text"
                  label="Username"
                  helperText={touched.username ? errors.username : ""}
                  value={values.username}
                  onChange={handleChange("username")}
                  onBlur={handleBlur("username")}
                />

                <StyledTextField
                  error={touched.password && Boolean(errors.password)}
                  variant="filled"
                  name="password"
                  type="password"
                  label="Password"
                  helperText={touched.password ? errors.password : ""}
                  value={values.password}
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                />

                <StyledTextField
                  error={touched.email && Boolean(errors.email)}
                  variant="filled"
                  name="email"
                  type="text"
                  label="Email"
                  helperText={touched.email ? errors.email : ""}
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                />

                <FormControl
                  error={touched.acceptTOS && Boolean(errors.acceptTOS)}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.acceptTOS}
                        onChange={handleChange("acceptTOS")}
                        onBlur={handleBlur("acceptTOS")}
                        sx={{
                          color: "#505975",
                          "&.Mui-checked": {
                            color: "#A8BAF7",
                          },
                        }}
                      />
                    }
                    label="I accept the terms of service"
                    sx={{
                      color: "#A8BAF7",
                    }}
                  />
                  <FormHelperText>
                    {touched.acceptTOS ? errors.acceptTOS : ""}
                  </FormHelperText>
                </FormControl>

                <Stack direction="row" spacing={3}>
                  <StyledButton
                    variant="contained"
                    onClick={navigateBackToWelcome}
                  >
                    Back
                  </StyledButton>

                  <StyledButton variant="contained" type="submit">
                    SUBMIT
                  </StyledButton>
                </Stack>
              </Stack>
            </form>
          );
        }}
      </Formik>
    </StyledBackground>
  );
};
