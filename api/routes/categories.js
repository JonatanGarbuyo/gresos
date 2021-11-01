import express from "express";

import pool from "../database/db.js";
import validateResourceMW from "../middleware/validateResourceMW.js";
import { categorySchema } from "../models/category.js";

const categoriesRouter = express.Router();
const user_id = 1;

// Catergories routes //
// Create category
categoriesRouter.post("/", validateResourceMW(categorySchema), (req, res) => {
  const { name } = req.body;
  let newCategory = { name, user_id }; // change to real userId
  const query = "INSERT INTO categories set ?";
  pool
    .query(query, [newCategory])
    .then((response) => res.status(201).send({ name, id: response.insertId }))
    .catch((err) => {
      if (err.code && "ER_DUP_ENTRY" === err.code)
        res.status(409).send({ error: "Category already exist" });
      console.error("ERROR: ", err);
    });
});

// Read all categories
categoriesRouter.get("/", (req, res) => {
  const query =
    "Select id, name FROM categories WHERE user_id = ? ORDER BY name";
  pool
    .query(query, [user_id])
    .then((categories) => res.status(200).send(categories))
    .catch((error) => console.error(error));
});

// Update category
categoriesRouter.put("/:id", validateResourceMW(categorySchema), (req, res) => {
  // TODO validate id
  const { name } = req.body;
  const { id } = req.params;
  const query = "UPDATE categories SET name = ? WHERE id = ? AND user_id = ? ;";
  pool
    .query(query, [name, id, user_id])
    .then((response) => res.status(200).send(response))
    .catch((error) => console.error(error)); //TODO handle error
});

// Delete category
categoriesRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM categories WHERE id = ? and user_id = ?";
  pool
    .query(query, [id, user_id])
    .then(res.status(200).send())
    .catch((error) => {
      console.error(error);
    });
});

export default categoriesRouter;
