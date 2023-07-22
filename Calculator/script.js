// Helper function to update the result display
function updateResult(value) {
    document.getElementById("result").value = value;
}

// Helper function to append characters to the result display
function appendToResult(value) {
    document.getElementById("result").value += value;
}

// Function to clear the result display
function clearResult() {
    updateResult("");
}

// Function to evaluate the expression and display the result
function calculate() {
    try {
        const result = eval(document.getElementById("result").value);
        updateResult(result);
    } catch (error) {
        updateResult("Error");
    }
}