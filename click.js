let stopFlag = false; // Flag to control whether to stop clicking or not

// Define the interval in milliseconds
const interval = 1000; // 1000 milliseconds = 1 second

// Define the function to click the button
function clickButton() {
  // Check if the stopFlag is true, if true, stop clicking
  if (stopFlag) {
    console.log('Clicking stopped.');
    clearInterval(intervalId); // Stop the interval
    return; // Exit the function
  }

  // Find the button by its class name
  const button = document.querySelector('.anticon.anticon-right');
  if (button) {
    // Simulate a click event on the button
    button.click();
  } else {
    // If button is not found, log an error message
    console.error('Button not found!');
  }
}

// Set up the interval to click the button repeatedly
const intervalId = setInterval(clickButton, interval);

// Function to stop clicking
function stopClicking() {
  stopFlag = true; // Set the stopFlag to true
}

// Example usage: Call stopClicking() in the console to stop clicking


// above code is used to navigate through large number of tx automatically in solana scan website !! similar code we can use to navigate backwards (left)
