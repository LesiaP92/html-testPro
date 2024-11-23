function foo(string, chars){
    let result = "";
    for (let i = 0; i < string.length; i++){
        if (!chars.includes(string[i])){
            result += string[i];
        }
    }
    return result;
}
const message = prompt("Enter your string:");
const chars = prompt("Enter some chars for removing:").split("");
const result = foo(message, chars);

alert(result);