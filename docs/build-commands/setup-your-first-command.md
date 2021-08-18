# Setup Your First Command

Slapdash works great in the browser, but for the best development experience, we recommend using the [Slapdash desktop app](https://slapdash.com/download).

There are two types of commands: commands that point to a script on your computer and ones that run in the cloud. Developing is easier and faster with files on your computer, so that's the type of command we'll be writing here.

This example command will be written in JavaScript, but in practice, you can use whatever language you are comfortable with.

## **Create the Command**

* Create an empty file with a `.js` extension \(for example: `ahoy-world.js`\)
* Run **Create Command** in the Command Bar and choose **Custom**
* Give the command a name, for example "Run Demo"
* Choose **Script on my computer** as **Command Type** and select the file you created

## Do Something with the Command

For the Command to do something, or show something in the Command Bar, it just needs to print some text. Specifically, the text needs be JSON that matches the shape of the Command Response Specification.

The most basic thing a command can do, is return an Action as the [Command Response](https://developers.slapdash.com/reference/). An Action just tells the Command Bar to do some operation and exit. The simplest one is to just open a link.

### **Make Your Command Open a URL**

```javascript
const response = {
  action: {
    type: "open-url",
    url: "<https://slapdash.com/>"
  }
}

// Prints the response as JSON
console.log(JSON.stringify(response));
```

Another type of Action is to add something to your clipboard. You can see other Actions in the [Command Response Reference](https://developers.slapdash.com/reference/).

### **Make Your Command Add Some Text to Your Clipboard**

```javascript
const response = {
  action: {
    type: "copy",
    value: "Ahoy world!"
  }
}

console.log(JSON.stringify(response));
```

