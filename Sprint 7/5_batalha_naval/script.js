let startBtn = document.querySelector(".start-btn")
startBtn.addEventListener("click", startGame)
let playingBoard = []
let winGame = false
let winH2 = document.querySelector(".win")

let maxClick = 10

function startGame() {
  const seaBoard = [
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
  ];

  winH2.classList.remove("show-win")
  winGame = false
  maxClick = 10

  playingBoard = allocateShips(5, seaBoard)

  let boardDiv = document.querySelector(".board")
  boardDiv.innerHTML = ""
  
  createSpaces(boardDiv)
}

function allocateShips(shipAmount, initialBoard) {
  for (let i = 0; i < shipAmount; i++) {
    let shipAdded = false

    while(shipAdded == false) {
      let x = Math.floor(Math.random() * 5)
      let y = Math.floor(Math.random() * 5)
      
      if(initialBoard[x][y] == ".") {
        initialBoard[x][y] = "S"
        shipAdded = true
      }
    }
  }
  return initialBoard
}

function createSpaces(boardDiv) {
  for (let x = 0; x < playingBoard.length; x++) {
    let row = playingBoard[x]

    let rowUl = document.createElement("ul")
    rowUl.classList.add("row")

    for (let y = 0; y < row.length; y++) {
      let spaceLi = document.createElement("li")
      spaceLi.id = x.toString() + "-" + y.toString()
      spaceLi.classList.add("space", "water")

      spaceLi.addEventListener("click", clickSpace)

      rowUl.appendChild(spaceLi)
    }

    boardDiv.appendChild(rowUl)
  }
}

function clickSpace(e) {
  if(!winGame) {
    maxClick--
    let space = e.target
  
    let positions = space.id.split("-")
  
    let x = positions[0]
    let y = positions[1]
  
    if(playingBoard[x][y] === "S") {
      space.classList.add("ship")
      playingBoard[x][y] = "X"
    }
    else {
      space.classList.add("empty")
    }

    winGame = checkWinCondition(playingBoard)

    if(maxClick == 0){
      console.log("Você perdeu!!")
    }
  }
}

function checkWinCondition(guessedBoard) {
  for (let x = 0; x < guessedBoard.length; x++) {
    for (let y = 0; y < guessedBoard.length; y++) {
      if (guessedBoard[x][y] == "S") {
        return false;
      }
    }
  }

  winH2.classList.add("show-win")
  return true
}