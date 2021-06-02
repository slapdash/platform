#!/usr/bin/perl -w
use utf8;
use JSON;

print encode_json({
  "view" => {
    "type" => "list",
    "options" => [
      {
        "title" => "Paste Heart",
        "action" => {
          "type" => "paste",
          "value" => "❤️"
        },
        "icon" => "❤️"
      }
    ]
  }
})
