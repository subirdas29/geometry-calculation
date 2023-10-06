
valueCheck('inb','tri-b')
valueCheck('inh','tri-h')
valueCheck('inw','rec-w')
valueCheck('ini','rec-i')
valueCheck('parinb','par-b')
valueCheck('parinh','par-h')
valueCheck('rhomind1','rhom-d1')
valueCheck('rhomind2','rhom-d2')
valueCheck('pentinp','pent-p')
valueCheck('pentinb','pent-b')
valueCheck('ellipina','ellip-a')
valueCheck('ellipinb','ellip-b')


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

document.getElementById('calculate-rhom').addEventListener('click',function(){
    let updated1 = updateValue('rhomind1','rhom-d1')
    let updated2 = updateValue('rhomind2','rhom-d2')
    const totalRhomArea = 0.5* updated1 * updated2

 if(totalRhomArea){
   addElementToList('Rhombus',totalRhomArea)
 }
 else{
    alert('please enter the number')
 }
})
document.getElementById('calculate-pent').addEventListener('click',function(){
    let updatep = updateValue('pentinp','pent-p')
    let updateb = updateValue('pentinb','pent-b')
    const totalPentArea = 0.5* updatep * updateb

 if(totalPentArea){
   addElementToList('Rhombus',totalPentArea)
 }
 else{
    alert('please enter the number')
 }
})


document.getElementById('calculate-ellip').addEventListener('click',function(){
    let updatea = updateValue('ellipina','ellip-a')
    let updateb = updateValue('ellipinb','ellip-b')
    const totalEllipArea = parseFloat(((Math.PI * updatea * updateb).toFixed(2)))

 if(totalEllipArea){
   addElementToList('Ellipse',totalEllipArea)
 }
 else{
    alert('please enter the number')
 }
})