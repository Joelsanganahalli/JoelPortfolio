const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 0
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
        answer: 0
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Jupiter', 'Saturn', 'Neptune', 'Mars'],
        answer: 0
    },
    {
        question: 'What is the tallest mountain in the world?',
        options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
        answer: 0
    },
    {
        question: 'Which country won the FIFA World Cup in 2018?',
        options: ['France', 'Croatia', 'Brazil', 'Germany'],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionTextElement = document.getElementById('questionText');
const scoreElement = document.getElementById('score');

function showQuestion() {
    const question = questions[currentQuestion];
    questionTextElement.textContent = question.question;

    const optionButtons = document.getElementsByClassName('option');
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = question.options[i];
    }
}

function checkAnswer(answer) {
    const question = questions[currentQuestion];
    if (answer === question.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const container = document.querySelector('.container');
    container.innerHTML = `<h1>Quiz Completed!</h1>
                           <p style="color:white">Your score: <span>${score}</span> out of ${questions.length}</p>`;
}

showQuestion();
