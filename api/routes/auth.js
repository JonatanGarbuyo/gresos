import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import pool from "../database/db.js";

import validateResourceMW from "../middleware/validateResourceMW.js";
import { authUserSchema } from "../models/users.js";

const authUsersRouter = express.Router();

// authUsersRouter.post(
//   "/",
//   validateResourceMW(authUserSchema),
//   async (req, res) => {
//     const { email, password } = req.body;
//     const query = `SELECT * FROM users WHERE email = ?`;

//     const [user] = await pool.query(query, [email]);
//     if (!user || typeof user === "undefined") {
//       return res.status(400).send({ message: "Invalid email or password" });
//     }

//     const isValidPassword = await bcrypt.compare(password, user.password);
//     if (!isValidPassword)
//       return res.status(400).send({ message: "Invalid email or password" });

//     const token = await jwt.sign(
//       { user_id: user.id, username: user.usename, user_id: user.id },
//       process.env.JWT_PRIVATE_KEY
//     );
//     res.status(200).send({ token, username: user.username, user_id: user.id });
//   }
// );

authUsersRouter.post("/", validateResourceMW(authUserSchema), (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email = ?`;

  pool
    .query(query, [email])
    .then(([user]) => {
      if (!user || typeof user === "undefined")
        res.status(400).send({ message: "Invalid email or password" });
      return user;
    })
    .then((user) => {
      bcrypt
        .compare(password, user.password)
        .then((isValidPassword) => {
          if (!isValidPassword) {
            return res
              .status(400)
              .send({ message: "Invalid email or password" });
          }
          return;
        })
        .then(() => {
          const token = jwt.sign(
            { user_id: user.id, username: user.usename, user_id: user.id },
            process.env.JWT_PRIVATE_KEY
          );
          res
            .status(200)
            .send({ token, username: user.username, user_id: user.id });
          return;
        });
    })
    .catch((e) => console.error(e));
});

export default authUsersRouter;
