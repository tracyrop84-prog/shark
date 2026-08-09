import axios from "axios";
import { useState } from "react";

function Dictionary() {
  // const word = document.querySelector("#word");
  // const phonetics = document.querySelector("#phonetics");
  // const meanings = document.querySelector("#meanings");
  // const searchButton = document.getElementById("searchButton");
  // const inputData = document.querySelector("#inputData");
  // searchButton.addEventListener("click", function () {
  //   console.log("clicked");
  //   word.textContent = inputData.value;
  //   const results = inputData.value;
  //   console.log(results);

  //   // fetchApiData();
  // });
  let word = "";
  let dataResponse = [];
  let phonetics = "";
  let meanings = "";
  const fetchApiData = async () => {
    console.log("fetching data");
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      );
      dataResponse = await response.json();
      const data = dataResponse[0];
    
      document.getElementById("phonetic").textContent = data.phonetic;
      document.getElementById("word").textContent = data.word;

      const tableBody = document.getElementById("table-body");
      data.meanings[0].definitions;

      for (const definition of data.meanings[0].definitions) {
        const row = `
    <tr>
      <td>${definition.definition}</td>
    </tr>
  `;
        tableBody.innerHTML += row;
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const [userInput, setUserInput] = useState("");
  function handleClick() {
    word = userInput;

    fetchApiData();
  }
  function handleChange(event) {
    setUserInput(event.target.value);
  }
  return (
    <>
      <h1>Dictionary API</h1>
      <input type="text" value={userInput} onChange={handleChange} />
      <button type="button" id="searchButton" onClick={handleClick}>
        Search
      </button>
      <div>
        word<h3 id="word"></h3>
        phonetics<h3 id="phonetic"></h3>
        <table border="1">
          <thead>
            <tr>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody id="table-body"></tbody>
        </table>
      </div>
    </>
  );
}
export default Dictionary;
