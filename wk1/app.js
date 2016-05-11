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

while (ask1) {
  var userAns = prompt('Was I born in Ukraine?');
  console.log('User\'s response was ' + userAns);
  if (userAns.toUpperCase() === 'Y' || userAns.toLowerCase() === 'yes') {
    alert(userNameF + ', you idiot. That is patently untrue.');
    console.log('User\'s response was ' + userAns);
    ask1 = false;
  } else if (userAns.toUpperCase() === 'N' || userAns.toLowerCase() === 'no') {
    alert('Well done, ' + userNameF + '. You\'re not as dumb as you look.');
    console.log('User\'s response was ' + userAns);
    ask1 = false;
  } else {
    alert('This is a yes/no question, you moron. You have to enter "yes" or "no".');
    console.log('User\'s response was ' + userAns);
  }
}

while (ask2) {
  var userAns = prompt('Did I study fashion design?');
  console.log('User\'s response was ' + userAns);
  if (userAns.toUpperCase() === 'Y' || userAns.toLowerCase() === 'yes') {
    alert('Are you for real, ' + userNameF + '? Do I look fashionable to you?');
    console.log('User\'s response was ' + userAns);
    ask2 = false;
  } else if (userAns.toUpperCase() === 'N' || userAns.toLowerCase() === 'no') {
    alert('You got it, ' + userNameF + '.');
    console.log('User\'s response was ' + userAns);
    ask2 = false;
  } else {
    alert('Did you really just try to answer a yes/no question with something besides "yes" or "no", ' + userNameF + ' I can\'t even right now with this.');
    console.log('User\'s response was ' + userAns);
  }
}

while (ask3) {
  var userAns = prompt('Do I play guitar?');
  console.log('User\'s response was ' + userAns);
  if (userAns.toUpperCase() === 'Y' || userAns.toLowerCase() === 'yes') {
    alert('Yes, indeed, ' + userNameF + ', that is correct. You shall be spared.');
    console.log('User\'s response was ' + userAns);
    ask3 = false;
  } else if (userAns.toUpperCase() === 'N' || userAns.toLowerCase() === 'no') {
    alert('All you had to do was read the document, ' + userNameF + '.');
    console.log('User\'s response was ' + userAns);
    ask3 = false;
  } else {
    alert('Are you kidding me, ' + userNameF + '? It\'s very simple - enter "yes" or "no".');
    console.log('User\'s response was ' + userAns);
  }
}

while (ask4 < 4) {
  var userAns = prompt('If I went graduated from college in 2009, how old am I today?');
  ask4++;
  console.log(userNameF + ' guessed ' + userAns + '.');
  if (userAns == 29) {
    alert('Look at John Nash over here...');
    console.log('User\'s response was ' + userAns);
    { break; }
  } else if (userAns > 29) {
    alert('I hope you like the limbo, ' + userNameF + ', because you need to go lower.');
    console.log('User\'s response was ' + userAns);
  } else if (userAns < 29) {
    alert('Call the seminal 90\'s rock band Creed, ' + userNameF + ', because you need to go higher.')
  } else if (isNaN(userAns)) {
    alert('A number, doofus. Put in a number.')
    console.log('User\'s response was ' + userAns);
  }
  if (ask4 === 4) {
    alert('You will never amount to anything, ' + userNameF + '.');
    console.log('User\'s response was ' + userAns);
  }
}

var interests = ['guitar', 'foreign languages', 'reading', 'traveling'];
var intAns = prompt('One of my interests is ______.');
var rightAns = false;

for (var i = 0; i < interests.length; i++) {
  console.log('interests[' + i + ']: ' + interests[i]);
  if (intAns === intUp) {
    alert('Have you been stalking me, ' + userNameF + '? You know me to a T.')
    rightAns = true;
  }
}
if (!rightAns) {
  alert('No. Wrong.');
}
