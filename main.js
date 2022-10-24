// Variables
// e1
let lista1 = [-1,-2,-3,-14,-5,-6,-7,1,-2,24];
let mayor = 0;
//e2
let frase1 = "Lol";
let analisis1 = "";
let validacion1 = 1;
//Funciones
function e1(a,b) {
  for (let i = 0; i < a.length; i++) {
    if (i == 0) {
      b = a[i];
    }
    if (a [i] > b) {
      b = a [i];
    }
  }
  console.log(b);
}
function e2(a,b,c) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] != " ") {
      b += a[i];
    }    
  }
  b = b.toLowerCase();
  let j = b.length-1;
  for (let i = 0; i < b.length; i++) {
    if (b[i] != b[j]) {
      c = 0;
    }
    j--;
  }
  if (c == 1) {
    console.log("La frase:", a,"SI es palindromo");    
  }else{
    console.log("La frase:", a,"NO es palindromo");
  }
}
function e3() {
}
function e4() {
}
function e5() {
}
//Ejecucion de Funciones
function main() {
  e1(lista1,mayor);
  e2(frase1,analisis1,validacion1);
  e3();
  e4();
  e5();
}
main();