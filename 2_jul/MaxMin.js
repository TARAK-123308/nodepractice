function MaxMin(arr){
   let max = min = arr[0];
   for(let i = 1; i < arr.length; i++){
    if(arr[i] > max ) max = arr[i];
    if(arr[i] < min) min = arr[i];
   }
   console.log(max + " is Max" + " " + min + " is min ");
}

MaxMin([1,2,0,9,7]); 