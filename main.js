window.onload = init;

function init() {
  document.querySelector("#input").addEventListener("keyup", handleTyping);

  document.querySelector("#input2").addEventListener("keyup", handleTyping2);
}

function handleTyping(event) {
  let userInput = event.target.value;
  // userInput = ** form input(where you are typing)
  let answer = "";
  // answer = empty string ** output
  let i = 0;
  // value of index = 0 [starting position 0]
  let space = " ";
  // value of space = space
  while (i < userInput.length) {
    // index is less than the indexed length of userInput
    if (i === 0 || userInput[i - 1] === space) {
      // check if [i] is equal to zero
      // or
      // check if userInput's previous index is an space with [i-1]
      answer = answer + userInput[i].toUpperCase();
      // current 'answer' is an empty string
      // = 
      // answer 'which is emptyString' +  userInput's index of 0 and every index after empty string 
      //**this will run the loop through each index to check if true, if true this will print the index of 0 or after an emptry stringtoUpperCase() for that index */
    } else {
      answer = answer + userInput[i];
      // if line 18 runs false line 28 will execute 
      //"" = "" + userInput's lowercases
    }
    i++;

    
    // bumps one up each index to run checks
  }

  console.log(answer);

  document.querySelector("#changeme").innerText = answer;
}

function handleTyping2(event) {
  let userInput2 = event.target.value;
  let answer = "";
  let i = 0;




  answer = answer + userInput2;


  console.log(answer);

  document.querySelector("#changeme2").innerText = answer;
} 
