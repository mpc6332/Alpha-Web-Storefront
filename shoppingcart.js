// Sample JSON product data
const products = [
    {
        id: 1,
        name: "Bike Green",
        price: 10,
        image: "bike1.png"
    },
    {
        id: 2,
        name: "Bike Pink",
        price: 15,
        image: "bike2.png"
    },
    // Add more product objects as needed
];

// Function to add a product to the cart
function addToCart(product) {
    const cartItems = document.getElementById("cart-items");
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const itemImage = document.createElement("img");
    itemImage.src = product.image;

    const itemName = document.createElement("span");
    itemName.textContent = product.name;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = "$" + product.price;

    cartItem.appendChild(itemImage);
    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);

    cartItems.appendChild(cartItem);
}

// Function to calculate and update the total amount
function updateTotal() {
    const cartItems = document.getElementsByClassName("cart-item");
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const itemPrice = parseFloat(cartItems[i].querySelector("span:last-child").textContent.slice(1));
        total += itemPrice;
    }

    document.getElementById("total-amount").textContent = total.toFixed(2);
}

// Event listener for the checkout button
document.getElementById("checkout-btn").addEventListener("click", function () {
    // Add your checkout logic here
    alert("Checkout button clicked!");
});

// Sample usage: Adding products to the cart
addToCart(products[0]);
addToCart(products[1]);

// Sample usage: Updating the total amount
updateTotal();
