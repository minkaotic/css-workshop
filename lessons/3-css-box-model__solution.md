# The CSS Box Model - Solution

Your CSS should look something like this:

```css
// changed
#root {
  width: 80vw;
  max-width: 1000px;
  margin: 40px auto;
}

// as before
.header__title {
  display: inline;
  margin-right: 600px;
}

// changed
.search-bar,
.search-result-card {
  background-color: #1F2A48;
  margin: 20px 0;
  border-radius: 10px;
}

// new
.search-bar {
  padding: 5px;
}

// new
.search-result-card {
  padding: 40px;

  .user-image {
    border-radius: 50%;
    margin-right: 40px;
  }

  // as before but moved
  .user-details {
    display: inline-block;
  }
}
```

And your page should now look as below:

![image](/assets/box_model_solution.png)


**[>> Back to lesson](/lessons/3-css-box-model.md)**

**[>> On to the next step!](/lessons/4-layout-techniques.md)**