function getNumber() {
  // Get number input by user
  const inputNumber = document.querySelector("#sides").value;

  // Generate random number
  const randomNumber = getRandom(inputNumber);

  // - If the user clicks on "Roll!" when the text box is empty, show an `alert` with
  // the message `Please enter a number of sides!`
  if (inputNumber === "") {
    alert("Please enter a number of sides!");
  }

  // - If the user clicks on "Roll!" when the number in the text box is `0`, negative
  // or not a number, show an `alert` with the message `Please enter a valid number of
  // sides!`
  else if (inputNumber <= 0 || isNaN) {
    alert("Please enter a valid number of sides!");
  } else {
    // Update big box
    document.querySelector("#dice").textContent = randomNumber;
  }

  // function getRandom(num) {
  //     return Math.ceil(Math.random() * num);
  // }
  // function getRandom(num) {
  //     return Math.ceil(Math.random() * 6);
  // }

  function getRandom(inputNumber) {
    return Math.ceil(Math.random() * 6);
  }
}
