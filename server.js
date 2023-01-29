const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
app.use(express.json());

const posts = [
  {
    username: "Nitin",
    title: "Post 1",
  },
  {
    username: "Swati",
    title: "Post 2",
  },
];

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
