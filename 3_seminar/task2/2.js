

function printHello(userName){

   return userName == '' ? userName = 'user не назвался' : `${userName}, ты что ли, Привет!`
  
}


let userName = prompt('Бро, введи свое имя: ' , 'Борцуха')
let sayHello = printHello(userName)

console.log(sayHello)