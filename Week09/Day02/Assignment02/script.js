let count = 0;

const countDisplay = document.getElementById("count");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");

addBtn.addEventListener("click", function () {
  count++;
  updateDisplay();
});

removeBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
  }
  updateDisplay();
});

function updateDisplay() {
  countDisplay.textContent = count;

  if (count > 10) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}