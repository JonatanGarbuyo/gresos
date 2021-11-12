import express from "express";

import pool from "../database/db.js";
import userExtractor from "../middleware/userExtractor.js";

const resumeRouter = express.Router();

// Resume //
resumeRouter.get("/", userExtractor, (req, res) => {
  const user_id = req.user_id;
  const today = new Date();
  const currentMonth = `${today.getFullYear()}-${today.getMonth() + 1}-01`;

  // TODO refactor query. set user_id only once
  const query = `SELECT (total_income - total_expense) AS Balance, total_month_expense, total_month_income FROM
  (SELECT IFNULL(SUM(amount), 0) AS "total_expense" FROM transactions WHERE type = "expense" AND user_id = ?) as e,
  (SELECT IFNULL(SUM(amount), 0) AS "total_income" FROM transactions WHERE type = "income" AND user_id = ?) as i,
  (SELECT IFNULL(SUM(amount), 0) AS "total_month_expense" FROM transactions WHERE type = "expense" AND date >= ? AND user_id = ?) as emonth,
  (SELECT IFNULL(SUM(amount), 0) AS "total_month_income" FROM transactions WHERE type = "income" AND date >= ? AND user_id = ?) as imonth
  `;

  pool
    .query(query, [
      user_id,
      user_id,
      currentMonth,
      user_id,
      currentMonth,
      user_id,
    ])
    .then((response) => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch((error) => console.error(error));
});

export default resumeRouter;
