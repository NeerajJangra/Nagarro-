let left = document.getElementById("leftArrow");
let right = document.getElementById("rightArrow");
let n = 3;
var i = 0;

left.addEventListener("click", function () {
  document.getElementById(`img${i}`).classList.add("show");
  i = (i + n - 1) % n;
  document.getElementById(`img${i}`).classList.remove("show");
});
right.addEventListener("click", function () {
  document.getElementById(`img${i}`).classList.add("show");
  i = (i + 1) % n;
  document.getElementById(`img${i}`).classList.remove("show");
});
