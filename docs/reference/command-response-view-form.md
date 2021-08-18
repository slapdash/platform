# Form View

Form View allows to request some data from the user. When the form is submitted, the command will receive all values in the respective parameters.

The delivery method depends on the type of your command. For [Local Commands](../command-bar-101/local-commands.md), the form data is sent using stdin, and for [Cloud Commands](../command-bar-101/cloud-commands.md), it's sent using a GET or POST request.

## Form

Property `CommandResponse.view` of type `Form` allows to show a custom form in the Command Bar.

* **type:** `"form"`
* **fields:** An array of [FormField](command-response-view-form.md#formfield) objects. By default, each field will be displayed in a separate row. If you want some fields to be displayed in the same row – put them in a nested array, the available space will be evenly split between them. See examples below for more details.
* **title:** Optional. Title of the form shown above it.
* **submitLabel:** Optional. Text label for the submit button.
* **cancelLabel:** Optional. Text label for the cancel button.
* **method:** Optional. `"get"` or `"post"` \(default\). HTTP request method that will be used to submit the form. This is only relevant to [Cloud Commands](../command-bar-101/cloud-commands.md).

{% tabs %}
{% tab title="Simple form to order a drink" %}
```javascript
{
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
}
```
{% endtab %}

{% tab title="Multiple fields on the same row" %}
```javascript
{
  "view": {
    "type": "form",
    "fields": [
      [
        {
          "type": "text",
          "id": "firstName",
          "label": "First Name"
        },
        {
          "type": "text",
          "id": "lastName",
          "label": "Last Name"
        },
        {
          "type": "toggle",
          "id": "subscribe",
          "label": "Subscribe to Newsletter"
        }
      ],
      {
        "type": "textarea",
        "id": "notes",
        "label": "Notes"
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

## FormField

Property `CommandResponse.view.fields` defines an array of fields in the Form View. There are multiple different form field types that allow creating sophisticated forms.

```typescript
type FormField = TextField | ToggleField | SelectField | DateField;
```

### TextField

A plain-text input, similar to the HTML `<input/>` tag, defines a field where a user can enter free-form data.

* **type:** `"text"`
* **id:** ID of the field. Must be unique in the Form view.
* **label:** Label for the field.
* **required:** Optional, `true` or `false`. Whether this field is required.
* **defaultValue:** Optional. The initial text value for this field.
* **error:** Optional. If set, shows an error message under the field.
* **helpText:** Optional. A Markdown text which will be displayed under the field.
* **placeholder:** Optional. Placeholder for this field, displayed inside the field in gray.
* **multiline:** Optional, `true` or `false`. Whether the field should be displayed as a large textarea.

{% tabs %}
{% tab title="Single line text field" %}
```javascript
{
  "view": {
    "type": "form",
    "fields": [
      {
        "type": "text",
        "id": "name",
        "label": "Name",
        "required": true,
        "defaultValue": "Steve",
        "placeholder": "Tell us your name"
      }
    ]
  }
}
```
{% endtab %}

{% tab title="Large textarea field" %}
```typescript
{
  "view": {
    "type": "form",
    "fields": [
      {
        "type": "text",
        "id": "notes",
        "label": "Your Notes",
        "placeholder": "What is on your mind?",
        "multiline": true
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

### ToggleField

Defines a field that allows the user to enable or disable something.

* **type:** `"toggle"`
* **id:** ID of the field. Must be unique in the Form View.
* **label:** Label for the field.
* **required:** Optional, `true` or `false`. Whether this field is required.
* **defaultValue:** Optional, `true` or `false`. The default value for this field.
* **error:** Optional. If set, shows an error message under the field.
* **helpText:** Optional. A Markdown text which will be displayed under the field.

{% tabs %}
{% tab title="Simple toggle field" %}
```typescript
{
  "view": {
    "type": "form",
    "fields": [
      {
        "type": "toggle",
        "id": "subscribe",
        "label": "Subscribe to Newsletter",
        "defaultValue": true
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

### DateField

Defines a field which lets the user easily select a date from a calendar style UI.

* **type:** `"date"`
* **id:** ID of the field. Must be unique in the Form View.
* **label:** Label for the field.
* **required:** Optional, `true` or `false`. Whether this field is required.
* **defaultValue:** Optional. Default value for this field as a Date string.
* **error:** Optional. If set, shows an error message under the field.
* **helpText:** Optional. A Markdown text which will be displayed under the field.
* **timeSelect:** Optional, `true` or `false` \(default\). Whether the field allows selecting the time too.

{% tabs %}
{% tab title="Simple date field" %}
```typescript
{
  "view": {
    "type": "form",
    "title": "When is your birthday?",
    "fields": [
      {
        "type": "date",
        "id": "dateOfBirth",
        "label": "Your Date of Birth"
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

### SelectField

Defines a field that allows the user to select one or multiple options.

* **type:** `"select"`
* **id:** ID of the field. Must be unique in the Form View.
* **label:** Label for the field.
* **options:** A list of strings or [SelectOption](command-response-view-form.md#selectoption) objects that a user can select from.
* **required:** Optional, `true` or `false`. Whether this field is required.
* **defaultValue:** Optional. Default value for this field. If the field allows selecting multiple values \(see `multiple`\), an array of strings can be provided.
* **error:** Optional. If set, shows an error message under the field.
* **helpText:** Optional. A Markdown text which will be displayed under the field.
* **multiple:** Optional, `true` or `false`. Whether the field allow selecting single or multiple options.
* **placeholder:** Optional. Placeholder of the field, shown inside in gray.

#### SelectOption

Allows to customize options for [SelectField](command-response-view-form.md#selectfield).

* **label:** Label for the option.
* **value:** Value of the option.

{% tabs %}
{% tab title="Select field that allows to pick only one option" %}
```typescript
{
  "view": {
    "type": "form",
    "fields": [
      {
        "type": "select",
        "id": "country",
        "label": "Country of Residence",
        "options": [
          "Ukraine",
          "Spain",
          "Germany"
        ]
      }
    ]
  }
}
```
{% endtab %}

{% tab title="Select field with custom options" %}
```typescript
{
  "view": {
    "type": "form",
    "fields": [
      {
        "type": "select",
        "id": "country",
        "label": "Country of Residence",
        "options": [
          {
            "value": "ukr",
            "label": "Ukraine"
          },
          {
            "value": "s",
            "label": "Spain"
          },
          {
            "value": "g",
            "label": "Germany"
          }
        ]
      }
    ]
  }
}
```
{% endtab %}

{% tab title="Select field that allows to pick multiple options" %}
```typescript
{
  "view": {
    "type": "form",
    "fields": [
      {
        "type": "select",
        "id": "country",
        "label": "Where do you want to travel to?",
        "multiple": true,
        "placeholder": "Select Countries",
        "options": [
          "Ukraine",
          "Spain",
          "Germany"
        ]
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

