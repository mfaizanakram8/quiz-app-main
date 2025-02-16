const questions = [
    {
        question: "HTML ka full form kya hai?",
        answers: [
            { text: "Hyper Trainer Marking Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text Marketing Language", correct: false },
            { text: "Hyper Tool Markup Language", correct: false }
        ]
    },
    {
        question: "HTML file ka extension kya hota hai?",
        answers: [
            { text: ".html", correct: true },
            { text: ".htm", correct: true },
            { text: ".hml", correct: false },
            { text: ".txt", correct: false }
        ]
    },
    {
        question: "<br> tag ka kya use hai?",
        answers: [
            { text: "Naya paragraph banane ke liye", correct: false },
            { text: "Line break insert karne ke liye", correct: true },
            { text: "Text bold karne ke liye", correct: false },
            { text: "Text italic karne ke liye", correct: false }
        ]
    },
    {
        question: "HTML ka latest version konsa hai?",
        answers: [
            { text: "HTML3", correct: false },
            { text: "HTML4", correct: false },
            { text: "HTML5", correct: true },
            { text: "HTML6", correct: false }
        ]
    },
    {
        question: "Headings banane ke liye kaunse tags use hote hain?",
        answers: [
            { text: "header tag", correct: false },
            { text: "h1 to h6", correct: true },
            { text: "heading tag", correct: false },
            { text: "title tag", correct: false }
        ]
    },
    {
        question: "<a> tag ka kya use hai?",
        answers: [
            { text: "Text bold karne ke liye", correct: false },
            { text: "Image display karne ke liye", correct: false },
            { text: "Hyperlink banane ke liye", correct: true },
            { text: "List item define karne ke liye", correct: false }
        ]
    },
    {
        question: "Images display karne ke liye kaunsa tag use hota hai?",
        answers: [
            { text: "<picture>", correct: false },
            { text: "<img>", correct: true },
            { text: "<image>", correct: false },
            { text: "<src>", correct: false }
        ]
    },
    {
        question: "Unordered list banane ke liye kaunsa tag use hota hai?",
        answers: [
            { text: "<ol>", correct: false },
            { text: "<ul>", correct: true },
            { text: "<list>", correct: false },
            { text: "<li>", correct: false }
        ]
    },
    {
        question: "<title> tag ka kya kaam hai?",
        answers: [
            { text: "Page title ko browser tab mein dikhana", correct: true },
            { text: "Page body ka main heading define karna", correct: false },
            { text: "Page metadata add karna", correct: false },
            { text: "Subheadings banane ke liye", correct: false }
        ]
    },
    {
        question: "HTML document ka footer define karne ke liye kaunsa tag use hota hai?",
        answers: [
            { text: "<foot>", correct: false },
            { text: "<footer>", correct: true },
            { text: "<bottom>", correct: false },
            { text: "<base>", correct: false }
        ]
    },
    {
        question: "<img> tag mein kis attribute se image ka URL diya jata hai?",
        answers: [
            { text: "href", correct: false },
            { text: "src", correct: true },
            { text: "alt", correct: false },
            { text: "link", correct: false }
        ]
    },
    {
        question: "<meta> tag ka kya kaam hai?",
        answers: [
            { text: "Document ki metadata add karna", correct: true },
            { text: "Page ka title define karna", correct: false },
            { text: "Document ka heading define karna", correct: false },
            { text: "List item create karna", correct: false }
        ]
    },
    {
        question: "Koi link naye tab mein open karne ke liye kaunsa attribute use hota hai?",
        answers: [
            { text: "href='_blank'", correct: false },
            { text: "target='_blank'", correct: true },
            { text: "window='new'", correct: false },
            { text: "rel='external'", correct: false }
        ]
    },
    {
        question: "HTML form banane ke liye kaunsa tag use hota hai?",
        answers: [
            { text: "<input>", correct: false },
            { text: "<form>", correct: true },
            { text: "<submit>", correct: false },
            { text: "<action>", correct: false }
        ]
    },
    {
        question: "HTML mein comment kaise likhte hain?",
        answers: [
            { text: "// Comment", correct: false },
            { text: "/* Comment */", correct: false },
            { text: "<!-- Comment -->", correct: true },
            { text: "# Comment", correct: false }
        ]
    },
    {
        question: "<img> tag ke 'alt' attribute ka kya purpose hai?",
        answers: [
            { text: "Alternate text add karne ke liye", correct: true },
            { text: "Image ka size set karne ke liye", correct: false },
            { text: "Image ka background color change karne ke liye", correct: false },
            { text: "Image ko hover effect dene ke liye", correct: false }
        ]
    },
    {
        question: "HTML mein table banane ke liye kaunsa tag use hota hai?",
        answers: [
            { text: "<td>", correct: false },
            { text: "<table>", correct: true },
            { text: "<tr>", correct: false },
            { text: "<tab>", correct: false }
        ]
    },
    {
        question: "HTML mein sabse bada heading ka tag kaunsa hota hai?",
        answers: [
            { text: "<h1>", correct: true },
            { text: "<h6>", correct: false },
            { text: "<title>", correct: false },
            { text: "<header>", correct: false }
        ]
    },
    {
        question: "HTML mein text bold karne ke liye kaunsa tag use hota hai?",
        answers: [
            { text: "<strong>", correct: true },
            { text: "<em>", correct: false },
            { text: "<bold>", correct: false },
            { text: "<b>", correct: true }
        ]
    },
    {
        question: "<link> tag ka kya use hai?",
        answers: [
            { text: "External stylesheet link karne ke liye", correct: true },
            { text: "Hyperlink banane ke liye", correct: false },
            { text: "Script add karne ke liye", correct: false },
            { text: "Header create karne ke liye", correct: false }
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
