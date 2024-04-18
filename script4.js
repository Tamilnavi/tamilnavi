document.addEventListener('DOMContentLoaded', function() {
    
    var retryButton = document.getElementById('retryBtn');
  
    // Open index.html when Retry button is clicked
    retryButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
  