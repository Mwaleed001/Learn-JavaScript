const useroptions = ["Rock", "Paper", "Scissors"];


function play(userChoice) {
  // 1. Computer Logic: Generate a random index number between 0 and 2
  const randomIndex = Math.floor(Math.random() * useroptions.length);
  const compChoice = useroptions[randomIndex];


  // Update the UI text immediately
  document.getElementById("user-choice").innerText = userChoice;
  document.getElementById("comp-choice").innerText = compChoice;



  const resultEl = document.getElementById("game-result");
  // 2. Game Logic Matrix: Check for conditions
  if (userChoice === compChoice) {
    resultEl.innerText = "It's a Tie! ";
    resultEl.style.color = "#ffb703";
  } 

  else if (
    (userChoice === "Rock" && compChoice === "Scissors") ||
    (userChoice === "Paper" && compChoice === "Rock") ||
    (userChoice === "Scissors" && compChoice === "Paper")
  ) {
    resultEl.innerText = "You Win! ";
    resultEl.style.color = "#8ecae6";
  } 


  else {
    resultEl.innerText = "Computer Wins! ";
    resultEl.style.color = "#e63946";
  }



}