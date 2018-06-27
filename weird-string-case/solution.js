//initial logic
// 1. check how many words are in the string
//// if one word:
//// make into array of characters, do character even-to-uppercase process, glue back into a word
//// if multiple words:
//// make each word into array of characters, do character even-to-uppercase process, glue them back into words, place back into sentence position, glue back together as string.

function toWeirdCase(str) {
  var wordArr = str.split(" ");

  //Check for one or multiple words
  if (wordArr.length === 1) {
    var oneWord = str.split("");
    //returns the processed word string
    return upperChar(oneWord);
  } else {
    //handles multiple words
    moreWords = [];
    for (var word = 0; word < wordArr.length; word++) {
      var letters = wordArr[word].split("");
      //create sentence array
      moreWords.push(upperChar(letters));
    }
    //glue sentence array into a sentence string
    return moreWords.join(" ");
  }

  //word or words passed here for characters to be processed
  function upperChar(charArr) {
    for (var char = 0; char < charArr.length; char++) {
        if (char % 2 === 0) {
          charArr[char] = charArr[char].toUpperCase();
        }
    }
    return charArr.join("");
  }
}

toWeirdCase("Weird string case");

//test cases - uncomment to run code
// describe('toWeirdCase', function(){
//   it('should return the correct value for a single word', function(){
//     Test.assertEquals(toWeirdCase('This'), 'ThIs');
//     Test.assertEquals(toWeirdCase('is'), 'Is');
//   });
//   it('should return the correct value for multiple words', function(){
//     Test.assertEquals(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
//   });
// });
