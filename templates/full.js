// @slapdash.name Full Command Template
// @slapdash.icon 🐼
// @slapdash.type full

// This is a command that receives the "keywords" argument as the user types in
// the Command Bar.

// Parse arguments.
const args = process.argv.slice(2).reduce(
  (args, arg) => {
    const match = arg.match(/^--(?<key>\w+)=(?<value>.+)$/)
    return match ? { ...args, [match.groups.key]: match.groups.value } : args;
  },
  {}
);

// Get the value of the "keywords" argument.
const keywords = (args["keywords"] ?? "")

// The script must return a list of options. The exact share of Option is TBD
// and will be changed and formalized soon. Here we can decide whether to use
// "keywords" or not.
const response = {
  view: "list",
  options: ['💩', '👻', '🤟', '🤘', '🤙', '👋'].map((emoji, index) => ({
    title: `emoji ${index + 1}`,
    icon: emoji,
    action: {
      type: "open-url",
      payload: {
        url: `https://google.com/search?q=${emoji}`,
      }
    }
  }))
}
console.log(JSON.stringify(response))

