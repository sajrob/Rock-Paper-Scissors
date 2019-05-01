    //game of rock paper scissors for the Odin project C/O Microverse precourse programe.
    // coded by Solomon Roberts, March, 2019
    //credits to Liz for helping with the psudocode to build game()  xx


    let values = ["rock", "paper", "scissors"];
    var playerPoints = 0
    var computerPoints = 0
    var tiePoints = 0

    alert("Welcome! \nLet's play a game of Rock Paper Scissors \nPress OK to start")


    game()


    //plays round of RPS
    function playRound() {

      alert("round starts")

      // computer chooses randomly
      computerSelection = values[Math.floor(Math.random() * values.length)];

      // player chooses
      let playerSelection = prompt("Rock, paper or scissors?");
      playerSelection = playerSelection.toLowerCase(); //converts the playerSelection to lowercase

      // checks that the user's playerSelection is valid and compares to 'values'
      while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        alert("ERROR! You entered = " + playerSelection + "\nPlease enter rock paper or scissors.")
        playerSelection = prompt("Rock, paper or scissors?");
      }

      // checks players playerSelection
      alert("Valid choice. You chose " + playerSelection)
      alert("cpu chose " + computerSelection)


      // alert("eval begins")
      if (playerSelection === computerSelection) {
        tiePoints++;
        alert("It's a DRAW!")
  
      } else
      if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
        alert("You WIN! " + playerSelection + " beats " + computerSelection)
        playerPoints++;
  
      } else {
        alert("You LOSE! " + computerSelection + " beats " + playerSelection)
        computerPoints++;
      }

      alert("End of ...")
  
    }


    function game() {
     // Execute game 5 times
     for (let i = 1; i < 6; i++) {
       playRound()
       alert("Round " + i)
     }
     alert("Match over")
   }

   if (playerPoints > computerPoints) {
          alert("You won!");
        } else if (playerPoints < computerPoints) {
          alert("Computer won");
        } else alert("it's a draw");

   alert("The final score is: \nPlayer: " + playerPoints + " | CPU: " + computerPoints + "\nDraw: " + tiePoints)