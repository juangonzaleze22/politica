<?php
///////////////////////////////////////////////// includes///////////////////////////////////
error_reporting(E_ALL);
ini_set("display_errors", 1);
////////////////////////////////////////////////////////////////////////////////////////////////
//Datos de conexion.

$consulta = ('select * from info');
//clase para la conexion
class conexion {
//funcion para la conexion a mysql.
function conectar($consulta)
{
$conexion = mysqli_connect('localhost','dell','','politica');

$error = mysqli_connect_error($conexion); 
$resultado = mysqli_query($conexion,$consulta);
$cerrado = mysqli_close($conexion);
return($resultado);

}


}
/* $s = new conexion;
 $r= $s ->conectar($consulta);
print_r ($r);*/