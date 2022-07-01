import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import React from "react";
import styles from "./RegisterPage.module.scss";
import { Formik } from "formik";
import validationSchema from "./ValidationSchema";

const CustomTextField = styled(TextField)({
  backgroundColor: "#505975",
  opacity: 0.9,
  borderRadius: 5,
  borderColor: "rgba(0, 0, 0, 0)",
  width: "300px",
}) as typeof TextField;

export const RegisterPage: React.FC = () => {
  const handleSubmit = (values: any, errors: any) => {
    console.log(values, errors);
  };

  return (
    <div className={styles.formDiv}>
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
              >
                <CustomTextField
                  error={touched.username && Boolean(errors.username)}
                  variant="filled"
                  name="username"
                  type="text"
                  label="Username"
                  helperText={touched.username ? errors.username : ""}
                  value={values.username}
                  onChange={handleChange("username")}
                  onBlur={handleBlur("username")}
                  InputProps={{
                    style: { color: "white" },
                  }}
                  InputLabelProps={{ style: { color: "#A8BAF7" } }}
                />

                <CustomTextField
                  error={touched.password && Boolean(errors.password)}
                  variant="filled"
                  name="password"
                  type="text"
                  label="Password"
                  helperText={touched.password ? errors.password : ""}
                  value={values.password}
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  InputProps={{
                    style: { color: "white" },
                  }}
                  InputLabelProps={{ style: { color: "#A8BAF7" } }}
                />

                <CustomTextField
                  error={touched.email && Boolean(errors.email)}
                  variant="filled"
                  name="email"
                  type="text"
                  label="Email"
                  helperText={touched.email ? errors.email : ""}
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  InputProps={{
                    style: { color: "white" },
                  }}
                  InputLabelProps={{ style: { color: "#A8BAF7" } }}
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
                    className={styles.checkText}
                  />
                  <FormHelperText>
                    {touched.acceptTOS ? errors.acceptTOS : ""}
                  </FormHelperText>
                </FormControl>

                <Button
                  variant="contained"
                  type="submit"
                  className={styles.SubButton}
                  size="large"
                >
                  SUBMIT
                </Button>
              </Stack>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
