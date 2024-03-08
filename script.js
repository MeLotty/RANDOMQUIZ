// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const questions = [
    {
        question: "A computer is...................?",
        answers: [
            { text: "an electronic machine found in an office.", correct: false },
            { text: "an electronic device which is useful.", correct: false },
            { text: "an electronic device used to input, process, output and store data.", correct: true },
            { text: "An electronic machine which is more intelligent than a human being.", correct: false },
        ]
    },
    // ... (Other questions and answers)
      {
        question: "Which of the following is not an output device?",
        answers: [
            {text: "Monitor", correct: false},
            {text: "Printer", correct: false},
            {text: "Projector", correct: false},
            {text: "Scanner", correct: true},
        ]
        
    },
    {
        question: "Repetitive Strain Injury (RSI) can be increased by the use of a…",
        answers: [
            {text: "digital camera. ", correct: false},
            {text: "keyboard.", correct: true},
            {text: "modem.", correct: false},
            {text: "printer", correct: false},
        ]
    },
    {
        question: "Why is it important to install antivirus software on a computer?",
        answers: [
            {text: "To proctect computers from thieves.", correct: false},
            {text: "To protect user's information from unauthorised people.", correct: false},
            {text: "To proctect commputers from malicious programs which may delete or change information.", correct: true},
            {text: "To protect computers from being damaged due to power failure.", correct: false},
        ]
    },
    {
        question: "…………… is equal to 1 024 kilobytes.",
        answers: [
            {text: "Bit", correct: false},
            {text: "Gigabyte", correct: false},
            {text: "Megabyte", correct: true},
            {text: "Terabyte", correct: false},
        ]
    },
    {
        question: "Which of the following terms describe the physical parts of a computer?",
        answers: [
            {text: "Software", correct: false},
            {text: "Malware", correct: false},
            {text: "Hardware", correct: true},
            {text: "Disc ware", correct: false},
        ] 
    },
    {
        question: "………… is a computer presentation that combines text, sound, animations,video and graphics",
        answers: [
            {text: "Composite", correct: false},
            {text: "Compound", correct: false},
            {text: "Multimedia", correct: true},
            {text: "Multimix", correct: false},
        ] 
    },
    {
        question: "Why is it important to use an Uninterruptible Power Supply (UPS) on a computer?",
        answers: [
            {text: "It makes the computer fast.", correct: false},
            {text: "It backs up files.", correct: false},
            {text: "It allows for saving of important work when there is a power failure.", correct: true},
            {text: "It allows for deleting of unnecessary files and folders.", correct: false},
        ] 
    },
    {
        question: "which of the following is the correct order of moving a sentence from one position to another in a document?",
        answers: [
            {text: "Copy and paste", correct: false},
            {text: "Cut and paste", correct: true},
            {text: "Paste and copy", correct: false},
            {text: "Paste and cut", correct: false},
        ] 
    },
    {
        question: "ROM stands for ………………………",
        answers: [
            {text: "Reading Of Memory", correct: false},
            {text: "Read Only Memory", correct: true},
            {text: "Read Over Memory", correct: false},
            {text: "Read On Memory", correct: false},
        ] 
    },
    {
        question: "A ………………. is a device that can be used for both input and output.",
        answers: [
            {text: "touch screen", correct: true},
            {text: "mouse", correct: false},
            {text: "keyboard", correct: false},
            {text: "joystick", correct: false},
        ] 
    },
  
    {
        question: "A software that can be downloaded without paying for it is called...",
        answers: [
            {text: "freeware", correct: true},
            {text: "open source", correct: false},
            {text: "proprietary", correct: false},
            {text: "shareware", correct: false},
        ] 
    },
  
    {
        question: "How can a computer user put a picture on the Internet?",
        answers: [
            {text: "Uploading", correct: true},
            {text: "Surfing", correct: false},
            {text: "Downloading", correct: false},
            {text: "Browsing", correct: false},
        ] 
    },
  
    {
        question: "A grade 8 pupil accidentally deleted a file on a computer. Where can it be restored from?",
        answers: [
            {text: "Task bar", correct: false},
            {text: "Recycle bin", correct: true},
            {text: "My document", correct: false},
            {text: "Menu bar", correct: false},
        ] 
    },
    {
        question: "………………… is a device used to mark shaded multiple choice answers on answer cards.",
        answers: [
            {text: "Barcode Reader", correct: false},
            {text: "Magnetic Mark Reader", correct: false},
            {text: "Magnetic Ink Mark Reader", correct: false},
            {text: "Optical Mark Reader", correct: true},
        ] 
    },
   
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    shuffleArray(questions);  // Shuffle the questions at the start of the quiz
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Shuffle the answers for the current question
    shuffleArray(currentQuestion.answers);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
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

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
