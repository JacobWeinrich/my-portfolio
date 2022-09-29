var turn = 1;

var Row1Column1 = "notActive";
var Row1Column2 = "notActive";
var Row1Column3 = "notActive";
var Row3Column1 = "notActive";
var Row3Column2 = "notActive";
var Row3Column3 = "notActive";
var Row2Column1 = "notActive";
var Row2Column2 = "notActive";
var Row2Column3 = "notActive";

var Row1Column1A = "";

var Row1Column2A = "";

var Row1Column3A = "";

var Row2Column1A = "";

var Row2Column2A = "";

var Row2Column3A = "";

var Row3Column1A = "";

var Row3Column2A = "";

var Row3Column3A = "";

document.getElementById("Row1Column1").addEventListener("click", function () {
  if (turn == 1 && Row1Column1 == "notActive") {
    document.getElementById("Row1Column1").style.backgroundImage =
      "url('x.jpeg')";
    turn = 2;
    Row1Column1 = "active";
    Row1Column1A = "x";
  } else if (turn == 2 && Row1Column1 == "notActive") {
    document.getElementById("Row1Column1").style.backgroundImage =
      "url('o.jpeg')";
    turn = 1;
    Row1Column1 = "active";
    Row1Column1A = "o";
  } else {
    alert("Spot ALready Played");
  }
  checkWinner();
});

document.getElementById("Row1Column2").addEventListener("click", function () {
  if (turn == 1 && Row1Column2 == "notActive") {
    document.getElementById("Row1Column2").style.backgroundImage =
      "url('x.jpeg')";
    turn = 2;
    Row1Column2 = "active";
    Row1Column2A = "x";
  } else if (turn == 2 && Row1Column2 == "notActive") {
    document.getElementById("Row1Column2").style.backgroundImage =
      "url('o.jpeg')";
    turn = 1;
    Row1Column2 = "active";
    Row1Column2A = "o";
  } else {
    alert("Spot ALready Played");
  }
  checkWinner();
});

document.getElementById("Row1Column3").addEventListener("click", function () {
  if (turn == 1 && Row1Column3 == "notActive") {
    document.getElementById("Row1Column3").style.backgroundImage =
      "url('x.jpeg')";
    turn = 2;
    Row1Column3 = "active";
    Row1Column3A = "x";
  } else if (turn == 2 && Row1Column3 == "notActive") {
    document.getElementById("Row1Column3").style.backgroundImage =
      "url('o.jpeg')";
    turn = 1;
    Row1Column3 = "active";
    Row1Column3A = "o";
  } else {
    alert("Spot ALready Played");
  }
  checkWinner();
});

document.getElementById("Row2Column1").addEventListener("click", function () {
  if (turn == 1 && Row2Column1 == "notActive") {
    document.getElementById("Row2Column1").style.backgroundImage =
      "url('x.jpeg')";
    turn = 2;
    Row2Column1 = "active";
    Row2Column1A = "x";
  } else if (turn == 2 && Row2Column1 == "notActive") {
    document.getElementById("Row2Column1").style.backgroundImage =
      "url('o.jpeg')";
    turn = 1;
    Row2Column1 = "active";
    Row2Column1A = "o";
  } else {
    alert("Spot ALready Played");
  }
  checkWinner();
});

document.getElementById("Row2Column2").addEventListener("click", function () {
  if (turn == 1 && Row2Column2 == "notActive") {
    document.getElementById("Row2Column2").style.backgroundImage =
      "url('x.jpeg')";
    turn = 2;
    Row2Column2 = "active";
    Row2Column2A = "x";
  } else if (turn == 2 && Row2Column2 == "notActive") {
    document.getElementById("Row2Column2").style.backgroundImage =
      "url('o.jpeg')";
    turn = 1;
    Row2Column2 = "active";
    Row2Column2A = "o";
  } else {
    alert("Spot ALready Played");
  }
  checkWinner();
});

document.getElementById("Row2Column3").addEventListener("click", function () {
  if (turn == 1 && Row2Column3 == "notActive") {
    document.getElementById("Row2Column3").style.backgroundImage =
      "url('x.jpeg')";
    turn = 2;
    Row2Column3 = "active";
    Row2Column3A = "x";
  } else if (turn == 2 && Row2Column3 == "notActive") {
    document.getElementById("Row2Column3").style.backgroundImage =
      "url('o.jpeg')";
    turn = 1;
    Row2Column3 = "active";
    Row2Column3A = "o";
  } else {
    alert("Spot ALready Played");
  }
  checkWinner();
});

document.getElementById("Row3Column1").addEventListener("click", function () {
  if (turn == 1 && Row3Column1 == "notActive") {
    document.getElementById("Row3Column1").style.backgroundImage =
      "url('x.jpeg')";
    turn = 2;
    Row3Column1 = "active";
    Row3Column1A = "x";
  } else if (turn == 2 && Row3Column1 == "notActive") {
    document.getElementById("Row3Column1").style.backgroundImage =
      "url('o.jpeg')";
    turn = 1;
    Row3Column1 = "active";
    Row3Column1A = "o";
  } else {
    alert("Spot ALready Played");
  }
  checkWinner();
});

document.getElementById("Row3Column2").addEventListener("click", function () {
  if (turn == 1 && Row3Column2 == "notActive") {
    document.getElementById("Row3Column2").style.backgroundImage =
      "url('x.jpeg')";
    turn = 2;
    Row3Column2 = "active";
    Row3Column2A = "x";
  } else if (turn == 2 && Row3Column2 == "notActive") {
    document.getElementById("Row3Column2").style.backgroundImage =
      "url('o.jpeg')";
    turn = 1;
    Row3Column2 = "active";
    Row3Column2A = "o";
  } else {
    alert("Spot ALready Played");
  }
  checkWinner();
});

document.getElementById("Row3Column3").addEventListener("click", function () {
  if (turn == 1 && Row3Column3 == "notActive") {
    document.getElementById("Row3Column3").style.backgroundImage =
      "url('x.jpeg')";
    turn = 2;
    Row3Column3 = "active";
    Row3Column3A = "x";
  } else if (turn == 2 && Row3Column3 == "notActive") {
    document.getElementById("Row3Column3").style.backgroundImage =
      "url('o.jpeg')";
    turn = 1;
    Row3Column3 = "active";
    Row3Column3A = "o";
  } else {
    alert("Spot ALready Played");
  }
  checkWinner();
});

function checkWinner() {
  if (Row1Column1A == "x" && Row1Column2A == "x" && Row1Column3A == "x") {
    //horizontal
    winnerColor("Row1Column1", "Row1Column2", "Row1Column3");
    //alert("X Winner 1");
    //window.location.reload(false);
  } else if (
    Row2Column1A == "x" &&
    Row2Column2A == "x" &&
    Row2Column3A == "x"
  ) {
    winnerColor("Row2Column1", "Row2Column2", "Row2Column3");
    //alert("X Winner");
    ////window.location.reload(false);
  } else if (
    Row3Column1A == "x" &&
    Row3Column2A == "x" &&
    Row3Column3A == "x"
  ) {
    winnerColor("Row3Column1", "Row3Column2", "Row3Column3");
    //alert("X Winner");
    //window.location.reload(false);
  } else if (
    Row1Column1A == "x" &&
    Row2Column1A == "x" &&
    Row3Column1A == "x"
  ) {
    // 2
    winnerColor("Row1Column1", "Row2Column1", "Row3Column1");
    //alert("X Winner");
    //window.location.reload(false);
  } else if (
    Row1Column2A == "x" &&
    Row2Column2A == "x" &&
    Row3Column2A == "x"
  ) {
    winnerColor("Row1Column2", "Row2Column2", "Row3Column2");
    //alert("X Winner");
    //window.location.reload(false);
  } else if (
    Row1Column3A == "x" &&
    Row2Column3A == "x" &&
    Row3Column3A == "x"
  ) {
    winnerColor("Row1Column3", "Row2Column3", "Row3Column3");
    //alert("X Winner");
    //window.location.reload(false);
  } else if (
    Row1Column1A == "x" &&
    Row2Column2A == "x" &&
    Row3Column3A == "x"
  ) {
    winnerColor("Row1Column1", "Row2Column2", "Row3Column3");
    // 3
    //alert("X Winner");
    //window.location.reload(false);
  } else if (
    Row1Column3A == "x" &&
    Row2Column2A == "x" &&
    Row3Column1A == "x"
  ) {
    winnerColor("Row1Column3", "Row2Column2", "Row3Column1");
    //alert("X Winner");
    //window.location.reload(false);
  } else if (
    Row1Column1A == "o" &&
    Row1Column2A == "o" &&
    Row1Column3A == "o"
  ) {
    winnerColor("Row1Column1", "Row1Column2", "Row1Column3");
    //horizontal
    //alert("o Winner");
    //window.location.reload(false);
  } else if (
    Row2Column1A == "o" &&
    Row2Column2A == "o" &&
    Row2Column3A == "o"
  ) {
    winnerColor("Row2Column1", "Row2Column2", "Row2Column3");
    //alert("o Winner");
    //window.location.reload(false);
  } else if (
    Row3Column1A == "o" &&
    Row3Column2A == "o" &&
    Row3Column3A == "o"
  ) {
    winnerColor("Row3Column1", "Row3Column2", "Row3Column3");
    //alert("o Winner");
    //window.location.reload(false);
  } else if (
    Row1Column1A == "o" &&
    Row2Column1A == "o" &&
    Row3Column1A == "o"
  ) {
    winnerColor("Row1Column1", "Row2Column1", "Row3Column1");
    // 2
    //alert("o Winner");
    //window.location.reload(false);
  } else if (
    Row1Column2A == "o" &&
    Row2Column2A == "o" &&
    Row3Column2A == "o"
  ) {
    winnerColor("Row1Column2", "Row2Column2", "Row3Column2");
    //alert("o Winner");
    //window.location.reload(false);
  } else if (
    Row1Column3A == "o" &&
    Row2Column3A == "o" &&
    Row3Column3A == "o"
  ) {
    winnerColor("Row1Column3", "Row2Column3", "Row3Column3");
    //alert("o Winner");
    //window.location.reload(false);
  } else if (
    Row1Column1A == "o" &&
    Row2Column2A == "o" &&
    Row3Column3A == "o"
  ) {
    winnerColor("Row1Column1", "Row2Column2", "Row3Column3");
    // 3
    //alert("o Winner");
    //window.location.reload(false);
  } else if (
    Row1Column3A == "o" &&
    Row2Column2A == "o" &&
    Row3Column1A == "o"
  ) {
    winnerColor("Row1Column3", "Row2Column2", "Row3Column1");
    //alert("o Winner");
    //window.location.reload(false);
  } else if (
    Row1Column1 == "active" &&
    Row1Column2 == "active" &&
    Row1Column3 == "active" &&
    Row2Column1 == "active" &&
    Row2Column2 == "active" &&
    Row2Column3 == "active" &&
    Row3Column1 == "active" &&
    Row3Column2 == "active" &&
    Row3Column3 == "active"
  ) {
    alert("Tie");
    //window.location.reload(false);
    document.getElementById("Row1Column1").style.backgroundColor = "rgb(0, 0, 250)";
    document.getElementById("Row1Column2").style.backgroundColor = "rgb(0, 0, 250)";
    document.getElementById("Row1Column3").style.backgroundColor = "rgb(0, 0, 250)";
    document.getElementById("Row2Column1").style.backgroundColor = "rgb(0, 0, 250)";
    document.getElementById("Row2Column2").style.backgroundColor = "rgb(0, 0, 250)";
    document.getElementById("Row2Column3").style.backgroundColor = "rgb(0, 0, 250)";
    document.getElementById("Row3Column1").style.backgroundColor = "rgb(0, 0, 250)";
    document.getElementById("Row3Column2").style.backgroundColor = "rgb(0, 0, 250)";
    document.getElementById("Row3Column3").style.backgroundColor = "rgb(0, 0, 250)";
  }
}

function winnerColor(spot1, spot2, spot3) {
  document.getElementById(spot1).style.backgroundColor = "rgb(0, 250, 0)";
  document.getElementById(spot2).style.backgroundColor = "rgb(0, 250, 0)";
  document.getElementById(spot3).style.backgroundColor = "rgb(0, 250, 0)";
}
