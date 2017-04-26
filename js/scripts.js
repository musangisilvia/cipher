var sentence = prompt("Enter a sentence:");


var firstletter = sentence.charAt(0).toUpperCase();
var lastletter = sentence.charAt(sentence.length-1).toUpperCase();

var res = function(letter1, letter2) {
  return firstletter + lastletter;
};

var reverse = function(letter1, letter2) {
  return lastletter + firstletter;
};

var thirdFunction = function(letter1, letter2) {
  return reverse(res(firstletter, lastletter));
};
thirdFunction(firstletter, lastletter);

var result = thirdFunction(firstletter, lastletter);
var outputText = sentence + " " + result;
alert(outputText);
var count = function(sentence) {
  alert(sentence.length/2);
};
count(sentence);
