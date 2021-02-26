function hola(nombre, miCallback){
    setTimeout(function(){
         console.log("hola, "+nombre)
         miCallback(nombre);
     }, 1000); //esto lo que hace es que ejecuta 1 min despues
 }
 
function hablar(callbackhablar) {
    setTimeout(function(){
        console.log("bla bla bla bla bla")
        callbackhablar();
    }, 1000);
}
 
 function adios(nombre, otrocallback){
 setTimeout(function () {
     console.log("adios, "+nombre)
     otrocallback();
 }, 1000);
 }


function conversacion(nombre,veces, Callback) {
    if(veces>0){
        hablar(function () {
            conversacion('isaias',--veces,Callback);
        })
    }else{
        adios('isaias',Callback)
    }
}
 
console.log('iniciando proceso');
hola('isaias',function () {
    conversacion('isaias',4,function () {
        console.log('proceso terminado')
    })
})

 /*console.log("iniciando proceso")
 soyAsincrona('isaias', function(nombre){
     hablar(function () {
        adios(nombre,function() {
            console.log("terminando proceso")
        }) ; 
     });
    
 });*/

