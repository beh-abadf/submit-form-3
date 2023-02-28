<?php
$server = "localhost";
$database = "submit_form_3";
$username = "root";
$password = "";

try {
  $connection_object = new PDO("mysql:host=$server;dbname=$database", $username, $password);
} catch (Exception $e) {
  echo json_encode(["result" => 0]);
  exit;
}
