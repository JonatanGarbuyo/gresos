import express from "express";

import pool from "../database/db.js";

import validateResourceMW from "../middleware/validateResourceMW.js";
import { transactionSchema } from "../models/transaction.js";

const transactionsRouter = express.Router();
const user_id = 1;

// Transactions routes //
// Create transaction
transactionsRouter.post(
  "/",
  validateResourceMW(transactionSchema),
  (req, res) => {
    const { date, concept, category_id, type, amount } = req.body;
    const newTransaction = {
      date,
      concept,
      category_id,
      type,
      amount,
      user_id,
    };
    const query = "INSERT INTO transactions set ?";
    pool
      .query(query, [newTransaction])
      .then((response) => {
        res.status(201).send({ ...newTransaction, id: response.insertId });
      })
      .catch((err) => console.error("ERROR: ", err));
  }
);

// Read all transactions
transactionsRouter.get("/", (req, res) => {
  const query =
    "Select id, concept, type, amount, category_id, DATE_FORMAT(date, '%Y/%m/%d') as date FROM transactions WHERE user_id = ? ORDER BY date DESC";
  pool
    .query(query, [user_id])
    .then((transactions) => res.status(200).send(transactions))
    .catch((error) => console.error(error));
});
// Read all ${type} transactions
transactionsRouter.get("/:type", (req, res) => {
  const type = req.params.type;
  const query =
    "Select id, concept, type, amount, category_id, DATE_FORMAT(date, '%Y/%m/%d') as date FROM transactions WHERE user_id = ? and type = ? ORDER BY date DESC";
  pool
    .query(query, [user_id, type])
    .then((transactions) => res.status(200).send(transactions))
    .catch((error) => console.error(error));
});

// Update transaction
transactionsRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const { concept, amount, date, category_id } = req.body;
  const transaction = { concept, amount, date, category_id };
  const query = "UPDATE transactions set ? WHERE id = ? and user_id = ?";
  pool
    .query(query, [transaction, id, user_id])
    .then(res.status(200).send())
    .catch((error) => console.error(error));
});

// Delete transaction
transactionsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM transactions WHERE id = ? and user_id = ?";
  pool
    .query(query, [id, user_id])
    .then(res.status(200).send())
    .catch((error) => console.error(error));
});

export default transactionsRouter;
