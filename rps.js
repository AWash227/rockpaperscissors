//Global Vars
playerScore = 0
computerScore = 0

function playRound(){
    var message
    const playerSelection = prompt("Type in either 'rock', 'paper', or 'scissors': ")
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
    console.log(rand)
    return compPlay
}

function findWhoWon(){
    if(computerScore > playerScore){
        console.log("The computer won! Better luck next time...")
    }
    else if (computerScore < playerScore){
        console.log("You Won! Good job!")
    }
    else{
        console.log("It was a tie...")
    }
    
}
function game(){
    i = 1
    while(i <= 5){
    console.log(playRound())
    i++
    console.log("Your score is " + playerScore)
    }
    console.log("The computer had " + computerScore + " points, and you had " + playerScore + " points.")
    findWhoWon()
}
game()
