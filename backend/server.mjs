import express from "express";
import cors from "cors";

const app = express();
// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON requests
const PORT = 3000;

const users = [
  {
    id: 1,
    name: "name1",
    email: "name1@gmail.com",
    age: 20,
  },
  {
    id: 2,
    name: "name2",
    email: "name2@gmail.com",
    age: 22,
  },
  {
    id: 3,
    name: "name3",
    email: "name3@gmail.com",
    age: 24,
  },
];
// Get Request
app.get("/api/users", (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Fetching all users from the array", data: users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
