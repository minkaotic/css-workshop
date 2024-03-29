# The CSS Box Model

![CSS box model diagram](https://github.com/minkaotic/front-end-notes/blob/master/img/box_model.png?raw=true)

- `padding` = gap from border of the container to the *inner contents*
- `margin` = gap from border of the container to the other elements *around it*

### Box sizing
🔥 **Generally, `width` applies only to the *content* of the box, i.e. not including its padding and border!**

To flip this behaviour around, use `box-sizing: border-box;`!

This dynamically subtracts the borders and paddings from the width/height properties we set, esp. useful when defining dimensions relative to parent containers etc.

### Common units for dimensions
Values provided in `px` are absolute, but there are also a number of **useful relative units**, which are key for responsive design:
- `rem` - relative to root element's pixel size, default 1rem = 16px
- `%` - always relative to parent container
- `vh`/`vw` - relative to viewport (=screen)
    - common use case: filling the page even when there is little content by setting `min-height: 100vh;`

> 💡 **TIP:** Using `%` for border radius allows creating elliptical corners, and can be used to make an element appear completely rounded.

### Max- and min-width/height
- `max-width` is useful for preventing elements from becoming too large to look good on big screens
- a common approach for responsive layouts is to use a relative *width* in combination with an absolute *max-width*, e.g.: `width: 100%; max-width: 600px;`
- order of precendence if the values conflict with each other:
    - `min-height` > `max-height` > `height`
    - `min-height` > `max-width` > `width`

### The `calc()` function
- does the maths for you! Different types of units can be mixed (%, vh, px, rem etc.)
- e.g. `calc(100% - 180px)` to make an element flexibly take up all the space next to a fixed-width element

Can be useful in conjunction with SASS variables to express intent:

```scss
$button-width: 200px;

.button {
    width: $button-width;
}

.content {
    width: calc(100% - $button-width);
}
```

### Why margins collapse
The element size calculated by the browser only takes into account content, padding and border, *but not margin.* If there is no content, padding, or border area to interrupt two vertically touching margins, [the margins collapse to the largest of the two margin values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing).
- Collapsed margins can even end up outside the parent!
- **Only vertical margins are affected by this** - horizontal margins do not collapse


## Task!
💪 **Finetune the layout of the high-level elements**
> 💡 BONUS: Use SASS variables to express intent and avoid repeating selectors uneccesarily.

1. Let's give the `search-bar` and `search-result-card` sensible padding and a border radius.

1. Make the user image appear round (hint: use `border-radius`), limit its size to 150px and give it some right margin.

1. Set the `#root` width as a `%` or `vw` value so its somewhat responsive. Set a `max-width` that it shouldn't cross beyond on large screens.

**[>> Check solution](/lessons/3-css-box-model__solution.md)**

**[>> On to the next step!](/lessons/4-layout-techniques.md)**