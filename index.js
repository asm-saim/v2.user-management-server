import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("users are coming soon");
});

const users = [
  { id: 1, name: "Daniel", email: "dan@gamil.com" },
  { id: 2, name: "Jabir", email: "jabir@gamil.com" },
  { id: 3, name: "kabir", email: "kabir@gamil.com" },
  { id: 5, name: "Nabir", email: "nabir@gamil.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
