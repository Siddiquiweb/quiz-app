const name = prompt("please Enter Your name ")
alert("Your Timer Will Be starting")
var timer;
var ele = document.getElementById('timer');

(function () {
    var sec = 0;
    timer = setInterval(() => {
            ele.innerHTML = '00:' + sec;
            sec++;
        },
        1000)
})()

function pause() {
    clearInterval(timer);
}

const questions = [{
        'que': 'What does NaN stand for? ',
        'a': 'Not a Number',
        'b': ' Null and Nothing',
        'c': 'New and Notable',
        'd': 'None and Null',
        'correct': 'a',

    },
    {
        'que': 'Which company developed JavaScript? ',
        'a': ' Microsoft',
        'b': 'Netscape',
        'c': 'Google',
        'd': ' IBM ',
        'correct': 'b',
    },
    {
        'que': 'Which of the following is not a reserved word in JavaScript?',
        'a': ' interface ',
        'b': 'throws ',
        'c': ' program',
        'd': ' short',
        'correct': 'c',
    },
    {
        'que': 'How can you create an array in JavaScript?',
        'a': 'var arr = "1,2,3"; ',
        'b': ' var arr = (1,2,3); ',
        'c': ' var arr = [1,2,3];',
        'd': 'var arr = {1,2,3};',
        'correct': 'c',
    },
    {
        'que': 'What is the output of typeof null in JavaScript?',
        'a': 'null',
        'b': '  undefined',
        'c': ' object',
        'd': 'function',
        'correct': 'c',
    },
    {
        'que': 'Correct syntax to include external CSS in HTML?',
        'a': '<link href="style.css"> ',
        'b': '<link rel="sheet" href="style.css"> ',
        'c': ' <link rel="stylesheet" src="style.css">',
        'd': '<link rel="stylesheet" href="style.css">',
        'correct': 'd',
    },
    {
        'que': 'Which symbol is used for comments in JavaScript? ',
        'a': ' //',
        'b': ' #',
        'c': ' ;',
        'd': 'All of the above',
        'correct': 'a',

    },
    {
        'que': 'Which event occurs when the user clicks on an HTML element? ',
        'a': ' onmouseover',
        'b': ' onchange',
        'c': 'onclick',
        'd': 'None ',
        'correct': 'c',
    },
    {
        'que': 'How do you declare a JavaScript variable?',
        'a': ' var carName; ',
        'b': ' variable carName;',
        'c': '  v carName;',
        'd': ' None',
        'correct': 'a',
    },
    {
        'que': ' What is the correct way to write a JavaScript array?',
        'a': 'var colors = "red", "green", "blue" ',
        'b': 'var colors = ["red", "green", "blue"] ',
        'c': ' var colors = (1:"red", 2:"green", 3:"blue")',
        'd': '<br>',
        'correct': 'd',
    },
    {
        'que': ' HTML Tag Attribute provides:',
        'a': 'Style of HTML element ',
        'b': ' URL of HTML element"> ',
        'c': '  var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        'd': 'None',
        'correct': 'b',
    },
    {
        'que': 'Which built-in method combines the text of two strings and returns a new string?',
        'a': 'append() ',
        'b': 'concat()',
        'c': ' attach()',
        'd': ' None of the above',
        'correct': 'b',
    },
    {
        'que': ' How do you write "Hello World" in an alert box?',
        'a': ' msg("Hello World"); ',
        'b': ' alertBox("Hello World"); ',
        'c': ' alert("Hello World");',
        'd': 'None',
        'correct': 'c',
    },
    {
        'que': ' Which of the following function of Number object forces a number to display in exponential notation?',
        'a': ' toExponential() ',
        'b': ' toFixed() ',
        'c': ' toPrecision()',
        'd': 'None',
        'correct': 'a',
    },
    {
        'que': ' What will Boolean(10 > 9) return?',
        'a': '  false ',
        'b': 'true',
        'c': '  NaN',
        'd': '   undefined',
        'correct': 'b',
    }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesbox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll('.options')
const loadquestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();

    const data = questions[index]
    quesbox.innerHTML = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () => {
    const data = questions[index]

    const ans = getAnswer()
    if (ans == data.correct) {
        right++;

    } else {
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;

            }

        }
    )
    return answer;

}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h1 style="text-align: center;  justify-content: center;font-size:50px; font-family: 'Times New Roman', Times, serif;"> <ui>${name}</ui> </h1>
    <h3 style="text-align: center;"> Thank For Playaing Quize </h3>
    <h2 style="text-align: center; "> ${total} Total Question</h2>
    <br>
    <hr>
    <h2 style="text-align: center; "> ${right}are correct</h2>

   <h2 style="text-align: center; "> ${wrong}are wrong</h2>
   <h2 style="text-align: center; "> ${wrong}You must study much harder!</h2>
    


`

}

loadquestion();
timer - "";