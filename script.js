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
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore consequatur beatae aspernatur quis illum soluta cupiditate fugiat natus minus suscipit hic quas et, dolorem quod voluptas quae voluptatibus molestiae iure! Eligendi ratione minus quidem sint fuga! Laudantium dignissimos provident quaerat impedit, facilis eius ad, sed est excepturi blanditiis dolorum, nesciunt dolorem tempora expedita odio voluptate reiciendis sunt aperiam veritatis fugiat culpa aut soluta. Quam repudiandae obcaecati eius ipsam numquam!";
input.value = sampleText;
makeBionic(input.value);
