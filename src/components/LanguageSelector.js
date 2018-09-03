import React from 'react';

const LanguageSelector = ({ language, changeLanguage }) => (
	<div className="Header__language-selector">
		<p 
			onClick={() => changeLanguage('ENG')} 
			className={"Header__language-selector__lang Header__language-selector__lang--eng " + (language === 'ENG' ? 'underline' : '')}
		>
			ENG
		</p>
		<p 
			onClick={() => changeLanguage('SWE')}
			className={"Header__language-selector__lang Header__language-selector__lang--swe " + (language === 'SWE' ? 'underline' : '')}
		>
			SWE
		</p>
	</div>
);

export default LanguageSelector;