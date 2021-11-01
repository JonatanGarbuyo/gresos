import express from "express";

import pool from "../database/db.js";

const resumeRouter = express.Router();
const user_id = 1;

// Resume //
resumeRouter.get("/", (req, res) => {
  const today = new Date();
  const currentMonth = `${today.getFullYear()}-${today.getMonth() + 1}-01`;

  const query = `SELECT (total_income - total_expense) AS Balance, total_month_expense, total_month_income FROM
  (SELECT SUM(amount) AS "total_expense" FROM transactions WHERE type = "expense" AND user_id = 1) as e,
  (SELECT SUM(amount) AS "total_income" FROM transactions WHERE type = "income" AND user_id = 1) as i,
  (SELECT SUM(amount) AS "total_month_expense" FROM transactions WHERE type = "expense" AND date >= ? AND user_id = 1) as emonth,
  (SELECT SUM(amount) AS "total_month_income" FROM transactions WHERE type = "income" AND date >= ? AND user_id = 1) as imonth
  `;

  pool
    .query(query, [currentMonth, currentMonth])
    .then((response) => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch((error) => console.error(error));
});

export default resumeRouter;
