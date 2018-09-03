export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

export const languages = {
    ENG: 'ENG',
    SWE: 'SWE'
}

  export function changeLanguage(language) {
    return { type: CHANGE_LANGUAGE, language }
  }