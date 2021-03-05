### How to Create Local Command

1. Grab a template from [templates](/templates).
2. Set the name and icon for your command.
3. Develop & Test your command in isolation. If it's a node script, then you can use `node` to run it in your terminal:

```bash
node ~/development/my-script-command.js

# If your script accepts arguments you can test them like this:
node ~/development/my-script-command.js --keywords=hello
```

4. Add a path to your script to `commands` in `~/.slapdash/settings.toml` (learn more about .slapdash [here](https://github.com/slapdash/dot-slapdash/blob/main/.slapdash/settings.toml)).

```toml
# ~/.slapdash/settings.toml

commands = [
  "~/development/my-script-command.js",
]
```

5. Launch [Slapdash](http://slapdash.com/download) and test running your command in the Command Bar.

> :warning: If your command doesn't show up in Slapdash, check that your script is saved with the UTF-8 encoding. 
