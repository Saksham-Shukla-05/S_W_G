let snake = document.getElementById("snake")
let water = document.getElementById("water")
let gun = document.getElementById("gun")

var userScore = document.getElementById("userScore")
var compScore = document.getElementById("CompScore")

var us = 0
var cs = 0
var tie = document.getElementById('Tie')
var round = document.getElementById("Round")
// var r = 1
// var showRoundText = document.getElementById("IncRound")
var userwon = document.getElementById("userWon")
var compwon = document.getElementById("compWon")

var remUserTxt = document.querySelector("#move-txt")
var remCompTxt = document.querySelector("#move-comp-txt")
var userImg = document.getElementById("User-Move")
var compImg = document.getElementById("Comp-Move")
var randomMove = ["images/new-snake-removebg-preview.png", "images/water-removebg-preview.png", "images/gun-removebg-preview.png"]



function SnakeWaterGun(){

snake.addEventListener("click", () => {
    remUserTxt.style.display = "none"
    userImg.src = "images/new-snake-removebg-preview.png"
    compImg.src = (randomMove[Math.floor(Math.random() * randomMove.length)]);
    remCompTxt.style.display = "none"

    if (compImg.src.endsWith("images/new-snake-removebg-preview.png")) {
        tie.style.display = "block"
        setTimeout(() => {
            tie.style.display = "none"
        }, 1000);
    }
    else if (compImg.src.endsWith("images/water-removebg-preview.png")) {
        userwon.style.display = "block"
        setTimeout(() => {
            userwon.style.display = "none"
        }, 1000);
        us++
        userScore.textContent = us
    }
    else if (compImg.src.endsWith("images/gun-removebg-preview.png")) {
        compwon.style.display = "block"
        setTimeout(() => {
            compwon.style.display = "none"
        }, 1000);
        cs++
        compScore.textContent = cs
    }
    
    // checkRound()
    // checkRound3()
    // RoundFinal()

})

water.addEventListener("click", () => {
    remUserTxt.style.display = "none"
    userImg.src = "images/water-removebg-preview.png"
    compImg.src = (randomMove[Math.floor(Math.random() * randomMove.length)]);
    remCompTxt.style.display = "none"
    if (compImg.src.endsWith("images/water-removebg-preview.png")) {
        tie.style.display = "block"
        setTimeout(() => {
            tie.style.display = "none"
        }, 1000);
    }
    else if (compImg.src.endsWith("images/new-snake-removebg-preview.png")) {
        userwon.style.display = "block"
        setTimeout(() => {
            userwon.style.display = "none"
        }, 1000);
        us++
        userScore.textContent = us
    }
    else if (compImg.src.endsWith("images/gun-removebg-preview.png")) {
        compwon.style.display = "block"
        setTimeout(() => {
            compwon.style.display = "none"
        }, 1000);
        cs++
        compScore.textContent = cs
    }
    
    // checkRound()
    // checkRound3()
    // RoundFinal()

})

gun.addEventListener("click", () => {
    remUserTxt.style.display = "none"
    userImg.src = "images/gun-removebg-preview.png"
    compImg.src = (randomMove[Math.floor(Math.random() * randomMove.length)]);
    remCompTxt.style.display = "none"
    if (compImg.src.endsWith("images/gun-removebg-preview.png")) {
        tie.style.display = "block"
        setTimeout(() => {
            tie.style.display = "none"
        }, 1000);
    }
    else if (compImg.src.endsWith("images/new-snake-removebg-preview.png")) {
        userwon.style.display = "block"
        setTimeout(() => {
            userwon.style.display = "none"
        }, 1000);
        us++
        userScore.textContent = us
    }
    else if (compImg.src.endsWith("images/water-removebg-preview.png")) {
        compwon.style.display = "block"
        setTimeout(() => {
            compwon.style.display = "none"
        }, 1000);
        cs++
        compScore.textContent = cs
    }
    
    // checkRound()
    // checkRound3()
    // RoundFinal()
 })
}

SnakeWaterGun()

// function checkRound() {

//     if (Number(userScore.innerHTML) + Number(compScore.innerHTML) == 3) {
//         r++
//         round.innerHTML = r
//         showRoundText.style.display = "block"
//         showRoundText.textContent = ` Round ${round.textContent}`

//         setTimeout(() => {
//             showRoundText.style.display = "none"
//         }, 2000);
//     }

//     else {
//         console.log("On going round 1");
//     }
// }

// function checkRound3(){
//     if(Number(userScore.innerHTML) + Number(compScore.innerHTML) == 6){
//         r++
//         round.innerHTML=r
//         showRoundText.style.display="block"
//         showRoundText.textContent = `Round ${round.textContent}`

//         setTimeout(() => {
//         showRoundText.style.display="none"
//         }, 2000);

//     }

// }

// function RoundFinal(){

// }


