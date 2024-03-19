// For-løkker:
console.log("For-løkker:");
console.log("1. Tal fra 1 til 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("2. Alle lige tal fra 2 til 10:");
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log("3. De første 5 bogstaver i alfabetet:");
for (let i = 97; i < 97 + 5; i++) {
    console.log(String.fromCharCode(i));
}

console.log("4. Tallene fra 10 til 1 i faldende rækkefølge:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// While-løkker:
console.log("\nWhile-løkker:");
console.log("5. Tal fra 1 til 5:");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

console.log("6. Alle lige tal fra 2 til 10:");
let k = 2;
while (k <= 10) {
    console.log(k);
    k += 2;
}

console.log("7. De første 5 bogstaver i alfabetet:");
let letter = 'a';
let count = 0;
while (count < 5) {
    console.log(letter);
    letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    count++;
}

console.log("8. Tallene fra 10 til 1 i faldende rækkefølge:");
let l = 10;
while (l >= 1) {
    console.log(l);
    l--;
}

// For...of-løkker:
console.log("\nFor...of-løkker:");
console.log("9. Hvert element i et array af tal:");



const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);
}

console.log("10. Hvert bogstav i en streng:");
const str = "Hello";
for (let char of str) {
    console.log(char);
}
