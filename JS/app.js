

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



valueCheck('inb','tri-b')
valueCheck('inh','tri-h')

document.getElementById('calculate-traingle').addEventListener('click',function(){

    let updateB = updateValue('inb','tri-b')
    let updateH = updateValue('inh','tri-h')

    const totalArea = 0.5 * updateB * updateH

    const updateTriangle = document.getElementById('triangle-value')
    updateTriangle.innerText = totalArea
})
