import React from "react";
import HeadComponent from '../components/Head';

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> Orion's Pay to Play Arcade  🎮</p>
          <p className="sub-text">Why game for free, when you can pay me money?</p>
        </header>

        <main>
        <iframe src="https://giphy.com/embed/l2Sqg1iEWObH3oz2E" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/southparkgifs-l2Sqg1iEWObH3oz2E">via GIPHY</a></p>
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
