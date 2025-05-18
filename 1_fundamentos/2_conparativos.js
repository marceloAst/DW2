1 + "mundo"         // "1mundo"
"mundo" + 1 + 2     // "mundo12"
1 + 2 + "mundo"     // "3mundo"

false || false && true       // false
true || false && false       // true
(true && !true) || false     // false
(!false && true) || true     // true
(false && true) || false || !true  // false
false && true || false && true     // false
false || true || false && true     // true

let numero = 5;

if (numero % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
