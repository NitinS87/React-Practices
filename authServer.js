const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
app.use(express.json());

let refreshTokens = [];

app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);

  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);

    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
});

app.post("/login", (req, res) => {
  //Authenticate user

  const username = req.body.username;
  const user = { name: username };

  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.JWT_REFRESH_TOKEN);
  refreshTokens.push(refreshToken);
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET_TOKEN, { expiresIn: "15s" });
}

app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token != req.body.token);
  res.sendStatus(204);
});
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
