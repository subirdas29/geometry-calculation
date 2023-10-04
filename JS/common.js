function valueCheck(inputId,elementId){
    const inputValue = document.getElementById(inputId)
    const updateValue = document.getElementById(elementId)
    
    inputValue.addEventListener('keyup',function(){
        let inputNumber = parseFloat(inputValue.value)
        if(isNaN(inputValue.value)){
            inputValue.style.color= 'red'
        }
        else{
            inputValue.style.color= 'black'
            updateValue.innerText = inputNumber
            return inputNumber;
        }
        
    })
    
}

function updateValue(inputId,elementId){


    
    const inputValue = document.getElementById(inputId)
    const updateElement= document.getElementById(elementId)
  
    inputValue.value = ''
    const boxValue = updateElement.innerText
    return boxValue;
   
}