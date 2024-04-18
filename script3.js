document.addEventListener('DOMContentLoaded', function() {
    var message = document.getElementById('message');
    var questionContainer = document.getElementById('questionContainer');
    var questions = document.querySelectorAll('.question');
    var currentQuestionIndex = 0;
  
    // Display "Be honest" message
    setTimeout(function() {
      message.style.display = 'none'; // Hide message after 3 seconds
      questionContainer.classList.remove('hidden'); // Show question container
      displayQuestion(currentQuestionIndex); // Display first question
    }, 6000);
  
    function displayQuestion(index) {
      questions[index].classList.remove('hidden'); // Display the current question
      var okButton = questions[index].querySelector('.okBtn');
  
      okButton.addEventListener('click', function() {
        questions[index].classList.add('hidden'); // Hide the current question
        currentQuestionIndex++;
  
        if (currentQuestionIndex < questions.length) {
          displayQuestion(currentQuestionIndex); // Display the next question
        } else {
          submitForm(); // Submit the form if all questions are answered
        }
      });
    }
  
    function submitForm() {
      var formValues = {};
      var textareas = document.querySelectorAll('textarea');
      textareas.forEach(function(textarea) {
        formValues[textarea.name] = textarea.value;
      });
  
      // Send form data to Formspree
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://formspree.io/f/xeqypnga', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(formValues));
  
      // Redirect to page4.html after form submission
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          window.location.href = 'page4.html';
        }
      };
    }
  });
  
