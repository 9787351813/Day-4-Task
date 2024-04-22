let nums1 = [1, 3, 5];
let nums2 = [2, 4, 6];

(function(nums1, nums2) {
    let merged = [];
    let i = 0;
    let j = 0;
    
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }
    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
    }
    
    let mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        console.log((merged[mid - 1] + merged[mid]) / 2);
    } else {
        console.log(merged[mid]);
}
})(nums1, nums2);
