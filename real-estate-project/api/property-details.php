<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

/* ========================= */
/* DATABASE                  */
/* ========================= */
$conn = new mysqli("localhost", "root", "", "real_estate_project");

if ($conn->connect_error) {
    echo json_encode(["message" => "Database connection failed"]);
    exit();
}

/* ========================= */
/* CHECK ID                  */
/* ========================= */
if (!isset($_GET["id"])) {
    echo json_encode(["message" => "Property ID required"]);
    exit();
}

$id = intval($_GET["id"]);

/* ========================= */
/* QUERY                     */
/* ========================= */
$sql = "
    SELECT p.*, pd.*
    FROM properties p
    JOIN property_details pd ON p.id = pd.property_id
    WHERE p.id = ?
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["message" => "Property not found"]);
    exit();
}

$data = $result->fetch_assoc();

/* ========================= */
/* DECODE JSON COLUMNS       */
/* ========================= */
$data["images"]   = json_decode($data["images"]);
$data["amenities"] = json_decode($data["amenities"]);
$data["pricing"]  = json_decode($data["pricing"], true);

/* ========================= */
/* OUTPUT                    */
/* ========================= */
echo json_encode($data);
$conn->close();
?>