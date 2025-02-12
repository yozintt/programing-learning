// chessboard
/*
Using "#" to make a draw in shape of a chessboard
*/
function chessboard(size) {
  let board = ""; //save values in board
  for (let x = 0; x < size; x++) {
    //loop in axis x
    for (let y = 0; y < size; y++) {
      //loop in  y
      if ((x + y) % 2 === 0) board += " ";
      //if "x" and "y" be even, return empty(" ")
      else board += "#"; //else return "#"
    }
    board += "\n"; //break lines
  }
  return console.log(board); //return to the therminal the code
}
chessboard(10); //callback the function with dezired value for the chessboard
