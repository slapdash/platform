# Core Terminology

## Input and View

When then Command Bar is open, there are two parts: the **Input** and the **View**. The Input is where you type and the View shows the UI, which reacts to what’s typed inside the input.

Here’s an example of a Command Bar that has an Input, a math expression, and a View, the calculated result of the expression.

![](../.gitbook/assets/test.png)

## Options

Although the View can technically be anything, most often it is built with a collection of UI components called an **Option**.

Each Option has an** Action** associated with, which is performed by hitting **`Enter`** with the Option selected. An action can be something like:

* Open a URL
* Copy text to Clipboard
* Open an application
* Run a script on the computer

Traditionally, the set of Options displayed in the view are based on the Input. By default, the Command Bar will fuzzy search the displayed Options, showing only ones that match.

Every Option has an Action, but some options may also have a **Move Action**. The Move Action is activated by hitting **`Tab`** and it moves the person to a different location in the Command Bar.

## Location

The Command Bar has a notion of location, or an address. Similar to how a browser has the address of which page is open. For every address, there is a Command that is responsible for generating the View.

Even when you first open the Command Bar, it points to a special location: root. Under the hood, there is a command, managed by Slapdash, that is responsible for generating the UI for this location. \
\
In the case of the root location, Slapdash will match all your available commands, search connected applications and even parse natural language expressions.

We don't have an addressing scheme yet, but the Command Bar location is visualized with pill-like tokens in the Input.

## Commands

Commands are the atomic units of functionality in Slapdash. [You can think of them as functions.](commands.md)\
\
Every command you add to Slapdash will get its own unique address and show up automatically in the root view as an Option.\
\
To run a command: open the Command Bar and just type a part of its name and hit **`Enter`**.
