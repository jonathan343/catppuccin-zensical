---
icon: lucide/download
---

# Installation

`catppuccin-zensical` is a Python package that registers itself as a Zensical
theme. Install it in the same environment as Zensical and the theme becomes
available under the name `catppuccin`.

## With pip

```sh
pip install catppuccin-zensical
```

## With uv

```sh
uv add catppuccin-zensical
```

For projects that build docs in CI but don't otherwise depend on the package
at runtime, install it as a docs-only dependency:

```toml title="pyproject.toml"
[dependency-groups]
docs = [
    "zensical",
    "catppuccin-zensical",
]
```

Then sync only that group when building:

```sh
uv sync --group docs
```

## Pinning versions

Until the theme reaches `1.0`, minor releases may include small visual
changes. Pin to a known-good version if you need stable output:

```sh
pip install "catppuccin-zensical~=0.1"
```

## Local development

If you're hacking on the theme itself, install it as an editable package
from a checkout:

```sh
git clone https://github.com/jonathan343/catppuccin-zensical
cd catppuccin-zensical
uv pip install -e .
```

Live-reload the included demo site while you work:

```sh
zensical serve
```

## Verifying the install

After installing, check that Zensical can see the theme:

```sh
zensical build --clean
```

If the build succeeds and the rendered site uses Catppuccin colors, you're
all set. If you see Material's default purple instead, double-check that
`name = "catppuccin"` is set under `[project.theme]` in `zensical.toml`.
