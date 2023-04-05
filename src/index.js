"use strict"

// define error handler
const displayErrors = (msg, err) => {
  document.querySelector(
    "#errors"
  ).innerHTML += `<strong class='err'>${msg}!</strong> ${err} <br />`
}

// create nodelist bindings: select <div> squares by even/odd row index
let evenRowSquares, oddRowSquares
try {
  evenRowSquares = document.querySelectorAll(".even-row > div")
  oddRowSquares = document.querySelectorAll(".odd-row > div")
} catch (err) {
  displayErrors("Can't select odd/even row Squares", err)
}

// create nodelist bindings: select <div> squares by red or black home position
let redSquares, blackSquares
try {
  redSquares = document.querySelectorAll("")
  blackSquares = document.querySelectorAll("")
} catch (err) {
  displayErrors("Can't select red/black Squares", err)
}

// create element bindings: select <div> containers for checkers
let redCheckers, blackCheckers
try {
  redCheckers = document.querySelector("#redbox")
  blackCheckers = document.querySelector("#blackbox")
} catch (err) {
  displayErrors("Can't select checkers", err)
}

// function to build the checkerboard
const buildBoard = () => {
  const doBuild = (squares) => {
    for (let square of squares) {
      let index = Array.from(squares).indexOf(square)
      let rowKind = square.parentElement.className
      let shade
      if (rowKind === "even-row") {
        shade = index % 2 === 0 ? "dark" : "light"
      } else {
        shade = index % 2 === 0 ? "light" : "dark"
      }
      square.classList.add(shade)
    }
  }
  try {
    doBuild(evenRowSquares)
    doBuild(oddRowSquares)
  } catch (err) {
    displayErrors("buildBoard function failed", err)
  }
  document.querySelector("#btn_build").disabled = true
}

// function to place the checkers
const placeCheckers = () => {
  const doPlacement = (squares, checkers) => {
    squares.forEach((square) => {
      let i = Array.from(squares).indexOf(square)
      let rowKind = square.parentElement.className
      let squareKind = i % 2 ? "even" : "odd"
      if (rowKind === "even-row" && squareKind === "odd") {
        square.appendChild(checkers.firstElementChild)
      } else if (rowKind === "odd-row" && squareKind === "even") {
        square.appendChild(checkers.firstElementChild)
      }
    })
  }
  try {
    doPlacement(redSquares, redCheckers)
    doPlacement(blackSquares, blackCheckers)
  } catch (err) {
    displayErrors("placeCheckers function failed", err)
  }
  document.querySelector("#btn_place").disabled = true
}

// add event listeners for buttons
document.querySelector("#btn_place").addEventListener("click", placeCheckers)
document.querySelector("#btn_build").addEventListener("click", buildBoard)
document.querySelector("#btn_reset").addEventListener("click", () => {
  window.location.reload()
})
