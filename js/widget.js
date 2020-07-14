let selectedWeekday
let weatherDescription = ["Jobbára felhős", "Többnyire napos", "Eső várható", "Részben felhős, zápor, zivatar esélye", "Gyönyörű napsütés", "Napsütés, kissé felhős", "Ragyogó napsütés"];
let weatherDegrees = [18, 26, 14, 20, 28, 27, 31];
let dailyMenuCold = ["Lottyantott töfi", "Tésztás túró", "Hal és sült krumpli", "Forró trutymó", "Séf nem kedvence"];
let dailyMenuHot = ["Hideg, jó zsíros pacal", "Jeges zselé", "Mindegy, csak hideg legyen", "Biohambi", "Kóla"];

function selectWeekday() {
    let weekday = document.querySelector("select[name='day-of-week']");
    selectedWeekday = parseInt(weekday.value);
}

function calculateMaximum(input) {
    let maximum = input[0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > maximum) {
            maximum = input[i];
        }
    }
    return maximum;
}

function calculateMinimum(input) {
    let minimum = input[0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < minimum) {
            minimum = input[i];
        }
    }
    return minimum;
}

function calculateAverage(input) {
    let average = 0;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    average = sum / input.length;
    return average;
}

function compileText() {
    selectWeekday();
    weatherDescriptionToPrint = weatherDescription[selectedWeekday];
    weatherDegreesToPrint = weatherDegrees[selectedWeekday];
    let menuNumber = Math.floor(Math.random() * 5);
    dailyMenuToPrint = weatherDegrees[selectedWeekday] < 21 ? dailyMenuCold[menuNumber] : dailyMenuHot[menuNumber];
    maximumToPrint = calculateMaximum(weatherDegrees);
    minimumToPrint = calculateMinimum(weatherDegrees);
    averageToPrint = calculateAverage(weatherDegrees).toFixed(1);
}

function printText() {
    compileText();
    let finalTextDescription = document.querySelector("p[name='weather']");
    finalTextDescription.innerHTML = weatherDescriptionToPrint;
    let finalTextDegrees = document.querySelector("p[name='weather-degrees']");
    finalTextDegrees.innerHTML = weatherDegreesToPrint;
    let finalTextOffer = document.querySelector("p[name='offer']");
    finalTextOffer.innerHTML = dailyMenuToPrint;
    let finalTextMaximum = document.querySelector("p[name='weather-maximum']");
    finalTextMaximum.innerHTML = maximumToPrint + " °C";
    let finalTextMinimum = document.querySelector("p[name='weather-minimum']");
    finalTextMinimum.innerHTML = minimumToPrint + " °C";
    let finalTextAverage = document.querySelector("p[name='weather-average']");
    finalTextAverage.innerHTML = averageToPrint + " °C";
}


let user = {
    "_id": "3lhasjhln23r6lnaslrih43t",
    index: 0,
    isActive: true,
    balance: 1241291,
    picture: "http://placeholder.it/32x32"
}

user.decreaseBalance = function(amount) {
    this.balance -= amount;
}

user.increaseBalance = function(amount) {
    this.balance += amount;
}

user.getBalance = function(amount) {
    return '$ ${this.balance}';
}
    
