<?php
$server = 'localhost';
$username = 'root';
$password = '';
$database = 'bd1';
$port = '3308';
$con = mysqli_connect($server,$username,$password,$database,$port);
if(mysqli_connect_errno()){
    echo "<small>La conexion a la base a fallado: </small>".mysqli_connect_error();
}
else{
}
mysqli_query($con, "SET NAMES 'utf8' ");
