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

let problem = {};

app.post('/calculate', (req, res) => {

    problem = req.body;
    console.log(problem);
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
    answer = [];
    sum = Number(num1) + Number(num2)
    answer.push(sum);
    console.log(answer);

}
function subtract(num1, num2) {
    answer = [];
    sum = Number(num1) - Number(num2)
    answer.push(sum);
    console.log(answer);

}
function multiply(num1, num2) {
    answer = [];
    sum = Number(num1) * Number(num2)
    answer.push(sum);
    console.log(answer);

}
function divide(num1, num2) {
    answer = [];
    sum = Number(num1) / Number(num2)
    answer.push(sum);
    console.log(answer);

}




app.listen(PORT, () => {
    console.log('Server running on PORT', PORT);
})
