document.getElementById('cashout-btn').addEventListener('click',function(e){
    e.preventDefault();

    const inputCashoutNumber = getInput('input-cashout');

    const cashoutPin = getInput('cashout-pin');
    
    if(cashoutPin === 1234){
        const cashoutBalanceNumber = getTextInput('current-balance');
        console.log(cashoutBalanceNumber,inputCashoutNumber);
        
        if(inputCashoutNumber>cashoutBalanceNumber){
            alert("You don't have enough balance");
            return;
        }
        
        const currentBalance = cashoutBalanceNumber - inputCashoutNumber;
        
        document.getElementById('current-balance').innerText = currentBalance;

        const p = document.createElement('p');
        p.innerText = `You have cashout ${inputCashoutNumber}. New Balance = ${currentBalance}`;
        //append p to transaction container
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Invalid PIN');
    }
})