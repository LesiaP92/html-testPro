
const number = prompt("Введіть трьохзначне число");
const number1 = number[0];       //розділила числа.
const number2 = number[1];
const number3 = number[2];

if (number1 === number2 && number2 === number3) {     //перевірила чи всі вони однакові.
console.log ("Всі цифри однакові");
}
else if (number1 === number2 || number2 === number3 || number1 === number3){    //перевірила чи є серед них однакові.
console.log("Однакові цифри присутні");
}
else {                                                //Чи вони різні.
   console.log("Однакові цифри відсутні");
}