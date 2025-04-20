// 10c--js
  //checks if the button has class-'js-button'
  const check = document.querySelector('.js-buttontest');
  console.log(check.classList.contains('js-button'));

  function gamingButton() {
    const buttonInput = document.querySelector('.js-button-two');

    if( !buttonInput.classList.contains('is-toggled')) {
      buttonInput.classList.add('is-toggled');
    }
    else {
      buttonInput.classList.remove('is-toggled');
    }
  }

 
// 10e---
  // function buttonOnoff_one(){
  //   const buttonElementone = document.querySelector('.js-firstbutton');

  //   if(!buttonElementone.classList.contains('game-buttonOn')){
  //     buttonElementone.classList.add('game-buttonOn');
  //   }
  //   else{
  //     buttonElementone.classList.remove('game-buttonOn');
  //   }
  // }

  // function buttonOnoff_two(){
  //   const buttonElementtwo = document.querySelector('.js-secondbutton');

  //   if(!buttonElementtwo.classList.contains('music-buttonOn')){
  //     buttonElementtwo.classList.add('music-buttonOn');
  //   }
  //   else{
  //     buttonElementtwo.classList.remove('music-buttonOn');
  //   }

  // }

  // function buttonOnoff_three(){
  //   const buttonElementtwo = document.querySelector('.js-thirdbutton');

  //   if(!buttonElementtwo.classList.contains('tech-buttonOn')){
  //     buttonElementtwo.classList.add('tech-buttonOn');
  //   }
  //   else{
  //     buttonElementtwo.classList.remove('tech-buttonOn');
  //   }

  // }


  // The word "toggle" means turn on/off.
function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {

    // Before turning this button ON, check if there's
    // already a button that's turned ON and turn it OFF.
    turnOffPreviousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}



function handleCostKeydown(event) {
  console.log(event.key);
  if(event.key === 'Enter') {
    calculate();
  }
}
function calculate(){
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if(cost < 0) {
    document.querySelector('.js-total-cost')
    .innerHTML = 'Error: cost cannot be less than $0';
    return; // exit the function early
  }

  if(cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
}

    let calculation ='';
    
    function updateCalculation(value){
      calculation += value;
      calDom();
    }
    function calDom(){
      document.querySelector('.cal-line')
      .innerHTML = calculation;
    }