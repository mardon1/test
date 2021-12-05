const quizDate = [
  {
    question: "How old is the Florin",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    coorect: "c",
  },
  {
    question: "What is the most used programming language ",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    coorect: "d",
  },
  {
    question: "Who is the President of US",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Mardon",
    d: "John",
    coorect: "d",
  },
  {
    question: "What does the HTML stand for",
    a: "Hypertext Markup language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Hellicopters Terminals Motorboats Lombarghinis",
    coorect: "a",
  },
  {
    question: "What year was JavaScript launched",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    coorect: "b",
  },
];
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("button");
const answers = document.querySelectorAll(".answers");

let currentQuiz = 0;
let score = 0;

const loadQuiz = function () {
  const currentQuizData = quizDate[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

const getSelected = function () {
  let answer = undefined;
  answers.forEach(function (answerEl) {
    if (answerEl.checked) {
      answer = answerEl.id;
      console.log(answer);
    }
  });

  return answer;
};
submitBtn.addEventListener("click", function () {
  const answer = getSelected();

  if (answer) {
    if (answer === quizDate[currentQuiz].coorect) {
      score++;
    }
    currentQuiz++;
  }
  if (currentQuiz < quizDate.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2> You answered correctly at${score}/${quizDate.length} questions</h2>
      <button onclick="location.reload()">Reload</button>
      `;
  }
});
