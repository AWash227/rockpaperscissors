//Global Vars
playerScore = 0
computerScore = 0
var playerSelection
const messageDiv = document.querySelector('#messageDiv');


function playRound(playerSelection){
    var message
    const computerSelection = computerPlay()
    if (playerSelection == computerSelection){
        message = "It's a Tie. You both chose the same thing!"
        playerScore++
        computerScore++
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        message = "You won! Rock beats scissors."
        playerScore += 2
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper'){
        message = "You lost... Paper beats rock."
        computerScore += 2
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        message = "You lost... Scissors beats paper."
        computerScore += 2    
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        message = "You win! Paper beats rock."
        playerScore += 2
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        message = "You lost... Rock beats scissors."
        computerScore += 2
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        message = "You won! Scissors beats paper."
        playerScore += 2
    }
    else{
        message = "You managed to not pick a valid move. nice."
    }
    return message
}

function computerPlay(){
    rand = Math.floor(Math.random() * 3)
    if (rand == 0)
       compPlay = 'rock'
    else if (rand == 1)
        compPlay = 'paper'
    else
        compPlay = 'scissors'
    //console.log(rand)
    return compPlay
}

function findWhoWon(){
    if(playerScore >= 5){
       alert("You have won with a score of " + playerScore + ". And the computer had " + computerScore + ".") 
       return true 
    }
    else if(computerScore >= 5){
        alert("You have lost! You:" + playerScore + " Computer:" + computerScore);
        return true
    }
    else if(playerScore < 5){
        return false
    }
    else if (computerScore < 5){
        return false
    }
    else{
        alert("You have tied with the computer!")
        return false
    }
}
function game(){
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(!findWhoWon()){
            playerSelection = button.id;

            //console.log(playerSelection)
            var pRound = document.createElement('p');
            pRound.classList.add('pRound');
            pRound.textContent = playRound(playerSelection);

            //add player score propery to the message div
            var playerScoreP = document.createElement('p');
            playerScoreP.classList.add('playerScoreP');
            playerScoreP.textContent = ("Your score is " + playerScore.toString());

            messageDiv.appendChild(playerScoreP);
            messageDiv.appendChild(pRound);
            //console.log(playerSelection)
        }
    });
});

