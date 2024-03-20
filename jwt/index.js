import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

const validateToken = (token, next) => {
  const decoded = jwt.verify(token, "secret");
  return decoded;
};

app.post("/token", (req, res) => {
  const { email } = req.body;

  if (email === "marcell@gmail.com") {
    const token = jwt.sign(
      {
        data: "foobar",
      },
      "secret",
      { expiresIn: "1h" }
    );

    return res.json(token);
  }
  return res.json("Unauthorized");
});

app.post("/info", (req, res) => {
  const bearerToken = req.headers.authorization;
  const token = bearerToken.split(" ")[1];
  if (token) {
    const decodedToken = validateToken(token);
    return res.json(decodedToken);
  }
  return res.json("Token not provided");
});

app.listen(3000, () => {
  console.log("running on 3000");
});
