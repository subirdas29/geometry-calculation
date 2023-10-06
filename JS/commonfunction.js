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

function updateSerialNumber(){
    const list = document.getElementsByTagName('li')
    for(j=0;j<list.length;j++){
        const listItem = list[j] //eta check korbe list item koita ashe
        const serialNumber = listItem.querySelector('span:first-child')
        serialNumber.textContent = `${j+1}.` // ar eta list item anusare 0 avoid korar jonno 1 jog kore agabe
    }
}

function addElementToList (elementName, totalArea){
    const newHtml = document.getElementById('result')
    const li = document.createElement('li')
   
    // div.classList.add('flex', 'justify-evenly', 'items-center', 'pt-7')
    li.id = `item-${i}` // add korar id
    li.innerHTML = `
    <span>${i++}.</span><span class="mr-2">${elementName}</span><span>${totalArea}</span>cm<sup>2</sup><button class="bg-[#1090D8] text-sm mx-2 px-2 text-white rounded-lg py-2  font-semibold">Convert to m<sup>2</sup></button> <button class=" text-3xl text-red-600 font-bold delete">x</button>
    `
    newHtml.appendChild(li)
    updateSerialNumber()
    dltarea()
}

function deleteItems(itemId){
    const dltItm = document.getElementById(itemId)
    if(dltItm){
        dltItm.remove()
        updateSerialNumber();
    }
}

function dltarea()

{
    const alldlt = document.getElementsByClassName('delete')
for(const dlt of alldlt)
{
    dlt.addEventListener('click',function(event){
       const itmdlt = event.target.parentNode
       deleteItems(itmdlt.id) // delete er jonno id detect kore
   
    })
}
}