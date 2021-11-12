import {} from "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";

import categoriesRouter from "./routes/categories.js";
import resumeRouter from "./routes/resume.js";
import transactionsRouter from "./routes/transactions.js";
import usersRouter from "./routes/users.js";
import authUsersRouter from "./routes/auth.js";
import handleErrors from "./middleware/handleErrors.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/resume", resumeRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/transactions", transactionsRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authUsersRouter);

app.use("/", express.static(`../build`));
app.use(express.static(path.join(__dirname, "../build")));

// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
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

app.use(handleErrors);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
