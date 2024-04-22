let total = (function sum(arr){
    let total =0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total;
})([100, 200, 300, 400])

console.log(total)