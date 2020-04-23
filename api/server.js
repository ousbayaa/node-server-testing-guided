const express = require("express");

const Hobbits = require("../hobbits/hobbitsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/hobbits", (req, res) => {
  Hobbits.getAll()
    .then(hobbits => {
      res.status(200).json(hobbits);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/hobbits", (req, res) => {
  // add the hobbits to the database
  // should return 201 upon sucess
  // should return a message saying "Hobbit Created Successfully"
  // Hobbits.getAll()
  //   .then(hobbits => {
  //     res.status(200).json(hobbits);
  //   })
  //   .catch(error => {
  //     res.status(500).json(error);
  //   });
});
module.exports = server;
