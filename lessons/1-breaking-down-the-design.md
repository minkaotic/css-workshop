# Breaking down the design

Based on which groups of items need to be layed out *together*, break down the design into its nested elements:

![image](https://github.com/minkaotic/css-workshop/assets/6144523/da18dfcb-4fe9-4151-be54-5389fd201f34)

This will define the overall structure of our markup.

## BEM
The ["Block Element Modifier"](https://getbem.com/) approach is a naming convention for classes, that makes it easy to create modular, well organised stylesheets.

Its benefits are particularly evident when using a CSS preprocessor (like Sass).

The convention is to structure class names like this: `block__element--modifier`, e.g.:

```html
<div class="user-card">
    <img class="user-card__avatar" src="..." alt="avatar" />
    <div class="user-card__stats">
        ...
        <span class="user-card__stats"></span>
        <span class="user-card__stats--highlighted"></span>
    </div>
</div>
```

```scss
.user-card {
  background-color: pink;

  &__avatar {
    max-width: 200px;
  }

  &__stats {
    font-size: 1rem;

    &--highlighted {
      font-weight: bold;
    }
  }
}
```

### Block
- A standalone entity that is meaningful on its own.
- Examples: `header`, `container`, `user-card`, `menu`, `input`

### Element
- A part of a block that has no standalone meaning and is semantically tied to its block.
- Examples: `menu item`, `list item`, `checkbox caption`, `header title`

### Modifier
- A flag on a block or element. Use them to control variations of appearance or behavior.
- Examples: `disabled`, `highlighted`, `checked`, `fixed`, `size big`, `color yellow`


## Task!
💪 Create the basic markdown of the GitHub User Search app!

[>> Check solution](/lessons/1-breaking-down-the-design__solution.md)

[>> On to the next step!](/lessons/2-display-modes.md)