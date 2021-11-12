import express from "express";

import pool from "../database/db.js";
import userExtractor from "../middleware/userExtractor.js";
import validateResourceMW from "../middleware/validateResourceMW.js";
import { categorySchema } from "../models/category.js";

const categoriesRouter = express.Router();

// Catergories routes //
// Create category
categoriesRouter.post(
  "/",
  [userExtractor, validateResourceMW(categorySchema)],
  (req, res) => {
    const { name } = req.body;
    const user_id = req.user_id;
    let newCategory = { name, user_id };
    const query = "INSERT INTO categories set ?";

    pool
      .query(query, [newCategory])
      .then((response) => res.status(201).send({ name, id: response.insertId }))
      .catch((err) => {
        if (err.code && "ER_DUP_ENTRY" === err.code)
          res.status(409).send({ error: "Category already exist" });
        console.error("ERROR: ", err);
      });
  }
);

// Read all categories
categoriesRouter.get("/", userExtractor, (req, res) => {
  console.log("all categories");
  const user_id = req.user_id;
  const query =
    "Select id, name FROM categories WHERE user_id = ? ORDER BY name";
  pool
    .query(query, [user_id])
    .then((categories) => res.status(200).send(categories))
    .catch((error) => console.error(error));
});

// Update category
categoriesRouter.put(
  "/:id",
  userExtractor,
  validateResourceMW(categorySchema),
  (req, res) => {
    const user_id = req.user_id;
    const { name } = req.body;
    const { id } = req.params;
    const query =
      "UPDATE categories SET name = ? WHERE id = ? AND user_id = ? ;";
    pool
      .query(query, [name, id, user_id])
      .then((response) => res.status(200).send(response))
      .catch((error) => console.error(error)); //TODO handle error
  }
);

// Delete category
categoriesRouter.delete("/:id", userExtractor, (req, res) => {
  const user_id = req.user_id;
  const { id } = req.params;
  const query = "DELETE FROM categories WHERE id = ? and user_id = ?";
  pool
    .query(query, [id, user_id])
    .then((result) => {
      console.log(result);
      res.status(200).send();
    })
    .catch((error) => {
      console.error(error);
    });
});

export default categoriesRouter;
