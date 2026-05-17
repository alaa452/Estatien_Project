<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json");

$conn = mysqli_connect("localhost", "root", "", "real_estate_project");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode([
        "message" => "No data received"
    ]);
    exit;
}

$firstName = $data["firstName"];
$lastName = $data["lastName"];
$email = $data["email"];
$phone = $data["phone"];
$inquiryType = $data["inquiryType"];
$hearAbout = $data["hearAbout"];
$message = $data["message"];

$sql = "INSERT INTO contacts
(firstName, lastName, email, phone, inquiryType, hearAbout, message)

VALUES
('$firstName', '$lastName', '$email', '$phone', '$inquiryType', '$hearAbout', '$message')";

mysqli_query($conn, $sql);

echo json_encode([
    "message" => "Contact Created"
]);

?>