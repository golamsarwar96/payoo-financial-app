document.getElementById('add-money').addEventListener('click',function(e){
    e.preventDefault();

    const amountNumber = getInput('amount');
    const pinNumber = getInput('pin-number');

    if(isNaN(amountNumber)){
        alert('Please enter a valid amount');
        return;
    }

    if(pinNumber === 1234){
        const currentBalanceNumber = getTextInput('current-balance');

        console.log(currentBalanceNumber);
        
        const newBalance = currentBalanceNumber + amountNumber;

        document.getElementById('current-balance').innerText = newBalance;
        
        //Transaction feature
        const p = document.createElement('p');
        p.innerText = `You have added ${amountNumber} New Balance = ${newBalance}`;
        console.log(p.innerText,amountNumber,newBalance);

        //append p to transaction container
        document.getElementById('transaction-container').appendChild(p);


    }
    else{
        alert("Enter valid pin number")
    }
})