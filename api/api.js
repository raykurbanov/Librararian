const router = require("express").Router();
const Books = require("../models/Books");
const data = require("../db/100books.json");

router.post("/books", (req, res) => {
  Books.bulkCreate([...data])
    .then((response) => {
      console.log("Data was posted successfully");
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/books", (req, res) => {
  Books.findAll().then((data) => res.json(data));
});

module.exports = router;
