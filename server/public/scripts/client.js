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


function add() {
    console.log('Add');
    
}
function subtract() {
    console.log('subtract');
    
}
function multiply() {
    console.log('multiply');
    
}
function divide() {
    console.log('divide');
}
function submit() {
    console.log('submit');
    
}