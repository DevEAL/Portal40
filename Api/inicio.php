<?php
	$destino = "backend@enalgunlugarestudio.com";
	$nombre = $_POST['Nombre'];
	$correo = $_POST['Correo'];
	$Celular = $_POST['Celular'];
	$Mensaje = $_POST['Mensaje'];

	$contenido = "Nombre: {$nombre} \nCorreo: {$correo} \nTeléfono: {$Celular} \nMensaje: {$Mensaje}";

	mail($destino, "Contacto", $contenido);

	header("Location:/Portal40_mie/#/");
?>