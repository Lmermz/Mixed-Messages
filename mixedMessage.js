
//Create the arrays with the sections to randomly select
const lineOne = ['fabulous','wonderful','lovely','smart','caring','beautiful','strong']; 
const lineTwo = ['smile','laugh','hug yourself','relax','love yourself','be grateful for who you are']
const lineThree = ['"Confidence isn\'t "they will like me". Confidence is "I\'ll be fine if they don\'t"','"If you want to live a life you\'ve never lived, you have to do things you\'ve never done."','"Be yourself and let the world catch up"','"Progress, not perfection"','"You can’t stop the waves, but you can learn to swim."','"Be thankful for what you have and you will end up having more."']

//Randomly select from the first array and add it to the static string
let one = Math.round(Math.random() *(lineOne.length -1));
let two = Math.round(Math.random() *(lineTwo.length -1));
let three = Math.round(Math.random() *(lineThree.length -1));

//Print all 3 parts to the console 
console.log('Remember that you are ' + lineOne[one]); 
console.log('So go ahead and ' + lineTwo[two]); 
console.log('And as a wise person once said, ' + lineThree[three]); 