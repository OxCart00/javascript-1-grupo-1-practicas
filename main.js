// Variables 
let numeros = [1, 7, 3, 4, 8, 6, 12, 8, 9];
let sumatoria = 0;
let min = 0;
let max = 0;

// Calculos
const calculos = {
  promedio: function (a, b) {
    for (let i = 0; i < a.length; i++) {
      b += a[i];
    }
    console.log("El promedio de los numeros es:", (b / a.length));
  },
  mediana: function (a) {
    if (a.length % 2 == 0) {
      let mitad = a.length / 2;
      console.log("La mediana de los numeros es:", ((a[mitad] + a[mitad - 1]) / 2));
    } else {
      console.log("La mediana de los numeros es:", (a[(a.length - 1) / 2]));
    }
  },
  bordes: function (a, b, c) {
    for (let i = 0; i < a.length; i++) {
      if (i == 0) {
        b = a[i];
        c = a[i];
      } else {
        if (a[i] > b) {
          b = a[i];
        }
        else if (a[i] < c) {
          c = a[i];
        }
      }
    }
    console.log("El valor maximo entre los numeros es:", b);
    console.log("El valor minimo entre los numeros es:", c);
  }
};
// Llamado de funciones
function main() {
  calculos.promedio(numeros, sumatoria);
  calculos.mediana(numeros);
  calculos.bordes(numeros, max, min);
}
main();