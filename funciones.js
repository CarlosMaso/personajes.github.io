function guardaPersonaje(){

    var div=document.getElementById("contenido"); //recojo la tabla 1

    var todo= div.innerHTML;

    //Esto sirve para pasar por post a php desde javascript
    $.post("./guardar.php", {data:todo},function(datos) {

        if(datos){

            var blob = new Blob([datos], { type: "application/json" });
            var url = URL.createObjectURL(blob);
            var a = document.createElement("a");
            a.href = url;
            a.download = "personaje.json";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
}

function cargaPersonaje() {
    var archivoInput = document.getElementById("archivoInput"); // Obtener el input de tipo file

    var archivo = archivoInput.files[0]; // Obtener el primer archivo seleccionado

    if (archivo) {
        var extension = archivo.name.split('.').pop().toLowerCase(); // Separar la extensión

        if (extension === "json") {
            var lector = new FileReader();

            lector.onload = function (evento) {
                var contenido = evento.target.result;
                console.log(contenido);
                
                var div = document.getElementById("contenido");
                div.innerHTML = contenido;
            };

            lector.readAsText(archivo);
        } else {
            alert('Solo se permiten archivos JSON');
        }
    } else {
        alert('Selecciona un archivo');
    }
}

