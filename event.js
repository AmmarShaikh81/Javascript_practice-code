/*function changetext() {
    let fpara=document.getElementById('fpara');
    fpara.textContent="khairiyat?"
}
let fpara=document.getElementById('fpara');
fpara.addEventListener('click',changetext);
let anchorelement=document.getElementById('anchor');
function Default(event){
    anchorelement=document.getElementById('anchor');
    event.preventDefault();
    anchorelement.textContent="forbiddeen";
}
anchorelement.addEventListener('click',Default);
*/
function checkclick(event){
    if(event.target.nodeName==='SPAN')
    alert("you have clicked on " + event.target.textContent );
}
let element=document.getElementById('wrapper');
element.addEventListener('click',checkclick);
