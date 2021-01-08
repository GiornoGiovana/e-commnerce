const products = document.querySelectorAll("[data-item-id]");

products.forEach((product) => {
  product.addEventListener("click", () => {
    const itemId = product.getAttribute("data-item-id");
    window.location.replace(`http://localhost:3000/item=${itemId}`);
  });
});

const addCartButton = document.querySelector("[data-btn]");

if (addCartButton) {
  addCartButton.addEventListener("click", () => {
    const item = document.querySelector("[data-item]");
    const itemId = item.getAttribute("data-item");
    const quantity = item.querySelector("[data-item-quantity]");
    const data = {
      userId: 555,
      productId: itemId,
      quantity: quantity.value,
    };
    fetch("http://localhost:3000/cart", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
}

const itemCart = document.querySelectorAll("[data-cart-item-id]");

if (itemCart) {
  itemCart.forEach((item) => {
    const deleteBtn = item.querySelector("[data-delete-btn]");
    const itemId = item.getAttribute("data-cart-item-id");
    deleteBtn.addEventListener("click", () => {
      const data = {
        userId: 555,
        productId: itemId,
      };
      fetch("http://localhost:3000/cart", {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    });
  });
}
