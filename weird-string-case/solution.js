function toWeirdCase(string) {
  // make given string into array and set up end point empty array and string
  var startArr = string.split(""),
      endArr = [],
      endStr = "";

  for (var i = 0; i < startArr.length; i++) {
    //check if index is even, uppercase the current value depending, update end array
    if (i % 2 === 0) {
      startArr[i] = startArr[i].toUpperCase();
      endArr.push(startArr[i]);
    } else {
      endArr.push(startArr[i]);
    }
  }

  //make end array into a string
  endStr = endArr.join('');
  return endStr;
}

toWeirdCase("This is a test");

//test cases - uncomment to run code
// describe('toWeirdCase', function(){
//   it('should return the correct value for a single word', function(){
//     Test.assertEquals(toWeirdCase('This'), 'ThIs');
//     Test.assertEquals(toWeirdCase('is'), 'Is');
//   });
//   it('should return the correct value for multiple words', function(){
//     Test.assertEquals(toWeirdCase('This is a test'), 'ThIs iS A TeSt');
//   });
// });
