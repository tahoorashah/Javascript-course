// 10c--js
  //checks if the button has class-'js-button'
  const check = document.querySelector('.js-button');
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