// define a variable called userName that is set to an empty string //
const userName = "";

// create a ternary expression that decides what to do if the user enters a name or not //
console.log("Hello, Jane!");

// The value of the variable should be a string that is the question//
// the user wants to ask the Magic Eight Ball.//
const userQuestion = 'Whatsup Janet?';

console.log(`The user asked:${userQuestion}`);


//To generate a random number between 0 and 7 //
const randomNumber = Math.floor(Math.random() * 8);

// Save a value to this variable in the next steps //
const eightBall = "";

//Create control flow that takes in the randomNumber //
if(eightBall == 0) {
  console.log('It is certain');  
} else if(eightBall == 1) {
  console.log('It is decidedly so');
} else if(eightBall == 2) {
  console.log('Reply hazy try again');
} else if(eightBall == 3) {
  console.log('Cannot predict now');
} else if(eightBall == 4) {
  console.log('Do not count on it');
} else if(eightBall == 5) {
  console.log('My sources say no');
} else if(eightBall == 6) {
  consle.log('Outlook not so good');
} else if(eightBall == 7) {
  console.log('Signs point to yes');
} else {
console.log('yep');
}

/* 
Hello, Jane!
The user asked:Whatsup Janet?
It is certain
*/