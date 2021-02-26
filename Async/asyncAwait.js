 async function hola(nombre){
     return new Promise(function (resolve, inject) {
        setTimeout(function(){
            console.log("hola, "+nombre)
            resolve(nombre);
        }, 1000); //esto lo que hace es que ejecuta 1 min despues
     })
    
 }
 
async function hablar() {
    return new Promise(function (resolve, inject) {
    setTimeout(function(){
        console.log("bla bla bla bla bla")
        resolve();
    }, 1000);
});
    
}
 
async function adios(nombre){
    return new Promise(function (resolve, inject) {
    setTimeout(function () {
        console.log("adios, "+nombre)
        resolve();
        }, 1000);
    });  
 }

 async function main() {
     let nombre = await hola('isaias');
     await hablar();
     await adios(nombre);
     console.log('fin');  
 }
 console.log('inicio');
 main();
