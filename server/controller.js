const houses = require("./db.json");
let newHouseID = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },

  deleteHouse: (req, res) => {
    let { id } = req.params;
    let index = houses.findIndex((houses) => +houses.id === +id);
    houses.splice(index, 1);
    res.status(200).send(houses);
  },

  createHouse: (req, res) => {
    const { address, price, imgURL } = req.body;
    let newHouse = {
      address: address,
      price: price,
      imgURL: imgURL,
    };
    houses.push(newHouse);
    newHouseID++;
  },

  updateHouse: () => {},
};
