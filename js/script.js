document.getElementById('deposit-btn').addEventListener('click',function(){
    // validator();
    const depositText = document.getElementById('deposit-value').innerText;
    const depositValue = document.getElementById('deposit-box').value;
    const depositReturnedValue =findValue(depositText,depositValue); 
    document.getElementById('deposit-value').innerText= depositReturnedValue;
    document.getElementById('deposit-box').value = '';
    const newBalance = findBalance() + depositReturnedValue;
    document.getElementById('balance-text').innerText= newBalance;
})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    // validator();
    const withdrawText = document.getElementById('withdraw-value').innerText;
    const withdrawValue = document.getElementById('withdraw-box').value;
    const withdrawReturnedValue =  findValue(withdrawText,withdrawValue);
    document.getElementById('withdraw-value') .innerText= withdrawReturnedValue;
   document.getElementById('withdraw-box').value = '';
   const newBalance = findBalance() - withdrawReturnedValue;
    document.getElementById('balance-text').innerText= newBalance;
})