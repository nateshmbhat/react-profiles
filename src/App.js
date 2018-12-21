import React, { Component } from 'react';
import Github from './lib/Github' ;
import Stk from './lib/stackoveflow' ;

class App extends Component {
  render() {
    return (
     <>
      <Github username="nateshmbhat" />
      <Stk userid="6665568"/>
     </> 
    );
  }
}

export default App;
