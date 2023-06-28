# Understanding Display Modes

The [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) mode of a HTML element significantly affects *how we go about* positioning it!

The most common values are:
```css
display: block;
display: inline;
display: inline-block;
display: none;  // remove element from document flow
display: flex;  // we'll discuss this one later
display: grid;  // not part of this workshop
```

### All HTML elements have a default

| Block            | Inline     | Inline-block  |
|------------------|------------|---------------|
| `h1`, `h2`, etc. | `span`     | `img`         |
| `p`              | `a`        |               |
| `div`            | plain text |               |
| `ol`/`ul`/`li`   |            |               |

- `block` elements span the entire width of their container, forcing all subsequent elements to the next line
- `inline` elements  only span the width of their contents, allowing any inline level element to flow up next to it on the same line
  - 🔥 ***NB:** width and height properties, or top/bottom margin or padding settings won't be applied to inline elements*; only left/right margins and padding will work.
- `inline-block` allows elements to flow next to it, but allows to set width/height and top/bottom margins and padding are respected.

> 💡 **Changing the default display mode of an element with CSS is better than using a less semantically appropriate element to achieve a visual result!**

### Centring items
- To centre inline elements inside an element, use `text-align: center;`
- To horizontally centre a block element, use `margin: auto;` combined with setting a `width`!

## Task!
💪 **Write the CSS for the top level layout structure**

Take a look at the design: we can see that all 3 of our high level `<div>`s are supposed to have the same width and be centred on the page:

![image](/assets/wrapper_illustration.png)

1. Rather than repeating the rules for each `<div>`, apply them to a wrapper element (using a layout wrapper like this is a common technique in styling a page!) - in this exercise, we can use our app's `#root` div for this purpose. Use it to centre the content & give it a width!

1. Lets give the `search-bar` and `search-result-card` a different background colour: `#1F2A48`, and top and bottom margins.

1. Work out the appropriate display mode to change in order to:
    - Get the 'devfinder' headline and 'LIGHT'-mode switch to display side by side (bonus points for moving the 'LIGHT'-mode switch to the right as well) 
    - Get the `user-image` and `user-details` to display side by side

1. Set a sensible top and bottom margin for our `#root` wrapper.

**[>> Check solution](/lessons/2-display-modes_solution.md)**

**[>> On to the next step!](/lessons/3-css-box-model.md)**