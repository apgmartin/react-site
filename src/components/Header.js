import React, { Component } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {

    getSubtext() {
        return this.props.currentLanguage === 'eng' ?
            'Software engineer, sports enthusiast and lover of tech' :
            'IT programmerare, sportentusiast och älskare av tech'
    }

    changeLanguage(evt) {
        console.log(evt.target.dataset.lang);
    }

    render() {
        return (
            <header className="Header row">
                <div className="Header__language-selector">
                    {/* <img src="" className="Header__language-selector__lang Header__language-selector__lang--eng" /> */}
                    {/* <img src="" className="Header__language-selector__lang Header__language-selector__lang--swe" /> */}
                    <p 
                        onClick={this.props.changeLanguage} 
                        className={"Header__language-selector__lang Header__language-selector__lang--eng " + (this.props.currentLanguage === 'eng' ? 'underline' : '')}
                        data-lang="eng">
                        ENG
                    </p>
                    <p 
                        onClick={this.props.changeLanguage}
                        className={"Header__language-selector__lang Header__language-selector__lang--swe " + (this.props.currentLanguage === 'swe' ? 'underline' : '')}
                        data-lang="swe">
                        SWE
                    </p>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h1 className="Header__title">Ali Martin</h1>
                    <p className="Header__subtext">{this.getSubtext()}</p>
                    <div className="d-none d-md-block">
                        <a className="Header__icon-container" href="#AboutMe">
                            <FontAwesomeIcon icon='user-circle' size="3x" color="#666"/>
                            <span> {this.props.currentLanguage === 'eng' ? 'About Me' : 'Om Mig'}</span>
                        </a>
                        <a className="Header__icon-container" href="#Skills">
                            <FontAwesomeIcon icon='atom' size="3x" color="#666"/>
                            <span> {this.props.currentLanguage === 'eng' ? 'Skills' : 'Kompetens'}</span>
                        </a>
                        <a className="Header__icon-container" href="#Contact">
                            <FontAwesomeIcon icon='at' size="3x" color="#666"/>
                            <span> {this.props.currentLanguage === 'eng' ? 'Contact' : 'Kontakta'}</span>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                    <img src={require('./../IMG_1152.jpg')} alt="home page" className="Header__image"></img>
                </div>
            </header>
        );
    }
}

export default Header;