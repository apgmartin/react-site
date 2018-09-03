import React from 'react';
import LanguageSelector from './LanguageSelector';
import './scss/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const getSubtext = language => {
    return language === 'ENG' ?
        'Software engineer, sports enthusiast and lover of tech' :
        'IT programmerare, sportentusiast och älskare av tech'
}

const Header = ({ language, changeLanguage, setIconHover, unsetIconHover, iconHover }) => (
    <header className="Header row">
        <LanguageSelector language={language} changeLanguage={changeLanguage}/>
        <div className="col-12 col-md-6 col-lg-5">
            <h1 className="Header__title">Ali Martin</h1>
            <p className="Header__subtext">{getSubtext(language)}</p>
            <div className="d-none d-md-flex row">
                <a
                    className="Header__icon-container col-4 col-lg-6 offset-lg-3"
                    href="#AboutMe"
                    onMouseEnter={() => setIconHover('user-circle')}
                    onMouseLeave={() => unsetIconHover()}
                >
                    <FontAwesomeIcon icon='user-circle' size="3x" color={iconHover === 'user-circle' ? '#FF6700' : '#333333'}/>
                    <p className="Header__icon-text"> {language === 'ENG' ? 'About Me' : 'Om Mig'}</p>
                </a>
                <a
                    className="Header__icon-container col-4 col-lg-6 offset-lg-3"
                    href="#Skills"
                    onMouseEnter={() => setIconHover('atom')}
                    onMouseLeave={() => unsetIconHover()}
                >
                    <FontAwesomeIcon icon='atom' size="3x" color={iconHover === 'atom' ? '#FF6700' : '#333333'}/>
                    <p className="Header__icon-text"> {language === 'ENG' ? 'Skills' : 'Kompetens'}</p>
                </a>
                <a
                    className="Header__icon-container col-4 col-lg-6 offset-lg-3"
                    href="#Contact"
                    onMouseEnter={() => setIconHover('at')}
                    onMouseLeave={() => unsetIconHover()}
                >
                    <FontAwesomeIcon icon='at' size="3x" color={iconHover === 'at' ? '#FF6700' : '#333333'}/>
                    <p className="Header__icon-text"> {language === 'ENG' ? 'Contact' : 'Kontakta'}</p>
                </a>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-7">
            {/* <img src={require('./../IMG_1152_no_label.jpg')} alt="home page" className="Header__image"></img> */}
            <img src={require('./../IMG_1152.jpg')} alt="home page" className="Header__image"></img>
        </div>
    </header>
)

export default Header;