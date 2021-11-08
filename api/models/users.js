import * as Yup from "yup";

// export const userSchema = Yup.object({
//   name: Yup.string().required().min(3).max(64).label("Name"),
//   email: Yup.number().required(64).label("Email"),
//   password: Yup.string().required().min(3).max(1024).label("Password"),
// });

export const newUserSchema = Yup.object({
  username: Yup.string().required().min(3).max(64).label("Username"),
  email: Yup.string().required().max(255).email().label("Email"),
  password: Yup.string().required().min(3).max(1024).label("Password"),
});

export const authUserSchema = Yup.object({
  email: Yup.string().required().max(255).email().label("Email"),
  password: Yup.string().required().min(3).max(1024).label("Password"),
});
