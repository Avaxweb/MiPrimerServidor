<?php  
$conectar=@mysqli_connect('localhost','root','')or die("conexion fallida");
$db=@mysqli_select_db($conectar,'Microsoft') or die("conexion exitosa");
?>