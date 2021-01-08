const router = require("express").Router();
const cart = require("../database/cart.db")
const product = require("../database/products.db")

router.route("/").get(async (req, res) => {
   const myProductsArray = []
   const values = await cart.getProductsFromCart(555)
   const valuesArr = JSON.parse(values)
   for (const elem of valuesArr) {
      const response = await product.one(elem.productId)
      const data = JSON.parse(response)[0]
      data.quantity = elem.quantity
      myProductsArray.push(data)
   }
   res.render("cart", {
      items: myProductsArray
   });
})
.post((req, res) => {
   const userId = req.body.userId;
   const productId = req.body.productId;
   const quantity = req.body.quantity
   cart.addToCart(userId, productId, quantity)
})
.delete((req, res) => {
   const userId = req.body.userId
   const productId = req.body.productId
   cart.deleteFromCart(userId, productId)
})

module.exports = router;