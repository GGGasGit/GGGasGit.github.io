let totalAmount
let orderedAmount = document.querySelector("input[name='orderAmount']");
let selectedPrice
let totalPayable
let houseDeliveryOption = document.querySelector("input[name='houseDelivery']");

function readAmount() {
    totalAmount = parseInt(orderedAmount.value);
}

function readPrice() {
    let price = document.querySelector("select[name='kebabType']");
    selectedPrice = parseInt(price.value);
}

function displayAmount(totalPayable) {
    let priceTag = document.querySelector("span.totalPrice");
    priceTag.innerHTML = totalPayable;
}

function readHouseDelivery() {
    if (houseDeliveryOption.checked == true) {
        houseDeliveryPrice = 200;
    } else {
        houseDeliveryPrice = 0;
    }
    return houseDeliveryPrice;
}

function resetAll() {
    houseDeliveryOption.checked = false;
    orderedAmount.value = 1;
    calculateAmount()
}

function sendMessage() {
    readAmount();
    if (totalAmount < 0 || totalAmount == 0 || isNaN(totalAmount)) {
        alert("Valami darabot azért adjá' má' meg!");
    } else {
        alert("Köszike a megrendelést, küldjük az árut!");
    }

    resetAll();
}

function calculateAmount() {
    readAmount();
    totalAmount = isNaN(totalAmount) ? 0 : totalAmount;
    if (totalAmount < 0) {
        totalAmount = 0;
    }

    readPrice();
    readHouseDelivery();
    totalPayable = selectedPrice * totalAmount + houseDeliveryPrice;

    displayAmount(totalPayable);
}


let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Sonka"
];

let toppingSelect = document.querySelector("CSS selector");
let index = 0;
while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}