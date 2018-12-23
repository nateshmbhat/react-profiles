import React, { Component } from 'react';
import { GitHub, HackerRank, StackOverflow, LinkedIn , Instagram , GooglePlus, Youtube , Yahoo , Twitch , Twitter, Skype  } from './lib/index';

class App extends Component {
  render() {
    return (
      <>
        <Instagram link="google.com" tooltip='Show Profile' />
        <GooglePlus link="google.com" tooltip='Click me' />
        <Youtube link="google.com" tooltip='Click me' />
        <Twitch link="google.com" tooltip='Click me' />
        <Twitter link="google.com" tooltip='Click me' />
        <Skype link="google.com" tooltip='Click me' />
        <Yahoo link="google.com" tooltip='Click me' />
        <HackerRank username="nateshmbhat1" tooltip={'Visit site'} rank={4900} category="Algorithm Practice" />
        <GitHub username="nateshmbhat" />
        <StackOverflow userid="6665568" />
        <LinkedIn username="nateshmbhat" organization="SIT" role="Student" />
      </>
    );
  }
}

export default App;
