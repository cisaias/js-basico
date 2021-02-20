var estudiantes = ["maria","sergio","rosa","daniel"];

function saludar_Estudiantes(estudiante){
console.log( 'hola, ' +estudiantes[i]);
}

for(var i=0 ; i < estudiantes.length; i++){
    console.log("estudiante: "+ i)
    saludar_Estudiantes();
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    console.log('hola, '+estudiante)
}