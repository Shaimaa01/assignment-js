//assignment-2
document.write(
  "<h1 style='color: blue;font-size: 80px; font-weight: bold; text-align: center; font-family: Arial'>Elzero</h1>"
);

//assignment-3
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size:40px",
  "color:green; font-size:40px; font-weight:bold ",
  "color:white; font-size:40px; background-color:blue"
);

//assignment-4
console.group("Group1");
console.log("Message one");
console.log("Message Two");

console.group("Child Group");
console.log("Message one");
console.log("Message Two");

console.group("Grand Child Group");
console.log("Message one");
console.log("Message Two");

console.groupEnd(); // Close the "Grand Child Group"
console.groupEnd(); // Close the "Child Group"
console.groupEnd(); // Close the "Group1"
console.groupEnd(); // Close the "Group1"

console.group("Group2"); // Start a new group "Group2"
console.log("Message one");
console.log("Message Two");
console.groupEnd(); // Close the "Group2"
//i do not understand what is going on? how just click to relod the page make different Response!

//assignment-5
console.table(["jon", "tom", "lionardo", "misse", "lemon"]);

//assignment-6

/*console.log("Iam In Console");
document.write("Iam In Page");*/

//1/9/2023-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//assignment 1===============================================================================
// Add Variables Here
let numberOne = 10;
let numberTwo = 20;
// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberOne + "\n" + numberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberOne}
${numberTwo}`);
/*
  Template Literals Way
  20
  10
*/

//assignment 2=================================================================================
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//assignment 3==================================================================================
/*
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``*/

console.log(
  '\'\'I\'m In \n \\\\ \n Love \\\\ """ \'\'\' \n ++ With ++ \n \\"""\\""" \n ""Javascript""\'\'\''
);

//assignment 4====================================================================================
let c = 21;
let d = 20;
let result = `_${c}_`;
result += `${d}${c}_`.repeat(3);
result += `${d}_`;

console.log(); // _21_2021_2021_2021_20_
console.log(result);

// chalange class17===============================================================================
let DescriptionAaa = "Elzero Web School",
  DateAaa = "25/10",
  titleAaa = "Elzero";

let component17 = ` 
  <div>
    <h3${titleAaa}</h3>
    <p>${DescriptionAaa}</p>
    <span>${DateAaa}</span>
  </div>`.repeat(3);
document.write(component17);

//4/9/2023-------------------------------------------------------------------------------------------------------------

//assignment 1=================================
// Replace ? With Arithmetic Operators
let a10 = 10;
let a20 = 20;
let a15 = 15;
let a3 = 3;
let a190 = 190;
let a400 = 400;
console.log(++a10 * a20 - (++a15 + ++a3) + (a190 + --a10) - a400);
console.log(((10 * 20 * 15) % 3) * 190 * 400);

//assignment 2=====================================
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log(++num + --num - +true); // 6

// Soultion Four
console.log(num / num + ++num + true); // 6

// Solution Five
console.log(++num + +true); // 6

// Solution Six
console.log(++num); // 6

//assignment 3===========================================
let num2 = "10";
// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(++num2 + --num2 + -true); // 20

// Solution Three
console.log((num2 / num2 + +true) * num2); // 20

// Solution Four
console.log(+num2 + --num2 + --num2 - --num2); // 20

//assignment 4============================================
let points = 10;

// Write Your Code Here

points += 3;

console.log(points); // 13

// Write Your Code Here

points -= 5;

console.log(points); // 8;

// 14/9/2023

//assignment 1==================================================
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.max(500, 100, 100000)); // 100000
console.log(Math.round(parseFloat(100000.4))); // 100000
console.log(10 ** 5); // 100000
console.log(+(100000.4444).toFixed()); // 100000
console.log(Number("100000")); // 100000
console.log(parseInt(100000.99)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.round(100000, 4)); // 100000
console.log(Math.trunc(100000.555)); // 100000

//assignment 2==================================================
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//assignment 3==================================================
console.log(
  (++Number.MAX_SAFE_INTEGER + ++Number.MIN_SAFE_INTEGER) *
    (++Number.MAX_SAFE_INTEGER + ++Number.MIN_SAFE_INTEGER) *
    (++Number.MAX_SAFE_INTEGER + ++Number.MIN_SAFE_INTEGER) *
    (++Number.MAX_SAFE_INTEGER + ++Number.MIN_SAFE_INTEGER)
); // 16
console.log(`${Number.MAX_SAFE_INTEGER}`.length);
console.log(Number.MAX_SAFE_INTEGER.toFixed().length);

//assignment 4==================================================
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//assignment 5===================================================
let num1 = 10;

console.log(+Number.isInteger(num1) + +Number.isInteger(num1)); // 2

//assignment 6===================================================
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10

//assignment 7=====================================================
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
Math.floor(Math.random() * 5);

//==============================================================================================================================

//assignment 1=======================================================
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee

//assignment 2=======================================================
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

//16/9/2023

// 31 / 32

//assignment 1========================================================
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(-(-50) > +"-40"); // true
console.log(+10 <= -"-40"); // true
console.log(+"10" === 10); // true
console.log(!(20 == false)); // true

//assignment 2========================================================
let num3 = 10;
let num4 = 20;

console.log(num3 != num4); // true
console.log(num3 !== num4); // true
console.log(num4 > num3); // true
console.log(num3 < num4); // true
console.log(typeof num3 === typeof num4); // true
console.log(num3 == num4 - num3); // true

//assignment 3========================================================
let a1 = 20;
let b1 = 30;
let c1 = 10;

console.log((a1 != b1 && a1 > c1) || a1 == b1); // true
console.log(a1 <= b1 || a1 == c1); // true
console.log(!(a1 > b1) && !(a1 == b1) && !(a1 == c1) && !(a1 == c1)); // true

//==============================================================================================================================

// 33 /37

//assignment 1=========================================================

// Test Case 1
let num5 = 20; // "009"

if (num5 < 10) {
  console.log(`00${num5}`);
  5;
} else if (num5 > 10 && num5 < 100) {
  console.log(`0${num5}`);
} else if (num5 >= 100) {
  console.log(num5);
}

//assignment 2=============================================================

let num8 = 9;
let str = "9";
let str2 = "20";

// Output
("{num8} Is The Same Value As {str}");
("{num8} Is The Same Value As {str} But Not The Same Type");
("{num8} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");

if (num8 == str) {
  console.log(`{num8} Is The Same Value As {str}`);
}

if (num8 == str && num8 !== str) {
  console.log(`{num8} Is The Same Value As {str} But Not The Same Type`);
}

if (num8 != str2 || num8 !== str2) {
  console.log(`{num8} Is Not The Same Value Or The Same Type As {str2}`);
}

if (typeof str === typeof str2 && str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

//assignment 3============================================================

let num9 = 10;
let num10 = 30;
let num11 = "30";

// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

if (num11 > num9 && num11 !== num9 && num11 == num10 && num11 !== num10) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number" +
      "\n" +
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" +
      "\n" +
      "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}

//assignment 4===============================================================

// Edit What You Want Here

let num1a = 1;
let num2a = 0;
let num3a = +"1";
let num4a = 23;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1a > num2a) {
  console.log("True");
} else {
  console.log("False");
}

// num1a = 11 [pre increment]

// Condition 2

if (num1a > num2a && num1a < num4a) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1a > num2a && num1a === num3a) {
  console.log("True");
} else {
  console.log("False");
}
//num1a = 10
// Condition 4

if (num1a + num2a < num4a) {
  console.log("True");
} else {
  console.log("False");
}
//numa1 = 9
// Condition 5

if (num1a + num3a < num4a) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1a + num2a + num3a < num4a) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4a - (num1a + num3a) + num2a === 21) {
  console.log("True");
} else {
  console.log("False");
}

// 38 / 39

let day = "   friday  ";

day = day.trim();
day = day.charAt(0).toUpperCase() + day.substring(1); // هيقطع من واحد لحد الاخر
console.log(day);
// You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

// let day= "  World";
// Output => "Its Not A Valid Day"

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  case "World":
    console.log("Its Not A Valid Day");
    break;
}
