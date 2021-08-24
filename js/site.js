// Get the values from the page
// Starts or Controller Function (initiates the logic and display functions)
function getValues() {
    // Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    // Parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Validate the inputs to only be integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        // Call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        // Call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("You must enter integers");
    }





}

// Generate numbers from the start value to the end value
// Logic Function(s)
function generateNumbers(sValue, eValue) {
    // Creates an empty array
    let numbers = [];

    // Get all numbers from start value to end value
    for (let index = sValue; index <= eValue; index++) {
        // Will execute the loop until index = eValue
        numbers.push(index);
    }

    return numbers;
}

// Display the numbers and make the even numbers bold
// Display or view Function(s)
function displayNumbers(num) {

    let templateRows = "";
    for (let index = 0; index < num.length; index++) {

        let number = num[index];
        templateRows += `<tr><td>${number}</td></tr>`;

    }

    document.getElementById("results").innerHTML = templateRows;

}