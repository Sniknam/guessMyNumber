/* document.querySelector('.num').textContent;
document.querySelector('.score').textContent;
document.querySelector('.massage').value;
  */

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".inputNum").value);

  if (!guess) {
    document.querySelector(".massage").textContent = " NO NUMBER";
  } else if (guess === secretNum) {
    document.querySelector(".massage").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".num").textContent = secretNum;
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector(".massage").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".massage").textContent = "You Lost The Game";
    }
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector(".massage").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".massage").textContent = "You Lost The Game";
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
