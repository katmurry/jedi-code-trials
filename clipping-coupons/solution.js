function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  //set up empty variable to check for expiration
  var isDateValid = "";
  var isCodeCorrect = "";

  //convert date to a number
  function convertDate_toNumber(date) {
    var date_object = new Date(date);
    var month = date_object.getMonth()+1;
    var day = date_object.getDate();
    var year = date_object.getFullYear();

    if (month < 10) {
      month = '0' + month;
    } else {
      month = month;
    }

    if (day < 10) {
      day = '0' + day;
    } else {
      day = day;
    }

    month = month.toString();
    day = day.toString();
    year = year.toString();

    date = (year + month + day)*1;
    return date;
  }

  //call date converters
  currentDate = convertDate_toNumber(currentDate);
  expirationDate = convertDate_toNumber(expirationDate);

  //is entered code correct?
  if (enteredCode === correctCode) {
    isCodeCorrect = true;
  } else {
    isCodeCorrect = false;
  }

  //is the coupon expired?
  if (currentDate <= expirationDate) {
    isDateValid = true;
  } else {
    isDateValid = false;
  }

  //is coupon valid?
  if (isCodeCorrect && isDateValid) {
    return true;
  } else {
    return false;
  }
}

//test cases - uncomment to run code
// checkCoupon('123','123','September 5, 2014','October 1, 2014'); //true - valid
// checkCoupon('123a','123','September 5, 2014','October 1, 2014'); //false - not valid
// checkCoupon('123','123','October 1, 2014','October 1, 2014'); //true - valid
checkCoupon('123','123','September 5, 2014','October 1, 2014'); //true - valid

/*initial logic

  1. verify coupon code is valid
  - match enteredCode to correctCode
  - depending, set isCodeCorrect to true || false

  2. verify coupon date is valid
    a. take currentDate and convert to number
    - convert months into values
    - put month into array
    - convert each single date into 05
    - put double digit date into same array
    - take year, put into same array
    - smoosh array down to string of numbers
    - convert that to a number - currentValue
    - store in a variable
    b. take expiration date and convert to number
    - store in a separate variable - expiredValue
    c. compare the two numbers
    - if currentValue < expiredValue than coupon is valid set isExpired = false
    - otherwise set isExpired = true

   3. compare if isCodeCorrect = true && isExpired = false : return true else return false
*/
