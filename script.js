let totalItems = 0;
let totalPrice = 0;

function addToCart(price) {
    totalItems++;
    totalPrice += price;

    document.getElementById("cart-count").innerText = totalItems;
    document.getElementById("total-items").innerText = totalItems;
    document.getElementById("total-price").innerText = totalPrice;

    alert("Item added to cart!");
}