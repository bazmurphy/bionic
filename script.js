const input = document.getElementById("input");
const output = document.getElementById("output");
const lineHeightInput = document.getElementById("line-height");
const letterSpacingInput = document.getElementById("letter-spacing");

input.addEventListener("input", (event) => makeBionic(event.target.value));

lineHeightInput.addEventListener("change", (event) => {
  output.style.lineHeight = event.target.value;
});

letterSpacingInput.addEventListener("change", (event) => {
  output.style.letterSpacing = `${event.target.value}px`;
});

function makeBionic(text) {
  output.innerText = "";
  text
    .split(" ")
    .map((word) => {
      if (word.length === 1) {
        return word;
      }
      const splitPoint = Math.ceil(word.length / 2);
      return [[word.slice(0, splitPoint)], [word.slice(splitPoint)]];
    })
    .forEach((word) => {
      if (word.length === 1) {
        const wordSpan = document.createElement("span");
        wordSpan.classList.add("bold");
        wordSpan.innerText = word;
        console.log(wordSpan);
        output.appendChild(wordSpan);
        const space = document.createElement("span");
        space.innerText = " ";
        output.appendChild(space);
      } else {
        const partOneSpan = document.createElement("span");
        partOneSpan.innerText = word[0];
        partOneSpan.classList.add("bold");
        const partTwoSpan = document.createElement("span");
        partTwoSpan.innerText = word[1];
        const wordSpan = document.createElement("span");
        wordSpan.appendChild(partOneSpan);
        wordSpan.appendChild(partTwoSpan);
        console.log(wordSpan);
        output.appendChild(wordSpan);
        const space = document.createElement("span");
        space.innerText = " ";
        output.appendChild(space);
      }
    });
}

// Initial Load
const sampleText =
  "Dyslexia is a language-based learning disorder which can lead to difficulties in reading, spelling, and writing. This is because individuals with dyslexia may have trouble identifying phonemes (or speech sounds) and connecting them with the letters that represent them. With an estimated 9–12% of the worldwide population affected by dyslexia, how do we design our online UX experiences to best accommodate their needs?";
input.value = sampleText;
makeBionic(input.value);
