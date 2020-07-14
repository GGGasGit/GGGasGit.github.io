let users = [
    { surname: "Nagy", firstname: "Aladár", age: 22 },
    { surname: "Kiss", firstname: "Béla", age: 31 },
    { surname: "Kovács", firstname: "Dénes", age: 44 },
    { surname: "Szabó", firstname: "Elemér", age: 57 },
    { surname: "Kolompár", firstname: "Ferenc", age: 63 },
    { surname: "Tudor", firstname: "Géza", age: 19 },
    { surname: "Magyar", firstname: "Hedvig", age: 27 },
    { surname: "Horvát", firstname: "Ilona", age: 39 },
    { surname: "Lúd", firstname: "Júlia", age: 41 },
    { surname: "Nyúl", firstname: "Karolina", age: 52 },
];




function createTable() {
    let tableBody = document.querySelector("#usertable tbody");
    tableBody.innerHTML = "";
    let createTD = (html, parent) => {
        let td = document.createElement("td");
        td.innerHTML = html;
        parent.appendChild(td);
    }

    let createButtonGroup = (btnID, parent) => {

        let group = document.createElement("div");
        group.className = "btn-group";

        let btnInfo = document.createElement("button");
        btnInfo.className = "btn-sm btn-info";
        btnInfo.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        btnInfo.setAttribute("id", btnID);
        btnInfo.addEventListener("click", btnInfoClicked);

        let btnDanger = document.createElement("button");
        btnDanger.className = "btn-sm btn-danger";
        btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';
        btnDanger.setAttribute("id", btnID);
        btnDanger.addEventListener("click", btnDangerClicked);

        group.appendChild(btnInfo);
        group.appendChild(btnDanger);

        let td = document.createElement("td");
        td.appendChild(group);
        parent.appendChild(td);
    }

    for (let k in users) {
        let tr = document.createElement("tr");
        createTD(parseInt(k) + 1, tr);
        for (let value of Object.values(users[k])) {
            createTD(value, tr);
        }
        createButtonGroup(parseInt(k) + 1, tr);
        tableBody.appendChild(tr);
    }
}

createTable();

let newSurname = document.querySelector("#vezeteknev");
let newFirstname = document.querySelector("#keresztnev");
let newAge = document.querySelector("#eletkor");
let newUserButton = document.querySelector("#newUserBtn");
let clickedBtnInfoId;

newUserButton.onclick = addNewUser;

/*function checkDataValidity (dataToValidate) {

}*/

function createNewUser() {
    let newUserSurname = newSurname.value;
    let newUserFirstname = newFirstname.value;
    let newUserAge = newAge.value;
    users.push({ surname: newUserSurname, firstname: newUserFirstname, age: newUserAge });
    resetFields()
}

function editUser(userID) {
    let editedUserSurname = newSurname.value;
    let editedUserFirstname = newFirstname.value;
    let editedUserAge = newAge.value;
    users[userID].surname = editedUserSurname;
    users[userID].firstname = editedUserFirstname;
    users[userID].age = editedUserAge;
    resetFields()
}

function resetFields() {
    newSurname.value = "";
    newFirstname.value = "";
    newAge.value = "";
}

function addNewUser() {
    if (newUserButton.textContent == "Edit User")
    {
        editUser(clickedBtnInfoId);
        newUserButton.textContent = "New User";
    }
    else 
   {
    createNewUser();
   }
    createTable();
}

function btnDangerClicked() {
    let clickedBtnDangerId = event.currentTarget.id - 1;
    users.splice(clickedBtnDangerId, 1);
    createTable();
}

function btnInfoClicked() {
    clickedBtnInfoId = event.currentTarget.id - 1;
    newUserButton.textContent = "Edit User";
    newSurname.value = users[clickedBtnInfoId].surname;
    newFirstname.value = users[clickedBtnInfoId].firstname;
    newAge.value = users[clickedBtnInfoId].age;
}
