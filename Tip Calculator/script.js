const cal = document.getElementById("calculate");
const billamt = document.getElementById("bill");
const tipnbr = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = billamt.value;
  const tipValue = tipnbr.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}
cal.addEventListener("click", calculateTotal);
