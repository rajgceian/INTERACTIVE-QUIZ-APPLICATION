/* script.js */
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
  const current = questions[currentIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = '';
  feedbackEl.textContent = '';

  current.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, current.answer);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    feedbackEl.textContent = 'Correct!';
    score++;
  } else {
    feedbackEl.textContent = `Wrong! Correct answer: ${correct}`;
  }
  Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = '';
  feedbackEl.textContent = `Your score: ${score} / ${questions.length}`;
  nextBtn.style.display = 'none';
}

loadQuestion();
