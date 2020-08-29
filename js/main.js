var userChoice = 0;
var userScore = 0;
var compScore = 0;
var compChoice = 0;
var winner = -1;
var nomeUser;
document.getElementById("result").innerHTML = "Início de Jogo";

function iniciar() {
    do {
        nomeUser = window.prompt("Digite seu nome:", "");
    } while (nomeUser == null || nomeUser == "");
    window.alert("Seu nome é " + nomeUser);
    document.getElementById("userLabel").innerHTML = nomeUser;
    // document.getElementById("userScore").innerHTML = 0;
    // document.getElementById("compScore").innerHTML = 0;
  }

  function resetar() {
    // iniciar();
    document.getElementById("userScore").innerHTML = 0;
    document.getElementById("compScore").innerHTML = 0;
    document.getElementById("result").innerHTML = "Jogo zerado";
  }

  function play(choice) {
    userChoice = choice;
  
    compChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  
    if (userChoice == 1 && compChoice == 1) {
      winner = 0;
    } else if (userChoice == 1 && compChoice == 2) {
      winner = 2;
    } else if (userChoice == 1 && compChoice == 3) {
      winner = 1;
    } else if (userChoice == 2 && compChoice == 1) {
      winner = 1;
    } else if (userChoice == 2 && compChoice == 2) {
      winner = 0;
    } else if (userChoice == 2 && compChoice == 3) {
      winner = 2;
    } else if (userChoice == 3 && compChoice == 1) {
      winner = 2;
    } else if (userChoice == 3 && compChoice == 2) {
      winner = 1;
    } else if (userChoice == 3 && compChoice == 3) {
      winner = 0;
    }
  
    if (winner == 0) {
      document.getElementById("result").innerHTML = "Empate";
    } else if (winner == 1) {
      document.getElementById("result").innerHTML = `${nomeUser} Ganhou`;
      userScore++;
    } else if (winner == 2) {
      document.getElementById("result").innerHTML = "Comp Ganhou";
      compScore++;
    }
  
    document.getElementById("userScore").innerHTML = userScore;
  
    document.getElementById("compScore").innerHTML = compScore;
  }
