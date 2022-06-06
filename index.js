
function scuberGreetingForFeet(feetValue){
  // Write your code here!
  let message;
  if (feetValue<=400){
    message = "This one is on me!";    
  }
  else if (feetValue>2000 && feetValue<=2500){
    message = "I will gladly take your thirty bucks.";
  }
  else if (feetValue>2500){
    message = "No can do.";
  }
  return message;
}

function ternaryCheckCity(NYC){
  // Write your code here!
  let city;
  let message;
  NYC === city? (message = "Ok, sounds good.") : NYC!==city? (message = "No go."):(message="Ok, sounds good.");
  //let messageTwo = city === NYC? "Ok, Sounds good." : "No go. ";

  return message;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch(tip){
    case 'generous':
      message = "Thank you so much."
      break;
    case 'not as generous':
      message = "Thank you.";
      break;
      default:
        message = "Bye.";
        break;
  }
  return message;
}