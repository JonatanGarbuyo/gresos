import * as Yup from "yup";

export const userSchema = Yup.object({
  name: Yup.string().required().min(3).max(64).label("Name"),
  email: Yup.number().required(64).label("Email"),
  password: Yup.string().required().max(1024).label("Password"),
});