const counter = document.querySelector("#counter");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const increase = document.querySelector("#increase");
let currentCount = Number(counter.textContent);
increase.addEventListener("click", () => {
  counter.textContent = ++currentCount;

  updateColor();
  disableButton();
});
decrease.addEventListener("click", () => {
  counter.textContent = --currentCount;
  updateColor();
  disableButton();
});
reset.addEventListener("click", () => {
  console.log("reset has been clicked");
  currentCount = 0;
  counter.textContent = currentCount;
  updateColor();
    disableButton();

});

function updateColor() {
  if (currentCount > 0) {
    counter.style.color = "green";
  } else if (currentCount < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}
updateColor();
function disableButton() {
  if (currentCount >= 10) {
    increase.disabled = true;
  } else if (currentCount <= -10) {
    decrease.disabled = true;
  } else {
    if (currentCount < 10 && currentCount > -10 ) {
      increase.disabled = false;
      decrease.disabled = false;
    }
  }
}
disableButton();
