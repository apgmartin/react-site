import React, { Component } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            language: props.language
        }
    }

    render() {
        return (
            <header className="Header row">
                <div className="Header__language-selector">
                    {/* <img src="" className="Header__language-selector__lang Header__language-selector__lang--eng" /> */}
                    {/* <img src="" className="Header__language-selector__lang Header__language-selector__lang--swe" /> */}
                    <p className="Header__language-selector__lang Header__language-selector__lang--eng">ENG</p>
                    <p className="Header__language-selector__lang Header__language-selector__lang--swe">SWE</p>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h1 className="Header__title">Ali Martin</h1>
                    <p className="Header__subtext">Software engineer, sports enthusiast and foodie</p>
                    <div className="d-none d-md-block">
                        <a className="Header__icon-container" href="#AboutMe">
                            <FontAwesomeIcon icon='user-circle' size="3x" color="#666"/>
                            <span> About Me</span>
                        </a>
                        <a className="Header__icon-container" href="#Skills">
                            <FontAwesomeIcon icon='atom' size="3x" color="#666"/>
                            <span> Skills</span>
                        </a>
                        <a className="Header__icon-container" href="#Contact">
                            <FontAwesomeIcon icon='at' size="3x" color="#666"/>
                            <span> Contact</span>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                    <img src={require('./../IMG_1152.jpg')} alt="home page" className="Header__image"></img>
                </div>
            </header>
        )
    }
}

// const Header = () => (
//     <header className="Header row">
//         <div className="Header__language-selector">
//             {/* <img src="" className="Header__language-selector__lang Header__language-selector__lang--eng" /> */}
//             {/* <img src="" className="Header__language-selector__lang Header__language-selector__lang--swe" /> */}
//             <p className="Header__language-selector__lang Header__language-selector__lang--eng">ENG</p>
//             <p className="Header__language-selector__lang Header__language-selector__lang--swe">SWE</p>
//         </div>
//         <div className="col-12 col-md-6 col-lg-5">
//             <h1 className="Header__title">Ali Martin</h1>
//             <p className="Header__subtext">Software engineer, sports enthusiast and foodie</p>
//             <div className="d-none d-md-block">
//                 <a className="Header__icon-container" href="#AboutMe">
//                     <FontAwesomeIcon icon='user-circle' size="3x" color="#666"/>
//                     <span> About Me</span>
//                 </a>
//                 <a className="Header__icon-container" href="#Skills">
//                     <FontAwesomeIcon icon='atom' size="3x" color="#666"/>
//                     <span> Skills</span>
//                 </a>
//                 <a className="Header__icon-container" href="#Contact">
//                     <FontAwesomeIcon icon='at' size="3x" color="#666"/>
//                     <span> Contact</span>
//                 </a>
//             </div>
//         </div>
//         <div className="col-12 col-md-6 col-lg-7">
//             <img src={require('./../IMG_1152.jpg')} alt="home page" className="Header__image"></img>
//         </div>
//     </header>
// );

export default Header;