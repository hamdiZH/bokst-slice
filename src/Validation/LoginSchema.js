import * as yup from "yup";

export const LoginSchema = () => {
  return yup.object({
    email: yup.string().required("Please enter an email"),
    password: yup.string().required("Please enter a password").min(6),
  });
};
