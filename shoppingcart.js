// JSON Product information
var products = {
    "001": { name: "Men's Jeans", price: 59.99 },
    "004": { name: "Women's T-Shirt", price: 19.99 },
};

// Add item to the cart or update quantity and total if it already exists
document.querySelector("#addButton").addEventListener("click", function() {
    var select = document.getElementById("dropdownInput");
    var selectedOption = select.options[select.selectedIndex];
    if (selectedOption.value !== "") {
        var productId = selectedOption.value;
        var productInfo = products[productId];

        // Get the cart table body
        var table = document.querySelector(".table").getElementsByTagName("tbody")[0];

        // Check if the product is already in the table
        var existingRow = Array.from(table.rows).find(function(row) {
            return row.cells[0].textContent === productId;
        });

        if (existingRow) {
            // If the product is already in the table, update its quantity and total
            var quantityCell = existingRow.cells[3].querySelector("input");
            quantityCell.value = parseInt(quantityCell.value) + 1;
            updateTotal(quantityCell);
        } else {
            // Add the product to the table
            var newRow = table.insertRow(table.rows.length);
            var productIdCell = newRow.insertCell(0);
            var productNameCell = newRow.insertCell(1);
            var priceCell = newRow.insertCell(2);
            var quantityCell = newRow.insertCell(3);
            var totalCell = newRow.insertCell(4);
            var actionCell = newRow.insertCell(5);

            productIdCell.innerHTML = productId;
            productNameCell.innerHTML = productInfo.name;
            priceCell.innerHTML = '$' + productInfo.price.toFixed(2);
            quantityCell.innerHTML = '<input type="number" value="1" min="1" onchange="updateTotal(this)">';
            totalCell.innerHTML = '$' + productInfo.price.toFixed(2);
            actionCell.innerHTML = '<button class="btn btn-danger" onclick="removeRow(this)">Remove</button>';
        }
    }
});

// Remove item from the cart
function removeRow(button) {
    var row = button.parentNode.parentNode;
    var productId = row.cells[0].textContent;
    row.parentNode.removeChild(row);
}

// Update total based on quantity
function updateTotal(input) {
    var row = input.parentNode.parentNode;
    var priceCell = row.cells[2];
    var totalCell = row.cells[4];
    var price = parseFloat(priceCell.innerHTML.replace('$', ''));
    var quantity = parseInt(input.value);
    var total = price * quantity;
    totalCell.innerHTML = '$' + total.toFixed(2);
    updateCartTotal();
}

// Update the cart total
function updateCartTotal() {
    var totalAmount = 0;
    var table = document.querySelector(".table").getElementsByTagName("tbody")[0].rows;
    for (var i = 0; i < table.length; i++) {
        var totalCell = table[i].cells[4];
        totalAmount += parseFloat(totalCell.innerHTML.replace('$', ''));
    }
    document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
}