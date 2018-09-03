import React from 'react';
import HeaderContainer from '../containers/Header';
import ContentBlock from './ContentBlock';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Contact from './Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAtom, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import './scss/App.scss';

library.add(faUserCircle, faAtom, faAt)

let App = () => (
  <div className="App container">
    <HeaderContainer />
    <ContentBlock>
      <AboutMe />
    </ContentBlock>
    <ContentBlock>
      <Skills />
    </ContentBlock>
    <ContentBlock>
      <Contact />
    </ContentBlock>
  </div>
)

export default App;
