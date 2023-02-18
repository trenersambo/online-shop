console.log('test')

let celsGrade = document.querySelector('.celsGrade') ;
 

let btn = document.querySelector('.btnConv');

let fahr = 0 ;

btn.addEventListener('click', ()=>{
  console.log(`Введено: ${celsGrade.value}`)
  fahr = (9/5) * celsGrade.value + 32
  fahr = fahr.toFixed(2)

  console.log(`Вывод: ${fahr}`)  

  let outCel = document.querySelector('.outCel') ;
let outFar = document.querySelector('.outFar') ;

outCel.innerHTML = `Цельсий: ${celsGrade.value}`
outFar.innerHTML = `Фаренгейт: ${fahr}`

})


