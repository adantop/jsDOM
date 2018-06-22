var shoppingListUL = document.getElementById("shoppingList");
var btnAdd = document.getElementById("btnAdd");
var userInput = document.getElementById("userInput");

function validate(strInput) {
    strInput.replace(/[^a-zA-Z0-9 \/.$]/g, '');
    if (strInput !== "") {
        console.log("Passed: ", strInput)
        return strInput;
    } else {
        console.log("Invalid input")
        return false;
    }
}

function cleanUserInput() {
    userInput.value=""
}

function addNewElement(value) {
    let newItem = document.createElement("li");
    let t = document.createTextNode(value);
    newItem.appendChild(t);
    newItem.addEventListener("click", function() {
        newItem.classList.toggle("markDone");
    });
    newItem.addEventListener("dblclick", function() {
        newItem.remove();
    })
    shoppingListUL.appendChild(newItem);
}

btnAdd.addEventListener("click", function() {
    let validatedInput = validate(userInput.value);

    if (validatedInput) {
        addNewElement(validatedInput);
        cleanUserInput();
    }
});

userInput.addEventListener("keypress", function(e) {
    let validatedInput = validate(userInput.value);

    if (e.keyCode === 13 && validatedInput) {
        e.preventDefault();
        addNewElement(validatedInput);
        cleanUserInput();
    }
})
