function removeElement(array, item) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const array = [1, 3, 4, 6, 2, 5, 7];
const updatedArray = removeElement(array, 4);

console.log(updatedArray);
