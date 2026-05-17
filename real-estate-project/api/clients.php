<?php

header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json");


/* ========================= */
/* DATABASE CONNECTION */
/* ========================= */

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "real_estate_project"
);


/* ========================= */
/* CHECK CONNECTION */
/* ========================= */

if (!$conn) {

    die(
        json_encode([
            "message" => "Connection failed"
        ])
    );
}


/* ========================= */
/* SQL QUERY */
/* ========================= */

$query =
    "SELECT * FROM clients";


$result =
    mysqli_query($conn, $query);


/* ========================= */
/* CHECK QUERY */
/* ========================= */

if (!$result) {

    die(mysqli_error($conn));
}


/* ========================= */
/* FETCH DATA */
/* ========================= */

$clients = [];


while (
    $row = mysqli_fetch_assoc($result)
) {

    $clients[] = $row;
}


/* ========================= */
/* RETURN JSON */
/* ========================= */

echo json_encode($clients);

?>