function sum(number) {
let total = 0;
    return function (number) {
        total += number;
        return total;
    }
}

const add = sum();

console.log(add(4));

console.log(add(9));

console.log(add(15));

console.log(add(20));