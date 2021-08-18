# Token

Tokens allow to customize how the command's parameters are displayed in the input of the Command Bar.

* **paramName:** The name of the parameter associated with this token. These parameters are typically added with [ActionMoveAddParam](command-response-action.md#actionmoveaddparam).
* **label:** Optional. The label for the token. By default, the parameter's name is used.
* **icon:** Optional. The icon for the token. Can be either an emoji Unicode character, URL \(inclduing data URL\) or inline. See [Customizing Icons](command-response-view-list.md#customizing-icons) for details.

{% tabs %}
{% tab title="Masonry View: custom label and icon for a token" %}
```javascript
{
  "tokens": [
    {
      "paramName": "image",
      "label": "Moon",
      "icon": "🌜"
    }
  ],
  "view": {
    "type": "masonry",
    "options": [
      {
        "imageURL": "https://images.unsplash.com/photo-1481819613568-3701cbc70156",
        "action": {
          "type": "open-url",
          "url": "https://images.unsplash.com/photo-1481819613568-3701cbc70156"
        },
        "moveAction": {
          "type": "add-param",
          "name": "image",
          "value": "moon"
        }
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

