import express from "express";
import logger from "./middleware/logger.js";
import cors from "cors";
const app = express();

// app.use(cors);
app.use(express.json());
app.use(logger);

const notes = [
  {
    id: 1,
    name: "uno",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>hello world</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);
  response.status(200).send(note);
});

//app.delete()

// Route not found
app.use((request, response) => {
  response
    .status(404)
    .json({
      error: "Not found",
    })
    .end();
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
