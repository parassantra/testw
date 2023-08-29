const express = require("express");
let data = require("./data");
const router = express.Router();

router.get("/", (req, res) => {
  let page = req?.query?.page;
  let newData = [...data];
  if (page) {
    let offset = page - 1;
    newData = newData.slice(0 + offset * 5, 5 + (page - 1) * 5);
  }
  res.json({
    totalPages: 4,
    data: newData,
  });
});

module.exports = {
  router,
};
