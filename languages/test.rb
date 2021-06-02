#!/usr/bin/env ruby
require 'json'

print JSON.generate({
  "view": {
    "type": "list",
    "options": [
      {
        "title": "Paste Heart",
        "action": {
          "type": "paste",
          "value": "❤️"
        },
        "icon": "❤️"
      }
    ]
  }
})
