# Example: Toggle Dark Mode

This command illustrates how to return an interactive List view. In this case, we visualize emojis and their names. As you type, the command matches the emoji name. When you hit **Enter**, the command pastes the selected emoji in the active app.

In this example you'll also notice that you can use an emoji as a custom icon for an option.

```javascript
/**
 * A command that shows a selection of emojis and pastes
 * the selected emoji on pressing Enter.
 */
const response = {
  view: {
    type: "list",
    options: [
      {
        title: "Heart",
        action: {
          type: "paste",
          value: "❤️",
        },
        icon: "❤️",
      },
      {
        title: "Star",
        action: {
          type: "paste",
          value: "⭐️",
        },
        icon: "⭐️",
      },
      {
        title: "Lightning",
        action: {
          type: "paste",
          value: "️⚡️",
        },
        icon: "⚡️",
      },
    ],
  },
};

console.log(JSON.stringify(response));
```

[See on Github](https://github.com/slapdash/platform/tree/main/examples/emoji-paster)
