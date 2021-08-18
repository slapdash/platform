# Config

Config allows to display a separate "one-time" form in the Command Bar. All values from this form will be securely stored on the server and sent to the command any time it is run. Useful when a command requires some configuration \(e.g. API key\) before it can be run. 

To see a real example, check out the [Send Slack Message](../command-tutorials/send-slack-message.md) command.

## Config

{% tabs %}
{% tab title="Config form with a single text field for the API key" %}
```javascript
{
  "config": {
    "form": {
      "fields": [
        {
          "type": "text",
          "id": "api-key",
          "label": "API Key",
          "placeholder": "GIPHY API key"
        }
      ]
    }
  }
}
```
{% endtab %}
{% endtabs %}

## Show Config Form Conditionally

You will likely want to show the configuration form to the user conditionally, only in case when the user hasn't entered the values yet or when the values are incorrect. See the [Send Slack Message](../command-tutorials/send-slack-message.md) on how to do it.

