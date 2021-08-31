# Icon

The icon can be provided in different ways to help you fine-tune its appearance.

```typescript
type Icon =
  | string
  | {
      light: string;
      dark: string;
    }
  | {
      monochrome: string;
    };
```

Slapdash supports loading icons over `http://` , `https://`, using[ Data URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) or providing the raw icon content inline.

```typescript
// Emoji can be provided inline. All Unicode Emoticons are supported.
icon: "🧛‍♂️"

// Icons accessible over HTTP/HTTPS can be provided as an absolute URL.
icon: "https://slapdash.com/favicon.ico"

// SVGs can be provided inline.
icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none" stroke="#000" stroke-width="2" ><circle cx="12" cy="12" r="10"/></svg>'

// Icons can be encoded as Data URLs and provided inline. The following
// formats are supported: image/png, image/jpeg, image/gif, image/svg+xml.
icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKBJREFUeNpiYBjpgBFd4P///wJAaj0QO9DEQiAg5ID9tLIcmwMYsDgABhqoaTHMUHRxpsGYBv5TGqTIZsDkYWLo6gc8BEYdMOqAUQeMOoAqDgAWcgZAfB9EU63SIAGALH8PZb+H8v+jVz64KiOK6wIg+ADEArj4hOoCajiAqMpqtDIadcCoA0YdQIoDDtCqQ4KtBY3NAYG0csQowAYAAgwAgSqbls5coPEAAAAASUVORK5CYII="
```

### Customize

By default, Slapdash will display icons "as is" but you can choose to render different icons depending on the selected theme:

```typescript
icon: {
  light: "🌞",
  dark: "🌔"
}
```

Or, you can tell Slapdash to automatically adjust the icon color based on the current theme:

```typescript
icon: {
  monochrome: "https://example.com/icon.svg"
}
```

In this case, Slapdash will replace all non-transparent pixels of the icon with the appropriate color from the selected theme.

