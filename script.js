const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Who is the first Prime Minister of Pakistan?",
        answers: [
            { text: "Quiad Azam", correct: false },
            { text: "Liaqat Ali Khan", correct: true },
            { text: "Allama Iqbal", correct: false },
            { text: "Sir Syed Ahmed Khan", correct: false }
        ]
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: [
            { text: "Mercury", correct: true },
            { text: "Earth", correct: false },
            { text: "Venus", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "India", correct: false }
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Leo Tolstoy", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "Which country gifted the Statue of Liberty to the USA?",
        answers: [
            { text: "Germany", correct: false },
            { text: "France", correct: true },
            { text: "Italy", correct: false },
            { text: "Spain", correct: false }
        ]
    },
    {
        question: "Who was the first man to step on the moon?",
        answers: [
            { text: "Buzz Aldrin", correct: false },
            { text: "Yuri Gagarin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Michael Collins", correct: false }
        ]
    },
    {
        question: "What is the smallest country in the world by land area?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false },
            { text: "Liechtenstein", correct: false }
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Amazon River", correct: false },
            { text: "Nile River", correct: true },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ]
    },
    {
        question: "In which year did World War II end?",
        answers: [
            { text: "1943", correct: false },
            { text: "1945", correct: true },
            { text: "1947", correct: false },
            { text: "1950", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "CO2", correct: false },
            { text: "HO", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false },
            { text: "Pablo Picasso", correct: false }
        ]
    },
    {
        question: "Which element has the atomic number 1?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Carbon", correct: false },
            { text: "Helium", correct: false }
        ]
    },
    {
        question: "Which continent is known as the Dark Continent?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "South America", correct: false },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Who is the author of the Harry Potter series?",
        answers: [
            { text: "J.R.R. Tolkien", correct: false },
            { text: "George R.R. Martin", correct: false },
            { text: "J.K. Rowling", correct: true },
            { text: "C.S. Lewis", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the capital of Italy?",
        answers: [
            { text: "Milan", correct: false },
            { text: "Rome", correct: true },
            { text: "Naples", correct: false },
            { text: "Venice", correct: false }
        ]
    },
    {
        question: "Which is the smallest planet in our solar system?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mercury", correct: true },
            { text: "Mars", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Alexander Graham Bell", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Guglielmo Marconi", correct: false }
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Arabian Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Sahara Desert", correct: true },
            { text: "Kalahari Desert", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Earth's Twin?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which is the highest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false }
        ]
    },
    {
        question: "What is the name of the longest bone in the human body?",
        answers: [
            { text: "Fibula", correct: false },
            { text: "Humerus", correct: false },
            { text: "Femur", correct: true },
            { text: "Tibia", correct: false }
        ]
    },
    {
        question: "Which is the most widely spoken language in the world?",
        answers: [
            { text: "English", correct: false },
            { text: "Mandarin", correct: true },
            { text: "Spanish", correct: false },
            { text: "Hindi", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Midnight Sun?",
        answers: [
            { text: "Canada", correct: false },
            { text: "Norway", correct: true },
            { text: "Sweden", correct: false },
            { text: "Finland", correct: false }
        ]
    },
    {
        question: "What is the square root of 64?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "7", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Vancouver", correct: false },
            { text: "Montreal", correct: false }
        ]
    },
    {
        question: "Which famous ship sank on its maiden voyage in 1912?",
        answers: [
            { text: "HMS Victory", correct: false },
            { text: "RMS Titanic", correct: true },
            { text: "USS Constitution", correct: false },
            { text: "SS Great Britain", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    answerButton.innerHTML = '';
    
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
        answerButton.appendChild(button);
    });
}

function selectAnswer(button, correct) {
    if (correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }
 
    Array.from(answerButton.children).forEach(btn => {
        if (btn.innerHTML === questions[currentQuestionIndex].answers.find(ans => ans.correct).text) {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });

    nextButton.style.display = "block"; 
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    
    answerButton.style.display = "none";
    nextButton.style.display = "none";

    questionElement.innerHTML = `Congratulations! You scored ${score} out of ${questions.length}!`;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Start the quiz when the script runs
startQuiz();
