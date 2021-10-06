# Publish Command

Once you're happy with your command you may want to share it with others. 

A published command will get a dedicated page on [slapdash.com](https://slapdash.com/) allowing anyone to discover it and add it to their Slapdash account.

All commands built by the community can be seen at [https://slapdash.com/developers](https://slapdash.com/developers). 

## Publish Cloud Command

To publish a command you need to fork [https://github.com/slapdash/platform](https://github.com/slapdash/platform),  create a new folder inside [commands](https://github.com/slapdash/platform/tree/main/commands) and then open a Pull Request. Once your PR is merged, your command will appear on [slapdash.com](https://slapdash.com/).

This is the folder structure you should follow. Please name your command folder using the [kebab case style](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles) \(lowercase and hyphen used as a separator\).

```text
commands
└── my-command-name
    ├── command.toml
    ├── icon.svg
    └── screenshot.json
```

#### `command.toml`

This is a simple [TOML](https://toml.io/) file that contains metadata about your command. 

* `name` – **required**. 
* `description` – **required**. Short, one-sentence description.
* `endpointURL` – **required**. Publicly accessible HTTP\(S\) endpoint for your command.
* `author.name` – **required**. Full name of the command's author. 
* `author.profileURL` – **required**. Link to the author's public profile. For example, a link to a Github or Twitter profile.
* `categories` – optional. List of categories the command belongs to. You can grab them from the [list below](publish-command.md#categories) or put something else. 
* `readme` – optional. Long-form explanation of the command. You can use Markdown if you want.
* `language` – optional**.** Programming language that was used to build the command. For example, "TypeScript" or "Python".
* `sourceCodeURL` – optional. Link to the source code of your command. For example, a link to a public Github repository. 

#### `icon.svg` or `icon.monochrome.svg`

`icon.svg` – your command's icon. If you want Slapdash to automatically change the icon's color based on the selected theme, use `icon.monochrome.svg`. 

We recommend a 64x64 px icon with no padding around it. Check out the [Search Iconfinder](https://slapdash.com/commands/search-iconfinder) command that can help you find the icon. 

#### `screenshot.json`

This file is added by Slapdash employees so you don't need to provide it. It is a simple JSON file that contains one of the Command Responses that your command returned as well as some other metadata.

## Publish Local Command

There is currently no way to publish a Local Command but we're actively working on it. It should be available very soon. Stay tuned!

## Categories

If you're not sure what category to put your command in, here is a list you can choose from. 

* Automation
* Books
* Business
* Developer Tools
* Education
* Entertainment
* Finance
* Food & Drink
* Games
* Health & Fitness
* Design
* Lifestyle
* Kids
* Magazines & Newspapers
* Medical
* Music
* Navigation
* News
* Photo & Video
* Productivity
* Shopping
* Social Networking
* Sports
* Travel
* Utilities

