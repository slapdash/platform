/**
 * A command that shows special characters. Hitting Enter
 * will copy character, hitting Tab will give other ways
 * to copy the character: HTML hex code, for example.
 */

/**
 * Gets arguments passed in to script, like: --character=control
 * and stores it into an array, like: args['character'] = "control".
 */
const args = process.argv.slice(2).reduce((agg, arg) => {
  const match = arg.match(/^--(?<key>\w+)=(?<value>.+)$/);
  return match ? { ...agg, [match.groups.key]: match.groups.value } : agg;
}, {});

let response;
if (args["character"]) {
  response = showOptionsForCharacter(args["character"]);
} else {
  response = showAllCharacters();
}
console.log(JSON.stringify(response));

/*
 * The view that is shown when someone runs the command
 */
function showAllCharacters() {
  const response = {
    view: {
      type: "list",
      options: [
        {
          title: "Command",
          action: {
            type: "copy",
            value: "⌘",
          },
          moveAction: {
            type: "add-param",
            name: "character",
            value: "command",
          },
        },
        {
          title: "Option",
          action: {
            type: "copy",
            value: "⌥",
          },
        },
        {
          title: "Control",
          action: {
            type: "copy",
            value: "️️⌃",
          },
        },
      ],
    },
  };
  return response;
}

/**
 * The view that is shown when someone Tabs on a character.
 */
function showOptionsForCharacter(character) {
  const viewsToHex = {
    command: "&#8984;",
    option: "&#8997;",
    control: "&#8963;",
  };
  return {
    tokens: [
      {
        label: character,
        icon: "🎹",
        removeAction: {
          type: "remove-param",
          name: "character",
          value: character,
        },
      },
    ],
    view: {
      type: "list",
      options: [
        {
          title: "Copy Hex",
          action: {
            type: "copy",
            value: viewsToHex[character],
          },
        },
      ],
    },
  };
}
