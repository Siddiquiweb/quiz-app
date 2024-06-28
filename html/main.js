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
        'que': 'which of the following markup language ',
        'a': 'html',
        'b': 'css',
        'c': 'javascript',
        'd': 'php',
        'correct': 'a',

    },
    {
        'que': 'Which tag is used to make the underlined text? ',
        'a': ' <b>',
        'b': '<ul>',
        'c': '<u>',
        'd': '<line> ',
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
        'que': 'Which one is the correct sequence of HTML tags:',
        'a': 'head, body, title, html ',
        'b': 'html, head, title, body ',
        'c': ' html, title, head, body',
        'd': 'None of the above',
        'correct': 'b',
    },
    {
        'que': 'How to create a checkbox in HTML?',
        'a': '<input type = "checkbox"> ',
        'b': ' <input type = "button"> ',
        'c': ' <checkbox>',
        'd': '<input type = "check">',
        'correct': 'a',
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
        'que': 'Which HTML tag attribute is used to provide a unique name to an element? ',
        'a': ' class',
        'b': 'id',
        'c': 'type',
        'd': 'All of the above',
        'correct': 'b',

    },
    {
        'que': 'Correct way to send mail in HTML? ',
        'a': ' <mail xy@y</mail>',
        'b': '<a href = "xy@y">',
        'c': '<a href = "mailto: xyz@gmail.com">',
        'd': 'None ',
        'correct': 'c',
    },
    {
        'que': 'Which HTML tag is used to insert the largest heading in HTML?',
        'a': ' <h6> ',
        'b': ' <h4> ',
        'c': ' <h1>',
        'd': ' None',
        'correct': 'c',
    },
    {
        'que': ' Which HTML tag is used to insert a line-break?',
        'a': '<break> ',
        'b': '<pre> ',
        'c': ' <b>',
        'd': '<br>',
        'correct': 'd',
    },
    {
        'que': ' HTML Tag Attribute provides:',
        'a': 'Style of HTML element ',
        'b': ' URL of HTML element"> ',
        'c': '  Additional Information of HTML element',
        'd': 'None',
        'correct': 'c',
    },
    {
        'que': 'Which tag is used to create SuperScript text?',
        'a': '<super> ',
        'b': '<SuperScript>',
        'c': ' <sup>',
        'd': ' None of the above',
        'correct': 'c',
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
        'que': ' Correct syntax to create ordered list?',
        'a': ' <ol> </ol> ',
        'b': ' <orderedList> </ol>"> ',
        'c': ' <ordered> </ol>',
        'd': 'None',
        'correct': 'a',
    },
    {
        'que': ' What is the use of <progress> tag in HTML?',
        'a': ' Used to create a bar ',
        'b': 'Used to create a progress bar',
        'c': '  Used to show progress input',
        'd': '  None',
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