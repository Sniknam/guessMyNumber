/* document.querySelector('.num').textContent;
document.querySelector('.score').textContent;
document.querySelector('.massage').value;
  */

const secretNum = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".num").textContent = secretNum;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".inputNum").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".massage").textContent = " NO NUMBER";
  } else if (guess === secretNum) {
    document.querySelector(".massage").textContent = "Correct Number";
  } else if (guess < secretNum) {
    document.querySelector(".massage").textContent = "Too Low";
  } else if (guess > secretNum) {
    document.querySelector(".massage").textContent = "Too High";
  }
});
