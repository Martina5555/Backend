//--------------------------------------CLASS Y FUNCIONES BASICAS--------------------------------
//1 cuando llamas a la variable del constructor dentro de su clase se llama con this.
//2 usar return cuando quiero un resultado de la funcion y no console.log para poder guardar los resultados en variables

console.log('llega') //no llega a la consola del navegador

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre
      this.apellido = apellido
      this.libros = libros
      this.mascotas = mascotas

// ---------------------------------------------------------------------------------------------------------------   
   
//antes definia otraMascota='dinosaurio'. Haciendo eso hardcodeas, haciendolo antes del push cada vez 
//que se pushea genera dinosaurio

this.addMascotas = function(otraMascota){
         mascotas.push(otraMascota)
         
     }
// ---------------------------------------------------------------------------------------------------------------     
//deberia funcionar porque push devuelve el length nuevo del array. Igualmente lo hago con .length
   
this.countMascotas = function(){
        console.log(this.mascotas.length)
    }

// ---------------------------------------------------------------------------------------------------------------   
//al principio no funcionaba porque mandaba el push con parametros y no con un objeto (name, author) vs ({name, author}) 
this.addBook = function({name, author}){
    libros.push ({name, author}) ;
    }

//let bookNames = this.libros.name - esto solo me sirve para un objeto porque no es array, tendria que crear uno por cada vez que se agrega un libro
    //opcion1
    this.getBookName = function (){
        for(libros of this.libros){
            console.log(` nombre del libro: ${libros.name}`) 
        }
    } 

// ---------------------------------------------------------------------------------------------------------------   
   
this.getFullName = function(){
        console.log(`${this.nombre } ${this.apellido}` )  
    }
    }
    
}

const Usuario1 = new Usuario ("Martina", 
"Granato", 
[{name: "Juegos del hambre", author: "x"},{name:"Legend", author: "xx"},{name:"Maze runner", author:"xxx"}], 
["perro", "gato"] );
console.log(Usuario1.getFullName(), Usuario1.addBook({name: "pepito el librito", author: "xxxx"}), Usuario1.getBookName(), Usuario1.addMascotas('dinosaurio'), 
Usuario1.countMascotas())

