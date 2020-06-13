let totalAmount
let orderedAmount
let price
let selectedPrice
let totalPayable
let priceTag

function sendMessage() {
    orderedAmount = document.querySelector("input[name='orderAmount']");
    totalAmount = parseInt(orderedAmount.value);
    if (totalAmount < 0 || totalAmount == 0 || isNaN(totalAmount)) {
        alert("Valami darabot azért adjá' má' meg!");
    } else {
    alert("Köszike a megrendelést, küldjük az árut!");
}
}

function calculateAmount() {
    orderedAmount = document.querySelector("input[name='orderAmount']");
    totalAmount = parseInt(orderedAmount.value);
    totalAmount = isNaN(totalAmount) ? 0 : totalAmount;
    if (totalAmount < 0) {
        totalAmount = 0;
    }
    price = document.querySelector("select[name='kebabType']");
    selectedPrice = parseInt(price.value);
    totalPayable = selectedPrice * totalAmount;
    priceTag = document.querySelector("span.totalPrice");
    priceTag.innerHTML = totalPayable;
}
