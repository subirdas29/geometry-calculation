

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

function valueCheck(inputId,elementId){
    const inputValue = document.getElementById(inputId)
    const updateValue = document.getElementById(elementId)
    inputValue.addEventListener('keyup',function(){
        let inputNumber = parseFloat(inputValue.value)
        // console.log(inputValue.value)
        if(isNaN(inputValue.value)){
            inputValue.style.color= 'red'
            return '0'
        }
        else{
            inputValue.style.color= 'black'
            updateValue.innerText = inputNumber
            return inputNumber;
        }
        
    })
    inputValue.value = ''
}

valueCheck('inb','tri-b')
valueCheck('inh','tri-h')

function updateValue(inputId,elementId){


    
    const inputValue = document.getElementById(inputId)
    const updateElement= document.getElementById(elementId)
  
    inputValue.value = ''
    const boxValue = updateElement.innerText
    return boxValue;
    // let inputNumber = parseFloat(inputValue.value)
    // inputValue.value = ''
    
    // const updateValue = updateTrih.innerText
    // console.log(updateValue)
    // return updateValue
}


document.getElementById('calculate-traingle').addEventListener('click',function(){
 


    let updateB = updateValue('inb','tri-b')
    let updateH = updateValue('inh','tri-h')

 

    const totalArea = 0.5 * updateB * updateH

    const updateTriangle = document.getElementById('triangle-value')
    updateTriangle.innerText = totalArea
})
