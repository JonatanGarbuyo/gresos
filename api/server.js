import express from "express";
import cors from "cors";

import logger from "./middleware/logger.js";
import categoriesRouter from "./routes/categories.js";
import resumeRouter from "./routes/resume.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/resume", resumeRouter);
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
