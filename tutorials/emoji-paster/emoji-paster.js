/**
 * A command that shows a selection of emojis and pastes
 * the selected emoji on pressing Enter.
 *
 * Follow the tutorial at https://developers.slapdash.com/command-tutorials/emoji-paster
 */

const response = {
  view: {
    type: "list",
    options: [
      {
        title: "Heart",
        action: {
          type: "paste",
          value: "❤️",
        },
        icon: "❤️"
      },
      {
        title: "Star",
        action: {
          type: "paste",
          value: "⭐️",
        },
        icon: "⭐️"
      },
      {
        title: "Lightning",
        action: {
          type: "paste",
          value: "️⚡️",
        },
        icon: "⚡️"
      },
    ],
  },
};

console.log(JSON.stringify(response));
