import express from "express";
import cors from "cors";

import logger from "./middleware/logger.js";
import validateResourceMW from "./middleware/validateResourceMW.js";

import { categorySchema } from "./models/category.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

const allCategories = [
  { id: 1, name: "food" },
  { id: 2, name: "clothes" },
  { id: 3, name: "rent" },
  { id: 4, name: "others" },
  { id: 5, name: "home" },
];

// Catergories routes //
// Create category
app.post("/api/categories/", validateResourceMW(categorySchema), (req, res) => {
  const category = {
    id: allCategories.length + 1,
    name: req.body.name,
  };
  allCategories.push(category);
  res.status(201).send(category);
});
// Read categories
app.get("/api/categories", (req, res) => {
  res.status(200).json(allCategories);
});
// Update category
app.put(
  "/api/categories/:id",
  validateResourceMW(categorySchema),
  (req, res) => {
    // TODO validate id
    const id = parseInt(req.params.id);

    let category = allCategories.find((c) => c.id === id);
    if (!category) res.status(404).send("Category not found");

    const categoryIndex = allCategories.indexOf(category);
    allCategories[categoryIndex].name = req.body.name;
    res.status(200).send();
  }
);
// Delete category
app.delete("/api/categories/:id", (req, res) => {
  // TODO validate id
  const id = parseInt(req.params.id);

  let category = allCategories.find((c) => c.id === id);
  if (!category) res.status(404).send("Category not found");

  allCategories.splice(allCategories.indexOf(category), 1);
  res.status(200);
});

//
app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

// Route not found
app.use((req, res) => {
  res
    .status(404)
    .json({
      error: "Not found",
    })
    .end();
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
