// Variables
// e1
let n1 = 5;
let f1 = 1;
//e2
let n2 = 5;
//e3
let n3 = 17;
//Funciones
function e1(a,b) {
  if (a == 0) {
    console.log("el factorial de",a,"es",1);
  }else{
    for (let i = 2; i <= a; i++) {
      b *= i;
    }
    console.log("El factorial de",a,"es",b,"\n");
  }
}
function e2(a) {
  if (a == 0 ) {
    return 1;
  }
  return a*e2(a-1);
}
function e3a(a) {
  if (a == 0){
    return 1;
  }
  return e3b(a-1);
}
function e3b(a) {
  if (a == 0) {
    return 0;
  }
  return e3a(a-1)
}
//Ejecucion de Funciones
function main() {
  console.log("Respuesta Ejercicio #1\n");
  e1(n1,f1);
  console.log("Respuesta Ejercicio #2\n");
  console.log("El factorial de",n2,"es:",e2(n2),"\n");
  console.log("Respuesta Ejercicio #3\n");
  if (e3a(n3) == 1) {
    console.log("El numero",n3,"es par\n");
  }else if (e3b(n3) == 1) {
    console.log("El numero",n3,"es impar\n"); 
  }
}
main();