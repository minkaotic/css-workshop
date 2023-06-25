# Understanding Display Modes - Solution

Your CSS should look something like this:

```css
#root {
  width: 800px;
  margin: 40px auto;
}

// we'll revisit a better approach
// in the next stages of the workshop!
.header__title {
  display: inline;
  margin-right: 600px;
}

.search-bar,
.search-result-card {
  background-color: #1F2A48;
  margin: 20px 0;
}

.user-details {
  display: inline-block;
}
```

And your page should now look as below:

![image](/assets/display_modes_solution.png)

**[>> Back to lesson](/lessons/2-display-modes.md)**

**[>> On to the next step!](/lessons/3-css-box-model.md)**