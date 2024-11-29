
const v =document.getElementById('screen');
function clearResult(){
    v.value="";
}
function del(){
    v.value=v.value.slice(0,-1);
}
function addValue(value){
   
    v.value=v.value+value;
}
function calc(){
    constv =document.getElementById('screen')
    v.value=eval(v.value)
     let result=document.getElementById('screen').value=Result;
}