const array = [{}, 1, 2, 3, 4, 5, 6,'Hello friend',7,8,9, null];

function foo(array) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === "number"){
            sum += array[i];
            count++;
        }
    }
    if (count === 0){
        return 0;
    }

    return sum / count;
}

const result = foo(array);

console.log(result);