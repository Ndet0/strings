// Write your code in this file!
const currentUser = "Festus Ndeto";

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.split(" ").map(name =>name[0].toUpperCase()).join("")}!`;


console.log(welcomeMessage);
console.log(excitedWelcomeMessage);
console.log(shortGreeting);