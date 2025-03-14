import express from "express";
import cors from "cors";
import {
  getCategories,
  getTodos,
  getTags,
  getTodosByCategoryId,
} from "./controllers/index.js";

const app = express();
app.use(cors());
const port = 80;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.json("RestApi World! Welcome to the Vite Server");
});
app.get("/test", (req, res) => {
  res.json({ message: "Hello from the test endpoint!" });
});
app.get("/categories", (req, res) => {
  getCategories().then((categories) => {
    res.json(categories);
  });
});

app.get("/todos", (req, res) => {
  getTodos().then((todoData) => {
    console.log("Todo List:", todoData);
    res.json(todoData);
  });
});

app.get("/tags", (req, res) => {
  getTags().then((tagData) => {
    console.log("Tag List:", tagData);
    res.json(tagData);
  });
});

app.get("/todos/category/:categoryId", (req, res) => {
  getTodosByCategoryId(req.params.categoryId).then((todoData) => {
    console.log("By Category Todo List:", todoData);
    res.json(todoData);
  });
});

app.get("/todos/tag/:tagTitle", (req, res) => {});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
