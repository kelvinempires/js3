let errorparagrah = document.getElementById("error");
console.log(errorparagrah);
function purchase() {
  console.log("button clicked");
  errorparagrah.textContent =
    "something went wrong pleas try again!";
}
