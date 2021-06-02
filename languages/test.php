#!php
<?php
echo json_encode([
  "view" => [
    "type" => "list",
    "options" => [
      [
        "title" => "Paste Heart",
        "action" => [
          "type" => "paste",
          "value" => "❤️"
        ],
        "icon" => "❤️"
      ]
    ]
  ]
]);
