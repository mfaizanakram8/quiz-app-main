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
        question: "What is the purpose of the <br> tag?",
        answers: [
            { text: "To create a new paragraph", correct: false },
            { text: "To insert a line break", correct: true },
            { text: "To make text bold", correct: false },
            { text: "To italicize text", correct: false }
        ]
    },
    {
        question: "What is the latest version of HTML?",
        answers: [
            { text: "HTML3", correct: false },
            { text: "HTML4", correct: false },
            { text: "HTML5", correct: true },
            { text: "HTML6", correct: false }
        ]
    },
    {
        question: "Which tags are used for headings in HTML?",
        answers: [
            { text: "header tag", correct: false },
            { text: "h1 to h6", correct: true },
            { text: "heading tag", correct: false },
            { text: "title", correct: false }
        ]
    },
    {
        question: "What is the purpose of the <a> tag?",
        answers: [
            { text: "To make text bold", correct: false },
            { text: "To display an image", correct: false },
            { text: "To create a hyperlink", correct: true },
            { text: "To define a list item", correct: false }
        ]
    },
    {
        question: "Which tag is used to display images in HTML?",
        answers: [
            { text: "picture tag", correct: false },
            { text: "img tag", correct: true },
            { text: "image tag", correct: false },
            { text: "src tag", correct: false }
        ]
    },
    {
        question: "How do you create an unordered list in HTML?",
        answers: [
            { text: "ol tag", correct: false },
            { text: "ul tag", correct: true },
            { text: "list tag", correct: false },
            { text: "li tag", correct: false }
        ]
    },
    {
        question: "What is the <title> tag used for?",
        answers: [
            { text: "For page titles displayed in the browser tab", correct: true },
            { text: "For main headings in the page body", correct: false },
            { text: "For metadata in the page body", correct: false },
            { text: "For subheadings on the page", correct: false }
        ]
    },
    {
        question: "Which HTML element is used to define the footer of a document?",
        answers: [
            { text: "foot tag", correct: false },
            { text: "footer tag", correct: true },
            { text: "bottom tag", correct: false },
            { text: "base tag", correct: false }
        ]
    },
    {
        question: "Which attribute specifies the URL of an image in the <img> tag?",
        answers: [
            { text: "href", correct: false },
            { text: "src", correct: true },
            { text: "alt", correct: false },
            { text: "link", correct: false }
        ]
    },
    {
        question: "What does the <meta> tag do?",
        answers: [
            { text: "Adds metadata about the document", correct: true },
            { text: "Defines the title of the page", correct: false },
            { text: "Adds a heading to the document", correct: false },
            { text: "Creates a list item", correct: false }
        ]
    },
    {
        question: "Which attribute is used to open a link in a new tab?",
        answers: [
            { text: "href='_blank'", correct: false },
            { text: "target='_blank'", correct: true },
            { text: "window='new'", correct: false },
            { text: "rel='external'", correct: false }
        ]
    },
    {
        question: "Which tag is used to define an HTML form?",
        answers: [
            { text: "input tag", correct: false },
            { text: "form tag", correct: true },
            { text: "submit tag", correct: false },
            { text: "action tag", correct: false }
        ]
    },
    {
        question: "How do you add a comment in HTML?",
        answers: [
            { text: "// Comment", correct: false },
            { text: "/* Comment */", correct: false },
            { text: "<!-- Comment -->", correct: true },
            { text: "# Comment", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'alt' attribute in the <img> tag?",
        answers: [
            { text: "To add alternate text for the image", correct: true },
            { text: "To style the image", correct: false },
            { text: "To add a link to the image", correct: false },
            { text: "To set image dimensions", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a table in HTML?",
        answers: [
            { text: "td tag", correct: false },
            { text: "table tag", correct: true },
            { text: "tr tag", correct: false },
            { text: "tab tag", correct: false }
        ]
    },
    {
        question: "Which tag is used for the largest heading in HTML?",
        answers: [
            { text: "h1 tag", correct: true },
            { text: "h6 tag", correct: false },
            { text: "title tag", correct: false },
            { text: "header tag", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to display text as bold?",
        answers: [
            { text: "strong tag", correct: true },
            { text: "em tag", correct: false },
            { text: "bold", correct: false },
            { text: "<b>", correct: true }
        ]
    },
    {
        question: "What does the <link> tag do in HTML?",
        answers: [
            { text: "Links to external stylesheets", correct: true },
            { text: "Defines hyperlinks", correct: false },
            { text: "Adds scripts", correct: false },
            { text: "Creates a header", correct: false }
        ]
    }
    // Add more questions as needed
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
