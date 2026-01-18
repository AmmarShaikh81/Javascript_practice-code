/*let marks={
    harry:32,
    ammar:94,
    aman:94,
    babbar:45,
    anuj:30,
}
for(let i=0;i<Object.keys(marks).length;i++);{
    console.log("the marks of "+Object.keys(marks)[i] +"are"+ marks[Object.keys(marks)[i]]);
}*/
/*for(let b in obj){
    console.log(obj[b]);
}*/
const prompt=require('prompt-sync')();
console.log("enter the five numbers");
let a=Number.parseInt(prompt("enter the first number"));
let b=Number.parseInt(prompt("enter the third number"));
let c=Number.parseInt(prompt("enter the fourth number"));
let d=Number.parseInt(prompt("enter the second number"));
let e=Number.parseInt(prompt("enter the fifth number"));

const sum = ( x,y,z,l,m)=>{
    return ans=x+y+z+l+m;

}

console.log("the sum is"+sum(a,b,c,d,e));
/*const prompt=require('prompt-sync')();
let cn=5;
let n;

while(n != cn){
    n=Number.parseInt (prompt("enter the number"));
}
console.log("congrats you have enter correct number");
*/