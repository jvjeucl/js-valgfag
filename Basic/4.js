// // 1. Logisk AND:
let x = 5;
let y = 7;
if (x > 0 && y > 0) {
    console.log("Både x og y er større end 0");
} else {
    console.log("Mindst én af x eller y er ikke større end 0");
}

// // 2. Logisk OR:
let age = 20;
let isStudent = true;
if (age > 18 || isStudent) {
    console.log("Enten er alderen over 18 eller personen er studerende");
} else {
    console.log("Alderen er under 18 og personen er ikke studerende");
}

// // 3. Logisk NOT:
let isLogged = false;
if (!isLogged) {
    console.log("Brugeren er ikke logget ind");
} else {
    console.log("Brugeren er logget ind");
}

// // 4. Simple betingelser:
// let number = -5;
if (number > 0) {
    console.log("Tallet er positivt");
} else if (number < 0) {
    console.log("Tallet er negativt");
} else {
    console.log("Tallet er nul");
}

// // 5. Betingelser med flere grene:
// let num = -10;
// if (num > 0) {
//     console.log("Tallet er positivt");
// } else if (num < 0) {
//     console.log("Tallet er negativt");
// } else {
//     console.log("Tallet er nul");
// }

// // 6. Betingelser med flere betingelser:
let num2 = 12;
if (num2 % 2 === 0 && num2 > 10) {
    console.log("Tallet er et lige tal og større end 10");
} else {
    console.log("Tallet er enten ikke et lige tal eller det er ikke større end 10");
}

// // 7. Nestede betingelser:
let num3 = -3;
if (num3 > 0) {
    if (num3 % 2 === 0) {
        console.log("Tallet er positivt og lige");
    } else {
        console.log("Tallet er positivt og ulige");
    }
} else if (num3 < 0) {
     if (num3 % 2 === 0) {
         console.log("Tallet er negativt og lige");
     } else {
         console.log("Tallet er negativt og ulige");
     }
 } else {
     console.log("Tallet er nul");
 }

// // 8. Logisk kombination:
// let z = 15;
// if (z > 10 && z < 20) {
//     console.log("x er mellem 10 og 20");
// } else {
//     console.log("x er enten mindre end 10 eller større end 20");
// }

// // 9. Betingelser med strenge:
let str = "hello";
if (str === "hello") {
    console.log("Strengen er lig med 'hello'");
} else {
    console.log("Strengen er ikke lig med 'hello'");
}

// // 10. Betingelser med arrays:
// let array = [1, 2, 3, 4, 5];
// let element = 3;
// if (array.includes(element)) {
//     console.log("Elementet er til stede i arrayet");
// } else {
//     console.log("Elementet er ikke til stede i arrayet");
// }

