let t1=performance.now();
/*/let mydiv=document.createElement('div');
for(let i=0;i<=100;i++){
    let element=document.createElement('p');
    element.textContent="this is para"+i+1;
    mydiv.appendChild(element);
}
document.body.appendChild(mydiv);
let t2=performance.now();
console.log(t2-t1);*/
//by using fragment document
let mydiv=document.createDocumentFragment();
for(let i=0;i<=100;i++){
    let element=document.createElement('p');
    element.textContent="this is para"+i+1;
    mydiv.appendChild(element);
}
document.body.appendChild(mydiv);
let t2=performance.now();
console.log(t2-t1);