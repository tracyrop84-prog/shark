import axios from "axios";
function dictionary() {
    console.log("red")
  const word = document.querySelector("#word");
  const phonetics = document.querySelector("#phonetics");
  const meanings = document.querySelector("#meanings");
  const searchButton = document.getElementById("searchButton");
  const inputData = document.querySelector("#inputData");
  searchButton.addEventListener("click", function () {
    console.log("clicked");
    word.textContent = inputData.value;
    const results = inputData.value;
    console.log(results);

    fetchApiData();
  });

  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/:word",
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

}
// dictionary()

export default dictionary;
