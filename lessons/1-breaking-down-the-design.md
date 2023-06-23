# Breaking Down The Design

Based on which groups of items need to be layed out *together*, break down the design into its nested elements. Also consider how the design should change on smaller screens when making these decisions!

![image](/assets/breaking_down_the_design.png)

This breakdown will define the overall structure of our markup.


## Task!
💪 Create the basic markdown of the GitHub User Search app!

**[>> Check solution](/lessons/1-breaking-down-the-design__solution.md)**


## BEM
The ["Block Element Modifier"](https://getbem.com/) approach is a naming convention for classes, that makes it easy to create modular, well organised stylesheets. It should reflect how our design breaks down into smaller pieces, and will be useful when we start adding styles in the next step!

The convention is to structure class names like this: `block__element--modifier`, e.g.:

```html
<div class="user-card">
    <img class="user-card__avatar" src="..." alt="avatar" />
    <div class="user-card__details">
        ...
        <span class="user-card__stats"></span>
        <span class="user-card__stats--highlighted"></span>
    </div>
</div>
```

Its benefits are particularly evident when using a CSS preprocessor (like Sass):

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
- Examples: `--disabled`, `--highlighted`, `--checked`, `--big`, `--invalid`


**[>> On to the next step!](/lessons/2-display-modes.md)**