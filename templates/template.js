// @slapdash.name Command Template
// @slapdash.icon 🐶

// Optionally, you can parse the arguments passed from Slapdash.
const args = process.argv.slice(2).reduce(
  (args, arg) => {
    const match = arg.match(/^--(?<key>\w+)=(?<value>.+)$/)
    return match ? { ...args, [match.groups.key]: match.groups.value } : args;
  },
  {}
);
// Get the value of the "keywords" argument.
const keywords = (args["keywords"] ?? "")

// Optionally, send a response back to Slapdash. Here are a few examples.

// Show a toast message
let response = {
  action: {
    type: "show-toast",
    message: "I'm a toast!"
  }
}
// Or copy something to clipboard
response = {
  action: {
    type: "copy",
    value: "Hello"
  }
}
// Or provide options for the Command Bar
response = {
  view: {
    type: "options",
    options: ['💩', '👻', '🤟', '🤘', '🤙', '👋'].map((emoji, index) => ({
      title: `emoji ${index + 1}`,
      icon: emoji,
      action: {
        type: "open-url",
        url: `https://google.com/search?q=${emoji}`,
      }
    }))
  }
}
// Print JSON object of the response to send it back to Slapdash.
console.log(JSON.stringify(response))
