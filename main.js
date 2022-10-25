// Variables
// e1
let lista1 = [-1,-2,-3,-14,-5,-6,-7,1,-2,24];
let mayor = 0;
//e2
let frase1 = "Lol";
let analisis1 = "";
let validacion1 = 1;
//e3
let matriz1 = [[1,0,0],[0,1,1],[0,1,0]]
let contador1 = 0;
//e4
let lista2 = [2,3,4,5,6,12,-1,-24,0,2,2,2,3,5,4,-1,2];
let repetidos = [];
//e5
let largo = 8;
let patron = "";
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
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i][j] == 0) {
        contador1 ++;
      }
    }    
  }
  console.log("La cantidad de ceros en la matriz es: ",contador1,"\n");
}
function e4(a,b) {
  for (let i = 0; i < a.length; i++) {
    let repeticiones = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[i] == a[j] && i != j && repeticiones == 0) {
        b.push(a[i]);
        a.splice(j,1);
        j--;
        repeticiones = 1;
      }
      if (a[i] == a[j] && i != j && repeticiones == 1) {
        a.splice(j,1);
        j--;
      }
    }
  }
  if (b.length > 0) {
    console.log("Los numeros repetidos son: ",b,"\n");
  }else{
    console.log("No se encontraron numeros repetidos en la lista de numeros recibidos\n");
  }
}
function e5(a,b) {
  console.log("Triangulo tamaño:",a,"\n");
  for (let i = 1; i <= a; i++) {
    b += "* ";
    console.log(b);
  }
}
//Ejecucion de Funciones
function main() {
  console.log("Respuesta Ejercicio #1\n");
  e1(lista1,mayor);
  console.log("Respuesta Ejercicio #2\n");
  e2(frase1,analisis1,validacion1);
  console.log("Respuesta Ejercicio #3\n");
  e3(matriz1);
  console.log("Respuesta Ejercicio #4\n");
  e4(lista2,repetidos);
  console.log("Respuesta Ejercicio #5\n");
  e5(largo,patron);
}
main();