window.onload = init;

function init() {
  document.querySelector("#input").addEventListener("keyup", handleTyping);
}

function handleTyping(event) {
  let userInput = event.target.value;
  // userInput =
  let answer = "";
  // answer = empty string
  let i = 0;
  // value of index = 0 [starting position 0]
  let emptyString = " ";
  // value of emptyString = space
  while (i < userInput.length) {
    // index is less than the indexed length of userInput
    if (i === 0 || userInput[i - 1] === emptyString) {
      // check if [i] is equal to zero
      // or
      // check if userInput's previous index is an emptyString with [i-1]
      answer = answer + userInput[i].toUpperCase();
      // current 'answer' is an emptyString
      // =
      // answer 'which is emptyString' +  userInput's index of 0 and every index after empty string 
      //**this will run the loop through each index to check if true, if true this will print toUpperCase() for that index */
    } else {
      answer = answer + userInput[i];
      // if line 18 runs false line 28 will execute 
      //"" = "" + userInput's lowercases
    }
    i++;
    // bumps one up each index to run checks
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
