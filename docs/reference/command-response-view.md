# View

Views define, what's shown to the user when the command is executed. The view can be provided at the root of the [Command Response](command-response.md) using the `CommandReponse.view` property. 

The simplest view one can use is text. Simply set the view property to some text and it will be shown in the Command Bar.

```javascript
{
  "view": "Ahoy, world!"
}
```

Read on about other views that can be used in the Command Response: [List](command-response-view-list.md#list), [Masonry](command-response-view-list.md#masonry) and [Form](command-response-view-form.md). 

