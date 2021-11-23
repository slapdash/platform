# Build Your First Command

Slapdash works great in the browser, but for the best development experience, we recommend using the [Slapdash desktop app](https://slapdash.com/download).

There are [two types of commands](commands.md#local-vs-cloud-commands): **Local Commands**, which are scripts that run on your computer, and **Cloud Commands**, which are commands that are hosted on the web. Developing is easier and faster with files on your computer, so that's the type of command we'll be writing here.

This example command will be written in JavaScript, but in practice, you can use [whatever language](local-commands.md#language-support) you are comfortable with.

## **Create Command**

* Create an empty file with a `.js` extension (for example: `ahoy-world.js`)
* Run **Create New Command** in the Command Bar and choose **Local Script**
* Choose the file you created by pressing **Select File**
* Give the command a name, for example, "Run Demo"

## Do Something with the Command

For the Command to do something or show something in the Command Bar, it just needs to print some text. Specifically, the text needs to be JSON that matches the shape of the [Command Response Specification](../reference/command-response.md).

The most basic thing a command can do is return an Action as the [Command Response](../reference/command-response.md). An Action just tells the Command Bar to do some operation and exit. The simplest one is to just open a URL.

### **Make Your Command Open a URL**

```javascript
const response = {
  action: {
    type: "open-url",
    url: "https://slapdash.com/"
  }
}

// Print the response as JSON string
console.log(JSON.stringify(response));
```

Another type of Action is to add something to your clipboard. You can see other Actions in the [Command Response Reference](../reference/command-response-action.md).

### **Make Your Command Add Some Text to Your Clipboard**

```javascript
const response = {
  action: {
    type: "copy",
    value: "Ahoy world!"
  }
}

// Print the response as JSON string
console.log(JSON.stringify(response));
```
