import express from "express";
import { homeResume } from "../exampleData.js";

const resumeRouter = express.Router();

// Resume //
resumeRouter.get("/", (req, res) => {
  const totalExpenses = homeResume.lastOperations.reduce(
    (total, operation) =>
      operation.type === "expense"
        ? total + parseFloat(operation.amount)
        : total,
    0
  );
  const totalIncome = homeResume.lastOperations.reduce(
    (total, operation) =>
      operation.type === "income"
        ? total + parseFloat(operation.amount)
        : total,
    0
  );
  const balance = totalIncome - totalExpenses;

  homeResume["Balance"] = balance;
  homeResume["Total Income"] = totalIncome;
  homeResume["Total Expenses"] = totalExpenses;

  res.status(200).json(homeResume);
});

export default resumeRouter;
