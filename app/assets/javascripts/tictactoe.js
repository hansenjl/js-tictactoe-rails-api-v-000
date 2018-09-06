// Code your JavaScript / jQuery solution here
var gameId = null
var turn = 0

 const winCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]

$(document).ready(function() {
  attachListeners();
})

var player = () => turn % 2 ? 'O' : 'X'

function updateState(cell){
  var token = player()
  $(cell).text(token)
}