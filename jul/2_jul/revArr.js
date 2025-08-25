function reverse (arr){
    let arr1 = [];
    for(let i = arr.length -1 ; i >= 0 ; i --){
        arr1.push(arr[i]);
    }
 
    console.log(arr1);
}

reverse([1,2,3,4]);