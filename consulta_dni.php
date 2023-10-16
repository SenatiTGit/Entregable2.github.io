<?php
$dni = $_POST["dni"];
if (strlen($dni) < 8 || strlen($dni) > 8) {
    $response = 1;
} else {
    $data = file_get_contents('https://api.apis.net.pe/v1/dni?numero=' . $dni);
    $response = json_decode($data, true);
}
echo json_encode($response);
?>
