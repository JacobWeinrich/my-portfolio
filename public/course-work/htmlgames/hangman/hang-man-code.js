var easyWord1 = "Jacob";
var showWord = [];
var word = "";
usedLetters = "";
wrong = 0;

started = false;

document.getElementById("submit-btn").addEventListener("click", function () {
  customWordStart(document.getElementById("input-box").value.toLowerCase());
  document.getElementById('input-box').value = "";
});
document.getElementById("random-btn").addEventListener("click", function () {
  start();
});
document.getElementById("reset-btn").addEventListener("click", function () {
  location.reload(false)
});

function start() {
  started = true;
  word = easyWord1.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    showWord[i] = "#";
    document.getElementById("guessWord").innerHTML = `${showWord}`;
    //console.log("#");
  }
}

function customWordStart(CustomWord) {
  if (CustomWord !== "") {
    started = true;
    showWord = [];
    word = CustomWord.toLowerCase();
    for (var i = 0; i < word.length; i++) {
      showWord[i] = "#";
      document.getElementById("guessWord").innerHTML = `${showWord}`;
      //console.log("#");
    }
    for (let index = 0; index < word.length; index++) {
      if (word[index] === " ") showWord[index] = "-";
      document.getElementById("guessWord").innerHTML = `${showWord}`;
    }
  }
}

function letterCheck(letter) {
  if (usedLetters.includes(letter) == false && word.includes(letter) == true) {
    usedLetters = usedLetters + " " + letter;
    document.getElementById(
      "usedLetters-txt"
    ).innerHTML = `Used Letters:${usedLetters}`;

    for (let index = 0; index < word.length; index++) {
      if (word[index] === letter) showWord[index] = letter;
    }
    document.getElementById("guessWord").innerHTML = `${showWord}`;
    if (showWord.includes("#") == false) {
      document.getElementById("imageWindow").style.backgroundImage =
        "url('imgs/winner.svg')";
        started = false;
    }
  } else if (
    usedLetters.includes(letter) == false &&
    word.includes(letter) == false
  ) {
    usedLetters = usedLetters + " " + letter;
    document.getElementById(
      "usedLetters-txt"
    ).innerHTML = `Used Letters:${usedLetters}`;
    wrong = wrong + 1;
    if (wrong == 1) {
      document.getElementById("imageWindow").style.backgroundImage =
        "url('imgs/step1.svg')";
    } else if (wrong == 2) {
      document.getElementById("imageWindow").style.backgroundImage =
        "url('imgs/step2.svg')";
    } else if (wrong == 3) {
      document.getElementById("imageWindow").style.backgroundImage =
        "url('imgs/step3.svg')";
    } else if (wrong == 4) {
      document.getElementById("imageWindow").style.backgroundImage =
        "url('imgs/step4.svg')";
    } else if (wrong == 5) {
      document.getElementById("imageWindow").style.backgroundImage =
        "url('imgs/step5.svg')";
    } else if (wrong == 6) {
      document.getElementById("imageWindow").style.backgroundImage =
        "url('imgs/step6.svg')";
    } else if (wrong == 7) {
      document.getElementById("imageWindow").style.backgroundImage =
        "url('imgs/step7.svg')";
    } else if (wrong == 8) {
      document.getElementById("imageWindow").style.backgroundImage =
        "url('imgs/step8.svg')";
    } else if (wrong == 9) {
      document.getElementById("imageWindow").style.backgroundImage =
        "url('imgs/loser.svg')";
        started = false;
    }
    document.getElementById(
      "wrong-txt"
    ).innerHTML = `Wrong Answers: ${wrong} out of 9`;
  }
}

// Onscreen Press
document.getElementById("keyA").addEventListener("click", function () {
  if (started == true){
    document.getElementById("keyA").style.backgroundColor = "#000";
  letterCheck("a");
  }
  
});
document.getElementById("keyB").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyB").style.backgroundColor = "#000";
  letterCheck("b");
  }
});
document.getElementById("keyC").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyC").style.backgroundColor = "#000";
  letterCheck("c");
  }
});
document.getElementById("keyD").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyD").style.backgroundColor = "#000";
  letterCheck("d");
  }
});
document.getElementById("keyE").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyE").style.backgroundColor = "#000";
  letterCheck("e");
  }
});
document.getElementById("keyF").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyF").style.backgroundColor = "#000";
  letterCheck("f");
  }
});
document.getElementById("keyG").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyG").style.backgroundColor = "#000";
  letterCheck("g");
  }
});
document.getElementById("keyH").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyH").style.backgroundColor = "#000";
  letterCheck("h");
  }
});
document.getElementById("keyI").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyI").style.backgroundColor = "#000";
  letterCheck("i");
  }
});
document.getElementById("keyJ").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyJ").style.backgroundColor = "#000";
  letterCheck("j");
  }
});
document.getElementById("keyK").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyK").style.backgroundColor = "#000";
  letterCheck("k");
  }
});
document.getElementById("keyL").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyL").style.backgroundColor = "#000";
  letterCheck("l");
  }
});
document.getElementById("keyM").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyM").style.backgroundColor = "#000";
  letterCheck("m");
  }
});
document.getElementById("keyN").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyN").style.backgroundColor = "#000";
  letterCheck("n");
  }
});
document.getElementById("keyO").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyO").style.backgroundColor = "#000";
  letterCheck("o");
  }
});
document.getElementById("keyP").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyP").style.backgroundColor = "#000";
  letterCheck("p");
  }
});
document.getElementById("keyQ").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyQ").style.backgroundColor = "#000";
  letterCheck("q");
  }
});
document.getElementById("keyR").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyR").style.backgroundColor = "#000";
  letterCheck("r");
  }
});
document.getElementById("keyS").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyS").style.backgroundColor = "#000";
  letterCheck("s");
  }
});
document.getElementById("keyT").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyT").style.backgroundColor = "#000";
  letterCheck("t");
  }
});
document.getElementById("keyU").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyU").style.backgroundColor = "#000";
  letterCheck("u");
  }
});
document.getElementById("keyV").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyV").style.backgroundColor = "#000";
  letterCheck("v");
  }
});
document.getElementById("keyW").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyW").style.backgroundColor = "#000";
  letterCheck("w");
  }
});
document.getElementById("keyX").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyX").style.backgroundColor = "#000";
  letterCheck("x");
  }
});
document.getElementById("keyY").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyY").style.backgroundColor = "#000";
  letterCheck("y");
  }
});
document.getElementById("keyZ").addEventListener("click", function () {
  if (started == true){
  document.getElementById("keyZ").style.backgroundColor = "#000";
  letterCheck("z");
  }
});

// Keyboard Press
window.addEventListener("keydown", function (event) {
  if (started == true) {
    if (event.key == "a" && usedLetters.includes("a") == false) {
      document.getElementById("keyA").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "b" && usedLetters.includes("b") == false) {
      document.getElementById("keyB").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "c" && usedLetters.includes("c") == false) {
      document.getElementById("keyC").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "d" && usedLetters.includes("d") == false) {
      document.getElementById("keyD").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "e" && usedLetters.includes("e") == false) {
      document.getElementById("keyE").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "f" && usedLetters.includes("f") == false) {
      document.getElementById("keyF").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "g" && usedLetters.includes("g") == false) {
      document.getElementById("keyG").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "h" && usedLetters.includes("h") == false) {
      document.getElementById("keyH").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "i" && usedLetters.includes("i") == false) {
      document.getElementById("keyI").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "j" && usedLetters.includes("j") == false) {
      document.getElementById("keyJ").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "k" && usedLetters.includes("k") == false) {
      document.getElementById("keyK").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "l" && usedLetters.includes("l") == false) {
      document.getElementById("keyL").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "m" && usedLetters.includes("m") == false) {
      document.getElementById("keyM").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "n" && usedLetters.includes("n") == false) {
      document.getElementById("keyN").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "o" && usedLetters.includes("o") == false) {
      document.getElementById("keyO").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "p" && usedLetters.includes("p") == false) {
      document.getElementById("keyP").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "q" && usedLetters.includes("q") == false) {
      document.getElementById("keyQ").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "r" && usedLetters.includes("r") == false) {
      document.getElementById("keyR").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "s" && usedLetters.includes("s") == false) {
      document.getElementById("keyS").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "t" && usedLetters.includes("t") == false) {
      document.getElementById("keyT").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "u" && usedLetters.includes("u") == false) {
      document.getElementById("keyU").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "v" && usedLetters.includes("v") == false) {
      document.getElementById("keyV").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "w" && usedLetters.includes("w") == false) {
      document.getElementById("keyW").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "x" && usedLetters.includes("x") == false) {
      document.getElementById("keyX").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "y" && usedLetters.includes("y") == false) {
      document.getElementById("keyY").style.backgroundColor = "#000";
      letterCheck(event.key);
    } else if (event.key == "z" && usedLetters.includes("z") == false) {
      document.getElementById("keyZ").style.backgroundColor = "#000";
      letterCheck(event.key);
    }
  }
});
