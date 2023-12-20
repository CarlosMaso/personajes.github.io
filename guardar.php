<?php

// Nombre del archivo que se descargará
$nombreArchivo = "personaje.json";

// Contenido del archivo JSON (puedes crear tu propio contenido)
$todo= $_POST["data"];

$json= json_encode($todo);

// Configuración del encabezado para forzar la descarga
header("Content-Type: application/json");
header("Content-Disposition: attachment; filename=$nombreArchivo");

// Envía el contenido del JSON al navegador
echo $json;


?>