// Funktioner til at køre de forskellige opgaver
function runOpgave1() {
    let alder = parseInt(prompt("Indtast din alder: "));
    if (alder >= 18) {
        console.log("Du er gammel nok til at stemme");
    } else {
        console.log("Du er for ung til at stemme");
    }
}

function runOpgave2() {
    let brugernavn = prompt("Indtast dit brugernavn: ");
    if (brugernavn === "admin") {
        console.log("Velkommen admin!");
    } else {
        console.log("Ukendt bruger");
    }
}

function runOpgave3() {
    let pris = parseFloat(prompt("Indtast prisen på varen: "));
    switch (true) {
        case pris < 50:
            console.log("Budgetpris");
            break;
        case pris >= 50 && pris <= 100:
            console.log("Mellemliggende pris");
            break;
        default:
            console.log("Luksuspris");
    }
}

function runOpgave4() {
    let enhed = prompt("Vælg enhed (meter, kilometer eller mile): ").toLowerCase();
    let længde = parseFloat(prompt("Indtast længde: "));
    let meter;
    switch (enhed) {
        case "meter":
            meter = længde;
            break;
        case "kilometer":
            meter = længde * 1000;
            break;
        case "mile":
            meter = længde * 1609.34;
            break;
        default:
            console.log("Ukendt enhed");
            return;
    }
    console.log(`${længde} ${enhed} svarer til ${meter} meter`);
}

function runOpgave5() {
    let alder = parseInt(prompt("Indtast din alder: "));
    let erStuderende = prompt("Er du studerende? (ja/nej)").toLowerCase();
    if (alder >= 18 && erStuderende === "ja") {
        console.log("Du er berettiget til studierabat");
    } else {
        console.log("Du er ikke berettiget til studierabat");
    }
}

function runOpgave6() {
    let brugernavn = prompt("Indtast dit brugernavn: ");
    let adgangskode = prompt("Indtast din adgangskode: ");
    if (brugernavn === "admin" && adgangskode === "password") {
        console.log("Login succesfuld");
    } else {
        console.log("Forkert brugernavn eller adgangskode");
    }
}

function runOpgave7() {
    let radius = parseFloat(prompt("Indtast radiusen af cirklen: "));
    if (radius > 0) {
        let areal = Math.PI * radius ** 2;
        console.log(`Cirkelens areal er ${areal.toFixed(2)}`);
    } else {
        console.log("Radius skal være positiv");
    }
}

function runOpgave8() {
    let karakterProcent = parseFloat(prompt("Indtast din karakter i procent: "));
    let karakter;
    if (karakterProcent >= 90) {
        karakter = 12;
    } else if (karakterProcent >= 80) {
        karakter = 10;
    } else if (karakterProcent >= 70) {
        karakter = 7;
    } else if (karakterProcent >= 60) {
        karakter = 4;
    } else if (karakterProcent >= 50) {
        karakter = 2;
    } else {
        karakter = 0;
    }
    console.log(`Din karakter svarer til ${karakter} på 12-tals skalaen`);
}

function runOpgave9() {
    let tal1 = parseFloat(prompt("Indtast det første tal: "));
    let tal2 = parseFloat(prompt("Indtast det andet tal: "));
    let tal3 = parseFloat(prompt("Indtast det tredje tal: "));
    let størsteTal;
    if (tal1 >= tal2 && tal1 >= tal3) {
        størsteTal = tal1;
    } else if (tal2 >= tal1 && tal2 >= tal3) {
        størsteTal = tal2;
    } else {
        størsteTal = tal3;
    }
    console.log(`Det største tal er ${størsteTal}`);
}

function runOpgave10() {
    let måned = parseInt(prompt("Indtast måneden (som et tal fra 1 til 12): "));
    let årstid;
    switch (måned) {
        case 12:
        case 1:
        case 2:
            årstid = "Vinter";
            break;
        case 3:
        case 4:
        case 5:
            årstid = "Forår";
            break;
        case 6:
        case 7:
        case 8:
            årstid = "Sommer";
            break;
        case 9:
        case 10:
        case 11:
            årstid = "Efterår";
            break;
        default:
            årstid = "Ukendt måned";
    }
    console.log(`Måneden svarer til årstiden: ${årstid}`);
}

// Kørsel af den valgte opgave
runOpgave2(); // Skift til den ønskede opgave (1 til 10) for at køre den
