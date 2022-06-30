import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  styled,
  TextField,
} from "@mui/material";
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

  const handleFormChange = (e: any) => {
    const { value } = e.target;
    setFormValues({ ...formValues, [e.target.name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleSubmit}>
        <Stack
          direction="column"
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          <CustomTextField
            variant="filled"
            name="login"
            type="text"
            label="Login"
            value={formValues.login}
            onChange={handleFormChange}
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{ style: { color: "#A8BAF7" } }}
          />

          <CustomTextField
            variant="filled"
            name="password"
            type="text"
            label="Password"
            value={formValues.password}
            onChange={handleFormChange}
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{ style: { color: "#A8BAF7" } }}
          />

          <CustomTextField
            variant="filled"
            name="email"
            type="text"
            label="Email"
            value={formValues.email}
            onChange={handleFormChange}
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{ style: { color: "#A8BAF7" } }}
          />

          <FormControlLabel
            control={
              <Checkbox
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
    </div>
  );
};
