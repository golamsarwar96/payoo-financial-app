//add money function using id parameter

function getInput(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    
    return amountNumber;
}

function getTextInput(id){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    return  currentBalanceNumber;

}

function showForm(id){
    console.log(id);
    document.getElementById('add-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');
    // document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden');
}