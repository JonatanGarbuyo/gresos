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

  homeResume["Balance"] = balance.toFixed(2);
  homeResume["Total Income"] = totalIncome.toFixed(2);
  homeResume["Total Expenses"] = totalExpenses.toFixed(2);

  res.status(200).json(homeResume);
});

export default resumeRouter;
