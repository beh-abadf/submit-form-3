<?php
include "connect_to_database.php";
try {
    $temp_name = $_POST['name'];
    $temp_email = $_POST['email'];
    $temp_pass = $_POST['pass'];
    $sql = "INSERT INTO user (name, email, pass) VALUES ('$temp_name', '$temp_email', '$temp_pass')";
    $insert = $connection_object->prepare($sql);
    $result = $insert->execute();
    echo json_encode(["result" => 1]);
} catch (Exception $e) {
    echo json_encode(["result" => 0]);
    exit;
}

$connection_object = null;
