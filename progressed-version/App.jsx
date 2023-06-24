import './App.scss'

function App() {
  return (
    <>
      <div className="header">
        <h1 className="header__title">devfinder</h1>
        <span>LIGHT</span>
      </div>
      <div className="search-bar">
        <input></input>
        <button className="search-bar__button">
          Search
        </button>
      </div>
      <div className="search-result-card">
        <img className="search-result-card__logo" src="/avatar.png" />
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
              <p>Repos</p>
              <p>8</p>
            </div>
            <div>
              <p>Followers</p>
              <p>3938</p>
            </div>
            <div>
              <p>Following</p>
              <p>9</p>
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
  )
}

export default App
