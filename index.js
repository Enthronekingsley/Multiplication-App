const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);


const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");

let myscore = JSON.parse(localStorage.getItem("myscore"));

if (!myscore) {
    myscore = 0;
}

scoreEl.innerText = `score: ${myscore}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=> {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        myscore++;
        updateLocalStorage()
    }else {
        myscore--;
        updateLocalStorage()
    }
});

function updateLocalStorage() {
    localStorage.setItem("myscore", JSON.stringify(myscore))
}

