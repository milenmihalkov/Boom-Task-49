import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

 let form = document.createElement('form');

 let ccname   = document.createElement('input');
 ccname.type  = 'text';
 ccname.classList.add('input');
 ccname.value = 'Name on card';
 ccname.setAttribute('name', 'ccname');

 let cardnumber   = document.createElement('input');
 cardnumber.type  = 'number';
 cardnumber.classList.add('input');
 cardnumber.value = 'Card Number';
 cardnumber.setAttribute('name', 'cardnumber');

 let cvc   = document.createElement('input');
 cvc.type  = 'number';
 cvc.classList.add('input');
 cvc.value = 'CVC';
 cvc.setAttribute('name', 'cvc');

 let ccexp   = document.createElement('input');
 ccexp.type  = 'number';
 ccexp.classList.add('input');
 ccexp.value = 'Credit card expiration';
 ccexp.setAttribute('name', 'cc-exp');

 form.appendChild(ccname);
 form.appendChild(cardnumber);
 form.appendChild(cvc);
 form.appendChild(ccexp);

 document.getElementsByClassName("main")[0].appendChild(form);
});
