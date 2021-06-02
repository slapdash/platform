#!python
# -*- coding: utf-8 -*-
import json

print(json.dumps({
    "view": {
      "type": "list",
      "options": [
          {
              "title": "Paste Heart",
              "action": {
                  "type": "paste",
                  "value": "❤"
              },
              "icon": "❤"
          }
      ]
      }
}))
