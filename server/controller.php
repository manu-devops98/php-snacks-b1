<?php
    include_once __DIR__ . '/db.php';

    if (isset($_GET['cars']) !== false) {
        $car = $_GET['cars'];
        if ($car === 'all') {
            header('Content-Type: application/json');
            echo json_encode([
            'results' => $cars,
            'length' => count($cars)
            ]);
        }
    }

?>