<?php

require_once 'config.php';
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {

    case 'GET':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $stmt = $pdo->prepare('SELECT * FROM Category WHERE id=?');
            $stmt->execute([$id]);
        } else $stmt = $pdo->query('SELECT * FROM Category');
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $name = $data['name'];

        $stmt = $pdo->prepare('INSERT INTO Category (name) VALUES (?)');
        $stmt->execute([$name]);

        echo json_encode(['message' => 'Category added successfully']);
        break;

    case 'PUT':
        parse_str(file_get_contents('php://input'), $data);
        $id = $data['id'];
        $name = $data['name'];

        $stmt = $pdo->prepare('UPDATE Category SET name=? WHERE id=?');
        $stmt->execute([$name, $id]);

        echo json_encode(['message' => 'Category updated successfully']);
        break;

    case 'DELETE':
        $id = $_GET['id'];

        $stmt = $pdo->prepare('DELETE FROM Category WHERE id=?');
        $stmt->execute([$id]);

        echo json_encode(['message' => 'Category deleted successfully']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
