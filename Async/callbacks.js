function soyAsincrona(nombre, miCallback){
   setTimeout(function(){
        console.log("hola, "+nombre)
        miCallback(nombre);
    }, 1000); //esto lo que hace es que ejecuta 1 min despues
}

console.log("iniciando proceso")

function adios(nombre, otrocallback){
setTimeout(function () {
    console.log("adios, "+nombre)
    otrocallback();
}, 1000);
}

soyAsincrona('isaias', function(nombre){
    adios(nombre,function() {
        console.log("terminando proceso")
    }) 
});

