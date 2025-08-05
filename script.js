// 🎯 Part 1: JavaScript Basics — Variables, Data Types, Operators, Conditionals

// Prompt user for name and age
let name = prompt("What is your name?");
let age = prompt("How old are you?");

// Convert age from string to number
age = Number(age);

// Conditional logic to check age group
if (age >= 18) {
  console.log(name + " is an adult.");
} else if (age > 0) {
  console.log(name + " is a minor.");
} else {
  console.log("Invalid age entered.");
}

// Display greeting on page
document.getElementById("output").innerText = "Hello, " + name + "!";

// ❤️ Part 2: JavaScript Functions

// Function 1: Calculate the square of a number
function square(number) {
  return number * number;
}
console.log("Square of 4 is:", square(4));

// Function 2: Toggle text content
function toggleText(elementId, text1, text2) {
  const element = document.getElementById(elementId);
  element.textContent = element.textContent === text1 ? text2 : text1;
}

// 🔁 Part 3: JavaScript Loops

// Loop 1: Print even numbers from 1 to 10 using for loop
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Even number:", i);
  }
}

// Loop 2: While loop to count down from 5
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// 🌐 Part 4: Mastering the DOM

// DOM Interaction 1: Button click updates text
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("output").textContent = "You clicked the greet button!";
});

// DOM Interaction 2: Mouseover toggles class
document.getElementById("greetBtn").addEventListener("mouseover", function() {
  document.getElementById("title").classList.toggle("highlight");
});

// DOM Interaction 3: Dynamically add new content
let newPara = document.createElement("p");
newPara.textContent = "JavaScript dynamically added this paragraph.";
document.body.appendChild(newPara);
