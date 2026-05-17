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
/* GET FILTER VALUES */
/* ========================= */

$location =
    $_GET["location"] ?? "";

$type =
    $_GET["type"] ?? "";

$price =
    $_GET["price"] ?? "";


/* ========================= */
/* BASE QUERY */
/* ========================= */

$query =
    "SELECT * FROM properties WHERE 1=1";


/* ========================= */
/* LOCATION FILTER */
/* ========================= */

if ($location !== "") {

    $query .=
        " AND location = '$location'";
}


/* ========================= */
/* TYPE FILTER */
/* ========================= */

if ($type !== "") {

    $query .=
        " AND propertyType = '$type'";
}


/* ========================= */
/* PRICE FILTER */
/* ========================= */

if ($price !== "") {

    $priceRange =
        explode("-", $price);

    $minPrice =
        $priceRange[0];

    $maxPrice =
        $priceRange[1];


    $query .=
        " AND price BETWEEN $minPrice AND $maxPrice";
}


/* ========================= */
/* EXECUTE QUERY */
/* ========================= */

$result =
    mysqli_query($conn, $query);


/* ========================= */
/* FETCH DATA */
/* ========================= */

$properties = [];


while (
    $row = mysqli_fetch_assoc($result)
) {

    $properties[] = $row;
}


/* ========================= */
/* RETURN JSON */
/* ========================= */

echo json_encode($properties);

?>