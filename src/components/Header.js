import React from 'react';
import './scss/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const getSubtext = language => {
    return language === 'ENG' ?
        'Software engineer, sports enthusiast and lover of tech' :
        'IT programmerare, sportentusiast och älskare av tech'
}

const Header = ({ language, changeLanguage }) => (
    <header className="Header row">
        <div className="Header__language-selector">
            <p 
                onClick={() => changeLanguage('ENG')} 
                className={"Header__language-selector__lang Header__language-selector__lang--eng " + (language === 'ENG' ? 'underline' : '')}
                data-lang="ENG"
            >
                ENG
            </p>
            <p 
                onClick={() => changeLanguage('SWE')}
                className={"Header__language-selector__lang Header__language-selector__lang--swe " + (language === 'SWE' ? 'underline' : '')}
                data-lang="SWE"
            >
                SWE
            </p>
        </div>
        <div className="col-12 col-md-6 col-lg-5">
            <h1 className="Header__title">Ali Martin</h1>
            <p className="Header__subtext">{getSubtext(language)}</p>
            <div className="d-none d-md-block">
                <a className="Header__icon-container" href="#AboutMe">
                    <FontAwesomeIcon icon='user-circle' size="3x" color="#666666"/>
                    <span> {language === 'ENG' ? 'About Me' : 'Om Mig'}</span>
                </a>
                <a className="Header__icon-container" href="#Skills">
                    <FontAwesomeIcon icon='atom' size="3x" color="#666666"/>
                    <span> {language === 'ENG' ? 'Skills' : 'Kompetens'}</span>
                </a>
                <a className="Header__icon-container" href="#Contact">
                    <FontAwesomeIcon icon='at' size="3x" color="#666666"/>
                    <span> {language === 'ENG' ? 'Contact' : 'Kontakta'}</span>
                </a>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-7">
            <img src={require('./../IMG_1152_no_label.jpg')} alt="home page" className="Header__image"></img>
        </div>
    </header>
)

export default Header;