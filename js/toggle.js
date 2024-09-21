document.getElementById('show-cashout').addEventListener('click',function(e){
    e.preventDefault();

    showForm('cashout-form');
    
    // document.getElementById('cashout-form').classList.remove('hidden');

    // document.getElementById('add-form').classList.add('hidden');

})

document.getElementById('show-add').addEventListener('click',function(e){
    e.preventDefault();

    showForm('add-form');

    // document.getElementById('add-form').classList.remove('hidden');

    // document.getElementById('cashout-form').classList.add('hidden');

})

document.getElementById('show-transaction').addEventListener('click',function(){
    showForm('transaction-form');
    
})