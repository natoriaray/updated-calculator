let calculationDisplay = document.querySelector('.display');

const operators = ['+', '-', '*', '/'];
let operatorClicked = false;
let previousInput = '';
let nextValue = '';

calculationDisplay.value = ''; 

const btnClicked = function(btn) {
  if (operatorClicked === false) {
    console.log('oh no')
    startInput(btn);
  } else {
    console.log(operatorClicked === false)
    nextInput(previousInput, operators, btn);
  }
};

const startInput = function(btnNum) {
  if (operators.includes(btnNum.value)) {
    return;
  } else if (btnNum.value === ".") {
    calculationDisplay.value = calculationDisplay.value + "0" + btnNum.value;
    previousInput = calculationDisplay.value;
  } else {
    calculationDisplay.value = calculationDisplay.value + btnNum.value;
    previousInput = calculationDisplay.value;
  } 
};

const nextInput = function(prevInput, arr, btn) {
  if (operators.includes(btn)) {
    return
  } else {
    if (nextValue === '') {
        calculationDisplay.value = '';
        if (btn.value === '.') {
          calculationDisplay.value = calculationDisplay.value + "0" + btn.value;
          nextValue = calculationDisplay.value;
          console.log(nextValue)
        } else {
          calculationDisplay.value = calculationDisplay.value + btn.value;
          nextValue = calculationDisplay.value;
        }
    } else {
      calculationDisplay.value = calculationDisplay.value + btn.value;
      nextValue = calculationDisplay.value;
    }
  }
 
};

const equalClicked = function(prev, next) {
   if (operatorClicked === '+') {
     calculationDisplay.value = Number(prev) + Number(next);
   } else if (operatorClicked === '-') {
      calculationDisplay.value = Number(prev) - Number(next);
   } else if (operatorClicked === '/') {
      calculationDisplay.value = Number(prev) / Number(next);
   } else if (operatorClicked === '*') {
      calculationDisplay.value = Number(prev) * Number(next);
   };    
  previousInput = calculationDisplay.value;
  nextValue = '';
  
};

const opClicked = function(opr) {
  if (operatorClicked) {
    equalClicked(previousInput, nextValue);
    operatorClicked = opr.value;
  } else {
    operatorClicked = opr.value;
  }
};

const clearDisplay = function() {
  calculationDisplay.value = '';
  previousInput ='';
  nextValue = '';
  operatorClicked = false;
};
