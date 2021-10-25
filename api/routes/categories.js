import express from "express";

import validateResourceMW from "../middleware/validateResourceMW.js";
import { categorySchema } from "../models/category.js";

const categoriesRouter = express.Router();

const allCategories = [
  { id: 1, name: "food" },
  { id: 2, name: "clothes" },
  { id: 3, name: "rent" },
  { id: 4, name: "others" },
  { id: 5, name: "home" },
];

// Catergories routes //
// Create category
categoriesRouter.post("/", validateResourceMW(categorySchema), (req, res) => {
  const category = {
    id: allCategories.length + 1,
    name: req.body.name,
  };
  allCategories.push(category);
  res.status(201).send(category);
});
// Read categories
categoriesRouter.get("/", (req, res) => {
  res.status(200).json(allCategories);
});
// Update category
categoriesRouter.put("/:id", validateResourceMW(categorySchema), (req, res) => {
  // TODO validate id
  const id = parseInt(req.params.id);

  let category = allCategories.find((c) => c.id === id);
  if (!category) res.status(404).send("Category not found");

  const categoryIndex = allCategories.indexOf(category);
  allCategories[categoryIndex].name = req.body.name;
  res.status(200).send();
});
// Delete category
categoriesRouter.delete("/:id", (req, res) => {
  // TODO validate id
  const id = parseInt(req.params.id);

  let category = allCategories.find((c) => c.id === id);
  if (!category) res.status(404).send("Category not found");

  allCategories.splice(allCategories.indexOf(category), 1);
  res.status(200);
});

export default categoriesRouter;
