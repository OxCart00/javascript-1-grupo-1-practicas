// Variables
// e1
let lista1 = [-1,-2,-3,-14,-5,-6,-7,1,-2,24];
let mayor = 0;
//e2
let frase1 = "Lol";
let analisis1 = "";
let validacion1 = 1;
//e3
let n3 = 18;
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
  console.log("El numero mayor es:",b,"\n");
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
    console.log("La frase:", a,"SI es palindromo\n");    
  }else{
    console.log("La frase:", a,"NO es palindromo\n");
  }
}
function e3(a) {
  if ( (a & 1) == 0) {
    console.log("El numero",a,"es PAR");
  }else{
    console.log("El numero",a,"es IMPAR");
  }
}
//Ejecucion de Funciones
function main() {
  console.log("Respuesta Ejercicio #1\n");
  e1(lista1,mayor);
  console.log("Respuesta Ejercicio #2\n");
  e2(frase1,analisis1,validacion1);
  console.log("Respuesta Ejercicio #3\n");
  e3(n3);
}
main();