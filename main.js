/**
 Objetos
 */
const libro ={
  titulo:'Harry Potter',
  fecha: '20/20/20',
  editorial: 'Salamandra',
  autor: 'J. K. Rowling',
  categoria: 'Cuentos',
  // El siguiente metodo cambia el valor de la propiedad fecha por la variable indicada en la funcion
  modFecha: function(nuevaFecha){
    this.fecha = nuevaFecha;
  },
  //En el siguiente metodo los valores de todas las propiedades se cambian por la variable de la funcion, en caso de no especificar nada en la variable se cambiaran por un string vacio.
  reset: function (seteo = '') {
    this.titulo = seteo;
    this.fecha = seteo;
    this.editorial = seteo;
    this.autor = seteo;
    this.categoria = seteo;
  },
  //En el siguiente metodo el primer valor de la funcion indica la propiedad que se desea afectar, el segundo indica el valor que se busca cambiar y el tercero indica el nuevo valor de la propiedad.
  modSpecific: function(propiedad, search, change){
    if (libro [propiedad] === search) {
      libro [propiedad] = change;
    }
  },
  obtenerPropiedades: function(){
    return this.titulo + ' | ' + this.fecha + ' | ' +  this.editorial + ' | ' +  this.autor + ' | ' +  this.categoria + '\n';
  }
};

console.log(libro.obtenerPropiedades());
libro.modFecha('02/9/20');
console.log(libro.obtenerPropiedades());
libro.modSpecific('categoria','Cuentos','Fantasia');
console.log(libro.obtenerPropiedades());
libro.reset();
console.log(libro.obtenerPropiedades());