let array = [1, 2, 3, 4, 5];
let k = 3;

(function(arr, k) {
    let n = arr.length;
    k = k % n; 
    let rotated = [];
    
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
            rotated.push(arr[n - k + i]);
        } else {
            rotated.push(arr[i - k]);
        }
    }
    
    console.log(rotated);
})(array, k);
