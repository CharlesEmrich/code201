//Global Variable Declarations
var Questions = [
  'Was I born in Ukraine?',
  'Did I study fashion design?',
  'Do I play guitar?',
  'If I graduated from college in 2009, how old am I today?',
  'One of my interests is ___________.'
];

var Answers = [
  ['no', 'n'],
  ['no', 'n'],
  ['yes', 'y'],
  29,
  ['guitar', 'foreign languages', 'reading', 'traveling']
];

evalFunctionReturn = false;

//Control function
function Control(query) {
  if (query === 0) {
    //Run Q0Eval(userAns)
  } else if (query === 1) {
    //Run Q1Eval
  } else if (query === 2) {
    //Run Q2Eval
  } else if (query === 3) {
    //Run Q3Eval
  } else if (query === 4) {
    //Run Q4Eval
  }
  if evalFunctionReturn === true then Score ++
  else no score print message

}

  //Evaluation Functions
  function Q0Eval(input) {
    if (Answers.indexOf(input) != -1) {
      evalFunctionReturn = true;
      console.log()
      return that eval value
      else {
        eval to false
        return that eval value
      }

    }
  }



for (var i = 0; i < Questions.length; i++) {
 var userAns = prompt(Questions[i]);
 console.log('User entered: ' + userAns);
 userAns = userAns.toLowerCase();
Control(i);
 }
 //if (answer === Answers[i]) {
   //alert(response[i][0] + userName + response[i][1]);
 //} else...
