export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const SET_ICON_HOVER = 'SET_ICON_HOVER'
export const UNSET_ICON_HOVER = 'UNSET_ICON_HOVER'

export const languages = {
    ENG: 'ENG',
    SWE: 'SWE'
}

  export function changeLanguage(language) {
    return { type: CHANGE_LANGUAGE, language }
  }

  export function setIconHover(icon) {
    return { type: SET_ICON_HOVER, icon }
  }

  export function unsetIconHover() {
    return { type: UNSET_ICON_HOVER }
  }