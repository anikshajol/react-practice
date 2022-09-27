const addToDb = (id) => {
  let shoppingCart;

  //get the stored cart

  const storedProduct = localStorage.getItem("shopping-cart");

  if (storedProduct) {
    shoppingCart = JSON.parse(storedProduct);
  } else {
    shoppingCart = {};
  }

  // add quantity

  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;

    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const storedProduct = localStorage.getItem("shopping-cart");

  if (storedProduct) {
    const shoppingCart = JSON.parse(storedProduct);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
      console.log(shoppingCart);
    }
  }
};

export { addToDb, removeFromDb };
