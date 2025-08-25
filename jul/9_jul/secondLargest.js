let arr = [1,2,3,4,5,9,8,7,6,5];
let length = arr.length;
for(let i = 1; i <= 2; i++ ){
    for(let j = 1; j <= 2 ;j++ ){
        if(arr[i - 1] > arr [i]){
            swap(arr[i - 1],arr[i - 2]);
        }
    }
    console.log(arr.length - 2);
} 

function swap(num1,num2){
    let nums1 = num1;
    let nums2 = num2;
    num1 = nums1 ^ num2;
    num2 = nums1 ^ num2;
    num1 = nums1 ^ num2;

    return (nums1,nums2)
}