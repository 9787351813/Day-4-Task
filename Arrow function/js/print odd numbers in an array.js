
let array=[1,2,3,4,5,6,7,8,9,10];
let odd = array => {
       
    for (let i = 0; i < array.length; i++){
        if(array[i]%2 == 1){
           console.log(array[i]);
        }}
    }

odd(array);