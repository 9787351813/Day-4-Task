"Use Strict";
const capital = sentence => {
    let str = sentence.split(" ");
    for (let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
}

console.log(capital("i am studying full stack development course in guvi"));
console.log(capital("i am a developer"));