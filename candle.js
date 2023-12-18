function candle(arr){
    var hight=0;
    var noc=0;
    for(i=0;i<arr.length;i++){
      var a = arr[i]
    if(a>hight){
      hight=a;
      noc =1
    }else if(a===hight){
      noc++
    }
    }
    return(noc);
    
}
var arr = [1,5,5,3];
console.log(candle(arr))