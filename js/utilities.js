function findValue(paragraphValue,inputValue){
    // if(isNaN(inputValue)== true) {
    //     alert('Please put a number');
    //     inputValue='';
    // }
   
    const previousActivityString = paragraphValue;
    const providedActivityString = inputValue;
    const previousActivityInteger = parseInt(previousActivityString);
    const providedActivityInteger = parseInt(providedActivityString);
    const activityResult = previousActivityInteger + providedActivityInteger;
    
    return activityResult;
}
function findBalance(){
    const balanceString=document.getElementById('balance-text').innerText;
    const balanceInteger = parseInt(balanceString);
    return balanceInteger;
}
// function validator(){

//     const depositInputValidation = document.getElementById('deposit-box').value;
//     const withdrawInputValidation = document.getElementById('withdraw-box').value;
//     if(isNaN(depositInputValidation)== true){
//         alert('Please put a number');
        
//     }
// }