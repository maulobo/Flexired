<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

    // Configuración del correo
    $destinatario = "maurolobo.ml@gmail.com"; // Cambia esto por la dirección a la que quieres enviar el correo
    $asunto = "Nuevo formulario de contacto";

    // Cuerpo del correo
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Mensaje:\n$mensaje";

    // Cabeceras del correo
    $cabeceras = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    mail($destinatario, $asunto, $cuerpo, $cabeceras);
    echo("iiujuuuuu")
    header("Location: /");
    exit();
}
?>