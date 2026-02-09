/*
let js = "amazing";
console.log (40 + 8 + 23 - 10);

console.log("Vado");
console.log(23);

let firstName = "Habeeb";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let taiwo_habeeb = "TH";
let $function = "27";

let person = "Vado";
let PI = 3.1415;

let myFirstJob =  "Programmer";
let myCurrentJob = "Gamer";

let job1 = "Programmer";
let job2 = "Gamer";

console.log(myFirstJob);
console.log(myCurrentJob);

let country = "Nigeria"
let continent = "Africa"
let population = "20"

console.log(country);
console.log(continent);
console.log(population);

 
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Vado");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(typeof year);

console.log(typeof null);


// 3 different way of declaring variabes let (used to declare variables that can change later ), const (used to declare a vairable that cannot be change.), var (is the old way of declaring a variable)

let age = 30;
age = 31;
const birthYear = 1997;
// const job;

var job = "programmer";
job =  "Gamer";

lastName = "Taiwo";
console.log(lastName);


// BASIC OPERATORS
// MATH OPERATORS
const now = 2037;
const ageVado = now - 1997;
const ageDams = now - 2000;
console.log(ageVado, ageDams); 

console.log (ageVado * 2, ageVado / 10, 2 ** 3, 2 ** 5);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Vado";
const lastName =  "Taiwo";
console.log(firstName + lastName);
console.log(firstName + " "  + lastName); 

// ASSIGMENT OPERATORS
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++;  // x = x + 1
x --; // x = x - 1
x --;
console.log(x); 

// COMPARISON OPERATORS
console.log(ageVado > ageDams); // >, <, >=, <=
console.log(ageDams >= 40);

const isFullAge = ageDams >= 40;
console.log(isFullAge);
console.log(now - 1997 > now - 2000);

const now = 2037;
const ageVado = now - 1997;
const ageDams = now - 2000;
console.log(ageVado, ageDams);
console.log(now - 1997 > now - 2000);

let x,y;
x = y = 55 - 10 - 5; //x = y = 40
console.log(x,y);

const averageAge = (ageVado + ageDams) / 2;
console.log(averageAge);


// CODING CHALLENGE SECTION 1  #1 Data 1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// BMI = mass / height ** 2 = mass / (height * height)
const markBMI  = massMark / heightMark ** 2;
const johnBMI  = massJohn / (heightJohn * heightJohn);
const markHigherBMI = (markBMI > johnBMI);
console.log(markBMI,johnBMI,markHigherBMI);

// CODING CHALLENGE #1 Data 2

const massMark_2 = 95;
const heightMark_2 = 1.88;
const massJohn_2 = 85;
const heightJohn_2 = 1.76;

// BMI = mass / height ** 2 = mass / (height * height)
const markBMI_2  = massMark_2 / heightMark_2 ** 2;
const johnBMI_2  = massJohn_2 / (heightJohn_2 * heightJohn_2);
const markHigherBMI_2 = (markBMI_2 > johnBMI_2);
console.log(markBMI_2,johnBMI_2,markHigherBMI_2);

const firstName = "Habeeb";
const job = "Programmer";
const birthYear = "1997";
const year = 2025;

const habeeb = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(habeeb);

const habeebNew = `I'm ${firstName} a ${year - birthYear} years old ${job}! `;
console.log(habeebNew);

console.log(`I love you Damola`);

console.log("String with \n\
multiple \n\
lines")

const age = 21;
const isOldEnough = age >= 25;

if(age >= 25) {
console.log(`Dams can start driving license `);
} else {
    const yearsLeft = 25 - age;
    console.log(`Dams is too young. Wait another ${yearsLeft} years`);
};

const birthYear = 2013;
let century;
if  (birthYear <= 2000) {
  century = 20;
} else {
 century = 21;
}
console.log(century);


const massMark_2 = 95;
const heightMark_2 = 1.88;
const massJohn_2 = 85;
const heightJohn_2 = 1.76;

// BMI = mass / height ** 2 = mass / (height * height)
const markBMI_2  = massMark_2 / heightMark_2 ** 2;
const johnBMI_2  = massJohn_2 / (heightJohn_2 * heightJohn_2);


// if (markBMI_2 > johnBMI_2) {
//     console.log ("Mark's BMI is higher than John's !");
// } else {
// console.log("John's BMI is higher than Mark's !")
// };

if (markBMI_2 > johnBMI_2) {
console.log (`Mark's BMI (${markBMI_2}) is higher than John's (${johnBMI_2})!`);
 } else { 
  console.log(`John's BMI (${johnBMI_2}) is higher than Mark's (${markBMI_2})!`)
 }

// TYPE CONVERSION
const inputYear = "1997";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 30);
console.log(inputYear + 30)

console.log(Number("Vado"));
console.log(typeof Number);
console.log(typeof NanN);
console.log(typeof inputYear);

console.log(String(23), 30);

// TYPE COERCION
console.log("I am " + "28" + " years old");
console.log("23" - "10" - "3");
console.log(23 + 10 + 3);
console.log("30" / "3");
console.log("30" * "3");
console.log("23" + "10" + "3");

let n =  "1" + 1; // "11"
n = n - 1;
console.log(n);

// FALSY VALUES

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log (Boolean) //(typeof)
console.log(Boolean("Vado"));
console.log(Boolean(NaN));
console.log(Boolean('1'));
console.log(typeof false);

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 12;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED")
}

let age = 16;
if (age < 13) {
  console.log("You are a child.");
// } else if(age >= 12 && age <= 17) {
//   console.log("You are a teenager.")
} else {
  console.log("You are an adult.");
}


// EQUALITY OPERATORS ==(LOOSE) VS === (STRICT)
const age = "18";
if (age === 18) console.log("You just became an adult (STRICT)");

if (age == 18) console.log("You just became an adult (LOOSE)"); // 

const favourite = Number(prompt("What's your favorite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 25) {
  console.log("Cool! 25 is cool number!");
} else if(favourite === 7) {
 console.log("7 is also a cool number");
} else if(favourite === 15) {
  console.log("15 is also a cool number")
} else {
  console.log("Number is not 25 or 7 or 15")
}


const hasDriversLicense = true//(A)
const hasGoodVision = true //(B)

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || !hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//   console.log ("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = true //(C)
console.log(!hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && isTired) {
  console.log ("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
  

//  CHALLENGE 3 SECTION 1
  
//  const scoresDolphins = (96 + 108 + 89) /  3;
//  const scoresKoalas  = (88 + 91 + 110)  / 3;
// console.log(scoresDolphins, scoresKoalas);

// if (scoresDolphins > scoresKoalas) {
//   console.log("Dolphins wins the trophy !!!");
// } else if (scoresKoalas > scoresDolphins) {
//   console.log("Koalas wins the trophy !!!")
// } else  if  (scoresDolphins ===  scoresKoalas) {
//   console.log ("Both teams the trophy")
// }

// BONUS 1
// const scoresDolphins = (97 + 112 + 101) /  3;
//  const scoresKoalas  = (109 + 95 + 123)  / 3;
// console.log(scoresDolphins,scoresKoalas);

// if (scoresDolphins > scoresKoalas && scoresDolphins >= 100) {
//   console.log("Dolphins wins the trophy !!!");
// } else if (scoresKoalas > scoresDolphins && scoresKoalas >= 100) {
//   console.log("Koalas wins the trophy !!!")
// } else  if  (scoresDolphins ===  scoresKoalas) {
//   console.log ("Both teams the trophy")
// }


// BONUS 2
// const scoresDolphins = (97 + 112 + 101) /  3;
//  const scoresKoalas  = (109 + 95 + 106)  / 3;
// console.log(scoresDolphins,scoresKoalas);

// if (scoresDolphins > scoresKoalas && scoresDolphins >= 100) {
//   console.log("Dolphins wins the trophy !!!") }
//  else if (scoresKoalas > scoresDolphins && scoresKoalas >= 100) {
//  console.log("Koalas wins the trophy !!!")
//   } else  if  (scoresDolphins ===  scoresKoalas && scoresDolphins >=  100 && scoresKoalas >= 100) {
//    console.log ("Both teams the trophy")
//   } else {
//     console.log ("No one winns the trophy")
//   } 

// const day = "sunday";

// switch(day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":    
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");  
// }

// if (day ===  "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if(day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day  === "wednesday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday"|| day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log ("Not a valid day!");
// }

const hero =  "Wonder woman";
switch (hero) {
  case "Batman":
    console.log("I'm Batman. Also, I have no super powers, just trauma and gadgets.");
    break;
  case "Superman":
      console.log("Faster than a speeding bullet, stronger than your wifi signal.");
      break;
  case "Wonder woman":
      console.log("Justice, truth, and golden lasso. what more do you need?");
      break;
  case "Spiderman":
    console.log("With great powercomes great responsibility... and web shooters.");
    break;
  case "Iron man":
    console.log("Genius, billionaire, playboy, philanthropist.");
    break;
  default:
    console.log("Hmm... I dont reccongize that hero. Must be from the multiverse.");
     
}
    */
//  THE CONDITIONAL OPERATOR (TERNARY)

// const age = 23;
// age >= 18 ? console.log("i like to drink wine") : console.log("i like to drink water");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

//  let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// let number = 7;
// let result = number % 2 === 0 ? "even" : "odd";
// console.log(result);

// CHALLENGE 4 SECTION1
// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 15/100 : bill * 20/100;
// console.log (`The bill was ${bill}, tip was ${tip}, the total value ${bill + tip}.`);

// // TEST DATA1
// const bill1 = 40;
// const tip1 = bill1 <= 300 && bill1 >= 50 ? bill1 * 15/100 : bill1 * 20/100;
// console.log(`The bill was ${bill1}, tip was ${tip1}, the total value ${bill1 +tip1}.`);

// // TEST DATA 2
// const bill2 = 430;
// const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 15/100 : bill2 * 20/100;
// console.log (`The bill was ${bill2}, tip was ${tip2}, the total value ${bill2 + tip2}.`);
