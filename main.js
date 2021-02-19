/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
// that returns the string "That's a long string!" if the given string
// is longer than 20 characters. It should not return anything otherwise.
// (Explicitly, at least--every function returns `undefined` if you don't `return` a value!)

function isItLong(long) {
  const itIsLong = "That's a long string!";
  if (long.length > 20){
    return itIsLong;
  }
}

const long0 = isItLong('this is a pretty long string');
long0;
const long1 = isItLong('this is not');
long1;

//that returns the string "That's a regular sized string!" if the given
// string is between 10 and 20 characters, inclusive. It should 
//not return anything otherwise.

function isItMedium(regular) {
  const itIsMedium = "That's a regular sized string!";
  if (regular.length >= 10 && regular.length <= 20){
    return itIsMedium;
  }
}

const medium0 = isItMedium('this is a medium');
medium0;
const medium1 = isItMedium('short');
medium1;
//that returns "That's a small string!" if the given string is shorter 
//than 10 characters. Otherwise, it should return "That's not a small string!"
function isItShort(short) {
  const itIsSmall = "That's a small string!";
  const itIsNotSmall = "That's not a small string!";
  if (short.length < 10) {
    return itIsSmall;
  } else if (short.length >= 10) {
    return itIsNotSmall;
  }
}

const small0 = isItShort('yes');
small0;
const small1 = isItShort('no this one is not short');
small1;

// that returns:
// the string "That's a long string!" if the given string is longer
// than 20 characters
// the string "That's a regular sized string!" if the given string
// is between 10 and 20 characters, inclusive
// the string "That's a small string!" if the given string is shorter
// than 10 characters
function howLongIsMyString(stringSizes) {
  const smallBlurb = "That's a small string!";
  const mediumBlurb = "That's a regular sized string!";
  const longBlurb = "That's a long string!";
  if (stringSizes.length > 20){
    return longBlurb;
  } else if (stringSizes.length >= 10){
    return mediumBlurb;
  } else if (stringSizes.length < 10){
    return smallBlurb;
  }
}

const string0 = howLongIsMyString('how long is this string, pretty long!');
string0;
const string1 = howLongIsMyString('pretty medium');
string1;
const string2 = howLongIsMyString('small');
string2;

// that returns the height of your instructors, in inches.
// If given the string "Colin" it should return the number `62`.
// If given the string "Mesuara", it should return the number `69`.
// If given anything else, it should return the string "I don't 
//know that instructor!".

function instructorHeight(height) {
  const heightColin = 62;
  const heightMesuara = 69;
  const heightUnknown = "I don't know that instructor!";
  if (height === 'Colin'){
    return heightColin;
  } else if (height === 'Mesuara') {
    return heightMesuara;
  } else if (height !== 62 && height !== 69) {
    return heightUnknown;
  }
}

const height0 = instructorHeight('Colin');
height0;
const height1 = instructorHeight('Mesuara');
height1;
const height2 = instructorHeight('Solomon');
height2;
/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}