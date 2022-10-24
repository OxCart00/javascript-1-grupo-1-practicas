// Variables
// e1
let lista1 = [-1,-2,-3,-14,-5,-6,-7,1,-2,24];
let mayor = 0;
//e2
let frase1 = "Lol";
let analisis1 = "";
let validacion1 = 1;
//Funciones
function e1(a) {
  for (let i = 0; i < lista1.length; i++) {
    if (i == 0) {
      mayor = lista1[i];
    }
    if (lista1 [i] > mayor) {
      mayor = lista1 [i];
    }
  }
  console.log(mayor);
}
function e2() {
  for (let i = 0; i < frase1.length; i++) {
    if (frase1[i] != " ") {
      analisis1 += frase1[i];
    }    
  }
  analisis1 = analisis1.toLowerCase();
  let j = analisis1.length-1;
  for (let i = 0; i < analisis1.length; i++) {
    if (analisis1[i] != analisis1[j]) {
      validacion1 = 0;
    }
    j--;
  }
  if (validacion1 == 1) {
    console.log("La frase:", frase1,"SI es palindromo");    
  }else{
    console.log("La frase:", frase1,"NO es palindromo");
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
  e1();
  e2();
  e3();
  e4();
  e5();
}
main();