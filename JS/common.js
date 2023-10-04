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

// document.getElementById('calculate-traingle').addEventListener('click',function(){
//     const input1 = document.getElementById('inb')
//     const input2 = document.getElementById('inh')

//     const updateTrih = document.getElementById('tri-h')
//     const updateTrib = document.getElementById('tri-b')

//     const updateTriangle = document.getElementById('triangle-value')


//     updateTrib.innerText = input1.value
//     updateTrih.innerText = input2.value

//     const totalArea = 0.5 * input1.value * input2.value

//     updateTriangle.innerText = totalArea

//     console.log(input1.value)
//     console.log(input2.value)
// })


