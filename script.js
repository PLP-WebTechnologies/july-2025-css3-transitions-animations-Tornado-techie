function checkAnswer(button, isCorrect) {
  const result = document.getElementById('quiz-result');
  if (isCorrect) {
    button.style.backgroundColor = '#4CAF50';
    result.textContent = "✅ Correct! Great job!";
    result.style.color = 'green';
  } else {
    button.style.backgroundColor = '#f44336';
    result.textContent = "❌ Oops! Try again.";
    result.style.color = 'red';
  }

  // Disable all buttons in the current question
  const buttons = button.parentElement.querySelectorAll('button');
  buttons.forEach(btn => btn.disabled = true);
}
