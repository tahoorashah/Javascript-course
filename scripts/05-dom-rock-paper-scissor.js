//adding object for score display
//we will use default operator|| as shortcut method to display the score and as well as in case of null score

let score = JSON.parse(localStorage.getItem('score')) 
||{
    Wins : 0,
    Losses : 0,
    Ties : 0
};
 
//function calling--
  updateScore();

  //getting element out of local storage
//console.log(localStorage.getItem('score'));
 //converting json string back to object we use json.parse
//console.log(JSON.parse(localStorage.getItem('score'));)


  // console.log(localStorage.getItem('message')),
  
  /*if(!score){ sets default value if score does not exist
    score = {
      Wins : 0,
      Losses : 0,
      Ties : 0
    };
  }
  */
    function playGame(playerMove){
      const computerMove =pickComputerMove(); 
      let result='';
    if(playerMove ==='scissors')
  {
    if(computerMove === 'scissors'){
    result='Tie'; 
  }
  else if(computerMove === 'rock'){
    result=' You Lose';
  }
   else if(computerMove === 'paper'){
    result=' You Win!';
   }
  }

  
  else if( playerMove === 'paper'){
    if(computerMove === 'paper'){
     result='Tie'; 
   }
   else if(computerMove === 'scissors'){
     result='You Lose';
   }
    else if(computerMove === 'rock'){
      result='You Win!';
    }
  }
   
  
    else if(playerMove=== 'rock'){
      if(computerMove === 'rock'){
      result='Tie'; 
    } 
    else if(computerMove === 'paper'){
      result='You Lose';
    }
     else if(computerMove === 'scissors'){
        result='You Win!';
     }

  }
 
  
 //for score step
     if(result==='You Win!')
    {
      score.Wins += 1;
    }  
    else if(result === 'You Lose'){
      score.Losses += 1;
    }
    else if(result==='Tie'){
      score.Ties += 1;
    }
  //storing element in local storage

  localStorage.setItem('score', JSON.stringify(score));
    
  //localStorage.setItem('message','hello');
 
    updateScore();

    document.querySelector('.js-result').
    innerHTML = result;

    document.querySelector('.js-moves').innerHTML 
    =  `You
     <img src="thumbnail_img/${playerMove}-emoji.png"
     class="img-css">
     <img src="thumbnail_img/${computerMove}-emoji.png"class="img-css">
     Computer` ;
  }
    
       function updateScore(){
      document.querySelector('.js-score')
   .innerHTML =  `Wins:${score.Wins}, 
   Losses:${score.Losses}, 
   Ties:${score.Ties}`;
    }
  

   function pickComputerMove(){
    const randomNumber= Math.random();
    
    /*outside scope thus makes it global*/
    let computerMove = '';/*made global variable*/

    if(randomNumber >=0 && randomNumber < 1/3)
    {
    computerMove = 'rock'; /*this varible under scope of 'if'*/
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3)
    {
    computerMove = 'paper';
    }
    else if(randomNumber >= 2/3 && randomNumber<1)
    {
    computerMove = 'scissors';
    } 
    return computerMove;
    }
   