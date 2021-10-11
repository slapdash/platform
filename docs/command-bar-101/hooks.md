---
description: Choose where your command appears
---

# Hooks

By default, all commands appear at the Command Bar root. However, in some cases, you may want your command to show up in another context, e.g. when there is an active web page in focus.

Hooks let you achieve this. There is currently only one hook supported – URL Hook.

## URL Hook

URL hook allows you to "attach" your command to the "Active Tab" group in the Command Bar. This group appears at the top of the Command Bar root when there is a browser tab in focus.

!["Active Tab" group in the Command Bar](<../.gitbook/assets/image (3).png>)

When your command is run, the page URL will be passed in the `url` parameter.

A URL Hook is a JSON object with the following properties:

| Property | Description                                                                                                                                                                                                                                                                                                                                                             |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type     | **required**. The type of the hook. Must be `"url"`.                                                                                                                                                                                                                                                                                                                    |
| url      | The URL match pattern. Allows showing the command only when the page URL matches this pattern. For example, `https://`github`.com/*` matches HTTPS URLs only at "github.com", with any URL path and URL query string. Check out [WebExtensions Match Pattern](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) for more examples. |

#### Examples

{% tabs %}
{% tab title="Any URL" %}
Show the command for any URL

```json
{
  "type": "url"
}
```
{% endtab %}

{% tab title="Github URLs only" %}
Show the command for Github URLs only

```json
{
  "type": "url",
  "url": "https://github.com/*"
}
```
{% endtab %}
{% endtabs %}

## Define Hooks

You can define Hooks using HTTP Headers for [Cloud Commands](cloud-commands.md) or code comments for [Local Commands](local-commands.md). In both cases, the hooks must be string representations of the JSON object. You can define a single Hook or multiple Hooks using an array.

### Cloud Commands

Your endpoint can define Hooks by sending a custom HTTP header – `X-Slapdash-Hooks`. For example, in NodeJS this can look like:

```javascript
async function myCommand(req, res) {
  // Your command logic is here.
  res.setHeader("Access-Control-Expose-Headers", "X-Slapdash-Hooks");
  res.setHeader("X-Slapdash-Hooks", JSON.stringify({type: "url"}));
}
```

Note, you also need to set `Access-Control-Expose-Headers` to the list of custom hooks that you want to expose. This ensures Slapdash can access `X-Slapdash-Hooks` when making a request to your endpoint.

### Local Commands

To specify Hooks for Local Commands, you can use code comments in the following format:

{% code title="command.js" %}
```javascript
// @slapdash.hooks '{"type":"url"}'

// You command logic is here.
```
{% endcode %}
