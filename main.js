// Variables
// e1
let n1 = 15;
//e2
let n2 = 23;
//e3
let p1 = "Oscar";
let reversa = "";
//e4
let l1 = ["a","e","i","o","u"];
let p2 = "esta es mi palabra"
let pilibri = "";
//e5
let p3 = "avanzando";
let p3orden = "";
let abc = "a,b,c,d,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z";
//Funciones
function e1(a) {
  if (a % 2 == 0) {
    console.log("El numero es PAR");
  }else{
    console.log("El numero es IMPAR");
  }
  if (a % 3 == 0) {
    console.log("El numero es divisible entre 3");
  }else{
    console.log("El numero NO es divisible entre 3");
  }
  if (a % 5 == 0) {
    console.log("El numero es divisible entre 5");
  }else{
    console.log("El numero NO es divisible entre 5");
  }
  console.log("");
}
function e2(a) {
  for (let i = 1; i <= a; i++) {
    console.log(i);
  }
}
function e3(a,b) {
  let i = a.length-1;
  while (i >= 0) {
    b += (a[i]);
    i --;
  }
  console.log(a," | ",b);
}
function e4(a,b,c) {
  let validacion = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < c.length; j++) {
      if (a[i] == c[j]) {
        validacion = 1;
      }
    }
    if (validacion == 1) {
      b += "i";
    }else{
      b += a[i];
    }
    validacion = 0;
  }
  console.log(a, " | ",b);
}
function e5(a,b,c) {
  for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] == c[i]) {
        b += a[j];
      }
    }
  }
  console.log(a,b);
}
//Ejecucion de Funciones
function main() {
  console.log("Respuesta Ejercicio #1\n");
  e1(n1);
  console.log("Respuesta Ejercicio #2\n");
  e2(n2);
  console.log("Respuesta Ejercicio #3\n");
  e3(p1,reversa);
  console.log("Respuesta Ejercicio #4\n");
  e4(p2,pilibri,l1);
  console.log("Respuesta Ejercicio #5\n");
  e5(p3,p3orden,abc);
}
main();