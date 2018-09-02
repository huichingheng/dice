function getNumber() {
  const inputNum = document.querySelector("#sides").value;
  const randomNum = Math.ceil(Math.random(inputNum) * 6);

  // if textbox empty, show alert
  if (inputNum === "") {
    alert("Please enter a number of sides!");
  }
  // if textbox type is 0, negative or not a number, show alert
  else if (inputNum <= 0 || inputNum === isNaN) {
    alert("Please enter a valid number of sides!");
  } else {
    document.querySelector("#dice").textContent = randomNum;
  }
}
