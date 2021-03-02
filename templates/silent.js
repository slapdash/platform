// @slapdash.name Silent Command Template
// @slapdash.icon 🐶
// @slapdash.type silent

// This is a command that simply does something without requiring any input from
// the user. Hence Slapdash executes this script without passing any arguments.

// Optionally, print response to stdout. For example, show a toast:
let response = {
  type: "show-toast",
  payload: { message: "I'm a toast!" }
}
// Or something copy to clipboard
response = {
  type: "copy",
  payload: { value: "Hello" }
}
console.log(JSON.stringify(response))
