var calculationDisplay = document.querySelector('.display');
var operatorClicked = false;
var addClicked;
var divClicked;
var multiClicked;
var subClicked;
var firstVal;
var nextVal;
var equalClicked;
var decimalUsed;
calculationDisplay.value = ''; 


//when button is clicked an action will happen
    document.querySelectorAll('.btn').forEach( (calButton) => calButton.addEventListener('click', function() {
      
      var newVal = calButton.value; 
      
      if (calButton.value === ".") {
        decimalUsed = true;
        calculationDisplay.value = calculationDisplay.value + '.';
        document.getElementById("decimal").disabled = true;
        console.log(calculationDisplay.value)
      }
      
//equal sign is pressed
      if (calButton.value === "=") {
        console.log("equal sign was pressed")
        if (addClicked === true) {
          calculationDisplay.value = Number(firstVal) + Number(nextVal);
        } else if (subClicked === true) {
          calculationDisplay.value = Number(firstVal) - Number(nextVal);
        } else if (divClicked === true) {
          calculationDisplay.value = Number(firstVal) / Number(nextVal);
        } else if (multiClicked === true) {
          calculationDisplay.value = Number(firstVal) * Number(nextVal);
        }             
//if an initial value is clicked or an operator, an action will happen      
      } else if (calButton.id === "num" && operatorClicked === false) {
        calculationDisplay.value = calculationDisplay.value + newVal;
        firstVal = calculationDisplay.value;
        console.log(firstVal)        
//get next value if operation has been clicked       
      } else if (calButton.id === "num" && operatorClicked === true && decimalUsed === true) {
        document.getElementById("decimal").disabled = false;
        calculationDisplay.value = calculationDisplay.value + newVal;
        nextVal = calculationDisplay.value;
        console.log(nextVal)
      } else if (calButton.id === "num" && operatorClicked === true) {
        document.getElementById("decimal").disabled = false;
        calculationDisplay.value = '';
        calculationDisplay.value = calculationDisplay.value + newVal;
        nextVal = calculationDisplay.value;
        console.log(nextVal)
 //if an operator is clicked        
      } else if (calButton.id === "operator") {
        console.log('an operator was clicked')
        operatorClicked = true;
        decimalUsed = false;
 
//logging which operator is clicked
          if (calButton.value === "*") {
            multiClicked = true;   
          } else if (calButton.value === "+") {
            addClicked = true;            
          } else if (calButton.value === "-") {
            subClicked = true;            
          } else if (calButton.value === "/"){
            divClicked = true;            
          }

      } else if (calButton.id === "c") {
        calculationDisplay.value = '';
        operatorClicked = false;
        addClicked = false;
        divClicked = false;
        multiClicked = false;
        subClicked = false;
        firstVal = '';
        nextVal = '';
        document.getElementById("decimal").disabled = false;
      }
    }))

