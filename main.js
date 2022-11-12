// Variables 
let format = 320;
let hora = 0;
let min = 0;
// Funciones 
function convert(a,b,c) {
  while (a != 0) {
    if (a > 60) {
      a -= 60;
      b += 1
    }else{
      c += a;
      a = 0;
    }
  }
  console.log("El nuevo formato es:",b,"Horas",c,"Minutos");
}
function main() {
  convert (format,hora,min);
}
main();