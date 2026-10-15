import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("users are coming soon");
});

const users = [
  { id: 1, name: "Daniel", email: "dan@gamil.com" },
  { id: 2, name: "Jabir", email: "jabir@gamil.com" },
  { id: 3, name: "kabir", email: "kabir@gamil.com" },
  { id: 4, name: "Nabir", email: "nabir@gamil.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

//create an api:
app.post("/users", (req, res) => {
  console.log("data from client", req.body);
  res.send({ success: true, message: "user added successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
