import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>devfinder</h1>
      <p>LIGHT</p>
      <div className="search-bar">
        <button className="search-bar_button" onClick="">
          Search
        </button>
      </div>
      <div className="search-result">
        <div className="search-result_logo">
          <img src="data:image/png;base64,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"></img>
        </div>
        <div className="search-result_details">
          <div className="search-result_details-top">
            <div className="search-result_details-user">
              <p>The Octocat</p>
              <p>@octocat</p>
              <p>This profile has no bio</p>
            </div>
            <div>
              <p>Joined 25 Jan 2011</p>
            </div>
          </div>
          <div className="search-result_stats">
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
          <div className="search-result_bottom">
            <p>San Francisco</p>
            <p>Not Available</p>
            <p>https://github.blog</p>
            <p>@github</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
