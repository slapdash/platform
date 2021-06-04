const response = {
  view: {
    type: "list",
    options: [
      {
        title: "Open Slapdash",
        action: {
          type: "open-url",
          url: "https://slapdash.com"
        }
      },
      {
        title: "Copy Heart Emoji",
        action: {
          type: "copy",
          value: "❤️"
        }
      }
    ]
  }
};

console.log(JSON.stringify(response));
