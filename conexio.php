<?php
	$con=mysqli_connect("localhost","root","");
	$db=mysqli_select_db($con,"trafico_agil");

	$query="SELECT descripcion,ruta_imagen,categoria,nombre_usuario FROM publicacion INNER JOIN usuario_publicacion ON idpublicacion=publicacion_idpublicacion INNER JOIN usuario ON usuario_idusuario=idusuario";
?>