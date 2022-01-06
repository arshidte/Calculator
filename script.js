function displayNum(num){
    result.value+=num;
}
function clearBox(){
    result.value=""
}
function evaluateExpression(){
    // let curValue=result.value;
    // let res = eval(curValue);
    // result.value=res;
    result.value=eval(result.value);
}
function back(){
    result.value=result.value.slice(0,-1)
}