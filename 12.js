function  Largest(arr){
    let max = arr[0];
    for(let i = 0;i<arr.length;i++) {
        if(arr[1] > max){
           max = arr[1];
        }
    }return max;
}
console.log(Largest([1,24,5,6]));

function Smallest(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if (arr[1] < min){
            min = arr[1];
        }
    }return min;
}
console.log(Smallest([1,-1,3,4]))