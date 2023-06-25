# Breaking Down The Design - Solution

Our basic markup should look something like this:

```html
<>
    <div className="header">
        <h1 className="header__title">devfinder</h1>
        <span>LIGHT</span>
    </div>
    <div className="search-bar">
        <input />
        <button className="search-bar__button">
            Search
        </button>
    </div>
    <div className="search-result-card">
        <img className="user-image" src="/avatar.png" />
        <div className="user-details">
            <div className="user-details__headline">
                <div className="user-details__name">
                    <span>The Octocat</span>
                    <span>@octocat</span>
                </div>
                <p className="user-details__join-date">Joined 25 Jan 2011</p>
            </div>
            <p className="user-details__bio">This profile has no bio</p>
            <div className="user-details__stats">
                <div>
                    <span>Repos</span>
                    <span>8</span>
                </div>
                <div>
                    <span>Followers</span>
                    <span>3938</span>
                </div>
                <div>
                    <span>Following</span>
                    <span>9</span>
                </div>
            </div>
            <div className="user-details__whereabouts">
                <span>San Francisco</span>
                <span>Not Available</span>
                <span>https://github.blog</span>
                <span>@github</span>
            </div>
        </div>
    </div>
</>
```

**[>> Back to lesson](/lessons/1-breaking-down-the-design.md)**