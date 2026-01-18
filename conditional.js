const prompt=require('prompt-sync')();
let a = prompt("enter your age?")
a=Number.parseInt(a);
console.log(typeof(a));
if(a<0){
    console.log("please! enter the valid age");
}
else if(a<9){
    console.log("you are child now don't even think of driving");
}
else if(a>9 && a<15){
    console.log("cannat drive");     
}
else{
    console.log("you can drive");
}
console.log("you can",a<18? "not drive":"drive");