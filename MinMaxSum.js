function MinMaxSum(arr){
    let MinSum = Infinity;
    let MaxSum = -Infinity;
    let totalsum=0;
    for(let i=0;i<arr.length;i++){
        totalsum +=arr[i];
    }
    for(let j=0;j<arr.length;j++){
        let sum = totalsum - arr[j];
        if(sum<MinSum){
            MinSum=sum;
        }
        if(sum>MaxSum){
            MaxSum =sum
        }
        
    }
    return (`${MinSum} ${MaxSum}`)
}

let  arr =[1,2,3,4,5]
console.log(MinMaxSum(arr))