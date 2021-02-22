var frutas = ["manzana","platano","cereza","fresa"];
console.log(frutas); //imprimir todo el array
console.log(frutas[3]); //imprinir solo el elemento 3
console.log(frutas.length); //imprimir la longitud 

//agregar mas datos al final del array ->push
var masfrutas = frutas.push("uvas");
console.log(frutas[4]); //imprinir solo el elemento 3

//eliminar el ultimo elemento->pop
var eliminarultimo = frutas.pop("uvas");
console.log(frutas);

//agregar mas datos al inicio del array ->push
var nuevafruta = frutas.unshift("peras");
console.log(frutas);

//eliminar el elemento que este en el incio
var eliminarprimero = frutas.shift("uvas");
console.log(frutas);

//eliminar y ademas hallar la posicion del elemento que le pasemos del array
var posicion =frutas.indexOf("cereza");
console.log(posicion);
