import express from "express";

import { homeResume } from "../exampleData.js";
import validateResourceMW from "../middleware/validateResourceMW.js";
// import { transactionSchema } from "../models/transaction.js";

const transactionsRouter = express.Router();

const allTransactions = homeResume.lastOperations;

// Transactions routes //
// Create transaction
transactionsRouter.post("/", (req, res) => {
  const transaction = req.body;
  transaction.id = allTransactions.length + 1;

  allTransactions.push(transaction);
  res.status(201).send(transaction);
});

// Read all transactions
transactionsRouter.get("/", (req, res) => {
  res.status(200).json(allTransactions);
});
// Read all ${type} transactions
transactionsRouter.get("/:type", (req, res) => {
  const type = req.params.type;
  const transactions = allTransactions.filter(
    (transaction) => transaction.type === type
  );
  // if (transactions.length <= 0 ) res.status(404);
  res.status(200).json(transactions);
});

// Update transaction
transactionsRouter.put("/:id", (req, res) => {
  // TODO validate id
  const id = parseInt(req.params.id);
  let transaction = allTransactions.find((t) => t.id === id);
  if (!transaction) res.status(404).send("Transaction not found");

  const newTransaction = { ...req.body, id: id };
  newTransaction["type"] = transaction.type;

  const transactionIndex = allTransactions.indexOf(transaction);
  allTransactions[transactionIndex] = newTransaction;
  res.status(200).send();
});
// Delete transaction
transactionsRouter.delete("/:id", (req, res) => {
  // TODO validate id
  const id = parseInt(req.params.id);

  let transaction = allTransactions.find((c) => c.id === id);
  if (!transaction) res.status(404).send("Transaction not found");

  const transactionIndex = allTransactions.indexOf(transaction);
  allTransactions.splice(transactionIndex, 1);

  console.log("index: ", transactionIndex);
  res.status(200).send();
});

export default transactionsRouter;
