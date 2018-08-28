<?php
header('Content-type: application/json');
$id = $_GET['id'];
echo json_encode([
    'id' => $id,
    'content' => "Some content in article #{$id} that is work offline",
    'title' => "The offline title #{$id}",
    'img'=>'Media/IPHONE_1.png'
]);
?>		