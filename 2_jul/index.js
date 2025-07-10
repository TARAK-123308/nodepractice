function index(arr,value){
    for(let i = 0;i < arr.length;i++){
        if(arr[i] == value) return i;
    }
    return false;
}
let inde = index([1,2,3,4],2);
console.log(inde);