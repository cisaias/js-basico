function hola(nombre){
return new Promise(function (resolve, inject) {
        setTimeout(function(){
            console.log("hola, "+nombre)
            resolve(nombre);
        }, 1000); //esto lo que hace es que ejecuta 1 min despues
    });

 };
 
function hablar() {
    return new Promise(function (resolve,inject) {
        setTimeout(function(){
            console.log("bla bla bla bla bla")
            //resolve();
            inject('hay un error')
        }, 1000); 
    });
};
 
 function adios(nombre){
     return new Promise(function (resolve, inject) {
         setTimeout(function () {
            console.log("adios, "+nombre)
            resolve();
    }, 1000);
     });
    
 };
 //--
 console.log('iniciando el proceso')
 hola('carlos')
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
     console.log('terminado el proceso')
    })
    .catch(error=>{
        console.log('ha habido un error')
        console.log(error)
    })
