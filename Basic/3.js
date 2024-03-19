// 1. if-statement til at kontrollere om variabel x er større end 10
let x = 9;
if (x > 10) {
    console.log("x er større end 10");
}

// 2. if-statement til at kontrollere om et tal er positivt, negativt eller nul
let number = -5;
if (number > 0) {
    console.log("Tallet er positivt");
} else if (number < 0) {
    console.log("Tallet er negativt");
} else {
    console.log("Tallet er nul");
}

// 3. if-statement til at kontrollere om en person er berettiget til at stemme
let age = 18;
if (age >= 18) {
    console.log("Du kan stemme");
}

// 4. if-statement til at kontrollere om en given streng er lig med "Javascript valgfag"
let course = "Javascript valgfag";
if (course === "Javascript valgfag") {
    console.log("Velkommen til Javascript valgfag");
}

// 5. if-statement til at kontrollere om et tal er lige eller ulige
let num = 9;
if (num % 2 === 0) {
    console.log("Tallet er lige");
} else {
    console.log("Tallet er ulige");
}

// 6. switch-case statement til at logge hvilken dag det er baseret på et tal
let day = 4;
switch (day) {
    case 1:
        console.log("Mandag");
        break;
    case 2:
        console.log("Tirsdag");
        break;
    case 3:
        console.log("Onsdag");
        break;
    // og så videre for hver dag i ugen
    default:
        console.log("Ugyldig dag");
}

// 7. switch-case statement til at logge karakteren baseret på en given karakter
let grade = "B";
switch (grade) {
    case "A":
        console.log("12");
        break;
    case "B":
        console.log("10");
        break;
    case "C":
        console.log("7");
        break;
    // og så videre for hver karakter i karakterformatet
    default:
        console.log("Ugyldig karakter");
}

// 8. switch-case statement til at logge en besked baseret på den valgte frugt
let fruit = "æble";
switch (fruit) {
    case "æble":
        console.log("Du har valgt æble");
        break;
    case "banan":
        console.log("Du har valgt banan");
        break;
    case "appelsin":
        console.log("Du har valgt appelsin");
        break;
    // og så videre for hver type af frugt
    default:
        console.log("Ukendt frugt");
}

// 9. switch-case statement til at logge antallet af dage i en given måned
let month = "februar";
switch (month) {
    case "januar":
    case "marts":
    case "maj":
    case "juli":
    case "august":
    case "oktober":
    case "december":
        console.log("31 dage");
        break;
    case "april":
    case "juni":
    case "september":
    case "november":
        console.log("30 dage");
        break;
    case "februar":
        console.log("28 eller 29 dage, afhængigt af skudår");
        break;
    default:
        console.log("Ukendt måned");
}

// 10. switch-case statement til at logge en besked baseret på typen af køretøj
let vehicle = "bil";
switch (vehicle) {
    case "bil":
        console.log("Du kører i en bil");
        break;
    case "cykel":
        console.log("Du cykler");
        break;
    case "bus":
        console.log("Du er i en bus");
        break;
    // og så videre for hver type af køretøj
    default:
        console.log("Ukendt køretøj");
}

let alder = 19;

if (alder >= 18) {
  console.log("Du må komme ind");
    /* code to run if condition is true */
  } else {
    console.log("Du må ikke komme ind");
    /* run some other code instead */
  }
  // let alder = 80
  // switch (alder) {
  //   case 17:
  //     break;
  
  //   case 18:
  //     console.log("Du er 18")
  //     break;
  
  //   default:
  //     console.log("Du er ikke 17 eller 18");
  //     break;
  // }
  