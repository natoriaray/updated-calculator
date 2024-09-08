var calculationDisplay = document.querySelector('.display');

calculationDisplay.value = ''; 

    document.querySelectorAll('#num').forEach( (calButton) => calButton.addEventListener('click', function() {
    
        var newVal = calButton.value; 

        calculationDisplay.value = calculationDisplay.value + newVal;
        console.log(calculationDisplay.value)
    
        
     }))

     document.querySelectorAll('#operator').forEach( (calButton) => calButton.addEventListener('click', function() {
    
        console.log('an operator was clicked')
    
        
     }))

