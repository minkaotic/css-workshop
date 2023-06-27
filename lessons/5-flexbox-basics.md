# Flexbox Basics

## Key concepts

- Think about elements in terms of **flex containers** (sets context for flexbox layout; contains flex items) and **flex items** (the actual items to be layed out)
- Flexbox follows two axes that determine the layout direction of flex items: **main axis** (default direction of left-to-right) and **cross axis** (default direction of top-to-bottom).

***To define a flex container***, set the `display` property of the element to `flex`:
```css
.container {
  display: flex;
}
```
❗This also changes the display *behaviour* of the immediate children: they will behave like flex items, instead of their original display mode


### Flex container properties
- **Direction:** By default, flex items are laid out horizontally on the main axis from left to right (`flex-direction: row;`). Change this by setting the **`flex-direction`** property to `column`, `column-reverse` or `row-reverse`.

- **Automatically wrap based on available space:** With the **`flex-wrap`** property, you can control whether the flex container is a single-line (`flex-wrap: nowrap;`; default) or multi-line layout (`flex-wrap: wrap;`) - in the latter case, allowing items to wrap onto multiple lines as needed.

- **Distribute items along *main axis*:**
  - The [**`justify-content`**](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#justify-content) property will distribute the space that's available after the container's padding and items' margins are accounted for. It defaults to `flex-start`, which places items towards the start of each flex main axis. By contrast, `justify-content: flex-end` will place them towards the end of the main axis; `justify-content: center;` will center the items on the main axis, and `justify-content: space-between;` and `..space-around;` will *evenly* distribute the children.
  - If you want to distribute some items to the left and some to the right, with space in between, you can use `margin-right: auto;` on the *flex item* after which the dynamic gap should be inserted:
  ![Flex and margin: auto](https://github.com/minkaotic/front-end-notes/raw/master/img/flex-and-margin-auto.png)
  - This also works well in a flex `column` layout, when wanting to align an item (such as a CTA) to the bottom of the container.

- **Distribute items along *cross axis*:**
  - The [**`align-items`**](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#align-items) property determines where a flex container's items are aligned along the cross axis. By default, flex items stretch to fill the flex container's height (`align-items: stretch;`), but common alternative values are `center` and `flex-start`.
  - **NB:** an equivalent to `align-items` that works on the level of individual item properties is [`align-self`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#align-self).

### Flex item properties
Flexbox has many useful properties at the item level to help with:
- changing the order of items without changing the html
- sizing items across the main axis, and determining how much of a share of space items should get relative to their siblings
- https://github.com/minkaotic/front-end-notes/blob/master/notes/CSS-Layout-Techniques.md#flex-item-properties

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
**Item size across main axis:**
  - The **`flex-grow`** property determines how much of the available space inside the flex container an item should take up. (By default, flex items do not take up the full space inside of a container, since the default value of `flex-grow` is `0`.)
    - Assigning a `flex-grow` value of `1` to *all* flex items expands them evenly to take up the full space of a row/column.
    - The higher the `flex-grow` value, the more an item grows relative to the other items.
    - It works on a basis of *distributing unused space amongst the flex items*, therefore `flex-grow: 2;` will not (always) make the item twice as wide as its `flex-grow: 1;` siblings (see [this great article](https://css-tricks.com/flex-grow-is-weird/) for a fuller explanation / demos)
    - `flex-grow` allows making layouts that keep the same width-ratio regardless of browser size

If no explicit `width` (or `flex-basis`) is set for a flex item, the browser will use the content size as the starting point. If both of them are set, then `flex-basis` will take precedence.

When you set `flex-basis` of an item to `0`, the browser will regard its content-size as 0. This can be used if you want to size items not based on “distributing remaining space” with `flex-grow`, but if you genuinely want them to be sized proportionally regardless of the content.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



If you only use 2 flexbox resources for the rest of your life, make it these:
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) (features a cheat sheet with great visuals) 
- [Flexbox Zombies](https://mastery.games/post/flexboxzombies2/) (interactive game that teaches flexbox and builds muscle memory)

## Task!
💪 **Use flexbox to improve our page layout**

1. Improve the logic for laying out the header by making `.header` a flexbox container, and setting `justify-content` and `align-items` on it to position the two elements nicely along the main- and cross axes.

1. 

**[>> Check solution](/lessons/3-css-box-model__solution.md)**