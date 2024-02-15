<?php

require_once 'config.php';
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {

    case 'GET':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $stmt = $pdo->prepare('SELECT * FROM Items WHERE id=?');
            $stmt->execute([$id]);
        } else
            $stmt = $pdo->query('SELECT * FROM Items');
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $name = $data['name'];
        $title = $data['title'];
        $icon = $data['icon'];
        $link = $data['link'];
        $category_id = $data['category_id'];
        $stmt = $pdo->prepare('INSERT INTO Items (name,title,icon,link,category_id) VALUES (?,?,?,?,?)');
        $stmt->execute([$name, $title, $icon, $link, $category_id]);

        echo json_encode(['message' => 'Item added successfully']);
        break;

    case 'PUT':
        parse_str(file_get_contents('php://input'), $data);
        $id = $data['id'];
        $name = $data['name'];
        $title = $data['title'];
        $icon = $data['icon'];
        $link = $data['link'];
        $category_id = $data['category_id'];
        $stmt = $pdo->prepare('UPDATE Items SET name=? title=? icon=? link=? category_id=?  WHERE id = ?');
        $stmt->execute([$name, $title, $icon, $link, $category_id, $id]);

        echo json_encode(['message' => 'Items updated successfully']);
        break;

    case 'DELETE':
        $id = $_GET['id'];
        $stmt = $pdo->prepare('DELETE FROM Items WHERE id=?');
        $stmt->execute([$id]);
        echo json_encode(['message' => 'Items deleted successfully']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
