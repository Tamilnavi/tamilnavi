document.addEventListener('DOMContentLoaded', function() {
    // Countdown from 5 to 1
    var countdownElement = document.getElementById('countdown');
    var count = 5;
    var countdownInterval = setInterval(function() {
      countdownElement.innerText = count;
      count--;
      if (count < 0) {
        clearInterval(countdownInterval);
        countdownElement.style.display = 'none'; // Hide the countdown element
        showMessage();
      }
    }, 1000);
  
    // Show message after countdown
    function showMessage() {
      var messageContainer = document.getElementById('message');
      messageContainer.style.display = 'block'; // Display the message container
  
      var okButton = document.getElementById('okBtn');
      okButton.addEventListener('click', function() {
        clearInterval(timerInterval);
        window.location.href = 'page3.html';
      });
  
      var timerElement = document.createElement('span');
      okButton.appendChild(timerElement);
      var timeLeft = 30;
      var timerInterval = setInterval(function() {
        timerElement.innerText = ' (' + timeLeft + ')';
        timeLeft--;
        if (timeLeft < 0) {
          clearInterval(timerInterval);
          window.location.href = 'page3.html';
        }
      }, 1000);
    }
  });
  