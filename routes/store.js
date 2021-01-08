const router = require("express").Router();
const products = require("../database/products.db");

router.get("/", async (req, res) => {
  let items = await products.all();
  res.render("store", { items: JSON.parse(items) });
});

router.route("/item=:id").get(async (req, res) => {
  let id = req.params.id;
  let itemSelected = await products.one(id);
  res.render("item", { item: JSON.parse(itemSelected)[0] });
});

module.exports = router;
