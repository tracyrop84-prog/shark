const weatherButton = document.querySelector("#weather-btn");
const temperature = document.querySelector("#temperature");
weatherButton.addEventListener("click", function () {
  console.log("event clicked...");
  fetch("https://api.agify.io/?name=tracy")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.age);
      temperature.textContent = `Temperature: ${data.age}`;
    })
    .catch((error) => {
      console.log(error);
    });
});
