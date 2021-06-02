#!/usr/bin/env ruby
require 'json'

print JSON.generate({
  "view": {
    "type": "list",
    "options": [
      {
        "title": "Paste Heart (hi from Ruby!)",
        "action": {
          "type": "paste",
          "value": "❤️"
        },
        "icon": "❤️"
      }
    ]
  }
})
