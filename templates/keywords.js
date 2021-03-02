// @slapdash.name Keywords Command Template
// @slapdash.icon 🦊
// @slapdash.type keywords

// This is a command that accepts exactly 1 argument from Slapdash – "keywords".
// Slapdash will first prompt the user to enter keywords and then it'll run the
// script.

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

// Optionally, print response to stdout. For example, show a toast:
const response = {
  type: "show-toast",
  payload: { message: `You typed "${keywords}"` }
}
console.log(JSON.stringify(response))
