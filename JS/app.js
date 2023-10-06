
valueCheck('inb','tri-b')
valueCheck('inh','tri-h')
valueCheck('inw','rec-w')
valueCheck('ini','rec-i')
valueCheck('parinb','par-b')
valueCheck('parinh','par-h')


let  i = 0;

document.getElementById('calculate-traingle').addEventListener('click',function(){

    let updateB = updateValue('inb','tri-b')
    let updateH = updateValue('inh','tri-h')
    const totalTriArea = 0.5 * updateB * updateH
  
    if(totalTriArea)
    {
      addElementToList('Triangle',totalTriArea)
    }
    else{
        alert('please enter the number')
    }
    
})

document.getElementById('calculate-rec').addEventListener('click',function(){
    let updatew = updateValue('inw','rec-w')
    let updatei = updateValue('ini','rec-i')
    const totalRecArea = updatew * updatei

 if(totalRecArea){
   addElementToList('Rectangle',totalRecArea)
 }
 else{
    alert('please enter the number')
 }
})


document.getElementById('calculate-par').addEventListener('click',function(){
    let updateb = updateValue('parinb','par-b')
    let updateh = updateValue('parinh','par-h')
    const totalParArea = updateb * updateh

 if(totalParArea){
   addElementToList('Parallelogram',totalParArea)
 }
 else{
    alert('please enter the number')
 }
})