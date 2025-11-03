document.addEventListener("DOMContentLoaded", () => {
  let Income = document.querySelector(".income");
  let Expense = document.querySelector(".expense");
  let Balance = document.querySelector(".balance");
  let incomeCheckbox = document.querySelector(".incomeRadio");
  let expenseCheckbox = document.querySelector(".expenseRadio");
  let tableButton = document.querySelector(".tableButton");
  let textInput = document.querySelector(".textInput");
  let parseAmount = (text) => parseFloat(text.replace("₹", "").trim()) || 0;
  let formatAmount = (num) => `₹ ${num.toFixed(2)}`;
  let savedIncome = parseFloat(localStorage.getItem("income")) || 0;
  let savedExpense = parseFloat(localStorage.getItem("expense")) || 0;
  let savedBalance = parseFloat(localStorage.getItem("balance")) || 0;
  Income.textContent = formatAmount(savedIncome);
  Expense.textContent = formatAmount(savedExpense);
  Balance.textContent = formatAmount(savedBalance);
  tableButton.addEventListener("click", () => {
    let inputValue = parseFloat(textInput.value.trim());
    let currIncome = parseAmount(Income.textContent);
    let currExpense = parseAmount(Expense.textContent);
    let currBalance = parseAmount(Balance.textContent);
    if (isNaN(inputValue) || inputValue <= 0) {
      return alert("Enter a valid amount");
    }
    if (incomeCheckbox.checked) {
      currIncome += inputValue;
    } else if (expenseCheckbox.checked) {
      currExpense += inputValue;
    }
    currBalance = currIncome - currExpense;
    Income.textContent = formatAmount(currIncome);
    Expense.textContent = formatAmount(currExpense);
    Balance.textContent = formatAmount(currBalance);
    textInput.value = "";
    localStorage.setItem("income", currIncome);
    localStorage.setItem("expense", currExpense);
    localStorage.setItem("balance", currBalance);
  });
});
