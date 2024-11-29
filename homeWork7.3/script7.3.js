function enterNumber (){
    let number = [];
    for (let i = 0; i < 10; i++){
let input = prompt("Введіть число більше 100:");
        if (input === null || input.trim() === "") {
            console.log("Завершено!");
            return;
        }
        input = Number(input); // Перетворюємо на число
        if (isNaN(input)) { // Якщо введене не є числом
            alert("Введіть коректне число!");
            i--; // Повертаємо ітерацію назад
            continue;
        }

    }

    //ввести числа до масиву

    
}

enterNumber();