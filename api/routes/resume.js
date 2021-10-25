import express from "express";
import { homeResume } from "../exampleData.js";

const resumeRouter = express.Router();

// Resume //
resumeRouter.get("/", (req, res) => {
  res.status(200).json(homeResume);
});

export default resumeRouter;
