import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username too short"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password too short"),
  acceptTOS: Yup.bool().oneOf(
    [true],
    "You must accept our Terms and Conditions"
  ),
});

export default validationSchema;
