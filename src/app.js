function writeLyrics (response) {
    let song = response.data.answer;


    new Typewriter('#generated-lyrics', {
  strings: `${song}`,
  autoStart: true,
  delay: 10,
  cursor: "",
});


}

function generateLyrics (event) {
    event.preventDefault();
    let userInputElement = document.querySelector("#user-input");
    let songIdea = userInputElement.value;

    let apiKey = "f230a97a4f6f4577t418b7603o2e6fb5";
    let context = 'you are an experienced RnB songwriter. Write the title at the top and just write the first verse and chorus not the whole song. Please seperate the title, verse and chorus into HTML formats <p></p>. Please leave space </br> between each line.';
    let prompt =`write lyrics for a song about ${songIdea}`
    
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(writeLyrics);

    let showWaiting = document.querySelector("#generated-lyrics");
    showWaiting.classList.remove("hidden");

      new Typewriter('#generated-lyrics', {
  strings: "...",
  autoStart: true,
  delay: 40,
  speed: 100,
  loop: true,
  cursor: "",
});


}

let form = document.querySelector("form");
form.addEventListener("submit", generateLyrics);