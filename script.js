const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Trainer Marking Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text Marketing Language", correct: false },
            { text: "Hyper Tool Markup Language", correct: false }
        ]
    },
    {
        question: "What is the file extension for HTML files?",
        answers: [
            { text: ".html", correct: true },
            { text: ".ht", correct: false },
            { text: ".hml", correct: false },
            { text: ".txt", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a hyperlink?",
        answers: [
            { text: "a", correct: true },
            { text: "link", correct: false },
            { text: "href", correct: false },
            { text: "url", correct: false }
        ]
    },
    {
        question: "What is the purpose of the br tag?",
        answers: [
            { text: "To create a new paragraph", correct: false },
            { text: "To insert a line break", correct: true },
            { text: "To make text bold", correct: false },
            { text: "To italicize text", correct: false }
        ]
    },
    {
        question: "Which tag is used to display images in HTML?",
        answers: [
            { text: "img", correct: true },
            { text: "image", correct: false },
            { text: "src", correct: false },
            { text: "pic", correct: false }
        ]
    },
    {
        question: "How do you create an unordered list in HTML?",
        answers: [
            { text: "ul", correct: true },
            { text: "ol", correct: false },
            { text: "list", correct: false },
            { text: "li", correct: false }
        ]
    },
    {
        question: "What is the purpose of the title tag?",
        answers: [
            { text: "Displays the page title in the browser tab", correct: true },
            { text: "Adds a title inside the webpage", correct: false },
            { text: "Makes text bold", correct: false },
            { text: "Creates a subheading", correct: false }
        ]
    },
    {
        question: "Which tag is used to define a footer in HTML?",
        answers: [
            { text: "foot", correct: false },
            { text: "footer", correct: true },
            { text: "bottom", correct: false },
            { text: "base", correct: false }
        ]
    },
    {
        question: "Which attribute is used to specify the URL of an image?",
        answers: [
            { text: "href", correct: false },
            { text: "src", correct: true },
            { text: "alt", correct: false },
            { text: "link", correct: false }
        ]
    },
    {
        question: "What is the function of the meta tag?",
        answers: [
            { text: "Adds metadata about the document", correct: true },
            { text: "Defines the page title", correct: false },
            { text: "Creates a heading", correct: false },
            { text: "Generates a list", correct: false }
        ]
    }
];

export default questions;


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
