import React from 'react';

const LanguageSelector = ({ language, changeLanguage }) => (
	<div className="Header__language-selector">
		<p 
			onClick={() => changeLanguage('ENG')} 
			className={"Header__language-selector__lang Header__language-selector__lang--eng "}
		>
			{language === 'ENG' ? <strong>ENG</strong> : 'ENG'}
		</p>
		<p 
			onClick={() => changeLanguage('SWE')}
			className={"Header__language-selector__lang Header__language-selector__lang--swe "}
		>
			{language === 'SWE' ? <strong>SWE</strong> : 'SWE'}
		</p>
	</div>
);

export default LanguageSelector;