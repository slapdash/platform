// @slapdash.schemaVersion 1
// @slapdash.name Honeycomb Boards
// @slapdash.icon 🐝
// @slapdash.type full

const https = require('https')
const { exit } = require('process')

// NOTE: You must define the API key until we figure out a better way to provide
// it. You can grab the key at https://ui.honeycomb.io/teams/slapdash.
const API_KEY = "09ee6a55bb9ac547e8f55a9e5ae0c24c"

const emojis = ['💩', '👻', '👽', '🤖', '👾', '👐', '🖖', '✌️', '🤟', '🤘', '🤙', '👋', '🐭', '🦕', '🦖', '🐉'];

const req = https.request({
  hostname: "api.honeycomb.io",
  path: "/1/boards",
  method: "GET",
  headers: {
    "X-Honeycomb-Team": API_KEY,
  }
}, (res) => {
  const data = [];
  res.on('data', chunk => {
    data.push(chunk)
  });

  res.on("end", () => {
    const boards = JSON.parse(Buffer.concat(data).toString())
    console.log(JSON.stringify(
      boards.map(board => ({
        title: board.name,
        subtitle: board.description ?? board.queries.map(query => query.caption).filter(i => !!i),
        icon: emojis[board.name.length % emojis.length],
        action: {
          type: "OPEN_EXTERNAL_URL",
          payload: {
            url: `https://ui.honeycomb.io/slapdash/board/${board.id}`,
            target: "_blank"
          }
        }
      }))
    ))
    exit(0);
  })

})

req.on("error", error => {
  console.error(error)
})

req.end()
