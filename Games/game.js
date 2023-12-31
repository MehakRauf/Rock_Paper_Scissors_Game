let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let Uscore = document.querySelector(".user_score");
let Cscore = document.querySelector(".comp_score");


let genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
let drawGame = () => {
    msg.innerText = "Game is draw";
    document.querySelector(".message_container").style.backgroundColor = "blue";
}

let showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        Uscore.innerText = userScore;
        msg.innerText = "You win";
        document.querySelector(".message_container").style.backgroundColor = "green";
    }
    else {
        compScore++;
        Cscore.innerText = compScore;
        msg.innerText = "You lose";
        document.querySelector(".message_container").style.backgroundColor = "red";
    }
}
let playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (compChoice === userChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "paper") {
            //scissors,paper
            userWin = compChoice === "rock" ? true : false;
        }
        else if (userChoice === "rock") {
            //paper,scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else {
            userWin = compChoice = "rock" ? false : true;
        }
        showWinner(userWin);

    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})