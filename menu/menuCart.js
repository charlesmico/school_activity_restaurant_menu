let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    name: "Black Pepper Chicken",
    tag: "mainA",
    price: 10,
    inCart: 0,
  },
  {
    name: "Chicken and Orzo Bake",
    tag: "mainB",
    price: 15,
    inCart: 0,
  },
  {
    name: "Chicken Tortellini",
    tag: "mainC",
    price: 20,
    inCart: 0,
  },
  {
    name: "Pan Seared Cod",
    tag: "mainD",
    price: 25,
    inCart: 0,
  },
  {
    name: "Sausage Manicotti Bake",
    tag: "mainE",
    price: 30,
    inCart: 0,
  },
  {
    name: "Cabbage Fritters",
    tag: "mainF",
    price: 35,
    inCart: 0,
  },
  {
    name: "Creamy Polenta",
    tag: "vegetableA",
    price: 40,
    inCart: 0,
  },
  {
    name: "Roasted Broccoli",
    tag: "vegetableB",
    price: 45,
    inCart: 0,
  },
  {
    name: "Socca with Zucchini",
    tag: "vegetableC",
    price: 50,
    inCart: 0,
  },
  {
    name: "Rustic Pepper Stew",
    tag: "vegetableD",
    price: 55,
    inCart: 0,
  },
  {
    name: "Vegetable Tortilla",
    tag: "vegetableE",
    price: 60,
    inCart: 0,
  },
  {
    name: "Baked Squash",
    tag: "vegetableF",
    price: 65,
    inCart: 0,
  },
  {
    name: "Ratatouille",
    tag: "vegetableG",
    price: 70,
    inCart: 0,
  },
  {
    name: "Kale-Artichoke",
    tag: "vegetableH",
    price: 75,
    inCart: 0,
  },
  {
    name: "Strawberry Jello Pie",
    tag: "desertA",
    price: 80,
    inCart: 0,
  },
  {
    name: "French Silk Pie",
    tag: "desertB",
    price: 85,
    inCart: 0,
  },
  {
    name: "Pumpkin Pie",
    tag: "desertC",
    price: 90,
    inCart: 0,
  },
  {
    name: "Banana Pudding",
    tag: "desertD",
    price: 95,
    inCart: 0,
  },
  {
    name: "Sticky Toffee Pudding",
    tag: "desertE",
    price: 100,
    inCart: 0,
  },
  {
    name: "Black Magic Cake",
    tag: "desertF",
    price: 105,
    inCart: 0,
  },
  {
    name: "Cantaloupe Tea",
    tag: "drinkA",
    price: 110,
    inCart: 0,
  },
  {
    name: "Cinnamon Tea",
    tag: "drinkB",
    price: 115,
    inCart: 0,
  },
  {
    name: "Banana Milk",
    tag: "drinkC",
    price: 120,
    inCart: 0,
  },
  {
    name: "Peanut Butter Banana Smoothie",
    tag: "drinkD",
    price: 125,
    inCart: 0,
  },
  {
    name: "Honey Oatmilk Latte",
    tag: "drinkE",
    price: 130,
    inCart: 0,
  },
  {
    name: "Pork Sausage Rolls",
    tag: "snackA",
    price: 135,
    inCart: 0,
  },
  {
    name: "Spicy Corn Fritters",
    tag: "snackB",
    price: 140,
    inCart: 0,
  },
  {
    name: "Sausage Rolls with Mash",
    tag: "snackC",
    price: 145,
    inCart: 0,
  },
  {
    name: "Cheese Toastie",
    tag: "snackD",
    price: 150,
    inCart: 0,
  },
  {
    name: "Loaded Deviled Eggs",
    tag: "addonsA",
    price: 155,
    inCart: 0,
  },
  {
    name: "Sausage Balls",
    tag: "addonsB",
    price: 160,
    inCart: 0,
  },
  {
    name: "Spicy Cheese Twists",
    tag: "addonsC",
    price: 165,
    inCart: 0,
  },
  {
    name: "Roasted Bruschetta",
    tag: "addonsD",
    price: 170,
    inCart: 0,
  },
  {
    name: "Pizza Poppers",
    tag: "addonsE",
    price: 175,
    inCart: 0,
  },
  {
    name: "Smoky Pea Hummus",
    tag: "addonsF",
    price: 180,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    window.alert(products[i].name + " was successfully added to your cart.");
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products-list");

  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
       <table>
        <tr>
            <td class="product-info">
              <a onClick="remove('${item.tag}')">
                <svg fill="currentColor" width="20" height="20" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg"
                     class="cf-icon-svg">
                    <path class="svg-style"
                       d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
                 </svg>
              </a>
              <img src="../assets/images/${item.tag}.jpg" alt="">
              <span class="product-name">${item.name}</span>
            </td>
            <td>$${item.price}</td>
            <td class="product-quantity">
              <a onClick="decrement('${item.tag}')">
                <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="svg-style" d="M6 12L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <span>${item.inCart}</span>
              <a onClick="increment('${item.tag}')">
                <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Edit / Add_Plus">
                    <path class="svg-style" id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </a>
            </td>
        </tr>
      </table>
      `;
    });
    productContainer.innerHTML += `
    <div class="cart-total-container">
      <div>
        <select name="discount" id="discount" required>
          <option value="0" disabled selected hidden>Select Discount Type</option>
          <option value="0.05">Normal</option>
          <option value="0.10">Student</option>
          <option value="0.15">Senior Citizen</option>
        </select>
      </div>
      <div class="cart-total-content">
        <div class="cart-total-info">
          <h4 class="basket-total-title">Total Cost</h4>
          <h4 class="basket-total">$${cartCost}.00</h4>
        </div>
        <button onClick="placeOrder()" class="place-order-btn">Place Order</button>
      </div>
    </div>
    `;
  }
}

function remove(tag) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems[tag] != undefined) {
    // Get the price of the item being removed
    let removedItemPrice = cartItems[tag].price * cartItems[tag].inCart;

    // Reduce the total cost by the price of the removed item
    let cartCost = localStorage.getItem("totalCost");
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost - removedItemPrice);

    // Reduce the total number of items in the cart
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    localStorage.setItem("cartNumbers", productNumbers - cartItems[tag].inCart);

    // Remove the item from the cart
    delete cartItems[tag];
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

    // Update the display
    displayCart();
  }
}

function decrement(tag) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems[tag] != undefined && cartItems[tag].inCart > 1) {
    // Decrease the quantity by 1
    cartItems[tag].inCart--;

    // Update the total cost
    let cartCost = localStorage.getItem("totalCost");
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost - cartItems[tag].price);

    // Update the total number of items in the cart
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    localStorage.setItem("cartNumbers", productNumbers - 1);

    // Update local storage with the modified cart items
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

    // Refresh the cart display
    displayCart();

    updateCartNumbers();
  }
}

function increment(tag) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems[tag] != undefined) {
    // Increase the quantity by 1
    cartItems[tag].inCart++;

    // Update the total cost
    let cartCost = localStorage.getItem("totalCost");
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + cartItems[tag].price);

    // Update the total number of items in the cart
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    localStorage.setItem("cartNumbers", productNumbers + 1);

    // Update local storage with the modified cart items
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

    // Refresh the cart display
    displayCart();

    updateCartNumbers();
  }
}

function updateCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function placeOrder() {
  // Retrieve cart items from local storage
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  // Retrieve total cost from local storage
  let cartCost = localStorage.getItem("totalCost");

  // Retrieve the selected discount option
  let discountSelect = document.querySelector("select");
  let discountValue = parseFloat(discountSelect.value);

  // Calculate discounted total bill
  let discountedTotal = cartCost - cartCost * discountValue;

  // Check if there are items in the cart
  if (cartItems && cartCost) {
    // Create an array to store the names of the products
    let productList = [];

    // Loop through each item in the cart
    Object.values(cartItems).forEach((item) => {
      // Push the product name and quantity into the productList array
      productList.push(`${item.name} x ${item.inCart}`);
    });

    // Join the productList array into a string with line breaks
    let productsString = productList.join("\n");

    // Display an alert dialog with the list of products, discounted total bill, and selected discount option
    window.alert(
      `Thank you for your order!\n\nProducts:\n${productsString}\n\nTotal Bill: $${discountedTotal} (Discount Applied: ${
        discountSelect.options[discountSelect.selectedIndex].text
      })`
    );

    // Once the order is placed, clear the cart
    localStorage.removeItem("productsInCart");
    localStorage.removeItem("totalCost");
    localStorage.removeItem("cartNumbers");

    // Refresh the cart display
    displayCart();
  } else {
    // If the cart is empty, display a message
    window.alert(
      "Your cart is empty. Please add items before placing an order."
    );
  }
}

onLoadCartNumbers();
displayCart();
