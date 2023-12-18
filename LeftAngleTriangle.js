function LeftAngleTriangle(n){
    let string= "";
    for(i=1;i<=n;i++){
        for(j=1;j<=n-i;j++){
            string +=" ";
        }
        for(k=1;k<=i;k++){
            string +="#"
        }
        string += "\n"
    }
    return string;
}
console.log(LeftAngleTriangle(5))