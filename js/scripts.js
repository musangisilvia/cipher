var sentence = prompt("Enter a sentence:");
alert(sentence);

var firstletter = sentence.charAt(0).toUpperCase();
var lastletter = sentence.charAt(sentence.length-1).toUpperCase();

alert(firstletter);
var res = function(letter1, letter2) {
  alert(letter1 +" "+ letter2);
};
res(firstletter, lastletter);
