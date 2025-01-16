function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor:"",
  });
}



function generatePoem(event) {
  event.preventDefault();

    //make a call to the API
    let instructionsInput = document.querySelector('#user-instructions');
    let apiKey = "36dbadda4844et80d39a8b26da0ofdb7";
    let context = "You are a german romantic love expert and love to write short poems. Your mission is to generate a 4 line poem, seperate each line with a <br/>. Make sure to follow the user instructions";
    let prompt =`User instructions: Generate a german poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector('#poem');
    poemElement.innerHTML = `<div class="generating">⏳ Generating a German poem about ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(showPoem);
}



let poemFormElement = document.querySelector('#poemForm');
poemFormElement.addEventListener('submit', generatePoem);