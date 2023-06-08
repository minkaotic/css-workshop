# Understanding Display Modes

...and how they affect positioning of elements


- TODO: explain `display` property
- All HTML elements have a default, for most elements this is `block` or `inline`:

| Block            | Inline     | Inline-block  |
|------------------|------------|---------------|
| `h1`, `h2`, etc. | `span`     | `img`         |
| `p`              | `a`        |               |
| `div`            |            |               |
| `ol`/`ul`/`li`   |            |               |

- `block` elements span the entire width of their container, forcing all subsequent elements to the next line
- `inline` elements  only span the width of their contents, allowing any inline level element to flow up next to it on the same line.
  - ***NB:** width and height properties, or top/bottom margin or padding settings won't be applied to inline elements*; only left/right margins and padding will work.
- `inline-block`'s main two differences vs. `inline` is that it allows to set a width and height on the element, and that the top and bottom margins/paddings are respected.
- need different ways to centre it
- can simply change the display mode if desired! (Better than using a less semantically appropriate element to achieve the desired result) 

-> demonstrate these differences!

✨ Display mode can be leveraged as an alternative to using floats: "[The Secret To Designing Website Layouts Without CSS Floats]( https://www.webdesignerdepot.com/2014/07/the-secret-to-designing-website-layouts-without-css-floats/)" ✨


-> Common techniques for aligning each of these
-> How to use a layout wrapper