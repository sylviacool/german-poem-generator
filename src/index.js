function generatePoem(event) {
  event.preventDefault();
 

  new Typewriter("#poem", {
    strings: "Der Strauß, den ich gepflücket",
    autoStart: true,
    delay: 1,
    cursor:"",
  });
}

let poemFormElement = document.querySelector('#poemForm');
poemFormElement.addEventListener('submit', generatePoem);