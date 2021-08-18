---
description: Show list of Slack users and quickly jump to DM thread
---

# Send Slack Message

![](../.gitbook/assets/send-slack-message.gif)

Some commands may require some configuration, which you might not want to add to your command source code. For example, you might need an API key.

Slapdash provides an interface for your command to collect configuration data, which is then sent alongside each command run.

The first time you run the command, it asks for the Slack Bot authentication token, then shows the list of users in Slack. If a user is selected, the Slack desktop is opened directly to the DM thread of the selected user.

![The command asks to provide the Slack Bot Token.](../.gitbook/assets/image%20%282%29.png)

This is an example of a [Cloud Command](../command-bar-101/cloud-commands.md), a command that runs on a server.

With a Cloud Command, you can share its URL with anyone, and each person will be able to use the command with their own authentication tokens.

{% hint style="info" %}
See [Cloud Commands](https://developers.slapdash.com/command-bar-101/cloud-commands) for details on how to create and deploy cloud commands.
{% endhint %}

```python
#!python
# -*- coding: utf-8 -*-
from flask import Flask, jsonify, request
from requests import get

MIN_TOKEN_LEN = 10
HELP_TEXT = """
To obtain the token,\n
- Create a Slack App at [Slack Apps page](https://api.slack.com/apps) (from scratch);
- Click **Bots**, then **Review Scopes to Add**;
- Add **users:read** Bot Token scope and then click **Install to Workspace** above;
- Copy bot token and paste in this field.
"""

app = Flask(__name__)

def get_name(member):
    return member["profile"]["real_name"] or member["profile"]["display_name"]

@app.route("/", methods=["GET", "POST"])
def command():
  # Read config field. If it's not yet entered by the user, show them the input
  # form. Slapdash will save the entered value and not re-request again.
  token = request.headers.get("slack-token")
  if not token or len(token) < MIN_TOKEN_LEN:
    return jsonify({
      "config": {
        "form": {
          "fields": [
            {
              "type": "text",
              "id": "slack-token",
              "label": "Slack Bot Token",
              "placeholder": "xoxb-***-***-***",
              "helpText": HELP_TEXT,
              "defaultValue": token,
              "error": "Invalid token" if token and len(token) < MIN_TOKEN_LEN else None
            }
          ]
        }
      }
    })

  # We have the token. Send Slack API request.
  res = get(
    url="https://slack.com/api/users.list?pretty=1",
    headers={"Authorization": "Bearer " + token}
  )

  # Build CommandResponse from the Slack response.
  return jsonify({
    "view": {
      "type": "list",
      "options": [
        {
          "title": "@" + member["name"] +
            (" — " + get_name(member) if get_name(member) else ""),
          "icon": member["profile"]["image_48"],
          "action": {
            "type": "open-url",
            "url": "slack://user?team=%s&id=%s" % (member["team_id"], member["id"])
          }
        }
        for member in res.json()["members"]
        if not member["is_bot"] and not member["deleted"]
      ]
    }
  })

@app.after_request
def add_header(response):
  response.headers["Access-Control-Allow-Headers"] = "*" # for config headers
  response.headers["Access-Control-Allow-Origin"] = "*"
  return response

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=8080, debug=True)
```

