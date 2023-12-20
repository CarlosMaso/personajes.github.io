function guardaPersonaje(){

    var div=document.getElementById("contenido"); //recojo la tabla 1

    var todo= div.innerHTML;

    var blob = new Blob([todo], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "personaje.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

}

function cargaPersonaje() {
    var archivoInput = document.getElementById("archivoInput"); // Obtener el input de tipo file

    var archivo = archivoInput.files[0]; // Obtener el primer archivo seleccionado

    if (archivo) {
        var extension = archivo.name.split('.').pop().toLowerCase(); // Separar la extensión

        if (extension === "txt") {
            var lector = new FileReader();

            lector.onload = function (evento) {
                var contenido = evento.target.result;
                console.log(contenido);
                
                var div = document.getElementById("contenido");
                div.innerHTML = contenido;
            };

            lector.readAsText(archivo);
        } else {
            alert('Solo se permiten archivos txt');
        }
    } else {
        alert('Selecciona un archivo');
    }
}

