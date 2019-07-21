<?php
///////////////////////////////////////////////// includes///////////////////////////////////
error_reporting(E_ALL);
ini_set("display_errors", 1);
include('conexion.php');
////////////////////////////////////////////////////////////////////////////////////////////////

$datos = $_POST['datos'];


if ($datos == 1) {
    $consultar = $_POST['consultar'];
    $consulta = ("select * from info where cedula ='$consultar' ");
    $_sql = new conexion();
    $h = $_sql->conectar($consulta);
    foreach ($h as $key => $value) {
        print_r(json_encode($value));
    }
} elseif ($datos == 2) {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $zona = $_POST['zona'];
    $correo = $_POST['correo'];
    $colegio = $_POST['colegio'];
    $mesa = $_POST['mesa'];
    $coordinador = $_POST['coordinador'];
    $carpeta = $_POST['carpeta'];
    $planilla = $_POST['planilla'];
    $consulta = ("INSERT INTO politica.electores(`nombre`,`apellido`,`correo`,`telefono`,`colegio`,`mesa`,`zona`,`coordinador`,`carpeta`,`planilla`)
                                 VALUES('$nombre','$apellido','$correo','$telefono','$colegio','$mesa', '$zona','$coordinador','$carpeta','$planilla');");
    $_sql = new conexion();
    $h = $_sql->conectar($consulta);
    print_r($h);
} elseif ($datos == 3) {
    $username = $_POST['usuario'];
    $pass = $_POST['pass'];
    $consulta = ("SELECT * FROM politica.usuarios where usuario = '$username' and contraseña= '$pass'");
    $_sql = new conexion();
    $h = $_sql->conectar($consulta);
    foreach ($h as $key => $value) {
        print_r(json_encode($value));
    }
} elseif ($datos == 4) {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $zona = $_POST['zona'];
    $correo = $_POST['correo'];
    $consulta = ("INSERT INTO politica.coordinadores(`nombre`,`apellido`,`correo`,`telefono`,`zona`)
                                     VALUES('$nombre','$apellido','$correo','$telefono', '$zona');");
    $_sql = new conexion();
    $h = $_sql->conectar($consulta);
    print_r($h);
} elseif ($datos == 5) {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $usuario = $_POST['usuario'];
    $contraseña = $_POST['contraseña'];
    $consulta = ("INSERT INTO `politica`.`usuarios`(`usuario`,`nombre`,`apellido`,`contraseña`)
                        VALUES ('$usuario','$nombre','$apellido','$contraseña');");
    $_sql = new conexion();
    $h = $_sql->conectar($consulta);
    print_r($h);
} elseif ($datos == 6) {
    $consulta = ("SELECT concat( nombre ,' ', apellido) as nombre FROM politica.coordinadores; ");
    $_sql = new conexion();
    $h = $_sql->conectar($consulta);
    $row = mysqli_fetch_all($h, MYSQLI_ASSOC);
    print_r(json_encode($row));
} elseif ($datos == 7) {
    $coordinador = $_POST['coordinador'];
    $carpeta = $_POST['carpeta'];
    $planilla = $_POST['planilla'];
    $consulta = ("SELECT concat(nombre,' ', apellido) as nombre2,telefono,correo, zona, colegio,mesa,coordinador,carpeta,planilla 
    FROM politica.electores
    where  coordinador = '$coordinador' and carpeta = '$carpeta' and planilla = '$planilla';");
    $_sql = new conexion();
    $h = $_sql->conectar($consulta);
    $row = mysqli_fetch_all($h, MYSQLI_ASSOC);
    print_r(json_encode($row));
}
