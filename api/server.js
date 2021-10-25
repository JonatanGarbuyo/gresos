import express from "express";
import cors from "cors";

import logger from "./middleware/logger.js";
import validateResourceMW from "./middleware/validateResourceMW.js";

import { categorySchema } from "./models/category.js";
import categoriesRouter from "./routes/categories.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/categories", categoriesRouter);
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
