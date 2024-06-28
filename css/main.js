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
        'que': 'Which property is used to change the background color? ',
        'a': 'color',
        'b': 'background-color',
        'c': 'bgcolor',
        'd': ' background',
        'correct': 'b',

    },
    {
        'que': 'What does CSS stand for? ',
        'a': 'Creative Style Sheets',
        'b': 'Cascading Style Sheets',
        'c': 'Computer Style Sheet',
        'd': 'Colorful Style Sheets',
        'correct': 'b',
    },
    {
        'que': 'what does css stands for?',
        'a': 'hypertext Markup language ',
        'b': 'casscadinfd style sheet ',
        'c': 'jason object notation',
        'd': 'Helicopters Terminals Motorboats Lamborginis',
        'correct': 'b',
    },
    {
        'que': 'Which CSS property is used to change the text color of an element?',
        'a': 'fgcolor ',
        'b': 'text-color',
        'c': ' color',
        'd': 'font-color',
        'correct': 'c',
    },
    {
        'que': 'Which CSS property controls the text size?',
        'a': 'font-style ',
        'b': ' text-size ',
        'c': ' font-size',
        'd': 'text-style',
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
        'que': 'How do you display hyperlinks without an underline? ',
        'a': ' text-decoration: no-underline;',
        'b': ' text-decoration: none;',
        'c': 'text-decoration: underline;',
        'd': ' text-decoration: no-line;',
        'correct': 'b',

    },
    {
        'que': 'Which property is used to change the left margin of an element? ',
        'a': ' margin-left ',
        'b': ' padding-left',
        'c': 'indent',
        'd': 'None ',
        'correct': 'a',
    },
    {
        'que': 'How do you make each word in a text start with a capital letter?',
        'a': ' text-transform: capitalize;  ',
        'b': '  text-transform: uppercase; ',
        'c': ' text-transform: lowercase;',
        'd': ' None',
        'correct': 'a',
    },
    {
        'que': ' Which property is used to change the spacing between letters?',
        'a': 'spacing ',
        'b': 'letter-spacing  ',
        'c': 'text-spacing',
        'd': 'character-spacing',
        'correct': 'b',
    },
    {
        'que': ' How do you select an element with id "demo"?',
        'a': '#demo  ',
        'b': '  .demo ',
        'c': '  *demo',
        'd': 'None',
        'correct': 'a',
    },
    {
        'que': 'How do you select elements with class name "test"?',
        'a': '#test ',
        'b': ' .test ',
        'c': ' *test',
        'd': ' None of the above',
        'correct': 'b',
    },
    {
        'que': ' What is the use of <strong> tag in HTML?',
        'a': ' To bold the text ',
        'b': ' To bold the text and give more importance ',
        'c': ' To make strong text',
        'd': 'None',
        'correct': 'b',
    },
    {
        'que': ' How do you make the text bold?',
        'a': ' font-weight: bold;  ',
        'b': ' font-style: bold; ',
        'c': 'text-weight: bold;',
        'd': 'None',
        'correct': 'a',
    },
    {
        'que': ' How do you make a list that lists its items with squares?',
        'a': ' list-style-type: square; ',
        'b': 'list-type: square;',
        'c': '  list: square;',
        'd': '  None',
        'correct': 'a',
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
        right++; {
            quesbox.innerHTML = `<h2>Correct Answer</h2>`
        }

    } else {
        wrong++;
        quesbox.innerHTML = `<h2>Wrong Answer</h2>`
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