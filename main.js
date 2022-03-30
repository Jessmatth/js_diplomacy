'use strict';

function changeColor() {
    const colorChangeEls = document.querySelectorAll('.color-change');
  
    for (const el of colorChangeEls) {
      el.classList.add('red');
    }
  }

function validateNumber(evt) {
    evt.preventDefault();
  }
  const userInputNumber = document.querySelector('#number-input')
  const userNum = Number(userInputNumber.value);

  const formFeedback = document.querySelector('#formFeedback')  
    if (userNum.isInteger() && userNumb <=9){
        formFeedback.innerText = '<p>"You are good to go!"</p>')
    } else {
        formFeedback.innerText = '<p>"Please enter a smaller number."</p>');
    } 
  }
  

/** ***** Attach event handlers ****** */

document.querySelector('.color-changer').addEventListener('click', changeColor);
document.querySelector('.number-form').addEventListener('submit', validateNumber);