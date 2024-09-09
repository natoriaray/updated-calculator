var calculationDisplay = document.querySelector('.display');
var operatorClicked = false;
var addClicked;
var divClicked;
var multiClicked;
var subClicked;
var firstVal;
var nextVal;
var equalClicked;
calculationDisplay.value = ''; 

//when button is clicked an action will happen
    document.querySelectorAll('.btn').forEach( (calButton) => calButton.addEventListener('click', function() {
      
      var newVal = calButton.value; 
      
//equal sign is pressed
      if (calButton.value === "=") {
        console.log("equal sign was pressed")
        if (addClicked === true) {
          calculationDisplay.value = Number(firstVal) + Number(nextVal);
        }
     }  
      
//if an initial value is clicked or an operator, an action will happen      
      if (calButton.id === "num" && operatorClicked === false) {
        calculationDisplay.value = calculationDisplay.value + newVal;
        firstVal = calculationDisplay.value;
        console.log(firstVal)
        
//get next value if operation has been clicked       
      } else if (calButton.id === "num" && operatorClicked === true) {
        calculationDisplay.value = '';
        calculationDisplay.value = calculationDisplay.value + newVal;
        nextVal = calculationDisplay.value;
        console.log(nextVal)
 //if an operator is clicked        
      } else if (calButton.id === "operator") {
        console.log('an operator was clicked')
        operatorClicked = true;
 
//logging which operator is clicked
        if (calButton.value === "*") {
          multiClicked = true;
          return;
        } else if (calButton.value === "+") {
          addClicked = true;
          return;
        }
//log if there is a problem        
      } else {
        console.log("time to calculate");
        return;
      }

//if equal sign is pressed
     
      
       
    }))
