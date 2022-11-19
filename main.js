// Variables
//E1
let factorial_number = 7;

// E2
let year = 1876;

// E3
let sentence = "Viva el futbol Siuuuuuuuuu";
let character = "U";

// E4
let secret_number = 77;

// E5
let space_sentence = "Draco dormiens nunquam titillandus";

// Definicion de funciones
// E1
function E1(a) {
  if (a == 0 ) {
    return 1;
  }
  return a*E1(a-1);
}

// E2
function E2(a) {
  if (((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0)) {
    console.log("El año",a,"SI es bisiesto\n");
  }else{
    console.log("El año",a,"NO es bisiesto\n");
  }
}

// E3
function E3(a,b) {
  let counter = 0;
  a = a.toLowerCase();
  b = b.toLowerCase();
  for (let i = 0; i < a.length; i++) {
    if (a[i] == b) {
      counter ++;
    }
  }
  console.log("El caracter",b,"se repite",counter,"veces en:",a,"\n");
}

// E4
function E4(a) {
  let min = 0;
  let max = 100;
  let tries = Math.floor(Math.random() * (max - min + 1) + min);
  while (tries != a && tries != 0) {
    if (tries > a) {
    console.log(tries,"es mayor que el numero secreto");
    }else{
    console.log(tries,"es menor que el numero secreto");
    }
    tries = Math.floor(Math.random() * (max - min + 1) + min);
  }
  if (tries == 0) {
    console.log("Programa detenido\n");
  }else{
    console.log(tries,"Si es el numero secreto\n");
  }
}

// E5
function E5(a) {
  let without_spaces = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] != " ") {
      without_spaces += a[i];
    }
  }
  console.log("La palabra sin espacios es:",without_spaces,"\n");
}

// LLamado de funciones
function main() {
  // E1
  console.log("Respuesta Ejercicio #1\n");
  console.log("El factorial de",factorial_number,"es:",E1(factorial_number),"\n");

  // E2
  console.log("Respuesta Ejercicio #2\n");
  E2(year);

  // E3
  console.log("Respuesta Ejercicio #3\n");
  E3(sentence,character);

  // E4
  console.log("Respuesta Ejercicio #4\n");
  E4(secret_number);

  // E5
  console.log("Respuesta Ejercicio #5\n");
  E5(space_sentence);
}
main();