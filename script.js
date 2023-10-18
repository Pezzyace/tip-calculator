const tipButtons = document.querySelectorAll(".tip-button");
const billAmountInput = document.getElementById("billAmount");
const customTipInput = document.getElementById("customTip");
const numOfPersonsInput = document.getElementById("numOfPersons");
const totalTipSpan = document.getElementById("totalTip");
const tipPerPersonSpan = document.getElementById("tipPerPerson");
const resetButton = document.getElementById("resetButton");
const error = document.getElementById("errorMsg");
const inputDiv = document.getElementById("inputDiv");

let tipPercentage = 0;

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipPercentage = parseFloat(button.getAttribute("data-tip-percent"));
    resetTipButtons();
    button.style.backgroundColor = "#c5e4e7";
    button.style.color = "#00494d";
  });
});

function resetTipButtons() {
  tipButtons.forEach((button) => {
    button.style.backgroundColor = "#00494d";
  });
}

customTipInput.addEventListener("input", () => {
  tipPercentage = parseFloat(customTipInput.value) || 0;
  resetTipButtons();
  calculateTip();
});

billAmountInput.addEventListener("input", calculateTip);
numOfPersonsInput.addEventListener("input", calculateTip);

function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value) || 0;
  const numPersons = parseInt(numOfPersonsInput.value) || 1;
  const tipAmount = (billAmount * (tipPercentage / 100));
  const tipPerPerson = (tipAmount / numPersons);

  if(numOfPersonsInput.value.trim() === ""){

    inputDiv.style.borderColor = "red";
    error.innerText = "error";

  }else{
    error.innerText = "";
    totalTipSpan.textContent = `${tipAmount.toFixed(2)}`;
    tipPerPersonSpan.textContent = `${tipPerPerson.toFixed(2)}`;
  }
}

resetButton.addEventListener("click", () => {
  billAmountInput.value = "";
  customTipInput.value = "";
  numOfPersonsInput.value = "";
  tipPercentage = 0;
  resetTipButtons();
  totalTipSpan.textContent = "$0.00";
  tipPerPersonSpan.textContent = "$0.00";
});