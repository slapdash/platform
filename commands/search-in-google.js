// @slapdash.name Search in Google
// @slapdash.icon 🔎

const args = process.argv.slice(2).reduce(
  (agg, arg) => {
    const match = arg.match(/^--(?<key>\w+)=(?<value>.+)$/)
    return match ? { ...agg, [match.groups.key]: match.groups.value } : agg;
  },
  {}
);
const keywords = (args["keywords"] ?? "")

console.log(JSON.stringify({
  view: {
    type: "options",
    options: [{
      title: `Search: ${keywords || "..."}`,
      icon: "🔎",
      action: {
        type: "open-url",
        url: `https://google.com/search?q=${keywords}`,
      }
    }]
  }
}))
