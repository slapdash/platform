# Core Terminology

### Input and View

When then Command Bar is open, there are two parts: the Input and the View. The Input is where you type and the View shows the UI, which reacts to what’s typed inside the input.

Here’s an example of a Command Bar that has an input and view which shows the the result of a Math calculation.

![](../.gitbook/assets/test.png)

### Options

Although the View can technically be anything, most often it is built with a collection of UI components called an **Option**.

Each Option has a Main Action associated with, which is performed by hitting **Enter** with the Option selected. An action can be something like:

* Open a URL
* Copy text to Clipboard
* Open an application
* Run a script on the computer

Traditionally, the set of Options displayed in the view are based on the input. By default, the Command Bar will fuzzy search the displayed Options, showing only ones that match.

Every Option has a Main Action, but some options may also have a **Move Action**. The Move Action is activated by hitting Tab and it moves the person to a different location in the Command Bar.

### Location

The Command Bar has a notion of location or an address. Similar to how a browser has the address of which page is open. For every address, there is a Command that is responsible for generating the View.

Even when you first open the Command Bar, it points to a special location: root. The root command is a special command managed by Slapdash that serves as the main entry point for most functionality.

The root command is responsible for showing search results based on input and will also show all your available commands. It will also detect certain input like math and currency conversions and will display the answer as one of the displayed options.

The location of the Command Bar is visualized with tokens in the input.

### Commands

New functionality is added to the Command Bar by adding new Commands. Commands that you add to Slapdash show up as Options in the root Command.

Every Command gets a unique location addressable in the Command Bar.

