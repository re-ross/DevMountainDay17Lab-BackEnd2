const express = require("express");
const cors = require("cors");

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
app.put("/api/houses/:id", updateHouse);
app.delete("/api/houses/:id", deleteHouse);
const port = 4004;

app.listen(port, () => console.log(`server running on ${port}`));
