const prompt=require('prompt-sync');
/*let n=Number.parseInt(prompt("enter the number"));
let sum=0;
for(let i=0;i<n;i++){
    sum+=i+1;
}
console.log("the sum is",sum);*/
let obj={
    harry:45,
    mat:43,
    asif:27,
}
for (let a in obj){
    console.log("the marks of "+a +"is " + obj[a]);
}
for(let b of "ammar"){
    console.log(b);
}