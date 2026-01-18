/*console.log("welcome !!!");
function greeting(){
    console.log("As salamu alaikum");
}
setTimeout(greeting,10000);
console.log("execution end");
//Promises
let promise1=new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve(10);
    }
    else{
        reject(-1);
    }
});
promise1.then((message)=>{
    console.log("first message"+message);
    return 20;
}).then((message)=>{
    console.log("second message"+ message)
}).catch((err)=>{
    console.log("fail");
});


//code for fetching the data using promises and .then
function loadingdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(29);
        },30000);
    });
}
console.log("fetching data");
let prm=loadingdata();
console.log(" or loading data");
prm.then((msg)=>{
    console.log("the data id is"+msg)
    console.log("task completed");
});
*/
//fetching data by using async await
async function loadingdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(29);
        },30000);
    });
}
async function main() {
    console.log("fetching data");
    console.log(" or loading data");
    let data=await loadingdata();
    console.log("the data id is"+data)
    console.log("task completed");
}
main();
/*below example will help you to understand how aynchronous code can be perform synchopronously by using aeync await 
function haalahvaal() {
    console.log("khariyat");
}
function greeting() {
    console.log("goodmorning");
}
async function main() {
    console.log("welcome!");
    await new Promise(resolve =>
        setTimeout(()=>{
            haalahvaal();
            resolve();
        },5000));
    console.log("as salamu alaikum");
    await new Promise(resolve=>
        setTimeout(()=>{
            greeting();
            resolve();
        },3000));
}
main();
*/