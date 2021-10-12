# Action

Actions tell the Command Bar to perform a side effect (e.g. open a URL or copy something to the clipboard). They can be used in two places:

* at the root of [Command Response](command-response.md) as `CommandResponse.action`
* in the Option of the [List View](command-response-view-list.md) or [Masonry View](command-response-view-masonry.md) as `CommandResponse.view.options[].action`

```typescript
export type Action =
  | ActionOpenURL
  | ActionPaste
  | ActionCopy
  | ActionShowToast
  | ActionMove;
  
type ActionMove = ActionMoveAddParam;
```

## ActionOpenURL

Opens a given URL using the system's default handler.

* **type:** `"open-url"`
* **url:** The URL to open. You can use any valid URI schema. For example, "https://", "file://", "ssh://", "slack://" (native app). Provide a string to open a single URL or an array of strings to open multiple URLs at once.

{% tabs %}
{% tab title="Open a URL in the browser" %}
```javascript
{
  "action": {
    "type": "open-url",
    "url": "https://slapdash.com/",
  }
}
```
{% endtab %}

{% tab title="Open multiple URLs at once" %}
```
{
  "action": {
    "type": "open-url",
    "url": [
        "https://google.com/",
        "https://bing.com/"
    ]
  }
}
```
{% endtab %}

{% tab title="List View: open Google and Bing URLs" %}
```typescript
{
  "view": {
    "type": "list",
    "options": [
      {
        "title": "Open Google",
        "action": {
          "type": "open-url",
          "url": "https://www.google.com/"
        }
      },
      {
        "title": "Open Bing",
        "action": {
          "type": "open-url",
          "url": "https://www.bing.com/"
        }
      }
    ]
  }
}
```
{% endtab %}

{% tab title="Open a local folder in Finder" %}
```typescript
{
  "action": {
    "type": "open-url",
    "url": "file:///Users/Johny/Downloads",
  }
}
```
{% endtab %}

{% tab title="Open a Slack channel in the Slack desktop app" %}
```typescript
{
  "action": {
    "type": "open-url",
    "url": "slack://channel?team=TA4PV0NH4&id=CR7EDED9Q"
  }
}
```
{% endtab %}
{% endtabs %}

## ActionPaste

Pastes some text to the active app.

* **type:** `"paste"`
* **value:** The string that will be pasted to the active app.

{% tabs %}
{% tab title="Paste text to the active app" %}
```typescript
{
  "action": {
    "type": "paste",
    "value": "Hello, world!"
  }
}
```
{% endtab %}

{% tab title="List View: paste an email address to the active app" %}
```typescript
{
  "view": {
    "type": "list",
    "options": [
      {
        "title": "Paste My Email",
        "action": {
          "type": "paste",
          "value": "my-personal-email@gmail.com"
        }
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

## ActionCopy

Copies some text to the clipboard.

* **type:** `"copy"`
* **value:** The string that will be copied to the clipboard.

{% tabs %}
{% tab title="Copy text to clipboard" %}
```typescript
{
  "action": {
    "type": "copy",
    "value": "Hello, world!"
  }
}
```
{% endtab %}

{% tab title="List View: option to copy a URL to clipboard" %}
```typescript
{
  "view": {
    "type": "list",
    "options": [
      {
        "title": "Copy Google URL",
        "action": {
          "type": "copy",
          "value": "https://www.google.com/"
        }
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

## ActionShowToast

Shows a message in a toast (an ephemeral message displayed on the screen).

* **type:** `"show-toast"`
* **message:** The message that will be displayed in a toast.

{% tabs %}
{% tab title="Show a confirmation message in a toast" %}
```typescript
{
  "view": {
    "type": "list",
    "options": [
      {
        "title": "Show a Message",
        "action": {
          "type": "show-toast",
          "message": "The task has been successfully completed!"
        }
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

## ActionMoveAddParam

Allows to change the [location of the Command Bar](../command-bar-101/core-terminology.md#location). Currently, there is only one Move Action supported – add a param. Location parameters are then passed to the Command when it's run.

Typically, the "add-param" Action is used in the `moveAction` property of some [Option](command-response-view-list.md#listoption) that can be triggered by pressing **`Tab`**.

* **type:** `"add-param"`
* **name:** The name of the parameter.
* **value:** The value of the parameter.

{% tabs %}
{% tab title="Masonry View: option with Main and Move Actions" %}
```typescript
{
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
