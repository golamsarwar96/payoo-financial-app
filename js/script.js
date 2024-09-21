
//Set Event Handler
document.getElementById('button-login').addEventListener('click',function(event){
    //Prevent reloading browser
    event.preventDefault();

    //capture phone number using DOM
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    //capture pin number using DOM
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

    //validate phone and pin number 
    if(phoneNumber === '123456' && pinNumber === '1234'){
        //allow users to visit site.
        window.location.href = "/home.html"
    }
    else{
        console.log("Wrong pin or phone number");
    }

})