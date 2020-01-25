const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors');

roundResult = document.querySelector('#roundResult');
scoreMessage = document.querySelector('#scoreMessage');
whoWon = document.querySelector('#whoWon');

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
  computerChoice = ['Paper', 'Rock', 'Scissors'];
  randomChoice = Math.floor(Math.random() * 3);
  return computerChoice[randomChoice];
}

function cleanInput(selection){
  if (typeof(selection) != "string"){
    return false;
  }else if (selection.length < 4){
    return false;
  }else{
    selection = selection[0].toUpperCase() + selection.slice(1).toLowerCase();

    validInput = {'Paper':'', 'Rock':'', 'Scissors':''};
    if (selection in validInput == false){
      return false;
    }else{
      return selection;
    }
  }
}

function playRound(playerSelection, computerSelection){
  playerSelection = cleanInput(playerSelection);
  computerSelection = cleanInput(computerSelection);
  whoWon.style.display = "none";
  if (playerSelection == false | computerSelection == false){
    roundResult.textContent = "Please enter 'Paper', 'Rock', or 'Scissors'.";
    scoreMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore;
  }else if (playerSelection === computerSelection){
    roundResult.textContent = "It's a tie! You both selected " + playerSelection + ".";
    scoreMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore;
  }else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
    roundResult.textContent = "You Win! Scissors beats Paper!";
    playerScore++;
    scoreMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore;
  }else if (computerSelection === 'Scissors' && playerSelection === 'Paper'){
    roundResult.textContent = "You Lose! Scissors beats Paper!";
    computerScore++;
    scoreMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore;
  }else if (playerSelection < computerSelection){
    roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection + ".";
    playerScore++;
    scoreMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore;
  }else {
    roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection + ".";
    computerScore++;
    scoreMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore;
  }

  if (computerScore == 5){
    whoWon.style.display = "block";
    whoWon.textContent = "The computer reached five first. You've lost. Play again?";
    computerScore = 0;
    playerScore = 0;
  }else if (playerScore == 5){
    whoWon.style.display = "block";
    whoWon.textContent = "First to five! You win! Play again?";
    computerScore = 0;
    playerScore = 0;
  }
}

rock.addEventListener('click', function(){
  playRound('rock', computerPlay())
});
paper.addEventListener('click', function(){
  playRound('paper', computerPlay())
});
scissors.addEventListener('click', function(){
  playRound('scissors', computerPlay())
});

