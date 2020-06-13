function sendMessage() {
    alert("Köszike a megrendelést, küldjük az árut!");
}

function calculateAmount() {
    let orderedAmount = document.querySelector("input[name='orderAmount']");
    let totalAmount = parseInt(orderedAmount.value);
    let price = document.querySelector("select[name='kebabType']");
    let selectedPrice = parseInt(price.value);
    let totalPayable = selectedPrice * totalAmount;
    let priceTag = document.querySelector("span.totalPrice")
    priceTag.innerHTML = totalPayable;
}