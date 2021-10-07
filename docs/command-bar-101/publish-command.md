---
description: Share your command with the Slapdash community
---

# Publish Command

Once you're happy with your command you may want to share it with others. 

A published command will appear as a "Community Command" on the [Slapdash developer site](https://slapdash.com/developers), allowing anyone to discover it and add it to their Slapdash account.

## Publish Cloud Command

To publish a command, you need to fork the [slapdash/platform](https://github.com/slapdash/platform) repository, create a new folder inside [commands](https://github.com/slapdash/platform/tree/main/commands) and then open a Pull Request. Once your PR is merged, your command will appear on the Slapdash site, allowing anyone to install it.  
  
Each command gets its own folder and needs to follow some simple conventions. Here's an example of how a new command might be added to the repository. 

Please name your command folder using the [kebab case style](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles) \(lowercase and hyphen used as a separator\).

```text
commands
└── my-command-name
    ├── command.toml
    ├── icon.svg
    └── screenshot.json
```

Each command folder needs to have three files: `command.toml`, `icon.svg` and `screenshot.json`. You can copy other commands as examples, or read about the role of each file below.

#### `command.toml`

This is a simple [TOML](https://toml.io/) file that contains metadata about your command. 

| Name | Details |
| :--- | :--- |
| name | **Required.** Name of the command, prefer &lt;Verb&gt; &lt;Noun&gt; convention |
| description | **Required.** Short, one-sentence description |
| endpointURL | **Required.** Publicly accessible HTTPS endpoint for your command |
| author.name | **Required.** Full name of the command's author |
| author.profileURL | **Required.** Link to the author's public profile. For example, a link to a Github or Twitter profile. |
| categories | List of categories the command belongs to. You can grab them from the [list below](publish-command.md#categories) or put something else. |
| readme | Long-form explanation of the command. You can use Markdown if you want. |
| language | Language that was used to build the command. For example, "TypeScript" or "Python". |
| sourceCodeURL | Link to the source code of your command. For example, a link to a public Github repository. |

#### `icon.svg` or `icon.monochrome.svg`

This is the icon that will be used alongside your command, when it appears in the Command bar. If you want Slapdash to automatically change the icon's color based on the selected theme, use `icon.monochrome.svg`.

We recommend a 64x64 px icon with no padding around it. If you need help finding an icon, you can try using the [Search Iconfinder](https://slapdash.com/commands/search-iconfinder) command. 

#### `screenshot.json`

This file is added by Slapdash employees so you don't need to provide it. It is a simple JSON file that contains one of the [Command Responses](../reference/command-response.md) that your command returned as well as some other metadata to help visualize the command on the Slapdash site.

## Publish Local Command

There is currently no way to publish a Local Command but we're actively working on it. It should be available very soon. Stay tuned!

## Categories

If you're not sure what category to put your command in, don't sweat it, we'll help categorize it. Here are some potential categories you might want to consider \(or, just make up your own\).

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

