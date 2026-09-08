---
icon: lucide/sparkles
---

# Showcase

Every component on this page renders through the Catppuccin theme. Toggle
the palette in the header to see how each flavor handles color, contrast,
and emphasis.

## Admonitions

Admonitions pick up the flavor's accent colors. Each callout type maps to
a semantically meaningful Catppuccin color — green for success, peach for
warnings, red for danger.

!!! note

    A **note** uses the flavor's blue. It's the all-purpose callout for
    pointing out helpful information.

!!! tip

    A **tip** uses green — perfect for highlighting the recommended path.

!!! warning

    A **warning** uses peach. Use it when the reader could shoot
    themselves in the foot.

!!! danger

    **Danger** uses red. Reserve it for genuinely destructive operations.

??? info "Click to expand"

    Collapsible admonitions use the same colors but hide their content
    until clicked. Great for FAQs or long aside material that would
    otherwise break the flow of a page.

## Code blocks

Syntax highlighting in code blocks uses the flavor's full palette — the
same colors you'd find in a Catppuccin-themed editor.

```python title="example.py" hl_lines="4 5"
from dataclasses import dataclass

@dataclass
class Coffee:
    flavor: str
    strength: int = 5  # (1)!

    def brew(self) -> str:
        return f"Brewing a {self.flavor} at strength {self.strength}"

print(Coffee("Macchiato").brew())
```

1.  Annotations look like this — pinned to a specific line and revealed
    on click.

Inline code like `#!python Coffee("Mocha").brew()` is highlighted too.

## Content tabs

```` markdown
=== "Python"

    ```python
    print("Hello from Python!")
    ```

=== "Rust"

    ```rust
    println!("Hello from Rust!");
    ```

=== "TypeScript"

    ```ts
    console.log("Hello from TypeScript!");
    ```
````

Renders as:

=== "Python"

    ```python
    print("Hello from Python!")
    ```

=== "Rust"

    ```rust
    println!("Hello from Rust!");
    ```

=== "TypeScript"

    ```ts
    console.log("Hello from TypeScript!");
    ```

## Diagrams

Mermaid diagrams adopt the flavor's surface and accent colors:

``` mermaid
graph LR
  A[Mocha] --> B[Macchiato]
  B --> C[Frappé]
  C --> D[Latte]
  D --> A
```

## Tables

| Flavor     | Mode  | Base color  | Best for                |
| ---------- | ----- | ----------- | ----------------------- |
| Latte      | Light | `#eff1f5`   | Daytime reading         |
| Frappé     | Dark  | `#303446`   | Muted, low-contrast UI  |
| Macchiato  | Dark  | `#24273a`   | Balanced dark mode      |
| Mocha      | Dark  | `#1e1e2e`   | Deep, immersive dark    |

## Formatting

- ==Highlighted== text uses the flavor's yellow.
- ^^Inserted^^ text is underlined.
- ~~Strikethrough~~ for deletions.
- Subscripts: H~2~O. Superscripts: E=mc^2^.
- Keyboard shortcuts: ++ctrl+alt+del++.

## Task lists

- [x] Install `catppuccin-zensical`
- [x] Set `name = "catppuccin"`
- [x] Toggle through all four flavors
- [ ] Customize the palette to your taste

## Icons and emoji

Icons inline with text :sparkles: pick up the flavor's text color.
Emoji like :rocket: and :tada: render as Twemoji and stay consistent
across schemes.

## Footnotes

Hover this footnote[^1] to see the tooltip — it inherits the flavor's
surface colors with no extra configuration.

[^1]: Footnotes are styled to feel like a soft inline note rather than a
    jump to the bottom of the page.

## Math

$$
\cos x = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k)!} x^{2k}
$$

!!! warning "MathJax setup"

    This demo enables MathJax in `zensical.toml` with
    `docs/javascripts/mathjax.js`. The theme itself doesn't enable it.
    See the [Zensical math docs] to configure it for your own site.

  [Zensical math docs]: https://zensical.org/docs/authoring/math/
