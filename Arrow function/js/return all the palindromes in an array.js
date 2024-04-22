
let array = ["radar", "hello", "level", "noon", "world"];

let palindromes = arr => {
    let result = [];
    for (let word of arr) {
        if (word === word.split('').reverse().join('')) {
            result.push(word);
        }
    }
    return result;
};

console.log(palindromes(array));