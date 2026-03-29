// Write your code in this file!

function greetUser(name){
    return `Welcome, ${name.split(" ").map(name => name[0].toUpperCase()).join("")}!`;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Enter your name:', (name=>{
    console.log(greetUser(name));
    readline.close();
}));

// const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// const shortGreeting = `Welcome, ${currentUser.split(" ").map(name =>name[0].toUpperCase()).join("")}!`;



// console.log(welcomeMessage);
// console.log(excitedWelcomeMessage);
// console.log(shortGreeting);