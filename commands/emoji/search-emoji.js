// @slapdash.name Search Emoji
// @slapdash.icon 😀
// @slapdash.type full

const https = require('https')
const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2).reduce(
  (agg, arg) => {
    const match = arg.match(/^--(?<key>\w+)=(?<value>.+)$/)
    return match ? { ...agg, [match.groups.key]: match.groups.value } : agg;
  },
  {}
);

const keywords = (args["keywords"] ?? "").split(/\s+/).filter(w => !!w).map(word => word.toLowerCase())

const EMOJI_FILE_PATH = path.join(__dirname, "./emoji.json");

(async () => {
  let data = "[]"
  if (fs.existsSync(EMOJI_FILE_PATH)) {
    data = Buffer.from(await fs.promises.readFile(EMOJI_FILE_PATH)).toString(
      "utf8"
    );
  } else {
    data = await request(`https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json`, { method: "GET" });
    fs.promises.writeFile(EMOJI_FILE_PATH, data)
  }

  const emojis = JSON.parse(data);
  console.log(
    JSON.stringify({
      view: "list",
      options: emojis
        .filter(e => keywords.length === 0 ? Math.random() > 0.8 : e.short_names.some(n => matches(n)))
        .slice(0, 30)
        .map(emoji => {
          const native = unifiedToNative(emoji.unified)
          return ({
            title: emoji.short_name,
            subtitle: emoji.category.toLowerCase(),
            icon: native,
            action: {
              type: "copy",
              payload: { value: native }
            }
          })
        })
    })
  );
})()

function matches(str) {
  return keywords.some(word => str.toLowerCase().includes(word))
}

async function request(url, options) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      url,
      options,
      (res) => {
        const data = [];
        res.on('data', chunk => {
          data.push(chunk)
        });

        res.on("end", () => {
          try {
            resolve(Buffer.concat(data).toString())
          } catch (e) {
            reject(e)
          }
        })
      });

    req.on("error", error => {
      reject(error)
    })

    req.end()
  })

}

// From https://github.com/missive/emoji-mart/blob/ca3d4e5f0ee6a259bf04d91e540386548163dd6d/src/polyfills/stringFromCodePoint.js
function stringFromCodePoint() {
  var MAX_SIZE = 0x4000
  var codeUnits = []
  var highSurrogate
  var lowSurrogate
  var index = -1
  var length = arguments.length
  if (!length) {
    return ''
  }
  var result = ''
  while (++index < length) {
    var codePoint = Number(arguments[index])
    if (
      !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
      codePoint < 0 || // not a valid Unicode code point
      codePoint > 0x10ffff || // not a valid Unicode code point
      Math.floor(codePoint) != codePoint // not an integer
    ) {
      throw RangeError('Invalid code point: ' + codePoint)
    }
    if (codePoint <= 0xffff) {
      // BMP code point
      codeUnits.push(codePoint)
    } else {
      // Astral code point; split in surrogate halves
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      codePoint -= 0x10000
      highSurrogate = (codePoint >> 10) + 0xd800
      lowSurrogate = (codePoint % 0x400) + 0xdc00
      codeUnits.push(highSurrogate, lowSurrogate)
    }
    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
      result += String.fromCharCode.apply(null, codeUnits)
      codeUnits.length = 0
    }
  }
  return result
}

// From https://github.com/missive/emoji-mart/blob/ca3d4e5f0ee6a259bf04d91e540386548163dd6d/src/utils/index.js#L8
function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
    codePoints = unicodes.map((u) => `0x${u}`)

  return stringFromCodePoint.apply(null, codePoints)
}
