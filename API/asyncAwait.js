async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}
async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}