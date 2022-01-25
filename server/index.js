const express = require("express");
const cors = require("cors");
const baseEnd = "/api/houses/";
const {
  getHouses,
  createHouse,
  updateHouse,
  deleteHouse,
} = require("./controller.js");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.put(`${baseEnd}` + ":id", updateHouse);
app.delete(`${baseEnd}` + ":id", deleteHouse);
const port = 4004;

app.listen(port, () => console.log(`server running on ${port}`));
