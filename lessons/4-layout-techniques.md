# Different Layout Techniques
(...and when to use them)

## Harnessing display modes
- (as discussed in previous lesson!)
- can be used to organise elements next to each other or above one another
- possible to create column-based layouts using just `inline-block` - *see below*

**Downsides:**
- quite wordy:
    ```css
    .col {
        display: inline-block;
        width: 50%;
        margin-right: -4px;  /* offset gaps added by browser */
    }
    ```
- browser auto-inserts gaps between `inline`/`inline-block` elements, requiring manual workarounds
- have to manage % manually as we add more columns to the design
- adjusting the number of columns based on available screen size can only be done by defining more rules via media queries

## Floats
- `float`ing an element takes it out of the normal page flow, placing it either to the left or right of a container, and causing other elements to flow around it
- commonly used for wrapping text around images in an article or blog post, or floating content columns within a container

**Downsides:**
- if a block element contains floated children, its height will collapse (unless they have a fixed height value set, which isn't practical in responsive design), causing elements to overlap where they shouldn't...

    ![diagram illustrating float issue](https://github.com/minkaotic/front-end-notes/raw/master/img/float-collapsing-height.png)

- this is commonly addressed with a "clearfix" (like below or similar), but this is noisy

    ```css
    [parent selector]::after {
    content: "";
    display: table;
    clear: both;
    }
    ```

## CSS Positioning
Another way to take elements out of the default page flow and position them on the page, is by manipulating the CSS [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property.

This is a massive subject beyond the scope of this workshop, but recommended further reading:
- [Quick summary of it all](https://github.com/minkaotic/front-end-notes/blob/master/notes/CSS-Layout-Techniques.md#css-positioning)
- [More in-depth article about positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning) (MDN)
- [4-part guide to understanding z-index and the stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index) (MDN)


## Flexbox
> 🔥 Neither display mode manipulation, nor floats, nor absolute positioning were originally designed to handle the layout demands of today’s complex responsive websites.

By contrast, **flexbox is a collection of CSS properties that were specifically designed to meet this challenge**, i.e.:

- lay out a collection of items in one direction or another
- control the dimensions of the items
- and control the spacing between items

## CSS Grid
Is a two-dimensional grid-based layout system. Like flexbox, it was specifically developed as a layout system to replace the flawed approaches of the past.

It has [slightly different use cases](https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/) than flexbox, so can be seen as an alternative to it - although they can also be used together!


**[>> On to the next step!](/lessons/5-flexbox-basics.md)**