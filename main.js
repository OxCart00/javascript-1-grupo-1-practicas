// Variables
//e4
let lista2 = [2,3,4,5,6,12,-1,-24,0,2,2,2,3,5,4,-1,2];
let repetidos = [];
//Funciones
function e1() {
}
function e2() {
}
function e3() {
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
    console.log("Los numeros repetidos son: ",b);
  }else{
    console.log("No se encontraron numeros repetidos en la lista de numeros recibidos");
  }
}
function e5() {
}
//Ejecucion de Funciones
function main() {
  e1();
  e2();
  e3();
  e4(lista2,repetidos);
  e5();
}
main();