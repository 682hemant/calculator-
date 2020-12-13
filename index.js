  let screen = document.getElementById('screen');
  let buttons = document.querySelectorAll('button');
  let screenValue = '';
  for(let button of buttons){
    button.addEventListener('click',function(e){
      buttonText = e.target.innerText;
      if(buttonText == 'x'){
           buttonText = '*';
           screenValue += buttonText;
           screen.value = screenValue;
      }
      else if (buttonText == '='){
           screen.value = eval(screenValue)
      }
      else if (buttonText == 'c'){
         screenValue = "";
         screen.value = screenValue;  
      }
      else{
        screenValue += buttonText;
        screen.value = screenValue;
      }
    })
  }