const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extend: true }));

let answer = [];

app.get('/calculate', (req, res) => {
    console.log('calculating');
    res.send(answer);

})

let problem = {
    firstNumber: 0,
    secondNumber: 0,
    operator: 0,
    answer: 0
};

// let answer = {
//     firstNumber: 0,
//     secondNumber: 0,
//     operator: 0,
//     answer: 0
// };

app.post('/calculate', (req, res) => {

    problem = req.body;
    console.log(problem);
    answer.push(problem);
    if (problem.operator === '+') {
        add(problem.firstNumber, problem.secondNumber);
    } else if (problem.operator === '-') {
        subtract(problem.firstNumber, problem.secondNumber);
    } else if (problem.operator === '*') {
        multiply(problem.firstNumber, problem.secondNumber);
    } else if (problem.operator === '/') {
        divide(problem.firstNumber, problem.secondNumber);
    }


    res.sendStatus(200);
})


function add(num1, num2) {
    sum = Number(num1) + Number(num2)
    problem.answer = sum
    console.log(problem);

}
function subtract(num1, num2) {
    sum = Number(num1) - Number(num2)
    problem.answer = sum
    console.log(problem);

}
function multiply(num1, num2) {
    sum = Number(num1) * Number(num2)
    problem.answer = sum
    console.log(problem);

}
function divide(num1, num2) {
    sum = Number(num1) / Number(num2)
    problem.answer = sum
    console.log(problem);

}




app.listen(PORT, () => {
    console.log('Server running on PORT', PORT);
})
