# List and Masonry Views

Views define, what's shown to the user when the command is executed. There are 3 different views that can be displayed in the Command Bar: [List](command-response-view-list.md#list), [Masonry](command-response-view-list.md#masonry) and [Form](command-response-view-form.md). The view can be provided at the root of the [Command Response](command-response.md) using the `CommandReponse.view` property.

## List

Property `CommandResponse.view` of type `List` displays a list of options in the Command Bar.

* **type:** `"list"`
* **options:** An array of [ListOption](command-response-view-list.md#listoption) objects.
* **groups:** Optional. An array of [Group](command-response-view-list.md#group) objects \(or strings\). Can be used to define the order in which they appear and customize how they are displayed.
* **ranking:** Optional. The default value is `true`, i.e the Command Bar's default ranking will be used. If you wish to return different options as the user types in the Command Bar, set `ranking` to `false`. Then Slapdash will run your command with a special parameter `keywords` that you can use to decide what options to return back.

{% tabs %}
{% tab title="Options to open, copy, paste a URL or show it in a toast" %}
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
        "title": "Copy Google URL",
        "action": {
          "type": "copy",
          "value": "https://www.google.com/"
        }
      },
      {
        "title": "Paste Google URL",
        "action": {
          "type": "paste",
          "value": "https://www.google.com/"
        }
      },
      {
        "title": "Show Google URL",
        "action": {
          "type": "show-toast",
          "message": "https://www.google.com/"
        }
      }
    ]
  }
}
```
{% endtab %}

{% tab title="Grouped options" %}
```typescript
{
  "view": {
    "type": "list",
    "groups": ["Clipboard", "Browser", "Misc"],
    "options": [
      {
        "title": "Open Google",
        "group": "Browser",
        "action": {
          "type": "open-url",
          "url": "https://www.google.com/"
        }
      },
      {
        "title": "Copy Google URL",
        "group": "Clipboard",
        "action": {
          "type": "copy",
          "value": "https://www.google.com/"
        }
      },
      {
        "title": "Paste Google URL",
        "group": "Clipboard",
        "action": {
          "type": "paste",
          "value": "https://www.google.com/"
        }
      },
      {
        "title": "Show Google URL",
        "group": "Misc",
        "action": {
          "type": "show-toast",
          "message": "https://www.google.com/"
        }
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

### ListOption

Property `CommandResponse.view.options` is the list of options that are displayed in the List View.

* **title:** The title for the option.
* **action:** Option's [Main Action](command-response-view-list.md#options-main-action). This Action is executed when **`Enter`** is pressed on the Option \(or when the option is clicked\).
* **moveAction:** Optional. Option's [Move Action](command-response-view-list.md#options-move-action) object. This Action is executed when Tab is pressed on the Option.
* **icon:** Optional. The icon for the option. Can be either an emoji Unicode character, URL \(inclduing data URL\) or inline. See [Customizing Icons](command-response-view-list.md#customizing-icons) for details.
* **subtitle:** Optional. The subtitle for the option. Can be provided as a string or a list of strings.
* **group:** Optional. The [Group](command-response-view-list.md#group) this option belongs to.

{% tabs %}
{% tab title="List View: options with a custom icon and subtitle" %}
```typescript
{
  "view": {
    "type": "list",
    "options": [
      {
        "title": "Copy Home Number",
        "subtitle": [
          "Mobile",
          "Emergencies"
        ],
        "group": "Phone Numbers",
        "icon": "🏠",
        "action": {
          "type": "copy",
          "value": "+44123456789"
        }
      },
      {
        "title": "Copy Work Number",
        "subtitle": [
          "Stationary",
          "9-5"
        ],
        "group": "Phone Numbers",
        "icon": "💼",
        "action": {
          "type": "copy",
          "value": "+44987654321"
        }
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

### Group

Property `CommandResponse.view.groups` allows to display options in the List View in groups. Each `Group` can be a string or an object. Provide Group as an object if you want to customize its appearance \(e.g. change its title\).

{% tabs %}
{% tab title="List View: custom order for groups" %}
```typescript
{
  "view": {
    "type": "list",
    "groups": [
      "misc",
      "browser",
      "clipboard"
    ],
    "options": [
      {
        "title": "Open Google",
        "group": "browser",
        "action": {
          "type": "open-url",
          "url": "https://www.google.com/"
        }
      },
      {
        "title": "Copy Google URL",
        "group": "clipboard",
        "action": {
          "type": "copy",
          "value": "https://www.google.com/"
        }
      },
      {
        "title": "Paste Google URL",
        "group": "clipboard",
        "action": {
          "type": "paste",
          "value": "https://www.google.com/"
        }
      },
      {
        "title": "Show Google URL",
        "group": "misc",
        "action": {
          "type": "show-toast",
          "message": "https://www.google.com/"
        }
      }
    ]
  }
}
```
{% endtab %}

{% tab title="List View: custom title for a group" %}
```typescript
{
  "view": {
    "type": "list",
    "groups": [
      {
        "id": "misc",
        "title": "Miscellaneous"
      },
      "browser",
      "clipboard"
    ],
    "options": [
      {
        "title": "Open Google",
        "group": "browser",
        "action": {
          "type": "open-url",
          "url": "https://www.google.com/"
        }
      },
      {
        "title": "Copy Google URL",
        "group": "clipboard",
        "action": {
          "type": "copy",
          "value": "https://www.google.com/"
        }
      },
      {
        "title": "Paste Google URL",
        "group": "clipboard",
        "action": {
          "type": "paste",
          "value": "https://www.google.com/"
        }
      },
      {
        "title": "Show Google URL",
        "group": "misc",
        "action": {
          "type": "show-toast",
          "message": "https://www.google.com/"
        }
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

## Masonry

Property `CommandResponse.view` of type `Masonry` displays options in the Pinterest-like layout in the Command Bar.

* **type:** `"masonry"`
* **options:** An array of [MasonryOption](command-response-view-list.md#masonryoption) objects.

### MasonryOption

For MasonryView, property `CommandResponse.view.options` contains the list of MasonryOption objects.

* **imageURL:** The image URL for this option.
* **action:** Option's [Main Action](command-response-view-list.md#options-main-action) object.
* **moveAction:** Optional. Option's [Move Action](command-response-view-list.md#options-move-action) object.

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
      },
      {
        "imageURL": "https://images.unsplash.com/photo-1512361180836-1ecddb33f2dd",
        "action": {
          "type": "copy",
          "value": "Sky"
        }
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

## Option's Main Action

The Main Action for an Option can be provided as the plain [Action](command-response-action.md) object or as a special object that allows to customize how the action is visualised by the Command Bar. 

```typescript
type OptionMainAction =
  | Action
  | {
      /** The default Action object. */
      action: Action;
      /** The label for this action. By default it will be inferred
       * from the action property. */
      label?: string;
      /** The tooltip for this action. By default it will be inferred
       * from the action property. */
      tooltip?: string;
      /** The icon for this action. Either an emoji or an Image URL.
       * By default it will be inferred from the action property. */
      icon?: Icon;
    };
```

{% tabs %}
{% tab title="List View: custom affordances for the option\'s \"main\" Action" %}
```typescript
{
  "view": {
    "type": "list",
    "options": [
      {
        "title": "Open Google",
        "action": {
          "label": "Open Browser",
          "icon": "🌎",
          "tooltip": "Open Google in the Browser",
          "action": {
            "type": "open-url",
            "url": "https://www.google.com/"
          }
        }
      }
    ]
  }
}
```
{% endtab %}

{% tab title="List View: default affordances for the option\'s \"main\" Action" %}
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
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

## Option's Move Action

Property `CommandResponse.view.options[].moveAction` allows providing a [Move Action](command-response-action.md#actionmoveaddparam) to change the location of the Command Bar.

{% tabs %}
{% tab title="Masonry View: option with \"main\" and \"move\" Actions" %}
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

