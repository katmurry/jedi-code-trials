//a. A potential pitfall is that null is also considered as an object type. So if... 

var bar = null;

//and you do

  console.log(typeof bar); //will return 'object';
  console.log(typeof bar === 'object' ) //this returns true;

//b. A way around this is to check if that item is equal to null first -not equal in value and type, just value- then do your typeof check. Like this...

if ((bar !== null) && (typeof bar === 'object')) {
  console.log('This is an object AND it is not equal to Null');
}
