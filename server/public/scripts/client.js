console.log('JS ready.');

$(readyNow);

function readyNow() {
    console.log('jQuery ready.');

    
    $('#addition').on('click', add);
    $('#subtraction').on('click', subtract);
    $('#multiply').on('click', multiply);
    $('#divide').on('click', divide);
    $('#submit').on('click', submit);
}

let calculation = {
    firstNumber: 0,
    secondNumber: 0,
    operator: 0
}

console.log(calculation);


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
    calculation.firstNumber = Number(firstInput);
    let secondInput = $('#input2').val();
    calculation.secondNumber = Number(secondInput);
    console.log(calculation);
}