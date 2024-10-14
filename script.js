let calculationDisplay = document.querySelector('.display');

const operators = ['+', '-', '*', '/'];
let operatorClicked = false;
let previousInput = '';
let nextValue = '';
let sciClicked = false;
let sciOn = false;
const container = document.querySelector(".sciContainer");

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
    //equalClicked(previousInput, nextValue); //THIS IS WHAT YOU TURNED OFF. ITS NOT WORKING.
    //i think you need to create a function that only executes when the the previousvalue is equal to something and the nextValue is equal to '' like what happens at the end of executing the equalClicked function. *basically i need a function that will caluclate the prev and next numbers without the equal sign being involved. Might need to actually calculate based on if an operator is pressed when something is IN previousInput AND nextValue. <--------- That one is the one you want but you can try both.
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

const sciBtns = [')', '%', 'ln', 'log', 'sq', '(', 'x!', 'e', 'pi', 'ex'];

const chgType = function(arr) {
  if (sciOn === false) {
    if (sciClicked === false) {
      container.style.display = 'grid';
      arr.forEach(function(i) {
      const html = `<button type="button" class="styleBtn sciStyle" value="${i}" onclick="btnClicked(this)">${i}</button>`;
      container.insertAdjacentHTML('beforeend', html)
      sciClicked = true; 
      sciOn = true;  
    })
    } else {
      container.style.display = 'grid';
      sciOn = true;
    }
  } else {
    container.style.display = 'none';
    sciOn = false;
  };
  
};
