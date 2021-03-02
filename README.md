### How to Create Script Command

1. Grab a template from [templates](/templates) for the command you want to create (learn more about different command types [here](https://www.notion.so/slapdash/Types-ee89422fba6343f081c0e96352a6b02f)).
2. Change the default template's name and icon.
3. Test your command in isolation. If it's a node script, then you can use `node` to run it in your terminal:

```bash
node ~/development/my-script-command.js

# If your script accepts arguments you can test them like this:
node ~/development/my-script-command.js --keywords=hello
```

4. Add a path to your script to `commands` in `~/.slapdash/settings.toml` (learn more about .slapdash [here](https://github.com/slapdash/dot-slapdash/blob/main/.slapdash/settings.toml)).

```toml
# ~/.slapdash/settings.toml

commands = [
  "/Users/zuta/development/my-script-command.js",
]
```

5. Launch Slapdash and test your command. You should now see it in the Command Bar.
