function greeting(name, callback) {
    let sentence = "Hello, my name is " + name;

    let otherSentence = callback();

    return sentence + otherSentence;
}

function anotherGreeting() {
    let sentence = " I forgot my last name";
    
    return sentence;
}

let myName = "Tanner";
console.log(greeting(myName, anotherGreeting));


//Exericise
function printArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i];

        console.log(number);
    }
    callback(array);
}

function printArrayAgain(array) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i];

        console.log(number);
    }
}

const numbersArray = [1,2,3,4,5,9,8,7,6];

printArray(numbersArray, printArrayAgain);


//Exercise
function calculator(num1, num2, callbackOne, callbackTwo) {
    let result = callbackOne(num1, num2) + callbackTwo(num1, num2);

    return result;
}

function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtractNumbers(num1, num2) {
    let result = num1 - num2;
    return result;
}

console.log(calculator(5,77, addNumbers, subtractNumbers));


//Exercise: make a superhero function
//take in 2 callbacks and return a string in each one of the callbacks describing the "superpower"

function superHero(power1, power2, callbackOne, callbackTwo) {
    let powers = "my super powers are " + callbackOne(power1) + " and " + callbackTwo(power2);
    return powers;
}

function powerOne(power1) {
    let powers = power1;
    return powers;
}

function powerTwo(power2) {
    let powers = power2;
    return powers;
}

console.log(superHero("teleportation", "speed", powerOne, powerTwo));


