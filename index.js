// Defining elements and storing them into variables
const form = document.getElementById("inputForm");
const numberAInput = document.getElementById("numberAInput");
const operatorInput = document.getElementById("operatorInput");
const numberBInput = document.getElementById("numberBInput");
const startButton = document.getElementById("startButton");

// Updating the execute function to include the animation
function execute(event) {
  event.preventDefault();

  // Defining input values
  const numberA = numberAInput.value;
  const numberB = numberBInput.value;
  const operatorKey = operatorInput.value;
  const operator = Operators.fromKey(operatorKey);

  const operation = new Operation(numberA, operator, numberB);
  console.log(operation);
}

//Handling triggering the execute function on Enter key press or button click
[numberAInput, operatorInput, numberBInput].forEach(function (input) {
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      execute(event);
    }
  });
});
startButton.addEventListener("click", execute);
