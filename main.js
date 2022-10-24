// Variables
//e3
let matriz1 = [[1,0,0],[0,1,1],[0,1,0]]
let contador1 = 0;
//Funciones
function e1() {
}
function e2() {
}
function e3(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i][j] == 0) {
        contador1 ++;
      }
    }    
  }
  console.log("La cantidad de ceros en la matriz es: ",contador1);
}
function e4() {
}
function e5() {
}
//Ejecucion de Funciones
function main() {
  e1();
  e2();
  e3(matriz1);
  e4();
  e5();
}
main();