---
icon: lucide/settings-2
---

# Configuration

Once the theme is installed, you choose how flavors map to your visitors'
experience. There are three common setups: a single flavor, system
preference, or all four with a toggle.

## Available schemes

The theme ships four color schemes — one for each Catppuccin flavor:

| Scheme                   | Mode  | Default for           |
| ------------------------ | ----- | --------------------- |
| `catppuccin-latte`       | light | system light mode     |
| `catppuccin-frappe`      | dark  | —                     |
| `catppuccin-macchiato`   | dark  | —                     |
| `catppuccin-mocha`       | dark  | system dark mode      |

## Default: follow system preference

If you set `name = "catppuccin"` and provide no `palette`, the theme
automatically uses **Latte** in light mode and **Mocha** in dark mode,
following the visitor's OS setting.

```toml title="zensical.toml"
[project.theme]
name = "catppuccin"
```

A small toggle in the header lets visitors override their system preference.

## A single flavor

To lock the entire site to one flavor, define a single palette entry:

```toml title="zensical.toml"
[[project.theme.palette]]
scheme = "catppuccin-macchiato"
primary = "custom"
accent = "custom"
```

!!! note "About `primary` and `accent`"

    Setting these to `"custom"` tells the theme to use the colors defined
    by the Catppuccin scheme rather than Material's named colors. Omit
    these only if you're intentionally mixing palettes.

## Light + dark with a toggle

The most common setup — light mode in Latte, dark in Mocha, with a
toggle to switch between them:

```toml title="zensical.toml"
[[project.theme.palette]]
scheme = "catppuccin-latte"
primary = "custom"
accent = "custom"
toggle.icon = "lucide/sun"
toggle.name = "Switch to dark mode"

[[project.theme.palette]]
scheme = "catppuccin-mocha"
primary = "custom"
accent = "custom"
toggle.icon = "lucide/moon"
toggle.name = "Switch to light mode"
```

## All four flavors (like this site)

To let visitors cycle through every flavor, list all four palettes. Each
toggle's `name` should describe what clicking it does next:

```toml title="zensical.toml"
[[project.theme.palette]]
scheme = "catppuccin-mocha"
primary = "custom"
accent = "custom"
toggle.icon = "lucide/moon"
toggle.name = "Switch to Macchiato"

[[project.theme.palette]]
scheme = "catppuccin-macchiato"
primary = "custom"
accent = "custom"
toggle.icon = "lucide/cloud-moon"
toggle.name = "Switch to Frappé"

[[project.theme.palette]]
scheme = "catppuccin-frappe"
primary = "custom"
accent = "custom"
toggle.icon = "lucide/cloud-sun"
toggle.name = "Switch to Latte"

[[project.theme.palette]]
scheme = "catppuccin-latte"
primary = "custom"
accent = "custom"
toggle.icon = "lucide/sun"
toggle.name = "Switch to Mocha"
```

## MkDocs equivalent

If you're using MkDocs rather than Zensical, the same options apply under
`theme:` in `mkdocs.yml`:

```yaml title="mkdocs.yml"
theme:
  name: catppuccin
  palette:
    - scheme: catppuccin-latte
      primary: custom
      accent: custom
      toggle:
        icon: lucide/sun
        name: Switch to dark mode
    - scheme: catppuccin-mocha
      primary: custom
      accent: custom
      toggle:
        icon: lucide/moon
        name: Switch to light mode
```
