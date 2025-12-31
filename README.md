# SuperDocs Default Template

The official default template for [SuperDocs](https://github.com/DevRohit06/superdocs).

## Usage

This template is automatically used by SuperDocs:

```bash
# Uses this template by default
superdocs dev -i ./your-docs

# Or explicitly specify it
superdocs dev -i ./your-docs --template github:DevRohit06/superdocs-default-template
```

## Customization

### Fork & Modify

1. Fork this repository
2. Make your changes
3. Use your fork:

```bash
superdocs dev -i ./docs --template github:YOUR_USERNAME/superdocs-default-template
```

### Local Development

1. Clone this repo
2. Modify the template
3. Use it locally:

```bash
superdocs dev -i ./docs --template ./path/to/this/folder
```

## Structure

```
├── astro.config.mjs     # Astro configuration
├── package.json         # Dependencies
├── src/
│   ├── components/      # UI components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route templates
│   ├── styles/          # CSS styles
│   └── utils/           # Utility functions
└── public/              # Static assets
```

## Creating Your Own Template

1. Copy this template as a starting point
2. Modify components, layouts, and styles
3. Push to GitHub
4. Use with: `--template github:you/your-template`

### Requirements

A valid SuperDocs template must have:
- `astro.config.mjs`
- `package.json` with Astro dependencies
- `src/pages/` directory for routing

## License

MIT
