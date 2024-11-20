const exchangeRate = 26;
const currency = prompt("Введіть потрібну вам валюту (uah, usd, euro)");

if (currency === "usd"){
    console.log("Розрахунок у гривнях:");
    for (let dollars = 10; dollars <= 100; dollars += 10){
        console.log(`${dollars}$ = ${dollars * exchangeRate}₴`);
    }
}else if (currency === "uah"){
    console.log("Розрахунок у доларах:");
    for (let uah = 260; uah <= 2600; uah += 260){
        console.log(`${uah}₴ = ${uah / exchangeRate}$`);
    }
}else if (currency === "euro"){
    console.log("Обрахунку у євро ще немає")
}else {
    console.log("Помилка")
}