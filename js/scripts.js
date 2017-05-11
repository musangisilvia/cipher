var sentence = prompt("Enter a sentence:");


var firstletter = sentence.charAt(0).toUpperCase();
var lastletter = sentence.charAt(sentence.length-1).toUpperCase();

var firstAndLastletter = function(letter1, letter2) {
  return firstletter + lastletter;
};

var reverse = function(letter1, letter2) {
  return lastletter + firstletter;
};

var thirdFunction = function(letter1, letter2) {
  return reverse(firstAndLastletter(firstletter, lastletter));
};
thirdFunction(firstletter, lastletter);

var result = thirdFunction(firstletter, lastletter);
var outputText = sentence + " " + result;
alert(outputText);

var count = function(sentence) {
   return(sentence.length/2);
};
count(sentence);

var midLetter = sentence.charAt(count(sentence));

alert(midLetter+outputText);

var finalString= midLetter + outputText;

function reverseSentence(paragraph){

  var splitString=paragraph.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;
}

alert (reverseSentence(finalString));
