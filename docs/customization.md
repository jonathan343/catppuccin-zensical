---
icon: lucide/wand-sparkles
---

# Customization

Beyond picking a flavor, the theme inherits Zensical's full
customization surface. The options below are the ones most users want to
reach for first.

## Logo and icon

Replace the default rainbow cat logo with your own logo:

```toml title="zensical.toml"
[project.theme]
name = "catppuccin"
logo = "assets/logo.png"
```

Or pick any [Lucide], [Material], [Simple Icons], or [FontAwesome] glyph
without shipping an image:

```toml title="zensical.toml"
[project.theme.icon]
logo = "lucide/book-open"
```

  [Lucide]: https://lucide.dev/icons/
  [Material]: https://pictogrammers.com/library/mdi/
  [Simple Icons]: https://simpleicons.org/
  [FontAwesome]: https://fontawesome.com/icons

## Fonts

By default, fonts come from Google Fonts. Override the text and code fonts
independently:

```toml title="zensical.toml"
[project.theme.font]
text = "Inter"
code = "JetBrains Mono"
```

Both Inter and JetBrains Mono pair well with Catppuccin and are what the
official palette guide uses.

## Footer signature

The theme adds a small "Styled with catppuccin-zensical" line to the footer
that links to the live documentation. To opt out:

```toml title="zensical.toml"
[project.extra.catppuccin]
signature = false
```

!!! quote "Why we ship it on by default"

    The signature is a low-key way to help others discover the theme. If
    it doesn't fit your project, the opt-out above turns it off — no
    questions asked.

## Social links

Add icons in the footer that link to your project's repo, package page,
or social accounts:

```toml title="zensical.toml"
[[project.extra.social]]
icon = "fontawesome/brands/github"
link = "https://github.com/your/repo"

[[project.extra.social]]
icon = "fontawesome/brands/python"
link = "https://pypi.org/project/your-package/"
```

## Advanced: overriding palette colors

The theme exposes every Catppuccin color as a CSS variable, so you can
fine-tune the look without forking. Add a stylesheet to your `docs_dir`:

```css title="docs/assets/extra.css"
[data-md-color-scheme="catppuccin-mocha"] {
  /* Use Mauve as the link color instead of the default Blue */
  --md-typeset-a-color: var(--ctp-mauve);
}
```

Then register it in `zensical.toml`:

```toml title="zensical.toml"
[project]
extra_css = ["assets/extra.css"]
```

Available variables include `--ctp-rosewater`, `--ctp-flamingo`, `--ctp-pink`,
`--ctp-mauve`, `--ctp-red`, `--ctp-maroon`, `--ctp-peach`, `--ctp-yellow`,
`--ctp-green`, `--ctp-teal`, `--ctp-sky`, `--ctp-sapphire`, `--ctp-blue`,
`--ctp-lavender`, plus the full set of `--ctp-text`, `--ctp-subtext`,
`--ctp-overlay`, `--ctp-surface`, `--ctp-base`, `--ctp-mantle`, and
`--ctp-crust` neutrals.
