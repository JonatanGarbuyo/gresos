import express from "express";
import bcrypt from "bcrypt";

import pool from "../database/db.js";

import validateResourceMW from "../middleware/validateResourceMW.js";
import { newUserSchema } from "../models/users.js";

const usersRouter = express.Router();

// Users routes //
// Create user
// usersRouter.post("/", validateResourceMW(newUserSchema), async (req, res) => {
//   const { username, email, password } = req.body;

//   const query = `INSERT INTO users SET ?`;
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);
//   const newUser = { username, email, password: hashedPassword };
//   pool
//     .query(query, newUser)
//     .then((response) => {
//       console.log(response); ////////////////
//       res.status(201).send({ message: "User created" });
//     })
//     .catch((error) => {
//       console.error("-- error: ", error);
//       if (error.code === "ER_DUP_ENTRY") {
//         return res.status(409).send({ message: "User already registered." });
//       }
//     });
// });

usersRouter.post("/", validateResourceMW(newUserSchema), (req, res) => {
  const { username, email, password } = req.body;

  const query = `INSERT INTO users SET ?`;
  bcrypt
    .genSalt(10)
    .then((salt) =>
      bcrypt
        .hash(password, salt)
        .then((hashedPassword) => ({
          username,
          email,
          password: hashedPassword,
        }))
        .then((newUser) =>
          pool
            .query(query, newUser)
            .then((response) => {
              console.log(response); ////////////////
              res.status(201).send({ message: "User created" });
            })
            .catch((error) => {
              console.error("-- error: ", error);
              if (error.code === "ER_DUP_ENTRY") {
                return res
                  .status(409)
                  .send({ message: "User already registered." });
              }
            })
        )
    )
    .catch((e) => console.error(e));
});

export default usersRouter;
