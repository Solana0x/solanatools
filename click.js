const interval = 1000; // 1000 milliseconds = 1 second => can change the time period !!
function clickButton() {
  const button = document.querySelector('.anticon.anticon-right');
  if (button) {
    button.click();
  } else {
    console.error('Button not found!');
  }
}
const intervalId = setInterval(clickButton, interval);

// above code is used to navigate through large number of tx automatically in solana scan website !! similar code we can use to navigate backwards (left)
