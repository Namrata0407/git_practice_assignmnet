let num=13;
let factor=0;
for(let i=1;i<=num;i++){
if(num%i==0){
factor++;
}
}
if(factor==1){
console.log("Prime");
}else{
console.log("Not prime");
}