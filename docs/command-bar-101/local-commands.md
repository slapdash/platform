---
description: Commands that run scripts on your computer.
---

# Local Commands

Local commands are just scripts that run on your computer. Slapdash knows how to run scripts in the most popular languages.

Even if Slapdash doesn't support your language out of the box, you can just [use shebang syntax](../../templates/custom-shebang-not-bash.sh#L1), or create a bash wrapper to call into your program.

## Create Local Command

To create a local command, run **Create New Command** in the Command Bar, choose **Local Script** as a type, select the script file on your computer, give your command a name and press **Create Command**.

![](../.gitbook/assets/cleanshot-2021-08-20-at-16.27.46.png)

## Language Support

We try to support as many languages as possible. Below you'll find a list of languages you can use to build Slapdash commands.

In practice, you can use a shebang directive to point to an interpreter of your choice.

* AppleScript
* bash / zsh
* JavaScript
* Perl
* PowerShell
* Python
* Ruby
* PHP
* TypeScript

### AppleScript

Support for AppleScript is baked into macOS. Just create a `command.applescript` file anywhere and start experimenting!

Here's an example of an AppleScript command which [toggles the Mac OS system dark mode](../command-tutorials/toggle-dark-mode.md).

```applescript
#!/usr/bin/osascript

tell application "System Events"
  tell appearance preferences
    set dark mode to not dark mode
  end tell
end tell
```

### JavaScript

Slapdash runs JavaScript commands using [Node](https://nodejs.org).&#x20;

Here is an example of a JavaScript command that displays a list with two options:

```javascript
// command.js

const response = {
  view: {
    type: "list",
    options: [
      {
        title: "Open Slapdash",
        action: {
          type: "open-url",
          url: "https://slapdash.com"
        }
      },
      {
        title: "Copy Heart Emoji",
        action: {
          type: "copy",
          value: "❤️"
        }
      }
    ]
  }
};

console.log(JSON.stringify(response));
```

When you run the command in the Command Bar, Slapdash will execute the underlying script:

```bash
node command.js
```

### TypeScript

Slapdash runs TypeScript commands using [NodeJS](https://nodejs.org) and [ts-node](https://www.npmjs.com/package/ts-node).

If you are building a command inside some package, Slapdash will also look inside its `node_modules` for the `ts-node` executable. If it can't find `ts-node` there it will look for `ts-node` in the global node modules location on your computer.&#x20;

```typescript
// command.ts

// Optionally, import our npm package to get TS types for Command Response.
import { CommandResponse } from "@slapdash/command-response-types";

const response: CommandResponse = {
  view: {
    type: "list",
    options: [
      {
        title: "Open Slapdash",
        action: {
          type: "open-url",
          url: "https://slapdash.com",
        },
      },
      {
        title: "Copy Heart Emoji",
        action: {
          type: "copy",
          value: "❤️",
        },
      },
    ],
  },
};

console.log(JSON.stringify(response));
```

When you run the command in the Command Bar, Slapdash will execute the underlying script:

```bash
ts-node command.ts
```

### Bash

You already have [bash](https://en.wikipedia.org/wiki/Bash\_\(Unix\_shell\)) (or [zsh](https://en.wikipedia.org/wiki/Z\_shell)) on your Mac. No need to install anything. Just create e.g. `command.sh` file anywhere and start bashing:

```bash
#!/bin/bash

echo '{
  "view": {
    "type": "list",
    "options": [
      {
        "title": "Open Slapdash",
        "action": {
          "type": "open-url",
          "url": "https://slapdash.com"
        }
      },
      {
        "title": "Copy Heart Emoji",
        "action": {
          "type": "copy",
          "value": "❤️"
        }
      }
    ]
  }
}'
```

### Python

macOS has both Python v2 and Python v3 pre-installed, so you can just use it by default. Put the following to e.g. `command.py`:

```python
#!python3
# -*- coding: utf-8 -*-
import json

print(json.dumps({
    "view": {
      "type": "list",
      "options": [
          {
              "title": "Open Slapdash",
              "action": {
                  "type": "open-url",
                  "url": "https://slapdash.com"
              }
          },
          {
              "title": "Copy Heart Emoji",
              "action": {
                  "type": "copy",
                  "value": "❤️"
              }
          }
      ]
      }
}))
```

You can use Python v2 too: just change the [shebang line](https://en.wikipedia.org/wiki/Shebang\_\(Unix\)) to `#!python2` as usual.

### Ruby

macOS should have Ruby pre-installed (or you can install it with `brew install ruby`). Put the following to e.g. `command.rb`:

```ruby
#!/usr/bin/env ruby
require 'json'

print JSON.generate({
  "view": {
    "type": "list",
    "options": [
      {
        "title": "Open Slapdash",
        "action": {
          "type": "open-url",
          "url": "https://slapdash.com"
        }
      },
      {
        "title": "Copy Heart Emoji",
        "action": {
          "type": "copy",
          "value": "❤️"
        }
      }
    ]
  }
})
```

### Perl

Perl is conveniently pre-installed on macOS. If you still remember how to write in Perl put the following to `command.pl`:

```perl
#!/usr/bin/perl -w
use utf8;
use JSON;

print encode_json({
  "view" => {
    "type" => "list",
    "options" => [
      {
        "title" => "Open Slapdash",
        "action" => {
          "type" => "open-url",
          "url" => "https://slapdash.com"
        }
      },
      {
        "title" => "Copy Heart Emoji",
        "action" => {
          "type" => "copy",
          "value" => "❤️"
        }
      }
    ]
  }
})
```

### PHP

Some version of PHP is pre-installed on macOS, so it should work out of the box. Put the following to e.g. `command.php`:

```php
#!php
<?php
echo json_encode([
  "view" => [
    "type" => "list",
    "options" => [
      [
        "title" => "Open Slapdash",
        "action" => [
          "type" => "open-url",
          "url" => "https://slapdash.com"
        ]
      ],
      [
        "title" => "Copy Heart Emoji",
        "action" => [
          "type" => "paste",
          "value" => "❤️"
        ]
      ]
    ]
  ]
]);
```

### PowerShell

[PowerShell](https://en.wikipedia.org/wiki/PowerShell) is already pre-installed on Windows. Just create a file with a `.ps1` extension. Here's an example that will empty your recycling bin.

```
Clear-RecycleBin -Force
```

## Locating Language Binaries

When searching for a programming language binary to execute the command script, we use the following approach:

1. We check the first line of the script, the same way it's done in Unix-like systems by looking for the shebang directive. If the first line looks like `#!/path/to/binary` or just `#!binary`, Slapdash calls the referenced interpreter to execute the command.
2. If there is no shebang directive, Slapdash will try to infer the language binary from the file's extension. For example, if it's a `*.rb` file, Slapdash will look for the installed Ruby binary.
3. If the script is within an npm package (JavaScript/TypeScript), Slapdash will check the current directory's `node_modules/.bin` folder to look for tools like `ts-node`.
4. Finally, Slapdash will use the OS's `PATH` environment variable to resolve the binary.
