console.log(
  JSON.stringify({
    view: {
      type: "list",
      options: [
        {
          title: "Paste Heart",
          action: {
            type: "paste",
            value: "❤️",
          },
          icon: "❤️",
        },
      ],
    },
  })
);
