// @slapdash.schemaVersion 1
// @slapdash.name Search in Google
// @slapdash.icon 🔎
// @slapdash.type keywords

const args = process.argv.slice(2).reduce(
  (agg, arg) => {
    const match = arg.match(/^--(?<key>\w+)=(?<value>.+)$/)
    return match ? { ...agg, [match.groups.key]: match.groups.value } : agg;
  },
  {}
);

const keywords = (args["keywords"] ?? "").split(/\s+/).filter(w => !!w).map(word => word.toLowerCase())

require('child_process').exec(`open https://google.com/search?q=${keywords}`);
