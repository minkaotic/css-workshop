# The CSS Box Model

![CSS box model diagram](https://github.com/minkaotic/front-end-notes/blob/master/img/box_model.png?raw=true)

- `padding` = gap from border of the container to the *inner contents*
- `margin` = gap from border of the container to the other elements *around it*

> 🔥 **NOTE: `width` generally applies only to the *content* of the box, i.e. not including its padding and border!** (To flip this behaviour around, use `box-sizing: border-box;` - this dynamically subtracts the borders and paddings from the width/height properties we set, esp. useful when defining dimensions relative to parent containers etc.)

### Common units for dimensions
Values provided in `px` are absolute, but there are also a number of **useful relative units**, which are key for responsive design:
- `em`: relative to parent's pixel size; and default to 16px at root
- `rem`: relative to root elemen's pixel size, thus avoiding compounding issues
- `%`: always relative to parent container
- `vh`/`vw` relative to viewport (=screen); common use case: filling the page even when there is little content by setting `  min-height: 100vh;`


width vs max-width etc.


## Task!
💪 **Finetune the layout of the high-level elements**

  1. Lets give the `search-bar` and `search-result-card` sensible padding, margins and a border radius.

  1. Set the `#root` width as a `%` or `vw` value so its somewhat responsive. Set a `max-width` that it shouldn't cross beyond on large screens.


**[>> Check solution](/lessons/3-css-box-model__solution.md)**

**[>> On to the next step!](/lessons/4-layout-techniques.md)**