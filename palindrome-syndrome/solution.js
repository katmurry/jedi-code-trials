var start = "put it up";

var victory_dance = function() {
  //do the monkey;
  console.log("ugh!");
};

var isPalindrome = function(start) {
  start = start.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  var match_this = start.split("").reverse().join("");

  if (start === match_this) {
    console.log("BOOYA");
    victory_dance();
    return true;
  } else {
    return false;
  }

};

isPalindrome(start);
