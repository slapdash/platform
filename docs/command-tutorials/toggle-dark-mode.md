---
description: A Mac OS command that uses AppleScript
---

# Toggle Dark Mode

![Run Toggle Dark Mode in Command Bar](../.gitbook/assets/toggle-dark-mode%20%281%29%20%282%29.gif)

This is an example that will only work on macOS because it uses AppleScript. It's an example of a command that doesn't return a response: it just does its thing and exits.

When the command is run, it will toggle the dark mode system preference setting.

Paste the following code in a new file with a `.applescript` extension and then [create a Local Command](../command-bar-101/local-commands.md#create-local-command) to try it out in Slapdash.

```javascript
tell application "System Events"
  tell appearance preferences
    set dark mode to not dark mode
  end tell
end tell
```

[See on Github](https://github.com/slapdash/platform/tree/main/tutorials/toggle-dark-mode)

