<?php 
include("CONEXION.php");
$NOMBRE=$_POST['NOMBRE'];
$USUARIO=$_POST['USUARIO'];
$CONTRASEÑA=$_POST['CONTRASEÑA'];
$msql="INSERT INTO microsoft VALUES ('$NOMBRE', '$USUARIO','CONTRASEÑA')";
$ejecutar=@mysqli_query($conectar,$msql);










?>