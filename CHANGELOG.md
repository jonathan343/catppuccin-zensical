# Changelog

## v0.3.0

### Breaking Changes
* Drop MkDocs support and focus exclusively on Zensical. Remove MkDocs configuration examples and footer compatibility logic. The minimum supported Zensical version remains 0.0.37. ([#29](https://github.com/jonathan343/catppuccin-zensical/pull/29))

### Enhancements
* Add Open Graph and X card metadata with a shared Catppuccin preview image for documentation links. ([#33](https://github.com/jonathan343/catppuccin-zensical/pull/33))

### Bug fixes
* Fix README showcase images and the license link on PyPI by using absolute URLs. ([#30](https://github.com/jonathan343/catppuccin-zensical/pull/30))
* Fix the documentation homepage license link and point page source and edit links to the main branch. ([#31](https://github.com/jonathan343/catppuccin-zensical/pull/31))
* Fix showcase MathJax startup errors and render equations reliably on direct loads and instant navigation. ([#32](https://github.com/jonathan343/catppuccin-zensical/pull/32))

## v0.2.3

### Bug fixes
* Fix Catppuccin theme handling for light/dark image fragments, preventing duplicate themed images from rendering. ([#25](https://github.com/jonathan343/catppuccin-zensical/pull/25))

## v0.2.2

### Bug fixes
* Show the Material for MkDocs generator link when catppuccin is used from MkDocs while preserving Zensical output for Zensical builds. ([#22](https://github.com/jonathan343/catppuccin-zensical/pull/22))

## v0.2.1

### Enhancements
* Polish the header search button with Catppuccin palette colors.

## v0.2.0

### Features
* Add a 'Styled with catppuccin-zensical' signature to the site footer that links back to the catppuccin-zensical repo. Opt out by setting `extra.catppuccin.signature = false` ([#3](https://github.com/jonathan343/catppuccin-zensical/pull/3)).

### Enhancements
* Add a docs page that renders the repository changelog ([#12](https://github.com/jonathan343/catppuccin-zensical/pull/12)).
* Soften the header and footer dividers across Catppuccin palettes ([#13](https://github.com/jonathan343/catppuccin-zensical/pull/13)).
* Polish highlighted text and table borders with Catppuccin palette colors ([#14](https://github.com/jonathan343/catppuccin-zensical/pull/14)).
* Align footer page navigation with the Catppuccin body layer while keeping the footer meta section distinct ([#15](https://github.com/jonathan343/catppuccin-zensical/pull/15)).

### Bug fixes
* Theme Zensical's search modal with Catppuccin colors ([#10](https://github.com/jonathan343/catppuccin-zensical/pull/10)).

## v0.1.0

### Features
* Introduce Catppuccin Zensical, a Python package for Zensical that registers an installable `catppuccin` theme, adds Latte, Frappe, Macchiato, and Mocha Catppuccin color schemes to Zensical's default theme, and follows the user's system preference by default.
