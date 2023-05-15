console.log("Hello World");

const templateLiteral = `this is a template literal that can "concat" easily: ${1 + 2 + 3 + 5 * 132}`;

console.log(templateLiteral);

const fibArr = [1, 1, 2, 3, 5, 8];

console.log(fibArr);
console.log(fibArr[0]);

// You can push into an array even though its a constant
fibArr.push(fibArr[4] + fibArr[5]);

console.log(fibArr);

// Making objects
const classroom = {
    building: "ATLAS",
    room: 104
}

console.log(classroom);
console.log(classroom.room);

// If dot notation fails you use this
console.log(classroom['building']);

// You can esily add anything to an object, and it's still a const like with the array
classroom.ocupancyLimit = 30;

console.log(classroom);

const y = 11;
const yAsString = '11';
const x = 5;
if (y == yAsString) {
    console.log('dubble equals is true');
    if (y === yAsString) {
        console.log('tripple equals is false');
    }
} else {
    console.log(x);
}

// new way to do for loops
for (const item of fibArr) {
    console.log(`value: ${item}`);
}

// can also do this with objects
for (const key in classroom){
    console.log(`key: ${key}`);
    console.log(`item: ${classroom[key]}`);
}

// MORE LOOPS
fibArr.forEach((item) => {
    console.log(`value: ${item}`);
})

// normal function
function nextFib (x, y){
    return x + y;
}
fibArr.push(nextFib(fibArr[fibArr.length-1], fibArr[fibArr.length-2]));
console.log(fibArr[fibArr.length - 1]);

// Arrow function
const betterNextFib = (fibArr) => {
    fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
    console.log(`pushed: ${fibArr[fibArr.length - 1]}`);
}

betterNextFib(fibArr);

for(let i = 0; i < 10; i++) {
    betterNextFib(fibArr);
}

// Document is the built in root object
const h1 = document.getElementById('headerText');
h1.innerText = 'Wow you can change inner text from js so easily';

