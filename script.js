/* document.querySelector('.num').textContent;
document.querySelector('.score').textContent;
document.querySelector('.massage').value;
  */

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".inputNum").value);

  const displayMassage = function (massage) {
    document.querySelector(".massage").textContent = massage;
  };

  // when is no number
  if (!guess) {
    displayMassage(" NO NUMBER");

    // same number :when player wins
  } else if (guess === secretNum) {
    displayMassage(" Correct Number");

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".num").textContent = secretNum;

    // adding highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highScore").textContent = highscore;
    }
    // different number :when number is high or low
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMassage(guess > secretNum ? "Too High" : "Too Low");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMassage(" You Lost The Number");

      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".massage").textContent = "Start Guessing... ";
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".inputNum").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".num").textContent = "?";
});
