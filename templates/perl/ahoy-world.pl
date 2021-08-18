#!/usr/bin/perl -w
use utf8;
use JSON;

print encode_json({
  "view" => {
    "type" => "list",
    "options" => [
      {
        "title" => "Open Slapdash",
        "action" => {
          "type" => "open-url",
          "url" => "https://slapdash.com"
        }
      },
      {
        "title" => "Copy Heart Emoji",
        "action" => {
          "type" => "copy",
          "value" => "❤️"
        }
      }
    ]
  }
})
