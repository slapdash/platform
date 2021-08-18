#!python
# -*- coding: utf-8 -*-
import json

print(json.dumps({
    "view": {
      "type": "list",
      "options": [
          {
              "title": "Open Slapdash",
              "action": {
                  "type": "open-url",
                  "url": "https://slapdash.com"
              }
          },
          {
              "title": "Copy Heart Emoji",
              "action": {
                  "type": "copy",
                  "value": "❤️"
              }
          }
      ]
      }
}))
