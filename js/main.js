const game = () => {

  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("inactive");
      match.classList.add("matchStart");
      match.style.opacity = "1";
    });
  };

  //Play Match
  const playMatch = () => {
    const moves = document.querySelectorAll(".moves button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    //Computer Moves
    const computerMoves = ["rock", "paper", "scissors"];

    moves.forEach(move => {
      move.addEventListener("click", function() {
        moves[0].disabled = true;
        moves[1].disabled = true;
        moves[2].disabled = true;
        //Computer Choice

          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerMoves[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `img/${this.textContent}.png`;
            computerHand.src = `img/${computerChoice}.png`;
          }, 1500);
          
          //Animation
          playerHand.style.animation = "shakePlayer 1.8s ease";
          computerHand.style.animation = "shakeComputer 1.8s ease";
          playerHand.src = `img/rock.png`;
          computerHand.src = `img/rock.png`;
          setTimeout(() => {
            moves[0].disabled = false;
            moves[1].disabled = false;
            moves[2].disabled = false;
          },2000);

      });
    });
  };

  // We update each score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  // Here we analize all the posible cases
  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    const playerColor = "#1993EB";
    const computerColor = "#E9304D";
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      winner.style.color = "pink";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        winner.style.color = playerColor;
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        winner.style.color = computerColor;
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        winner.style.color = playerColor;
        winner.style.color = computerColor;
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        winner.style.color = computerColor;
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        winner.style.color = playerColor;
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
