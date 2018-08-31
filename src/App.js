import React, { Component } from 'react';
import Header from './components/Header';
import ContentBlock from './components/ContentBlock';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAtom, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

library.add(faUserCircle, faAtom, faAt)
const aboutMe = <AboutMe />
const skills = <Skills />
const contact = <Contact />

class App extends Component {
  constructor() {
    super();

    this.state = {
      language: 'eng'
    }
  }

  changeLanguage(evt) {
    evt.preventDefault();
    this.setState({
      language: evt.target.dataset.lang
    })
  }

  render() {
    return (
      <div className="App container">
        <Header changeLanguage={this.changeLanguage.bind(this)} currentLanguage={this.state.language}/>
        <ContentBlock content={aboutMe} />
        <ContentBlock content={skills} />
        <ContentBlock content={contact} />
      </div>
    );
  }
}

export default App;
