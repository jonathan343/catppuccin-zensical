---
icon: lucide/palette
---

# Catppuccin for Zensical

[![Version](https://img.shields.io/pypi/v/catppuccin-zensical.svg)](https://pypi.org/project/catppuccin-zensical/)
[![Supported Python Versions](https://img.shields.io/pypi/pyversions/catppuccin-zensical.svg)](https://pypi.org/project/catppuccin-zensical/)
[![Documentation](https://img.shields.io/github/deployments/jonathan343/catppuccin-zensical/github-pages?label=docs)](https://jonathan343.github.io/catppuccin-zensical/)
[![License](https://img.shields.io/github/license/jonathan343/catppuccin-zensical)](https://github.com/jonathan343/catppuccin-zensical/blob/main/LICENSE)

A soothing pastel theme for [Zensical] documentation sites, built on the
[Catppuccin] palette. It registers an installable `catppuccin` theme that
extends Zensical's default theme, adding all four official
flavors.

  [Zensical]: https://zensical.org/
  [Catppuccin]: https://catppuccin.com/

!!! tip "Try the toggle"

    Use the palette toggle in the header to cycle through **Mocha**,
    **Macchiato**, **Frappé**, and **Latte**. The whole site re-themes
    instantly — including code blocks, admonitions, and diagrams.

## The four flavors

<div class="grid cards" markdown>

-   :material-coffee-to-go: __Mocha__

    ---

    The deepest, most saturated dark scheme. The default first impression
    for this site.

-   :material-coffee-to-go-outline: __Macchiato__

    ---

    Slightly more vibrant than Frappé, with a touch more contrast.

-   :material-coffee: __Frappé__

    ---

    A muted, cool-toned dark variant. Comfortable for low-light reading.

-   :material-coffee-outline: __Latte__

    ---

    Warm, light, easy on the eyes during the day. The light scheme.

</div>

## Quickstart

Install the package alongside Zensical:

```sh
pip install catppuccin-zensical
```

Point your project at the theme:

```toml title="zensical.toml"
[project.theme]
name = "catppuccin"
```

That's it. By default the theme follows the visitor's system preference —
Latte for light mode, Mocha for dark — with no further configuration needed.

## Where to next

- **[Installation](installation.md)** — pip, uv, and version pinning.
- **[Configuration](configuration.md)** — pick a single flavor, system
  preference, or all four with a toggle (like this site).
- **[Customization](customization.md)** — accents, fonts, and the footer
  signature opt-out.
- **[Showcase](showcase.md)** — admonitions, code, diagrams, and more,
  styled in every flavor.
