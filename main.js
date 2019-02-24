window.onload = init;

function init() {
  document.querySelector("#input").addEventListener("keyup", handleTyping);
}

function handleTyping(event) {
  let userInput = event.target.value;
  let answer = "";
  let i = 0;

  let emptyString = " ";
  while (i < userInput.length){
      if (i === 0 || userInput[i-1] === emptyString) {
          answer = answer + userInput[i].toUpperCase();
      } else {
          answer = answer + userInput[i];
      }
      i++

  }
//   while (i < answer.length) {
//     if (i === 0) {
//       console.log(`the letter: ${answer[i].toUpperCase()}`);
//       answer[i] = answer[i].toUpperCase();
//       console.log("first letter", answer);
//     }
//     if (answer[i] === emptyString) {
//       console.log(`the letter: ${answer[i + 1].toUpperCase()}`);
//       answer[i + 1] = answer[i + 1].toUpperCase();
//       console.log("afternspace", answer);
//     }
//     i++;


  
  console.log(answer);

  document.querySelector("#changeme").innerText = answer;
}
