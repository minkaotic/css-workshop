# The CSS Box Model - Solution

Your CSS should look something like this:

```scss
$card-blue: #1F2A48;
$card-border-radius: 10px;

body {
  font-family: 'Space Mono', monospace, sans-serif;
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background-color: #141C2F;
  color: whitesmoke;
}

#root {
  width: 80vw;
  max-width: 1000px;
  margin: 40px auto;
}

.header__title {
  display: inline;
  margin-right: 600px;
}

.search-bar {
  background-color: $card-blue;
  border-radius: $card-border-radius;
  margin: 20px 0;
  padding: 5px;
}

.search-result-card {
  background-color: $card-blue;
  border-radius: $card-border-radius;
  margin-bottom: 40px;
  padding: 40px;
}

.user-image {
  border-radius: 50%;
  margin-right: 40px;
  max-width: 150px;
}

.user-details {
  display: inline-block;
}
```

And your page should now look like this:

![image](/assets/box_model_preview.png)


**[>> Back to lesson](/lessons/3-css-box-model.md)**

**[>> On to the next step!](/lessons/4-layout-techniques.md)**