const headingText = document.querySelector("#text-full-name");
const firstNameInput = document.querySelector("#txt-first-name");
const lastNameInput = document.querySelector("#txt-last-name");
const submitBtn = document.querySelector("#submitBtn");
const resetBtn = document.querySelector("#resetBtn");

function displayName () {
    headingText.innerHTML = `${firstNameInput.value} ${lastNameInput.value}`
}

firstNameInput.addEventListener("keyup", displayName)
lastNameInput.addEventListener("keyup", displayName)

submitBtn.addEventListener("click", () => {
    if (firstNameInput.value == "" && lastNameInput.value == "") {
        alert(`Nameless person, please enter your first and last name!`);
    } else if (firstNameInput.value == "") {
        alert(`Hey, Mr./Ms ${lastNameInput.value}. Please enter your first name.`);
    } else if (lastNameInput.value == "") {
        alert(`Hey, ${firstNameInput.value}. Please enter your last name.`);
    } else {
        alert(`Thank you for registering, ${firstNameInput.value} ${lastNameInput.value}!`)
    }
})

resetBtn.addEventListener("click", () => {
    headingText.innerHTML = "";
})