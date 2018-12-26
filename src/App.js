import React, { Component } from 'react';
import { GitHub, HackerRank, Facebook, StackOverflow, LinkedIn , Instagram , GooglePlus, Youtube , Yahoo , Twitch , Twitter, Skype  } from './lib/index';

class App extends Component {
  render() {
    return (
      <>
        <Instagram link="google.com"  />
        <Facebook link="google.com"  />
        <GooglePlus link="google.com"  />
        <Youtube link="google.com"  />
        <Twitch link="google.com"  />
        <Twitter link="google.com"  />
        <Skype link="google.com" />
        <Yahoo link="google.com"  />
        <HackerRank username="nateshmbhat1" rank={4900} category="Algorithm Practice" />
        <GitHub username="nateshmbhat" />
        <StackOverflow userid="6665568" />
        <LinkedIn username="nateshmbhat" organization="SIT" role="Student" />
      </>
    );
  }
}

export default App;