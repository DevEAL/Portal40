<?php
	$destino = "";
	$nombre = $_POST['Nombre'];
	$correo = $_POST['Correo'];
	$Celular = $_POST['Celular'];
	$Mensaje = $_POST['Mensaje'];

	$contenido = "Nombre: {$nombre} \nCorreo: {$correo} \nTeléfono: {$Celular} \Mensaje: {$Mensaje}";

	mail($destino, "Contacto", $contenido);

	header("Location:/Portal40_mie/#/");
?>