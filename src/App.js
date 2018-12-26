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
        <HackerRank username="nateshmbhat1" rank={4900} category="Algorithm Practice"
        competitions="13"
        contestRating="1500"
        gold ="1" 
        silver="2"
        bronze="3"
         />
        <GitHub username="nateshmbhat" />
        <StackOverflow userid="6665568" />
        <LinkedIn username="nateshmbhat" organization="Google" role="Developer" />
      </>
    );
  }
}

export default App;