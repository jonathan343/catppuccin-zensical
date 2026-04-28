# Catppuccin Zensical

A [Zensical](https://zensical.org/) theme extension based on the
[Catppuccin palette](https://catppuccin.com/palette/).

This package registers an installable theme named `catppuccin`. It extends
Zensical's default Material-compatible theme and adds Catppuccin color schemes
for Latte, Frappe, Macchiato, and Mocha.

The default configuration follows the user's system preference with Latte for
light mode and Mocha for dark mode.

## Usage

Install the package in the same environment as Zensical:

```sh
pip install catppuccin-zensical
```

For local development from this checkout:

```sh
uv pip install -e .
```

Then set the theme name in `zensical.toml`:

```toml
[project.theme]
name = "catppuccin"
```

Or in `mkdocs.yml`:

```yaml
theme:
  name: catppuccin
```

To choose a specific flavor, override the palette:

```yaml
theme:
  name: catppuccin
  palette:
    scheme: catppuccin-macchiato
    primary: custom
    accent: custom
```

Available schemes:

- `catppuccin-latte`
- `catppuccin-frappe`
- `catppuccin-macchiato`
- `catppuccin-mocha`
