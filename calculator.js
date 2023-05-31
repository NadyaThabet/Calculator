var myBtns = document.querySelectorAll("button");
var myInput = document.querySelector("input");
var myDelete = document.querySelector("#del-btn");
var myEqual = document.querySelector("#equal");

myBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.dataset.btns === "strings") {
      myInput.value = myInput.value + e.target.value;
    }
  });
});

myDelete.addEventListener("click", () => {
  myInput.value = "";
});

myEqual.addEventListener("click", () => {
  if (myInput.value !== "") {
    myInput.value = eval(myInput.value);
  } else if (
    myInput.value.endsWith("/") ||
    myInput.value.endsWith("*") ||
    myInput.value.endsWith("-") ||
    myInput.value.endsWith("+")
  ) {
    myInput.value = myInput.value;
  }
});
