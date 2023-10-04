
// document.getElementById('cal').addEventListener('click',function(){
//     const inputs = document.getElementsByClassName('in')

//     for(let input of inputs){
        
//     }


    
// })

document.getElementById('calculate-traingle').addEventListener('click',function(){
    const input1 = document.getElementById('inb')
    const input2 = document.getElementById('inh')

    const updateTrih = document.getElementById('tri-h')
    const updateTrib = document.getElementById('tri-b')

    const updateTriangle = document.getElementById('triangle-value')


    updateTrib.innerText = input1.value
    updateTrih.innerText = input2.value

    const totalArea = 0.5 * input1.value * input2.value

    updateTriangle.innerText = totalArea

    console.log(input1.value)
    console.log(input2.value)
})










// document.getElementById('calculate-traingle').addEventListener('click',function(event){
//     const input = document.getElementById('input-triangle')
//     // const input = inputValue()
//     const value = ;
//     console.log(value)
// })

// function inputValue(event){
//     const input = document.getElementById('input-triangle')
//     console.log(event.target.value)
//     console.log(input.value)
// }

