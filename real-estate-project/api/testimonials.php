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
    "SELECT * FROM testimonials";


$result =
    mysqli_query($conn, $query);


/* ========================= */
/* FETCH DATA */
/* ========================= */

$testimonials = [];


while (
    $row = mysqli_fetch_assoc($result)
) {

    $testimonials[] = $row;
}


/* ========================= */
/* RETURN JSON */
/* ========================= */

echo json_encode($testimonials);

?>