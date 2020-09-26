<?php 

$servername = "localhost:3306";
$username = "root";
$pwd = "sunny07&13";
$db_name = "contactform";

// connect to database
// mysql to connect to database
$conn = mysqli_connect($servername, $username, $pwd, $db_name);
// localhost:port number, id, pwd, db name

// check connection
// if (!$conn) {
//     echo 'connection error' . mysqli_connect_error();
// }
// 

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>