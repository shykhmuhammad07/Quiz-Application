const questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyperlinks and Text Markup Language",
        option2: "Hypertext Markup Language",
        option3: "Home Tool Markup Language",
        correctOption: "Hypertext Markup Language",
    },
    {
        question: "Who is making the Web standards?",
        option1: "Google",
        option2: "The World Wide Web Consortium",
        option3: "Microsoft",
        correctOption: "The World Wide Web Consortium",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        option1: "<heading>",
        option2: "<h6>",
        option3: "<h1>",
        correctOption: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<linebreak>",
        option2: "<br>",
        option3: "<break>",
        correctOption: "<br>",
    },
    {
        question: "What is the correct HTML for adding a background color?",
        option1: '<body bg="yellow">',
        option2: "<background>yellow</background>",
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">',
    },
    {
        question: "Choose the correct HTML element to define important text:",
        option1: "<strong>",
        option2: "<b>",
        option3: "<i>",
        correctOption: "<strong>",
    },
    {
        question: "Choose the correct HTML element to define emphasized text:",
        option1: "<italic>",
        option2: "<i>",
        option3: "<em>",
        correctOption: "<em>",
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        option1: "<a>http://www.w3schools.com</a>",
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
    },
];

   const htmlques = document.getElementById('ques');
const htmlopt1 = document.getElementById('opt1');
const htmlopt2 = document.getElementById('opt2');
const htmlopt3 = document.getElementById('opt3');
const getBtn = document.getElementById('btn');
const timerDisplay = document.getElementById('timer');
const inputs = document.getElementsByTagName('input');

let index = 0;
let score = 0;
let timeLeft = 180;
let timerInterval;

function showQuestion() {
    if (index >= questions.length) {
        clearInterval(timerInterval);
        Swal.fire({
            title: "Quiz End!",
            text: `Your score is ${score}/${questions.length}`,
            icon: "success"
        }).then(() => {
            location.reload();
        });
        return;
    }

    const q = questions[index];
    htmlques.innerText = q.question;
    htmlopt1.innerText = q.option1;
    htmlopt2.innerText = q.option2;
    htmlopt3.innerText = q.option3;
}

function nextQuestion() {
    let selectedOption = '';
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            selectedOption = document.getElementById(`opt${i + 1}).innerText`);
        }
        inputs[i].checked = false;
    }

    if (selectedOption === questions[index].correctOption) {
        score++;
    }

    index++;
    showQuestion();
    getBtn.disabled = true;
}

function btnWork() {
    getBtn.disabled = false;
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 180;

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            Swal.fire({
                title: "Time's Up!",
                text: "Quiz is restarting...",
                icon: "error"
            }).then(() => {
                location.reload();
            });
        } else {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.innerText = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
            timeLeft--;
        }
    }, 1000);
}

function resetQuiz() {
    location.reload()
}


showQuestion();
startTimer();


