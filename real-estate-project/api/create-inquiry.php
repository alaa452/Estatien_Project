<?php

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Headers: *");

header("Access-Control-Allow-Methods: *");

header("Content-Type: application/json");


$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "real_estate_project"
);


$data =
    json_decode(
        file_get_contents("php://input"),
        true
    );


$firstName = $data["firstName"] ?? "";

$lastName = $data["lastName"] ?? "";

$email = $data["email"] ?? "";

$phone = $data["phone"] ?? "";
$location =
    $data["location"] ?? "";;

$propertyType =
    $data["propertyType"] ?? "";;

$bedrooms =
    $data["bedrooms"] ?? "";;

$bathrooms =
    $data["bathrooms"] ?? "";;

$budget =
    $data["budget"] ?? "";;

$message =
    $data["message"] ?? "";;



$query = "

INSERT INTO inquiries
(
firstName,
lastName,
email,
phone,
location,
propertyType,
bedrooms,
bathrooms,
budget,
message
)

VALUES
(
'$firstName',
'$lastName',
'$email',
'$phone',
'$location',
'$propertyType',
'$bedrooms',
'$bathrooms',
'$budget',
'$message'
)

";


$result =
    mysqli_query($conn, $query);


if ($result) {

    echo json_encode([
        "message" => "Inquiry Created"
    ]);

} else {

    echo json_encode([
        "message" => "Error"
    ]);
}

?>