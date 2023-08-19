let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "X";
let isgameover = false;

//Function to change turn

const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

function resetbtn() {
    let resetbtn = document.querySelector('#reset');
    resetbtn.addEventListener('click', () => {
        let boxtext = document.querySelectorAll('.boxtext');
        Array.from(boxtext).forEach(element => {
            element.innerText = ""
            let gameoverColor = document.querySelector('.text-style');
            let boxborder=document.querySelectorAll('.box');
        Array.from(boxborder).forEach(element => {
            element.style.border="2px solid black"
        });
        let boxcolor=document.querySelectorAll('.container');
        Array.from(boxcolor).forEach(e => {
            e.style.backgroundColor=" rgb(250, 197, 197)"
        });

        let gamecolor= document.querySelector('.gameover-box');
        gamecolor.style.display="none";

        let gameoversColor = document.querySelector('.text-style-play');
        gameoversColor.style.color = "green";

        let boxtext=document.querySelectorAll('.boxtext');
        Array.from(boxtext).forEach(text => {
            text.style.color="black"
        });
            let resetButton = document.querySelector('#reset');
            resetButton.style.backgroundColor = "rgb(179, 245, 179)";
            turn = "X"
            isgameover=false;
                document.getElementsByClassName("game-turn")[0].innerHTML = "Turn for " + turn;
            

        })

    })

}

function endFun() {
    if (isgameover) {

        gameOver.play();
        let gameoverColor = document.querySelector('.text-style-play');
        gameoverColor.style.color = "White";
        let boxborder=document.querySelectorAll('.box');
        Array.from(boxborder).forEach(element => {
            element.style.border="0px"
            element.style.cursor="none";
        });
        let boxcolor=document.querySelectorAll('.container');
        Array.from(boxcolor).forEach(e => {
            e.style.backgroundColor="yellow"
        });

        

        let boxtext=document.querySelectorAll('.boxtext');
        Array.from(boxtext).forEach(text => {
            text.style.color="yellow"
            
        });
       let gamecolor= document.querySelector('.gameover-box');
       gamecolor.style.display="flex";
        let resetButton = document.querySelector('#reset');
        resetButton.style.backgroundColor = "red";
       
    }
}


//Function to check win

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".game-turn").innerText = boxtext[e[0]].innerHTML + " Won";
            isgameover = true;
        }
              
       
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("game-turn")[0].innerHTML = "Turn for " + turn;
            }
            endFun();
        }
        
    })
    
})

resetbtn();
