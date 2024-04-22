let array = ["radar", "hello", "level", "noon", "world"];

let pallindrome = (function(arr) {
    let result = [];
    for (let word of arr) {
        if (word === word.split('').reverse().join('')) {
            result.push(word);
        }
    }
    console.log(result);
})(array);
