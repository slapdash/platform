console.log(JSON.stringify({
  "view": {
    "type": "form",
    "title": "Order Drink",
    "submitLabel": "Order",
    "fields": [
      {
        "type": "text",
        "id": "name",
        "label": "Your Name"
      },
      {
        "type": "select",
        "id": "drink",
        "label": "Drink",
        "options": [
          "Cappuccino",
          "Latte",
          "Green Tea",
          "Coke"
        ]
      }
    ]
  }
}));
