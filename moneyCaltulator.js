// input value we can get value 
// other like h1 we can get innerText

document.getElementById("depositbtn").addEventListener("click", function(){
   
    // get deposit & updated 
    let getDepositValue = parseFloat(document.getElementById('iodeposit').value);
  
    // get present deposit 
    let presentDepositValue = parseFloat(document.getElementById('deposit').innerText);
    document.getElementById('deposit').innerText = (getDepositValue + presentDepositValue);

    // get present balance 
    let presentBanlanceValue = parseFloat(document.getElementById('balance').innerText);

    // updated balance 
    let updatedBalance = presentBanlanceValue + getDepositValue;
    document.getElementById('balance').innerText=updatedBalance;

    // empty input feild
    document.getElementById('iodeposit').value = '';
})


document.getElementById("withdraswbtn").addEventListener("click", function(){
   
    // get deposit & updated 
    let getWithdrawValue = parseFloat(document.getElementById('iowithdraw').value);
    
    // get present balance 
    let presentBanlanceValue = parseFloat(document.getElementById('balance').innerText);
    
    // check for update possible or not 
    if(getWithdrawValue>presentBanlanceValue){
        document.getElementById('iowithdraw').value = '';
        return alert("Not possible") ;
    }
    // get present deposit 
    let presentDepositValue = parseFloat(document.getElementById('Withdraw').innerText);
    document.getElementById('Withdraw').innerText = (getWithdrawValue + presentDepositValue);

    

    // updated balance 
    let updatedBalance = presentBanlanceValue - getWithdrawValue;
    document.getElementById('balance').innerText=updatedBalance;

    // empty input feild
    document.getElementById('iowithdraw').value = '';
})