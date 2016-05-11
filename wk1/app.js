var userName = prompt('Who are you?');
var userNameI = userName.substring(0,1).toUpperCase();
var userNameR = userName.substring(1, userName.length);
var userNameF = userNameI + userNameR;
console.log('User\'s name is ' + userNameF + '.');

alert('Hello, ' + userNameF + ', you worthless piece of shit. We will now play a game. You must provide answers to the following yes/no questions or face certain death.');

var ask1 = true;
var ask2 = true;
var ask3 = true;
var ask4 = 0;
var ask5 = true;

var interests = ['guitar', ' reading', ' foreign languages'];

while (ask1) {
  var userAns = prompt('Was I born in Ukraine?');
  console.log('User\'s response was ' + userAns);
  if (userAns.toUpperCase() === 'Y' || userAns.toLowerCase() === 'yes') {
    alert(userNameF + ', you idiot. That is patently untrue.');
    console.log(userNameF + ' is a dumbass.');
    ask1 = false;
  } else if (userAns.toUpperCase() === 'N' || userAns.toLowerCase() === 'no') {
    alert('Well done, ' + userNameF + '. You\'re not as dumb as you look.');
    console.log(userNameF + ' passed.');
    ask1 = false;
  } else {
    alert('This is a yes/no question, you moron. You have to enter "yes" or "no".');
    console.log('Pathetic.');
  }
}

while (ask2) {
  var userAns = prompt('Did I study fashion design?');
  console.log('User\'s response was ' + userAns);
  if (userAns.toUpperCase() === 'Y' || userAns.toLowerCase() === 'yes') {
    alert('Are you for real, ' + userNameF + '? Do I look fashionable to you?');
    console.log('Great job, ' + userNameF + ' You\'re the real MVP.');
    ask2 = false;
  } else if (userAns.toUpperCase() === 'N' || userAns.toLowerCase() === 'no') {
    alert('You got it, ' + userNameF + '.');
    console.log('All hail ' + userNameF + '!');
    ask2 = false;
  } else {
    alert('Did you really just try to answer a yes/no question with something besides "yes" or "no", ' + userNameF + ' I can\'t even right now with this.');
  }
}

while (ask3) {
  var userAns = prompt('Do I play guitar?');
  console.log('User\'s response was ' + userAns);
  if (userAns.toUpperCase() === 'Y' || userAns.toLowerCase() === 'yes') {
    alert('Yes, indeed, ' + userNameF + ', that is correct. You shall be spared.');
    console.log('\'Tis the end, my only friend. Of our elaborate plan, the end.');
    ask3 = false;
  } else if (userAns.toUpperCase() === 'N' || userAns.toLowerCase() === 'no') {
    alert('All you had to do was read the document, ' + userNameF + '.');
    console.log('I bet you think this song is about you.');
    ask3 = false;
  } else {
    alert('Are you kidding me, ' + userNameF + '? It\'s very simple - enter "yes" or "no".');
  }
}

while (ask4 < 3) {
  var userAns = prompt('If I went graduated from college in 2009, how old am I today?');
  ask4++;
  console.log(userNameF + ' guessed ' + userAns + '.');
  if (userAns == '29') {
    alert('Look at John Nash over here...');
    console.log('A born mathematician.');
    { break; }
  } else if (userAns > 29 || userAns < 29) {
    alert('Alas, poor ' + userNameF + ' - you knew him not well. Try that shit again.');
    console.log('A failure? How quaint.');
  }
  if (ask4 === 3) {
    alert('You will never amount to anything, ' + userNameF + '.');
  }
}

while (ask5) {
  var userAns = prompt('Name an interest of mine.');
  interests.push(userAns);
  alert('Yes. My interests include ' + interests + '.');
  console.log();
  ask5 = false;
}
