import React, { Component } from 'react';
import {Grid } from '@material-ui/core'
import { GitHub, HackerRank, Facebook, StackOverflow, LinkedIn, Instagram, GooglePlus, Youtube, Yahoo, Twitch, Twitter, Skype } from './lib/index';

class App extends Component {
  render() {
    return (
      <>
        <Instagram link="https://www.instagram.com/nateshmbhat/" />

        <Facebook link="https://www.facebook.com/profile.php?id=100014731453711" />

        <GooglePlus link="" />
        <Youtube link="" />
        <Twitch link="" />
        <Twitter link="" />
        <Skype link="#" />
        <Yahoo link="" tooltip="My tooltip" />

        <p>
          <h5>GitHub</h5>
          <GitHub username="nateshmbhat" />
        </p>


        <p>
          <h5>LinkedIn</h5>
          <LinkedIn username="nateshmbhat" organization="Google" role="Developer" />

        </p>

        <p>
          <h5>StackOverflow</h5>

          <StackOverflow userid="6665568" />
        </p>

        <p>
          <h5>HackerRank</h5>
          <HackerRank username="nateshmbhat1" rank={4900} category="Algorithm Practice"
            competitions="13"
            contestRating="1500"
            gold="1"
            silver="2"
            bronze="3"
          />
        </p>

      </>
    );
  }
}

export default App;