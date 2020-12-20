console.log('JS ready.');

$(readyNow);

function readyNow() {
    console.log('jQuery ready.');


    $('#addition').on('click', add);
    $('#subtraction').on('click', subtract);
    $('#multiply').on('click', multiply);
    $('#divide').on('click', divide);
    $('#submit').on('click', submit);
    $('#clear').on('click', clear);

    getAnswer();
}

let prevCalc = [];

let calculation = {
    firstNumber: 0,
    secondNumber: 0,
    operator: 0,
    answer: 0
}

function getAnswer() {
    console.log('getting answer');
    $.ajax({
        url: '/calculate',
        type: 'GET'
    }).then(function (response) {
        console.log(response);
        postAnswer(response);
    })
}

function postAnswer(response) {
    let result = $('#answer');
    result.empty();
    result.append(response[response.length - 1].answer)
    prevCalculations(response);
}

function runCalculation() {
    console.log('calculating...');
    $.ajax({
        url: '/calculate',
        type: 'POST',
        data: calculation
    }).then(function (response) {
        console.log(response);

    })
}

function prevCalculations(array) {
    let oldCalc = $('#oldInputs');
    oldCalc.empty();
    for (object of array) {
        oldCalc.append(`
        <li>${object.firstNumber} 
        ${object.operator} 
        ${object.secondNumber} 
        = ${object.answer} </li>`)
    }
}


//----- Operator selection --------------
function add() {
    console.log('Add');
    calculation.operator = '+'
    console.log(calculation);
}
function subtract() {
    console.log('subtract');
    calculation.operator = '-'
    console.log(calculation);
}
function multiply() {
    console.log('multiply');
    calculation.operator = '*'
    console.log(calculation);
}
function divide() {
    console.log('divide');
    calculation.operator = '/'
    console.log(calculation);
}

//----- End Operator selection -----------

function submit() {
    console.log('submit');
    let firstInput = $('#input1').val();
    let secondInput = $('#input2').val();
    calculation.firstNumber = Number(firstInput);
    calculation.secondNumber = Number(secondInput);
    console.log(calculation);

    runCalculation();
    getAnswer();

}



function clear() {
    console.log('History cleared.');

    $.ajax({
        url: '/clear',
        type: 'GET'
    }).then(function (response) {
        console.log(response);
        prevCalculations(response);
    })
}
