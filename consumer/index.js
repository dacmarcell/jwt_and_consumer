import express from "express";
import { api } from "./api";

const app = express();

const getInfo = async () => {
  const { data } = await api.post("/info");
  return data;
};

app.get("/consume-info", async (req, res) => {
  const info = await getInfo();
  return res.json(info);
});

app.listen(3333, () => console.log("running on 3333"));
