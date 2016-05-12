var userName = prompt('Who are you?');
var userNameI = userName.substring(0,1).toUpperCase();
var userNameR = userName.substring(1, userName.length);
var userNameF = userNameI + userNameR;
console.log('User\'s name is ' + userNameF + '.');

alert('Hello, ' + userNameF + ', you worthless POS. We will now play a game. You must provide answers to the following yes/no questions or face certain death.');

var ask1 = true;
var ask2 = true;
var ask3 = true;
var ask4 = 0;
var numQues = 0;
var numCorrect = 0;

while (ask1) {
  var userAns = prompt('Was I born in Ukraine?');
  console.log(userNameF + ' guessed ' + userAns + '.');
  if (userAns.toUpperCase() === 'Y' || userAns.toLowerCase() === 'yes') {
    alert(userNameF + ', you idiot. That is patently untrue.');
    ask1 = false;
  } else if (userAns.toUpperCase() === 'N' || userAns.toLowerCase() === 'no') {
    alert('Well done, ' + userNameF + '. You\'re not as dumb as you look.');
    numCorrect++;
    ask1 = false;
  } else {
    alert('This is a yes/no question, you moron. You have to enter "yes" or "no".');
  }
}

numQues++;

while (ask2) {
  var userAns = prompt('Did I study fashion design?');
  console.log(userNameF + ' guessed ' + userAns + '.');
  if (userAns.toUpperCase() === 'Y' || userAns.toLowerCase() === 'yes') {
    alert('Are you for real, ' + userNameF + '? Do I look fashionable to you?');
    ask2 = false;
  } else if (userAns.toUpperCase() === 'N' || userAns.toLowerCase() === 'no') {
    alert('You got it, ' + userNameF + '.');
    numCorrect++;
    ask2 = false;
  } else {
    alert('Did you really just try to answer a yes/no question with something besides "yes" or "no", ' + userNameF + ' I can\'t even right now with this.');
  }
}

numQues++;

while (ask3) {
  var userAns = prompt('Do I play guitar?');
  console.log(userNameF + ' guessed ' + userAns + '.');
  if (userAns.toUpperCase() === 'Y' || userAns.toLowerCase() === 'yes') {
    alert('Yes, indeed, ' + userNameF + ', that is correct. You shall be spared.');
    numCorrect++;
    ask3 = false;
  } else if (userAns.toUpperCase() === 'N' || userAns.toLowerCase() === 'no') {
    alert('All you had to do was read the document, ' + userNameF + '.');
    ask3 = false;
  } else {
    alert('Are you kidding me, ' + userNameF + '? It\'s very simple - enter "yes" or "no".');
  }
}

numQues++;

while (ask4 < 4) {
  var userAns = prompt('If I went graduated from college in 2009, how old am I today?');
  ask4++;
  console.log(userNameF + ' guessed ' + userAns + '.');
  if (userAns == 29) {
    alert('Look at John Nash over here...');
    numCorrect++;
    { break; }
  } else if (userAns > 29) {
    alert('I hope you like the limbo, ' + userNameF + ', because you need to go lower.');
  } else if (userAns < 29) {
    alert('Call the seminal 90\'s rock band Creed, ' + userNameF + ', because you need to go higher.');
  } else if (isNaN(userAns)) {
    alert('A number, doofus. Put in a number.');
  }
  if (ask4 === 4) {
    alert('You will never amount to anything, ' + userNameF + '.');
  }
}

numQues++;

var interests = ['guitar', 'foreign languages', 'reading', 'traveling'];
var intAns = prompt('One of my interests is ______.').toLowerCase();
var rightAns = false;

for (var i = 0; i < interests.length; i++) {
  console.log(userNameF + ' guessed ' + intAns + '.');
  if (intAns === interests[i]) {
    alert('Have you been stalking me, ' + userNameF + '? You know me to a T.');
    rightAns = true;
    numCorrect++;
  }
}
if (!rightAns) {
  alert('No. I hate ' + intAns + '.');
}

numQues++;

if (numCorrect === 5) {
  alert('You got all ' + numQues + ' right!');
} else if (numCorrect < 5 && numCorrect >= 3) {
  alert('Poor show, ' + userNameF + '. You got ' + numCorrect + ' out of ' + numQues + ' correct.');
} else {
  alert(userNameF + ', you idiot! You only got ' + numCorrect + ' of ' + numQues + ' right! You don\'t know me at all! Did you ever even love me?');
}
