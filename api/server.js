import {} from "dotenv/config";
import express from "express";
import cors from "cors";

import categoriesRouter from "./routes/categories.js";
import resumeRouter from "./routes/resume.js";
import transactionsRouter from "./routes/transactions.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/resume", resumeRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/transactions", transactionsRouter);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use("/", express.static(`${__dirname}/build`));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(`${__dirname}/build/index.html`);
  });
}

// Route not found
app.use((req, res) => {
  res
    .status(404)
    .json({
      error: "Not found",
    })
    .end();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
