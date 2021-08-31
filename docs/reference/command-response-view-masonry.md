# Masonry View

### Masonry

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

## 

