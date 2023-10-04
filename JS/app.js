


valueCheck('inb','tri-b')
valueCheck('inh','tri-h')
valueCheck('inw','rec-w')
valueCheck('ini','rec-i')


let  i = 0;

document.getElementById('calculate-traingle').addEventListener('click',function(){

    let updateB = updateValue('inb','tri-b')
    let updateH = updateValue('inh','tri-h')
    const totalTriArea = 0.5 * updateB * updateH
    console.log(updateB,updateH)
    if(totalTriArea)
    {
        const newHtml = document.getElementById('result')
        const div = document.createElement('div')
       
        div.classList.add('flex', 'justify-evenly', 'items-center', 'pt-7')
       
        div.innerHTML = `
        <p><span>${++i}. </span>Triangle</p>
        <p><span id="tri-value">${totalTriArea}</span> cm<sup>2</sup></p>
        <button class="bg-[#1090D8] text-sm px-2 text-white rounded-lg py-2  font-semibold">Convert to m<sup>2</sup></button>
        `
        newHtml.appendChild(div)
        const updateTri = document.getElementById('tri-value')
        updateTri.innerText = totalTriArea
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
    const newHtml = document.getElementById('result')
    const div = document.createElement('div')
   
    div.classList.add('flex', 'justify-evenly', 'items-center', 'pt-7')
   
    div.innerHTML = `
    <p><span>${++i}. </span>Rectengle</p>
    <p><span id="rec-value">${totalRecArea}</span> cm<sup>2</sup></p>
    <button class="bg-[#1090D8] text-sm px-2 text-white rounded-lg py-2  font-semibold">Convert to m<sup>2</sup></button>
    `
    newHtml.appendChild(div)
    const updateRec = document.getElementById('rec-value')
    updateRec.innerText = totalRecArea
 }
 else{
    alert('please enter the number')
 }
})
