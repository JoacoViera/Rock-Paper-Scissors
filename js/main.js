const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
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
  
      let timeControl = true;
      moves.forEach(move => {
        move.addEventListener("click", function() {
          //Computer Choice
          if(timeControl){
            timeControl = false;
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerMoves[computerNumber];
    
            setTimeout(() => {
              //Here is where we call compare hands
              compareHands(this.textContent, computerChoice);
              //Update Images
              playerHand.src = `img/${this.textContent}.png`;
              computerHand.src = `img/${computerChoice}.png`;
              timeControl=true;
            }, 1500);
            //Animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
            playerHand.src = `img/rock.png`;
            computerHand.src = `img/rock.png`;
          }
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      const playerColor = "aquamarine";
      const computerColor = "peru";
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
  