import express from "express";

import validateResourceMW from "../middleware/validateResourceMW.js";
import { categorySchema } from "../models/category.js";

const resumeRouter = express.Router();

const homeResume = {
  Balance: "6,277.30",
  "Total Expenses": "1,250.00",
  "Total Income": "7,527.30",
  lastOperations: [
    {
      id: 10,
      concept: "Pizza",
      amount: "-24.99",
      date: "october 21, 2021",
      type: "expense",
      category: "food",
    },
    {
      id: 9,
      concept: "New game",
      amount: "-65",
      date: "october 18, 2021",
      type: "expense",
      category: "other",
    },
    {
      id: 8,
      concept: "Electricity  bill",
      amount: "-500",
      date: "october 8, 2021",
      type: "expense",
      category: "bills",
    },
    {
      id: 7,
      concept: "phone bill",
      amount: "-33",
      date: "october 8, 2021",
      type: "expense",
      category: "bills",
    },
    {
      id: 6,
      concept: "grandma gift",
      amount: "200",
      date: "october 7, 2021",
      type: "income",
      category: "",
    },
    {
      id: 5,
      concept: "lunch",
      amount: "-20",
      date: "october 5, 2021",
      type: "expense",
      category: "food",
    },
    {
      id: 4,
      concept: "I loaded gasoline",
      amount: "-150",
      date: "october 4, 2021",
      type: "expense",
      category: "gas",
    },
    {
      id: 3,
      concept: "paycheck",
      amount: "2500",
      date: "october 1, 2021",
      type: "income",
      category: "salary",
    },
    {
      id: 2,
      concept: "New suit",
      amount: "-300",
      date: "october 1, 2021",
      type: "expense",
      category: "clothes",
    },
    {
      id: 1,
      concept: "October rent",
      amount: "-600",
      date: "october 1, 2021",
      type: "expense",
      category: "rent",
    },
  ],
};

// Resume //
resumeRouter.get("/", (req, res) => {
  res.status(200).json(homeResume);
});

export default resumeRouter;
